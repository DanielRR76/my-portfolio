import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { AboutPage } from './pages/AboutPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { ResumePage } from './pages/ResumePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<AboutPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
