import React from 'react'
import CategoryCard from './CategoryCard'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import './Categories.css'

const Categories = () => {
  const { language } = useLanguage()
  const t = (key) => translations[language][key]

  const categories = [
    {
      icon: '📄',
      title: t('pdfTools'),
      description: t('pdfToolsDesc'),
      href: '/tools/pdf'
    },
    {
      icon: '🖼️',
      title: t('imageTools'),
      description: t('imageToolsDesc'),
      href: '/tools/image'
    },
    {
      icon: '📝',
      title: t('textTools'),
      description: t('textToolsDesc'),
      href: '/tools/text'
    },
    {
      icon: '⚙️',
      title: t('developerTools'),
      description: t('developerToolsDesc'),
      href: '/tools/developer'
    }
  ]

  return (
    <section className="categories">
      <div className="container">
        <h2 className="categories-title">{t('browseByCategory')}</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              onClick={() => window.location.href = category.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

