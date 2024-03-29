import './Resources/css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './firebase';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));