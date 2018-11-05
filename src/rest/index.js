export function fetchSamples() {
  return fetch(`sample-data/data.json`)
    .then(res => {
      return res.json();
    });
}

export function fetchSample(id) {
  return fetch(`sample-data/sample${id}.json`)
    .then(res => {
      return res.json();
    });
}
