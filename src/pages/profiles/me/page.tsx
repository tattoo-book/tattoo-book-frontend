import { useState } from "react";
import { ProfilesLayout } from "../../../components/layouts/profiles/layout";
import { Loading } from "../../../components/loading";
import { useGetInfoMe } from "../../../hooks/users/get-info-me";
import { LeftBox } from "./components/left-box/left-box";
import { RigthBox } from "./components/right-box/right-box";

export default function ProfilePageMe() {
  const [rigthBoxContent, setRigthBoxContent] = useState<string>("tattoo-list");
  const { isLoading, error, data } = useGetInfoMe();

  if (isLoading) return <Loading />;
  if (error) return <div>Failed on get info me</div>;

  return (
    <ProfilesLayout
      leftContent={<LeftBox profileInfo={data} />}
      rigthContent={<RigthBox content={rigthBoxContent} />}
    />
  );
}
