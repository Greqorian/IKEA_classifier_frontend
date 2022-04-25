/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

export type ProbsListType = { 
  [key: string]: any 
};


const ProbsList = ({ probs }: { probs: ProbsListType} ) => {
  if (probs == null || probs == undefined) {
    return null;
  }

  return (
    <>
      {Object.keys(probs).map((key, index) => {
        if (probs[key] * 100 >= 1) {
          return (
            <p key={index}>
              {key} : {(probs[key] * 100).toFixed(0)} %
            </p>
          );
        }
      })}
    </>
  );
};

export default ProbsList;
