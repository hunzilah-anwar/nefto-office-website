import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import PageWrapper from "./components/PageWrapper";

// Lazy-loaded Pages
const Home = lazy(() => import("./pages/Home"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ServicePages = lazy(() => import("./pages/ServicePages"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services/:slug" element={<ServicePages />} />
            <Route
              path="/services/:slug/:projectSlug"
              element={<ProjectDetail />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
