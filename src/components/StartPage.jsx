import ResultPage from './ResultPage'
import React, { useState } from 'react';

const StartPage = ({ handleChange, fetchResult, img, currentStep, response }) => {

    let image, results;

    img ? image = <div className="image-frame"><img src={img} className="image-preview" /></div>
        : image = <div className="row"></div>


    currentStep === 3 ?
        results =
        <div className="row spinner">
            <div className="col-12 center-div">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Detecting...
                </button>
            </div>
        </div>
        : currentStep === 1 ? results = <ResultPage result={response} />
            : results = <div></div>


    return (
        <div className="container">
            <div className="flexbox"></div>
            <div className="flexbox">

                <div className="frame">
                    <div className="container-smaller">

                        <div className="header-row">
                            <h1 className="header">
                                IKEA Classifier
                            </h1>
                        </div>
                        <div className="row">
                            <div className="text-center">
                                Furniture recognition for IKEA products
                            </div>
                        </div>
                        
                        <div className='image-frame'>
                            <div className="center-div choose-file">
                                <input type="file" name="file" id="file" className="choose" onChange={(event) => { console.log(event.target.files[0]); handleChange(event.target.files[0]) }} />
                                <label htmlFor="file">UPLOAD IMAGE</label>
                            </div>
                
                       
                            {image}
                            {results}
                        </div>

                       

                    </div>
                </div>
            </div>

            <div className="flexbox"></div>
        </div>
    );
}
export default StartPage;