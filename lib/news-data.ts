export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime?: string;
  views?: number;
  body?: string;
};

export const NEWS_CATEGORIES = ['GCC Deals', 'India Launches', 'Funding', 'Policy', 'Analysis', 'Startups'] as const;

export const news: NewsArticle[] = [
  { slug: 'dubai-proptech-funding', title: 'Dubai Proptech Raises $50Mn Series C for GCC Expansion', excerpt: 'UAE-based proptech secures funding to expand property management and sales tech across Saudi and UAE.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 28, 2026' },
  { slug: 'nobroker-gcc-expansion', title: 'NoBroker Acquires GCC Rival in Cross-Border Deal', excerpt: 'India\'s NoBroker expands into Middle East with acquisition of Dubai-based listing platform.', category: 'Funding', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', author: 'Priya Mehta', date: 'Jan 27, 2026' },
  { slug: 'ai-valuation-tools-series-a', title: 'AI Valuation Tools Raise $5M Series A in Pune', excerpt: 'Proptech startup secures funding for AI-powered property valuation and risk scoring.', category: 'Funding', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 26, 2026' },
  { slug: 'rera-compliance-saas-10k', title: 'RERA Compliance SaaS Hits 10K Users', excerpt: 'Compliance automation platform sees rapid adoption among Tier 2 developers.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', author: 'Neha Singh', date: 'Jan 25, 2026' },
  { slug: 'tier2-proptech-boom', title: 'Tier 2 City Proptech Boom: Indore to Coimbatore', excerpt: 'Indore, Coimbatore, and Jaipur emerge as new proptech innovation hubs.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 24, 2026' },
  { slug: 'blockchain-title-registry-maharashtra', title: 'Blockchain Title Registry Pilot Launches in Maharashtra', excerpt: 'State government partners with proptech firm for pilot blockchain-based land records.', category: 'Policy', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 23, 2026' },
  { slug: 'coliving-15-cities', title: 'Co-living Platform Expands to 15 Cities', excerpt: 'Fractional living startup raises $12M to scale operations across Tier 2 markets.', category: 'Startups', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', author: 'Priya Mehta', date: 'Jan 22, 2026' },
  { slug: 'proptech-unicorn-ipo', title: 'Proptech Unicorn IPO Plans for Q3 2026', excerpt: 'India\'s first proptech unicorn files draft papers for domestic listing.', category: 'Funding', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 21, 2026' },
  { slug: 'smart-home-tech-40', title: 'Smart Home Tech Integration Surges 40%', excerpt: 'Builders report increased demand for IoT-enabled apartments post-2025.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1558002038-10559092a5d2?w=600&q=80', author: 'Neha Singh', date: 'Jan 20, 2026' },
  { slug: 'reit-digital-platform', title: 'REIT Digital Platform Launches', excerpt: 'New platform enables fractional REIT investments starting at ₹10,000.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 19, 2026' },
  { slug: 'vr-property-tours-1m', title: 'Virtual Reality Property Tours Hit 1M Sessions', excerpt: 'VR/AR proptech sees record adoption as remote buying becomes mainstream.', category: 'Startups', image: 'https://images.unsplash.com/photo-1586717799252-2d1d6dfe32d1?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 18, 2026' },
  { slug: 'accelerator-cohort-6', title: 'Proptech Accelerator Announces Cohort 6', excerpt: 'Applications open for 20 startups; focus on sustainability and affordability.', category: 'Funding', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80', author: 'Priya Mehta', date: 'Jan 17, 2026' },
  { slug: 'ai-due-diligence-tool', title: 'AI-Powered Due Diligence Tool Gains Traction', excerpt: 'Legal tech startup automates property verification for faster closings.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 16, 2026' },
  { slug: 'rental-yield-analytics-50k', title: 'Rental Yield Analytics Platform Crosses 50K Users', excerpt: 'Investor-focused platform helps analyze rental returns across Indian cities.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', author: 'Neha Singh', date: 'Jan 15, 2026' },
  { slug: 'proptech-ma-record', title: 'Proptech M&A Activity Hits Record in 2025', excerpt: 'Consolidation wave sees 45 deals; proptech infra and SaaS lead acquirer interest.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 14, 2026' },
  { slug: 'green-building-mandate', title: 'Green Building Tech Mandate for Top 8 Cities', excerpt: 'Govt. mandates energy monitoring and smart meters for new commercial projects.', category: 'Policy', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 13, 2026' },
  { slug: 'vc-fund-80m-india', title: 'Proptech VC Fund Closes $80M for India Focus', excerpt: 'New fund to back 25–30 early-stage proptech and construction-tech startups.', category: 'Funding', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', author: 'Priya Mehta', date: 'Jan 12, 2026' },
  { slug: 'housing-com-crm', title: 'Housing.com Launches Builder CRM Suite', excerpt: 'All-in-one sales, inventory, and customer management for mid-tier developers.', category: 'Startups', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 11, 2026' },
  { slug: 'land-title-digitization', title: 'Land Title Digitization Completes Phase 2 in 12 States', excerpt: 'DLR and proptech firms integrate with state land records for instant verification.', category: 'Policy', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80', author: 'Neha Singh', date: 'Jan 10, 2026' },
  { slug: 'coworking-flex-leases', title: 'Co-working Operator Ties Up With Proptech for Flex Leases', excerpt: 'Short-term, tech-driven leases to help landlords fill vacant commercial space.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 9, 2026' },
  { slug: 'student-housing-15m', title: 'Student Housing Proptech Raises $15M Series B', excerpt: 'Platform manages 50K beds across 30 cities; eyes Southeast Asia expansion.', category: 'Funding', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 8, 2026' },
  { slug: 'construction-tech-award', title: 'Construction Tech Startup Wins National Innovation Award', excerpt: 'AI-based project scheduling and cost tracking adopted by 5 major developers.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', author: 'Priya Mehta', date: 'Jan 7, 2026' },
  { slug: 'sector-report-5b', title: 'Proptech India Report: Sector to Cross $5B by 2028', excerpt: 'Report highlights growth in SaaS, marketplaces, and embedded fintech.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 6, 2026' },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return news.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): NewsArticle[] {
  return news.filter((a) => a.slug !== slug).slice(0, limit);
}

export function getTrending(limit = 5): NewsArticle[] {
  return [...news].slice(0, limit);
}
