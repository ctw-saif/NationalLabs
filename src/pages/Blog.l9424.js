import wixSeo from 'wix-seo';

$w.onReady(function () {
    wixSeo.title = "Blog | National Labs - SpotCheck Plus Insights";
    wixSeo.metaTags = [
        { "name": "description", "content": "Insights on dried blood spot testing, PEth alcohol biomarkers, and SpotCheck Plus from National Labs. Guides, comparisons, and best practices for clinical labs." },
        { "property": "og:title", "content": "Blog | National Labs" },
        { "property": "og:description", "content": "Insights on dried blood spot testing, PEth alcohol biomarkers, and SpotCheck Plus from National Labs." },
        { "property": "og:type", "content": "website" },
        { "property": "og:site_name", "content": "National Labs" },
        { "property": "og:url", "content": "https://www.nationallabs.com/blog" }
    ];
});
