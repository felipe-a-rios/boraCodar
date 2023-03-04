import { Icon } from "@iconify/react";
import * as Separator from "@radix-ui/react-separator";
export function Header() {
  return (
    <div className="">
      <h1 className="text-textPrimary font-semibold text-base font-main mt-4 ml-6">
        Conversor de moedas
      </h1>
      <div className="border-highlight border-[1px] w-fit h-fit flex gap-2 rounded-lg ml-6 p-2 mr-6 mt-6">
        <input type="number" className="h-fit" />
        <Separator.Root
          className="bg-hover h-6 w-[1px]"
          decorative
          orientation="vertical"
        />
        <select name="" id="" className="border-none bg-surfacePrimary">
          <Icon
            icon="tabler:arrows-exchange"
            className="h-6 w-6 text-center text-textPrimary ml-36 mt-2 mb-2"
          />
          <option value="">USD</option>
          <option value="">BRL</option>
          <option value="">EUR</option>
        </select>
      </div>
      <Icon
        icon="tabler:arrows-exchange"
        className="h-6 w-6 text-center text-textPrimary ml-36 mt-2 mb-2"
      />
      <div className="border-highlight border-[1px] w-fit h-fit flex gap-2 rounded-lg ml-6 p-2 mr-6 ">
        <input type="number" className="h-fit" readOnly />
        <Separator.Root
          className="bg-hover h-6 w-[1px]"
          decorative
          orientation="vertical"
        />
        <select name="" id="" className="border-none bg-surfacePrimary">
          <Icon
            icon="tabler:arrows-exchange"
            className="h-6 w-6 text-center text-textPrimary ml-36 mt-2 mb-2"
          />
          <option value="">USD</option>
          <option value="">BRL</option>
          <option value="">EUR</option>
        </select>
      </div>
    </div>
  );
}
