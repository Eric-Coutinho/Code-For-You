import React, { useState } from "react";

import styles from './textEditor.module.scss';

import Editor from "@monaco-editor/react";

export function TextEditor({ onChange, language, defaultValue }) {
    const [value, setValue] = useState("");

    const handleEditorChange = (value) => {
        setValue(value);
    };
    return (
        <div className={styles.outsideBox}>
            <div className={styles.insideBox}>
                <Editor
                    language={language || "javascript"}
                    value={value}
                    defaultValue={defaultValue || ""}
                    onChange={handleEditorChange}
                />
            </div>
        </div>
    )
}