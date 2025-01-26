import { SchedulingTimes, TattooArtist } from "../../../../../types/tattoo-artist.type";
import { TattooArtistProfileComponentsUI } from "../styles";
import { SchedulingTime } from "./scheduling-times";

const { Container } = TattooArtistProfileComponentsUI;

export interface ILeftBox {
  artist: TattooArtist | null;
}

export const LeftBox = (props: ILeftBox) => {
  const { artist } = props;

  const getScheduling = (schedulings: SchedulingTimes[] | undefined) => {
    let result = "Fechado";
    if (!schedulings) return "Fechado";

    schedulings.forEach((sche, index) => {
      if (index == 0) result = sche.start + " as " + sche.end;
      else result += ", " + sche.start + " as " + sche.end;
    });

    return result;
  };

  return (
    <Container style={{ width: "20%", flexDirection: "column", alignItems: "center", gap: "50px" }}>
      <div style={{ background: "#8d8d8d", height: "150px", width: "150px", borderRadius: "50%", overflow: "hidden" }}>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile-img"
          style={{ height: "150px", width: "150px" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", fontSize: "16px" }}>
        <p>Horários de atendimento</p>
        <SchedulingTime day="DOM:" hours={getScheduling(artist?.schedulings.sunday)} />
        <SchedulingTime day="SEG:" hours={getScheduling(artist?.schedulings.monday)} />
        <SchedulingTime day="TER:" hours={getScheduling(artist?.schedulings.tuesday)} />
        <SchedulingTime day="QUA:" hours={getScheduling(artist?.schedulings.wednesday)} />
        <SchedulingTime day="QUI:" hours={getScheduling(artist?.schedulings.thursday)} />
        <SchedulingTime day="SEX:" hours={getScheduling(artist?.schedulings.friday)} />
        <SchedulingTime day="SAB:" hours={getScheduling(artist?.schedulings.saturday)} />
      </div>
    </Container>
  );
};
