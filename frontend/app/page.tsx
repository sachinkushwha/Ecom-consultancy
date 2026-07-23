import Navbar from "@/components/Navbar";
import { Homes } from "@/components/Home";
import ListingHero from "@/components/ListingHero";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <Navbar />
      <ListingHero />
      <WhoWeAre/>
    </>
  );
}