import { useParams } from "react-router-dom";
import { TattooArtistPageUI } from "./styles";

const { BackgroundGlass } = TattooArtistPageUI;

export default function TattooArtistPage() {
  const { Id } = useParams();
  console.log("THis tattoo artist has following id: ", Id);

  return (
    <div className="w-screen h-screen">
      <BackgroundGlass></BackgroundGlass>
    </div>
  );
}
