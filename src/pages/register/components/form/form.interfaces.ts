export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
  artist: boolean;
  confirm?: string | undefined;
}
