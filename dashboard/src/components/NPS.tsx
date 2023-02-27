import Smile from "../assets/smile.svg";
export function NPS() {
  return (
    <div
      className="grid grid-rows-3 items-center gap-8 pr-20 pl-20 justify-center
    bg-[#363447] rounded-lg overflow-hidden shadow-md font-main mt-28 w-72 h-96 text-center"
    >
      <h2 className="font-semibold text-white text-2xl mt-7">NPS Geral</h2>
      <div className="grid grid-rows-2">
        <img src={Smile} alt="" className="mx-auto" />
        <p className="text-[#81FBB8] font-semibold text-2xl ">Excelente!</p>
      </div>

      <span className="font-medium text-sm text-white mb-7 mt-8">
        NPS Score <span className="font-thin ">75</span>
      </span>
    </div>
  );
}
