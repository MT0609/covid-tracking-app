import React from 'react'
import { Text } from 'react-native'
import { FlexBox } from '../../components/Share'
import { HomeCate } from '../../models/interface'
import { CateSelectButon, CateSelectImage } from './styles'

interface Props {
	onChange: (cate: string) => void
}

// country or world
const CateSelect: React.FC<Props> = (props) => {
	return (
		<FlexBox row>
			<CateSelectButon onPress={() => props.onChange(HomeCate.COUNTRY_TAB)}>
				<CateSelectImage
					source={require('../../../assets/vn.png')}
				/>
				<Text>Viet Nam</Text>
			</CateSelectButon>
			<CateSelectButon onPress={() => props.onChange(HomeCate.WORLD_TAB)}>
				<CateSelectImage
					source={require('../../../assets/world.png')}
				/>
				<Text>Global</Text>
			</CateSelectButon>
		</FlexBox>
	)
}

export default CateSelect;