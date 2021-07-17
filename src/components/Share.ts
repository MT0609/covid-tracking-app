import styled, { css } from 'styled-components';
import { Text, View } from 'react-native';

export const Page = styled(View)`
	flex: 1;
	padding: 50px 20px;
	backgroundColor: white;
`

export const FlexBox = styled(View)<{row?: boolean, justify?: string}>`
	display: flex;
	flexWrap: wrap;
	${p => p.row && css`
		flexDirection: row;
  	`}
	justifyContent: ${p => p.justify || "flex-start"};
	alignItems: center;
`

export const PageTitle = styled(Text)`
	marginBottom: 20px;
	fontSize: 25px;
	fontWeight: bold;
`

export const SubTitle = styled(Text)<{fontSize?: number}>`
	fontSize: ${p => p.fontSize ? `${p.fontSize}px` : "16px"}
	fontWeight: bold;
`

export const Box = styled(View)<{color?: string, borderRadius?: number}>`
	marginBottom: 10px;
	minWidth: 100px;
	display: flex;
	alignItems: center;
	padding: 10px;
	backgroundColor: ${p => p.color || "white"};
	${p => p.borderRadius && css`
		borderRadius: ${p.borderRadius}px;
  	`}
`