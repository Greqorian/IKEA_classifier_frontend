import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import {getFormData, fetchPredic} from "../utils/axios";
import Predictions from "./Predictions";
import ImagePreview from "./ImagePreview";
import Header from "./Header";
import Title from "./Title";
import SpacerFlexbox from "./SpacerFlexbox";
import {PredictionsType} from "./Predictions"

import {
  WrapperContainerLarge,
  WrapperContainerMiddle,
  WrapperContainerSmall,
} from "./Wrappers";

const LandingPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [predictions, setPredictions] = useState<PredictionsType | null>(null);

  const handleInputFile = (imgFile: File) => {
    setIsFetching(true);
    setImage(imgFile);
  };
  const handleResponse = (response: PredictionsType) => {
    setIsFetching(false);
    setPredictions(response);
  };

  if (isFetching === true) {
    const formData = getFormData(image);
    fetchPredic(formData, handleResponse);
  }

  console.log("isFetching", isFetching);

  return (
    <WrapperContainerLarge>
      <SpacerFlexbox />
      <WrapperContainerMiddle>
        <Header />
        <WrapperContainerSmall>
          <Title>Furniture recognition for IKEA products</Title>
          <ImageUpload handleInputFile={handleInputFile} />

          {image !== null && <ImagePreview imgSrc={URL.createObjectURL(image)} />}
          {predictions !== null && isFetching === false && <Predictions predictions={predictions} /> }
          {isFetching == true && <Title>Identification pending...</Title> }
          
        </WrapperContainerSmall>
      </WrapperContainerMiddle>
      <SpacerFlexbox />
    </WrapperContainerLarge>
  );
};
export default LandingPage;
