import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicket";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
    </>
  );
}
