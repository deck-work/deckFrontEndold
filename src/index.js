import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/css/icofont.min.css';


// import './assets/css/slick.min.css';
// import './assets/css/jquery-ui.css';
// import './assets/css/slick-theme.min.css';

import 'bootstrap/dist/js/bootstrap.js';

const root = createRoot(document.getElementById('root'));

root.render(

    <App />
  
);