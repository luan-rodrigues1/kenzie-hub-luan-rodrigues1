export interface IAddTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IRespAddTech {
    id: string;
    title: string;
    status: string;
    user: {
      id: string;
    };
}