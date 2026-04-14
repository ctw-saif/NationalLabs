import wixSeo from 'wix-seo';
import wixLocation from 'wix-location';

const DEFAULT_OG_IMAGE = "https://static.wixstatic.com/media/1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg";
const DEFAULT_OG_IMAGE_ALT = "National Labs blog — SpotCheck Plus dried blood spot testing insights";

const POSTS = {
    "comparison-guide-spotcheck-plus-vs-traditional-drug-testing-methods": {
        title: "SpotCheck Plus vs. Traditional Drug Testing: Comparison Guide | National Labs",
        headline: "SpotCheck Plus vs. Traditional Drug Testing: Comparison Guide",
        description: "Compare SpotCheck Plus dried blood spot drug testing against traditional urine and oral fluid methods. Accuracy, detection windows, workflow, and cost."
    },
    "comparison-guide-spotcheck-vs-traditional-alcohol-testing-in-transplant-settings": {
        title: "SpotCheck vs. Traditional Alcohol Testing for Transplant | National Labs",
        headline: "SpotCheck vs. Traditional Alcohol Testing in Transplant Settings",
        description: "How SpotCheck PEth alcohol testing outperforms traditional EtG and blood alcohol methods in transplant monitoring — accuracy, detection windows, and compliance."
    },
    "implementing-spotcheck-plus-timeline-and-checklist-for-hospital-labs": {
        title: "Implementing SpotCheck Plus: Timeline & Checklist | National Labs",
        headline: "Implementing SpotCheck Plus: Timeline and Checklist for Hospital Labs",
        description: "Step-by-step implementation timeline and checklist for hospital labs adopting SpotCheck Plus dried blood spot testing. Onboarding, training, and go-live."
    },
    "what-is-peth": {
        title: "What is PEth? Phosphatidylethanol Alcohol Biomarker | National Labs",
        headline: "What is PEth? The Direct Alcohol Biomarker Explained",
        description: "PEth (phosphatidylethanol) is a direct alcohol biomarker that detects consumption for up to 30 days. Learn how PEth testing works and why it matters."
    }
};

$w.onReady(function () {
    const currentUrl = wixLocation.url;
    const pathParts = wixLocation.path;
    const slug = pathParts && pathParts.length ? pathParts[pathParts.length - 1] : '';
    const postData = POSTS[slug];

    const metaTags = [
        { "property": "og:type", "content": "article" },
        { "property": "og:site_name", "content": "National Labs" },
        { "property": "og:url", "content": currentUrl },
        { "property": "og:image", "content": DEFAULT_OG_IMAGE },
        { "property": "og:image:alt", "content": DEFAULT_OG_IMAGE_ALT }
    ];

    if (postData) {
        wixSeo.title = postData.title;
        metaTags.unshift({ "name": "description", "content": postData.description });
        metaTags.push({ "property": "og:title", "content": postData.title });
        metaTags.push({ "property": "og:description", "content": postData.description });

        wixSeo.setStructuredData([{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": postData.headline,
            "description": postData.description,
            "image": DEFAULT_OG_IMAGE,
            "url": currentUrl,
            "publisher": {
                "@type": "Organization",
                "name": "National Labs",
                "logo": {
                    "@type": "ImageObject",
                    "url": DEFAULT_OG_IMAGE
                }
            }
        }]);
    }

    wixSeo.metaTags = metaTags;
});
