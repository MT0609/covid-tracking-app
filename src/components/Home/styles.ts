import styled, { css } from 'styled-components';
import { TouchableOpacity, Image, Text } from 'react-native'

export const CateSelectButon = styled(TouchableOpacity)<{active: boolean}>`
	marginRight: 20px;
	marginBottom: 20px;
	minWidth: 120px;
	display: flex;
	flexDirection: row;
	alignItems: center;
	padding: 5px 10px;
	borderRadius: 50px;
	border: #C0BEBE;
	${p => p.active && css`
		backgroundColor: #2672F3;
		fontWeight: bold;
		border: none;
	`}
`

export const CateSelectText = styled(Text)<{active: boolean}>`
	color: black;
	${p => p.active && css`
		color: white;
		fontWeight: bold;
	`}
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

export const FilterButton = styled(TouchableOpacity)`
	marginTop: 10px;
	marginBottom: 10px;
	marginRight: auto;
	padding: 8px 20px;
	display: flex;
	flexDirection: row;
	justify-content: flex-start;
	border: 1px solid black;
	borderRadius: 20px;
`

export const CloseModalButton = styled(TouchableOpacity)`
	marginLeft: auto;
	padding: 5px 10px;
	backgroundColor: white;
	border: 1px solid black;
	borderRadius: 10px;
`