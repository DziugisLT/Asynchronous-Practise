'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              Number(data.population) / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('Lithuania');
getCountryData('Russia');
getCountryData('Latvia');
getCountryData('Estonia'); */
/* request.open('GET', 'https://restcountries.eu/rest/v2/all');
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  data.forEach((country) => {
    const html = `
    <article class="country">
    <img class="country__img" src="${country.flag}" />
    <div class="country__data">
        <h3 class="country__name">${country.name}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row"><span>👫</span>${(
          Number(country.population) / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
    </div>
    </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
  });
  countriesContainer.style.opacity = 1;
}); */

const renderCountry = function (data, className = '') {
  const html = `
          <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                Number(data.population) / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
          </div>
          </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('Lithuania');
getCountryAndNeighbour('Estonia'); */

/* const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);

const getCountryData = function (country) {
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
 */

/* const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // const neighbour = 'jdskj';

      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch((err) => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong | ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('Iceland');
}); */

/* const getCountryData = function (country) {
      const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Country not found (${response.status})`);
          }
          return response.json();
        })
        .then((data) => {
          renderCountry(data[0]);
          const neighbour = data[0].borders[0];
    
          if (!neighbour) return;
    
          return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Country not found (${response.status})`);
          }
          return response.json();
        })
        .then((data) => renderCountry(data, 'neighbour'))
        .catch((err) => {
          console.log(`${err} 💥💥💥`);
          renderError(`Something went wronk | ${err.message}. Try again`);
        })
        .finally(() => {
          countriesContainer.style.opacity = 1;
        });
    }; */

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
