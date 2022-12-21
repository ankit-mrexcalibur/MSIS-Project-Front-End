import React from 'react'
import './Home.css'
import Bottombar from './Bottombar'
import doctor_img from '../assets/doctor-img.jpg'
import meds_app from '../assets/meds-app.png'
import pipeline from '../assets/pipeline.png'
import frequencyplot from '../assets/frequency-plot.jpg'
import frequencyplot2 from '../assets/frequency-plot2.jpg'
import removed from '../assets/removed.png'
import tsne from '../assets/tsne.jfif'
import train_test from '../assets/train_test.png'

function About() {
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div className='about-section'>
                    <div className='about-section-inner'>
                        <h1>What is MSIS?</h1>
                        <div>
                            In the present age of digitalisation, there is still a large number of people in India who have no knowledge about medical terminologies. Hence even if they have their medical records, they don’t have much idea about which medical specialist they should visit. This recommendation is basically made by the receptionist at any hospital.
                            To solve this problem, we have come up with a web application which identifies medical speciality in medical transcription data.
                            <br />
                            MSIS is an automation solution to replace the manual human intervention for booking appointments with a medical specialist. We will be using NLP techniques for processing unstructured medical data and applying supervised machine learning to predict the medical speciality.
                        </div>
                    </div>
                </div>
                <div className='about-section'>
                    <div className='about-section-inner'>
                        <h1>Stakeholders</h1>
                        <div>
                            <div style={{ fontSize: 'medium' }}>
                                The portal can be used by patients or transcriptionists to get an idea about the medical speciality by simply providing their medical test reports.
                                Many companies like 1MG.com and Pharmeasy these days provide users with an option to book lab tests and generate online reports, this portal can be of great use there as it can predict the medical speciality the patient must refer to on the basis of their lab reports.

                            </div>
                            <div style={{ display: 'flex', padding: '1vh' }}>
                                <img src={doctor_img} height='80%' width='auto' style={{ marginTop: '1vh', borderRadius: '2rem' }} />
                                <img src={meds_app} height='auto' width='50%' style={{ marginLeft: '2vh', borderRadius: '2rem' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='about-section'>
                    <div className='about-section-inner'>
                        <h1>Dataset</h1>
                        <div>
                            We used https://mtsamples.com/, in which there is a collection of sample transcription reports uploaded by transcriptionists for reference purposes.
                            It has around 5000 samples segregated across different medical specialities.
                            <br />
                            The dataset had 6 columns namely:
                            <ul>
                                <li>
                                    <h4>Description</h4>
                                    <ul>
                                        <li>Consist of short description of the transcription sample</li>
                                        <li>Example - “Preoperative visit for weight management with laparoscopic gastric banding”</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Sample Name</h4>
                                    <ul>
                                        <li>Title of the transcription
                                        </li>
                                        <li>Example - “Allergy Rhinitis”</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Transcription</h4>
                                    <ul>
                                        <li>Sample’s medical transcription</li>
                                        <li>Example - “PREOPERATIVE DIAGNOSIS: , Morbid obesity.,POSTOPERATIVE DIAGNOSIS: ,Morbid obesity.,PROCEDURE: “</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Keywords</h4>
                                    <ul>
                                        <li>Important keywords for the report</li>
                                        <li>Example - “allergy/immunology, allergic rhinitis, allergies, asthma, nasal sprays”</li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='about-section' >
                    <div className='about-section-inner'>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            We had the following Unique medical specialities(when selected according to a frequency threshold of 250) :-
                            <img src={frequencyplot} style={{ margin: '1vh', borderRadius: '2rem' }} />
                            <img src={frequencyplot2} style={{ borderRadius: '2rem' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className='about-section'>
                    <div className='about-section-inner'>
                        <h1>Methology</h1>
                        <img src={pipeline} style={{ marginTop: '2vh', marginBottom: '2vh' }} />
                        <div>
                            In our model, we are making use of the “transcriptions” column to predict the “medical speciality”. We then analysed our data in a way to get the number of times every speciality occurs in the medical speciality column and the remaining columns were dropped. Post this we took a threshold of 250 and only kept the medical specialities that occurred more than that.
                        </div>
                    </div>
                    <div className='about-section-inner' style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
                        <div>
                            Now, we removed all the punctuations from the transcriptions and applied lemmatizer to each row, followed by stopword removal. We then moved to name entity recognition with the help of the en_ner_bionlp13cg_md library which is used for identifying biomedical terms and once again used the lemmatizer function. We then used TfidfVectorizer to generate and represent vectors based on the resulting data using ngram ranging from 1 to 3. The resulting data will be stored in matrices. At this point, the initial text has been converted into numeric values.
                        </div>
                        <img src={removed} style={{ width: '80%', height: 'auto', padding: '0.5vh' }} />
                    </div>
                </div>
            </div>
            <div>
                <div className='about-section'>
                    <div className='about-section-inner'>
                        Post this we use SMOTE for class balancing. For training and testing purposes, we divide our data into a ratio of 80:20 or 4:1 and our model is built on the training data while it is being evaluated on the testing data.
                        <div style={{ display: 'flex' }}>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={train_test} width='95%' height='auto' />
                            </div>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                <img src={tsne} width='60%' height='auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Bottombar />
        </div>
    )
}

export default About