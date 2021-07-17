import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import TopStatisticSection from '../../components/Home/TopStatistic' 
import SubText from '../../components/Home/SubText'
import { SubTitle } from '../../components/Share'
import TimeLineChart from '../../components/Home/Chart'
import CountryFilterButton from '../../components/Home/CountryFilterButton'
import CountrySelect from '../../components/Home/CountryFilter'
import { CountryModel, countryStatisticsResult, HistoricalData } from '../../models/interface'

const CountryHomeSection: React.FC<{
	country: CountryModel
	onChangeCountry: (country: CountryModel) => void
}> = (props) => {
	const {country, onChangeCountry} = props;
	const [countryStatistic, setCountryStatistic] = useState<countryStatisticsResult>();
	const [historyStatistic, setHistoryStatistic] = useState<HistoricalData>({
		"cases": {},
		"deaths": {},
		"recovered": {}
	});
	const [countryFilterShow, setCountryFilterShow] = useState<boolean>(false);
	
	useEffect(() => {
		let isMounted = true;
		const countryOverviewPromise: Promise<any> = fetch(`https://disease.sh/v3/covid-19/countries/${country.name}?strict=true`);
		const countryHistoryPromise: Promise<any> = fetch(`https://disease.sh/v3/covid-19/historical/${country.name}?lastdays=30`);
		
		Promise.all([countryOverviewPromise, countryHistoryPromise])
		.then(responses => Promise.all(responses.map(r => r.json())))
		.then(data => {
			if (!data[0].cases)
				return Alert.alert(
					"Oops",
					"Temporarily not having data in this area. Choose another!"
				);

			if (isMounted) {
				setCountryStatistic(data[0]);
				setHistoryStatistic(data[1].timeline);

				// because cannot query new country's flag when select a new country,
				// pass a prop function to update new country flag outside (category select component) 
				onChangeCountry({
					name: data[0]?.country || "",
					flag: data[0]?.countryInfo.flag || "",
					code: ""
				})
			}
		})
		.catch(error => {
			console.log(error);
			return Alert.alert(
				"Oops",
				"Error in resolving data"
			);
		});
  		return () => { isMounted = false };
	}, [country.name]);

	return (
		<View>
			<TopStatisticSection 
				cases={countryStatistic ? countryStatistic.cases : 0} 
				recovered={countryStatistic ? countryStatistic.recovered : 0}
				deaths={countryStatistic ? countryStatistic.deaths : 0}
			/>

			<CountryFilterButton onPress={() => setCountryFilterShow(true)} />
			<CountrySelect 
				active={countryFilterShow} 
				onSelect={(country) => onChangeCountry({
					...country,
					flag: countryStatistic?.countryInfo.flag
				})}
				onClose={() => setCountryFilterShow(false)} 
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
