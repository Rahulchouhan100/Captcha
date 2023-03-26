import ReactDOM from "react-dom/client";
import Captcha from "./src/component/Captcha";

const App = () => {
  return (
    <>
      <Captcha />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
