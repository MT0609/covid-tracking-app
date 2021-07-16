import React from 'react'
import { Image, Text } from 'react-native'
import { FilterButton } from './styles';

const CountrySelect: React.FC<{onPress: Function}> = (props) => {
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
			<Text>Filter by country</Text>
		</FilterButton>
	)
}

export default CountrySelect;