import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [result, setResult] = useState("");
  const clear = () => {
    setResult("");
  };
  const display = (event) => {
    setResult(result.concat(event.target.value));
  };
  const calculate = () => {
    const res = eval(result);
    setResult(res.toString());
  };
  return (
    <div className="display">
      <input value={result} placeholder="0" className="screen"></input>
      <input
        type="button"
        value={1}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={2}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={3}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={4}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={5}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={6}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={7}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={8}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={9}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={0}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={"+"}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={"-"}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={"*"}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={"/"}
        onClick={display}
        className="button"
      ></input>
      <input
        type="button"
        value={"clear"}
        onClick={clear}
        className="button2"
      ></input>
      <input
        type="button"
        value={"="}
        onClick={calculate}
        className="button3"
      ></input>
    </div>
  );
}

export default App;
