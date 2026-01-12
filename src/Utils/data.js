import {
  FaHome,
  FaUsers,
  FaFileAlt,
  FaClipboardList,
  FaTasks,
} from "react-icons/fa";
import { PiToolboxBold } from "react-icons/pi";
export const salesData = [
  { month: "Jan", value1: 35, value2: 25 },
  { month: "Feb", value1: 45, value2: 20 },
  { month: "Mar", value1: 30, value2: 35 },
  { month: "Apr", value1: 40, value2: 30 },
  { month: "May", value1: 50, value2: 25 },
  { month: "Jun", value1: 48, value2: 38 },
  { month: "Jul", value1: 42, value2: 32 },
  { month: "Aug", value1: 38, value2: 28 },
  { month: "Sep", value1: 45, value2: 35 },
];

export const navItems = [
  { icon: FaHome, label: "Dashboard", active: true },
  { icon: PiToolboxBold, label: "Listings", active: false },
  { icon: FaUsers, label: "Users", active: false },
  { icon: FaFileAlt, label: "Request", active: false },
  { icon: FaClipboardList, label: "Applications", active: false },
  { icon: FaTasks, label: "Tasks", active: false },
];

export const properties = [
  {
    title: "Urban Prime Plaza Premiere",
    label: "MOST CLICKED",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },
  {
    title: "Urban Prime Plaza Premiere",
    label: "MOST WATCHLISTED",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  },
  {
    title: "Urban Prime Plaza Premiere",
    label: "HOTTEST LISTING",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop",
  },
];
