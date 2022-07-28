import React from 'react';
import {
    MdOutlineFormatColorText,
    MdOutlineFormatBold,
    MdOutlineFormatItalic,
    MdOutlineFormatUnderlined,
    MdOutlineStrikethroughS,
    MdOutlineFormatAlignCenter,
    MdOutlineFormatAlignJustify,
    MdOutlineFormatAlignLeft,
    MdOutlineFormatAlignRight,
    MdOutlineFormatIndentDecrease,
    MdOutlineFormatIndentIncrease,
    MdOutlineFormatListBulleted,
    MdOutlineFormatListNumbered,
    MdOutlineFormatQuote,
    MdOutlineCode,
    MdOutlineLink,
    MdOutlineHorizontalRule,
    MdOutlineFunctions,
    MdOutlineClearAll,
    MdOutlineSubscript,
    MdOutlineSuperscript,
    MdOutlineFormatClear,
    MdOutlineEmojiEmotions
} from "react-icons/md";
import CustomEditor from "./CustomEditor";
import {useSlate} from "slate-react";
import {Button, IconButton, Tooltip} from "@mui/material";


export default function ToolBox(props) {
    const color = '#1890ff';
    const iconButtonSides = 40;

    return (
        <React.Fragment>
            <Tooltip placement="bottom" title={'字体颜色'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}
                >
                    <MdOutlineFormatColorText />
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'加粗'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}
                    onClick={event => {
                        event.preventDefault()
                        CustomEditor.toggleMark(props.editor, 'bold')
                    }}
                >
                    <MdOutlineFormatBold color={CustomEditor.isMarkActive(props.editor, 'bold') ? color : null}/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'斜体'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}
                    onClick={event => {
                        event.preventDefault()
                        CustomEditor.toggleMark(props.editor, 'italic')
                    }}
                >
                    <MdOutlineFormatItalic color={CustomEditor.isMarkActive(props.editor, 'italic') ? color : null}/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'下划线'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}
                    onClick={event => {
                        event.preventDefault()
                        CustomEditor.toggleMark(props.editor, 'underline')
                    }}
                >
                    <MdOutlineFormatUnderlined color={CustomEditor.isMarkActive(props.editor, 'underline') ? color : null}/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'删除线'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}
                    onClick={event => {
                        event.preventDefault()
                        CustomEditor.toggleMark(props.editor, 'strikethrough')
                    }}
                >
                    <MdOutlineStrikethroughS color={CustomEditor.isMarkActive(props.editor, 'strikethrough') ? color : null}/>
                </IconButton>
            </Tooltip>
            <br/>
            <Tooltip placement="bottom" title={'居左'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatAlignLeft/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'居中'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatAlignCenter />
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'居右'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatAlignRight/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'两端'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatAlignJustify/>
                </IconButton>
            </Tooltip>
            <br/>
            <Tooltip placement="bottom" title={'减少缩进'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatIndentDecrease/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'增加缩进'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatIndentIncrease/>
                </IconButton>
            </Tooltip>
            <br/>
            <Tooltip placement="bottom" title={'无序列表'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatListBulleted/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'有序列表'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatListNumbered/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'引用'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatQuote/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'代码'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}
                    onClick={event => {
                        event.preventDefault()
                        CustomEditor.toggleCodeBlock(props.editor)
                    }}
                >
                    <MdOutlineCode/>
                </IconButton>
            </Tooltip>
            <br/>
            <Tooltip placement="bottom" title={'下标'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineSubscript/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'上标'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineSuperscript/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'清除样式'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFormatClear/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'emoji'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineEmojiEmotions/>
                </IconButton>
            </Tooltip>
            <br/>
            <Tooltip placement="bottom" title={'连接'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineLink/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'水平线'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineHorizontalRule/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'公式'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineFunctions/>
                </IconButton>
            </Tooltip>
            <Tooltip placement="bottom" title={'清除内容'}>
                <IconButton
                    sx={{
                        width: iconButtonSides,
                        height: iconButtonSides,
                        borderRadius: 0,
                    }}>
                    <MdOutlineClearAll/>
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );
};