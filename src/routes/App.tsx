import React from 'react';
import '../i18n/config';
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import styled from "styled-components";
import Header from "../_portfolio/components/Header";
import ProjectPage from "../_portfolio/pages/ProjectPage";
import SkyblockRemake from "../_portfolio/pages/portfolio/SkyblockRemake";

export const APP_VERSION = "v0.1-231216";

function App() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path='/:irl' element={<Main/>}/>
                <Route element={<ProjectPage/>}>
                    <Route path={"/project/skyblock"} element={<SkyblockRemake/>}/>
                </Route>
                <Route path='/*' element={<Main/>}/>
            </Route>
        </Routes>
    );
}

export default App;
