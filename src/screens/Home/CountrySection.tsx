import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import TopStatisticSection from '../../components/Home/TopStatistic' 
import SubText from '../../components/Home/SubText'
import { SubTitle } from '../../components/Share'
import TimeLineChart from '../../components/Home/Chart'
import { countryStatisticsResult, HistoricalData } from '../../models/interface'

const CountryHomeSection: React.FC = () => {
	const [countryStatistic, setCountryStatistic] = useState<countryStatisticsResult>();
	const [historyStatistic, setHistoryStatistic] = useState<HistoricalData>({
		"cases": {},
		"deaths": {},
		"recovered": {}
	});
	
	useEffect(() => {
		let isMounted = true;
		const countryOverviewPromise: Promise<any> = fetch('https://disease.sh/v3/covid-19/countries/Vietnam?strict=true');
		const countryHistoryPromise: Promise<any> = fetch('https://disease.sh/v3/covid-19/historical/Vietnam?lastdays=30');
		Promise.all([countryOverviewPromise, countryHistoryPromise])
		.then(responses => Promise.all(responses.map(r => r.json())))
		.then(data => {
			if (isMounted) {
				setCountryStatistic(data[0]);
				setHistoryStatistic(data[1].timeline);
			}
		});
  		return () => { isMounted = false };
	}, []);

	return (
		<View>
			<TopStatisticSection 
				cases={countryStatistic ? countryStatistic.cases : 0} 
				recovered={countryStatistic ? countryStatistic.recovered : 0}
				deaths={countryStatistic ? countryStatistic.deaths : 0}
			/>
			<SubText title="Population" content={countryStatistic ? countryStatistic.population : 0} />
			<SubText title="Continent" content={countryStatistic ? countryStatistic.continent : "Not found"} />
			<View
				style={{
					marginTop: 20,
					marginBottom: 20,
					borderBottomColor: "black",
					borderBottomWidth: 0.8,
				}}
			/>
			<SubTitle fontSize={18}>{countryStatistic?.country} Chart Statistic in last 30 days</SubTitle>
			<TimeLineChart data={historyStatistic} />
		</View>
	)
}

export default CountryHomeSection;
