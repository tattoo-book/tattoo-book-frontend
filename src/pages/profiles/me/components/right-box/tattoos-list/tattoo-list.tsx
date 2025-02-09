import { useEffect, useState } from "react";
import { TattooCard } from "../../../../../../components/card/card";
import { TattooGateway } from "../../../../../../infra/tattoos/tattoo.gateway";
import { ITattoo } from "../../../../../../infra/tattoos/tattoo.interface";

export function TattooList() {
  const [tattoos, setTattoos] = useState<ITattoo[]>([]);

  const loadTattoos = () => {
    TattooGateway.list()
      .then((res) => setTattoos([...res, ...res, ...res]))
      .catch((err) => console.log("Failed on load tattoos: ", err));
  };

  const like = () => {};
  const unlike = () => {};

  useEffect(() => loadTattoos(), []);

  return (
    <div className="flex gap-6 p-2 flex-wrap overflow-y-scroll">
      {tattoos.map((tattoo, index) => (
        <TattooCard index={index} content={tattoo} style={{ height: "40%", width: "18%" }} />
      ))}
    </div>
  );
}
