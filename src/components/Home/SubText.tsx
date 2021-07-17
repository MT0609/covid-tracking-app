import React from 'react'
import { Text } from 'react-native'
import { FlexBox } from '../Share'
import { SubTitle } from '../../components/Share' 

interface Props {
	t: any,
	title: string,
	content: number | string
}

const TopStatisticSection: React.FC<Props> = (props) => {	
	const { t } = props;

	return (
		<FlexBox row style={{marginTop: 10}}>
			<SubTitle>{t(props.title)}: </SubTitle>
			<Text style={{ fontSize: 16 }}>{t(props.content)}</Text>
		</FlexBox>
	)
}

export default TopStatisticSection;
