const ImagePreview = ({imgSrc}) => {
  return (
    <div className="image-frame">
      {imgSrc && <img src={imgSrc} className="image-preview" />}
    </div>
  );
};

export default ImagePreview;
