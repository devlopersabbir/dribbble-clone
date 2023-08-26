import { User, Session } from "next-auth";

export interface INavLinks {
  href: string;
  key: string;
  text: string;
}

export interface IFooterLinks {
  title: string;
  links: string[];
}

export interface ISessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email?: string;
    avatarUrl: string;
  };
}
