import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { vi } from 'vitest'
import StandingTable from "./StandingTable";
import standingsService from '../../../services/standings'

describe('<StandingTable/>', () => {
  afterEach(cleanup)

  it('should render <Loader/> when standing is null ', () => {
    // Given
    const standingsServiceListMock = vi.spyOn(standingsService, 'list').mockResolvedValue(null)


    // When
    render(<StandingTable />)

    // Then
    expect(standingsServiceListMock).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  })

  it('should render a list of <StandingRow/> component with header', async () => {
    // Given
    const mockStandingLeagueList = [
      [null, [
        {
          position: 1,
          teamId: 3,
          teamCrest: 'https://teamCrest1.url',
          teamName: 'teamName1',
          points: 15,
          playedGames: 6,
          won: 5,
          draw: 0,
          lost: 1,
          goalsFor: 20,
          goalsAgainst: 6,
        },
        {
          position: 2,
          teamId: 4,
          teamCrest: 'https://teamCrest2.url',
          teamName: 'teamName2',
          points: 14,
          playedGames: 6,
          won: 4,
          draw: 0,
          lost: 2,
          goalsFor: 18,
          goalsAgainst: 8,
        }
      ]]
    ]
    const standingsServiceListMock = vi.spyOn(standingsService, 'list').mockResolvedValue(mockStandingLeagueList)

    // When
    render(<StandingTable />);

    // Then
    await waitFor(async () =>
      expect(await screen.findByTestId('loader')).not.toBeInTheDocument()
    )

    expect(standingsServiceListMock).toHaveBeenCalledTimes(1);
    expect(await screen.findByTestId('standing-list-header')).toBeInTheDocument();
    // TODO ver que pinta 2 filas
    expect((await screen.findAllByTestId('standing-row')).length).toEqual(2)
  })
})