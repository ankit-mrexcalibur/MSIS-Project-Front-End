import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import UploadFile from './UploadFile'
import Bottombar from './Bottombar'

function Home() {

    return (
        <div>
            <div className='Body' style={bodyStyle}>
                <div style={{ flex: 2, padding: '10vh' }}>
                    <Sidebar />
                </div>
                <div style={{ flex: 1, paddingLeft: '10vh', paddingRight: '10vh' }}>
                    <UploadFile />
                </div>
            </div>
            <Bottombar />
        </div>
    )
}

const bodyStyle = {
    display: 'flex',
    justifyContent: 'center'
}

export default Home