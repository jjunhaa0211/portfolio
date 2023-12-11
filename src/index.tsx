import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { BrowserRouter } from "react-router-dom";
import { Global } from './styles/GlobalStyle';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Analytics/>
            <SpeedInsights/>
            <Global/>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </BrowserRouter>
    </React.StrictMode>
);
