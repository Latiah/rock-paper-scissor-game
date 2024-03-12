import Message from "./Message";
import Header from "./Header";
import "./styles/Message.css";
import "./styles/header.css";
import Rules from "./Rules";
import winner from "./winner";
import paperImage from "./icon-rock.svg";

function App() {
  return (
    <>
      <div className="header-position">
        <Header />
      </div>

      <div className="circles">
        <Message />
      </div>

      <div className="circles">
        <div className="rock">
          <img src={paperImage} alt="paper -icon" />
        </div>
      </div>
      <div className="button-position">
        <Rules />
      </div>
    </>
  );
}
export default App;
