// Hero SVG Graphics - Embedded Modern Illustrations
const HERO_GRAPHICS = {
    // Legendary Heroes with detailed SVG
    lyria: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="lyria-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
            </linearGradient>
            <radialGradient id="lyria-glow">
                <stop offset="0%" style="stop-color:#FFF;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#FFD700;stop-opacity:0" />
            </radialGradient>
        </defs>
        <!-- Glow effect -->
        <circle cx="100" cy="100" r="90" fill="url(#lyria-glow)" opacity="0.5"/>
        <!-- Head -->
        <circle cx="100" cy="80" r="35" fill="#FFE4B5" stroke="#FFD700" stroke-width="3"/>
        <!-- Helmet/Crown -->
        <path d="M 70 65 Q 70 45 100 45 Q 130 45 130 65" fill="url(#lyria-grad)" stroke="#FFA500" stroke-width="2"/>
        <circle cx="100" cy="45" r="8" fill="#FFF"/>
        <!-- Eyes -->
        <circle cx="90" cy="80" r="4" fill="#4169E1"/>
        <circle cx="110" cy="80" r="4" fill="#4169E1"/>
        <!-- Body/Armor -->
        <rect x="75" y="115" width="50" height="60" rx="10" fill="url(#lyria-grad)" stroke="#FFA500" stroke-width="2"/>
        <!-- Cross symbol -->
        <line x1="100" y1="125" x2="100" y2="165" stroke="#FFF" stroke-width="4"/>
        <line x1="85" y1="145" x2="115" y2="145" stroke="#FFF" stroke-width="4"/>
        <!-- Arms -->
        <rect x="60" y="120" width="15" height="40" rx="7" fill="url(#lyria-grad)"/>
        <rect x="125" y="120" width="15" height="40" rx="7" fill="url(#lyria-grad)"/>
        <!-- Light rays -->
        <line x1="100" y1="40" x2="100" y2="20" stroke="#FFD700" stroke-width="2" opacity="0.7"/>
        <line x1="85" y1="47" x2="75" y2="30" stroke="#FFD700" stroke-width="2" opacity="0.7"/>
        <line x1="115" y1="47" x2="125" y2="30" stroke="#FFD700" stroke-width="2" opacity="0.7"/>
    </svg>`,

    kael: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="kael-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#8B00FF;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4B0082;stop-opacity:1" />
            </linearGradient>
            <radialGradient id="kael-glow">
                <stop offset="0%" style="stop-color:#8B00FF;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#000;stop-opacity:0" />
            </radialGradient>
        </defs>
        <!-- Dark aura -->
        <circle cx="100" cy="100" r="95" fill="url(#kael-glow)" opacity="0.6"/>
        <!-- Horns -->
        <path d="M 65 60 Q 60 40 55 35" fill="none" stroke="#8B00FF" stroke-width="6" stroke-linecap="round"/>
        <path d="M 135 60 Q 140 40 145 35" fill="none" stroke="#8B00FF" stroke-width="6" stroke-linecap="round"/>
        <!-- Head -->
        <circle cx="100" cy="85" r="35" fill="#2D2D4A" stroke="#8B00FF" stroke-width="3"/>
        <!-- Eyes (glowing) -->
        <circle cx="90" cy="85" r="6" fill="#FF0000"/>
        <circle cx="110" cy="85" r="6" fill="#FF0000"/>
        <circle cx="90" cy="85" r="8" fill="#FF0000" opacity="0.3"/>
        <circle cx="110" cy="85" r="8" fill="#FF0000" opacity="0.3"/>
        <!-- Body/Armor -->
        <path d="M 75 120 L 75 175 L 125 175 L 125 120 Z" fill="url(#kael-grad)" stroke="#4B0082" stroke-width="2"/>
        <!-- Purple veins/energy -->
        <path d="M 100 120 L 85 135 M 100 120 L 115 135" stroke="#8B00FF" stroke-width="2" opacity="0.7"/>
        <path d="M 100 145 L 90 160 M 100 145 L 110 160" stroke="#8B00FF" stroke-width="2" opacity="0.7"/>
        <!-- Arms -->
        <rect x="55" y="125" width="20" height="45" rx="8" fill="url(#kael-grad)"/>
        <rect x="125" y="125" width="20" height="45" rx="8" fill="url(#kael-grad)"/>
        <!-- Dark energy particles -->
        <circle cx="70" cy="110" r="3" fill="#8B00FF" opacity="0.6"/>
        <circle cx="130" cy="115" r="3" fill="#8B00FF" opacity="0.6"/>
        <circle cx="95" cy="105" r="2" fill="#8B00FF" opacity="0.6"/>
    </svg>`,

    vorgrim: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="vorgrim-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FF4500;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" />
            </linearGradient>
        </defs>
        <!-- Head -->
        <circle cx="100" cy="75" r="30" fill="#D2691E" stroke="#8B4513" stroke-width="3"/>
        <!-- Helmet -->
        <path d="M 75 65 L 75 55 L 100 50 L 125 55 L 125 65" fill="#C0C0C0" stroke="#696969" stroke-width="2"/>
        <rect x="95" y="55" width="10" height="15" fill="#8B0000"/>
        <!-- Beard -->
        <path d="M 80 85 Q 100 95 120 85" fill="#8B4513" stroke="#654321" stroke-width="2"/>
        <!-- Eyes -->
        <circle cx="90" cy="75" r="3" fill="#000"/>
        <circle cx="110" cy="75" r="3" fill="#000"/>
        <!-- Body/Armor -->
        <rect x="70" y="105" width="60" height="70" rx="8" fill="url(#vorgrim-grad)" stroke="#8B0000" stroke-width="3"/>
        <!-- Metal plates -->
        <rect x="75" y="110" width="20" height="15" fill="#C0C0C0" opacity="0.7"/>
        <rect x="105" y="110" width="20" height="15" fill="#C0C0C0" opacity="0.7"/>
        <!-- Arms -->
        <rect x="50" y="110" width="20" height="50" rx="8" fill="url(#vorgrim-grad)"/>
        <rect x="130" y="110" width="20" height="50" rx="8" fill="url(#vorgrim-grad)"/>
        <!-- Hammer (right hand) -->
        <rect x="145" y="155" width="15" height="35" rx="3" fill="#8B4513"/>
        <rect x="140" y="150" width="25" height="15" rx="3" fill="#696969"/>
        <!-- Fire effects -->
        <path d="M 85 175 Q 100 185 115 175" fill="#FF4500" opacity="0.6"/>
        <path d="M 90 180 Q 100 188 110 180" fill="#FFA500" opacity="0.6"/>
    </svg>`,

    lunara: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="lunara-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#9370DB;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8A2BE2;stop-opacity:1" />
            </linearGradient>
            <radialGradient id="lunara-glow">
                <stop offset="0%" style="stop-color:#E0E0FF;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#9370DB;stop-opacity:0" />
            </radialGradient>
        </defs>
        <!-- Moon glow -->
        <circle cx="100" cy="100" r="90" fill="url(#lunara-glow)" opacity="0.4"/>
        <!-- Hood -->
        <path d="M 70 55 Q 100 45 130 55 L 130 85 Q 100 75 70 85 Z" fill="url(#lunara-grad)" stroke="#4B0082" stroke-width="2"/>
        <!-- Face (shadowed) -->
        <circle cx="100" cy="80" r="25" fill="#F5F5DC" opacity="0.9"/>
        <!-- Mask -->
        <rect x="85" y="75" width="30" height="15" rx="7" fill="#2F2F4F" opacity="0.8"/>
        <!-- Eyes (glowing) -->
        <circle cx="92" cy="82" r="3" fill="#00FFFF"/>
        <circle cx="108" cy="82" r="3" fill="#00FFFF"/>
        <!-- Body -->
        <path d="M 75 105 L 70 175 L 90 175 L 95 105 Z" fill="url(#lunara-grad)" stroke="#4B0082" stroke-width="2"/>
        <path d="M 125 105 L 130 175 L 110 175 L 105 105 Z" fill="url(#lunara-grad)" stroke="#4B0082" stroke-width="2"/>
        <rect x="85" y="105" width="30" height="40" fill="url(#lunara-grad)" stroke="#4B0082" stroke-width="2"/>
        <!-- Daggers -->
        <line x1="65" y1="130" x2="55" y2="145" stroke="#C0C0C0" stroke-width="3"/>
        <line x1="135" y1="130" x2="145" y2="145" stroke="#C0C0C0" stroke-width="3"/>
        <!-- Moon symbol -->
        <path d="M 100 110 Q 95 120 100 130 Q 105 120 100 110" fill="none" stroke="#E0E0FF" stroke-width="2"/>
        <!-- Shadow wisps -->
        <path d="M 80 160 Q 75 165 80 170" stroke="#9370DB" stroke-width="2" opacity="0.5"/>
        <path d="M 120 160 Q 125 165 120 170" stroke="#9370DB" stroke-width="2" opacity="0.5"/>
    </svg>`,

    // Epic Heroes
    thornroot: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="thorn-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#228B22;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#006400;stop-opacity:1" />
            </linearGradient>
        </defs>
        <!-- Tree-like body -->
        <rect x="85" y="100" width="30" height="75" rx="5" fill="#8B4513"/>
        <!-- Branches/arms -->
        <path d="M 85 120 Q 60 130 55 145" stroke="#8B4513" stroke-width="8" fill="none"/>
        <path d="M 115 120 Q 140 130 145 145" stroke="#8B4513" stroke-width="8" fill="none"/>
        <!-- Head (wood) -->
        <circle cx="100" cy="80" r="30" fill="#CD853F" stroke="#8B4513" stroke-width="3"/>
        <!-- Leaves/foliage -->
        <circle cx="100" cy="60" r="15" fill="url(#thorn-grad)" opacity="0.8"/>
        <circle cx="85" cy="70" r="12" fill="url(#thorn-grad)" opacity="0.8"/>
        <circle cx="115" cy="70" r="12" fill="url(#thorn-grad)" opacity="0.8"/>
        <!-- Eyes (glowing green) -->
        <circle cx="92" cy="80" r="5" fill="#00FF00"/>
        <circle cx="108" cy="80" r="5" fill="#00FF00"/>
        <!-- Roots -->
        <path d="M 100 175 Q 80 185 70 195" stroke="#8B4513" stroke-width="5" fill="none"/>
        <path d="M 100 175 Q 120 185 130 195" stroke="#8B4513" stroke-width="5" fill="none"/>
        <!-- Vines -->
        <path d="M 60 135 Q 50 145 55 155" stroke="#228B22" stroke-width="3" fill="none"/>
        <path d="M 140 135 Q 150 145 145 155" stroke="#228B22" stroke-width="3" fill="none"/>
    </svg>`,

    nira: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="nira-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#4169E1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:1" />
            </linearGradient>
            <radialGradient id="nira-glow">
                <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:0.8" />
                <stop offset="100%" style="stop-color:#4169E1;stop-opacity:0" />
            </radialGradient>
        </defs>
        <!-- Aether glow -->
        <circle cx="100" cy="100" r="85" fill="url(#nira-glow)" opacity="0.5"/>
        <!-- Head -->
        <circle cx="100" cy="75" r="28" fill="#F0E68C" stroke="#4169E1" stroke-width="2"/>
        <!-- Hat/Hood -->
        <path d="M 75 60 L 100 40 L 125 60" fill="url(#nira-grad)" stroke="#1E90FF" stroke-width="2"/>
        <line x1="100" y1="40" x2="100" y2="25" stroke="#FFD700" stroke-width="3"/>
        <circle cx="100" cy="25" r="5" fill="#FFD700"/>
        <!-- Eyes -->
        <circle cx="92" cy="75" r="4" fill="#4169E1"/>
        <circle cx="108" cy="75" r="4" fill="#4169E1"/>
        <!-- Robe -->
        <path d="M 80 103 L 75 175 L 125 175 L 120 103 Z" fill="url(#nira-grad)" stroke="#1E90FF" stroke-width="2"/>
        <!-- Cosmic patterns -->
        <circle cx="90" cy="130" r="3" fill="#FFD700" opacity="0.6"/>
        <circle cx="110" cy="145" r="3" fill="#FFD700" opacity="0.6"/>
        <circle cx="100" cy="160" r="3" fill="#FFD700" opacity="0.6"/>
        <!-- Staff -->
        <line x1="130" y1="110" x2="130" y2="180" stroke="#8B4513" stroke-width="5"/>
        <circle cx="130" cy="105" r="8" fill="#4169E1" stroke="#FFD700" stroke-width="2"/>
        <!-- Magic sparkles -->
        <path d="M 125 95 L 127 98 L 130 96 L 128 99 L 131 101 L 128 100 L 127 103 L 126 100 L 123 101 L 125 99 Z" fill="#FFD700"/>
    </svg>`,

    // Rare Heroes
    ragnar: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Simple warrior -->
        <circle cx="100" cy="75" r="25" fill="#D2691E"/>
        <rect x="80" y="100" width="40" height="60" fill="#8B0000" stroke="#000" stroke-width="2"/>
        <rect x="60" y="105" width="20" height="40" fill="#8B0000"/>
        <rect x="120" y="105" width="20" height="40" fill="#8B0000"/>
        <circle cx="92" cy="75" r="3" fill="#000"/>
        <circle cx="108" cy="75" r="3" fill="#000"/>
        <!-- Sword -->
        <rect x="135" y="120" width="8" height="50" fill="#C0C0C0"/>
        <rect x="130" y="115" width="18" height="10" fill="#8B4513"/>
    </svg>`,

    selene: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <!-- Ninja/assassin -->
        <circle cx="100" cy="80" r="22" fill="#2F2F2F"/>
        <rect x="85" y="102" width="30" height="60" fill="#4B0082"/>
        <rect x="65" y="107" width="15" height="35" fill="#4B0082"/>
        <rect x="120" y="107" width="15" height="35" fill="#4B0082"/>
        <circle cx="94" cy="80" r="3" fill="#00FFFF"/>
        <circle cx="106" cy="80" r="3" fill="#00FFFF"/>
        <!-- Daggers -->
        <line x1="60" y1="130" x2="50" y2="140" stroke="#C0C0C0" stroke-width="2"/>
        <line x1="140" y1="130" x2="150" y2="140" stroke="#C0C0C0" stroke-width="2"/>
    </svg>`,

    // Common Heroes
    elios: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="80" r="20" fill="#FFE4B5"/>
        <rect x="85" y="100" width="30" height="50" fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
        <circle cx="94" cy="80" r="2" fill="#000"/>
        <circle cx="106" cy="80" r="2" fill="#000"/>
        <rect x="95" y="105" width="10" height="20" fill="#FFF"/>
    </svg>`,

    mora: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="80" r="20" fill="#2F2F2F"/>
        <rect x="85" y="100" width="30" height="50" fill="#4B0082"/>
        <circle cx="94" cy="80" r="3" fill="#8B00FF"/>
        <circle cx="106" cy="80" r="3" fill="#8B00FF"/>
    </svg>`
};

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HERO_GRAPHICS;
}
