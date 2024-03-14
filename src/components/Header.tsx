import logImage from "./images/logo.svg";
const Header = () => {
  return (
    <>
      <div className="header-elements">
        <div className="titles">
          <img src={logImage} alt="log" />
        </div>
      </div>
    </>
  );
};
export default Header;
