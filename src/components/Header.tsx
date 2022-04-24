/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'


const Header = () => {
    return ( 
            <div css={styles.header}>
              <h1>IKEA Classifier</h1>
            </div>
     );
}
 
export default Header;

const styles = {
  header: css({
    padding: '0.5em',
    backgroundColor: '#5DADE2'
  }),

}