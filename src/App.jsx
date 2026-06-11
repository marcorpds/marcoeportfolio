import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AboutPage from "./components/views/AboutPage";
import ProjectsPage from "./components/views/ProjectsPage";
import CertificatesPage from "./components/views/CertificatesPage";
import PageNotFound from "./components/views/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/marcoeportfolio/aboutpage" element={<AboutPage />} />
          <Route path="/marcoeportfolio/projectspage" element={<ProjectsPage />} />
          <Route path="/marcoeportfolio/certificatespage" element={<CertificatesPage />} />
          <Route path="/marcoeportfolio/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
