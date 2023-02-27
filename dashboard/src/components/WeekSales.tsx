import "./weeksale.css";
export function WeekSales() {
  return (
    <div
      className="flex bg-[#363447] rounded-lg w-[69.5rem] h-[19.625rem] 
    mt-16 mb-28
    shadow-md font-main text-white justify-between"
    >
      <div className="flex flex-col col-span-2 ml-12 mb-12 mt-7">
        <h2 className="font-semibold mt-7 text-2xl ">
          Vendas por dia da semana
        </h2>

        <div className="flex items-center mt-8">
          <div className="triangle"></div>
          <p className="font-medium text-sm ml-1">Dia com mais vendas</p>
        </div>
        <p className="font-medium text-2xl inline-block mt-2">quarta-feira</p>
        <div className="flex items-center mt-8">
          {" "}
          <div className="redTriangle"></div>
          <p className="font-medium text-sm ml-1">Dia com menos vendas</p>
        </div>
        <h2 className="font-medium text-2xl mt-2">domingo</h2>
      </div>

      <div className="flex items-end gap-14 mr-12 mb-7 justify-center">
        <div>
          <div className="bg-gradient-to-b from-[#90f7ec] to-[#32cbbc] rounded-full w-4 h-10"></div>
          <p>dom</p>
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#90f7ec] to-[#32cbbc] rounded-full w-4 h-36"></div>
          <p>seg</p>
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#90f7ec] to-[#32cbbc] rounded-full w-4 h-24"></div>
          <p>ter</p>
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#90f7ec] to-[#32cbbc] rounded-full w-4 h-44"></div>
          <p>qua</p>
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#90f7ec] to-[#32cbbc] rounded-full w-4 h-40"></div>
          <p>qui</p>
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#90f7ec] to-[#32cbbc] rounded-full w-4 h-36"></div>
          <p>sex</p>
        </div>
        <div>
          <div className="bg-gradient-to-b from-[#90f7ec] to-[#32cbbc] rounded-full w-4 h-24"></div>
          <p>sab</p>
        </div>
      </div>
    </div>
  );
}
