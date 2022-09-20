<p align="center">
  <img src="https://github.com/ceski23/series-ics/blob/master/.github/icon.png" />
</p>

# Series.ics
This app allows you to create your own continually updated calendar with air dates for episodes of your favorite series.

## Installation
1. Clone the repository
```
git clone git@github.com:ceski23/series-ics.git
```
2. Inside project's directory install dependencies
```
npm install
```
3. Create `.env` file in project's root directory with following content:
```bash
TMDB_API_KEY='API_KEY'
```
where `TMDB_API_KEY` is your API key from https://www.themoviedb.org/settings/api

## Usage
Run the development server.
```
npm run start
```

Deploy application
```
npm run deploy
```

In order to use app add new calendar from URL.

Example URL: `http://localhost:3000/?series=46952&series=60625`.