import { useParams } from "react-router-dom";
import PageNotImplemented from "../../components/PageNotImplemented";

export default function BarberPage() {
  const { Id } = useParams();
  console.log("THis barber has following id: ", Id);

  return <PageNotImplemented />;
}
