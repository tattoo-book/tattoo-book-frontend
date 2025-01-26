import { IProfilesLayout } from "./layout.interfaces";
import { LeftBox } from "./left-box/left-box";
import { RigthBox } from "./rigth-box/right-box";
import { ProfileLayoutUI } from "./styles";

const { BackgroundGlass } = ProfileLayoutUI;

export function ProfilesLayout(props: IProfilesLayout) {
  return (
    <div className="w-screen h-screen">
      <BackgroundGlass style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ height: "90%", width: "90%", display: "flex", gap: "50px" }}>
          <LeftBox>{props.leftContent}</LeftBox>
          <RigthBox>{props.rigthContent}</RigthBox>
        </div>
      </BackgroundGlass>
    </div>
  );
}
