const projectsData = {
    bp1: {
        name: "Hide and Seek Project", youtubeId: "LB0cFfhv7Mg", time: "~180 hours",
        demoUrl: "https://www.roblox.com/games/121217724973745/hideandseekproject",
        screenshots:["https://i.postimg.cc/mDdSfnJ1/image.png", "https://i.postimg.cc/j2mQC7ss/Roblox-Screen-Shot20250706-035814047.png", "https://i.postimg.cc/2S4F8ygD/Roblox-Screen-Shot20250706-035822355.png", "https://i.postimg.cc/mrB3cRGF/Roblox-Screen-Shot20250706-035905763.png"],
        description: "Developed a feature-complete, round-based Hide and Seek game from the ground up. The project includes a robust game loop, role management (Hider/Seeker), spectating system for active and late-joining players, and engaging UI elements like a jackpot-style role reveal and map voting.",
        clientRequest: "The client requested a full game loop including intermissions and rounds, a spectating system with multiple modes, hider/seeker roles with win conditions, and basic UI integration for a shop, taunts, and a map selection system.",
        devStats: { "Total Code": "3,500+ lines", "Critical Bugs Fixed": "204", "Script Optimizations": "29", "Game Tests": "205" },
        price: "$250 USD",
        tags:["round system", "unique gameplay", "ui", "spectate system", "random selection"]
    },
    bp2: {
        name: "Random Platformer [Pre-Alpha]", youtubeId: "cQLXRkcJ5aA", time: "~210 hours",
        demoUrl: "https://www.roblox.com/games/13020209826/random-platformer-pre-alpha",
        screenshots:["https://i.postimg.cc/wv6zMw2k/Roblox-Screen-Shot20250706-041531621.png", "https://i.postimg.cc/cHXSnf5G/Roblox-Screen-Shot20250706-041602008.png", "https://i.postimg.cc/W4mjsBG3/Roblox-Screen_Shot20250706-041636107.png", "https://i.postimg.cc/mkkGNh0z/Roblox-Screen-Shot20250706-041654563.png", "https://i.postimg.cc/k5Pq3Jtz/Roblox-Screen-Shot20250706-041656226.png"],
        description: "A cool racing game to play with friends! Random Platformer is a round-based game with unique parkour maps. Win rounds to get points, collect coins to buy trails and events like Speed Boost or Low Gravity, and compete on the global leaderboard!",
        clientRequest: "This was my first ever full game, focusing on a fun, replayable core loop with monetization and competitive elements.",
         devStats: { "Total Code": "2,500+ lines", "Critical Bugs Fixed": "153", "Script Optimizations": "45", "Game Tests": "590" },
        price: "Approx. $400 USD",
        tags:["round system", "simple shop", "map voting system", "effects system", "codes", "spectate system", "leaderboard", "custom animations", "playable", "ui", "ui animations"]
    },
    bp3: {
        name: "Rock Brawl Project", youtubeId: "y61e0yNSVPw", time: "About 100-180 hours",
        screenshots:["https://i.postimg.cc/zXqWShQB/Roblox-Screen-Shot20250814-054504347.png", "https://i.postimg.cc/bYxktg3W/Roblox-Screen-Shot20250814-054529920.png", "https://i.postimg.cc/2y7WNj1r/Roblox-Screen-Shot20250814-054608406.png", "https://i.postimg.cc/d1ddnjv7/Roblox-Screen-Shot20250814-055009570.png"],
        description: "Engineered a fast-paced, comedic PvP arena brawler where players fight with customizable rocks. The game features a melee and throwable combat system, a rock pickup mechanic with randomized traits (damage, durability, effects), and a performance-based progression system for earning XP and currency. A complete UI/HUD, DataStore saving, and a cosmetic shop were also implemented.",
        clientRequest: "The client requested a scripter for a brawler game called Rock Brawl. Key requirements included melee/throwable rock combat, a rock pickup system with random traits, XP/currency rewards, a full UI/HUD (health, durability, kill streaks), DataStore for saving player data, and a shop for cosmetic items.",
        devStats: { "Total Code Written": "2,900+ lines", "Critical Bugs Fixed": "101", "Script Optimizations": "54", "Game Tests Run": "212" },
        price: "Around $250 USD",
        tags:["pvp", "brawler", "combat system", "inventory system", "data saving", "ui", "shop system", "cosmetics"]
    },
    bp4: {
        name: "Race a Brainrot", youtubeId: "yU6wE61MZbA", time: "100-170 hours",
        screenshots:[
            "https://i.postimg.cc/fTW6VYTQ/Screenshot-2026-03-21-210458.png", 
            "https://i.postimg.cc/HsWfrbWZ/Screenshot-2026-03-21-210542.png", 
            "https://i.postimg.cc/XNkRNsWv/Screenshot-2026-03-21-211002.png"
        ],
        description: "A fast-paced, high-energy racing game inspired by track-and-field mechanics. Players control various 'brainrot' themed characters in a competitive sprint to the finish line. I engineered the core race logic, synchronized countdown systems, win-state detection, and a vibrant custom UI suite to match the game's comedic aesthetic.",
        clientRequest: "The client wanted a 'Track and Field: Ultimate' style racing game featuring brainrot characters. They provided maps and animations, and requested me to handle the full scripting logic, race systems, and UI implementation.",
        devStats: { 
            "Total Code Written": "1,900+ lines", 
            "Critical Bugs Fixed": "88", 
            "Script Optimizations": "54", 
            "Game Tests Run": "152" 
        },
        price: "$360 USD",
        tags:["racing", "competitive", "ui", "brainrot", "sprint system", "multiplayer"]
    },
    bp5: {
        name: "Hire a Hacker", youtubeId: "sjpXTcbua58", time: "44-50 hours",
        screenshots:[
            "https://i.postimg.cc/4NkNhLHf/Screenshot-2026-03-15-225353.png", 
            "https://i.postimg.cc/gkFk6SLP/Screenshot-2026-03-15-225537.png"
        ],
        description: "Architected a modular persistent plot system for a tycoon-style game. I developed a custom placement and saving engine that tracks player progress on individual plots, including computer upgrades, currency generation through hacking, and plot expansions. The system is highly optimized for performance, ensuring smooth data retrieval and real-time world synchronization.",
        clientRequest: "The client requested a plot system similar to 'Your Goblin Mine!' where progress is saved per player. Requirements included a hacking system for computers, a sell mechanic for earnings, and the ability to expand the plot and buy upgrades using existing models.",
        devStats: { 
            "Total Code Written": "1,400+ lines", 
            "Critical Bugs Fixed": "38", 
            "Script Optimizations": "14", 
            "Game Tests Run": "122" 
        },
        price: "$150 USD",
        tags:["plot system", "data saving", "tycoon logic", "modular", "progression"]
    },
    bp6: {
        name: "Anime TDS", youtubeId: "gdN4NkZc3Do", time: "44-50 hours",
        screenshots:[
            "https://i.postimg.cc/d3z77JPQ/Screenshot-2026-03-21-214032.png", 
            "https://i.postimg.cc/hvHJJKWD/Screenshot-2026-03-21-214048.png", 
            "https://i.postimg.cc/nrsjcCW1/Screenshot-2026-03-21-214142.png"
        ],
        description: "Developed a comprehensive core framework for an Anime Tower Defense title. Features include a weighted Gacha summon system, advanced unit placement with range/cooldown logic, and a scaling wave system. I also implemented a 'Trait' enchantment system for randomized stat boosts and a secure DataStore for saving units, currency, and stage progress.",
        clientRequest: "The client requested a full Tower Defense kit including a summon gacha, placement/combat systems, wave logic, and unit upgrades. They also required a trait rolling system for character enchants and a robust data saving structure for player inventories and levels.",
        devStats: { 
            "Total Code Written": "1,900+ lines", 
            "Critical Bugs Fixed": "22", 
            "Script Optimizations": "10", 
            "Game Tests Run": "101" 
        },
        price: "$130 USD",
        tags:["tower defense", "gacha system", "combat system", "data saving", "anime", "upgrades"]
    },
    sp1: {
        name: "Fearless Project", youtubeId: "NouNSwGdcLg", time: "~5 hours",
        screenshots:["https://i.postimg.cc/vZQtP90N/image.png", "https://i.postimg.cc/zG0S4BMX/image1.png", "https://i.postimg.cc/8PdbBwmv/image4.png"],
        description: "Created a unique puzzle-horror mechanic where players use a camera to 'capture' marked locations. Upon a successful photo, a door materializes at the mark. The system includes camera animations, sound effects, and a secondary line-connection puzzle mechanic to automatically open doors.",
        clientRequest: "The client requested a camera-based puzzle system to take pictures of 'X' symbols to reveal doors, complete with idle/capture animations and sounds. An additional line-connection puzzle was also required.",
        devStats: { "Total Code": "200+ lines", "Bugs Fixed": "2", "Optimizations": "2", "Game Tests": "6" },
        price: "$15 USD",
        tags:["unique gameplay", "custom animations"]
    },
    sp2: {
        name: "GUI Roll Animation", youtubeId: "EV7XCVqjc38", time: "~2 hours",
        screenshots:["https://i.postimg.cc/MpTqzfnc/image.png", "https://i.postimg.cc/C5SpXRyx/image.png"],
        description: "Engineered a dynamic 'gacha' roll animation for a game's UI. A key feature is the 'Quick Roll' toggle, which significantly speeds up the animation sequence for players who want immediate results, providing a better user experience.",
        clientRequest: "The request was to create a roll animation with a 'Quick Roll' toggle. The button needed to be highlighted when active, and toggling it on had to make the animation noticeably faster than the slow default speed.",
        devStats: { "Total Code": "500+ lines", "Bugs Fixed": "4", "Optimizations": "7", "Game Tests": "6" },
        price: "$10 USD",
        tags:["ui", "ui animations"]
    },
    sp3: {
        name: "Plant Ui Packs",
        youtubeId: "qY5Y1sK13Dg",
        time: "~15 hours",
        screenshots:[
            "https://i.postimg.cc/ZYp4wtw2/Roblox-Screen-Shot20250720-142201613.png",
            "https://i.postimg.cc/SR64RCXk/Roblox-Screen-Shot20250720-142219446.png",
            "https://i.postimg.cc/j5JtVGtW/Roblox-Screen-Shot20250720-142231118.png"
        ],
        description: "Developed a complete UI system for a plant-themed game, revolving around two core features: Packs and Loadouts. The 'Packs' interface allows players to browse and purchase different seed packs using in-game currency, view potential rewards and rarities, and receive items through a clear UI feedback loop. The 'Loadout' system provides players with an intuitive inventory to view all owned seeds and equip up to six for use in-game, which are then loaded upon teleporting.",
        clientRequest: "The client requested a lobby UI with two main functions. The 'Packs' button should open a UI to browse and buy seed packs with a 'Gems' currency, showing seed rarities and the item received. The 'Loadout' button should open an inventory to equip up to 6 owned seeds, saving the selection to be loaded in another game place.",
        devStats: { 
            "Total Code Written": "781+ lines (REFINED)", 
            "Critical Bugs Fixed": "15", 
            "Script Optimizations": "12 refactors", 
            "Game Tests Performed": "49" 
        },
        price: "$40 USD",
        tags: ["ui", "inventory system", "shop system", "data management", "loadouts", "ui animations"]
    }
};
