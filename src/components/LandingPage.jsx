import React, { useState } from "react";
import ImageUpload from "./ImageUpload"
import axios from "axios";
import Predictions from './Predictions'
import ImagePreview from './ImagePreview'
import Header from './Header'

const getFormData = (imgFile) => {
  let formData = new FormData();
  formData.append("image", imgFile);
  return formData;
}
const fetchPredic = (formData) => {

  let res;
  let config = {
    method: 'post',
    url: 'https://ikea-clasiffier.onrender.com/predict',
    data: formData
  };

  axios(config)
    .then((response) => {
      // console.log(response.data)
      res = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
};

const getPredictionsFromImage = (image) => {

  if (image !== null) {
    const formData = getFormData(image);
    console.log(formData)
    const res = fetchPredic(formData);
    if (res !== undefined) { return res }
  }
}


const LandingPage = () => {

  const [image, setImage] = useState(null);
  const [predictions, setPredictions] = useState(null);

  const handleInputFile = (imgFile) => { setImage(imgFile) };

  //imgObj: URL.createObjectURL(imgFile),

  const predResult = getPredictionsFromImage(image)
  if (predResult !== undefined) { setPredictions(predResult) }

  console.log("predictions", predictions)



  // if (response) {


  // }

  //let image, results;

  // img ? image = <div className="image-frame"><img src={img} className="image-preview" /></div>
  //     : image = <div className="row"></div>

  // currentStep === 3 ?
  //     results =
  //     <div className="row spinner">
  //         <div className="col-12 center-div">
  //             <button className="btn btn-primary" type="button" disabled>
  //                 <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  //                 Detecting...
  //             </button>
  //         </div>
  //     </div>
  //     : currentStep === 1 ? results = <ResultPage result={response} />
  //         : results = <div></div>

  return (
    <div className="container">
      <div className="flexbox"></div>
      <div className="flexbox">
        <div className="frame">
          <div className="container-smaller">
            <div className="header-row">
              <h1 className="header">IKEA Classifier</h1>
            </div>
            <div className="row">
              <div className="text-center">
                Furniture recognition for IKEA products
              </div>
            </div>

            <div className="image-frame">
              <ImageUpload handleInputFile={handleInputFile} />

              {predictions && <Predictions predictions={predictions} />}


            </div>
          </div>
        </div>
      </div>

      <div className="flexbox"></div>
    </div>
  );
};
export default LandingPage;
