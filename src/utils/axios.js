import axios from "axios";

export const getFormData = (imgFile) => {
    let formData = new FormData();
    formData.append("image", imgFile);
    return formData;
  };
  
export const fetchPredic = async (formData, handleResponse) => {
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