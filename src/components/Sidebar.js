import React from 'react'

function Sidebar() {
    return (
        <div id='sidebar'>
            <div id='sidebar-inner'>
                <p>
                    This is a web application which identifies medical speciality on medical transcription data. This is an automation solution to replace the manual human intervention for booking appointment with a medical specialist. We will be using NLP techniques for processing the unstructured medical data and applying supervised machine learning to predict the medical specialty.
                    <br />
                    This application is currently capable to predict the follow medical specialities:
                    <ul>
                        <li>Cardiovascular/Pulmonary</li>
                        <li>General Medicine</li>
                        <li>Surgery</li>
                        <li>Radiology</li>
                        <li>Orthopedic</li>
                        <li>Consult - History and Physician</li>
                    </ul>
                </p>
            </div>

        </div>
    )
}

export default Sidebar