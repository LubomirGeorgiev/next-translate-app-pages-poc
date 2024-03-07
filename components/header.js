import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import styles from './header.module.css'

import i18nConfig from '../i18n.json'

const { locales } = i18nConfig

export default function Header() {
  const { t, lang } = useTranslation('common')
  const { asPath } = useRouter()
  const title = t('title')
  const headTitle = `${title} (${lang.toUpperCase()})`

  return (
    <>
      <Head>
        <title key="title">{headTitle}</title>
        <link key="favicon" rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1>{title}</h1>


        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <h2>{t('change-language')}</h2>
          <p className='change-language'>{t('current-language')}: {lang}</p>
          <div style={{ marginLeft: 10 }}>
            {locales.map((locale) => {
              if (locale !== lang) {
                return (
                  <Link key={locale} href={asPath} locale={locale} style={{
                    background: '#f0f0f0',
                    padding: 5,
                    borderRadius: 5,
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}>
                    {locale.toUpperCase()}
                  </Link>
                )
              }
              return null
            })}
          </div>
        </div>
      </header>
    </>
  )
}
