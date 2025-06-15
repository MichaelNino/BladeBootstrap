
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Playground from "./pages/Playground";
import Buttons from "./pages/Buttons";
import Modals from "./pages/Modals";
import Alerts from "./pages/Alerts";
import Cards from "./pages/Cards";
import Dropdowns from "./pages/Dropdowns";
import Forms from "./pages/Forms";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Jumbotron from "./pages/Jumbotron";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Badges from "./pages/Badges";
import Breadcrumbs from "./pages/Breadcrumbs";
import Hero from "./pages/Hero";
import Sidebar from "./pages/Sidebar";
import ListGroups from "./pages/ListGroups";
import Features from "./pages/Features";
import Headers from "./pages/Headers";
import Footers from "./pages/Footers";
import Carousel from "./pages/Carousel";

const queryClient = new QueryClient();

const App = () => (
  <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/modals" element={<Modals />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/dropdowns" element={<Dropdowns />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/jumbotron" element={<Jumbotron />} />
              <Route path="/badges" element={<Badges />} />
              <Route path="/breadcrumbs" element={<Breadcrumbs />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/list-groups" element={<ListGroups />} />
              <Route path="/features" element={<Features />} />
              <Route path="/headers" element={<Headers />} />
              <Route path="/footers" element={<Footers />} />
              <Route path="/carousel" element={<Carousel />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </NextThemesProvider>
);

export default App;
