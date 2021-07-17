import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import AdviceCollapse from '../../components/Advice/CollapseBox';
import { Page, PageTitle } from '../../components/Share';
import { AdviceList } from '../../models/advice';

const backgroundColor = ['#94b3ff', '#abf78d', '#fc9f9f', '#ffd280', '#f8b8ff']

const AdviceScreen: React.FC = () => {
	const { t } = useTranslation();

	return (
		<ScrollView>
			<Page>
				<PageTitle>{t("covid-19 Advice")}</PageTitle>
				{
					AdviceList.map((item, key) => (
						<AdviceCollapse 
							key={key}
							num={key}
							title={item.title}
							data={item.data}
							backgroundColor={backgroundColor[key]}
						/>
					))
				}
			</Page>
		</ScrollView>
	)
}

export default AdviceScreen