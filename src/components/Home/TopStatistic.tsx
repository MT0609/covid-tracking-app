import React from 'react'
import { Text } from 'react-native'
import { Box, FlexBox } from '../Share'
import { MainStatisticNumber } from './styles'

interface mainStatistic {
	cases: number,
	recovered: number,
	deaths: number
}

const TopStatisticSection: React.FC<mainStatistic> = (props) => {	
	return (
		<FlexBox row justify="space-between">
			<Box color="#F5F06B" borderRadius={5}>
				<MainStatisticNumber>{props.cases}</MainStatisticNumber>
				<Text style={{ fontWeight: "bold" }}>Cases</Text>
			</Box>
			<Box color="#65FC8C" borderRadius={5}>
				<MainStatisticNumber>{props.recovered}</MainStatisticNumber>
				<Text style={{ fontWeight: "bold" }}>Recovered</Text>
			</Box>
			<Box color="#FF7373" borderRadius={5}>
				<MainStatisticNumber>{props.deaths}</MainStatisticNumber>
				<Text style={{ fontWeight: "bold" }}>Deaths</Text>
			</Box>
		</FlexBox>
	)
}

export default TopStatisticSection;
