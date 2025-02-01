import { useEffect, useState } from "react";
import { ProfilesLayout } from "../../../components/layouts/profiles/layout";
import { User } from "../../../infra/users/user.type";
import { UserGateway } from "../../../infra/users/users.gateway";
import { LeftBox } from "./components/left-box/left-box";
import { RigthBox } from "./components/right-box/right-box";

export default function ProfilePageMe() {
  const [infoMe, setInfoMe] = useState<User | null>(null);
  const [rigthBoxContent, setRigthBoxContent] = useState<string>("tattoo-list");

  const loadInfoMe = async () => {
    await UserGateway.getInfoMe()
      .then((userInfo) => {
        setInfoMe(userInfo);
      })
      .catch((err) => {
        console.log(`FAILED ON GET INFOS ME`, err);
      });
  };

  useEffect(() => {
    loadInfoMe();
  }, []);

  return (
    <ProfilesLayout
      leftContent={<LeftBox profileInfo={infoMe} />}
      rigthContent={<RigthBox content={rigthBoxContent} />}
    />
  );
}
