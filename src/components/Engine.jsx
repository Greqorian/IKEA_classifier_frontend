import React, { useState } from 'react';
import StartPage from './StartPage';

const Engine = () => {

    const [data, setData] = useState({
        img_file: undefined,
        img_obj: undefined,
    })
    const [step, setStep] = useState(0)
    const [response, setResponse] = useState(null)


    const fetchResult = (img_file) => {
        console.log('im gonna post request');
    
        var formData = new FormData();
        formData.append('image', img_file);
    
        fetch('https://ikea-clasiffier.onrender.com/predict', {
            method: 'POST',
            body: formData
        }).then(
            resp => {
                resp.json().then(data => {
                    setResponse(data)
                    setStep(1)
                });
            }
        );
    };

    const handleChange = (imgFile) => {
        console.log('handle change on image', imgFile);

        setData({
            img_file: imgFile,
            img_obj: URL.createObjectURL(imgFile),
        })

        setStep(3)
        fetchResult(imgFile) 

    };

    return (
        <StartPage handleChange={handleChange} fetchResult={fetchResult} img={data.img_obj} currentStep={step}
            response={response} />
    );


    




}

export default Engine;