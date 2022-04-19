import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import Predictions from "./Predictions";
import ImagePreview from "./ImagePreview";
import Header from "./Header";
import Title from "./Title";
import WrapperContainer from "./WrapperContainer";

const getFormData = (imgFile) => {
  let formData = new FormData();
  formData.append("image", imgFile);
  return formData;
};

const fetchPredic = async (formData, handleResponse) => {
  let config = {
    method: "post",
    url: "https://ikea-clasiffier.onrender.com/predict",
    data: formData,
  };

  await axios(config)
    .then((response) => {
      console.log("response", response.data);
      handleResponse(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// const getPredictionsFromImage = (image) => {
//   let res;

//   if (image !== null) {
//     const formData = getFormData(image);
//     res = fetchPredic(formData);
//   }
//   console.log("res", res);
//   return res;
// };

const LandingPage = () => {
  const [image, setImage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [predictions, setPredictions] = useState(null);

  const handleInputFile = (imgFile) => {
    setIsFetching(true);
    setImage(imgFile);
  };
  const handleResponse = (response) => {
    setPredictions(response);
  };

  //imgObj: URL.createObjectURL(imgFile),

  if (isFetching === true) {
    const formData = getFormData(image);
    fetchPredic(formData, handleResponse);
    setIsFetching(false);
    
  }
  console.log("out response", predictions)
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
   
      <WrapperContainer>
      <div className="flexbox"></div>
        <div className="frame">
          <div className="container-smaller">
            <Header />
            <div className="row">
              <Title/>
            </div>

            <div className="image-frame">
              <ImageUpload handleInputFile={handleInputFile} />

              {predictions !== null && <Predictions predictions={predictions} />}
            </div>
          </div>
        </div>
      

      <div className="flexbox"></div>
      </WrapperContainer>
  );
};
export default LandingPage;
