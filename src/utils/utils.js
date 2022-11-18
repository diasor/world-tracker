export function getPopulationColor(population) {
  if (population > 60000000) return "red";
  else if (population > 50000000) return "purple";
  else if (population > 15000000) return "blue";
  else if (population > 10000000) return "orange";
  else if (population > 5000000) return "yellow";
  else return "green";
}

export function getCovidColor(covidNumber) {
  if (covidNumber === -1) return "grey";
  else if (covidNumber > 600000) return "red";
  else if (covidNumber > 500000) return "purple";
  else if (covidNumber > 300000) return "blue";
  else if (covidNumber > 200000) return "orange";
  else if (covidNumber > 100000) return "yellow";
  else return "green";
}

export function getPreviousDay(date = new Date()) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate() - 1);

  return previous;
}
