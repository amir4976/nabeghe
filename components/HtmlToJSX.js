'use client'
import React from 'react';
import sanitizeHtml from 'sanitize-html';

function HtmlToJSX({ htmlContent }) {
  const sanitizedHtml = sanitizeHtml(htmlContent, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'img','ul','li','Image']), // Add any additional allowed tags here
    allowedAttributes: {
      '*': ['style'], // Allow style attribute on all tags
      'img': ['src'] // Allow src attribute on img tags
    },
    allowedIframeHostnames: ['www.youtube.com'] // Allow iframes from specific hosts
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
}

export default HtmlToJSX;
