const ImageUpload = ({ handleInputFile }) => {
  return (
    <div className="center-div choose-file">
      <form>
        <input
          type="file"
          name="file"
          id="file"
          className="choose"
          onChange={(e) => {
            handleInputFile(e.target.files[0]);
          }}
        />
        <label htmlFor="file">UPLOAD IMAGE</label>
      </form>
    </div>
  );
};

export default ImageUpload;
