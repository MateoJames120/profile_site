import type { Route } from "./+types/home";
import { About } from "../about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me" },
    { name: "description", content: "Senior Developer with 10+ years of experience in software development" },
  ];
}

export default function Home() {
  return <About />;
}
