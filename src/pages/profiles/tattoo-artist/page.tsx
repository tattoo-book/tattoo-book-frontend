import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TattooArtistGateway } from "../../../infra/gateways/TattoooArtistGateway/tattoo-artist.gateway";
import { TattooArtist } from "../../../types/tattoo-artist.type";
import { TattooArtistPageUI } from "./styles";

const { BackgroundGlass } = TattooArtistPageUI;

export default function TattooArtistPage() {
  const { Id } = useParams();
  const [_tatooArtist, setTattooArtist] = useState<TattooArtist | null>(null);

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
      <BackgroundGlass></BackgroundGlass>
    </div>
  );
}
