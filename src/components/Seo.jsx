import { useEffect } from 'react';

const SITE_NAME = 'Acme Outdoors';
const SITE_URL = 'https://acmeoutdoors.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION =
    'Acme Outdoors is an outdoor and adventure shop in the Boathouse District of Oklahoma City. Gear, gift cards, and local support since 1989.';

const upsertMeta = (attribute, key, content) => {
    if (!content) return;

    let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
    if (!href) return;

    let element = document.head.querySelector(`link[rel="${rel}"]`);

    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }

    element.setAttribute('href', href);
};

/**
 * Lightweight SEO + social link preview manager.
 * Updates title, description, canonical, Open Graph and Twitter Card tags per page.
 */
const Seo = ({
    title,
    description = DEFAULT_DESCRIPTION,
    path = '/',
    image = DEFAULT_IMAGE,
    type = 'website',
    imageAlt = 'Acme Outdoors — outdoor and adventure shop since 1989',
    jsonLd,
}) => {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Serving You Since 1989`;
        const url = `${SITE_URL}${path === '/' ? '/' : path}`;
        const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

        document.title = fullTitle;

        upsertMeta('name', 'description', description);
        upsertMeta('name', 'robots', 'index, follow, max-image-preview:large');
        upsertMeta('name', 'theme-color', '#eb5757');

        upsertLink('canonical', url);

        // Open Graph
        upsertMeta('property', 'og:type', type);
        upsertMeta('property', 'og:site_name', SITE_NAME);
        upsertMeta('property', 'og:locale', 'en_US');
        upsertMeta('property', 'og:title', fullTitle);
        upsertMeta('property', 'og:description', description);
        upsertMeta('property', 'og:url', url);
        upsertMeta('property', 'og:image', imageUrl);
        upsertMeta('property', 'og:image:secure_url', imageUrl);
        upsertMeta('property', 'og:image:alt', imageAlt);

        // Only the default 1200x630 artwork should advertise fixed dimensions.
        if (imageUrl === DEFAULT_IMAGE) {
            upsertMeta('property', 'og:image:type', 'image/png');
            upsertMeta('property', 'og:image:width', '1200');
            upsertMeta('property', 'og:image:height', '630');
        } else {
            ['og:image:type', 'og:image:width', 'og:image:height'].forEach((key) => {
                document.head.querySelector(`meta[property="${key}"]`)?.remove();
            });
        }

        // Twitter / X
        upsertMeta('name', 'twitter:card', 'summary_large_image');
        upsertMeta('name', 'twitter:site', '@acmeoutdoors');
        upsertMeta('name', 'twitter:creator', '@acmeoutdoors');
        upsertMeta('name', 'twitter:title', fullTitle);
        upsertMeta('name', 'twitter:description', description);
        upsertMeta('name', 'twitter:image', imageUrl);
        upsertMeta('name', 'twitter:image:alt', imageAlt);

        // Page-specific structured data
        const scriptId = 'page-json-ld';
        const existing = document.getElementById(scriptId);
        if (existing) existing.remove();

        if (jsonLd) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(script);
        }
    }, [title, description, path, image, type, imageAlt, jsonLd]);

    return null;
};

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE, DEFAULT_DESCRIPTION };
export default Seo;
