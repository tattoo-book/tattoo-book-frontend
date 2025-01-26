import { useEffect, useState } from "react";
import { TattooCard } from "../../../../../../components/card/card";
import { TattooGateway } from "../../../../../../infra/gateways/TattooGateway/tattoo.gateway";
import { ITattoo } from "../../../../../../infra/gateways/TattooGateway/tattoo.interface";

export function TattooList() {
  const [tattoos, setTattoos] = useState<ITattoo[]>([]);

  const loadTattoos = () => {
    TattooGateway.list()
      .then((res) => setTattoos(res))
      .catch((err) => console.log("Failed on load tattoos: ", err));
  };

  const like = () => {};
  const unlike = () => {};

  useEffect(() => loadTattoos(), []);

  return (
    <div style={{ display: "flex", gap: "1.5rem" }}>
      {tattoos.map((tattoo, index) => (
        <TattooCard index={index} content={tattoo} style={{ height: "45%", width: "20%" }} />
      ))}
    </div>
  );
}
