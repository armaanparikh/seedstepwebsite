import { About, Hero, Header, Footer } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white text-black">
      {/* Assuming Header is your navigation bar */}
      <Header /> 
      {/* Hero section likely has a large, prominent display or introduction */}
      <Hero />
      {/* About section as per your design */}
      <About />
      {/* Footer with additional links or contact information */}
      <Footer />
    </main>
  );
}
