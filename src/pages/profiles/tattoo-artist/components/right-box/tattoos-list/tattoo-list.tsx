import styled from "styled-components";
import { TattooCard } from "../../../../../../components/card/card";
import { Loading } from "../../../../../../components/loading";
import { useListTattos } from "../../../../../../hooks/tattoo-artist/list-tattoos";

const TattooListContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

export function TattooList() {
  const { isLoading, data, error } = useListTattos();

  if (isLoading) return <Loading />;

  return (
    <TattooListContainer className="flex gap-6 p-2 flex-wrap overflow-y-scroll">
      {data?.map((tattoo, index) => (
        <TattooCard
          index={index}
          content={tattoo}
          style={{ height: "40%", minHeight: "280px", width: "18%", minWidth: "180px" }}
        />
      ))}
    </TattooListContainer>
  );
}
