'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const errorHandler = function (url, errormsg) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errormsg}`);
    }
    return response.json();
  });
};

const whereAmI = function (lat, lng) {
  errorHandler(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`,
    'Too fast bitch'
  )
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.countryName}`);

      return errorHandler(
        `https://restcountries.eu/rest/v2/name/${data.countryName}`,
        'No country by this name'
      );
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
