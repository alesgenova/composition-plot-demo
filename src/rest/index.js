export function fetchDataSet() {
  return fetch(`sample-data/experiment.json`)
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
