/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

const SpacerFlexbox = () => {
    return (
        <div css={styles.spacerBox}></div>
    );
};

export default SpacerFlexbox;

const styles = {
    spacerBox: css({
        flex: '1 2 auto',
        display: 'none',
        '@media (min-width: 576px)': {
            display:'block'
          }
    }),

}
