// 导入 React 依赖。
import React, {useCallback, useMemo, useState} from 'react'
// 导入 Slate 编辑器工厂。
import { createEditor, Editor, Transforms, Text } from 'slate'

// 导入 Slate 组件和 React 插件。
import { Slate, Editable, withReact } from 'slate-react'
import CustomEditor from './CustomEditor'
import ToolBox from "./ToolBox";
import {Box, Container, Divider, Paper} from "@mui/material";




export default function MyEditor() {
    // 创建一个不会在渲染中变化的 Slate 编辑器对象。
    const editor = useMemo(() => withReact(createEditor()), [])

    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem('content')) || [
            {
                type: 'paragraph',
                children: [{ text: 'A line of text in a paragraph.' }],
            },
        ]
    )

    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    // 定义一个叶子渲染函数，使用 `useCallback` 记住。
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

    return (
        <Slate
            editor={editor}
            value={value}
            onChange={value => {
                setValue(value);
                // Save the value to Local Storage.
                const content = JSON.stringify(value)
                localStorage.setItem('content', content)
            }}
        >
            <ToolBox editor={editor}/>
            <Divider/>
            <br/>
            <Container >
                <Paper elevation={1} >
                    <Box p={3}>
                        <Editable
                            renderElement={renderElement}
                            // 传入 `renderLeaf` 函数。
                            renderLeaf={renderLeaf}
                            onKeyDown={event => {
                                if (!event.ctrlKey) {
                                    return
                                }

                                switch (event.key) {
                                    case '`': {
                                        event.preventDefault()
                                        CustomEditor.toggleCodeBlock(editor)
                                        break
                                    }

                                    case 'b': {
                                        event.preventDefault()
                                        CustomEditor.toggleMark(editor, 'bold')
                                        break
                                    }
                                }
                            }}
                        />
                    </Box>
                </Paper>
            </Container>
        </Slate>
    )
};

const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.code) {
        children = <code>{children}</code>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    if (leaf.strikethrough) {
        children = <span style={{textDecoration:'line-through'}}>{children}</span>;
    }
    if(leaf.superscript){
        children = <sup>{children}</sup>
    }
    if(leaf.subscript){
        children = <sub>{children}</sub>
    }
    if(leaf.color){
        children = <span style={{color:leaf.color}}>{children}</span>
    }
    if(leaf.bgColor){
        children = <span style={{backgroundColor:leaf.bgColor}}>{children}</span>
    }
    if(leaf.fontSize){
        // const size = sizeMap[leaf.fontSize]
        // children = <span style={{fontSize:size}}>{children}</span>
    }
    if(leaf.fontFamily){
        // const family = fontFamilyMap[leaf.fontFamily]
        // children = <span style={{fontFamily:family}}>{children}</span>
    }

    return <span {...attributes}>{children}</span>;
}

const CodeElement = props => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}

const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}
