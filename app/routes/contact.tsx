import type { Route } from "./+types/home";
import { Contact } from "../contact/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Me" },
    { name: "description", content: "Mateo James Contact Form" },
  ];
}

export default function Home() {
  return <Contact />;
}
