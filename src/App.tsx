import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Engagements from "./pages/Engagements";
import Lab from "./pages/Lab";
import Contact from "./pages/Contact";
import Brief from "./pages/Brief";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<Note />} />
        <Route path="/engagements" element={<Engagements />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brief" element={<Brief />} />

        {/* legacy */}
        <Route path="/consulting" element={<Navigate to="/engagements" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteLayout>
  );
}
