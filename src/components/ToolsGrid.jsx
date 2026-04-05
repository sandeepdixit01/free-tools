import React from 'react'
import ToolCard from './ToolCard'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations/translations'
import './ToolsGrid.css'

const ToolsGrid = () => {
  const { language } = useLanguage()
  const t = (key) => translations[language][key]

  const tools = [
    {
      icon: '🗜️',
      name: t('compressPDFTool'),
      description: t('compressPDFToolDesc'),
      href: '/tools/compress-pdf'
    },
    {
      icon: '🔗',
      name: t('mergePDFTool'),
      description: t('mergePDFToolDesc'),
      href: '/tools/merge-pdf'
    },
    {
      icon: '📐',
      name: t('resizeImageTool'),
      description: t('resizeImageToolDesc'),
      href: '/tools/resize-image'
    },
    {
      icon: '🔄',
      name: t('convertJPGToPDF'),
      description: t('convertJPGToPDFDesc'),
      href: '/tools/jpg-to-pdf'
    },
    {
      icon: '📊',
      name: t('wordCounter'),
      description: t('wordCounterDesc'),
      href: '/tools/word-counter'
    },
    {
      icon: '{ }',
      name: t('jsonFormatter'),
      description: t('jsonFormatterDesc'),
      href: '/tools/json-formatter'
    },
    {
      icon: '🎨',
      name: t('imageCompressor'),
      description: t('imageCompressorDesc'),
      href: '/tools/compress-image'
    },
    {
      icon: '✂️',
      name: t('splitPDF'),
      description: t('splitPDFDesc'),
      href: '/tools/split-pdf'
    },
    {
      icon: '🔐',
      name: t('base64Encoder'),
      description: t('base64EncoderDesc'),
      href: '/tools/base64-encoder'
    },
    {
      icon: '🌈',
      name: t('colorPicker'),
      description: t('colorPickerDesc'),
      href: '/tools/color-picker'
    },
    {
      icon: '📝',
      name: t('textCaseConverter'),
      description: t('textCaseConverterDesc'),
      href: '/tools/text-case'
    },
    {
      icon: '🔍',
      name: t('urlEncoder'),
      description: t('urlEncoderDesc'),
      href: '/tools/url-encoder'
    }
  ]

  return (
    <section className="tools-grid-section">
      <div className="container">
        <h2 className="tools-grid-title">{t('popularTools')}</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              name={tool.name}
              description={tool.description}
              onClick={() => window.location.href = tool.href}
            />
          ))}
        </div>
        <div className="tools-grid-footer">
          <a href="/tools" className="view-all-link">
            {t('viewAllTools')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ToolsGrid

