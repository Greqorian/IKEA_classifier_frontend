import ResultPage from "./ResultPage";
import React, { useState } from "react";

// const getImgFormData = (imgFile) => {
//     const formData = new FormData();
//     formData.append("image", imgFile);
// }

// const fetchPrediction = (formData) => {
//     return fetch("https://ikea-clasiffier.onrender.com/predict", {
//       method: "POST",
//       body: formData,
//     }).then((resp) => {return resp});
//   };

const LandingPage = () => {
  const [image, setImage] = useState({
    imgFile: undefined,
    imgObj: undefined,
  });
  const [response, setResponse] = useState(null);

  const handleImage = (imgFile) => {
    setImage({
      imgFile: imgFile,
      imgObj: URL.createObjectURL(imgFile),
    });
  };

  // const predictionResp = {};

  // if( image.imgFile !== undefined) {
  //     const formImageData = getImgFormData(image.imgFile)
  //     predictionResp = fetchPrediction(formImageData);
  // }

  // if (predictionResp) { setResponse(predictionResp); console.log(response) }

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
              <ImageUpload handleImage={handleImage()} />

              {/* {image}
                            {results} */}
            </div>
          </div>
        </div>
      </div>

      <div className="flexbox"></div>
    </div>
  );
};
export default LandingPage;
