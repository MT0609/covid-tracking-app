export enum HomeCate {
	COUNTRY_TAB = "country_tab",
	WORLD_TAB = "world_tab",
}

export interface countryStatisticsResult {
	"active": number,
	"activePerOneMillion": number,
	"cases": number,
	"casesPerOneMillion": number,
	"continent": string,
	"country": string,
	"countryInfo": {
	  "_id": number,
	  "flag": string,
	  "iso2": string,
	  "iso3": string,
	  "lat": number,
	  "long": number,
	},
	"critical": number,
	"criticalPerOneMillion": number,
	"deaths": number,
	"deathsPerOneMillion": number,
	"oneCasePerPeople": number,
	"oneDeathPerPeople": number,
	"oneTestPerPeople": number,
	"population": number,
	"recovered": number,
	"recoveredPerOneMillion": number,
	"tests": number,
	"testsPerOneMillion": number,
	"todayCases": number,
	"todayDeaths": number,
	"todayRecovered": number,
	"undefined": number,
	"updated": number,
}

export interface worldStatisticsResult {
  "updated": number,
  "cases": number,
  "todayCases": number,
  "deaths": number,
  "todayDeaths": number,
  "recovered": number,
  "todayRecovered": number,
  "active": number,
  "critical": number,
  "casesPerOneMillion": number,
  "deathsPerOneMillion": number,
  "tests": number,
  "testsPerOneMillion": number,
  "population": number,
  "oneCasePerPeople": number,
  "oneDeathPerPeople": number,
  "oneTestPerPeople": number,
  "undefined": number,
  "activePerOneMillion": number,
  "recoveredPerOneMillion": number,
  "criticalPerOneMillion": number,
  "affectedCountries": number
}

export interface HistoricalData {
	"cases": {
		[date: string]: number
	},
	"deaths": {
		[date: string]: number
	},
	"recovered": {
		[date: string]: number
	}
}

export interface CountryModel {
	name: string,
	code?: string,
	flag?: string
}
