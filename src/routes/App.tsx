import React from "react";
import "../i18n/config";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "../_portfolio/components/Header";
import ProjectPage from "../_portfolio/pages/ProjectPage";
import SecureMarshmallow from "../_portfolio/pages/portfolio/SecureMarshmallow";
import Today from "../_portfolio/pages/portfolio/Today";
import LookMonster from "../_portfolio/pages/portfolio/LookMonster";
import Maeumgajim from "../_portfolio/pages/portfolio/Maeumgajim";
import SurvivalFromTheEpidemic from "../_portfolio/pages/portfolio/SurvivalFromTheEpidemic";
import PerfectContributionsView from "../_portfolio/pages/portfolio/Library/PerfectContributionsView";
import XCameraKit from "../_portfolio/pages/portfolio/Library/XCameraKit";
import Graps from "../_portfolio/pages/portfolio/Library/Graps";
import AVSlider from "../_portfolio/pages/portfolio/Library/AVSlider";

export const APP_VERSION = "2024-03-07 16:26 (KST)";

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/:irl" element={<Main />} />
        <Route element={<ProjectPage />}>
          <Route path={"/project/skyblock"} element={<SecureMarshmallow />} />
          <Route path={"/project/rice-paper"} element={<Today />} />
          <Route path={"/project/lite24"} element={<LookMonster />} />
          <Route path={"/project/beat-table"} element={<Maeumgajim />} />
          <Route
            path={"/project/genshin-calculator"}
            // element={<GenshinCalculator />}
          />
          <Route
            path={"/project/survival-from-the-epidemic"}
            element={<SurvivalFromTheEpidemic />}
          />

          <Route path={"/project/skyblock/:irl"} element={<SecureMarshmallow />} />
          <Route path={"/project/rice-paper/:irl"} element={<Today />} />
          <Route path={"/project/lite24/:irl"} element={<LookMonster />} />
          <Route path={"/project/beat-table/:irl"} element={<Maeumgajim />} />
          <Route
            path={"/project/genshin-calculator/:irl"}
            // element={<GenshinCalculator />}
          />
          <Route
            path={"/project/survival-from-the-epidemic/:irl"}
            element={<SurvivalFromTheEpidemic />}
          />

          <Route path={"/library/PerfectContributionsView"} element={<PerfectContributionsView />} />
          <Route path={"/library/XCamerakit"} element={<XCameraKit />} />
          <Route path={"/library/Graps"} element={<Graps />} />
          <Route path={"/library/AVSlider"} element={<AVSlider />} />

        </Route>
        <Route path="/*" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
