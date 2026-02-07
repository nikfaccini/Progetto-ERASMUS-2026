import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registrazione from "./pages/Registrazione";
import Prodotti from "./pages/Prodotti";
import Carrello from "./pages/Carrello";
import Ordini from "./pages/Ordini";
import ChiSiamo from "./pages/ChiSiamo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrazione" element={<Registrazione />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />

          <Route
            path="/carrello"
            element={
              <ProtectedRoute>
                <Carrello />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ordini"
            element={
              <ProtectedRoute>
                <Ordini />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
