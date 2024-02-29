import useTranslation from "next-translate/useTranslation"

const AppRouterPage = () => {
    const { lang, t } = useTranslation('common')

    return (
        <h1>App Router Page {lang} - {t('title')}</h1>
    )
}

export default AppRouterPage
