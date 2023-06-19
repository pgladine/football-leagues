import { Routes, Route } from "react-router-dom"
import LeaguesList from "./components/leagues/leagues-list/LeaguesList"
import StandingTable from "./components/standings/standing-table/StandingTable"
import DailyMatchesList from "./components/matches-results/daily-matches-list/DailyMatchesList"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LeaguesList />} />
        <Route path="/:leagueId/standings" element={<StandingTable />} />
        <Route path="/:leagueId/matches-results" element={<DailyMatchesList />} />
      </Routes>
    </div>
  )
}

export default App
