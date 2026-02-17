import { NewsArticle } from './news-data';

export function generateArticleContent(article: NewsArticle): string {
    const { title, category, excerpt, author } = article;

    // 1. Introduction based on Excerpt
    let intro = `<p class="lead text-xl text-neutral-600 font-medium mb-8">${excerpt}</p>`;

    // 2. Generate detailed sections based on Category & Keywords
    let bodyContent = '';

    const keywords = title.toLowerCase().split(' ');
    const isIndia = category.includes('India') || keywords.includes('india') || keywords.includes('delhi') || keywords.includes('mumbai') || keywords.includes('bangalore');
    const isGCC = category.includes('GCC') || keywords.includes('dubai') || keywords.includes('saudi') || keywords.includes('uae');

    // Dynamic Section 1: The Core Event/Development
    bodyContent += `
    <h2 class="text-2xl font-bold text-neutral-900 mt-8 mb-4">The Development</h2>
    <p class="mb-6 text-neutral-800 leading-relaxed">
      In a significant move for the ${isGCC ? 'Middle East' : 'Indian'} real estate sector, <strong>${title}</strong> has garnered attention from stakeholders across the industry. 
      This development comes at a time when the market is witnessing a rapid transformation driven by technology adoption and changing consumer preferences.
    </p>
    <p class="mb-6 text-neutral-800 leading-relaxed">
      Industry experts suggest that this initiative could set a benchmark for future projects. 
      "The scale and execution of this project highlight the maturity of the ecosystem," notes a senior analyst. 
      The integration of advanced PropTech solutions is expected to streamline operations and enhance value for end-users.
    </p>
  `;

    // Dynamic Section 2: Market Context (Category specific)
    if (category.includes('Funding') || category.includes('Deals')) {
        bodyContent += `
      <h2 class="text-2xl font-bold text-neutral-900 mt-8 mb-4">Investment Impact</h2>
      <p class="mb-6 text-neutral-800 leading-relaxed">
        The capital influx into this space signals strong investor confidence in the long-term viability of tech-enabled real estate models. 
        With ${isIndia ? 'Indian' : 'GCC'} PropTech startups raising record amounts this quarter, the sector is poised for consolidation and expansion.
      </p>
      <ul class="list-disc pl-6 mb-6 space-y-2 text-neutral-800">
        <li><strong>Scalability:</strong> The funding will likely be deployed to expand into Tier 2 cities and new international markets.</li>
        <li><strong>Product Innovation:</strong> A significant portion is earmarked for R&D, specifically in AI and data analytics.</li>
        <li><strong>Talent Acquisition:</strong> strengthening the leadership team to drive strategic growth.</li>
      </ul>
    `;
    } else if (category.includes('Policy') || category.includes('Government')) {
        bodyContent += `
      <h2 class="text-2xl font-bold text-neutral-900 mt-8 mb-4">Regulatory Framework</h2>
      <p class="mb-6 text-neutral-800 leading-relaxed">
        This policy shift aligns with the broader national vision of digitizing land records and ensuring transparency in real estate transactions. 
        For developers and homebuyers alike, efficient compliance mechanisms reduce friction and boost trust in the system.
      </p>
    `;
    } else if (category.includes('Startups') || category.includes('Tech')) {
        bodyContent += `
      <h2 class="text-2xl font-bold text-neutral-900 mt-8 mb-4">Technological Disruption</h2>
      <p class="mb-6 text-neutral-800 leading-relaxed">
        By leveraging cutting-edge technology, this startup is addressing a critical gap in the market. The solution offers a seamless experience, 
        reducing the turnaround time for property transactions by up to 40%. Such innovations are crucial for bridging the gap between traditional real estate practices and modern digital expectations.
      </p>
    `;
    } else {
        // General Analysis/Launch
        bodyContent += `
      <h2 class="text-2xl font-bold text-neutral-900 mt-8 mb-4">Strategic Implications</h2>
      <p class="mb-6 text-neutral-800 leading-relaxed">
        This move effectively positions the region as a growing hub for PropTech innovation. 
        As infrastructure projects like ${isGCC ? 'NEOM and the Red Sea Project' : 'Smart Cities Mission and Dholera SIR'} gain momentum, 
        the demand for integrated tech solutions is skyrocketing.
      </p>
    `;
    }

    // Dynamic Section 3: Future Outlook
    bodyContent += `
    <h2 class="text-2xl font-bold text-neutral-900 mt-8 mb-4">Future Outlook</h2>
    <p class="mb-6 text-neutral-800 leading-relaxed">
      Looking ahead, the success of this initiative will depend on consistent execution and adaptability to market feedback. 
      As ${author} reports, early indicators are promising, with adoption rates exceeding initial projections.
    </p>
    <p class="mb-6 text-neutral-800 leading-relaxed">
      We will continue to track this story as it unfolds, providing deeper insights into its impact on the wider ${isGCC ? 'GCC' : 'Indian'} real estate landscape.
    </p>
  `;

    return intro + bodyContent;
}
