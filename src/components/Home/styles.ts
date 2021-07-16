import styled from 'styled-components';
import { TouchableOpacity, Image, Text } from 'react-native'

export const CateSelectButon = styled(TouchableOpacity)`
	marginRight: 20px;
	marginBottom: 20px;
	minWidth: 120px;
	display: flex;
	flexDirection: row;
	alignItems: center;
	padding: 5px 10px;
	borderRadius: 50px;
	border: #C0BEBE;
	color: black;
`

export const CateSelectImage = styled(Image)`
	width: 30px;
	height: 30px;
	marginRight: 10px;
	borderRadius: 20px;
`

export const MainStatisticNumber = styled(Text)`
	fontSize: 18px;
	fontWeight: bold;
	color: white;
`