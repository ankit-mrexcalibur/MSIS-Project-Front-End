import React, { useState } from 'react'
import './Home.css'
import logo from '../assets/logo.png'
import attached from '../assets/attached.png'
import LZString from 'lz-string'

function UploadFile() {
    // drag state
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);
    const [added, setAdded] = useState(false);
    const [textMode, setTextMode] = useState(false);
    const [transcription, setTranscription] = useState('');
    const [received, setReceived] = useState(false)
    const [response, setResponse] = useState('');
    // handle drag events
    const handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleTextButtonClick = (e) => {
        setTextMode(true);
    }

    const handleFileButtonClick = (e) => {
        setTextMode(false);
    }

    // triggers when file is dropped
    const handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        alert("File Attached");
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // at least one file has been dropped so do something
            // handleFiles(e.dataTransfer.files);
            setFile(e.dataTransfer.files[0]);
            setAdded(true);
        }
    };

    // triggers when file is selected with click
    const handleChange = (e) => {
        e.preventDefault();
        console.log("file added");
        alert("File Attached");
        if (e.target.files && e.target.files[0]) {
            // at least one file has been selected so do something
            // handleFiles(e.target.files);
            setFile(e.target.files[0]);
            setAdded(true);
        }
    };

    const fetchData = async (transcription) => {
        let url = 'http://127.0.0.1:5000/query?fileData='
        url += transcription
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setResponse(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (e) => {
            console.log(e.target.result);
            fetchData(e.target.result);
            setReceived(true);
        };
        reader.readAsText(file);
    }

    const handleSubmitText = function (e) {
        // console.log(transcription);
        if (transcription.length > 0) {
            fetchData(transcription);
            setReceived(true);
        }
        //API here

    }

    const handleChangeText = (e) => {
        setTranscription(e.target.value);
    }

    const tryAgainText = (e) => {
        setReceived(false);
        setTextMode(true);
    }

    const tryAgain = (e) => {
        setReceived(false);
        setTextMode(false);
    }

    if (!received && textMode) {
        return <div
            id='upload'
            style={{ display: "flex", flexDirection: "column" }}>
            <h2
                id="upload-heading"
                style={{ flex: 1 }}>
                Upload Files
            </h2>
            <div id='upload-text'>
                <form>
                    <textarea id='transcription' value={transcription} onChange={handleChangeText} cols='30' rows='7' style={{ borderRadius: '2rem', backgroundColor: "rgba(0,0,0,0)", borderColor: "rgb(43, 173, 236)", borderWidth: '2px', padding: '1em' }} />
                </form>
                <button className='upload-button' type='submit' onClick={handleSubmitText} style={{ marginTop: '1rem' }}>
                    <h4>Submit</h4>
                </button>
                <button className='upload-button' type='submit' onClick={handleFileButtonClick}>
                    <h4>File Mode</h4>
                </button>
            </div>

        </div>
    } else if (!received) {
        return (
            <div
                id='upload'
                style={{ display: "flex", flexDirection: "column" }}>
                <h2
                    id="upload-heading"
                    style={{ flex: 1 }}>
                    Upload Files
                </h2>
                <form
                    id="form-file-upload"
                    onDragEnter={handleDrag}>
                    <input
                        type="file"
                        id="input-file-upload"
                        multiple={false}
                        onChange={handleChange} />
                    <label
                        id="label-file-upload"
                        htmlFor="input-file-upload"
                        className={dragActive ? "drag-active" : ""}>
                        <div style={{ height: "100%", width: "100%" }}>
                            {added ? <div style={{ height: "100%", width: "100%" }}>
                                <div style={{ height: "30%", width: "auto", marginTop: '1em' }}>
                                    <img src={attached} style={{ height: "100%" }} />
                                </div>
                                <p style={{ color: "white" }}>
                                    File Attached
                                    <button style={{ color: 'red', backgroundColor: 'rgba(43, 173, 236, 0.3)', borderWidth: '1px', borderColor: 'rgba(43, 173, 236, 1)', borderRadius: '1rem', zIndex: 2 }}>Remove</button>
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <button className='upload-button' type='submit' onClick={handleSubmit} >
                                        <h4>Submit</h4>
                                    </button>
                                    <button className='upload-button' type='submit' >
                                        <h4>File Mode</h4>
                                    </button>
                                </div>
                            </div> :
                                <div style={{ height: "100%", width: "100%" }}>
                                    <div style={{ height: "25%", width: "auto" }}>
                                        <img src={logo} style={{ height: "100%" }} />
                                    </div>
                                    <p style={{ color: "white" }}>
                                        Drag and Drop file here
                                        <br />
                                        -OR-
                                        <br />
                                        Click here
                                    </p>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <button className='upload-button' type='submit' onClick={handleSubmit} >
                                            <h4>Submit</h4>
                                        </button>
                                        <button className='upload-button' type='submit' onClick={handleTextButtonClick} >
                                            <h4>Text Mode</h4>
                                        </button>
                                    </div>
                                </div>}
                        </div>
                    </label>
                    {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
                </form>
            </div>

        );
    } else {
        return <div
            id='upload'
            style={{ display: "flex", flexDirection: "column" }}>
            <h2
                id="upload-heading"
                style={{ flex: 1 }}>
                Results:
            </h2>
            <div id='upload-text'>
                <h3 style={{ color: 'white' }}>Medical Speciality is: {response}</h3>
                <button className='upload-button' type='submit' onClick={tryAgain} style={{ marginTop: '1rem' }}>
                    <h4>Try Again(File)!</h4>
                </button>
                <button className='upload-button' type='submit' onClick={tryAgainText}>
                    <h4>Try Again(Text)!</h4>
                </button>
            </div>

        </div>
    }

};

export default UploadFile