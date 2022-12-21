import React from 'react'
import Bottombar from './Bottombar'
import results from '../assets/results.png'
import results2 from '../assets/results2.png'

function Models() {
    return (
        <div>
            <div className='model'>
                <div className='model-inner'>
                    <h1>Models</h1>
                    <div>
                        We then made use of models like <b>Random Forest Classification, SVC, Logistic Regression and XGBClassifier</b> for prediction and analysis purposes.
                        <br />
                        We obtained the following results:-
                        <ol>
                            <li>
                                <div style={{ borderWidth: '2px', borderStyle: 'dashed', borderColor: 'red', width: '3vw', height: '6vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem' }}>
                                    <h3>SVC</h3>
                                </div>
                                We used GridSearchCV cross validation method here, the parameters were set as follows:
                                <ul>
                                    <li>C = 100</li>
                                    <li>Gamma = 0.001</li>
                                    <li>Kernel = “rbf”</li>
                                </ul>
                                On basis of the above mentioned parameters in SVC, we got an accuracy of  <b>54.27%</b>
                            </li>
                            <li>
                                <h3>Logistic Regression</h3>
                                Parameters were set as follows :
                                <ul>
                                    <li>penalty = “elasticnet”</li>
                                    <li>Solver = “saga”</li>
                                    <li>L1_ratio  = 0.5</li>
                                    <li>Random_state = 1 </li>
                                </ul>
                                On basis of the above mentioned parameters in Logistic Regression, we got an accuracy of  <b>53.22%</b>
                            </li>
                            <li>
                                <h3>Transformer</h3>
                                Parameters were set as follows:
                                <ul>
                                    <li>Num_train_epochs = 10</li>
                                    <li>learning_Rate = 1e-4</li>
                                    <li>Classification Model = “bert”</li>
                                    <li>Num_labels = 6</li>
                                </ul>
                                We got an accuracy of  <b>45.89%</b>
                            </li>
                            <li>
                                <h3>XGBClassifier</h3>
                                Using XGBClassifier, we got an accuracy of  <b>39.96%</b>
                            </li>
                            <li>
                                <h3>Random Forest Classification</h3>
                                We used GridSearchCV cross validation method here, the parameters were set as follows :
                                <ul>
                                    <li>N_estimators = 50</li>
                                    <li>Max_features = “auto” </li>
                                    <li>Random state = 44</li>
                                </ul>
                                On basis of the above mentioned parameters in Random Forest, we got an accuracy of  <b>34.55%</b>
                            </li>
                        </ol>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'auto', height: '60%' }}>
                            <img src={results} width='80%' />
                        </div>
                        <div style={{ marginTop: '2vh', padding: '1vh' }}>
                            We also applied word2vec to check if the variation in accuracies. We first preprocessed the transcription column by removing punctuation, stop words and tokenizing it as shown below.<br />
                            After this, we applied Gensim preprocessing to obtain a more effective preprocessing of
                            our corpus. After which we applied word2vec embedding on it. We applied models to the obtained results. First, computed sentence vectors by averaging the word vectors for the words contained in the sentence and applied random forest here. We obtained an accuracy of 20.9%, which is very low. So word2vec embedding didn’t give us the high accuracy we were expecting, so we tried to apply Doc2vec embedding as it works much better than Word2Vec and is an extension of Word2Vec.<br />
                            We first initialized the Doc2Vec embedding and applied it over the transcription column.
                            We realized that data is skewed so we applied Smote class balancing in order to balance the data and applied the models.
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={results2} width='80%' />
                        </div>
                    </div>
                </div>
            </div>
            <Bottombar />
        </div>
    )
}

export default Models