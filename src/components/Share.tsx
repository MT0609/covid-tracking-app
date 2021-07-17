import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { CloseModalButton } from './Home/styles';

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
`;

export const LanguageBox = styled(TouchableOpacity)`
	display: flex;
	flexDirection: row;
	alignItems: center;
	padding: 5px;
	border: 1px solid black;
`;

const LanguageSelect: React.FC<{
	t: any
	active: boolean
	onSelect: (e: string) => void
	onClose: () => void
}> = (props) => {
	const { t } = props;

	return (
		<Modal
			animationType="fade"
            visible = {props.active}
		>
			<View style={{backgroundColor: "#000000aa", flex: 1 }}>
				<View style={{ backgroundColor: "#ffffff", margin: 50, marginTop: 200, padding: 20}}>
					<View style={{ paddingBottom: 10}}>
						<SubTitle fontSize={20}>{t("selectLanguage")}</SubTitle>
					</View>
					<View
						style={{
							marginTop: 5,
							marginBottom: 10,
							borderBottomColor: "black",
							borderBottomWidth: 0.8,
						}}
					/>
					<TouchableOpacity
						style={{ padding: 10}}
						onPress={() => {props.onClose(); props.onSelect("en")}}
					>
						<FlexBox row onTouchEnd={() => {props.onClose(); props.onSelect("en")}}>
							<Image style={{ width: 22, height: 22, marginRight: 10 }} source={require("./../../assets/en.png")} />
							<Text style={{ fontSize: 16 }}>English</Text>
						</FlexBox>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ padding: 10}}
						onPress={() => {props.onClose(); props.onSelect("vi")}} 
					>
						<FlexBox row>
							<Image style={{ width: 22, height: 22, marginRight: 10 }} source={require("./../../assets/vn.png")} />
							<Text style={{ fontSize: 16 }}>Tiếng Việt</Text>
						</FlexBox>
					</TouchableOpacity>
					<CloseModalButton onPress={() => props.onClose()}>
						<Text style={{ color: "black" }}>Close</Text>
					</CloseModalButton>
				</View>
			</View>
		</Modal>
	)
}

export const AppLanguage: React.FC = () => {
	const [languageSelectShow, setLanguageSelect] = useState<boolean>(false);
	const { t, i18n } = useTranslation();
	
	return (
		<>
			<LanguageBox onPress={() => setLanguageSelect(true)}>
				{
					i18n.language === "vi" 
					? <>
						<Image style={{ width: 20, height: 20, marginRight: 5 }} source={require("./../../assets/vn.png")} />
						<Text>VN</Text>
					</>
					: <>
						<Image style={{ width: 20, height: 20, marginRight: 5 }} source={require("./../../assets/en.png")} />
						<Text>EN</Text>
					</>
				}
			</LanguageBox>
			<LanguageSelect
				t={t}
				active={languageSelectShow}
				onSelect={(lang) => i18n.changeLanguage(lang)}
				onClose={() => setLanguageSelect(false)}
			/>
		</>
	)
}