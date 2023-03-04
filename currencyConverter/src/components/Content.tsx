import { Graph } from "./Graph";
import { Header } from "./Header";

export function Content() {
  return (
    <div className="bg-surfacePrimary shadow-md w-80 h-[32rem] rounded-xl mt-36 mb-36">
      <Header />
      <Graph />
    </div>
  );
}
