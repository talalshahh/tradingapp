import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nansen2 from "./pages/Nansen2";
import Layout from "./components/Layout";
import Alpha from "./pages/Alpha";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Api from "./pages/Api";
import CryptoInvester from "./pages/CryptoInvester";
import Insight from "./pages/Insight";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import { AuthProvider } from "./context/auth.context";
import { RoutesLayout } from "./components/RoutesLayout";
import Signals from "./dashboardPages/Signals";
import SideMenu from "./dashboardPages/SideMenu";
import Responsive from "./components/NFTsSlider";
import NFTTable from "./components/NFTTable";
import PortfolioSideMenu from "./portfolio/PortfolioSideMenu";
import PortfolioHome from "./portfolio/PortfolioHome";
import Entities from "./portfolio/Entities";
import Protocols from "./portfolio/Protocols";
import NFTs from "./dashboardPages/NFts";
// import MyComponent from "./components/NFTsTable";
// import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/nansen2" element={<Nansen2 />} />
              <Route path="/alpha" element={<Alpha />} />
              <Route path="/api" element={<Api />} />
              <Route path="/cryptoinvestor" element={<CryptoInvester />} />
              <Route path="/insight" element={<Insight />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> */}
              <Route path="/*" element={<RoutesLayout />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
