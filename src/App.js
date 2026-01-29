import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registrazione from "./pages/Registrazione";
import Prodotti from "./pages/Prodotti";
import Carrello from "./pages/Carrello";
import Ordini from "./pages/Ordini";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrazione" element={<Registrazione />} />
        <Route path="/prodotti" element={<Prodotti />} />

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
    </BrowserRouter>
  );
}

export default App;
