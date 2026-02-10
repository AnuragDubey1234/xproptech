'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Check, RotateCcw } from 'lucide-react';
import { INDIAN_STATES } from '@/lib/startups-data';
import { useState, useEffect, useRef } from 'react';

interface FilterState {
    country: string | null;
    state: string | null;
    sector: string | null;
    funding: string | null;
}

interface StartupFilterBarProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
    sort: 'newest' | 'oldest' | 'name';
    setSort: (sort: 'newest' | 'oldest' | 'name') => void;
}

const COUNTRIES = ['India', 'UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'Kuwait'];
const SECTORS = ['Fintech', 'Proptech', 'Construction Tech', 'CleanTech', 'SaaS', 'Marketplace', 'Co-living', 'Data & AI'];
const FUNDING_STAGES = ['Seed', 'Series A', 'Series B', 'Series C+', 'Bootstrapped', 'Undisclosed'];

function Dropdown({
    label,
    value,
    options,
    onChange,
    disabled = false
}: {
    label: string,
    value: string | null,
    options: string[],
    onChange: (val: string | null) => void,
    disabled?: boolean
}) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    if (disabled) return null;

    const isSelected = !!value;

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-3 px-5 py-2.5 rounded-xl border-2 transition-all duration-300 group whitespace-nowrap
          ${isSelected
                        ? 'bg-fire-red/5 border-fire-red/20 text-fire-red shadow-[0_4px_12px_rgba(220,38,38,0.08)]'
                        : 'bg-white border-neutral-100 text-neutral-400 hover:border-neutral-200 hover:bg-neutral-50'
                    }`}
            >
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
                <span className={`text-sm font-bold ${isSelected ? 'text-fire-red' : 'text-neutral-900'}`}>
                    {value || 'All'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-0 mt-3 min-w-[240px] bg-white border-2 border-neutral-100 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-3 z-50 overflow-hidden"
                    >
                        <div className="max-h-80 overflow-y-auto px-2 custom-scrollbar">
                            <button
                                onClick={() => { onChange(null); setIsOpen(false); }}
                                className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all flex items-center justify-between group"
                            >
                                All {label}s
                            </button>
                            <div className="h-[1px] bg-neutral-100 my-1 mx-2" />
                            {options.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => { onChange(opt); setIsOpen(false); }}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between group mb-0.5 ${value === opt
                                            ? 'bg-fire-red text-white shadow-lg shadow-fire-red/20'
                                            : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                                        }`}
                                >
                                    <span className="font-bold">{opt}</span>
                                    {value === opt && <Check className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function StartupFilterBar({ filters, setFilters, sort, setSort }: StartupFilterBarProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-40 transition-all duration-500 ${isSticky ? 'pt-4 pb-2' : 'pt-2 pb-6'}`}>
            <div className="container mx-auto px-4 md:px-12">
                <div className={`bg-white border-2 transition-all duration-500 overflow-hidden ${isSticky
                        ? 'rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-neutral-200/50 p-3'
                        : 'rounded-3xl border-neutral-100 p-4 md:p-6'
                    }`}>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                        {/* Filters Container */}
                        <div className="flex items-center gap-4 overflow-x-auto w-full md:w-auto scrollbar-hide pb-2 md:pb-0">
                            <div className="flex items-center gap-3 text-neutral-400 mr-2">
                                <Filter className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">Filter</span>
                            </div>

                            <Dropdown
                                label="Country"
                                value={filters.country}
                                options={COUNTRIES}
                                onChange={(val) => setFilters(prev => ({ ...prev, country: val, state: null }))}
                            />

                            <Dropdown
                                label="State"
                                value={filters.state}
                                options={INDIAN_STATES}
                                onChange={(val) => setFilters(prev => ({ ...prev, state: val }))}
                                disabled={filters.country !== 'India'}
                            />

                            <Dropdown
                                label="Sector"
                                value={filters.sector}
                                options={SECTORS}
                                onChange={(val) => setFilters(prev => ({ ...prev, sector: val }))}
                            />

                            <Dropdown
                                label="Funding"
                                value={filters.funding}
                                options={FUNDING_STAGES}
                                onChange={(val) => setFilters(prev => ({ ...prev, funding: val }))}
                            />
                        </div>

                        {/* Sort & Action */}
                        <div className="flex items-center gap-6 md:ml-auto w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 md:border-l border-neutral-100 pt-4 md:pt-0 md:pl-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-1">Sort Results</span>
                                <select
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value as any)}
                                    className="bg-neutral-50 border border-neutral-200 text-neutral-900 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:border-fire-red/30 transition-shadow hover:bg-neutral-100 cursor-pointer"
                                >
                                    <option value="name">Alphabetical (A-Z)</option>
                                    <option value="newest">Newest First</option>
                                    <option value="oldest">Oldest First</option>
                                </select>
                            </div>

                            <button
                                onClick={() => setFilters({ country: 'India', sector: null, funding: null, state: null })}
                                className="group p-3 text-neutral-400 hover:text-fire-red hover:bg-fire-red/5 rounded-xl transition-all border border-transparent hover:border-fire-red/10"
                                title="Reset Grid"
                            >
                                <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
