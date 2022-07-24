// import { ACCESS_TYPE } from 'src/app/core/types/access.type';

export interface NavNode {
  name: string;
  url: string;
  icon: string;
  ACCESS: "admin" | "user";
  children?: NavNode[];
  hasDividerAfter?: boolean;
}

export const NAV_CONFIG: NavNode[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    ACCESS: "admin",
    icon: "dashboard",
    hasDividerAfter: true,
  },
];
