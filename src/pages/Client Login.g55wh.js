import wixSeo from 'wix-seo';

$w.onReady(function () {
    wixSeo.title = "Client Login | National Labs";
    wixSeo.metaTags = [
        { "name": "description", "content": "Access your National Labs client portal to view test results, manage orders, and track specimens. Secure login for healthcare providers and lab partners." },
        { "property": "og:title", "content": "Client Login | National Labs" },
        { "property": "og:description", "content": "Access your National Labs client portal to view test results, manage orders, and track specimens." },
        { "property": "og:type", "content": "website" },
        { "property": "og:site_name", "content": "National Labs" },
        { "property": "og:url", "content": "https://www.nationallabs.com/client-login" },
        { "property": "og:image", "content": "https://static.wixstatic.com/media/1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg" },
        { "property": "og:image:alt", "content": "National Labs client login portal" }
    ];
});
