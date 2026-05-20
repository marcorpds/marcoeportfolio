import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/views/PageNotFound";
import Dashboard from "./components/views/Dashboard";
import Layout from "./components/ui/Layout"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/marcoeportfolio/dashboard" element={<Dashboard />} />
          <Route path="/marcoeportfolio/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
