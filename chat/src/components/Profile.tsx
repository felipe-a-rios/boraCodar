import { CloseOutline } from "react-ionicons";
export function Profile() {
  return (
    <>
      <div className="flex flex-wrap pl-8 pt-6 items-center justify-start gap-4 ">
        <img
          className="rounded-full w-12 h-12"
          src="https://github.com/felipe-a-rios.png"
          alt="Foto de perfil de Usuário"
        />
        <div className="">
          <h2 className="font-medium text-white text-base">Felipe Rios</h2>
          <p className="text-onlineGreen text-xs">Online</p>
        </div>
      </div>
      <div className="pr-8 absolute top-9 right-0">
        <CloseOutline color={"#e1e1e6"} height="1.25rem" width="1.25rem" />
      </div>
      <p className="text-white text-xs text-center mt-7">Hoje 11:30</p>
    </>
  );
}
