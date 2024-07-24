import { Home } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "GPT Engineer",
    to: "/gpt-engineer",
    page: <div>GPT Engineer Page</div>,
  },
  {
    title: "Vision",
    to: "/vision",
    page: <div>Vision Page</div>,
  },
  {
    title: "News",
    to: "/news",
    page: <div>News Page</div>,
  },
  {
    title: "Careers",
    to: "/careers",
    page: <div>Careers Page</div>,
  },
];