import rulesImages from "../images/image-rules.svg";
import React, { useState } from "react";
const Rules = () => {
  const [rulesPage, setrulesPage] = useState(false);
  const displayRules = () => {
    setrulesPage(true);
  };
  return (
    <>
      <button className="rules" onClick={displayRules}>
        RULES
      </button>
      {rulesPage && (
        <div className="rules-page">
          <img src={rulesImages} />
        </div>
      )}
    </>
  );
};
export default Rules;
