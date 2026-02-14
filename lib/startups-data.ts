export type StartupStatus = 'Active' | 'Funding' | 'Scaling' | 'Acquired' | 'Stealth';

export interface Startup {
    id: string;
    name: string;
    slug: string;
    logo: string; // URL to logo/image
    description: string; // Full headline text
    sector: 'Fintech' | 'Proptech' | 'Construction Tech' | 'CleanTech' | 'SaaS' | 'Marketplace' | 'Co-living' | 'Data & AI';
    country: 'India' | 'UAE' | 'Saudi Arabia' | 'Qatar' | 'Oman' | 'Bahrain' | 'Kuwait';
    state?: string; // Only for India (e.g., "Maharashtra", "Karnataka")
    city: string;
    fundingStage: 'Seed' | 'Series A' | 'Series B' | 'Series C+' | 'Bootstrapped' | 'Undisclosed' | 'Acquired' | 'IPO';
    website?: string;
    foundedYear: number;
    trending?: boolean;
    featured?: boolean;
    content?: string; // HTML or Markdown string for the article body
    highlights?: string[]; // Array of bullet points
    category?: string; // Tag line (e.g. "AI Property Platform")
}

export const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal",
    "Andaman & Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu",
    "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const MAX_DESCRIPTION_LENGTH = 120;

export const STARTUPS: Startup[] = [
    {
        id: '1',
        name: 'Truva',
        slug: 'truva',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=90',
        description: 'AI-powered property discovery platform redefining real estate search.',
        sector: 'Data & AI',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        fundingStage: 'Seed',
        foundedYear: 2022,
        trending: true,
        category: 'AI Property Platform',
        content: `
            <p>Truva is one of the new generation of AI-driven proptech startups reshaping how people discover and evaluate real estate. Founded with a technology-first mindset, the platform focuses on intelligent property matching, predictive pricing insights, and data-backed decision support for buyers and investors. Instead of traditional listing browsing, Truva uses AI models to understand user intent and deliver curated property recommendations.</p>
            <p>The startup positions itself as a smart layer between fragmented property markets and digital-first consumers. Its infrastructure aggregates data from multiple sources, enabling faster decision-making and transparency in pricing. This is especially important in emerging urban markets where information asymmetry has historically slowed transactions.</p>
            <p>Truva’s long-term vision is to build an end-to-end AI real estate assistant that helps users search, compare, finance, and invest in property through a single interface. As investor interest grows in data-driven real estate platforms, Truva is being closely watched as a rising player in the Indian proptech ecosystem.</p>
        `,
        highlights: [
            'AI-powered property matching',
            'Predictive pricing intelligence',
            'Data-first discovery platform',
            'Focus on digital property decisions'
        ]
    },
    {
        id: '2',
        name: 'Houssed.com',
        slug: 'houssed',
        logo: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=90',
        description: 'Fast-growing real estate marketplace streamlining property transactions across India.',
        sector: 'Marketplace',
        country: 'India',
        state: 'Haryana',
        city: 'Gurugram',
        fundingStage: 'Series A',
        foundedYear: 2021,
        trending: true,
        category: 'Marketplace',
        content: `
            <p>Houssed.com is an emerging real estate marketplace expanding rapidly across Indian cities with a focus on verified listings and transaction transparency. The platform has built a strong early reputation for curating high-quality inventory while simplifying property discovery for modern buyers and renters.</p>
            <p>Unlike legacy listing portals, Houssed emphasizes structured data, authenticity checks, and city-wise expansion strategies. Its growth across dozens of cities demonstrates strong operational scalability and local partnerships with developers and brokers.</p>
            <p>The company aims to bridge the trust gap in online property platforms by combining digital tools with on-ground verification. As India’s real estate sector digitizes, Houssed represents a new class of marketplaces designed for reliability, speed, and user confidence.</p>
        `,
        highlights: [
            'Verified multi-city listings',
            'Rapid geographic expansion',
            'Trust-first marketplace model',
            'Tech-driven discovery'
        ]
    },
    {
        id: '3',
        name: 'Propacity',
        slug: 'propacity',
        logo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90',
        description: 'Comprehensive digital operating system empowering real estate brokers.',
        sector: 'SaaS',
        country: 'India',
        state: 'Delhi',
        city: 'New Delhi',
        fundingStage: 'Series A',
        foundedYear: 2020,
        featured: true,
        category: 'Real Estate SaaS',
        content: `
            <p>Propacity operates as a digital operating system for real estate brokers and agencies. Instead of targeting consumers directly, the platform empowers professionals with workflow automation, customer management tools, and data analytics that streamline sales pipelines.</p>
            <p>The startup focuses on digitizing broker operations — a traditionally offline industry — by providing CRM infrastructure tailored specifically to real estate. Its tools improve lead tracking, performance visibility, and conversion optimization, helping agencies operate with startup-level efficiency.</p>
            <p>As brokerage firms increasingly adopt technology, Propacity sits at the center of this transformation. The platform represents the SaaS layer of proptech, enabling real estate businesses to modernize without losing their human-driven sales edge.</p>
        `,
        highlights: [
            'SaaS for real estate professionals',
            'CRM + workflow automation',
            'Broker productivity platform',
            'Sales intelligence tools'
        ]
    },
    {
        id: '4',
        name: 'Colive',
        slug: 'colive',
        logo: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=90',
        description: 'Urban co-living ecosystem offering premium, tech-enabled rental spaces.',
        sector: 'Co-living',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series B',
        foundedYear: 2016,
        category: 'Co-living / Rental Tech',
        content: `
            <p>Colive is redefining urban rental living through tech-enabled co-living infrastructure. Targeting young professionals and mobile urban populations, the startup delivers managed housing solutions with flexible contracts and digital-first experiences.</p>
            <p>The platform blends hospitality standards with long-term living, offering furnished spaces, community amenities, and app-based management. Colive’s model responds to shifting housing behavior where convenience, mobility, and affordability matter more than ownership.</p>
            <p>With urban migration increasing across Indian cities, co-living startups like Colive are shaping the future of rental ecosystems. The company’s technology backbone allows scalable property management while maintaining consistent resident experience.</p>
        `,
        highlights: [
            'Managed co-living infrastructure',
            'App-based tenant experience',
            'Flexible rental ecosystem',
            'Urban housing innovation'
        ]
    },
    {
        id: '5',
        name: 'NHOMES',
        slug: 'nhomes',
        logo: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1920&q=90',
        description: 'Tech-enabled smart property solutions for modern urban living.',
        sector: 'Construction Tech',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Seed',
        foundedYear: 2021,
        trending: true,
        category: 'Smart Property Solutions',
        content: `
            <p>NHOMES is an emerging proptech startup focused on tech-enabled residential solutions. The company explores smart housing infrastructure, digital property services, and connected living experiences.</p>
            <p>Its vision centers on integrating technology into everyday housing operations, from automation to property management workflows. NHOMES represents a growing movement toward intelligent living ecosystems within urban housing.</p>
            <p>As smart-home adoption accelerates, startups like NHOMES are shaping the next generation of residential technology platforms.</p>
        `,
        highlights: [
            'Smart housing infrastructure',
            'Connected living systems',
            'Property tech integration',
            'Digital-first residential solutions'
        ]
    },
    {
        id: '6',
        name: 'PropTech Solutions',
        slug: 'proptech-solutions',
        logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=90',
        description: 'End-to-end automation platform for seamless property and tenant management.',
        sector: 'SaaS',
        country: 'India',
        state: 'Maharashtra',
        city: 'Pune',
        fundingStage: 'Bootstrapped',
        foundedYear: 2018,
        category: 'Property Management Automation',
        content: `
            <p>PropTech Solutions focuses on tenant and property management automation for landlords, developers, and facility operators. The platform digitizes maintenance workflows, tenant communication, and operational reporting.</p>
            <p>By replacing manual management systems, the startup increases efficiency and reduces administrative overhead. Its tools support scalable property portfolios through centralized dashboards and automation pipelines.</p>
            <p>PropTech Solutions represents the operational backbone of modern real estate — the invisible infrastructure that keeps large property ecosystems running smoothly.</p>
        `,
        highlights: [
            'Automated property management',
            'Tenant communication tools',
            'Centralized operations dashboard',
            'Scalable infrastructure software'
        ]
    },
    {
        id: '7',
        name: 'Brick&Bolt',
        slug: 'brick-and-bolt',
        logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90',
        description: 'End-to-end construction management platform ensuring transparent project delivery.',
        sector: 'Construction Tech',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series B',
        foundedYear: 2018,
        category: 'Construction Tech',
        content: `
            <p>Brick&Bolt operates at the intersection of construction and technology, bringing structure and accountability to home building. The platform connects customers with vetted contractors, standardized pricing, and project management tools that increase transparency in construction.</p>
            <p>Home construction has traditionally suffered from delays, cost overruns, and quality uncertainty. Brick&Bolt addresses these challenges by introducing standardized workflows and digital monitoring systems that track progress and budgets in real time.</p>
            <p>The startup is part of a new wave of construction-tech companies focused on professionalizing the building ecosystem. By combining technology with execution oversight, Brick&Bolt aims to make construction predictable, efficient, and customer-centric.</p>
        `,
        highlights: [
            'Tech-enabled construction management',
            'Standardized pricing model',
            'Contractor verification system',
            'Real-time project tracking'
        ]
    },
    {
        id: '8',
        name: 'HomeCapital',
        slug: 'homecapital',
        logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=90',
        description: 'Innovative home financing ecosystem accelerating home ownership.',
        sector: 'Fintech',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        fundingStage: 'Series B',
        foundedYear: 2017,
        category: 'Proptech Fintech',
        content: `
            <p>HomeCapital is a financing-focused proptech startup helping buyers overcome one of the biggest barriers to home ownership: upfront capital. The platform offers innovative funding solutions that bridge the gap between savings and down payments.</p>
            <p>Through structured financial products, HomeCapital enables aspiring homeowners to enter the property market earlier than traditional lending allows. Its model blends fintech underwriting with real estate advisory, creating a hybrid ownership support ecosystem.</p>
            <p>As affordability becomes central to urban housing conversations, HomeCapital’s approach highlights the growing role of fintech in property transactions. The company represents a shift toward flexible financial infrastructure that expands access to ownership.</p>
        `,
        highlights: [
            'Down-payment assistance model',
            'Fintech-powered underwriting',
            'Ownership accessibility focus',
            'Hybrid proptech + finance platform'
        ]
    },
    {
        id: '9',
        name: 'Blox',
        slug: 'blox',
        logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=90',
        description: 'Digital real estate buying platform revolutionizing property transactions.',
        sector: 'Marketplace',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        fundingStage: 'Series A',
        foundedYear: 2020,
        category: 'Digital Property Marketplace',
        content: `
            <p>Blox is a modern home-buying platform designed for digital-first urban consumers. The startup simplifies the complex property purchase journey by combining listings, legal support, transaction management, and advisory services into a single guided experience.</p>
            <p>Instead of fragmented processes across brokers, banks, and legal advisors, Blox offers a structured end-to-end flow that reduces friction and uncertainty. The platform emphasizes transparency, verified inventory, and assisted buying.</p>
            <p>Blox positions itself as a trusted interface between buyers and developers, bringing predictability to a historically opaque market. Its tech-enabled transaction stack reflects the growing demand for streamlined digital real estate experiences.</p>
        `,
        highlights: [
            'Guided digital home-buying journey',
            'Verified property ecosystem',
            'End-to-end transaction support',
            'Buyer-first platform design'
        ]
    },
    {
        id: '10',
        name: 'Settlin',
        slug: 'settlin',
        logo: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=90',
        description: 'Full-stack residential resale platform delivering end-to-end home buying services.',
        sector: 'Marketplace',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series A',
        foundedYear: 2016,
        trending: true,
        category: 'Home Buying Services',
        content: `
            <p>Settlin simplifies the home-buying journey by acting as an end-to-end transaction partner. The startup supports buyers through search, legal checks, negotiation, paperwork, and closing — turning a fragmented process into a managed experience.</p>
            <p>Its model focuses heavily on resale markets, where complexity and documentation risk often discourage buyers. Settlin reduces uncertainty by providing structured advisory and transaction oversight powered by digital workflows.</p>
            <p>The company is part of a growing service-tech layer in proptech, where expertise is packaged into scalable platforms. By blending human advisory with technology, Settlin improves trust and efficiency in residential transactions.</p>
        `,
        highlights: [
            'End-to-end transaction management',
            'Resale property specialization',
            'Legal + documentation support',
            'Managed buying experience'
        ]
    },
    {
        id: '11',
        name: 'Reloy',
        slug: 'reloy',
        logo: 'https://images.unsplash.com/photo-1558002038-10559092a5d2?w=1920&q=90',
        description: 'Customer engagement platform optimizing builder-buyer relationships.',
        sector: 'SaaS',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        fundingStage: 'Series A',
        foundedYear: 2018,
        category: 'Developer Engagement SaaS',
        content: `
            <p>Reloy builds customer engagement software for real estate developers. The platform helps builders manage referrals, loyalty programs, and buyer communities through automated digital tools.</p>
            <p>Instead of treating buyers as one-time customers, Reloy enables long-term relationship ecosystems. Developers can incentivize referrals, track engagement, and build brand advocacy networks using structured reward systems.</p>
            <p>Reloy represents the marketing and retention layer of proptech. As competition increases among developers, engagement platforms like Reloy become essential infrastructure for customer-driven growth.</p>
        `,
        highlights: [
            'Referral and loyalty automation',
            'Developer engagement platform',
            'Community-driven growth tools',
            'CRM for real estate brands'
        ]
    },
    {
        id: '12',
        name: 'Zapkey',
        slug: 'zapkey',
        logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=90',
        description: 'Data-driven property price intelligence and analytics platform.',
        sector: 'Data & AI',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        fundingStage: 'Series A',
        foundedYear: 2020,
        category: 'Property Data & Analytics',
        content: `
            <p>Zapkey is a data intelligence platform focused on property price transparency and market analytics. The startup aggregates transaction-level real estate data and converts it into structured insights for buyers, investors, and developers.</p>
            <p>Real estate markets have historically lacked accessible pricing benchmarks. Zapkey addresses this gap by building a searchable database of past transactions, enabling users to evaluate fair market value with confidence.</p>
            <p>The company represents the data layer of proptech — turning opaque markets into information-rich ecosystems. As real estate decisions increasingly rely on analytics, Zapkey is emerging as a trusted infrastructure player.</p>
        `,
        highlights: [
            'Property transaction intelligence',
            'Historical price database',
            'Market transparency tools',
            'Analytics-driven decision support'
        ]
    },
    {
        id: '13',
        name: 'RealX',
        slug: 'realx',
        logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=90',
        description: 'Pioneering fractional real estate investment platform for retail investors.',
        sector: 'Fintech',
        country: 'India',
        state: 'Maharashtra',
        city: 'Pune',
        fundingStage: 'Seed',
        foundedYear: 2020,
        category: 'Fractional Investment Platform',
        content: `
            <p>RealX is redefining property ownership through fractional real estate investing. The platform enables individuals to invest in premium commercial and residential assets without requiring full ownership capital. By lowering entry barriers, RealX opens real estate investing to a wider audience.</p>
            <p>The company structures investments into legally compliant fractional units, allowing investors to earn rental yields and appreciation without direct property management responsibilities. Its digital dashboard provides transparency into performance, returns, and asset management.</p>
            <p>RealX reflects the global shift toward asset democratization, where technology converts traditionally exclusive investments into accessible opportunities. As demand grows for alternative investment platforms, RealX is positioning itself as a gateway to modern real estate portfolios.</p>
        `,
        highlights: [
            'Fractional real estate ownership',
            'Passive income investment model',
            'Digital asset tracking dashboard',
            'Accessible property investing'
        ]
    },
    {
        id: '14',
        name: 'Strata',
        slug: 'strata',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90',
        description: 'Leading commercial real estate investment tech platform democratizing ownership.',
        sector: 'Fintech',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series B',
        foundedYear: 2019,
        category: 'Commercial Real Estate Investment Tech',
        content: `
            <p>Strata focuses on institutional-grade commercial real estate investments delivered through a technology platform. It allows investors to co-own income-generating office spaces and enterprise properties typically reserved for large funds.</p>
            <p>The platform performs asset curation, due diligence, and management while providing investors with professional-grade reporting and governance. By digitizing commercial ownership structures, Strata reduces complexity and increases investor confidence.</p>
            <p>Strata’s model represents a convergence of proptech and wealth management. As investors search for stable yield assets, the startup is creating a structured pathway into commercial real estate backed by data-driven decision-making.</p>
        `,
        highlights: [
            'Institutional commercial investments',
            'Curated income-generating assets',
            'Governance + reporting transparency',
            'Tech-driven asset management'
        ]
    },
    {
        id: '15',
        name: 'Alt DRX',
        slug: 'alt-drx',
        logo: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90',
        description: 'First-of-its-kind digital real estate exchange for trading property assets.',
        sector: 'Fintech',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Seed',
        foundedYear: 2021,
        category: 'Digital Real Estate Exchange',
        content: `
            <p>Alt DRX is building the infrastructure for fractional real estate ownership through a digital exchange model. The platform allows investors to buy and sell small ownership units of premium properties, making real estate more liquid and accessible to a new generation of investors.</p>
            <p>Traditionally, property investment required large capital and long lock-in periods. Alt DRX addresses this barrier by tokenizing ownership structures and enabling regulated digital transactions. This approach transforms real estate from an illiquid asset into a tradable financial instrument.</p>
            <p>The startup represents a major shift toward fintech-driven property investing. By combining compliance, technology, and marketplace liquidity, Alt DRX is helping democratize access to high-value assets while modernizing how real estate wealth is built.</p>
        `,
        highlights: [
            'Fractional property ownership',
            'Digital asset exchange model',
            'Liquidity in real estate investing',
            'Fintech + proptech integration'
        ]
    },
    {
        id: '16',
        name: 'PropertyPistol',
        slug: 'propertypistol',
        logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90',
        description: 'Transaction-focused proptech advisory platform delivering seamless experiences.',
        sector: 'Marketplace',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        fundingStage: 'Series A',
        foundedYear: 2012,
        category: 'Transaction Advisory Platform',
        content: `
            <p>PropertyPistol is a tech-enabled advisory platform that connects buyers with curated property opportunities. The startup focuses on transaction execution, combining brokerage expertise with digital discovery tools.</p>
            <p>Its model prioritizes guided assistance rather than open marketplaces, offering personalized recommendations and end-to-end support. PropertyPistol acts as a bridge between developers and modern buyers seeking structured advisory.</p>
            <p>The company reflects a hybrid proptech approach — blending human expertise with scalable technology infrastructure to streamline property transactions.</p>
        `,
        highlights: [
            'Advisory-led buying platform',
            'Curated developer partnerships',
            'Assisted transaction model',
            'Hybrid digital + human service'
        ]
    }
];

export function getFilteredStartups(
    query: string,
    filters: {
        country: string | null;
        state: string | null;
        sector: string | null;
        funding: string | null;
    },
    sort: 'newest' | 'oldest' | 'name' = 'name'
): Startup[] {
    const filtered = STARTUPS.filter(startup => {
        const matchesQuery = startup.name.toLowerCase().includes(query.toLowerCase()) ||
            startup.description.toLowerCase().includes(query.toLowerCase()) ||
            startup.city.toLowerCase().includes(query.toLowerCase());
        const matchesCountry = filters.country ? startup.country === filters.country : true;
        const matchesState = filters.state ? startup.state === filters.state : true;
        const matchesSector = filters.sector ? startup.sector === filters.sector : true;
        const matchesFunding = filters.funding ? startup.fundingStage === filters.funding : true;

        return matchesQuery && matchesCountry && matchesState && matchesSector && matchesFunding;
    });

    return filtered.sort((a, b) => {
        if (sort === 'newest') return b.foundedYear - a.foundedYear;
        if (sort === 'oldest') return a.foundedYear - b.foundedYear;
        return a.name.localeCompare(b.name);
    });
}

export function getTrendingStartups(): Startup[] {
    return STARTUPS.filter(s => s.trending);
}

export function getFeaturedStartup(): Startup {
    return STARTUPS.find(s => s.featured) || STARTUPS[0];
}
