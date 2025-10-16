import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import BookInspection from "./pages/BookInspection";
// import BuyRequest from "./pages/BuyRequest"; // Removed BuyRequest import
import SellRequest from "./pages/SellRequest";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import BuyUsedCar from "./pages/BuyUsedCar";
import SellCar from "./pages/SellCar";
import CarValuation from "./pages/CarValuation";
import NewCars from "./pages/NewCars";
import CarLoan from "./pages/CarLoan";
import PersonalLoan from "./pages/PersonalLoan";
import Insurance from "./pages/Insurance";
import VehicleHistory from "./pages/VehicleHistory";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MarketplaceLanding from "./pages/MarketplaceLanding";
import CookiePolicy from "./pages/CookiePolicy"; // Import new page
import Disclaimer from "./pages/Disclaimer"; // Import new page

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="trusted-vehicles-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/book-inspection" element={<BookInspection />} />
                {/* Removed BuyRequest route */}
                <Route path="/sell-request" element={<SellRequest />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/buy-used-car" element={<BuyUsedCar />} />
                <Route path="/sell-car" element={<SellCar />} />
                <Route path="/car-valuation" element={<CarValuation />} />
                <Route path="/new-cars" element={<NewCars />} />
                <Route path="/car-loan" element={<CarLoan />} />
                <Route path="/personal-loan" element={<PersonalLoan />} />
                <Route path="/insurance" element={<Insurance />} />
                <Route path="/vehicle-history" element={<VehicleHistory />} />
                <Route path="/marketplace-landing" element={<MarketplaceLanding />} />
                <Route path="/marketplace" element={<MarketplaceLanding />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} /> {/* Updated route */}
                <Route path="/disclaimer" element={<Disclaimer />} /> {/* New route */}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;