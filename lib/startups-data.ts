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
        name: 'Square Yards',
        slug: 'square-yards',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=90',
        description: 'India\'s largest integrated real estate marketplace and proptech ecosystem.',
        sector: 'Marketplace',
        country: 'India',
        state: 'Haryana',
        city: 'Gurugram',
        fundingStage: 'Series C+',
        foundedYear: 2014,
        trending: true,
    },
    {
        id: '2',
        name: 'NoBroker',
        slug: 'nobroker',
        logo: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=90',
        description: 'The world\'s largest peer-to-peer real estate platform removing the middleman.',
        sector: 'Marketplace',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series C+',
        foundedYear: 2014,
        trending: true,
    },
    {
        id: '3',
        name: 'Huspy',
        slug: 'huspy',
        logo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=90',
        description: 'Simplifying the home buying and mortgage process in the UAE and Europe.',
        sector: 'Fintech',
        country: 'UAE',
        city: 'Dubai',
        fundingStage: 'Series A',
        foundedYear: 2020,
        featured: true,
    },
    {
        id: '4',
        name: 'Livspace',
        slug: 'livspace',
        logo: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=90',
        description: 'Asia’s largest and fastest-growing omni-channel home interiors and renovation platform.',
        sector: 'Construction Tech',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series C+',
        foundedYear: 2014,
    },
    {
        id: '5',
        name: 'Stella Stays',
        slug: 'stella-stays',
        logo: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?w=1920&q=90',
        description: 'Tech-enabled hospitality brand offering modern, furnished apartments for flexible stays.',
        sector: 'Co-living',
        country: 'UAE',
        city: 'Dubai',
        fundingStage: 'Series A',
        foundedYear: 2019,
        trending: true,
    },
    {
        id: '6',
        name: 'Aqar',
        slug: 'aqar',
        logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=90',
        description: 'Leading real estate marketplace in Saudi Arabia connecting buyers and sellers.',
        sector: 'Marketplace',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        fundingStage: 'Series B',
        foundedYear: 2014,
    },
    {
        id: '7',
        name: 'Infra.Market',
        slug: 'infra-market',
        logo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90',
        description: 'One-stop marketplace for all construction material needs.',
        sector: 'Construction Tech',
        country: 'India',
        state: 'Maharashtra',
        city: 'Thane',
        fundingStage: 'Series C+',
        foundedYear: 2016,
    },
    {
        id: '8',
        name: 'Property Finder',
        slug: 'property-finder',
        logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=90',
        description: 'The leading real estate portal in the MENA region.',
        sector: 'Marketplace',
        country: 'UAE',
        city: 'Dubai',
        fundingStage: 'Series C+',
        foundedYear: 2007,
    },
    {
        id: '9',
        name: 'NestAway',
        slug: 'nestaway',
        logo: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=90',
        description: 'India\'s fastest growing "Home Rental Network" attempting to provide better rental value.',
        sector: 'Co-living',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series C+',
        foundedYear: 2015,
    },
    {
        id: '10',
        name: 'Stake',
        slug: 'stake',
        logo: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=90',
        description: 'Digital real estate investment platform for fractional ownership in Dubai properties.',
        sector: 'Fintech',
        country: 'UAE',
        city: 'Dubai',
        fundingStage: 'Series A',
        foundedYear: 2020,
        trending: true,
    },
    {
        id: '11',
        name: 'Magicbricks',
        slug: 'magicbricks',
        logo: 'https://images.unsplash.com/photo-1558002038-10559092a5d2?w=1920&q=90',
        description: 'A division of Times Internet Limited, a wholly owned subsidiary of Bennett, Coleman & Co. Ltd.',
        sector: 'Marketplace',
        country: 'India',
        state: 'Uttar Pradesh',
        city: 'Noida',
        fundingStage: 'Acquired',
        foundedYear: 2006,
    },
    {
        id: '12',
        name: 'Munjz',
        slug: 'munjz',
        logo: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=90',
        description: 'Cloud-based property management system for the Saudi market.',
        sector: 'SaaS',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        fundingStage: 'Series A',
        foundedYear: 2018,
    },
    {
        id: '13',
        name: 'PropStack',
        slug: 'propstack',
        logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=90',
        description: 'Data and analytics platform for the Indian commercial real estate market.',
        sector: 'Data & AI',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        fundingStage: 'Series A',
        foundedYear: 2013,
    },
    {
        id: '14',
        name: 'Hapondo',
        slug: 'hapondo',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90',
        description: 'Qatar’s leading property portal for finding homes to rent or buy.',
        sector: 'Marketplace',
        country: 'Qatar',
        city: 'Doha',
        fundingStage: 'Seed',
        foundedYear: 2019,
    },
    {
        id: '15',
        name: 'Azizi Developments',
        slug: 'azizi-developments',
        logo: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=90',
        description: 'Leading real estate developer in Dubai with iconic projects.',
        sector: 'Construction Tech',
        country: 'UAE',
        city: 'Dubai',
        fundingStage: 'Undisclosed',
        foundedYear: 2007,
    },
    {
        id: '16',
        name: 'SmartSpace',
        slug: 'smartspace',
        logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=90',
        description: 'AI-driven workspace management platform for hybrid teams.',
        sector: 'SaaS',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        fundingStage: 'Series B',
        foundedYear: 2018,
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
