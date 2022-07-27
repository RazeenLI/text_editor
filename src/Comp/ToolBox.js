import { Button } from 'antd';
import React from 'react';
import {
    MdOutlineFormatColorText,
    MdOutlineFormatBold,
    MdOutlineFormatItalic,
    MdOutlineFormatUnderlined,
    MdOutlineFormatStrikethrough,
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


export default function ToolBox(props) {


    return (
        <React.Fragment>
            <Button icon={<MdOutlineFormatColorText size='1.5em' />} />
            <Button
                icon={<MdOutlineFormatBold size='1.5em' />}
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleBoldMark(props.editor)
                }}
            />
            <Button icon={<MdOutlineFormatItalic size='1.5em' />} />
            <Button icon={<MdOutlineFormatUnderlined size='1.5em' />} />
            <Button icon={<MdOutlineFormatStrikethrough size='1.5em' />} />
            <br/>
            <Button icon={<MdOutlineFormatAlignCenter size='1.5em' />} />
            <Button icon={<MdOutlineFormatAlignJustify size='1.5em' />} />
            <Button icon={<MdOutlineFormatAlignLeft size='1.5em' />} />
            <Button icon={<MdOutlineFormatAlignRight size='1.5em' />} />
            <br/>
            <Button icon={<MdOutlineFormatIndentDecrease size='1.5em' />} />
            <Button icon={<MdOutlineFormatIndentIncrease size='1.5em' />} />
            <br/>
            <Button icon={<MdOutlineFormatListBulleted size='1.5em' />} />
            <Button icon={<MdOutlineFormatListNumbered size='1.5em' />} />
            <Button icon={<MdOutlineFormatQuote size='1.5em' />} />
            <Button icon={<MdOutlineCode size='1.5em' />} />
            <br/>
            <Button icon={<MdOutlineSubscript size='1.5em' />} />
            <Button icon={<MdOutlineSuperscript size='1.5em' />} />
            <Button icon={<MdOutlineFormatClear size='1.5em' />} />
            <Button icon={<MdOutlineEmojiEmotions size='1.5em' />} />
            <br/>
            <Button icon={<MdOutlineLink size='1.5em' />} />
            <Button icon={<MdOutlineHorizontalRule size='1.5em' />} />
            <Button icon={<MdOutlineFunctions size='1.5em' />} />
            <Button icon={<MdOutlineClearAll size='1.5em' />} />
        </React.Fragment>
    );
};