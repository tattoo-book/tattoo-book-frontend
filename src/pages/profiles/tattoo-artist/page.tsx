import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfilesLayout } from "../../../components/layouts/profiles/layout";
import { TattooArtistGateway } from "../../../infra/gateways/tattoo-artist/tattoo-artist.gateway";
import { TattooArtist } from "../../../types/tattoo-artist.type";
import { LeftBox } from "./components/left-box/left-box";
import { RigthBox } from "./components/right-box/right-box";

export default function TattooArtistPage() {
  const { Id } = useParams();
  const [tatooArtist, setTattooArtist] = useState<TattooArtist | null>(null);
  const [rigthBoxContent, setRigthBoxContent] = useState<string>("tattoo-list");

  const loadArtistInfo = async () => {
    if (Id) {
      await TattooArtistGateway.findOne({ id: +Id })
        .then((tattooArtist) => {
          setTattooArtist(tattooArtist);
        })
        .catch((err) => {
          console.log(`FAILED ON GET TATTTOO ARTIST WITH ID ${Id}`, err);
        });
    }
  };

  useEffect(() => {
    loadArtistInfo();
  }, []);

  return (
    <ProfilesLayout
      leftContent={<LeftBox artist={tatooArtist} />}
      rigthContent={<RigthBox content={rigthBoxContent} />}
    />
  );
}
