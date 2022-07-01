import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
