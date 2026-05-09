import { useTranslation } from 'react-i18next'

export const SearchBar = () => {
	const { t } = useTranslation('home')
	return <div className="py-6">{t('search.cityPlaceholder')}</div>
}
