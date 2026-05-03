/**
 * JSONToCSV Page
 * Developer tool using ToolLayoutV2 for layout
 */

import React, { useMemo } from 'react';
import ToolLayoutV2 from '../components/shared/Layout/ToolLayoutV2';
import ToolHero from '../components/shared/Layout/ToolHero';
import JSONToCSVTool from '../tools/JSONToCSVTool';
import JSONToCSVControls from '../components/JSONToCSV/JSONToCSVControls';
import jsonToCSVConfig from '../configs/tools/jsonToCSV.config';
import { useLanguage } from '../contexts/LanguageContext';

const JSONToCSV = () => {
  const { language } = useLanguage();

  // Get language-specific content
  const content = useMemo(() => {
    return jsonToCSVConfig.content?.[language] || jsonToCSVConfig.content?.en || {};
  }, [language]);

  // Get language-specific UI text
  const uiText = useMemo(() => {
    return content.uiText || {};
  }, [language, content]);

  // Initialize tool instance
  const toolInstance = useMemo(() => new JSONToCSVTool(), []);

  // CTA click handler
  const handleCtaClick = () => {
    document.getElementById('json-input')?.focus();
  };

  return (
    <ToolLayoutV2
      config={jsonToCSVConfig}
      toolId="json-to-csv"
      heroComponent={
        <ToolHero
          title={content.hero?.title}
          subtitle={content.hero?.subtitle}
          benefits={content.hero?.benefits}
          ctaText={content.hero?.cta?.primary || content.hero?.cta}
          privacyNotice={content.hero?.privacyNotice}
          onCtaClick={handleCtaClick}
        />
      }
    >
      {/* Main Tool Content */}
      <div className="tool-content">
        {/* JSON to CSV Controls - Tool comes first */}
        <JSONToCSVControls
          toolInstance={toolInstance}
          uiText={uiText}
        />
      </div>
    </ToolLayoutV2>
  );
};

export default JSONToCSV;

