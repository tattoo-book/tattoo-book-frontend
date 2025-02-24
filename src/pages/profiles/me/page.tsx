import { useState } from "react";
import { ProfilesLayout } from "../../../components/layouts/profiles/layout";
import { Loading } from "../../../components/loading";
import { useGetInfoMe } from "../../../hooks/users/get-info-me";
import { TattooArtistUserProfile } from "./components/left-box/tattoo-artist-user-profile";
import { UserProfile } from "./components/left-box/user-profile";
import { RigthBox } from "./components/right-box/right-box";

export default function ProfilePageMe() {
  const [rigthBoxContent, _setRigthBoxContent] = useState<string>("tattoo-list");
  const { isLoading, error, data } = useGetInfoMe();

  if (isLoading) return <Loading />;
  if (error) return <div>Failed on get info me</div>;

  return (
    <ProfilesLayout
      leftContent={
        !data?.tattooArtist ? <TattooArtistUserProfile profileInfo={data} /> : <UserProfile profileInfo={data} />
      }
      rigthContent={
        <RigthBox
          content={rigthBoxContent}
          tattooList={data?.tattooArtist.tattoos}
          isTattooArtist={data?.tattooArtist ? true : false}
        />
      }
    />
  );
}
