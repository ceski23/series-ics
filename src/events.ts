import { getSeason, getSeries } from "./tmdb";

interface Event {
  start: [number, number, number];
  end: [number, number, number];
  title: string;
  description: string;
  calName: string;
}

export const getSeriesEvents = async (seriesId: number) => {
  const events = [];
  const { seasons, name } = await getSeries(seriesId);

  for (const season of seasons) {
    const { episodes } = await getSeason(seriesId, season.season_number);

    for (const episode of episodes) {
      const S = episode.season_number.toString().padStart(2, '0');
      const E = episode.episode_number.toString().padStart(2, '0');

      const start_date = new Date(episode.air_date);
      const end_date = new Date(start_date);
      end_date.setDate(end_date.getDate() + 1);

      if (episode.air_date === '') continue;

      const event: Event = {
        start: [start_date.getFullYear(), start_date.getMonth()+1, start_date.getDate()],
        end: [end_date.getFullYear(), end_date.getMonth()+1, end_date.getDate()],
        title: `${name} [S${S}E${E}] ${episode.name}`,
        description: episode.overview,
        calName: 'Series Calendar'
      }

      events.push(event);
    }
  }

  return events;
}