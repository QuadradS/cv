import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css';
import Theme from "./theme.config";
import BaseLayout from "./components/layouts/base";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Theme>
            <BaseLayout>
                <App/>
            </BaseLayout>
        </Theme>
    </React.StrictMode>
);
