import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { BrowserRouter } from "react-router-dom";
import { Global } from './styles/GlobalStyle';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById('root');
const element = <React.StrictMode>
    <BrowserRouter>
        <Analytics/>
        <SpeedInsights/>
        <Global/>
        <HelmetProvider>
            <App/>
        </HelmetProvider>
    </BrowserRouter>
</React.StrictMode>

if (rootElement?.hasChildNodes()) {
    hydrate(element, rootElement);
} else {
    render(element, rootElement);
}

// const root = ReactDOM.createRoot(
//     rootElement as HTMLElement
// );
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Analytics/>
//             <SpeedInsights/>
//             <Global/>
//             <HelmetProvider>
//                 <App/>
//             </HelmetProvider>
//         </BrowserRouter>
//     </React.StrictMode>
// );
