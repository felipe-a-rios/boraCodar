import "./index.css";
import logoImg from "./assets/logo.svg";
function App() {
  return (
    <div className="grid grid-cols-2 font-main">
      <aside className="flex flex-col gap-10 mt-[2.5rem] ml-[7rem] ">
        <img src={logoImg} alt="" className="w-40 h-14" />
        <h2 className="font-bold text-3xl text-[#1E293B]">
          Acesse a plataforma
        </h2>
        <p className="text-[#475569] font-normal text-base">
          Faça login ou registre-se para começar a construir <br />
          seus projetos ainda hoje.
        </p>
        <form action="">
          <label
            htmlFor="email"
            className="text-[#1E293B] font-semibold text-sm"
          >
            E-mail
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            className="w-[24rem] text-[#94A3B8] border-[1px] mt-[0.5rem] mb-[1rem] border-[#E2E8F0] font-normal text-sm px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded"
          />
          <br />
          <label
            htmlFor="password"
            className="text-[#1E293B] font-semibold text-sm mr-56"
          >
            Senha
          </label>{" "}
          <a href="" className="text-[#7C3AED] font-semibold text-sm">
            Esqueceu a senha?
          </a>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            className="w-[24rem] mb-[1.875rem] text-[#94A3B8] border-[1px] mt-[0.5rem] border-[#E2E8F0] font-normal text-sm px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] rounded"
          />
          <br />
          <button
            className="text-[#FFFFFF] text-base py-4 px-[10.625rem] 
          bg-[#7C3AED] rounded hover:bg-[#9F67FF] duration-300 w-[24rem]"
          >
            Entrar
          </button>
        </form>
        <p className="font-normal text-base text-[#475569]">
          Ainda não tem uma conta?{" "}
          <a
            href=""
            className="font-bold text-[#7C3AED] no-underline hover:underline duration-300"
          >
            Inscreva-se
          </a>
        </p>
      </aside>
      <aside className="bg-[url('./assets/bg.png')] w-[50vw] h-[100vh]" />
    </div>
  );
}

export default App;
