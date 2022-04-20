import ProbsList from "./ProbsList";
import Title from "./Title";

const Predictions = ({ predictions }) => {
  return (
    <div className="info-frame">
      <div className="text-center">
        <Title text={"We assume it is:"} />
        <h4>{predictions.category ? predictions.category : "not exist"}</h4>
      </div>
      <div className="text-left">
        <p>There is % probability that this is:</p>
        <ProbsList probs={predictions.probs} />
      </div>
    </div>
  );
};

export default Predictions;
