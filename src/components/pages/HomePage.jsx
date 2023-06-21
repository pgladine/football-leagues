import PageLayout from '../layout/PageLayout'
import LeaguesList from '../leagues/leagues-list/LeaguesList'

export default function HomePage() {
  return (
    <div>
      <PageLayout>
        <LeaguesList />
      </PageLayout>
    </div>
  )
}
