import React from 'react'
import logo from '../assets/challenges-icon.png'
import Bottombar from './Bottombar'
function Challenges() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
            <div style={{ flex: 1 }}>
                <img src={logo} alt="stairs to success" className='challenge-logo' />
            </div>
            <div id='challenges'>
                <div id='challenges-inner'>
                    <h1>Challenges Faced:</h1>
                    <ul style={{ textAlign: 'left', fontSize: 'large' }}>
                        <li>After using NLP techniques like tokenization, lemmatization, stop words removal and using N-gram over transcription records, the data become high dimensional, and it can lead to overfitting of the model. This can lead to poor performance on validation or test sets, and ultimately make the model less useful for making predictions on real-world data. To address this challenge, we used some dimensionality reduction techniques like PCA and TSNE.
                        </li>
                        <li>
                            The data doesn’t contain evenly distributed samples of each medical speciality making it difficult to predict medical specialities with less frequency. So we only considered the medical specialities that had a count greater than some threshold, otherwise training on that data wouldn’t yield good results.
                        </li>
                        <li>
                            We applied medical domain knowledge by using bio-named entity recognition, this helped in getting the most relevant information for data prediction and improving accuracy from 44 percent to around 55 percent.
                        </li>
                    </ul>
                </div>
            </div>
            <Bottombar />
        </div>
    )
}

export default Challenges