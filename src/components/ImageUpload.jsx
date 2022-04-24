/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

const ImageUpload = ({ handleInputFile }) => {
  return (
      <form css={styles.formFrame}>
        <input
          type="file"
          name="file"
          id="file"
          css={styles.input}
          onChange={(e) => {
            handleInputFile(e.target.files[0]);
          }}
        />
        <label htmlFor="file" css={styles.label}>
          <h3>UPLOAD IMAGE</h3>
        </label>
      </form>
  );
};

export default ImageUpload;


const styles = {

  formFrame: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    // padding: '0 10px 0 10px'
  },
  input: {
    display: 'none'
  },
  label: {
    padding: '10px',
    width: '90%',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    display: 'inline-block',
    '&:hover': {
      backgroundColor: '#efefef',
      cursor: 'pointer'
    }
  }
}