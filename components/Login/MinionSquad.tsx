'use client';

import { Minion } from './Minion';

interface MinionSquadProps {
    isLookingAside: boolean;
}

export function MinionSquad({ isLookingAside }: MinionSquadProps) {
    return (
        <div className="flex items-end justify-center gap-[-10px] sm:gap-2 mb-4">
            {/* Left: Two Eyes - tilted slightly left */}
            <div className="transform -rotate-6 translate-y-2 scale-90 sm:scale-100 z-0">
                <Minion variant="two-eyes" isLookingAside={isLookingAside} />
            </div>

            {/* Center: One Eye - slight pop up, main focus */}
            <div className="z-10 -mx-4 sm:mx-0">
                <Minion variant="one-eye" isLookingAside={isLookingAside} />
            </div>

            {/* Right: Two Eyes - tilted slightly right */}
            <div className="transform rotate-6 translate-y-2 scale-90 sm:scale-100 z-0">
                <Minion variant="two-eyes" isLookingAside={isLookingAside} />
            </div>
        </div>
    );
}
