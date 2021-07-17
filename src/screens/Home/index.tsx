import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AppLanguage, FlexBox, Page, PageTitle } from '../../components/Share';
import { HomeCate, CountryModel} from '../../models/interface';
import CateSelect from '../../components/Home/CateSelect';
import CountrySection from './CountrySection';
import WorldSection from './WorldSection';

const Home: React.FC = () => {
	const [country, setCountry] = useState<CountryModel>({
		name: "Vietnam",
		flag: "",
		code: "",
	});
	const [activeHomeCate, setActiveHomeCate] = useState<HomeCate | string>();
	const { t } = useTranslation();

	useEffect(() => {
		setActiveHomeCate(HomeCate.COUNTRY_TAB)
	}, [])

	return (
		<ScrollView>
			<Page>
				<FlexBox row justify="space-between">
					<PageTitle>{t("covid-19 Tracking")}</PageTitle>
					<AppLanguage />
				</FlexBox>
				<CateSelect
					selectedCountry={country} 
					active={activeHomeCate || HomeCate.COUNTRY_TAB} 
					onChange={(cate) => setActiveHomeCate(cate)}
				/>
				{
					activeHomeCate === HomeCate.COUNTRY_TAB 
					? <CountrySection country={country} onChangeCountry={(country) => setCountry(country)} />
					: <WorldSection />
				}
			</Page>
		</ScrollView>
	)
}

export default Home
