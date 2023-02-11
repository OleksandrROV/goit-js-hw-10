import { Notify } from 'notiflix';

export default function renderCountries(dataCountries) {
  let countCountries = dataCountries.length;

  const countryList = document.querySelector('.country-list');

  const countryInfo = document.querySelector('.country-info');

  let countryArray = [];

  if (countCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (countCountries >= 2 && countCountries <= 10) {
    dataCountries.map(country => {
      // добаити стилі
      countryArray.push(`
			<li>
			  <img class="flags" src="${country.flags.svg}" width=20/>
				<span>${country.name.official}</span>
			</li>
			`);
      countryList.innerHTML = countryArray.join('');
    });
    countryInfo.innerHTML = '';
  } else {
    let country = dataCountries[0];
    countryInfo.innerHTML = `
		<img class="flags" src="${country.flags.svg}" width=20/>
				<span style = "font-size: 20px" ><b>${country.name.official}</b></span>
				<p><b>Capital:</b> ${country.capital}</p>
				<p><b> Population:</b> ${country.population}</p>
				<p><b>Languages:</b> ${Object.values(country.languages).join(', ')}</p>
		`;
    countryList.innerHTML = '';
  }
  countryList.style.listStyleType = 'none';
  countryList.style.padding = '0';
}
