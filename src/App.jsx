import Card from "./components/Card";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Navbar from "./components/Navbar";
import Links from "./components/Links";


export default function App() {
  return (
    <div
      className="relative w-screen h-screen overflow-x-hidden"
    >

      <header>
        <Navbar />
      </header>

      <main className="overflow-y-hidden">
        <Hero />
        <Features />
        <HowWeWork />
      </main>

      <footer className="px-8 md:px-32 pb-16 bg-[--clr5] footer relative overflow-y-hidden">
        <SocialMediaLinks />

        <hr className='border-t-2 border-t-[--clr2] w-full' />

        <Links />
      </footer>

    </div>
  );
}