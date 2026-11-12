
import { Helmet } from 'react-helmet-async'

const SEO = ({
  title = 'IT RUN — Школа программирования в Таджикистане',
  description = 'IT RUN — школа программирования в Худжанде и Душанбе. Изучайте Frontend, Backend, Python, искусственный интеллект и другие IT-направления.',
  image = 'https://itrun.tj/og-image.jpg',
  url = 'https://itrun.tj/',
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="IT-RUN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
