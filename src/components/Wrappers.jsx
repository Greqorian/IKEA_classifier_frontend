/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export const WrapperContainerLarge = ({ children }) => {
  return (
    <div css={styles.containerLarge}>
      {children}
    </div>);
};

export const WrapperContainerMiddle = ({ children }) => {
  return <div css={styles.containerCentral}>{children}</div>;
};

export const WrapperContainerSmall = ({ children }) => {
  return <div css={styles.containerSmall}>{children}</div>;
};


const styles = {
  containerLarge: {
    display: 'flex',
    flexDirection: 'row',
    '@media (min-width: 576px)': {
      padding: '2em'
    }
  },
  containerCentral: {
    overflow: 'hidden',
    flex: '1 1 70%',
    maxWidth: '70vh',
    minHeight: '70vh',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
  containerSmall: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px'
  },

}
