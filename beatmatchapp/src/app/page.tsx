import { Songs } from "@/components/Song/songs";
import Header from "@/components/Header/header";
import './globals.css'

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Songs />
    </div>
  );
}
