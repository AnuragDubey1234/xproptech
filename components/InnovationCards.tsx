'use client';

import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';

interface InnovationCardsProps {
    features: {
        title: string;
        category: string;
        image: string;
        desc: string;
    }[];
    y1: MotionValue<number>;
    y2: MotionValue<number>;
    rotate: MotionValue<number>;
}

export default function InnovationCards({ features, y1, y2, rotate }: InnovationCardsProps) {
    return (
        <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            {features.map((item, index) => (
                <motion.div
                    key={index}
                    style={{
                        y: index % 2 === 0 ? y1 : y2,
                        rotate: index === 1 ? rotate : 0,
                        zIndex: features.length - index
                    }}
                    className={`absolute top-${index * 24} right-${index * 12} w-80 aspect-[4/5] bg-white rounded-2xl p-2 shadow-2xl border border-white/10 glass-card
            ${index === 0 ? 'right-0 top-10' : ''}
            ${index === 1 ? 'right-40 top-32' : ''}
            ${index === 2 ? 'right-80 top-0' : ''}
        `}
                >
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-800 group">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="320px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                            <span className="text-xs font-bold text-fire-red uppercase mb-2">{item.category}</span>
                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                            <p className="text-xs text-neutral-400 line-clamp-2">{item.desc}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
