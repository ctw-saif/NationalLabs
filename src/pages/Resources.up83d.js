import wixSeo from 'wix-seo';

$w.onReady(function () {
    wixSeo.title = "Resources | National Labs";
    wixSeo.metaTags = [
        { "name": "description", "content": "Clinical resources, guides, and documentation from National Labs to support healthcare providers using SpotCheck Plus and toxicology testing services." },
        { "property": "og:title", "content": "Resources | National Labs" },
        { "property": "og:description", "content": "Clinical resources, guides, and documentation to support healthcare providers using SpotCheck Plus and toxicology testing." },
        { "property": "og:type", "content": "website" },
        { "property": "og:site_name", "content": "National Labs" },
        { "property": "og:url", "content": "https://www.nationallabs.com/resources" }
    ];
});
