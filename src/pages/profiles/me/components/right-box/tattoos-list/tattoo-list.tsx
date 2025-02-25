import { TattooCard } from "../../../../../../components/card/card";
import { ITattoo } from "../../../../../../infra/tattoos/tattoo.interface";

interface ITattooList {
  tattoos: ITattoo[] | undefined;
}

export function TattooList(props: ITattooList) {
  return (
    <div className="flex gap-6 p-2 flex-wrap overflow-y-scroll w-full">
      {props.tattoos?.map((tattoo, index) => (
        <TattooCard key={index} index={index} tattoo={tattoo} style={{ height: "40%", width: "18%" }} />
      ))}
    </div>
  );
}
