import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import Predictions from "./Predictions";
import ImagePreview from "./ImagePreview";
import Header from "./Header";
import Title from "./Title";
import SpacerFlexbox from "./SpacerFlexbox";

import {
  WrapperContainerLarge,
  WrapperContainerMiddle,
  WrapperContainerSmall,
} from "./Wrappers";

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
      handleResponse(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const LandingPage = () => {
  const [image, setImage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [predictions, setPredictions] = useState(null);

  const handleInputFile = (imgFile) => {
    setIsFetching(true);
    setImage(imgFile);
  };
  const handleResponse = (response) => {
    setIsFetching(false);
    setPredictions(response);
  };

  if (isFetching === true) {
    const formData = getFormData(image);
    fetchPredic(formData, handleResponse);
    
  }

  const imgSrc = image !== null && URL.createObjectURL(image);
  console.log("isFetching", isFetching);

  return (
    <WrapperContainerLarge>
      <SpacerFlexbox />
      <WrapperContainerMiddle>
        <Header />
        <WrapperContainerSmall>
          <Title text={"Furniture recognition for IKEA products"} />
          <ImageUpload handleInputFile={handleInputFile} />
          <ImagePreview imgSrc={imgSrc} />
          
          {predictions !== null && isFetching === false && <Predictions predictions={predictions} /> }
          {isFetching == true && <Title text={"Identification pending..."} /> }
          
        </WrapperContainerSmall>
      </WrapperContainerMiddle>
      <SpacerFlexbox />
    </WrapperContainerLarge>
  );
};
export default LandingPage;