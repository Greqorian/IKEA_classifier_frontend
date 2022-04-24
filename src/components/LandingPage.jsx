import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import {getFormData, fetchPredic} from "../utils/axios";
import Predictions from "./Predictions";
import ImagePreview from "./ImagePreview";
import Header from "./Header";
import Title from "./Title.tsx";
import SpacerFlexbox from "./SpacerFlexbox";

import {
  WrapperContainerLarge,
  WrapperContainerMiddle,
  WrapperContainerSmall,
} from "./Wrappers";

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
          <Title>Furniture recognition for IKEA products</Title>
          <ImageUpload handleInputFile={handleInputFile} />
          <ImagePreview imgSrc={imgSrc} />
          
          {predictions !== null && isFetching === false && <Predictions predictions={predictions} /> }
          {isFetching == true && <Title>Identification pending...</Title> }
          
        </WrapperContainerSmall>
      </WrapperContainerMiddle>
      <SpacerFlexbox />
    </WrapperContainerLarge>
  );
};
export default LandingPage;
