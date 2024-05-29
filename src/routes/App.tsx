import React from "react";
import "../i18n/config";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "../_portfolio/components/Header";
import ProjectPage from "../_portfolio/pages/ProjectPage";
import SecureMarshmallow from "../_portfolio/pages/portfolio/Project/SecureMarshmallow";
import Today from "../_portfolio/pages/portfolio/Project/Today";
import LookMonster from "../_portfolio/pages/portfolio/Project/LookMonster";
import Maeumgajim from "../_portfolio/pages/portfolio/Project/Maeumgajim";
import PerfectContributionsView from "../_portfolio/pages/portfolio/Library/PerfectContributionsView";
import XCameraKit from "../_portfolio/pages/portfolio/Library/XCameraKit";
import Graps from "../_portfolio/pages/portfolio/Library/Graps";
import AVSlider from "../_portfolio/pages/portfolio/Library/AVSlider";
import Shalo from "../_portfolio/pages/portfolio/Project/Shalo";
import ForcedBlockingSwift from "../_portfolio/pages/portfolio/ToyProject/ForcedBlockingSwift";
import Mafia from "../_portfolio/pages/portfolio/ToyProject/Mafia";
import Mint from "../_portfolio/pages/portfolio/ToyProject/Mint";
import NFCProject from "../_portfolio/pages/portfolio/ToyProject/NFCProject";
import AppLinkProject from "../_portfolio/pages/portfolio/ToyProject/AppLinkProject";
import WeatherCard from "../_portfolio/pages/portfolio/Project/WeatherCard";

export const APP_VERSION = "2024-03-07 16:26 (KST)";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/:irl" element={<Main />} />
        <Route element={<ProjectPage />}>
          <Route path={"/project/SecureMarshmallow"} element={<SecureMarshmallow />} />
          <Route path={"/project/Today"} element={<Today />} />
          <Route path={"/project/LookMonster"} element={<LookMonster />} />
          <Route path={"/project/Maeumgajim"} element={<Maeumgajim />} />
          <Route
            path={"/project/Shalo"}
            element={<Shalo />}
          />
                    <Route
            path={"/project/WeatherCard"}
            element={<WeatherCard />}
          />

          <Route path={"/project/SecureMarshmallow/:irl"} element={<SecureMarshmallow />} />
          <Route path={"/project/Today/:irl"} element={<Today />} />
          <Route path={"/project/LookMonster/:irl"} element={<LookMonster />} />
          <Route path={"/project/Maeumgajim/:irl"} element={<Maeumgajim />} />
          <Route
            path={"/project/Shalo/:irl"}
            element={<Shalo />}
          />
          <Route
            path={"/project/WeatherCard/:irl"}
            element={<WeatherCard />}
          />

          <Route path={"/library/PerfectContributionsView"} element={<PerfectContributionsView />} />
          <Route path={"/library/XCamerakit"} element={<XCameraKit />} />
          {/* <Route path={"/library/Graps"} element={<Graps />} /> */}
          <Route path={"/library/AVSlider"} element={<AVSlider />} />

          <Route path={"/toy/ForcedBlockingSwift"} element={<ForcedBlockingSwift />} />
          <Route path={"/toy/Mafia"} element={<Mafia />} />
          <Route path={"/toy/Mint"} element={<Mint />} />
          <Route path={"/toy/NFCProject"} element={<NFCProject />} />
          <Route path={"/toy/AppLinkProject"} element={<AppLinkProject />} />

        </Route>
        <Route path="/*" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
