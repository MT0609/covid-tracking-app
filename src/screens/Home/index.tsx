import React, { useState, useEffect } from 'react';
import { Page, PageTitle } from '../../components/Share';
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

	useEffect(() => {
		setActiveHomeCate(HomeCate.COUNTRY_TAB)
	}, [])

	return (
		<Page>
			<PageTitle>Covid-19 Tracking</PageTitle>
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
	)
}

export default Home
