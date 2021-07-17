import React from 'react'
import { useTranslation } from 'react-i18next';
import { Image, Text } from 'react-native'
import { FilterButton } from './styles';

const CountrySelect: React.FC<{onPress: Function}> = (props) => {
	const { t } = useTranslation();

	return (
		<FilterButton onPress={() => props.onPress()}>
			<Image
				style={{
					width: 20,
					height: 20,
					marginRight: 10
				}}
				source={require('../../../assets/filter.png')}
			/>
			<Text>{t("filterByCountry")}</Text>
		</FilterButton>
	)
}

export default CountrySelect;