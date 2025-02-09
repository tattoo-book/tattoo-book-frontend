import { IProfilesLayout } from "./layout.interfaces";
import { LeftBox } from "./left-box/left-box";
import { RigthBox } from "./rigth-box/right-box";
import { ProfileLayoutUI } from "./styles";

const { BackgroundGlass, Content } = ProfileLayoutUI;

export function ProfilesLayout(props: IProfilesLayout) {
  return (
    <div className="w-screen h-screen">
      <BackgroundGlass style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Content>
          <LeftBox>{props.leftContent}</LeftBox>
          <RigthBox>{props.rigthContent}</RigthBox>
        </Content>
      </BackgroundGlass>
    </div>
  );
}
