import GraphImg from "../assets/chart.png";
export function Graph() {
  return (
    <div>
      <h2 className="text-textPrimary font-semibold text-base font-main mt-8 ml-6">
        Taxa de câmbio
      </h2>
      <img src={GraphImg} alt="" className="mt-6 ml-4 w-[18rem] h-[10rem]" />
    </div>
  );
}
