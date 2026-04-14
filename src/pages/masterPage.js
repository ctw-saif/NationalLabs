import wixSeo from 'wix-seo';

$w.onReady(function () {
    // Global structured data — Organization schema for all pages
    wixSeo.setStructuredData([
        {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "National Labs",
            "url": "https://www.nationallabs.com",
            "logo": "https://static.wixstatic.com/media/1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg",
            "description": "National Labs in Hayward, CA delivers advanced toxicology and PEth alcohol testing through SpotCheck Plus, the industry's first all-in-one dried blood spot solution.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hayward",
                "addressRegion": "CA",
                "addressCountry": "US"
            },
            "sameAs": [],
            "medicalSpecialty": "Pathology",
            "availableService": [
                {
                    "@type": "MedicalTest",
                    "name": "SpotCheck Plus Dried Blood Spot Testing",
                    "description": "All-in-one dried blood spot testing for 65+ substances including PEth alcohol biomarker"
                },
                {
                    "@type": "MedicalTest",
                    "name": "PEth Alcohol Biomarker Testing",
                    "description": "Phosphatidylethanol testing providing up to 30 days of alcohol consumption data"
                },
                {
                    "@type": "MedicalTest",
                    "name": "Toxicology Testing",
                    "description": "Advanced toxicology testing and medication monitoring for healthcare providers"
                }
            ]
        }
    ]);
});
