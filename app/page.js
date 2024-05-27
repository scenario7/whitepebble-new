import NavBar from "../components/NavBar";
import HeroSection from "@/components/HeroSection";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import CustomFooter from "@/components/CustomFooter";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main className="bg-[#ffefe8] min-h-screen">
      <NavBar/>
      <HeroSection/>
      <Statistics/>
      <Services/>
      <Reviews/>
      <CustomFooter/>
    </main>
  );
}
