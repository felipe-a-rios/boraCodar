import {
  PlusMinus,
  Minus,
  X,
  Plus,
  Divide,
  Equals,
  Percent,
} from "phosphor-react";
import "./calcstyle.css";
import "./buttonstyle.css";
import { useState } from "react";
export function Calculator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lastResult, setLastResult] = useState("");

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      setOutput(eval(input).toString());
      setLastResult(output);
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setLastResult("");
  };
  const handleNegative = () => {
    setInput(input.startsWith("-") ? input.slice(1) : "-" + input);
  };
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };
  const handlePercent = () => {
    try {
      setInput(`(${input})/100`);
      handleEqual();
    } catch (error) {
      setOutput("Error");
    }
  };
  return (
    <div
      id="box"
      className="flex flex-wrap bg-calculatorBg h-[34.75rem] w-96 rounded-[48px] p-10"
    >
      <div className="h-20 w-full ">
        <span className="flex justify-end items-center text-right text-textGray text-lg leading-7 ">
          {output}
        </span>
        <div className="flex flex-row items-center justify-between">
          <span className="text-textGray text-2xl">=</span>
          <span className="text-textWhite text-4xl">{input || 0}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 text-textWhite text-2xl ">
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300 text-purple"
          onClick={handleClear}
        >
          CE
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={handleBackspace}
        >
          C
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={handlePercent}
        >
          <Percent size={28} />
        </button>
        <button
          id="buttonFunc"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("/")}
        >
          <Divide size={28} />
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("9")}
        >
          9
        </button>

        <button
          id="buttonFunc"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("*")}
        >
          <X size={28} />
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("6")}
        >
          6
        </button>

        <button
          id="buttonFunc"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("-")}
        >
          <Minus size={28} />
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("3")}
        >
          3
        </button>

        <button
          id="buttonFunc"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("+")}
        >
          <Plus size={28} />
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={handleNegative}
        >
          <PlusMinus size={28} />
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          id="button"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-150 duration-300"
          onClick={() => handleClick(".")}
        >
          ,
        </button>
        <button
          id="buttonEquals"
          className="flex items-center justify-center rounded-full w-16 h-16 hover:brightness-75 duration-300"
          onClick={handleEqual}
        >
          <Equals size={28} />
        </button>
      </div>
    </div>
  );
}
