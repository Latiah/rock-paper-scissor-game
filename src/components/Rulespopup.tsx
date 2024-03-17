import React, { useState } from "react";
import rulesImages from "../images/image-rules.svg";
import closeImage from "../images/icon-close.svg";
const Rulespopup = () => {
  const [showRules, setShowRules] = useState(false);

  const retrieveRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div>
      <button className="rules" onClick={retrieveRules}>
        RULES
      </button>

      {showRules && (
        <div className="overlay">
          <div className="modal">
            <div className="rule-header">
              <p>RULES OF THE GAME</p>
              <button className="close-btn" onClick={retrieveRules}>
                <img
                  src={closeImage}
                  alt="close-icon"
                  className="close-image"
                />
              </button>
            </div>
            <img src={rulesImages} alt="Rules" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Rulespopup;
