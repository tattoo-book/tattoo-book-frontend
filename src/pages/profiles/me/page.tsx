import { useState } from "react";
import { ProfilesLayout } from "../../../components/layouts/profiles/layout";
import { Loading } from "../../../components/loading";
import { useListTattoos } from "../../../hooks/tattoos/list-tattoos";
import { useGetInfoMe } from "../../../hooks/users/get-info-me";
import { TattooArtistUserProfile } from "./components/left-box/tattoo-artist-user-profile";
import { UserProfile } from "./components/left-box/user-profile";
import { RigthBox } from "./components/right-box/right-box";

export default function ProfilePageMe() {
  const [rigthBoxContent, _setRigthBoxContent] = useState<string>("tattoo-list");
  const { isLoading, error, data } = useGetInfoMe();
  const tattoos = useListTattoos({ includes: ["likes"] });
  if (isLoading) return <Loading />;
  if (tattoos.isLoading) return <Loading />;
  if (error) return <div>Failed on get info me</div>;
  if (tattoos.error) return <div>Failed on get info me</div>;

  return (
    <ProfilesLayout
      leftContent={
        data?.tattooArtist ? <TattooArtistUserProfile profileInfo={data} /> : <UserProfile profileInfo={data} />
      }
      rigthContent={
        <RigthBox
          content={rigthBoxContent}
          tattooList={data?.tattooArtist ? data?.tattooArtist.tattoos : tattoos.data}
          isTattooArtist={data?.tattooArtist ? true : false}
        />
      }
    />
  );
}
