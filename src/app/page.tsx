import NavBar from "@/components/nav-bar";
import Intro from "@/components/intro";
import About from "@/components/about";
import Services from "@/components/services";
import Partners from "@/components/partners";
import Contact from "@/components/Contact";

import SectionHeader from "@/partials/section-header";
import Socials from "@/partials/socials";
import Subscribe from "@/partials/subscripe";

import banner from "@/partials/img/banner.png"

// WARN: this code is property of SimpleMindedGuy, it is only intended for testing my ability, I do not allow of this code to be used publicly.
export default function Home() {
  return (
    <main className={"Page "}>
      <NavBar></NavBar>

      <section className="Banner-Section" style={{ "backgroundImage": `url(${banner.src})` }}>
        <div className="Banner-Gradient">
          <SectionHeader>
            <p>Welcome to The <b>OurWebsite</b> Your Platform for Launching Towards Technological Success!</p>
          </SectionHeader>

        </div>


      </section>

      <Intro />

      <About />


      <Services />

      <Partners />


      <Contact />


      <footer>
        <SectionHeader>
          <h2>Subscribe our newsletter</h2>
          <p>Your download should start automatically, if not Click here. Should I give up, huh?.</p>
        </SectionHeader>

        <Subscribe />

        <Socials />

        <div className="CopyRight">

          <p>Copyright © 2024OurWebsite . All Right Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
