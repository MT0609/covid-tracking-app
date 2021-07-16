import React, { useState, useRef } from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native'
import { Input } from 'react-native-elements'
import { SubTitle } from '../Share'
import { countries } from '../../models/countries'
import { CountryModel } from '../../models/interface'
import { CloseModalButton } from './styles'

interface CountryItemProps {
	country: CountryModel, 
	onPress: (item: CountryModel) => void
}

const CountryItem: React.FC<CountryItemProps> = (props) => {
	const {country, onPress} = props;

	return (
		<TouchableOpacity style={{padding: 5}} onPress={() => onPress(country)}>
			<Text>{country.name}</Text>
		</TouchableOpacity>
	)
}

interface CountrySelectProps {
	active: boolean;
	onSelect: (e: CountryModel) => void;
	onClose: () => void;
}

const CountrySelect: React.FC<CountrySelectProps> = (props) => {
	const [countryInput, setCountryInput] = useState<string>("");
	const [filteredCountries, setFilteredCountries] = useState<Array<CountryModel>>(countries);

	const typingTimeoutRef = useRef<any>(null);
	
	const handleChangeInput = (text: string) => {
		setCountryInput(text);

		if (typingTimeoutRef.current)
			clearTimeout(typingTimeoutRef.current);

		typingTimeoutRef.current = setTimeout(() => {
			let pattern = new RegExp(text, "i");
			let filtered = countries.filter(country => pattern.test(country.name));
			setFilteredCountries(filtered);
		}, 300);
	};

	return (
		<Modal
			animationType="fade"
            visible = {props.active}
		>
			<View style={{backgroundColor: "#000000aa", flex: 1}}>
				<View style={{ backgroundColor: "#ffffff", margin: 50, marginBottom: 120, padding: 20}}>
					<View style={{ paddingBottom: 10}}>
						<SubTitle>Select a new country</SubTitle>
					</View>
					<Input 
						style={{ fontSize: 16 }} 
						value={countryInput} 
						onChangeText={handleChangeInput} 
						placeholder="Type in new country" 
					/>
					<View style={{ height: "80%" }}>
						<FlatList
							data={filteredCountries}
							renderItem={({ item }) => (
								<CountryItem
									country={item}
									onPress={(e) => { props.onClose(); props.onSelect(e) }}
								/>
							)}
							keyExtractor={item => item.code || item.name}
						/>
					</View>
					<CloseModalButton onPress={() => props.onClose()}>
						<Text style={{ color: "black" }}>Close</Text>
					</CloseModalButton>
				</View>
			</View>
		</Modal>
	)
}

export default CountrySelect;