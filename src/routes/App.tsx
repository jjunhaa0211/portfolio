import React from 'react';
import '../i18n/config';
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Header from "../_portfolio/components/Header";
import ProjectPage from "../_portfolio/pages/ProjectPage";
import SkyblockRemake from "../_portfolio/pages/portfolio/SkyblockRemake";
import RicePaper from "../_portfolio/pages/portfolio/RicePaper";
import Lite24 from "../_portfolio/pages/portfolio/Lite24";
import BeatTable from "../_portfolio/pages/portfolio/BeatTable";
import GenshinCalculator from "../_portfolio/pages/portfolio/GenshinCalculator";
import SurvivalFromTheEpidemic from "../_portfolio/pages/portfolio/SurvivalFromTheEpidemic";

export const APP_VERSION = "2023-12-12 09:55 (KST)";

function App() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path='/:irl' element={<Main/>}/>
                <Route element={<ProjectPage/>}>
                    <Route path={"/project/skyblock"} element={<SkyblockRemake/>}/>
                    <Route path={"/project/rice-paper"} element={<RicePaper/>}/>
                    <Route path={"/project/lite24"} element={<Lite24/>}/>
                    <Route path={"/project/beat-table"} element={<BeatTable/>}/>
                    <Route path={"/project/genshin-calculator"} element={<GenshinCalculator/>}/>
                    <Route path={"/project/survival-from-the-epidemic"} element={<SurvivalFromTheEpidemic/>}/>

                    <Route path={"/project/skyblock/:irl"} element={<SkyblockRemake/>}/>
                    <Route path={"/project/rice-paper/:irl"} element={<RicePaper/>}/>
                    <Route path={"/project/lite24/:irl"} element={<Lite24/>}/>
                    <Route path={"/project/beat-table/:irl"} element={<BeatTable/>}/>
                    <Route path={"/project/genshin-calculator/:irl"} element={<GenshinCalculator/>}/>
                    <Route path={"/project/survival-from-the-epidemic/:irl"} element={<SurvivalFromTheEpidemic/>}/>
                </Route>
                <Route path='/*' element={<Main/>}/>
            </Route>
        </Routes>
    );
}

export default App;
