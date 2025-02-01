import { TattooCard } from "../../../../../../components/card/card";
import { Loading } from "../../../../../../components/loading";
import { useListTattos } from "../../../../../../hooks/tattoo-artist/list-tattoos";

export function TattooList() {
  const { isLoading, data, error } = useListTattos();

  if (isLoading) return <Loading />;

  return (
    <div className="flex gap-6 p-2 flex-wrap overflow-y-scroll">
      {data?.map((tattoo, index) => (
        <TattooCard index={index} content={tattoo} style={{ height: "40%", width: "18%" }} />
      ))}
    </div>
  );
}
