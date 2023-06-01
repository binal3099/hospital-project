import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './Component/App/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './Container/Home/Home';
import Department from './Component/Department/Department';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    <Department />
  </React.StrictMode>,
)
