import ProbsList from "./ProbsList";
import Title from "./Title";

export type PredictionsType = { 
  category: string,
  probs: any
};

const Predictions = ({ predictions }: {predictions: PredictionsType}) => {
  return (
    <div>
        <h3>We assume it is:</h3>
        <Title>{predictions.category ? predictions.category : "not exist"}</Title>
      <div>
        <p>There is % probability that this is:</p>
        <ProbsList probs={predictions.probs} />
      </div>
    </div>
  );
};

export default Predictions;