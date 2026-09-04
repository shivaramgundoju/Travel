import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Home } from "./pages/Home";
import { Destinations } from "./pages/Destinations";
import { DestinationDetail } from "./pages/DestinationDetail";
import { Experiences } from "./pages/Experiences";
import { ExperienceDetail } from "./pages/ExperienceDetail";
import { Trips } from "./pages/Trips";
import { TripDetail } from "./pages/TripDetail";
import { Stories } from "./pages/Stories";
import { StoryDetail } from "./pages/StoryDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PlanTrip } from "./pages/PlanTrip";
import { NotFound } from "./pages/NotFound";
import { Legal } from "./pages/Legal";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use smooth scroll on mobile, instant on desktop for snappy feel
    const isMobile = window.innerWidth < 768;
    window.scrollTo({ top: 0, behavior: isMobile ? "smooth" : "auto" });
  }, [pathname]);

  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:slug" element={<ExperienceDetail />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trips/:slug" element={<TripDetail />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan-a-trip" element={<PlanTrip />} />
          <Route path="/privacy-policy" element={<Legal kind="privacy" />} />
          <Route path="/terms" element={<Legal kind="terms" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export function App() {
  return <Layout />;
}