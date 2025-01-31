import { useState } from "react";
import SelectTab from "../../../../../components/sidebar/select-tab";
import { User } from "../../../../../types/user.type";
import { TattooArtistProfileComponentsUI } from "../styles";

const { Container } = TattooArtistProfileComponentsUI;

export interface ILeftBox {
  profileInfo: User | null;
}

export const LeftBox = (props: ILeftBox) => {
  const { profileInfo } = props;
  const [tabSelected, setTabSelect] = useState<string>("favorites");

  const teste: React.CSSProperties = { background: "rgb(229 231 235 / var(--tw-bg-opacity, 1))" };

  const favorites = (blocked: boolean) => (tabSelected == "favorites" && blocked ? teste : { cursor: "default" });
  const myInfo = (blocked: boolean) => (tabSelected == "my-info" && blocked ? teste : { cursor: "default" });
  const horarios = (blocked: boolean) => (tabSelected == "horarios" && blocked ? teste : { cursor: "default" });
  const historico = (blocked: boolean) => (tabSelected == "historico" && blocked ? teste : { cursor: "default" });

  const onClick = (value: string) => {
    setTabSelect(value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        width: "100%",
        height: "100%",
        padding: "8px",
      }}
    >
      <div style={{ background: "#8d8d8d", height: "180px", width: "180px", borderRadius: "50%", overflow: "hidden" }}>
        <img
          src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png"
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
        <p style={{ fontSize: "18px" }}>{props.profileInfo?.name}</p>
        <p style={{ fontSize: "18px", fontWeight: "normal" }}>@{props.profileInfo?.name.split(" ")[0]}</p>
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
        <SelectTab style={myInfo(false)} blocked label="Informações do Perfil" />
        <SelectTab onClick={() => onClick("favorites")} style={favorites(true)} label="Meu Favoritos" />
        <SelectTab style={horarios(false)} blocked label="Horarios Agendados" />
        <SelectTab style={historico(false)} blocked label="Histórico" />
      </div>
    </div>
  );
};
