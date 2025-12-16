import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mateo James" },
    { name: "description", content: "Welcome to my profile website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
