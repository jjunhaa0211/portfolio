import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import { BrowserRouter } from "react-router-dom";
import { Global } from './styles/GlobalStyle';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Analytics/>
            <Global/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
