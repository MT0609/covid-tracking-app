import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { Box, FlexBox } from '../Share'
import { MainStatisticNumber } from './styles'

interface mainStatistic {
	cases: number,
	recovered: number,
	deaths: number
}

const TopStatisticSection: React.FC<mainStatistic> = (props) => {	
	const { t } = useTranslation();

	return (
		<FlexBox row justify="space-between">
			<Box color="#F5F06B" borderRadius={5}>
				<MainStatisticNumber>{props.cases}</MainStatisticNumber>
				<Text style={{ fontWeight: "bold" }}>{t("cases")}</Text>
			</Box>
			<Box color="#65FC8C" borderRadius={5}>
				<MainStatisticNumber>{props.recovered}</MainStatisticNumber>
				<Text style={{ fontWeight: "bold" }}>{t("recovered")}</Text>
			</Box>
			<Box color="#FF7373" borderRadius={5}>
				<MainStatisticNumber>{props.deaths}</MainStatisticNumber>
				<Text style={{ fontWeight: "bold" }}>{t("deaths")}</Text>
			</Box>
		</FlexBox>
	)
}

export default TopStatisticSection;
