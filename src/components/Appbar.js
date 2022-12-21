import React from 'react'

function Appbar() {
    return (
        <nav style={styles}>
            <div style={{ flex: 1 }}>
                <a href='/' style={{ color: 'inherit', textDecoration: 'none' }}><h2>Medical Speciality Identification System</h2></a>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
                <div style={{ flex: 1 }}>
                    <a href='/about' style={{ color: 'inherit', textDecoration: 'none' }}><h2>About</h2></a>
                </div>
                <div style={{ flex: 1 }}>
                    <a href='/models' style={{ color: 'inherit', textDecoration: 'none' }}><h2>Models</h2></a>
                </div>
                <div style={{ flex: 1 }}>
                    <a href='/challenges' style={{ color: 'inherit', textDecoration: 'none' }}><h2>Challenges</h2></a>
                </div>
                <div style={{ flex: 1 }}>
                    <a href='/team' style={{ color: 'inherit', textDecoration: 'none' }}><h2>Team</h2></a>
                </div>
            </div>
        </nav>
    )
}

const styles = {
    display: "flex",
    backgroundColor: "rgba(43, 173, 236, 0.5)",
    color: "white"
}

export default Appbar