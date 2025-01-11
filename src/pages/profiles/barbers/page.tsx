import { useParams } from "react-router-dom";
import { BarberPageUI } from "./styles";

const { BackgroundGlass } = BarberPageUI;

export default function BarberPage() {
  const { Id } = useParams();
  console.log("THis barber has following id: ", Id);

  return (
    <div className="w-screen h-screen">
      <BackgroundGlass></BackgroundGlass>
    </div>
  );
}
