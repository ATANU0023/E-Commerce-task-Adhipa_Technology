import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-72j65upzigmo3t0k.us.auth0.com"
    clientId="MA8vVfFsJ78S2vEuT4kJkZGSVQaKI8BI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </React.StrictMode>,
  </Auth0Provider>
)
