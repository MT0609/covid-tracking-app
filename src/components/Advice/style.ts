import styled from 'styled-components';
import { TouchableOpacity, View } from 'react-native'

export const AdviceBox = styled(TouchableOpacity)<{backgroundColor?: string}>`
	marginTop: 20px;
	padding: 10px;
	display: flex;
	flexDirection: row;
	justify-content: space-between;
	borderRadius: 5px;
	backgroundColor: ${p => p.backgroundColor || "#f6facf"};
`

export const AdviceSubBox = styled(View)`
	padding: 10px;
	borderRadius: 5px;
	backgroundColor: #f5f2f2;
	shadowColor: #000;
	shadowOpacity: 0.2;
	elevation: 5;
`