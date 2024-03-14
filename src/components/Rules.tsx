import rulesImages from "../images/image-rules.svg";
import React, { useState } from "react";
const Rules = () => {
  const [rulesPage, setrulesPage] = useState(false);
  const [hiderulesPage, sethiderulesPage] = useState(false);
  const displayRules = () => {
    setrulesPage(true);
    sethiderulesPage(true);
  };
  const removeRules = () => {
    setrulesPage(false);
    sethiderulesPage(false);
  };
  return (
    <>
      <button className="rules" onClick={displayRules}>
        RULES
      </button>
      {hiderulesPage && (
        <button className="rules" onClick={removeRules}>
          HIDE RULES
        </button>
      )}
      {rulesPage && (
        <div className="rules-page">
          <img src={rulesImages} />
        </div>
      )}
    </>
  );
};
export default Rules;
