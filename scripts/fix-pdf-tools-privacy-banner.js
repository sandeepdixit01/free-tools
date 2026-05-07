#!/usr/bin/env node

/**
 * Replace security-notice with privacy-notice in PDF tools
 * These tools use ToolLayoutV2 and need the proper blue banner
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages');

// PDF tools that need fixing
const pdfTools = [
  { file: 'MergePdf.jsx', config: 'mergePdfConfig' },
  { file: 'DeletePdfPages.jsx', config: 'deletePdfPagesConfig' },
  { file: 'PdfToImage.jsx', config: 'pdfToImageConfig' },
  { file: 'SplitPdf.jsx', config: 'splitPdfConfig' },
  { file: 'ImageToPdf.jsx', config: 'imageToPdfConfig' },
  { file: 'RotatePdf.jsx', config: 'rotatePdfConfig' }
];

const oldPattern = `      {/* Security Notice */}
      {uiText.securityNote && (
        <div className="security-notice" style={{
          padding: '12px 16px',
          backgroundColor: '#f0f9ff',
          border: '1px solid #bae6fd',
          borderRadius: '8px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          color: '#0c4a6e'
        }}>
          <span style={{ fontSize: '18px' }}>🔒</span>
          <span>{uiText.securityNote}</span>
        </div>
      )}`;

let updatedCount = 0;

pdfTools.forEach(({ file, config }) => {
  const filePath = path.join(pagesDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('security-notice')) {
    const newPattern = `      {/* Privacy Notice */}
      {${config}.content?.[language]?.hero?.privacyNotice && (
        <div className="privacy-notice">
          🔒 {${config}.content[language].hero.privacyNotice}
        </div>
      )}`;
    
    content = content.replace(oldPattern, newPattern);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${file}`);
    updatedCount++;
  } else {
    console.log(`⏭️  Skipped: ${file} (no security-notice found)`);
  }
});

console.log(`\n✨ Updated ${updatedCount} PDF tool files`);

// Made with Bob
