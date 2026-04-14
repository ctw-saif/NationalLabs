import wixSeo from 'wix-seo';
import wixLocation from 'wix-location';

$w.onReady(function () {
    // Set default OG tags for all blog posts
    const currentUrl = wixLocation.url;

    wixSeo.metaTags = [
        { "property": "og:type", "content": "article" },
        { "property": "og:site_name", "content": "National Labs" },
        { "property": "og:url", "content": currentUrl },
        { "property": "og:image", "content": "https://static.wixstatic.com/media/1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg" },
        { "property": "og:image:alt", "content": "National Labs blog — SpotCheck Plus dried blood spot testing insights" }
    ];
});
