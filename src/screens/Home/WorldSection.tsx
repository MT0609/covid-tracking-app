import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import TopStatisticSection from '../../components/Home/TopStatistic' 
import SubText from '../../components/Home/SubText'
import { worldStatisticsResult } from '../../models/interface'

const WorldHomeSection: React.FC = () => {
	const [worldStatistic, setWorldStatistic] = useState<worldStatisticsResult>();
	
	useEffect(() => {
		let isMounted = true;
		fetch('https://disease.sh/v3/covid-19/all')
		.then(res => res.json())
		.then(data => {
			if (isMounted) setWorldStatistic(data)
		}) 
  		return () => { isMounted = false };
	}, [])

	return (
		<View>
			<TopStatisticSection 
				cases={worldStatistic ? worldStatistic.cases : 0} 
				recovered={worldStatistic ? worldStatistic.recovered : 0}
				deaths={worldStatistic ? worldStatistic.deaths : 0}
			/>
			<SubText title="Population" content={worldStatistic ? worldStatistic.population : 0} />
			<SubText title="Affected countries" content={worldStatistic ? worldStatistic.affectedCountries : "Not found"} />
		</View>
	)
}

export default WorldHomeSection;
