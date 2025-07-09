import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Intro from '@/components/sections/intro';
import About from '@/components/sections/about';
import Infrastructure from '@/components/sections/infrastructure';
import Machinery from '@/components/sections/machinery';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import Customers from '@/components/sections/customers';
import Team from '@/components/sections/team';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Intro />
        <About />
        <Infrastructure />
        <Machinery />
        <Services />
        <Projects />
        <Customers />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
