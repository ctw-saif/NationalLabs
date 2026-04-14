import wixSeo from 'wix-seo';

$w.onReady(function () {
    wixSeo.title = "Resources | National Labs";
    wixSeo.metaTags = [
        { "name": "description", "content": "Clinical resources, guides, and documentation from National Labs to support healthcare providers using SpotCheck Plus and toxicology testing services." },
        { "property": "og:title", "content": "Resources | National Labs" },
        { "property": "og:description", "content": "Clinical resources, guides, and documentation to support healthcare providers using SpotCheck Plus and toxicology testing." },
        { "property": "og:type", "content": "website" },
        { "property": "og:site_name", "content": "National Labs" },
        { "property": "og:url", "content": "https://www.nationallabs.com/resources" },
        { "property": "og:image", "content": "https://static.wixstatic.com/media/1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg" },
        { "property": "og:image:alt", "content": "National Labs clinical resources for healthcare providers" }
    ];
});
