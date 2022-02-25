import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/theme/material.css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FaCopy, FaSave } from "react-icons/fa";

export default function EditorBox(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    const handleCopyCode = (content) => {
        navigator.clipboard.writeText(content);
    }

    const handleSaveCode = (content) => {
        console.log(content)
    }

    return (
        <div className='editor-container pt-2'>
            <div className='editor-title'>
                <div className="flex justify-between border-b-4 border-stone-200 pb-1 pl-8">
                    <h1 className="text-xl font-medium">{displayName}</h1>
                    <div>
                        <button className="p-2 hover:bg-stone-200 rounded-full mr-1" onClick={() => handleCopyCode(value)} disabled={!value}>
                            <FaCopy className="text-lg" />
                        </button>
                        <button className="p-2 hover:bg-stone-200 rounded-full" onClick={() => handleSaveCode(value)} disabled={!value}>
                            <FaSave className="text-lg" />
                        </button>
                    </div>
                </div>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className="code-mirror-wrapper"
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true
                    }}
                />
                <style jsx global>
                    {`
                        .CodeMirror {
                            font-family: monospace;
                            font-size: 16px;
                        }
                    `}
                </style>
            </div>
        </div>
    )
}