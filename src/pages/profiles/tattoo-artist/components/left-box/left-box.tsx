import { ArrowRightOutlined } from "@ant-design/icons";
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

  const getScheduling = (schedulings: SchedulingTimes[] | undefined) => {
    let result = "Fechado";
    if (!schedulings) return "Fechado";

    schedulings.forEach((sche, index) => {
      if (index == 0) result = sche.start + " as " + sche.end;
      else result += ", " + sche.start + " as " + sche.end;
    });

    return result;
  };

  const worksStyle = props.content == "tattoo-list" ? "bg-gray-200" : "";
  const agendamentosStyle = props.content == "agendamentos" ? "bg-gray-200" : "";
  const feedbacks = props.content == "Feedbacks" ? "bg-gray-200" : "";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ background: "#8d8d8d", height: "180px", width: "180px", borderRadius: "50%", overflow: "hidden" }}>
        <img
          // src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            padding: "15px 15px",
            borderRadius: "6px",
          }}
          className="hover:bg-gray-200"
        >
          Agendamentos <ArrowRightOutlined />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            padding: "15px 15px",
            borderRadius: "6px",
          }}
          className="hover:bg-gray-200"
        >
          Feedbacks <ArrowRightOutlined />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            padding: "15px 15px",
            borderRadius: "6px",
          }}
          className={"hover:bg-gray-200"}
        >
          Trabalhos Populares <ArrowRightOutlined />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            padding: "15px 15px",
            borderRadius: "6px",
          }}
          className={"hover:bg-gray-200"}
        >
          Agende Seu Horário <ArrowRightOutlined />
        </div>
        {/* <ButtonComponent></ButtonComponent> */}
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
