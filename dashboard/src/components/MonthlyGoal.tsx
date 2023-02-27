import GoalsGraph from "../assets/goals.png";
export function MonthlyGoal() {
  return (
    <div
      className="grid grid-rows-3 items-center pr-20 pl-20 mt-28 w-96 h-96 gap-1 justify-center
  bg-[#363447] rounded-lg overflow-hidden shadow-md font-main text-center"
    >
      <h2 className="font-semibold text-white text-2xl ">Meta mensal</h2>
      <div className="flex items-center ">
        <img src={GoalsGraph} alt="" className="mx-auto w-48 h-48" />
      </div>
      <div className="flex items-center text-white mt-8">
        <div className="w-3 h-3 bg-[#4A4556]  rounded-full"></div>
        <span className="ml-1 mr-2 text-sm">Esperado</span>
        <span className="text-sm">R$70K</span>
        <div className="w-3 h-3 ml-5 bg-gradient-to-br from-[#df9780] to-[#a66de9] rounded-full"></div>
        <span className="ml-1 mr-2 text-sm">Alcançado</span>{" "}
        <span className="text-sm">R$63K</span>
      </div>
    </div>
  );
}
