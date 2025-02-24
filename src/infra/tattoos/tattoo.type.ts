export type ParamsDTO = {
  order?: { popularity: "asc" | "desc" };
  search?: { searchValues: string | undefined };
  pageSize?: number;
  includes?: string[];
};
