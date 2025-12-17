import type { Route } from "./+types/home";
import { Portfolio } from "~/portfolio/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Mateo James Portfolio" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
