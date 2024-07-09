import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Alpha from "../pages/Alpha";
import Api from "../pages/Api";
import Blog from "../pages/Blog";
import { Box } from "@mui/material";
import ChainGrowth from "../dashboardPages/ChainGrowth";
import EcoSystem from "../dashboardPages/EcoSystem";
import SmartAlert from "../dashboardPages/SmartAlert";
import WatchLists from "../dashboardPages/WatchLists";
import EthereumExchangeFlowGraph from "./ExchangeChart";
import ExchangeFlowChart from "./ExchangeChart";
import Signals from "../dashboardPages/Signals";
import SmartMoney from "../dashboardPages/SmartMoney";
import NFTs from "../dashboardPages/NFts";
import DashHome from "../dashboardPages/DashHome";
import ScrollControlledVideo from "./ScrollControlledVideo";
import CryptoInvester from "../pages/CryptoInvester";
import AccountSetting from "../dashboardPages/AccountSetting";
import WhatsNew from "../dashboardPages/WhatsNew";
import Help from "../dashboardPages/Help";

export const RoutesLayout = () => {
  const { user, isLoggedIn, isCheckingAuth } = useAuth();

  return (
    <>
      {!user && !isLoggedIn && !isCheckingAuth && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/alpha" element={<Alpha />} />
          <Route path="/api" element={<Api />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cryptoinvestor" element={<CryptoInvester />} />

          <Route path="/dashhome" element={<DashHome />} />
          {/* <Route path="/chart" element={<ExchangeFlowChart />} /> */}
          <Route path="/signals" element={<Signals />} />
          <Route path="/chaingrowth" element={<ChainGrowth />} />
          <Route path="/ecosystem" element={<EcoSystem />} />
          <Route path="/smartalert" element={<SmartAlert />} />
          <Route path="/watchlists" element={<WatchLists />} />
          <Route path="/smartmoney" element={<SmartMoney />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/scrollcontrol" element={<ScrollControlledVideo />} />
          <Route path="/accountsettings" element={<AccountSetting />} />
          <Route path="/whatsnew" element={<WhatsNew />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      )}
      {user && isLoggedIn && !isCheckingAuth && (
        <Routes>
          {/* <Route path="/dashhome" element={<DashHome />} /> */}
          <Route path="/chaingrowth" element={<ChainGrowth />} />
          <Route path="/ecosystem" element={<EcoSystem />} />
          <Route path="/smartalert" element={<SmartAlert />} />
          <Route path="/watchlists" element={<WatchLists />} />
        </Routes>
      )}
    </>
  );
};
