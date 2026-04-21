import wixSeo from 'wix-seo';

$w.onReady(function () {
    wixSeo.metaTags = [
        { "name": "robots", "content": "noindex, nofollow" }
    ];
});
