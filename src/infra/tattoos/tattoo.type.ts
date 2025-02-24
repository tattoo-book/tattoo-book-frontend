export type ParamsDTO = {
  order?: { popularity: "asc" | "desc" };
  search?: { searchValues: string | undefined };
  filter?: { tattooArtistId?: number[] };
  pageSize?: number;
  includes?: string[];
};
