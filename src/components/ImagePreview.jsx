/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

const ImagePreview = ({ imgSrc }) => {
  return (
    <div css={styles.imageFrame} >
      {imgSrc && <img src={imgSrc} css={styles.image} />}
    </div>
  );
};

export default ImagePreview;

const styles = {
  imageFrame: {
    padding: '10px',
    alignSelf: 'center',
  },
  image: {
    objectFit: 'cover',
    maxHeight: '400px',
    width: '100%',
  }

}