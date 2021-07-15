import React, { useState, useEffect } from 'react';
import { Page, PageTitle } from '../../components/Share';
import { HomeCate } from '../../models/interface';
import CateSelect from '../../components/Home/CateSelect';
import CountrySection from './CountrySection';
import WorldSection from './WorldSection';

const Home: React.FC = () => {
	const [activeHomeCate, setActiveHomeCate] = useState<HomeCate | string>();

	useEffect(() => {
		setActiveHomeCate(HomeCate.COUNTRY_TAB)
	}, [])

	return (
		<Page>
			<PageTitle>Covid-19 Tracking</PageTitle>
			<CateSelect onChange={(cate) => setActiveHomeCate(cate)}/>
			{
				activeHomeCate === HomeCate.COUNTRY_TAB ? <CountrySection />: <WorldSection />
			}
		</Page>
	)
}

export default Home
