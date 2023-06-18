import { Routes, Route } from "react-router-dom"
import LeaguesList from "./components/leagues/leagues-list/LeaguesList"
import Standings from "./components/standings/standings-list/Standings"
import DailyMatchesList from "./components/matches-results/daily-matches-list/DailyMatchesList"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LeaguesList />} />
        <Route path="/:leagueId/matches-results" element={<DailyMatchesList />} />
      </Routes>
    </div>
  )
}

export default App
