import React from 'react'
import Card from './Card'

function Team() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <h1>Work Distribution</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                <div style={{ flex: 1, margin: '1vw' }}>
                    <Card name="Ankit Kumar Kamat" work1="Front-end development" work2="Rest API" work3="Backend Integration" />
                </div>
                <div style={{ flex: 1, margin: '1vw' }}>
                    <Card name="Nikhil Kushwah" work1="Data Analysis and Preprocessing" work2="NLP" work3="Bio Named Entity Recognition" work4="Supervised Learning Model" />
                </div>
                <div style={{ flex: 1, margin: '1vw' }}>
                    <Card name="Varun Upadhyay" work1="Data Analysis and Preprocessing" work2="NLP" work3="Supervised Learning Model" work4=" Transformers" />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                <div style={{ flex: 1, margin: '1vw' }}>
                    <Card name="Srishti Sehgal" work1="Data Searching and Collection" work2="EDA of Dataset" work3="Project Presentation and Report" />
                </div>
                <div style={{ flex: 1, margin: '1vw' }}>
                    <Card name="Siddharth Singh" work1="Backend Development" work2="Supervised Learning Models" />
                </div>
                <div style={{ flex: 1, margin: '1vw' }}>
                    <Card name="Mohammad Mohsin Husain" work1="Plot Analysis" work2="Doc2Vec and its models" work3="Word2Vec" />
                </div>
            </div>

            <div style={{ display: 'flex', width: '35vw' }}>
                <div style={{ flex: 1, margin: '1vw' }}>
                    <Card name="Ashmeet Singh" work1="Word2Vec and its model" work2="Data Searching and Collection" work3="Project Presentation and Report" />
                </div>
            </div>

        </div>
    )
}

export default Team