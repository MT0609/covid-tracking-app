import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import { useTranslation } from 'react-i18next'
import TopStatisticSection from '../../components/Home/TopStatistic' 
import SubText from '../../components/Home/SubText'
import { SubTitle } from '../../components/Share'
import TimeLineChart from '../../components/Home/Chart'
import { HistoricalData, worldStatisticsResult } from '../../models/interface'

const WorldHomeSection: React.FC = () => {
	const [worldStatistic, setWorldStatistic] = useState<worldStatisticsResult>();
	const [historyStatistic, setHistoryStatistic] = useState<HistoricalData>({
		"cases": {},
		"deaths": {},
		"recovered": {}
	});
	const { t } = useTranslation();  
	
	useEffect(() => {
		let isMounted = true;
		const worldOverviewPromise: Promise<any> = fetch('https://disease.sh/v3/covid-19/all');
		const worldHistoryPromise: Promise<any> = fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30');
		Promise.all([worldOverviewPromise, worldHistoryPromise])
		.then(responses => Promise.all(responses.map(r => r.json())))
		.then(data => {
			if (isMounted) {
				setWorldStatistic(data[0]);
				setHistoryStatistic(data[1]);
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
	}, [])

	return (
		<View>
			<TopStatisticSection 
				cases={worldStatistic ? worldStatistic.cases : 0} 
				recovered={worldStatistic ? worldStatistic.recovered : 0}
				deaths={worldStatistic ? worldStatistic.deaths : 0}
			/>
			<SubText t={t} title="population" content={worldStatistic ? worldStatistic.population : 0} />
			<SubText t={t} title="affectedCountries" content={worldStatistic ? worldStatistic.affectedCountries : "Not found"} />
			<View
				style={{
					marginTop: 20,
					marginBottom: 20,
					borderBottomColor: "black",
					borderBottomWidth: 0.8,
				}}
			/>
			<SubTitle fontSize={18}>{t("worldLineChartStatistic")}</SubTitle>
			<TimeLineChart data={historyStatistic} />
		</View>
	)
}

export default WorldHomeSection;
