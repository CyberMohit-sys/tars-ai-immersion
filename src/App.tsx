import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Docs from "./pages/Docs";
import Research from "./pages/Research";
import Solutions from "./pages/Solutions";
import Company from "./pages/Company";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import ApiPlayground from "./pages/ApiPlayground";
import Models from "./pages/Models";
import Status from "./pages/Status";
import Security from "./pages/Security";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/research" element={<Research />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/company" element={<Company />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/playground" element={<ApiPlayground />} />
              <Route path="/models" element={<Models />} />
              <Route path="/status" element={<Status />} />
              <Route path="/security" element={<Security />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
