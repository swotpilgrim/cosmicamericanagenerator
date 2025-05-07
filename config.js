// Configuration - Define all sections, categories and options for Cosmic Americana Character Generator
const sectionConfig = [
    {
        id: 1,
        title: "SPECIES/BODY TYPE",
        categories: [
            { id: "Human Variants", label: "Human Variants" },
            { id: "Alien/Non-Human", label: "Alien/Non-Human Types" },
            { id: "Robotic Beings", label: "Robotic Beings" },
            { id: "Energy Entities", label: "Energy Entities" },
            { id: "Hybrid Forms", label: "Hybrid Forms" }
        ],
        options: {
            "Human Variants": [
                { id: "Earth Exchange Student", label: "Earth Exchange Student" },
                { id: "Time-Displaced 1950s Teen", label: "Time-Displaced 1950s Teen" },
                { id: "Teenage Celebrity", label: "Teenage Celebrity" },
                { id: "Foreign Transfer Student", label: "Foreign Transfer Student" },
                { id: "Junior Astronaut", label: "Junior Astronaut" },
                { id: "Youth Inventor", label: "Youth Inventor" },
                { id: "Government Test Subject", label: "Government Test Subject" },
                { id: "Space Colonist", label: "Space Colonist" },
                { id: "Dimension Hopper", label: "Dimension Hopper" },
                { id: "Atomic Experiment Survivor", label: "Atomic Experiment Survivor" }
            ],
            "Alien/Non-Human": [
                { id: "Crystalline Being", label: "Crystalline Being" },
                { id: "Gelatinous Entity", label: "Gelatinous Entity" },
                { id: "Insectoid Multi-limb", label: "Insectoid Multi-limb" },
                { id: "Reptilian Humanoid", label: "Reptilian Humanoid" },
                { id: "Plant-Based Lifeform", label: "Plant-Based Lifeform" },
                { id: "Aquatic Water-Tank Dependent", label: "Aquatic Water-Tank Dependent" },
                { id: "Rock-Based Organism", label: "Rock-Based Organism" },
                { id: "Miniature Giant", label: "Miniature Giant" },
                { id: "Levitating Brain", label: "Levitating Brain" },
                { id: "Tentacled Scholar", label: "Tentacled Scholar" }
            ],
            "Robotic Beings": [
                { id: "Exchange Robot", label: "Exchange Robot" },
                { id: "Sentient Computer", label: "Sentient Computer" },
                { id: "Retrofuturistic Android", label: "Retrofuturistic Android" },
                { id: "Hovering Service Bot", label: "Hovering Service Bot" },
                { id: "Living Jukebox", label: "Living Jukebox" },
                { id: "Atomic-Powered Bot", label: "Atomic-Powered Bot" },
                { id: "Educational Unit", label: "Educational Unit" },
                { id: "Dome-Headed Droid", label: "Dome-Headed Droid" },
                { id: "Transmitter Being", label: "Transmitter Being" },
                { id: "Modular Robot", label: "Modular Robot" }
            ],
            "Energy Entities": [
                { id: "Plasma Student", label: "Plasma Student" },
                { id: "Living Radio Wave", label: "Living Radio Wave" },
                { id: "Glowing Cloud Being", label: "Glowing Cloud Being" },
                { id: "Sentient Hologram", label: "Sentient Hologram" },
                { id: "Solar Flare Entity", label: "Solar Flare Entity" },
                { id: "Neon Gas Lifeform", label: "Neon Gas Lifeform" },
                { id: "Quantum Particle Cluster", label: "Quantum Particle Cluster" },
                { id: "Color Spectrum Being", label: "Color Spectrum Being" },
                { id: "Static Electricity Person", label: "Static Electricity Person" },
                { id: "Atmospheric Anomaly", label: "Atmospheric Anomaly" }
            ],
            "Hybrid Forms": [
                { id: "Half-Human/Half-Alien", label: "Half-Human/Half-Alien" },
                { id: "Cyborg Exchange Student", label: "Cyborg Exchange Student" },
                { id: "Plant-Animal Hybrid", label: "Plant-Animal Hybrid" },
                { id: "Energy-Material Fusion", label: "Energy-Material Fusion" },
                { id: "Retrofitted Earth Pet", label: "Retrofitted Earth Pet" },
                { id: "Multi-Species Experiment", label: "Multi-Species Experiment" },
                { id: "Dimensional Composite", label: "Dimensional Composite" },
                { id: "Robotic Transplant Case", label: "Robotic Transplant Case" },
                { id: "Symbiotic Duo", label: "Symbiotic Duo" },
                { id: "Interplanetary Adoption", label: "Interplanetary Adoption" }
            ]
        }
    },
    {
        id: 2,
        title: "SOCIAL GROUP/CLIQUE",
        categories: [
            { id: "Athletic Types", label: "Athletic Types" },
            { id: "Academic Groups", label: "Academic Groups" },
            { id: "Social Scene Groups", label: "Social Scene Groups" },
            { id: "Rebel/Alternative Types", label: "Rebel/Alternative Types" },
            { id: "Special Interest Groups", label: "Special Interest Groups" }
        ],
        options: {
            "Athletic Types": [
                { id: "Zero-G Sports Star", label: "Zero-G Sports Star" },
                { id: "Rocket Racing Champ", label: "Rocket Racing Champ" },
                { id: "Cosmic Cheerleader", label: "Cosmic Cheerleader" },
                { id: "Anti-Gravity Gymnastics Team", label: "Anti-Gravity Gymnastics Team" },
                { id: "Asteroid Belt Wrestler", label: "Asteroid Belt Wrestler" },
                { id: "Hover-Board Trick Champion", label: "Hover-Board Trick Champion" },
                { id: "Interplanetary Track Star", label: "Interplanetary Track Star" },
                { id: "Comet-Tail Swimmer", label: "Comet-Tail Swimmer" },
                { id: "Atomic Basketball Player", label: "Atomic Basketball Player" },
                { id: "Jet Pack Derby Racer", label: "Jet Pack Derby Racer" }
            ],
            "Academic Groups": [
                { id: "Quantum Physics Club", label: "Quantum Physics Club" },
                { id: "Xenobiology Honor Student", label: "Xenobiology Honor Student" },
                { id: "Robot Repair Shop Assistant", label: "Robot Repair Shop Assistant" },
                { id: "Dimensional Math Prodigy", label: "Dimensional Math Prodigy" },
                { id: "Science Fiction Reality Club", label: "Science Fiction Reality Club" },
                { id: "Future Tech Engineer", label: "Future Tech Engineer" },
                { id: "Telepathy Tutor", label: "Telepathy Tutor" },
                { id: "Space History Buff", label: "Space History Buff" },
                { id: "Test Tube Chemistry Wiz", label: "Test Tube Chemistry Wiz" },
                { id: "Stargazing Astronomy Club", label: "Stargazing Astronomy Club" }
            ],
            "Social Scene Groups": [
                { id: "Cosmic Diner Regular", label: "Cosmic Diner Regular" },
                { id: "Soda Fountain Socialite", label: "Soda Fountain Socialite" },
                { id: "Drive-In Movie Organizer", label: "Drive-In Movie Organizer" },
                { id: "Sock Hop Coordinator", label: "Sock Hop Coordinator" },
                { id: "Yearbook Committee Photographer", label: "Yearbook Committee Photographer" },
                { id: "School Radio DJ", label: "School Radio DJ" },
                { id: "Prom Committee Decorator", label: "Prom Committee Decorator" },
                { id: "Interplanetary Exchange Host", label: "Interplanetary Exchange Host" },
                { id: "Milkshake Mixologist", label: "Milkshake Mixologist" },
                { id: "Retro-Futuristic Fashion Icon", label: "Retro-Futuristic Fashion Icon" }
            ],
            "Rebel/Alternative Types": [
                { id: "Space Greaser", label: "Space Greaser" },
                { id: "Cosmic Beatnik", label: "Cosmic Beatnik" },
                { id: "Interdimensional Troublemaker", label: "Interdimensional Troublemaker" },
                { id: "Asteroid Belt Biker", label: "Asteroid Belt Biker" },
                { id: "Detention Regular", label: "Detention Regular" },
                { id: "Class Prankster", label: "Class Prankster" },
                { id: "Faculty Nemesis", label: "Faculty Nemesis" },
                { id: "Quantum Rule-Breaker", label: "Quantum Rule-Breaker" },
                { id: "Rocket Hot-Rodder", label: "Rocket Hot-Rodder" },
                { id: "Anti-Establishment Alien", label: "Anti-Establishment Alien" }
            ],
            "Special Interest Groups": [
                { id: "Intergalactic Ham Radio Club", label: "Intergalactic Ham Radio Club" },
                { id: "Rocket Model Builder", label: "Rocket Model Builder" },
                { id: "Alien Comic Book Collector", label: "Alien Comic Book Collector" },
                { id: "Retro Earth Culture Enthusiast", label: "Retro Earth Culture Enthusiast" },
                { id: "Galactic Scout Troop", label: "Galactic Scout Troop" },
                { id: "UFO Photography Club", label: "UFO Photography Club" },
                { id: "Cosmic Bug Collector", label: "Cosmic Bug Collector" },
                { id: "Zero-G Chess Champion", label: "Zero-G Chess Champion" },
                { id: "Doo-Wop A Cappella Group", label: "Doo-Wop A Cappella Group" },
                { id: "Asteroid Rock Collector", label: "Asteroid Rock Collector" }
            ]
        }
    },
    {
        id: 3,
        title: "PERSONALITY TYPE",
        categories: [
            { id: "Classic American Types", label: "Classic American Types" },
            { id: "Teen Archetypes", label: "Teen Archetypes" },
            { id: "Alien Perspectives", label: "Alien Perspectives" },
            { id: "Character Quirks", label: "Character Quirks" },
            { id: "Emotional Ranges", label: "Emotional Ranges" }
        ],
        options: {
            "Classic American Types": [
                { id: "All-American Optimist", label: "All-American Optimist" },
                { id: "Small Town Values in Space", label: "Small Town Values in Space" },
                { id: "Frontier Pioneering Spirit", label: "Frontier Pioneering Spirit" },
                { id: "Atomic Age Idealist", label: "Atomic Age Idealist" },
                { id: "American Dream Believer", label: "American Dream Believer" },
                { id: "Patriotic Exchange Student", label: "Patriotic Exchange Student" },
                { id: "Wholesome Hero", label: "Wholesome Hero" },
                { id: "Drive-In Movie Enthusiast", label: "Drive-In Movie Enthusiast" },
                { id: "Baseball and Apple Pie Fan", label: "Baseball and Apple Pie Fan" },
                { id: "Rugged Individualist", label: "Rugged Individualist" }
            ],
            "Teen Archetypes": [
                { id: "Class Clown", label: "Class Clown" },
                { id: "Teacher's Pet", label: "Teacher's Pet" },
                { id: "Nervous New Kid", label: "Nervous New Kid" },
                { id: "Ambitious Overachiever", label: "Ambitious Overachiever" },
                { id: "Quiet Daydreamer", label: "Quiet Daydreamer" },
                { id: "Secret Genius", label: "Secret Genius" },
                { id: "Friendly to Everyone", label: "Friendly to Everyone" },
                { id: "Dramatic Theater Type", label: "Dramatic Theater Type" },
                { id: "Shy Wallflower", label: "Shy Wallflower" },
                { id: "School Spirit Enthusiast", label: "School Spirit Enthusiast" }
            ],
            "Alien Perspectives": [
                { id: "Confused by Earth Customs", label: "Confused by Earth Customs" },
                { id: "Overly Literal Translator", label: "Overly Literal Translator" },
                { id: "Multiple Personality Hivemind", label: "Multiple Personality Hivemind" },
                { id: "Fascinated by Humans", label: "Fascinated by Humans" },
                { id: "Cultural Observer", label: "Cultural Observer" },
                { id: "Cannot Grasp Earth Idioms", label: "Cannot Grasp Earth Idioms" },
                { id: "Superior Technological Mind", label: "Superior Technological Mind" },
                { id: "Emotional Spectrum Explorer", label: "Emotional Spectrum Explorer" },
                { id: "Earth Media Addict", label: "Earth Media Addict" },
                { id: "Diplomatic Representative", label: "Diplomatic Representative" }
            ],
            "Character Quirks": [
                { id: "Speaks in 1950s Slang", label: "Speaks in 1950s Slang" },
                { id: "Accidentally Destructive Powers", label: "Accidentally Destructive Powers" },
                { id: "Homesick for Distant Planet", label: "Homesick for Distant Planet" },
                { id: "Collection Obsession", label: "Collection Obsession" },
                { id: "Constantly Hungry", label: "Constantly Hungry" },
                { id: "Allergic to Earth Elements", label: "Allergic to Earth Elements" },
                { id: "Switches Forms Under Stress", label: "Switches Forms Under Stress" },
                { id: "Involuntary Teleportation", label: "Involuntary Teleportation" },
                { id: "Talks to Inanimate Objects", label: "Talks to Inanimate Objects" },
                { id: "Sees in Different Spectrum", label: "Sees in Different Spectrum" }
            ],
            "Emotional Ranges": [
                { id: "Overly Enthusiastic", label: "Overly Enthusiastic" },
                { id: "Perpetually Nervous", label: "Perpetually Nervous" },
                { id: "Constant Deadpan", label: "Constant Deadpan" },
                { id: "Melodramatically Expressive", label: "Melodramatically Expressive" },
                { id: "Inappropriately Cheerful", label: "Inappropriately Cheerful" },
                { id: "Philosophical Observer", label: "Philosophical Observer" },
                { id: "Emotionally Color-Changing", label: "Emotionally Color-Changing" },
                { id: "Multi-Emotional Phases", label: "Multi-Emotional Phases" },
                { id: "Too Cool for School", label: "Too Cool for School" },
                { id: "Extremely Easily Startled", label: "Extremely Easily Startled" }
            ]
        }
    },
    {
        id: 4,
        title: "FASHION/STYLE ELEMENTS",
        categories: [
            { id: "1950s Classics", label: "1950s Classics with Cosmic Twists" },
            { id: "Space-Age Accessories", label: "Space-Age Accessories" },
            { id: "Custom Modifications", label: "Custom Modifications" },
            { id: "School Uniforms", label: "School Uniforms" },
            { id: "Hairstyles", label: "Hairstyles" }
        ],
        options: {
            "1950s Classics": [
                { id: "Letterman Jacket with Alien Patches", label: "Letterman Jacket with Alien Patches" },
                { id: "Poodle Skirt with Orbiting Moons", label: "Poodle Skirt with Orbiting Moons" },
                { id: "Saddle Shoes with Anti-Gravity Soles", label: "Saddle Shoes with Anti-Gravity Soles" },
                { id: "Rolled Jeans with Glowing Cuffs", label: "Rolled Jeans with Glowing Cuffs" },
                { id: "Leather Jacket with Temperature Control", label: "Leather Jacket with Temperature Control" },
                { id: "Cosmic Bow Tie", label: "Cosmic Bow Tie" },
                { id: "Planetary Patterned Dress", label: "Planetary Patterned Dress" },
                { id: "Bobby Socks with Floating Pom-Poms", label: "Bobby Socks with Floating Pom-Poms" },
                { id: "Atomic-Patterned Sweater Vest", label: "Atomic-Patterned Sweater Vest" },
                { id: "Chrome-Trimmed Cardigan", label: "Chrome-Trimmed Cardigan" }
            ],
            "Space-Age Accessories": [
                { id: "Bubble Helmet", label: "Bubble Helmet" },
                { id: "Rocket Pack", label: "Rocket Pack" },
                { id: "Hover Platform Shoes", label: "Hover Platform Shoes" },
                { id: "Glowing Mood Jewelry", label: "Glowing Mood Jewelry" },
                { id: "Communication Wristwatch", label: "Communication Wristwatch" },
                { id: "Translation Collar", label: "Translation Collar" },
                { id: "Atmosphere Adaptation Scarf", label: "Atmosphere Adaptation Scarf" },
                { id: "Gravity Stabilizing Belt", label: "Gravity Stabilizing Belt" },
                { id: "Telescoping Antennae", label: "Telescoping Antennae" },
                { id: "Holographic ID Badge", label: "Holographic ID Badge" }
            ],
            "Custom Modifications": [
                { id: "Tentacle-Fitted Clothing", label: "Tentacle-Fitted Clothing" },
                { id: "Temperature Control Outfit", label: "Temperature Control Outfit" },
                { id: "Size-Adjusting Uniform", label: "Size-Adjusting Uniform" },
                { id: "Transparent Containment Suit", label: "Transparent Containment Suit" },
                { id: "Reality-Phase Shifting Gear", label: "Reality-Phase Shifting Gear" },
                { id: "Modular Attachment Clothing", label: "Modular Attachment Clothing" },
                { id: "Holographic Disguise Projector", label: "Holographic Disguise Projector" },
                { id: "Multi-Limb Tailor Work", label: "Multi-Limb Tailor Work" },
                { id: "Energy Field Generator", label: "Energy Field Generator" },
                { id: "Molecular Reconfiguration Clothes", label: "Molecular Reconfiguration Clothes" }
            ],
            "School Uniforms": [
                { id: "Galaxy High Letter Sweater", label: "Galaxy High Letter Sweater" },
                { id: "Cosmic Cheerleader Outfit", label: "Cosmic Cheerleader Outfit" },
                { id: "Principal-Mandated Spacesuit", label: "Principal-Mandated Spacesuit" },
                { id: "Science Lab Safety Gear", label: "Science Lab Safety Gear" },
                { id: "Retrofuturistic Gym Uniform", label: "Retrofuturistic Gym Uniform" },
                { id: "Astronomy Club Jacket", label: "Astronomy Club Jacket" },
                { id: "School Spirit Color-Changing Shirt", label: "School Spirit Color-Changing Shirt" },
                { id: "Band Member Uniform", label: "Band Member Uniform" },
                { id: "Hall Monitor Sash and Badge", label: "Hall Monitor Sash and Badge" },
                { id: "Graduation Cap and Gown", label: "Graduation Cap and Gown" }
            ],
            "Hairstyles": [
                { id: "Anti-Gravity Pompadour", label: "Anti-Gravity Pompadour" },
                { id: "Floating Ponytail", label: "Floating Ponytail" },
                { id: "Crystal Hair Formations", label: "Crystal Hair Formations" },
                { id: "Neon Glowing Locks", label: "Neon Glowing Locks" },
                { id: "Rocket-Trail Mohawk", label: "Rocket-Trail Mohawk" },
                { id: "Perfectly Sculpted Beehive", label: "Perfectly Sculpted Beehive" },
                { id: "Plasma Wave Curls", label: "Plasma Wave Curls" },
                { id: "Tentacle Tendrils", label: "Tentacle Tendrils" },
                { id: "Orbit-Rings with Planets", label: "Orbit-Rings with Planets" },
                { id: "Constantly Color-Changing Coif", label: "Constantly Color-Changing Coif" }
            ]
        }
    },
    {
        id: 5,
        title: "COSMIC TRANSPORTATION",
        categories: [
            { id: "Personal Vehicles", label: "Personal Vehicles" },
            { id: "School Transport", label: "School Transport" },
            { id: "Retrofit Earth Vehicles", label: "Retrofit Earth Vehicles" },
            { id: "Organic Transport", label: "Organic Transport" },
            { id: "Experimental Methods", label: "Experimental Methods" }
        ],
        options: {
            "Personal Vehicles": [
                { id: "Custom Hot Rod Rocket", label: "Custom Hot Rod Rocket" },
                { id: "Hover Convertible", label: "Hover Convertible" },
                { id: "Rocket-Powered Motorcycle", label: "Rocket-Powered Motorcycle" },
                { id: "Anti-Gravity Skateboard", label: "Anti-Gravity Skateboard" },
                { id: "Personal Flying Saucer", label: "Personal Flying Saucer" },
                { id: "Jet-Propelled Roller Skates", label: "Jet-Propelled Roller Skates" },
                { id: "Dimensional-Hopping Bicycle", label: "Dimensional-Hopping Bicycle" },
                { id: "Teleportation Key Fob", label: "Teleportation Key Fob" },
                { id: "Single-Passenger Shuttle", label: "Single-Passenger Shuttle" },
                { id: "Space Scooter", label: "Space Scooter" }
            ],
            "School Transport": [
                { id: "Interdimensional School Bus", label: "Interdimensional School Bus" },
                { id: "Molecular Transport Tube System", label: "Molecular Transport Tube System" },
                { id: "Wormhole Subway", label: "Wormhole Subway" },
                { id: "Shared Hovercab Service", label: "Shared Hovercab Service" },
                { id: "Tractor Beam Escalator", label: "Tractor Beam Escalator" },
                { id: "Rocket Tram Network", label: "Rocket Tram Network" },
                { id: "Teleport Pad Station", label: "Teleport Pad Station" },
                { id: "Gravity Elevator", label: "Gravity Elevator" },
                { id: "Telepresence Robot", label: "Telepresence Robot" },
                { id: "School Transport Ship", label: "School Transport Ship" }
            ],
            "Retrofit Earth Vehicles": [
                { id: "Flying 1957 Chevy", label: "Flying 1957 Chevy" },
                { id: "Rocket-Powered School Bus", label: "Rocket-Powered School Bus" },
                { id: "Space-Worthy Bicycle", label: "Space-Worthy Bicycle" },
                { id: "Anti-Gravity Station Wagon", label: "Anti-Gravity Station Wagon" },
                { id: "Interstellar Diner Booth", label: "Interstellar Diner Booth" },
                { id: "Drive-In Movie Seat Ejector", label: "Drive-In Movie Seat Ejector" },
                { id: "Modified Pickup Truck", label: "Modified Pickup Truck" },
                { id: "Jukebox Teleporter", label: "Jukebox Teleporter" },
                { id: "Soda Fountain Rocket", label: "Soda Fountain Rocket" },
                { id: "Telephone Booth Transporter", label: "Telephone Booth Transporter" }
            ],
            "Organic Transport": [
                { id: "Trained Space Whale", label: "Trained Space Whale" },
                { id: "Photosynthetic Floating Leaf", label: "Photosynthetic Floating Leaf" },
                { id: "Gravity-Defying Space Jellyfish", label: "Gravity-Defying Space Jellyfish" },
                { id: "Teleporting Cosmic Frog", label: "Teleporting Cosmic Frog" },
                { id: "Symbiotic Travel Partner", label: "Symbiotic Travel Partner" },
                { id: "Gas-Giant Floating Fish", label: "Gas-Giant Floating Fish" },
                { id: "Sentient Cloud Being", label: "Sentient Cloud Being" },
                { id: "Space Turtle Shuttle", label: "Space Turtle Shuttle" },
                { id: "Winged Star-Serpent", label: "Winged Star-Serpent" },
                { id: "Telekinetic Transport Creature", label: "Telekinetic Transport Creature" }
            ],
            "Experimental Methods": [
                { id: "Thought-Controlled Teleporter", label: "Thought-Controlled Teleporter" },
                { id: "Quantum Entanglement Jumper", label: "Quantum Entanglement Jumper" },
                { id: "Dream-Travel Pod", label: "Dream-Travel Pod" },
                { id: "Probability-Shifting Disc", label: "Probability-Shifting Disc" },
                { id: "Time-Tunnel Shortcut", label: "Time-Tunnel Shortcut" },
                { id: "Music-Powered Warp Drive", label: "Music-Powered Warp Drive" },
                { id: "Emotion-Based Transport Beam", label: "Emotion-Based Transport Beam" },
                { id: "Gravity Wave Surfer", label: "Gravity Wave Surfer" },
                { id: "Spontaneous Appearance Generator", label: "Spontaneous Appearance Generator" },
                { id: "Molecular Disassembly Transit", label: "Molecular Disassembly Transit" }
            ]
        }
    },
    {
        id: 6,
        title: "FAVORITE HANGOUT SPOTS",
        categories: [
            { id: "School Locations", label: "School Locations" },
            { id: "Off-Campus Places", label: "Off-Campus Places" },
            { id: "Interdimensional Spots", label: "Interdimensional Spots" },
            { id: "Secret Hideaways", label: "Secret Hideaways" },
            { id: "Exotic Locales", label: "Exotic Locales" }
        ],
        options: {
            "School Locations": [
                { id: "Anti-Gravity Gymnasium", label: "Anti-Gravity Gymnasium" },
                { id: "Quantum Science Lab", label: "Quantum Science Lab" },
                { id: "Holographic Library", label: "Holographic Library" },
                { id: "Multi-Species Cafeteria", label: "Multi-Species Cafeteria" },
                { id: "Observatory Dome", label: "Observatory Dome" },
                { id: "Zero-G Swimming Pool", label: "Zero-G Swimming Pool" },
                { id: "Interdimensional Art Studio", label: "Interdimensional Art Studio" },
                { id: "Rocket Shop Class", label: "Rocket Shop Class" },
                { id: "Telepathic Debate Room", label: "Telepathic Debate Room" },
                { id: "School Radio Station", label: "School Radio Station" }
            ],
            "Off-Campus Places": [
                { id: "Cosmic Malt Shop", label: "Cosmic Malt Shop" },
                { id: "Galactic Drive-In Theater", label: "Galactic Drive-In Theater" },
                { id: "Asteroid Belt Bowling Alley", label: "Asteroid Belt Bowling Alley" },
                { id: "Interplanetary Record Store", label: "Interplanetary Record Store" },
                { id: "Rocket Rod Garage", label: "Rocket Rod Garage" },
                { id: "Spaceport Observation Deck", label: "Spaceport Observation Deck" },
                { id: "Floating Soda Fountain", label: "Floating Soda Fountain" },
                { id: "Zero-G Roller Rink", label: "Zero-G Roller Rink" },
                { id: "Atomic Mini Golf Course", label: "Atomic Mini Golf Course" },
                { id: "Starlight Shopping Mall", label: "Starlight Shopping Mall" }
            ],
            "Interdimensional Spots": [
                { id: "Wormhole Junction Cafe", label: "Wormhole Junction Cafe" },
                { id: "Between-Worlds Beach", label: "Between-Worlds Beach" },
                { id: "Pocket Dimension Arcade", label: "Pocket Dimension Arcade" },
                { id: "Multiverse Observation Point", label: "Multiverse Observation Point" },
                { id: "Reality Rift Rest Stop", label: "Reality Rift Rest Stop" },
                { id: "Time-Displaced Diner", label: "Time-Displaced Diner" },
                { id: "Quantum Foam Hot Springs", label: "Quantum Foam Hot Springs" },
                { id: "Cross-Dimensional Library", label: "Cross-Dimensional Library" },
                { id: "Hyperspace Hangout", label: "Hyperspace Hangout" },
                { id: "Parallel Earth Viewing Area", label: "Parallel Earth Viewing Area" }
            ],
            "Secret Hideaways": [
                { id: "Abandoned Satellite", label: "Abandoned Satellite" },
                { id: "Meteor Crater Clubhouse", label: "Meteor Crater Clubhouse" },
                { id: "Underwater Dome Base", label: "Underwater Dome Base" },
                { id: "Hologram-Hidden Treehouse", label: "Hologram-Hidden Treehouse" },
                { id: "Cloaked Spaceship", label: "Cloaked Spaceship" },
                { id: "Antigravity Cloud Fortress", label: "Antigravity Cloud Fortress" },
                { id: "Miniaturized Microscopic World", label: "Miniaturized Microscopic World" },
                { id: "Time-Frozen Moment", label: "Time-Frozen Moment" },
                { id: "Interstellar Shortwave Radio Shack", label: "Interstellar Shortwave Radio Shack" },
                { id: "Zero-Point Energy Bubble", label: "Zero-Point Energy Bubble" }
            ],
            "Exotic Locales": [
                { id: "Moon of Jupiter Resort", label: "Moon of Jupiter Resort" },
                { id: "Rings of Saturn Observation Deck", label: "Rings of Saturn Observation Deck" },
                { id: "Sentient Nebula Interior", label: "Sentient Nebula Interior" },
                { id: "Binary Star Beach", label: "Binary Star Beach" },
                { id: "Black Hole Event Horizon Cafe", label: "Black Hole Event Horizon Cafe" },
                { id: "Artificial Planetoid", label: "Artificial Planetoid" },
                { id: "Cosmic Ray Surfing Spot", label: "Cosmic Ray Surfing Spot" },
                { id: "Technicolor Asteroid Field", label: "Technicolor Asteroid Field" },
                { id: "Alien Zoo Volunteer Station", label: "Alien Zoo Volunteer Station" },
                { id: "Galactic Core Viewing Platform", label: "Galactic Core Viewing Platform" }
            ]
        }
    },
    {
        id: 7,
        title: "ACTIVITIES/HOBBIES",
        categories: [
            { id: "Sports & Physical", label: "Sports & Physical Activities" },
            { id: "Social Activities", label: "Social Activities" },
            { id: "Academic Pursuits", label: "Academic Pursuits" },
            { id: "Creative Endeavors", label: "Creative Endeavors" },
            { id: "Unusual Pastimes", label: "Unusual Pastimes" }
        ],
        options: {
            "Sports & Physical": [
                { id: "Zero-G Football", label: "Zero-G Football" },
                { id: "Rocket Racing", label: "Rocket Racing" },
                { id: "Anti-Gravity Cheerleading", label: "Anti-Gravity Cheerleading" },
                { id: "Orbital Track & Field", label: "Orbital Track & Field" },
                { id: "Meteor Dodgeball", label: "Meteor Dodgeball" },
                { id: "Interdimensional Gymnastics", label: "Interdimensional Gymnastics" },
                { id: "Hover-Board Tricks", label: "Hover-Board Tricks" },
                { id: "Asteroid Belt Surfing", label: "Asteroid Belt Surfing" },
                { id: "Jet Pack Ballet", label: "Jet Pack Ballet" },
                { id: "Lunar Low-Gravity Wrestling", label: "Lunar Low-Gravity Wrestling" }
            ],
            "Social Activities": [
                { id: "Galactic Sock Hop", label: "Galactic Sock Hop" },
                { id: "Multi-Species Dance Contests", label: "Multi-Species Dance Contests" },
                { id: "Holographic Movie Nights", label: "Holographic Movie Nights" },
                { id: "Cosmic Diner Hangouts", label: "Cosmic Diner Hangouts" },
                { id: "Otherworldly Talent Shows", label: "Otherworldly Talent Shows" },
                { id: "Dimension-Hopping Field Trips", label: "Dimension-Hopping Field Trips" },
                { id: "Alien Exchange Hosting", label: "Alien Exchange Hosting" },
                { id: "Interplanetary Pen Pals", label: "Interplanetary Pen Pals" },
                { id: "Retrofuturistic Fashion Shows", label: "Retrofuturistic Fashion Shows" },
                { id: "Atomic Age Dinner Parties", label: "Atomic Age Dinner Parties" }
            ],
            "Academic Pursuits": [
                { id: "Earth Culture Studies", label: "Earth Culture Studies" },
                { id: "Rocket Science Fair", label: "Rocket Science Fair" },
                { id: "Telepathic Debate Team", label: "Telepathic Debate Team" },
                { id: "Quantum Chess Club", label: "Quantum Chess Club" },
                { id: "Interdimensional Biology", label: "Interdimensional Biology" },
                { id: "Temporal History Research", label: "Temporal History Research" },
                { id: "Universal Language Translation", label: "Universal Language Translation" },
                { id: "Exotic Matter Physics", label: "Exotic Matter Physics" },
                { id: "Interspecies Communication", label: "Interspecies Communication" },
                { id: "Retrofuturism Archaeology", label: "Retrofuturism Archaeology" }
            ],
            "Creative Endeavors": [
                { id: "Nebula Photography", label: "Nebula Photography" },
                { id: "Zero-G Sculpture", label: "Zero-G Sculpture" },
                { id: "Multi-Dimensional Art", label: "Multi-Dimensional Art" },
                { id: "Alien Musical Instruments", label: "Alien Musical Instruments" },
                { id: "Time-Lapse Cosmic Poetry", label: "Time-Lapse Cosmic Poetry" },
                { id: "Telekinetic Painting", label: "Telekinetic Painting" },
                { id: "Holographic Fashion Design", label: "Holographic Fashion Design" },
                { id: "Sentient Plant Choreography", label: "Sentient Plant Choreography" },
                { id: "Quantum Cooking", label: "Quantum Cooking" },
                { id: "Asteroid Rock Band", label: "Asteroid Rock Band" }
            ],
            "Unusual Pastimes": [
                { id: "Collecting Earth Artifacts", label: "Collecting Earth Artifacts" },
                { id: "Miniature Black Hole Generation", label: "Miniature Black Hole Generation" },
                { id: "Pet Alien Species Breeding", label: "Pet Alien Species Breeding" },
                { id: "DIY Spaceship Modification", label: "DIY Spaceship Modification" },
                { id: "Interdimensional Cryptozoology", label: "Interdimensional Cryptozoology" },
                { id: "Antigravity Furniture Building", label: "Antigravity Furniture Building" },
                { id: "Cosmic Ray Fishing", label: "Cosmic Ray Fishing" },
                { id: "Dream Harvesting", label: "Dream Harvesting" },
                { id: "Pocket Dimension Gardening", label: "Pocket Dimension Gardening" },
                { id: "Temporal Paradox Solving", label: "Temporal Paradox Solving" }
            ]
        }
    },
    {
        id: 8,
        title: "SPECIAL ABILITIES/POWERS",
        categories: [
            { id: "Physical Powers", label: "Physical Powers" },
            { id: "Mental/Psychic Powers", label: "Mental/Psychic Powers" },
            { id: "Technology Powers", label: "Technology Powers" },
            { id: "Reality Manipulation", label: "Reality Manipulation" },
            { id: "Unique Abilities", label: "Unique Abilities" }
        ],
        options: {
            "Physical Powers": [
                { id: "Super Speed", label: "Super Speed" },
                { id: "Shape-Shifting", label: "Shape-Shifting" },
                { id: "Elasticity/Stretchiness", label: "Elasticity/Stretchiness" },
                { id: "Super Strength in Earth Gravity", label: "Super Strength in Earth Gravity" },
                { id: "Wall-Crawling", label: "Wall-Crawling" },
                { id: "Size Changing", label: "Size Changing" },
                { id: "Bioluminescence", label: "Bioluminescence" },
                { id: "Atomic Restructuring", label: "Atomic Restructuring" },
                { id: "Element Manipulation", label: "Element Manipulation" },
                { id: "Gravity Negation", label: "Gravity Negation" }
            ],
            "Mental/Psychic Powers": [
                { id: "Telepathy", label: "Telepathy" },
                { id: "Telekinesis", label: "Telekinesis" },
                { id: "Precognition", label: "Precognition" },
                { id: "Memory Manipulation", label: "Memory Manipulation" },
                { id: "Emotional Projection", label: "Emotional Projection" },
                { id: "Dream Visiting", label: "Dream Visiting" },
                { id: "Thought Translation", label: "Thought Translation" },
                { id: "Mind Control", label: "Mind Control" },
                { id: "Intelligence Amplification", label: "Intelligence Amplification" },
                { id: "Knowledge Absorption", label: "Knowledge Absorption" }
            ],
            "Technology Powers": [
                { id: "Built-In Calculator Brain", label: "Built-In Calculator Brain" },
                { id: "Recording Eyes/Ears", label: "Recording Eyes/Ears" },
                { id: "Language Translation Module", label: "Language Translation Module" },
                { id: "Atmosphere Adaptation System", label: "Atmosphere Adaptation System" },
                { id: "Gravity Compensation Unit", label: "Gravity Compensation Unit" },
                { id: "Holographic Projection Ability", label: "Holographic Projection Ability" },
                { id: "Internal Radio Receiver", label: "Internal Radio Receiver" },
                { id: "Nano-Technology Control", label: "Nano-Technology Control" },
                { id: "Tech Interface Touch", label: "Tech Interface Touch" },
                { id: "Self-Upgradable Systems", label: "Self-Upgradable Systems" }
            ],
            "Reality Manipulation": [
                { id: "Time Freezing", label: "Time Freezing" },
                { id: "Dimensional Portal Creation", label: "Dimensional Portal Creation" },
                { id: "Probability Alteration", label: "Probability Alteration" },
                { id: "Reality Bubble Generation", label: "Reality Bubble Generation" },
                { id: "Matter Manifestation", label: "Matter Manifestation" },
                { id: "Temporal Duplication", label: "Temporal Duplication" },
                { id: "Physics Law Bending", label: "Physics Law Bending" },
                { id: "Cosmic Force Channeling", label: "Cosmic Force Channeling" },
                { id: "Quantum Displacement", label: "Quantum Displacement" },
                { id: "Existence Anchor", label: "Existence Anchor" }
            ],
            "Unique Abilities": [
                { id: "Food-Based Powers", label: "Food-Based Powers" },
                { id: "Musical Force Manipulation", label: "Musical Force Manipulation" },
                { id: "Friendship Amplification", label: "Friendship Amplification" },
                { id: "Instant Outfit Changes", label: "Instant Outfit Changes" },
                { id: "Perfect 1950s Slang Knowledge", label: "Perfect 1950s Slang Knowledge" },
                { id: "Reality TV Show Generation", label: "Reality TV Show Generation" },
                { id: "Soda Fountain Creation", label: "Soda Fountain Creation" },
                { id: "Dance-Move Power Ups", label: "Dance-Move Power Ups" },
                { id: "Hot Rod Summoning", label: "Hot Rod Summoning" },
                { id: "Jukebox Mental Control", label: "Jukebox Mental Control" }
            ]
        }
    },
    {
        id: 9,
        title: "ACADEMIC SUBJECTS",
        categories: [
            { id: "Science Classes", label: "Science Classes" },
            { id: "Humanities", label: "Humanities & Social Studies" },
            { id: "Technical Courses", label: "Technical Courses" },
            { id: "Special Electives", label: "Special Electives" },
            { id: "Physical Education", label: "Physical Education" }
        ],
        options: {
            "Science Classes": [
                { id: "Interdimensional Mathematics", label: "Interdimensional Mathematics" },
                { id: "Comparative Planetary Biology", label: "Comparative Planetary Biology" },
                { id: "Quantum Physics for Beginners", label: "Quantum Physics for Beginners" },
                { id: "Alien Ecosystem Studies", label: "Alien Ecosystem Studies" },
                { id: "Temporal Physics", label: "Temporal Physics" },
                { id: "Interspecies Chemistry", label: "Interspecies Chemistry" },
                { id: "Astronomical Navigation", label: "Astronomical Navigation" },
                { id: "Telepathic Communication Science", label: "Telepathic Communication Science" },
                { id: "Zero-Point Energy Theory", label: "Zero-Point Energy Theory" },
                { id: "Atomic Fusion Basics", label: "Atomic Fusion Basics" }
            ],
            "Humanities": [
                { id: "Galactic Literature", label: "Galactic Literature" },
                { id: "Universal History", label: "Universal History" },
                { id: "Earth Culture Studies", label: "Earth Culture Studies" },
                { id: "Comparative Religion", label: "Comparative Religion" },
                { id: "Interspecies Psychology", label: "Interspecies Psychology" },
                { id: "Multi-Dimensional Art", label: "Multi-Dimensional Art" },
                { id: "20th Century Earth Music", label: "20th Century Earth Music" },
                { id: "Psychic Philosophy", label: "Psychic Philosophy" },
                { id: "Cultural Anthropology", label: "Cultural Anthropology" },
                { id: "Temporal Ethics", label: "Temporal Ethics" }
            ],
            "Technical Courses": [
                { id: "Rocket Rod Mechanics", label: "Rocket Rod Mechanics" },
                { id: "Teleportation Systems", label: "Teleportation Systems" },
                { id: "Anti-Gravity Engineering", label: "Anti-Gravity Engineering" },
                { id: "Holographic Design", label: "Holographic Design" },
                { id: "Cosmic Ray Harnessing", label: "Cosmic Ray Harnessing" },
                { id: "Dimensional Portal Building", label: "Dimensional Portal Building" },
                { id: "Artificial Intelligence Programming", label: "Artificial Intelligence Programming" },
                { id: "Space-Time Fabric Repair", label: "Space-Time Fabric Repair" },
                { id: "Quantum Computer Operations", label: "Quantum Computer Operations" },
                { id: "Molecular Gastronomy", label: "Molecular Gastronomy" }
            ],
            "Special Electives": [
                { id: "Human Customs & Idioms", label: "Human Customs & Idioms" },
                { id: "Gravity Adaptation Techniques", label: "Gravity Adaptation Techniques" },
                { id: "Dimensional Travel Safety", label: "Dimensional Travel Safety" },
                { id: "Alien-Human Relations", label: "Alien-Human Relations" },
                { id: "Earth Pop Culture Appreciation", label: "Earth Pop Culture Appreciation" },
                { id: "Telekinetic Art", label: "Telekinetic Art" },
                { id: "Intergalactic Diplomacy", label: "Intergalactic Diplomacy" },
                { id: "Retrofuturistic Fashion Design", label: "Retrofuturistic Fashion Design" },
                { id: "Sock Hop Dance Techniques", label: "Sock Hop Dance Techniques" },
                { id: "Cosmic Creature Care", label: "Cosmic Creature Care" }
            ],
            "Physical Education": [
                { id: "Multi-Species Physical Education", label: "Multi-Species Physical Education" },
                { id: "Zero-G Sports", label: "Zero-G Sports" },
                { id: "Hover-Board Training", label: "Hover-Board Training" },
                { id: "Asteroid Belt Obstacle Course", label: "Asteroid Belt Obstacle Course" },
                { id: "Jet Pack Safety", label: "Jet Pack Safety" },
                { id: "Interplanetary Hiking", label: "Interplanetary Hiking" },
                { id: "Quantum Yoga", label: "Quantum Yoga" },
                { id: "Dance Across Dimensions", label: "Dance Across Dimensions" },
                { id: "Antigravity Gymnastics", label: "Antigravity Gymnastics" },
                { id: "Telekinetic Weight Training", label: "Telekinetic Weight Training" }
            ]
        }
    },
    {
        id: 10,
        title: "CHARACTER BACKGROUND",
        categories: [
            { id: "How They Arrived", label: "How They Came to Galaxy High" },
            { id: "Homeworld/Origin", label: "Homeworld/Origin" },
            { id: "Family Situation", label: "Family Situation" },
            { id: "Special Circumstances", label: "Special Circumstances" },
            { id: "Future Goals", label: "Future Goals" }
        ],
        options: {
            "How They Arrived": [
                { id: "Academic Scholarship Winner", label: "Academic Scholarship Winner" },
                { id: "Exchange Program Selection", label: "Exchange Program Selection" },
                { id: "Refugee from Cosmic Disaster", label: "Refugee from Cosmic Disaster" },
                { id: "Ambassador's Child", label: "Ambassador's Child" },
                { id: "Accidental Transportation", label: "Accidental Transportation" },
                { id: "Witness Protection Program", label: "Witness Protection Program" },
                { id: "Family Relocated for Work", label: "Family Relocated for Work" },
                { id: "Running Away From Home Planet", label: "Running Away From Home Planet" },
                { id: "Time-Space Experiment Gone Wrong", label: "Time-Space Experiment Gone Wrong" },
                { id: "School Ship Rescue Mission", label: "School Ship Rescue Mission" }
            ],
            "Homeworld/Origin": [
                { id: "Earth (1950s)", label: "Earth (1950s)" },
                { id: "Crystal Planet System", label: "Crystal Planet System" },
                { id: "Gas Giant Floating City", label: "Gas Giant Floating City" },
                { id: "Underwater Civilization", label: "Underwater Civilization" },
                { id: "Artificial Space Station", label: "Artificial Space Station" },
                { id: "Desert World Oasis", label: "Desert World Oasis" },
                { id: "Jungle Canopy Civilization", label: "Jungle Canopy Civilization" },
                { id: "Virtual Reality Construct", label: "Virtual Reality Construct" },
                { id: "Pocket Dimension", label: "Pocket Dimension" },
                { id: "Post-Apocalyptic Colony", label: "Post-Apocalyptic Colony" }
            ],
            "Family Situation": [
                { id: "Interdimensional Parents", label: "Interdimensional Parents" },
                { id: "Only Child Prodigy", label: "Only Child Prodigy" },
                { id: "Multi-Sibling Species", label: "Multi-Sibling Species" },
                { id: "Royal Family Descendant", label: "Royal Family Descendant" },
                { id: "Created in Lab", label: "Created in Lab" },
                { id: "Adopted Cross-Species", label: "Adopted Cross-Species" },
                { id: "Self-Replicating", label: "Self-Replicating" },
                { id: "Hive Mind Connection", label: "Hive Mind Connection" },
                { id: "Nuclear Family (Literally Atomic)", label: "Nuclear Family (Literally Atomic)" },
                { id: "Staying with Host Family", label: "Staying with Host Family" }
            ],
            "Special Circumstances": [
                { id: "Secret Identity", label: "Secret Identity" },
                { id: "Forbidden Technology Bearer", label: "Forbidden Technology Bearer" },
                { id: "Last of Species", label: "Last of Species" },
                { id: "Prophecy Subject", label: "Prophecy Subject" },
                { id: "Undercover Researcher", label: "Undercover Researcher" },
                { id: "Temporal Anomaly", label: "Temporal Anomaly" },
                { id: "Dimensional Convergence Point", label: "Dimensional Convergence Point" },
                { id: "Reality TV Show Subject", label: "Reality TV Show Subject" },
                { id: "Interspecies Peace Treaty Symbol", label: "Interspecies Peace Treaty Symbol" },
                { id: "Triple Agent Spy", label: "Triple Agent Spy" }
            ],
            "Future Goals": [
                { id: "Return to Earth/Home Planet", label: "Return to Earth/Home Planet" },
                { id: "Become Intergalactic Ambassador", label: "Become Intergalactic Ambassador" },
                { id: "Discover New Life Forms", label: "Discover New Life Forms" },
                { id: "Win Cosmic Sports Championship", label: "Win Cosmic Sports Championship" },
                { id: "Invent Revolutionary Technology", label: "Invent Revolutionary Technology" },
                { id: "Achieve Interspecies Understanding", label: "Achieve Interspecies Understanding" },
                { id: "Open Their Own Cosmic Diner", label: "Open Their Own Cosmic Diner" },
                { id: "Start a Retrofuturistic Band", label: "Start a Retrofuturistic Band" },
                { id: "Explore Uncharted Dimensions", label: "Explore Uncharted Dimensions" },
                { id: "Perfect the Ultimate Milkshake", label: "Perfect the Ultimate Milkshake" }
            ]
        }
    }
];
