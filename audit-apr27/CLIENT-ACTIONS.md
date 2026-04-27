# National Labs — Apr 27 2026 Audit, Client Actions Required

The Apr 27 Ahrefs audit flagged 6 distinct issue categories. I have already pushed code fixes for the schema validation. The remaining items must be done in the Wix Editor or Wix Blog admin — the Velo SDK cannot reach them.

---

## 1. Delete the orphan COVID page (Error)

**URL:** https://www.nationallabs.com/copy-of-covid
**Title:** "COVID | National Labs 2.0"

This page is in the sitemap but has zero internal links pointing to it. It's a leftover duplicate from earlier site work.

**Action:** Wix Editor → **Pages** (left sidebar) → find "Copy of COVID" → click ⋮ → **Delete**. Or, if you want to keep it in the CMS but hide it from search: ⚙️ → **SEO Basics** → toggle off **"Let search engines index this page"** AND toggle off **"Show this page in sitemap"**.

---

## 2. Add cover images to two blog posts (Open Graph warning)

These two posts are missing `og:image`, which is what Facebook, LinkedIn, and Slack use to render the link preview thumbnail. Wix's blog overrides Velo's `og:image` setting and uses the post's **Cover Image** instead — and these two don't have one.

| Post slug | Post title |
|---|---|
| `/post/discover-spotcheck-solutions` | Discover SpotCheck Solutions |
| `/post/founder-s-story` | Founder's Story |

**Action:** Wix Dashboard → **Blog** → **Posts** → open each post → click **Settings** (gear icon, top-right of editor) → **General** tab → **Cover Image** → upload a relevant image. Recommended: 1200×630 px JPEG/PNG, under 1 MB. **Add alt text** while you're there.

While you're in Blog settings: **Wix Dashboard → Blog → Settings → Site Display** — change the site name from "National Labs 2.0" back to "National Labs". The current value is leaking into all blog post `og:site_name` tags.

---

## 3. Add alt text to the logo and footer icon (Warning, 21 pages)

The same two images appear without alt text across 21 pages — the logo and a small footer icon. Once you fix them once in the Wix header/footer, the warning clears site-wide.

| Image | Where it lives | Suggested alt text |
|---|---|---|
| `1afc8c_2f49bd8ca8d74941ba28f279d6411955~mv2.jpg` (the logo) | Header on every page | `National Labs SpotCheck Plus dried blood spot testing logo` |
| `1afc8c_e4fa03edd51e40ddb34da2f7c270d163~mv2.png` (small icon, ~240×152) | Footer on every page | (whatever the icon represents — probably a partner badge or "Made in USA" mark; describe what's in the image) |

**Action:** Wix Editor → Header → click the logo → ⚙️ Settings → **Alt text** → paste the suggested text → **Save**. Repeat for the footer icon.

---

## 4. Slow page TTFB (Error, 19 pages, **mostly out of your hands**)

Ahrefs flags 19 pages with **Time to First Byte (TTFB) of 1–2 seconds**. The size of the HTML payload (115–145 KB) is reasonable, so this is a **Wix server response time** issue, not a code issue. Wix shared hosting routinely has TTFB in this range and there's nothing in Velo or page settings that lowers it meaningfully.

**Things you can do that help a little:**

- Make sure no large carousel images on the homepage and About page are uncompressed. Wix compresses on upload, but old images may be oversized — re-upload anything over 500 KB.
- Remove any unused Velo backend code or third-party integrations (heavy backend = slower TTFB).
- Wix Premium plans (specifically **Business VIP** and above) get priority server allocation. If TTFB matters for Core Web Vitals or paid ads, the upgrade is worth pricing.

I would not lose sleep over this one — the rest of the loading time after TTFB is normal, and Google's Core Web Vitals threshold for TTFB is 800 ms (good) / 1800 ms (needs improvement). Several pages are right at the boundary, not catastrophically slow.

---

## 5. HTTP→HTTPS 3xx redirect on `http://www.nationallabs.com/` (Error, ignore)

Ahrefs flags this because crawling http:// gets a 301 redirect to https://. **This is correct, intentional, and healthy** — every modern site does this. Mark this issue as "ignored" in the Ahrefs project so it stops appearing.

---

## What I fixed in code (already deployed via Wix sync)

- `src/pages/masterPage.js` — removed the URL-form `medicalSpecialty: "https://schema.org/Pathology"` value that was triggering the schema validation error. The MedicalBusiness schema is now lean: name, address, telephone, priceRange, image, logo, description.
- `src/pages/Post.pr62g.js` — same `medicalSpecialty` removal on blog post pages, plus added `author` (Organization) to the Article schema. This addresses Google's required-fields list for Article rich results.

After Wix re-publishes (within ~5 min of sync), re-crawl in Ahrefs to confirm the schema validation count drops to zero.

---

## TL;DR for client email

> "Audit fixes pushed for the structured data errors. To clear the rest of the audit you'll want to: **(1)** delete the leftover `/copy-of-covid` page in Wix, **(2)** add cover images to the 'Discover SpotCheck Solutions' and 'Founder's Story' blog posts, **(3)** rename the Blog site display from 'National Labs 2.0' to 'National Labs', and **(4)** add alt text to the header logo and footer icon. The slow-page warning is Wix shared-hosting TTFB and not really fixable from our end."
