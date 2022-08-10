/**
 * Function to get array of all states.
 * - with no duplicates
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
 function getAllStates(data) {
    const states = [];
    data.forEach(({ state }) => {
      if (!states.includes(state)) states.push(state);
    });
    return states;
  }
  function getAllCities(data) {
    const cities = [];
    data.forEach(({ city }) => {
      if (!cities.includes(city)) cities.push(city);
    });
    return cities;
  }