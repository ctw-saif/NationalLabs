import wixSeo from 'wix-seo';

$w.onReady(function () {
    wixSeo.setStructuredData([
        {
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://www.nationallabs.com/#organization",
            "name": "National Labs",
            "url": "https://www.nationallabs.com",
            "logo": "https://static.wixstatic.com/media/1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg",
            "image": "https://static.wixstatic.com/media/1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg",
            "description": "National Labs in Hayward, CA delivers advanced toxicology and PEth alcohol testing through SpotCheck Plus, the industry's first all-in-one dried blood spot solution.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "24301 Southland Dr, Suite 307",
                "addressLocality": "Hayward",
                "addressRegion": "CA",
                "postalCode": "94545",
                "addressCountry": "US"
            },
            "medicalSpecialty": "https://schema.org/Pathology",
            "telephone": "+1-510-732-9909",
            "priceRange": "$$"
        }
    ]);
});
