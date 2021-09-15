# Phos

## Finding beautiful photographs, thanks to Pexels!

Phos is a photograph-aggregating app that was created as part of the learning process. It relies on Pexels' API to fetch photographs and utilizes CSS Grid to create a lovely, uniform layout.

## Features

- Find the top 15 curated photographs of the day.
- Search for the photographs of your preference, by utilizing the search bar on top.
- Fetch additional photographs, either curated or search-generated.

## Tech

To work properly, the Phos app uses the following:

- JavaScript
- Pexels API
- SCSS
- HTML

## Installation

The current setup requires for a config.js file to exist,

```cli
touch config.js
```

## Usage

To use, the config.js requires a Pexels API key, declared under the 'config' variable.

```JavaScript
const config = your_api_key;
```

To use it, the config file needs to be added to the HTML and then imported to the app.js

```JavaScript
const auth = config;
```

## API Key Alternative

Instead, you can use your API key directly through the prompt on load.

## Live Version

<https://developedbygeo.github.io/Phos>

## Development

Want to contribute? Great!
Contributions are more than welcome, as I am currently learning so I would love to see any changes.

## Acknowledgement

A big thank you to Pexels.com for creating the API, as this learning experience would not have been feasible without it!

## License

MIT
