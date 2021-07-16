import React from 'react'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryTheme } from 'victory-native'
import { HistoricalData } from '../../models/interface';

interface Props {
	data: HistoricalData
}

const generateLineData = (data: { [date: string]: number }): Array<Object> => {
	let records: Array<Object> = [];
	Object.keys(data).map(key => {
		let record = { x: key, y: data[key]}
		records.push(record)
	})
	return records;
}

const TimeLineChart: React.FC<Props> = (props) => {
	const { data } = props;

	return (
		<VictoryChart theme={VictoryTheme.material}>
			{/* Horizontal */}
			<VictoryAxis
				fixLabelOverlap
			/>
			{/* Vertical */}
			<VictoryAxis
				dependentAxis
			/>
			<VictoryLine
				style={{
					data: { stroke: "#F5F06B" },
				}}
				data={generateLineData(data.cases)}
			/>
			<VictoryLine
				style={{
					data: { stroke: "#65FC8C" },
				}}
				data={generateLineData(data.recovered)}				
			/>
			<VictoryLine
				style={{
					data: { stroke: "#FF7373" },
				}}
				data={generateLineData(data.deaths)}
			/>
		</VictoryChart>
	)
}

export default TimeLineChart;