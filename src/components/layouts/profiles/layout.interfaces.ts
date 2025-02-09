import { ReactNode } from "react";

export interface IRigthBox {
  children: ReactNode;
}

export interface ILeftBox {
  children: ReactNode;
}

export interface IProfilesLayout {
  leftContent: ReactNode;
  rigthContent: ReactNode;
}
