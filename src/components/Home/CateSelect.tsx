import React from 'react'
import { FlexBox } from '../../components/Share'
import { HomeCate, CountryModel } from '../../models/interface'
import { CateSelectButon, CateSelectImage, CateSelectText } from './styles'

interface Props {
	selectedCountry: CountryModel
	active: HomeCate | string
	onChange: (cate: string) => void
}

// country or world
const CateSelect: React.FC<Props> = (props) => {
	const { selectedCountry, active = HomeCate.COUNTRY_TAB } = props;

	return (
		<FlexBox row>
			<CateSelectButon active={active === HomeCate.COUNTRY_TAB} onPress={() => props.onChange(HomeCate.COUNTRY_TAB)}>
				<CateSelectImage
					source={selectedCountry.flag ? {
						uri: selectedCountry.flag
					} : require('../../../assets/vn.png')}
				/>
				<CateSelectText active={active === HomeCate.COUNTRY_TAB}>{selectedCountry.name || "Viet Nam"}</CateSelectText>
			</CateSelectButon>
			<CateSelectButon active={active === HomeCate.WORLD_TAB} onPress={() => props.onChange(HomeCate.WORLD_TAB)}>
				<CateSelectImage
					source={require('../../../assets/world.png')}
				/>
				<CateSelectText active={active === HomeCate.WORLD_TAB}>Global</CateSelectText>
			</CateSelectButon>
		</FlexBox>
	)
}

export default CateSelect;