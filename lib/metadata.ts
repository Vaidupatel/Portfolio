import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './constants';

export function buildMetadata(
  title: string,
  description: string,
  path = '',
  type: 'website' | 'article' = 'website',
  publishTime?: string,
  modifiedTime?: string
): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = `${title} | ${SITE_NAME}`;
  return {
    title: ogTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`, width: 1200, height: 630 }],
      type,
      ...(type === 'article' && publishTime ? { publishedTime: publishTime, modifiedTime: modifiedTime || publishTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [`${SITE_URL}/api/og?title=${encodeURIComponent(title)}`],
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': SITE_NAME,
    'url': SITE_URL,
    'logo': `${SITE_URL}/icon.svg`,
    'founder': {
      '@type': 'Person',
      'name': SITE_NAME,
      'sameAs': [
        'https://linkedin.com/in/vaidpatel11',
        'https://github.com/Vaidupatel'
      ]
    },
    'areaServed': 'Worldwide',
    'sameAs': [
      'https://linkedin.com/in/vaidpatel11',
      'https://github.com/Vaidupatel'
    ]
  };
}

export function buildServiceJsonLd(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': name,
    'provider': {
      '@type': 'ProfessionalService',
      'name': SITE_NAME,
      'url': SITE_URL
    },
    'areaServed': 'Worldwide',
    'description': description
  };
}

export function buildCaseStudyJsonLd(name: string, description: string, stack: string[], imageUrl: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': name,
    'headline': name,
    'description': description,
    'url': `${SITE_URL}/work/${slug}`,
    'image': imageUrl,
    'keywords': stack.join(', '),
    'author': {
      '@type': 'Person',
      'name': SITE_NAME
    }
  };
}

export function buildBlogJsonLd(title: string, description: string, datePublished: string, dateModified: string | undefined, imageUrl: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`
    },
    'headline': title,
    'description': description,
    'image': imageUrl,
    'datePublished': datePublished,
    'dateModified': dateModified || datePublished,
    'author': {
      '@type': 'Person',
      'name': SITE_NAME,
      'sameAs': [
        'https://linkedin.com/in/vaidpatel11',
        'https://github.com/Vaidupatel'
      ]
    },
    'publisher': {
      '@type': 'Organization',
      'name': SITE_NAME,
      'logo': {
        '@type': 'ImageObject',
        'url': `${SITE_URL}/icon.svg`
      }
    }
  };
}

export function buildFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
