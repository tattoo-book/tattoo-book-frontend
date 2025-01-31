import { useState } from "react";
import SelectTab from "../../../../../components/sidebar/select-tab";
import { SchedulingTimes, TattooArtist } from "../../../../../types/tattoo-artist.type";
import { TattooArtistProfileComponentsUI } from "../styles";
import { SchedulingTime } from "./scheduling-times";

const { Container } = TattooArtistProfileComponentsUI;

export interface ILeftBox {
  artist: TattooArtist | null;
  content: string;
}

export const LeftBox = (props: ILeftBox) => {
  const { artist } = props;
  const [tabSelected, setTabSelect] = useState<string>("populary-jobs");

  const getScheduling = (schedulings: SchedulingTimes[] | undefined) => {
    let result = "Fechado";
    if (!schedulings) return "Fechado";

    schedulings.forEach((sche, index) => {
      if (index == 0) result = sche.start + " as " + sche.end;
      else result += ", " + sche.start + " as " + sche.end;
    });

    return result;
  };

  const teste: React.CSSProperties = { background: "rgb(229 231 235 / var(--tw-bg-opacity, 1))" };

  const popularyJobs = (blocked: boolean) =>
    tabSelected == "populary-jobs" && blocked ? teste : { cursor: "default" };
  const schedulings = (blocked: boolean) => (tabSelected == "schedulings" && blocked ? teste : { cursor: "default" });
  const feedbacks = (blocked: boolean) => (tabSelected == "feedbacks" && blocked ? teste : { cursor: "default" });
  const horario = (blocked: boolean) => (tabSelected == "horario" && blocked ? teste : { cursor: "default" });

  const onClick = (value: string) => {
    setTabSelect(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ background: "#8d8d8d", height: "180px", width: "180px", borderRadius: "50%", overflow: "hidden" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDn4pdIrIiSa0yJAIlDj4aHIOEpQbbYinYg&s"
          alt="profile-img"
          style={{ height: "180px", width: "180px" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          padding: "0px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "18px" }}>{props.artist?.name}</p>
        <p style={{ fontSize: "18px", fontWeight: "normal" }}>@{props.artist?.name.split(" ")[0]}</p>
      </div>
      <div
        style={{
          width: "100%",
          padding: "0px 10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <SelectTab style={schedulings(false)} blocked label="Agendamentos" />
        <SelectTab style={popularyJobs(true)} label="Trabalhos Populares" />
        <SelectTab style={feedbacks(true)} blocked label="Feedbacks" />
        <SelectTab style={horario(true)} blocked label="Agende Seu Horário" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          fontSize: "16px",
          width: "100%",
          padding: "0px 25px",
        }}
      >
        <p>Horários de atendimento</p>
        <SchedulingTime day="DOM:" hours={getScheduling(artist?.schedulings.sunday)} />
        <SchedulingTime day="SEG:" hours={getScheduling(artist?.schedulings.monday)} />
        <SchedulingTime day="TER:" hours={getScheduling(artist?.schedulings.tuesday)} />
        <SchedulingTime day="QUA:" hours={getScheduling(artist?.schedulings.wednesday)} />
        <SchedulingTime day="QUI:" hours={getScheduling(artist?.schedulings.thursday)} />
        <SchedulingTime day="SEX:" hours={getScheduling(artist?.schedulings.friday)} />
        <SchedulingTime day="SAB:" hours={getScheduling(artist?.schedulings.saturday)} />
      </div>
    </div>
  );
};
