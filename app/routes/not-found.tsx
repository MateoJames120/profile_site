import type { Route } from "./+types/home";
import { NotFound } from "../not-found/not-found";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mateo James" },
    { name: "description", content: "Welcome to my profile website" },
  ];
}

export default function Home() {
  return <NotFound />;
}
