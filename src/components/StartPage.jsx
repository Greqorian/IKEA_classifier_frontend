import ResultPage from './ResultPage'
import React, { useState } from 'react';

const StartPage = ({ handleChange, fetchResult, img, currentStep, response }) => {

    let image, results;

    img ? image = <div className="row"><div className="col-12 center-div"><img src={img} className="center-div image-preview" /></div></div>
        : image = <div className="row"></div>


    currentStep === 3 ?
        results = 
        <div className="row spinner">
            <div className="col-12 center-div">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Detecting flower
                </button>
            </div>
        </div>
        : currentStep === 1 ? results = <ResultPage result={response} /> 
        : results = <div></div>


    return (
        <div className="container">
            <div className="row">
                <h1 className="col-12 header">
                    IKEA Classifier
                </h1>
            </div>
            <div className="row">
                <div className="col-12 message">
                    This simple flower classifier can identify the following flowers using their image:
                    Daisy, Dandelion, Rose, Sunflower and Tulip.
                    Upload your image below:
                </div>
            </div>
            <div className="row">
                <div className="col-12 center-div choose-file">
                    <input type="file" name="file" id="file" className="choose" onChange={(event) => { console.log(event.target.files[0]); handleChange(event.target.files[0]) }} />
                    <label htmlFor="file">Choose a file</label>


                </div>

            </div>
            {image}
            {results}
        </div>
    );
}
export default StartPage;