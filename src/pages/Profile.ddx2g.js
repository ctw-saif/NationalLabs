import wixSeo from 'wix-seo';

$w.onReady(function () {
    // Noindex profile pages — prevents 403 errors from appearing in crawl reports
    wixSeo.metaTags = [
        { "name": "robots", "content": "noindex, nofollow" }
    ];
});
