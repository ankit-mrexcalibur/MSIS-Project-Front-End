import React from 'react'

function Card(props) {
    if (props.work2 && props.work3 && props.work4) {
        return (
            <div style={{ color: 'white', backgroundColor: 'rgba(43, 173, 236, 0.3)', borderRadius: '2rem', height: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'rgba(43, 173, 236,0.5)', height: '80%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '2rem' }}>
                    <b>{props.name}</b> <br /> {props.work1} <br /> {props.work2} <br /> {props.work3} <br /> {props.work4}
                </div>
            </div>
        )
    } else if (props.work2 && props.work3) {
        return (
            <div style={{ color: 'white', backgroundColor: 'rgba(43, 173, 236, 0.3)', borderRadius: '2rem', height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'rgba(43, 173, 236,0.5)', height: '80%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '2rem' }}>
                    <b>{props.name}</b> <br /> {props.work1} <br /> {props.work2} <br /> {props.work3}
                </div>
            </div>
        )
    }
    return (
        <div style={{ color: 'white', backgroundColor: 'rgba(43, 173, 236, 0.3)', borderRadius: '2rem', height: '20vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgba(43, 173, 236,0.5)', height: '80%', width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '2rem' }}>
                <b>{props.name}</b> <br /> {props.work1} <br /> {props.work2}
            </div>
        </div>
    )
}

export default Card