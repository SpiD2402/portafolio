import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {MyPortfolio} from "./MyPortfolio.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MyPortfolio/>
  </StrictMode>,
)
