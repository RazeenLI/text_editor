// 导入 React 依赖。
import React, {useCallback, useMemo, useState} from 'react'
// 导入 Slate 编辑器工厂。
import { createEditor, Editor, Transforms, Text } from 'slate'

// 导入 Slate 组件和 React 插件。
import { Slate, Editable, withReact } from 'slate-react'
import CustomEditor from './CustomEditor'
import ToolBox from "./ToolBox";
import {MdOutlineFormatBold} from "react-icons/md";
import {Button} from "antd";




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
            <div>
                <ToolBox editor/>
                <Button
                    icon={<MdOutlineFormatBold size='1.5em' />}
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(editor)
                    }}
                />
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleBoldMark(editor)
                    }}
                >
                    Bold
                </button>
                <button
                    onMouseDown={event => {
                        event.preventDefault()
                        CustomEditor.toggleCodeBlock(editor)
                    }}
                >
                    Code Block
                </button>
            </div>
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
                            CustomEditor.toggleBoldMark(editor)
                            break
                        }
                    }
                }}
            />
        </Slate>
    )
};

const Leaf = props => {
    return (
        <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
            {props.children}
        </span>
    )
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
