import React from 'react';
import '../i18n/config';
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import styled from "styled-components";

export const APP_VERSION = "v0.1-231216";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
        </Routes>
    );
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000 0%, #160023 35.42%, #070417 60.42%, #000C1F 83.74%, #000 100%);
`

export default App;
