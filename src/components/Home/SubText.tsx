import React from 'react'
import { Text } from 'react-native'
import { FlexBox } from '../Share'
import { SubTitle } from '../../components/Share' 

interface Props {
	title: string,
	content: number | string
}

const TopStatisticSection: React.FC<Props> = (props) => {	
	return (
		<FlexBox row style={{marginTop: 10}}>
			<SubTitle>{props.title}: </SubTitle>
			<Text style={{ fontSize: 16 }}>{props.content}</Text>
		</FlexBox>
	)
}

export default TopStatisticSection;
