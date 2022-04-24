/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

type ImagePreviewType = {
  imgSrc: string | null
}

const ImagePreview = ({ imgSrc }: ImagePreviewType) => {

  if (imgSrc === null) return null;

  return (
    <div css={styles.imageFrame} >
      {imgSrc && <img src={imgSrc} css={styles.image} />}
    </div>
  );
};

export default ImagePreview;

const styles = {
  imageFrame: css({
    padding: '10px',
    alignSelf: 'center',
  }),
  image: css({
    objectFit: 'cover',
    maxHeight: '400px',
    width: '100%',
  })

}