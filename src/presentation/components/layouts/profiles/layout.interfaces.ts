import { ReactNode } from "react";

export interface IRigthBox {
  children: ReactNode;
}

export interface ILeftBox {
  children: ReactNode;
  openModal?: () => void;
}

export interface IProfilesLayout {
  leftContent: ReactNode;
  rigthContent: ReactNode;
}
