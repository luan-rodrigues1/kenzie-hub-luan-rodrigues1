import api from "./api";

export interface IInfoUser {
    user: {
      id: string;
      name: string;
      email: string;
      course_module: string;
      bio: string;
      contact: string;
      created_at: string;
      updated_at: string;
      techs: [];
      works: [];
      avatar_url: string | null;
    };
    token: string;
}

export interface ILogin {
    email: string;
    password: string;
}