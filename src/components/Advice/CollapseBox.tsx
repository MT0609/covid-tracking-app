import React, { useState } from 'react';
import { View, Text, LayoutAnimation, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlexBox, SubTitle } from '../Share';
import { AdviceBox, AdviceSubBox } from './style';

interface Props {
	num: number,
	title: string,
	data: Array<string>,
	backgroundColor: string
}

const images: { [key: number]: any } = {
	0: require("./../../../assets/wear_mask.png"),
	1: require("./../../../assets/social-distancing.png"),
	2: require("./../../../assets/vaccine.png"),
	3: require("./../../../assets/clean.png"),
	4: require("./../../../assets/checkup.png"),
	5: require("./../../../assets/documents.png"),
}

const AdviceCollapse: React.FC<Props> = (props) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setExpanded(prevState => !prevState)
	}

  	return (
		<View>
			<AdviceBox backgroundColor={props.backgroundColor} onPress={toggleExpand}>
				<FlexBox row>
					<Image
						source={images[props.num]}
						style={{ width: 40, height: 40, marginRight: 20 }}
					/>
					<SubTitle>{props.title}</SubTitle>
				</FlexBox>
                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />
            </AdviceBox>
			{
                expanded &&
                <AdviceSubBox>
					{
						props.data.map((text, key) => <Text key={key}>{text}</Text>)
					}
                </AdviceSubBox>
            }
		</View>
	)
}

export default AdviceCollapse