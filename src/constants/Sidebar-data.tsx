// SidebarItems.ts
import React from 'react';


import { BsDisplay } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaTachometerAlt } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdPassword } from "react-icons/md";

export interface SidebarItem {
  name: string;
  link: string;
  icon: React.ReactNode;}

const SidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Account",
    link: "/dashboard/account",
    icon: <CgProfile />,
  },
  {
    name: "Notification",
    link: "/dashboard/notification",
    icon: <IoNotificationsOutline />,
  },
  {
    name: "Password",
    link: "/dashboard/password",
    icon: <MdPassword />,
  },
  {
    name: "Preferences",
    link: "/dashboard/preferences",
    icon: <BsDisplay />,
  },
];

export default SidebarItems;
