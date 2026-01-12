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

export const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" y1="9" x2="20" y2="9" />
        <circle cx="8" cy="9" r="2" fill="currentColor" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <circle cx="16" cy="15" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Set up annual budgets by account category",
    description:
      "Allocate funds across income and expense lines with full visibility.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <polyline points="7 14 10 11 13 14 17 8" />
      </svg>
    ),
    title: "Track actuals vs budget in real time",
    description:
      "See how your community is performing against plan, month by month.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <line x1="8" y1="16" x2="8" y2="12" />
        <line x1="12" y1="16" x2="12" y2="9" />
        <line x1="16" y1="16" x2="16" y2="11" />
      </svg>
    ),
    title: "Adjust figures and forecast with ease",
    description:
      "Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.",
  },
];
