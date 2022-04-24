/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

interface WrapperProps {
  children: React.ReactNode
}

export const WrapperContainerLarge = ({ children }: WrapperProps) => {
  return (
    <div css={styles.containerLarge}>
      {children}
    </div>);
};

export const WrapperContainerMiddle = ({ children }: WrapperProps) => {
  return <div css={styles.containerCentral}>{children}</div>;
};

export const WrapperContainerSmall = ({ children }: WrapperProps) => {
  return <div css={styles.containerSmall}>{children}</div>;
};


const styles = {
  containerLarge: css({
    display: 'flex',
    flexDirection: 'row',
    '@media (min-width: 576px)': {
      padding: '2em'
    }
  }),
  containerCentral:  css({
    overflow: 'hidden',
    flex: '1 1 70%',
    maxWidth: '70vh',
    minHeight: '70vh',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  }),
  containerSmall: css({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px'
  }),

}
