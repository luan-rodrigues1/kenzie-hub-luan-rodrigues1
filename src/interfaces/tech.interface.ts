export interface IAddTech {
    title: string;
    status: string;
}

export interface IRespAddTech {
    id: string;
    title: string;
    status: string;
    user: {
      id: string;
    };
}