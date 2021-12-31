import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {

        let selected = e.target.files[0];
        // if file type matches acceptable files defined in types
        if (selected && types.includes(selected.type)) {
            // set state
            setFile(selected)
            // clear error if selected not image file
            setError(null)
        } else {
            // reset state on fail
            setFile(null)
            // display error in div
            setError('Please select and image file (png or jpeg)')
        }

    }

    return (
        <form>
            <label>
                <input
                    type="file"
                    onChange={changeHandler}
                />
                <span>+</span>
            </label>
            <div className='output'>
                {/* if error is present in state. Display error message */}
                {error && <div className='error'>{error}</div>}
                {/* if file is present, display file name and display progress bar */}
                {file && <div className='display-img'>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}

            </div>
        </form>
    )
}

export default UploadForm