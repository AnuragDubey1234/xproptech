'use client';

import Link from 'next/link';
import { getTrending } from '@/lib/news-data';

const factsAndInsights = [
  { stat: '$5B+', label: 'Indian PropTech market size by 2028 (GGC projection)' },
  { stat: '45%', label: 'Tier 2 cities driving PropTech adoption—Indore, Coimbatore, Jaipur' },
  { stat: '12M+', label: 'Land records digitized across 12 states (DLR integration)' },
  { stat: '₹10K', label: 'Minimum REIT fractional investment on new digital platforms' },
  { stat: '1M+', label: 'VR/AR property tour sessions in India (2025–26)' },
  { stat: 'RERA', label: 'Compliance SaaS crossing 10K users among developers' },
  { stat: '100+', label: 'Smart City missions—IoT, GIS & PropTech at core' },
  { stat: '80M', label: 'Housing units under PMAY—huge demand for construction tech' },
  { stat: '40%', label: 'Smart home tech integration surge in new apartments (post-2025)' },
  { stat: '₹1L Cr', label: 'Industrial corridor investment (DMIC, etc.)—logistics & land tech' },
  { stat: '50K+', label: 'Student housing beds managed by PropTech platforms' },
  { stat: '25–30', label: 'Early-stage PropTech startups backed by new $80M India VC fund' },
];

const upcomingEventsAndInfra = [
  { title: 'PropTech India Summit 2026', detail: 'Mumbai · Mar 2026', tag: 'Event', summary: 'Flagship conference for startups, investors, and policymakers.' },
  { title: 'Smart Cities India Expo', detail: 'Delhi NCR · Apr 2026', tag: 'Event', summary: 'IoT, GIS, and urban tech showcase driving municipal PropTech adoption.' },
  { title: 'Dholera SIR & GIFT City expansion', detail: 'Gujarat · Ongoing', tag: 'Infra', summary: 'Greenfield smart city and fintech hub—massive land and construction tech opportunity.' },
  { title: 'Chennai–Bengaluru Industrial Corridor', detail: 'Phase 2 rollout · 2026', tag: 'Infra', summary: 'Industrial and logistics real estate boom; land records and last-mile tech in focus.' },
  { title: 'Mumbai Metro Line 4 & Trans-Harbour', detail: 'Last-mile & land value boost', tag: 'Infra', summary: 'Transit-oriented development and valuation tools for corridor real estate.' },
  { title: 'PMAY-U 2.0 & Affordable Housing push', detail: 'Central + state schemes', tag: 'Infra', summary: '80M+ target units—construction tech, project management, and affordability platforms.' },
  { title: 'REIT & InvIT roadshows', detail: 'Fractional investment platforms', tag: 'Event', summary: 'Digital REIT platforms enabling retail participation from ₹10K.' },
  { title: 'Land titling & DLR Phase 3 states', detail: 'Digitization drive · 2026', tag: 'Infra', summary: 'Title verification and proptech integration with state land registries.' },
];

export function TrendingSidebar() {
  const trending = getTrending(10);

  return (
    <aside className="space-y-10">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-6 md:p-7">
        <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3">Trending</h3>
        <p className="text-base md:text-lg font-semibold text-neutral-600 mb-5 leading-relaxed">
          Most-read PropTech stories this week—funding, policy, and market moves across India and GGC markets.
        </p>
        <ul className="space-y-3">
          {trending.map((article, i) => (
            <li key={article.slug}>
              <Link
                href={`/news/${article.slug}`}
                className="block py-3 border-b border-neutral-100 last:border-0 hover:text-fire-red transition-colors"
              >
                <span className="text-base font-extrabold text-fire-red mr-2">{i + 1}</span>
                <span className="text-lg md:text-xl font-extrabold text-neutral-900 line-clamp-2">{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl border border-red-100 shadow-lg p-6 md:p-7">
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">Facts & Insights</h3>
        <p className="text-base text-neutral-600 mb-5 leading-relaxed">
          Key numbers shaping Indian PropTech—market size, adoption, and policy tailwinds in the India & GGC context.
        </p>
        <ul className="space-y-4">
          {factsAndInsights.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 items-start py-3 border-b border-neutral-100 last:border-0"
            >
              <span className="flex-shrink-0 w-14 text-base md:text-lg font-bold text-fire-red">{item.stat}</span>
              <span className="text-base md:text-lg font-semibold text-neutral-800 leading-snug">{item.label}</span>
            </li>
          ))}
        </ul>
        <p className="text-base text-neutral-500 mt-5 pt-4 border-t border-neutral-100 leading-relaxed">
          Sources: industry reports, government releases, and XProptech analysis. Updated periodically.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-amber-100 shadow-lg p-6 md:p-7">
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">Upcoming Events & Infrastructure</h3>
        <p className="text-base text-neutral-600 mb-5 leading-relaxed">
          Conferences, roadshows, and big-ticket infrastructure that will drive PropTech growth in India.
        </p>
        <ul className="space-y-5">
          {upcomingEventsAndInfra.map((item, i) => (
            <li
              key={i}
              className="py-4 border-b border-neutral-100 last:border-0"
            >
              <span className={`inline-block px-2.5 py-1 rounded-md text-sm font-bold mb-2 ${item.tag === 'Event' ? 'bg-amber-100 text-amber-800' : 'bg-sky-100 text-sky-800'}`}>
                {item.tag}
              </span>
              <p className="text-base md:text-lg font-bold text-neutral-900 leading-snug">{item.title}</p>
              <p className="text-sm md:text-base text-neutral-600 mt-1 font-medium">{item.detail}</p>
              <p className="text-sm md:text-base text-neutral-700 mt-2 leading-relaxed">{item.summary}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-6 md:p-7">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Newsletter</h3>
        <p className="text-base text-neutral-600 mb-4 leading-relaxed">
          Get PropTech news, funding rounds, policy updates, and analysis in your inbox. No spam—curated for builders and investors.
        </p>
        <ul className="text-base font-semibold text-neutral-700 space-y-2 mb-6">
          <li>· Weekly digest of top stories</li>
          <li>· Early access to reports and events</li>
          <li>· India & GGC market briefs</li>
        </ul>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3.5 rounded-lg border border-neutral-200 text-neutral-900 text-base focus:outline-none focus:ring-2 focus:ring-fire-red"
          />
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-fire-red hover:bg-fire-red-dark text-white font-bold text-base transition-colors hover:scale-[1.02] active:scale-[0.98] transform duration-150"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
