const ImageUpload = ({handleImage}) => {
  return (
    <div className="center-div choose-file">
      <label htmlFor="file">UPLOAD IMAGE</label>ƒ
      <input
        type="file"
        name="file"
        id="fileInput"
        className="choose"
        onChange={(event) => {
          handleImage(event.target.files[0]);
        }}
      />
    </div>
  );
};
