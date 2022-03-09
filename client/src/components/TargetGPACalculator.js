import React from "react";
import { TargetGPACalculatorContainer } from "./styles";

export const TargetGPACalculator = () => {
  const [data, setData] = React.useState({
    currentGpa: 0,
    targetGpa: 0,
    currentCredits: 0,
    additionalCredits: 0,
  });
  const [resultGpa, setResultGpa] = React.useState(0);

  React.useEffect(() => {
    setResultGpa(
      (+data.targetGpa * (+data.currentCredits + +data.additionalCredits) -
        +data.currentGpa * +data.currentCredits) /
        +data.additionalCredits
    );
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <TargetGPACalculatorContainer>
      <div className="form">
        <div className="field">
          <label htmlFor="current-gpa">Current GPA</label>
          <input
            type="number"
            name="currentGpa"
            id="current-gpa"
            value={data.currentGpa}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="target-gpa">Target GPA</label>
          <input
            type="number"
            name="targetGpa"
            id="target-gpa"
            value={data.targetGpa}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="current-credits">Current Credits</label>
          <input
            type="number"
            name="currentCredits"
            id="current-credits"
            value={data.currentCredits}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="additional-credits">Additional Credits</label>
          <input
            type="number"
            name="additionalCredits"
            id="additional-credits"
            value={data.additionalCredits}
            onChange={handleChange}
          />
        </div>
        {!isNaN(resultGpa) && (
          <div className="field">
            <label htmlFor="result-gpa">Needed GPA</label>
            <div>{resultGpa > 4.0 ? "Impossible" : resultGpa.toFixed(2)}</div>
          </div>
        )}
      </div>
    </TargetGPACalculatorContainer>
  );
};
