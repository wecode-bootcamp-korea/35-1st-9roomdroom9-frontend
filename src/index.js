import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import './styles/common.scss';
import './styles/reset.scss';

import 'react-loading-skeleton/dist/skeleton.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
