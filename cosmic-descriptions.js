// Cosmic Americana Character Generator Descriptions
var DESCRIPTIONS = {
    // Personality Type descriptions by species type
    personalityTypes: {
        humanMale: {
            allAmericanBoy: "The quintessential 1950s all-American boy with an atomic-age twist! This young man radiates wholesome enthusiasm, believing that science and American values will lead us to a brighter future among the stars.",
            smallTownGuy: "Bringing small-town sensibilities to the cosmic frontier! This young man maintains traditional values and community spirit even when faced with the strangest alien encounters.",
            atomicNerd: "Inspired by the boundless possibilities of atomic energy and scientific advancement! This brainy fellow approaches every new discovery with meticulous precision and excitement.",
            classClown: "The interstellar joker who keeps spirits high! This humorous young man uses jokes to bridge the gap between worlds, finding the funny side of even the most bizarre alien encounters.",
            nervousNewKid: "New to this whole 'cosmic high school' thing! This uncertain young man navigates social situations with endearing awkwardness, trying to fit in without fully understanding the strange new rules.",
            overachiever: "Destined for greatness across the galaxy! This ambitious young man approaches every class, club, and cosmic challenge with intense dedication and a meticulously organized schedule book.",
            coolCat: "The hippest guy in the galaxy! This cool character maintains an unflappable facade even when faced with the most outlandish space phenomena.",
            beatnikGuy: "A cosmic philosopher questioning conventional reality, daddy-o! This deep thinker sees beyond square conformity into the deeper cosmic truths."
        },
        humanFemale: {
            allAmericanGirl: "The quintessential 1950s all-American girl with an atomic-age twist! This young lady radiates wholesome charm and poise, representing the best of Earth values among the stars.",
            smallTownGal: "Bringing small-town grace and values to the cosmic frontier! This young lady maintains her down-to-earth sensibilities while navigating the sometimes bewildering cosmic social scene.",
            atomicGenius: "Brilliant scientific mind wrapped in a stylish exterior! This young lady defies expectations with her exceptional intelligence and keen understanding of atomic-age science.",
            classJokester: "The witty comedienne of the cosmic classroom! This humorous young lady keeps everyone laughing with her clever observations about the absurdities of interplanetary high school life.",
            newGirlInTown: "Just arrived in this strange new cosmic setting! This young lady navigates unfamiliar social customs with a blend of genteel manners and wide-eyed wonder.",
            perfectStudent: "Always prepared with homework done early! This studious young lady balances academic excellence with social grace, setting the standard for Earth students everywhere.",
            queenBee: "The trendsetting center of the social universe! This popular young lady leads her friend group with confident poise while setting fashion standards across the galaxy.",
            beatnikChick: "Cool, collected, and questioning cosmic conventions! This intellectual young lady brings poetic perspective to the conformist culture of cosmic high school."
        },
        // [Keep the other personality descriptions as before]
    },

    // First names by species/gender type
    firstNames: {
        humanMale: [
            "Billy", "Johnny", "Bobby", "Tommy", "Chuck", "Ritchie", "Eddie", "Archie", 
            "Buddy", "Jimmy", "Freddy", "Jerry", "Ricky", "Danny", "Larry", "Frankie",
            "Timmy", "Joey", "Kenny", "Donny", "Ronnie", "Mikey", "Gary", "Wally"
        ],
        humanFemale: [
            "Betty", "Sue", "Peggy", "Mary Jane", "Judy", "Nancy", "Sally", "Veronica", 
            "Darlene", "Donna", "Patty", "Annette", "Carol", "Sandra", "Marilyn", "Debbie",
            "Connie", "Linda", "Susan", "Brenda", "Barbara", "Jane", "Gloria", "Shirley"
        ],
        spacerMale: [
            "Nova", "Orion", "Cosmo", "Atlas", "Jupiter", "Mercury", "Rocket", "Comet",
            "Astro", "Satellite", "Orbit", "Meteor", "Buzz", "Skyler", "Star", "Rex",
            "Zephyr", "Apollo", "Booster", "Ace", "Cosmic", "Jet", "Galaxy", "Zenith"
        ],
        spacerFemale: [
            "Luna", "Celeste", "Astra", "Lyra", "Vega", "Aurora", "Star", "Andromeda",
            "Venus", "Stellar", "Nova", "Celestia", "Galaxia", "Nebula", "Astrid", "Cassiopeia",
            "Selene", "Estella", "Comet", "Halo", "Starla", "Orbit", "Eclipse", "Umbra"
        ],
        alienHumanoid: [
            "Zarx", "Xylara", "Klixx", "Trazana", "Vroxx", "Jixal", "Mezura", "Nyzil",
            "Plex", "Quara", "Yzzix", "Zendula", "Klaxon", "Threx", "Vrilna", "Zortax",
            "Quidix", "Zeela", "Jaxar", "Nyxis", "Vizz", "Trixal", "Xivra", "Zendu"
        ],
        robotBeing: [
            "Unit", "Servo", "Mecha", "Cog", "Bolt", "Circuit", "Data", "Binary",
            "Gizmo", "Gear", "Droid", "Chip", "Widget", "Gadget", "Robo", "Automata",
            "Byte", "Diode", "Codebot", "Cybro", "Machinix", "Sparky", "Gearson", "Mechano"
        ],
        energyEntity: [
            "Spark", "Lumen", "Glimmer", "Flare", "Pulse", "Gleam", "Radiance", "Glow",
            "Shimmer", "Photon", "Beacon", "Illumina", "Arc", "Blaze", "Aura", "Flicker",
            "Volt", "Prism", "Neutron", "Quasar", "Scintilla", "Bright", "Phosphor", "Lucent"
        ],
        hybridForm: [
            "Fusion", "Nexus", "Hybrid", "Merge", "Blend", "Synergy", "Alloy", "Mosaic",
            "Chimera", "Amalgam", "Unity", "Synthesis", "Composite", "Junction", "Harmony", "Fusion",
            "Melange", "Splice", "Combo", "Crossbreed", "Interlink", "Bond", "Meld", "Converge"
        ]
    },

    // Last names
    lastNames: [
        "Rocket", "Stardust", "Cosmic", "Nebula", "Galaxy", "Comet", "Stellar", "Orbit",
        "Meteor", "Armstrong", "Newton", "Atomic", "Quasar", "Moonbeam", "Eclipse", "Supernova",
        "Lightyear", "Jetson", "Pulsar", "Vortex", "Smith", "Johnson", "Robinson", "Jones",
        "Miller", "Anderson", "Campbell", "Thompson", "Carter", "Mitchell", "Cooper", "Turner"
    ],
    
    // Generate character description based on selections
    generateCharacterDescription: function(character) {
        // Build description from selections
        let description = '';
        
        // Add personality type description
        if (character.personality && this.personalityTypes[character.species] && this.personalityTypes[character.species][character.personality]) {
            description += this.personalityTypes[character.species][character.personality] + ' ';
        }
        
        // Add hairstyle description
        if (character.hairstyle) {
            description += 'With a ' + character.hairstyle.toLowerCase() + ' hairstyle that defines their retrofuturistic look. ';
        }
        
        // Add clothing description
        if (character.outfit) {
            description += 'Dressed in a complete ' + character.outfit.toLowerCase();
            description += '. ';
        } else if (character.fashion) {
            description += 'Sporting ' + character.fashion.toLowerCase();
            
            if (character.footwear) {
                description += ' with ' + character.footwear.toLowerCase() + ' footwear';
            }
            
            description += '. ';
        }
        
        // Add accessories if present
        if (character.accessories && character.accessories.length > 0) {
            description += 'Accessorized with ';
            for (let i = 0; i < character.accessories.length; i++) {
                if (i > 0) {
                    if (i === character.accessories.length - 1) {
                        description += ' and ';
                    } else {
                        description += ', ';
                    }
                }
                description += character.accessories[i].toLowerCase();
            }
            description += '. ';
        }
        
        // Add special abilities if present
        if (character.abilities && character.abilities.length > 0) {
            description += 'Possessing the special abilities of ';
            for (let i = 0; i < character.abilities.length; i++) {
                if (i > 0) {
                    if (i === character.abilities.length - 1) {
                        description += ' and ';
                    } else {
                        description += ', ';
                    }
                }
                description += character.abilities[i].toLowerCase();
            }
            description += '. ';
        }
        
        // Add thematic ending based on species type
        const endings = {
            humanMale: "This young man embodies the optimistic atomic age aesthetics with a cosmic twist, ready for whatever retrofuturistic adventures await!",
            humanFemale: "This young lady radiates classic 1950s charm with a cosmic twist, bringing Earth's golden age sensibilities to the retrofuturistic frontiers!",
            spacerMale: "This space-born young man brings a unique perspective to Earth customs while maintaining his stellar heritage in everything he does!",
            spacerFemale: "This space-born young lady navigates between colony pragmatism and Earth-inspired style with the grace that only comes from growing up among the stars!",
            alienHumanoid: "This extraterrestrial visitor navigates Earth's strange customs with a blend of confusion and fascination that makes them utterly endearing!",
            robotBeing: "This mechanical marvel combines vintage technology aesthetics with surprising personality, challenging what it means to be truly alive!",
            energyEntity: "This luminous being defies conventional physics while adapting to solid-state interactions with beautiful light-based manifestations!",
            hybridForm: "This unique hybrid bridges multiple worlds in their very being, creating something entirely new and wonderful in the cosmic high school hallways!"
        };
        
        if (endings[character.species]) {
            description += endings[character.species];
        }
        
        return description;
    },
    
    // Generate a cosmic character name based on species/gender type
    generateCharacterName: function(speciesType) {
        let firstName = "Cosmic";
        const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
        
        // Select appropriate first name based on species/gender type
        if (this.firstNames[speciesType]) {
            const firstNameOptions = this.firstNames[speciesType];
            firstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)];
        }
        
        return firstName + " " + lastName;
    }
};