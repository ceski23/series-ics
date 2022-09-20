import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getSeriesEvents } from '../lib/events';
import { isFulfilled, nonNullable } from '../lib/utils';

import ics = require('ics');

export default async function (req: VercelRequest, res: VercelResponse) {
  const ids = (Array.isArray(req.query.series) ? req.query.series : [req.query.series])
    .filter(nonNullable)
    .map(Number);

  const results = await Promise.allSettled(ids.map(getSeriesEvents));
  const events = results
    .filter(isFulfilled)
    .flatMap(data => data.value);

  const calendar = ics.createEvents(events).value;
  
  res.setHeader('Content-Type', 'text/calendar');
  res.send(calendar);
}