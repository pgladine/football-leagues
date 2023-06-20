import { Routes, Route } from "react-router-dom"
import LeaguesContextProvider from "./contexts/LeaguesContextProvider"
import HomePage from "./components/pages/HomePage"
import StandingsPage from "./components/pages/StandingsPage"
import MatchdaysPage from "./components/pages/MatchdaysPage"

function App() {
  return (
    <>
      <LeaguesContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:leagueId/standings" element={<StandingsPage />} />
          <Route path="/:leagueId/matchdays" element={<MatchdaysPage />} />
        </Routes>
      </LeaguesContextProvider>
    </>
  )
}

export default App
