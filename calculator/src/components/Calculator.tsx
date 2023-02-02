import { PlusMinus, Minus, X, Plus, Divide, Equals } from "phosphor-react";

import { Button } from "./Button";
import "./calcstyle.css";
export function Calculator() {
  return (
    <div
      id="box"
      className="flex flex-wrap bg-calculatorBg h-[34.75rem] w-96 rounded-[48px] p-10"
    >
      <div className="h-20 w-full ">
        <span className="flex justify-end items-center text-right text-textGray text-lg leading-7 ">
          1+1
        </span>
        <div className="flex flex-row items-center justify-between">
          <span className="text-textGray text-2xl">=</span>
          <span className="text-textWhite text-4xl">2</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 text-textWhite text-2xl ">
        <Button operator="CE" textStyle={{ color: "#975DFA" }} />
        <Button operator="C" />
        <Button operator="%" />
        <Button operator={<Divide size={28} />} bg="#462878" />
        <Button num={7} />
        <Button num={8} />
        <Button num={9} />
        <Button operator={<X size={28} />} bg="#462878" />
        <Button num={4} />
        <Button num={5} />
        <Button num={6} />
        <Button operator={<Minus size={28} />} bg="#462878" />
        <Button num={1} />
        <Button num={2} />
        <Button num={3} />
        <Button operator={<Plus size={28} />} bg="#462878" />
        <Button operator={<PlusMinus size={28} />} />
        <Button num={0} />
        <Button operator="," />
        <Button operator={<Equals size={28} />} bg="#7F45E2" />
      </div>
    </div>
  );
}
