import { Send } from "react-ionicons";
export function SendMessage() {
  return (
    <div className="text-white p-8 pt-14 text-xs w-full">
      <div className="flex bg-darkBlue-800 rounded-full p-4 ">
        <input
          type="text"
          className="bg-darkBlue-800 w-full  focus:outline-none
          focus:ring-2 focus:ring-purpleChat focus:ring-offset-2 
          focus:ring-offset-darkBlue-900 focus:rounded-full
          placeholder:text-white pl-2 placeholder:text-sm"
          placeholder="Digite sua mensagem"
        />
        <Send color={"#e1e1e6"} height="24px" width="24px" />
      </div>
    </div>
  );
}
