import logImage from "./images/logo.svg";
const Header = () => {
  return (
    <>
      <div className="header-elements">
        <div className="titles">
          <img src={logImage} alt="log" />
        </div>
        <div className="scores">
          <h4>SCORE</h4>
          <h1>12</h1>
        </div>
      </div>
    </>
  );
};
export default Header;
