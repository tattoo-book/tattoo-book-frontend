import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TattooArtistGateway } from "../../../infra/gateways/TattoooArtistGateway/tattoo-artist.gateway";
import { TattooArtist } from "../../../types/tattoo-artist.type";
import { LeftBox } from "./components/left-box/left-box";
import { RigthBox } from "./components/right-box/right-box";
import { TattooArtistPageUI } from "./styles";

const { BackgroundGlass } = TattooArtistPageUI;

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
    <div className="w-screen h-screen">
      <BackgroundGlass style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ height: "90%", width: "90%", display: "flex", gap: "50px" }}>
          <LeftBox artist={tatooArtist} />
          <RigthBox content={rigthBoxContent} />
        </div>
      </BackgroundGlass>
    </div>
  );
}
