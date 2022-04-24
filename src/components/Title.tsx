/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({children}:TitleProps) => {
  return (
    <div css={styles.row}>
      <h3>{children}</h3>
    </div>
  );
};

export default Title;

const styles = {
  row: {
    padding: '10px'
  },

}