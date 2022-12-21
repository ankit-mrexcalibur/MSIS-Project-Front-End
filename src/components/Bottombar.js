import React from 'react'
import '../App.css'
function Bottombar() {
    return (
        <div id='bottombar' style={styles}>
            <h6>
                Made with ❤️️
            </h6>
        </div>
    )
}

const styles = {
    display: "flex",
    backgroundColor: "rgba(43, 173, 236, 0.5)",
    justifyContent: "center",
    color: "white"
}

export default Bottombar