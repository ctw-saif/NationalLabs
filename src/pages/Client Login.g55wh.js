import wixSeo from 'wix-seo';

$w.onReady(function () {
    wixSeo.title = "Client Login | National Labs";
    wixSeo.metaTags = [
        { "name": "description", "content": "Access your National Labs client portal to view test results, manage orders, and track specimens. Secure login for healthcare providers and lab partners." },
        { "property": "og:title", "content": "Client Login | National Labs" },
        { "property": "og:description", "content": "Access your National Labs client portal to view test results, manage orders, and track specimens." },
        { "property": "og:type", "content": "website" },
        { "property": "og:site_name", "content": "National Labs" }
    ];
});
