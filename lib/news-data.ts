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
    body?: string; // Legacy field, keeping for compatibility if used elsewhere
    content?: string; // New field for full HTML content
};

export const NEWS_CATEGORIES = ['GCC Deals', 'India Launches', 'Funding', 'Policy', 'Analysis', 'Startups'] as const;

const IMAGES = {
    city: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    building: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    business: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    home: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    smart: 'https://images.unsplash.com/photo-1558002038-10559092a5d2?w=600&q=80',
    finance: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    office: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    tech: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80',
    coworking: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    vr: 'https://images.unsplash.com/photo-1586717799252-2d1d6dfe32d1?w=600&q=80',
    construction: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85',
    middleeast: 'https://images.unsplash.com/photo-1586724237569-f3d0c2dee8c6?w=600&q=80',
    green: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    startup: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
};

export const news: NewsArticle[] = [
    { slug: 'bangalore-proptech-summit-2026', title: 'Bangalore PropTech Summit 2026: Linking Future Tech', excerpt: 'Key industry leaders to gather in India\'s tech capital to discuss the future of real estate technology and innovation.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 30, 2026' },
    { slug: 'hyderabad-office-tech-boom', title: 'Hyderabad Office Tech Boom: Smart Workspaces Rise', excerpt: 'Demand for IoT-enabled office spaces surges in HITEC City as tech giants expand footprint.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', author: 'Neha Singh', date: 'Jan 29, 2026' },
    { slug: 'mumbai-redevelopment-tech', title: 'Mumbai Redevelopment: Tech-Driven Project Management', excerpt: 'Dharavi redevelopment project adopts advanced BIM and project tracking tools for efficiency.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 28, 2026' },
    { slug: 'gurgaon-luxury-home-automation', title: 'Gurgaon Luxury: Home Automation Standard in New Launches', excerpt: 'Developers mandate smart home features in all upcoming premium residential projects.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1558002038-10559092a5d2?w=600&q=80', author: 'Priya Mehta', date: 'Jan 27, 2026' },
    { slug: 'chennai-logistics-parks-digitization', title: 'Chennai Logistics Parks: Digital Warehousing Push', excerpt: 'New industrial parks integrate automated storage and retrieval systems to boost efficiency.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1586528116311-ad863c17d0cc?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 26, 2026' },
    { slug: 'pune-proptech-incubator', title: 'Pune Launches First Dedicated PropTech Incubator', excerpt: 'City initiative to support early-stage startups solving urban real estate challenges.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 25, 2026' },
    { slug: 'noida-airport-land-tech', title: 'Noida Airport Region: Land Acquisition Tech Platform', excerpt: 'Government pilots blockchain-based land acquisition system for transparency around Jewar Airport.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 24, 2026' },
    { slug: 'kolkata-green-building-incentives', title: 'Kolkata Green Building: Tech for Sustainability', excerpt: 'New policy incentivizes developers using green tech and energy-efficient designs.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=80', author: 'Neha Singh', date: 'Jan 23, 2026' },
    { slug: 'ahmedabad-gift-city-fintech-proptech', title: 'GIFT City: Fintech-PropTech Convergence Hub', excerpt: 'Cross-border real estate investment platforms find a home in India\'s first IFSC.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Priya Mehta', date: 'Jan 22, 2026' },
    { slug: 'kochi-waterfront-smart-city', title: 'Kochi Smart Waterfront: IoT for Urban Management', excerpt: 'Smart city project integrates water level monitoring and urban planning tech.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1544161515-436cefd1f16d?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 21, 2026' },
    { slug: 'jaipur-heritage-proptech', title: 'Jaipur Heritage: 3D Mapping for Conservation', excerpt: 'PropTech startup maps historical sites for preservation and virtual tourism.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 20, 2026' },
    { slug: 'ggc-proptech-landscape-2026', title: 'GGC PropTech Landscape 2026: UAE, Saudi & India Corridor', excerpt: 'Deep-dive analysis of PropTech adoption, regulatory alignment, and cross-border deals across UAE, Saudi Arabia, Oman, and India.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 29, 2026' },
    { slug: 'saudi-vision-2030-proptech', title: 'Saudi Vision 2030 & PropTech: Mega Projects and Smart Cities', excerpt: 'How NEOM, Red Sea Project, and giga-projects are driving PropTech investment and proptech adoption across the Kingdom.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?w=600&q=80', author: 'Priya Mehta', date: 'Jan 28, 2026' },
    { slug: 'uae-dubai-abu-dhabi-proptech-analysis', title: 'UAE PropTech Deep Dive: Dubai vs Abu Dhabi Regulatory & Market Split', excerpt: 'Analysis of listing rules, foreign ownership, and proptech incentives in Dubai and Abu Dhabi—implications for India–GCC expansion.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 28, 2026' },
    { slug: 'india-gcc-proptech-investment-flows', title: 'India–GCC PropTech Investment Flows: Capital and Talent Corridor', excerpt: 'Who is investing where: Indian proptech raising in Gulf, GCC funds backing India, and talent movement across the corridor.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80', author: 'Neha Singh', date: 'Jan 27, 2026' },
    { slug: 'oman-bahrain-proptech-emerging-hubs', title: 'Oman & Bahrain as Emerging PropTech Hubs: Free Zones and Proptech', excerpt: 'Beyond UAE and Saudi—Oman Vision 2040 and Bahrain’s proptech-friendly regulations are attracting startups and investors.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 27, 2026' },
    { slug: 'smart-city-proptech-india-gcc-compare', title: 'Smart City PropTech: India vs GGC—PMAY, NEOM, and Dholera', excerpt: 'Comparative analysis of smart city and proptech initiatives: India’s PMAY and Dholera SIR vs Saudi NEOM and UAE megaprojects.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1558002038-10559092a5d2?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 26, 2026' },
    { slug: 'dubai-proptech-ecosystem-2026', title: 'Dubai PropTech Ecosystem 2026: Free Zones, Golden Visa, and Proptech Hubs', excerpt: 'Analysis of Dubai’s PropTech incentives—DIFC, DMCC, and Dubai Land Department initiatives driving Middle East proptech growth.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85', author: 'Priya Mehta', date: 'Jan 26, 2026' },
    { slug: 'india-dubai-proptech-talent-corridor', title: 'India–Dubai PropTech Talent Corridor: Relocation and Remote Hubs', excerpt: 'How Indian proptech talent is moving to Dubai and UAE; remote-first and hybrid models reshaping India–Middle East tech flow.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 25, 2026' },
    { slug: 'dubai-luxury-vs-india-affordable-proptech', title: 'Dubai Luxury vs India Affordable: PropTech Plays in Two Markets', excerpt: 'Feature analysis: high-ticket Dubai luxury proptech vs India’s volume-driven affordable housing and Tier 2 proptech models.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80', author: 'Neha Singh', date: 'Jan 25, 2026' },
    { slug: 'middle-east-india-proptech-regulatory', title: 'Middle East & India PropTech Regulatory Deep Dive: RERA, DLD, and Cross-Border', excerpt: 'RERA in India vs Dubai Land Department and GCC regulations—what proptech founders must know for India–UAE expansion.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 24, 2026' },
    { slug: 'dubai-proptech-funding', title: 'Dubai Proptech Raises $50Mn Series C for GCC Expansion', excerpt: 'UAE-based proptech secures funding to expand property management and sales tech across Saudi and UAE.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 28, 2026' },
    { slug: 'nobroker-gcc-expansion', title: 'NoBroker Acquires GCC Rival in Cross-Border Deal', excerpt: 'India\'s NoBroker expands into Middle East with acquisition of Dubai-based listing platform.', category: 'Funding', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80', author: 'Priya Mehta', date: 'Jan 27, 2026' },
    { slug: 'ai-valuation-tools-series-a', title: 'AI Valuation Tools Raise $5M Series A in Pune', excerpt: 'Proptech startup secures funding for AI-powered property valuation and risk scoring.', category: 'Funding', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 26, 2026' },
    { slug: 'rera-compliance-saas-10k', title: 'RERA Compliance SaaS Hits 10K Users', excerpt: 'Compliance automation platform sees rapid adoption among Tier 2 developers.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', author: 'Neha Singh', date: 'Jan 25, 2026' },
    { slug: 'tier2-proptech-boom', title: 'Tier 2 City Proptech Boom: Indore to Coimbatore', excerpt: 'Indore, Coimbatore, and Jaipur emerge as new proptech innovation hubs.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 24, 2026' },
    { slug: 'blockchain-title-registry-maharashtra', title: 'Blockchain Title Registry Pilot Launches in Maharashtra', excerpt: 'State government partners with proptech firm for pilot blockchain-based land records.', category: 'Policy', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 23, 2026' },
    { slug: 'coliving-15-cities', title: 'Co-living Platform Expands to 15 Cities', excerpt: 'Fractional living startup raises $12M to scale operations across Tier 2 markets.', category: 'Startups', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80', author: 'Priya Mehta', date: 'Jan 22, 2026' },
    { slug: 'proptech-unicorn-ipo', title: 'Proptech Unicorn IPO Plans for Q3 2026', excerpt: 'India\'s first proptech unicorn files draft papers for domestic listing.', category: 'Funding', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 21, 2026' },
    { slug: 'smart-home-tech-40', title: 'Smart Home Tech Integration Surges 40%', excerpt: 'Builders report increased demand for IoT-enabled apartments post-2025.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1558002038-10559092a5d2?w=600&q=80', author: 'Neha Singh', date: 'Jan 20, 2026' },
    { slug: 'reit-digital-platform', title: 'REIT Digital Platform Launches', excerpt: 'New platform enables fractional REIT investments starting at ₹10,000.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 19, 2026' },
    { slug: 'vr-property-tours-1m', title: 'Virtual Reality Property Tours Hit 1M Sessions', excerpt: 'VR/AR proptech sees record adoption as remote buying becomes mainstream.', category: 'Startups', image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 18, 2026' },
    { slug: 'accelerator-cohort-6', title: 'Proptech Accelerator Announces Cohort 6', excerpt: 'Applications open for 20 startups; focus on sustainability and affordability.', category: 'Funding', image: IMAGES.startup, author: 'Priya Mehta', date: 'Jan 17, 2026' },
    { slug: 'ai-due-diligence-tool', title: 'AI-Powered Due Diligence Tool Gains Traction', excerpt: 'Legal tech startup automates property verification for faster closings.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 16, 2026' },
    { slug: 'rental-yield-analytics-50k', title: 'Rental Yield Analytics Platform Crosses 50K Users', excerpt: 'Investor-focused platform helps analyze rental returns across Indian cities.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', author: 'Neha Singh', date: 'Jan 15, 2026' },
    { slug: 'proptech-ma-record', title: 'Proptech M&A Activity Hits Record in 2025', excerpt: 'Consolidation wave sees 45 deals; proptech infra and SaaS lead acquirer interest.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 14, 2026' },
    { slug: 'green-building-mandate', title: 'Green Building Tech Mandate for Top 8 Cities', excerpt: 'Govt. mandates energy monitoring and smart meters for new commercial projects.', category: 'Policy', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 13, 2026' },
    { slug: 'vc-fund-80m-india', title: 'Proptech VC Fund Closes $80M for India Focus', excerpt: 'New fund to back 25–30 early-stage proptech and construction-tech startups.', category: 'Funding', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80', author: 'Priya Mehta', date: 'Jan 12, 2026' },
    { slug: 'housing-com-crm', title: 'Housing.com Launches Builder CRM Suite', excerpt: 'All-in-one sales, inventory, and customer management for mid-tier developers.', category: 'Startups', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 11, 2026' },
    { slug: 'land-title-digitization', title: 'Land Title Digitization Completes Phase 2 in 12 States', excerpt: 'DLR and proptech firms integrate with state land records for instant verification.', category: 'Policy', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80', author: 'Neha Singh', date: 'Jan 10, 2026' },
    { slug: 'coworking-flex-leases', title: 'Co-working Operator Ties Up With Proptech for Flex Leases', excerpt: 'Short-term, tech-driven leases to help landlords fill vacant commercial space.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 9, 2026' },
    { slug: 'student-housing-15m', title: 'Student Housing Proptech Raises $15M Series B', excerpt: 'Platform manages 50K beds across 30 cities; eyes Southeast Asia expansion.', category: 'Funding', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 8, 2026' },
    { slug: 'construction-tech-award', title: 'Construction Tech Startup Wins National Innovation Award', excerpt: 'AI-based project scheduling and cost tracking adopted by 5 major developers.', category: 'India Launches', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80', author: 'Priya Mehta', date: 'Jan 7, 2026' },
    { slug: 'sector-report-5b', title: 'Proptech India Report: Sector to Cross $5B by 2028', excerpt: 'Report highlights growth in SaaS, marketplaces, and embedded fintech.', category: 'Analysis', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 6, 2026' },
    { slug: 'kuwait-smart-construction-tech', title: 'Kuwait PropTech: Smart Construction & BIM Adoption', excerpt: 'Kuwait City sees surge in digital construction tools as government mandates BIM for all new public projects.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1541888941255-658066889e6e?w=600&q=80', author: 'Arjun Kapoor', date: 'Jan 4, 2026' },
    { slug: 'oman-logistics-tech-2026', title: 'Oman Logistics PropTech: Port-to-Warehouse Automation', excerpt: 'Oman Vision 2040 drives investment in smart warehouses and logistics tech across Sohar and Salalah.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1586528116311-ad863c17d0cc?w=600&q=80', author: 'Vikram Reddy', date: 'Jan 3, 2026' },
    { slug: 'bahrain-fintech-proptech-merger', title: 'Bahrain Startup Ecosystem: Fintech Meets PropTech', excerpt: 'New regulatory sandbox initiatives in Manama allow for embedded finance in real estate platforms.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80', author: 'Neha Singh', date: 'Jan 2, 2026' },
    { slug: 'saudi-neom-construction-update', title: 'Saudi NEOM Update: AI in Construction reaches New Milestones', excerpt: 'The Line construction leverages swarm robotics and AI-driven site management tools.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85', author: 'Priya Mehta', date: 'Jan 1, 2026' },
    { slug: 'gulf-proptech-innovation-summit-2026', title: 'Gulf PropTech Innovation Summit: Qatar & Kuwait Focus', excerpt: 'New summit announced for Doha; focus on digital twins, BIM, and smart city infrastructure across Qatar and Kuwait.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1517505833982-2823f4c7a02e?w=600&q=80', author: 'Rohan Sharma', date: 'Jan 5, 2026' },
    { slug: 'rak-proptech-resort-innovation', title: 'Ras Al Khaimah: PropTech in Luxury Resort Construction', excerpt: 'RAK developer adopts 3D printing and AI-based cost monitoring for upcoming island projects.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1544161515-436cefd1f16d?w=600&q=80', author: 'Priya Mehta', date: 'Jan 3, 2026' },
    { slug: 'sharjah-digital-real-estate-drive', title: 'Sharjah Digital Real Estate: E-government Integration', excerpt: 'Sharjah Asset Management launches new portal for instant property title transfers and tech-driven leasing.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85', author: 'Vikram Reddy', date: 'Jan 2, 2026' },
    { slug: 'fujairah-smart-port-proptech', title: 'Fujairah Smart Port: Logistics & PropTech Integration', excerpt: 'New smart port tech initiatives drive commercial real estate demand in Fujairah Free Zone.', category: 'GCC Deals', image: 'https://images.unsplash.com/photo-1586528116311-ad863c17d0cc?w=600&q=80', author: 'Neha Singh', date: 'Jan 1, 2026' },
];

export type Region = 'global' | 'india' | 'gcc';

function getRegion(article: NewsArticle): Region {
    const cat = article.category;
    const text = `${article.title} ${article.excerpt}`.toLowerCase();
    if (cat === 'India Launches') return 'india';
    if (cat === 'GCC Deals') return 'gcc';
    const gccKeywords = ['gcc', 'uae', 'saudi', 'dubai', 'abu dhabi', 'oman', 'bahrain', 'kuwait', 'qatar', 'middle east', 'neom', 'difc', 'gulf', 'dld'];
    const indiaKeywords = ['india', 'indian', 'rera', 'pune', 'tier 2', 'maharashtra', 'coimbatore', 'indore', 'jaipur', 'dlr', 'pmay'];
    if (gccKeywords.some((k) => text.includes(k))) return 'gcc';
    if (indiaKeywords.some((k) => text.includes(k))) return 'india';
    return 'global';
}

export function getGlobalNews(limit?: number): NewsArticle[] {
    const filtered = news.filter((a) => getRegion(a) === 'global');
    return limit ? filtered.slice(0, limit) : filtered;
}

export function getIndiaNews(limit?: number): NewsArticle[] {
    const filtered = news.filter((a) => getRegion(a) === 'india');
    return limit ? filtered.slice(0, limit) : filtered;
}

export function getIndiaNewsByTopic(topic: string, limit?: number): NewsArticle[] {
    const indiaNews = getIndiaNews();
    const normalizedTopic = topic.toLowerCase();

    // Define topic keywords
    const keywords: Record<string, string[]> = {
        'infrastructure': ['infrastructure', 'smart city', 'construction', 'iot', 'urban'],
        'green-tech': ['green', 'sustainable', 'energy', 'environment', 'biophilic'],
        'fintech': ['fintech', 'blockchain', 'investment', 'fractional', 'token'],
        'regulatory': ['rera', 'compliance', 'legal', 'policy', 'regulation']
    };

    const topicKeywords = keywords[normalizedTopic] || [normalizedTopic];

    const filtered = indiaNews.filter(article => {
        const text = `${article.title} ${article.excerpt} ${article.category || ''}`.toLowerCase();
        return topicKeywords.some(k => text.includes(k));
    });

    return limit ? filtered.slice(0, limit) : filtered;
}

export function getGCCNews(limit?: number): NewsArticle[] {
    const filtered = news.filter((a) => getRegion(a) === 'gcc');
    return limit ? filtered.slice(0, limit) : filtered;
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
    return news.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): NewsArticle[] {
    return news.filter((a) => a.slug !== slug).slice(0, limit);
}

export function getTrending(limit = 5): NewsArticle[] {
    return [...news].slice(0, limit);
}
