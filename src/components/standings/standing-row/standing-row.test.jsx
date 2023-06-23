import { render, cleanup, screen } from "@testing-library/react";
import StandingRow from './StandingRow'

describe('<StandingRow/>', () => {
  afterEach(cleanup)

  it('should render the data with the right props', () => {
    // Given
    const teamData = {
      position: 1,
      teamCrest: 'https://teamCrest.url',
      teamName: 'teamName',
      points: 15,
      playedGames: 6,
      won: 5,
      draw: 0,
      lost: 1,
      goalsFor: 20,
      goalsAgainst: 6,
    }
    // When
    render(<StandingRow {...teamData} />)

    // Then
    expect(screen.getByAltText('escudo')).toHaveAttribute('src', teamData.teamCrest)
    expect(document.body).toMatchSnapshot()
  })
})