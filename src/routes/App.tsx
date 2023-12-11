import React from 'react';
import '../i18n/config';
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import styled from "styled-components";
import Header from "../_portfolio/components/Header";
import ProjectPage from "../_portfolio/pages/ProjectPage";
import SkyblockRemake from "../_portfolio/pages/portfolio/SkyblockRemake";
import RicePaper from "../_portfolio/pages/portfolio/RicePaper";
import Lite24 from "../_portfolio/pages/portfolio/Lite24";
import BeatTable from "../_portfolio/pages/portfolio/BeatTable";
import GenshinCalculator from "../_portfolio/pages/portfolio/GenshinCalculator";

export const APP_VERSION = "v0.1-231216";

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
                    <Route path={"/project/survival-from-the-epidemic"} element={<RicePaper/>}/>
                </Route>
                <Route path='/*' element={<Main/>}/>
            </Route>
        </Routes>
    );
}

export default App;
