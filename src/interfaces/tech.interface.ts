export interface IReqAddTech {
  title: string,
  status: string
}
export interface IRespAddTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IReqUpdateTech {
  status: string
}