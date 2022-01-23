import 'dotenv/config';
import express from 'express';
import { getSeriesEvents } from './events';
import ics from 'ics';

const app = express();
const port = 3000;

function nonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

app.get('/', async (req, res) => {
  const ids = (Array.isArray(req.query.series) ? req.query.series : [req.query.series]).filter(nonNullable);
  const events = [];

  for (const id of ids) {
    try {
      const new_events = await getSeriesEvents(Number.parseInt(id.toString(), 10));
      events.push(...new_events);
    } catch (error) {
      console.error(error);
    }
  }

  const calendar = ics.createEvents(events).value;
  res.setHeader('Content-Type', 'text/calendar');
  res.send(calendar);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});