import About from "../Components/About";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import Work from "../Components/Work";

export default function Home() {
  return (
      <main className="home">
      <NavBar/>     
      <div className="content mt-7">
      <HeroSection/>
      <Work />
      <About/>
      <Footer/>          
      </div>     
      </main>
  );
}
