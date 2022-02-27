import _ from 'lodash';
import { countries } from './countries';

export const participatingCountries: { [key in string]: IParticipatingCountries } = {
  asia: {
    continentTitle: 'ASIA-OCEANIA',
    continentColor: '#000b56',
    continentCountries: _.filter(countries, (country) => country.continent === 'as-oc'),
  },
  america: {
    continentTitle: 'AMERICA',
    continentColor: '#003594',
    continentCountries: _.filter(countries, (country) => country.continent === 'na-sa'),
  },
  europe: {
    continentTitle: 'EUROPE',
    continentColor: '#e31c79',
    continentCountries: _.filter(countries, (country) => country.continent === 'eu'),
  },
  africa: {
    continentTitle: 'ME-AFRICA',
    continentColor: '#ca0339',
    continentCountries: _.filter(countries, (country) => country.continent === 'af'),
  },
};
