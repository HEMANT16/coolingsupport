<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: sans-serif; font-size: 14px; color: #333; }
          table { border: none; border-collapse: collapse; width: 100%; margin-top: 20px; }
          th { background-color: #f8f9fa; text-align: left; padding: 12px; font-size: 12px; }
          td { padding: 10px 12px; border-bottom: 1px solid #eee; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div style="max-width: 960px; margin: 0 auto; padding: 20px;">
          <h1>XML Sitemap</h1>
          <p>This sitemap is generated for search engines.</p>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <table>
              <tr><th>Sitemap Index</th></tr>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <tr><td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td></tr>
              </xsl:for-each>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:urlset/sitemap:url) &gt; 0">
            <table>
              <tr><th>URL</th></tr>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr><td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td></tr>
              </xsl:for-each>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
