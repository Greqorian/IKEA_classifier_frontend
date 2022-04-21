/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

const Title = ({ text }) => {
  return (
    <div css={styles.row}>
      <h3>{text}</h3>
    </div>
  );
};

export default Title;

const styles = {
  row: {
    width: '100%',
    padding: '10px'
  },

}