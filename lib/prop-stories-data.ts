
export type StoryType = 'founder' | 'professional';

export interface Interview {
    id: string;
    slug: string;
    type: StoryType;
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    content: {
        intro: string;
        qa?: { question: string; answer: string }[]; // For founders
        article?: string[]; // For professionals
    };
}

export const STORIES: Interview[] = [
    // Founders
    {
        id: '1',
        slug: 'aarav-gupta-propai',
        type: 'founder',
        name: 'Aarav Gupta',
        role: 'Founder & CEO',
        company: 'PropAI',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80',
        quote: "AI isn't replacing brokers; it's making them superhuman.",
        content: {
            intro: "Aarav Gupta discusses how PropAI is leveraging generative AI to automate property valuations and legal due diligence.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "The immense time wastage in manual property verification. We automate 90% of the due diligence process." },
                { question: "What makes your startup different?", answer: "Our proprietary dataset of over 50 million property records combined with a specialized LLM for Indian real estate law." },
                { question: "Current challenge in PropTech?", answer: "Fragmented land records. Digitization is happening, but interoperability between state systems is still a hurdle." },
                { question: "One prediction for real estate tech?", answer: "By 2030, you will be able to buy a home entirely from your phone, including loan approval and registration, in under 24 hours." },
                { question: "Advice for new founders?", answer: "Don't build for the 'cool' factor. Build for the unglamorous, messy problems that no one else wants to touch." }
            ]
        }
    },
    {
        id: '2',
        slug: 'zara-khan-urbanliving',
        type: 'founder',
        name: 'Zara Khan',
        role: 'Co-founder',
        company: 'UrbanLiving',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
        quote: "Co-living is about community first, real estate second.",
        content: {
            intro: "Zara Khan shares her vision for the future of shared urban living spaces in Tier 1 cities.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "Urban loneliness and the poor quality of rental housing for young professionals." },
                { question: "What makes your startup different?", answer: "We focus heavily on experience design. Our community events are as important as our furniture quality." },
                { question: "Current challenge in PropTech?", answer: "Standardizing the tenant experience across a fragmented supply of landlord-owned properties." },
                { question: "One prediction for real estate tech?", answer: "Flexible living subscriptions will replace traditional 11-month leases for the mobile workforce." },
                { question: "Advice for new founders?", answer: "Understand your customer's daily life deeply. Real estate is personal." }
            ]
        }
    },
    {
        id: '3',
        slug: 'vikram-singh-buildtech',
        type: 'founder',
        name: 'Vikram Singh',
        role: 'CTO',
        company: 'BuildTech Solutions',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
        quote: "Construction efficiency is the only way to solve the housing crisis.",
        content: {
            intro: "Vikram Singh talks about bringing robotics and IoT into the traditional construction site.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "Project delays and cost overruns due to lack of real-time visibility on construction sites." },
                { question: "What makes your startup different?", answer: "We deploy IoT sensors that track material usage and worker productivity in real-time, feeding into a central dashboard." },
                { question: "Current challenge in PropTech?", answer: "Adoption inertia. Convincing traditional construction firms to trust data over gut feeling." },
                { question: "One prediction for real estate tech?", answer: "Prefabricated and 3D-printed homes will become 30% of new inventory within the next decade." },
                { question: "Advice for new founders?", answer: "Hardware is hard. Make sure your software value proposition is strong enough to carry the hardware costs." }
            ]
        }
    },
    {
        id: '7',
        slug: 'elena-rodriguez-greenbrick',
        type: 'founder',
        name: 'Elena Rodriguez',
        role: 'CEO',
        company: 'GreenBrick',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80',
        quote: "Sustainability is no longer an option; it's the only way to build.",
        content: {
            intro: "Elena shares how GreenBrick is making sustainable materials accessible to everyone.",
            qa: [
                { question: "Biggest problem you are solving?", answer: "The high cost and low availability of truly sustainable building materials." },
                { question: "What makes your startup different?", answer: "We have a direct-to-consumer model that cuts out the middleman, making green materials 40% cheaper." },
                { question: "Current challenge in PropTech?", answer: "Educating the market. People still think 'green' means 'expensive' or 'low durability'." },
                { question: "One prediction for real estate tech?", answer: "Carbon footprint tracking will become a standard part of every property transaction." },
                { question: "Advice for new founders?", answer: "Start with a niche. You can't boil the ocean, but you can dominate a pond." }
            ]
        }
    },
    // Professionals
    {
        id: '4',
        slug: 'priya-sharma-knight-frank',
        type: 'professional',
        name: 'Priya Sharma',
        role: 'Head of Research',
        company: 'Knight Frank India',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
        quote: "The office market is not dying; it's evolving into experience centers.",
        content: {
            intro: "Priya Sharma analyzes the shifting trends in commercial real estate post-pandemic.",
            article: [
                "The narrative that 'office is dead' has been greatly exaggerated. What we are seeing is a flight to quality. Grade A offices that offer sustainability, wellness, and technology are seeing record occupancy rates.",
                "Tenants are no longer looking for just desks; they are looking for collaboration hubs. This means more breakout areas, smart meeting rooms, and amenities that rival high-end hotels.",
                "However, the struggle is real for Grade B and C assets. Landlords of older buildings must upgrade or risk obsolescence. The future belong to 'smart' buildings that can report on their own ESG metrics.",
                "Proptech plays a crucial role here. From occupancy sensors to air quality monitoring, technology is the differentiator that justifies premium rents in a competitive market."
            ]
        }
    },
    {
        id: '5',
        slug: 'rahul-mehta-realstep',
        type: 'professional',
        name: 'Rahul Mehta',
        role: 'Managing Partner',
        company: 'RealStep Ventures',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
        quote: "We are finally seeing the 'fintech-ization' of real estate.",
        content: {
            intro: "Rahul Mehta discusses the convergence of finance and property technology.",
            article: [
                "Real estate has historically been the most illiquid asset class. That is changing rapidly with fractional ownership and tokenization.",
                "Platforms that allow retail investors to buy a slice of a commercial building for as little as ₹10,000 are democratizing wealth creation. This was previously the playground of the ultra-wealthy.",
                "But regulation is key. The SEBI's SM REIT guidelines are a massive step forward. It brings trust and transparency to a sector that desperately needed it.",
                "The next big wave? Mortgages. The approval process is still archaic. We expect end-to-end digital mortgage processing to become the standard within 2-3 years, driven by account aggregators and digital identity stacks."
            ]
        }
    },
    {
        id: '6',
        slug: 'anjali-desai-sustainable-spaces',
        type: 'professional',
        name: 'Anjali Desai',
        role: 'Chief Architect',
        company: 'Sustainable Spaces',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80',
        quote: "Green buildings are no longer a luxury; they are a compliance necessity.",
        content: {
            intro: "Anjali Desai on why sustainability is the new standard in development.",
            article: [
                "With the new energy conservation codes and carbon neutrality goals, developers don't have a choice. You either build green, or you don't build.",
                "But it's not just about compliance. Buyers are smarter. They ask about thermal insulation, water harvesting, and solar capacity. They know these lower their long-term operating costs.",
                "We are seeing a surge in demand for 'Net Zero' ready homes. These are homes designed to produce as much energy as they consume.",
                "Technology is the enabler. BIM (Building Information Modeling) allows us to simulate energy performance before a single brick is laid. This is essentially 'simulation-driven design' becoming mainstream."
            ]
        }
    },
    {
        id: '8',
        slug: 'david-chen-future-cities',
        type: 'professional',
        name: 'David Chen',
        role: 'Director',
        company: 'Future Cities',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
        quote: "Smart cities are about people, not just sensors.",
        content: {
            intro: "David discusses the human-centric approach to smart city development.",
            article: [
                "We often get caught up in the technology of smart cities—the sensors, the data, the AI. But we forget the most important part: the people who live there.",
                "A truly smart city uses technology to improve quality of life. Shorter commutes, cleaner air, safer streets. If the tech doesn't deliver that, it's useless.",
                "The '15-minute city' concept is gaining traction globally. It's about designing neighborhoods where everything you need is a short walk or bike ride away.",
                "This requires a fundamental rethink of urban planning. We need mixed-use developments, better public transport, and more green spaces. Technology is the tool that helps us achieve this vision."
            ]
        }
    }
];

export function getStoryBySlug(slug: string): Interview | undefined {
    return STORIES.find((s) => s.slug === slug);
}

export function getRelatedStories(currentId: string, limit = 2): Interview[] {
    return STORIES.filter(s => s.id !== currentId).sort(() => 0.5 - Math.random()).slice(0, limit);
}
