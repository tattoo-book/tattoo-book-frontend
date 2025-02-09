import { PageNotImplementedUI } from "./styles";

const { H2, H1 } = PageNotImplementedUI;
export default function PageNotImplemented() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <PageNotImplementedUI.BackgroundGlass>
        <div>
          <H1>Pagina não implementada</H1>
          <H2>Está pagina está em desenvolvimento</H2>
        </div>
      </PageNotImplementedUI.BackgroundGlass>
    </div>
  );
}
