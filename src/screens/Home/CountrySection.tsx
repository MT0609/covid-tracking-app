import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import TopStatisticSection from '../../components/Home/TopStatistic' 
import SubText from '../../components/Home/SubText'
import { countryStatisticsResult } from '../../models/interface'

const CountryHomeSection: React.FC = () => {
	const [countryStatistic, setCountryStatistic] = useState<countryStatisticsResult>();
	
	useEffect(() => {
		let isMounted = true;
		fetch('https://disease.sh/v3/covid-19/countries/Vietnam?strict=true')
		.then(res => res.json())
		.then(data => {
			if (isMounted) setCountryStatistic(data)
		})
  		return () => { isMounted = false };
	}, [])

	return (
		<View>
			<TopStatisticSection 
				cases={countryStatistic ? countryStatistic.cases : 0} 
				recovered={countryStatistic ? countryStatistic.recovered : 0}
				deaths={countryStatistic ? countryStatistic.deaths : 0}
			/>
			<SubText title="Population" content={countryStatistic ? countryStatistic.population : 0} />
			<SubText title="Continent" content={countryStatistic ? countryStatistic.continent : "Not found"} />
		</View>
	)
}

export default CountryHomeSection;
