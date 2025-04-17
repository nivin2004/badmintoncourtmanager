
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourtAvailability from "./pages/CourtAvailability";
import FindPlayers from "./pages/FindPlayers";
import Rentals from "./pages/Rentals";
import AddRental from "./pages/AddRental";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import SeatAllocation from "./pages/admin/SeatAllocation";
import Notifications from "./pages/admin/Notifications";
import Settings from "./pages/admin/Settings";

// Components
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

// Add framer-motion for page transitions
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route 
                path="dashboard" 
                element={
                  <PageTransition>
                    <Dashboard />
                  </PageTransition>
                } 
              />
              <Route 
                path="seat-allocation" 
                element={
                  <PageTransition>
                    <SeatAllocation />
                  </PageTransition>
                } 
              />
              <Route 
                path="notifications" 
                element={
                  <PageTransition>
                    <Notifications />
                  </PageTransition>
                } 
              />
              <Route 
                path="settings" 
                element={
                  <PageTransition>
                    <Settings />
                  </PageTransition>
                } 
              />
            </Route>
            
            {/* Main App Routes */}
            <Route
              path="/"
              element={
                <div className="flex flex-col min-h-screen">
                  <NavBar />
                  <PageTransition>
                    <Index />
                  </PageTransition>
                </div>
              }
            />
            <Route
              path="/court-availability"
              element={
                <div className="flex flex-col min-h-screen">
                  <NavBar />
                  <PageTransition>
                    <CourtAvailability />
                  </PageTransition>
                </div>
              }
            />
            <Route
              path="/find-players"
              element={
                <div className="flex flex-col min-h-screen">
                  <NavBar />
                  <PageTransition>
                    <FindPlayers />
                  </PageTransition>
                </div>
              }
            />
            <Route
              path="/rentals"
              element={
                <div className="flex flex-col min-h-screen">
                  <NavBar />
                  <PageTransition>
                    <Rentals />
                  </PageTransition>
                </div>
              }
            />
            <Route
              path="/add-rental"
              element={
                <div className="flex flex-col min-h-screen">
                  <NavBar />
                  <PageTransition>
                    <AddRental />
                  </PageTransition>
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <PageTransition>
                  <Login />
                </PageTransition>
              }
            />
            <Route
              path="/signup"
              element={
                <PageTransition>
                  <SignUp />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFound />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
