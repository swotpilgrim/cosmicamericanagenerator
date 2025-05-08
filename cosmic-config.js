// Configuration for the Cosmic Americana Character Generator
const CONFIG = {
    // Character types (species and gender)
    speciesTypes: [
        { value: "humanMale", label: "Earth Human - Male" },
        { value: "humanFemale", label: "Earth Human - Female" },
        { value: "spacerMale", label: "Space Colonist - Male" },
        { value: "spacerFemale", label: "Space Colonist - Female" },
        { value: "alienHumanoid", label: "Alien Humanoid" },
        { value: "robotBeing", label: "Robotic Being" },
        { value: "energyEntity", label: "Energy Entity" },
        { value: "hybridForm", label: "Hybrid Lifeform" }
    ],
    
    // Personality Types for each species type
    personalityTypes: {
        humanMale: [
            { value: "allAmericanBoy", label: "All-American Boy" },
            { value: "smallTownGuy", label: "Small Town Values Guy" },
            { value: "atomicNerd", label: "Atomic Age Science Nerd" },
            { value: "classClown", label: "Class Clown" },
            { value: "nervousNewKid", label: "Nervous New Kid" },
            { value: "overachiever", label: "Academic Overachiever" },
            { value: "coolCat", label: "Too Cool for School" },
            { value: "beatnikGuy", label: "Cosmic Beatnik" }
        ],
        humanFemale: [
            { value: "allAmericanGirl", label: "All-American Girl" },
            { value: "smallTownGal", label: "Small Town Values Gal" },
            { value: "atomicGenius", label: "Atomic Age Science Genius" },
            { value: "classJokester", label: "Class Comedian" },
            { value: "newGirlInTown", label: "New Girl in Town" },
            { value: "perfectStudent", label: "Perfect Student" },
            { value: "queenBee", label: "Queen Bee" },
            { value: "beatnikChick", label: "Cosmic Beatnik Chick" }
        ],
        spacerMale: [
            { value: "frontierBoy", label: "Space Frontier Pioneer" },
            { value: "spaceScout", label: "Self-Reliant Space Scout" },
            { value: "earthDreamer", label: "Dreams of Earth" },
            { value: "colonistPride", label: "Colony Pride" },
            { value: "earthCurious", label: "Curious About Earth" },
            { value: "spaceVeteran", label: "Veteran of the Void" },
            { value: "stellarAthlete", label: "Stellar Athlete" },
            { value: "spaceNerd", label: "Zero-G Science Enthusiast" }
        ],
        spacerFemale: [
            { value: "frontierGal", label: "Space Frontier Pioneer" },
            { value: "spaceExplorer", label: "Self-Reliant Space Explorer" },
            { value: "earthDreamer", label: "Dreams of Earth" },
            { value: "colonyStar", label: "Colony Star" },
            { value: "earthFascinated", label: "Fascinated by Earth" },
            { value: "spaceSurvivor", label: "Survivor of the Void" },
            { value: "athleticAce", label: "Zero-G Athletic Ace" },
            { value: "scienceWhiz", label: "Space Science Whiz" }
        ],
        alienHumanoid: [
            { value: "confusedByEarth", label: "Confused by Earth Customs" },
            { value: "literalTranslator", label: "Overly Literal Translator" },
            { value: "fascinated", label: "Fascinated by Humans" },
            { value: "superiority", label: "Superior Technological Mind" },
            { value: "diplomaticMission", label: "On Diplomatic Mission" },
            { value: "culturalObserver", label: "Cultural Observer" },
            { value: "earthMediaFan", label: "Earth Media Enthusiast" },
            { value: "exiledRoyal", label: "Exiled Royal" }
        ],
        robotBeing: [
            { value: "learningHumanity", label: "Learning to Be Human" },
            { value: "logicalComputer", label: "Strictly Logical Computer" },
            { value: "emotionalAI", label: "Surprisingly Emotional AI" },
            { value: "serviceDroid", label: "Eager-to-Please Service Droid" },
            { value: "obsoleteModel", label: "Charmingly Obsolete Model" },
            { value: "militaryConversion", label: "Converted Military Unit" },
            { value: "artisticSoul", label: "Artistic Electronic Soul" },
            { value: "malfunctioning", label: "Delightfully Malfunctioning" }
        ],
        energyEntity: [
            { value: "curiousEnergy", label: "Curious Energy Explorer" },
            { value: "containedPower", label: "Barely Contained Power" },
            { value: "loneExplorer", label: "Lone Energy Explorer" },
            { value: "ancientBeing", label: "Ancient Being of Light" },
            { value: "emotionalRadiance", label: "Emotionally Radiant" },
            { value: "playfulSpark", label: "Playful Spark" },
            { value: "stellarStudent", label: "Stellar Exchange Student" },
            { value: "harmonicResonance", label: "In Harmonic Resonance" }
        ],
        hybridForm: [
            { value: "identityCrisis", label: "Dual Identity Crisis" },
            { value: "bestOfBoth", label: "Best of Both Worlds" },
            { value: "misfit", label: "Interspecies Misfit" },
            { value: "experimentSurvivor", label: "Experiment Survivor" },
            { value: "adapting", label: "Constantly Adapting" },
            { value: "trailblazer", label: "Hybrid Trailblazer" },
            { value: "peaceSymbol", label: "Symbol of Peace" },
            { value: "cultureBridge", label: "Cultural Bridge" }
        ]
    },
    
    // Hairstyles for each species/gender type
    hairstyles: {
        humanMale: [
            { value: "pompadour", label: "Slicked Pompadour" },
            { value: "crewCut", label: "Clean Crew Cut" },
            { value: "slickedBack", label: "Slicked-Back Style" },
            { value: "sidePartFlat", label: "Side Part with Flat Top" },
            { value: "wavyShort", label: "Short Wavy Style" },
            { value: "quiff", label: "Atomic Age Quiff" },
            { value: "jelliedDuck", label: "Jellied Duck Tail" },
            { value: "squareFlatTop", label: "Squared Flat Top" }
        ],
        humanFemale: [
            { value: "pageboy", label: "Pageboy Bob" },
            { value: "victoryRolls", label: "Victory Rolls" },
            { value: "beehive", label: "Beehive Updo" },
            { value: "bouffant", label: "Bouffant Style" },
            { value: "flippedEnds", label: "Flipped Ends Bob" },
            { value: "poodleCut", label: "Poodle Cut" },
            { value: "ponytail", label: "High Ponytail with Scarf" },
            { value: "pixieCut", label: "Atomic Pixie Cut" }
        ],
        spacerMale: [
            { value: "utilitarian", label: "Utilitarian Colony Cut" },
            { value: "spaceSustainable", label: "Water-Conserving Cut" },
            { value: "gravityDefying", label: "Gravity-Defying Style" },
            { value: "militaryPrecision", label: "Military Precision Cut" },
            { value: "windTunnel", label: "Wind Tunnel Effect" },
            { value: "sectorAssigned", label: "Sector-Assigned Style" },
            { value: "earthHomage", label: "Earth Style Homage" },
            { value: "crewLeader", label: "Crew Leader Buzz Cut" }
        ],
        spacerFemale: [
            { value: "practicalBob", label: "Practical Colony Bob" },
            { value: "conservationCut", label: "Water Conservation Cut" },
            { value: "utilityUpdo", label: "Utility Updo" },
            { value: "sectorStyle", label: "Sector-Assigned Style" },
            { value: "antigravWaves", label: "Anti-Gravity Waves" },
            { value: "earthMimicry", label: "Earth Style Mimicry" },
            { value: "vacuumProof", label: "Vacuum-Proof Coif" },
            { value: "colonyRegulation", label: "Colony Regulation Cut" }
        ],
        alienHumanoid: [
            { value: "tentacleCrown", label: "Tentacle Crown" },
            { value: "crystalline", label: "Crystalline Growth" },
            { value: "levitating", label: "Levitating Locks" },
            { value: "colorChanging", label: "Color-Changing Filaments" },
            { value: "feathers", label: "Feather Crest" },
            { value: "alienPrecision", label: "Geometrically Precise Cut" },
            { value: "glowingStrands", label: "Glowing Strands" },
            { value: "scalesRidges", label: "Scales or Ridges" }
        ],
        robotBeing: [
            { value: "antennaArray", label: "Antenna Array" },
            { value: "chromeTop", label: "Chrome Dome with Details" },
            { value: "fiberOptic", label: "Fiber Optic Strands" },
            { value: "detachable", label: "Detachable Hair Unit" },
            { value: "wireMesh", label: "Wire Mesh Styling" },
            { value: "lightEmitting", label: "Light-Emitting Diode Top" },
            { value: "humanImitation", label: "Human Hair Imitation" },
            { value: "modulable", label: "Modulable Style Extensions" }
        ],
        energyEntity: [
            { value: "flamingAura", label: "Flaming Aura Crown" },
            { value: "plasmaStrands", label: "Plasma Strands" },
            { value: "staticElectricity", label: "Static Electricity Wisps" },
            { value: "lightSpectrum", label: "Light Spectrum Rays" },
            { value: "sparkShower", label: "Spark Shower" },
            { value: "energyHalo", label: "Energy Halo" },
            { value: "containmentField", label: "Contained Energy Field" },
            { value: "stellarFlare", label: "Stellar Flare Crown" }
        ],
        hybridForm: [
            { value: "mixedTexture", label: "Mixed Texture Combination" },
            { value: "halfHuman", label: "Half-Human, Half-Other" },
            { value: "partiallyMetal", label: "Partially Metallic" },
            { value: "organicTech", label: "Organic-Tech Fusion" },
            { value: "adaptiveStyle", label: "Adaptive Style-Shifting" },
            { value: "elementalMix", label: "Elemental Mixtures" },
            { value: "experimentResult", label: "Experimental Outcome" },
            { value: "traditionalFusion", label: "Two-Species Traditional Fusion" }
        ]
    },
    
    // Fashion Styles for each species/gender type  
    fashionStyles: {
        humanMale: [
            { value: "varsityJacket", label: "Varsity Jacket with Patches" },
            { value: "bowTieNerd", label: "Bow-Tie Nerd Ensemble" },
            { value: "greaser", label: "Greaser Leather Jacket" },
            { value: "letterman", label: "Letterman Sweater" },
            { value: "preppy", label: "Preppy Cardigan Set" },
            { value: "dressShirt", label: "Clean-Cut Dress Shirt" },
            { value: "casualFifties", label: "Casual 50s Button-Up" },
            { value: "beatnikTurtleneck", label: "Beatnik Turtleneck" }
        ],
        humanFemale: [
            { value: "poodleSkirt", label: "Poodle Skirt Ensemble" },
            { value: "sweaterSet", label: "Twin Sweater Set" },
            { value: "capriPants", label: "Capri Pants with Blouse" },
            { value: "fullSkirt", label: "Full Skirt with Cinched Waist" },
            { value: "blouseScarf", label: "Blouse with Neck Scarf" },
            { value: "shirtDress", label: "Atomic Pattern Shirt Dress" },
            { value: "circleSkirt", label: "Circle Skirt with Petticoat" },
            { value: "beatnikStyle", label: "Beatnik All-Black Style" }
        ],
        spacerMale: [
            { value: "utilityJumpsuit", label: "Colony Utility Jumpsuit" },
            { value: "sectorUniform", label: "Sector Worker Uniform" },
            { value: "oxygenAccessorized", label: "Oxygen-Accessorized Outfit" },
            { value: "spaceMilitary", label: "Space Force Uniform" },
            { value: "pressureSuit", label: "Stylized Pressure Suit" },
            { value: "hydroFarmer", label: "Hydroponic Farmer Gear" },
            { value: "earthVintage", label: "Earth Vintage Recreation" },
            { value: "colonyEngineering", label: "Colony Engineering Outfit" }
        ],
        spacerFemale: [
            { value: "colonyJumpsuit", label: "Colony Regulation Jumpsuit" },
            { value: "utilityDress", label: "Utility Dress with Pockets" },
            { value: "sectorUniform", label: "Sector Worker Uniform" },
            { value: "oxygenStyled", label: "Oxygen-Accessorized Outfit" },
            { value: "venusMilitary", label: "Venus Colony Military Style" },
            { value: "terraformChic", label: "Terraforming Chic" },
            { value: "earthRecreation", label: "Earth Fashion Recreation" },
            { value: "scienceTeam", label: "Science Team Uniform" }
        ],
        alienHumanoid: [
            { value: "adaptedEarth", label: "Adapted Earth Fashion" },
            { value: "homeworld", label: "Homeworld Traditional" },
            { value: "atmosphericSuit", label: "Atmospheric Adaptation Suit" },
            { value: "diplomaticRegalia", label: "Diplomatic Regalia" },
            { value: "exoticMaterials", label: "Exotic Materials Clothing" },
            { value: "biologicalAdornments", label: "Biological Adornments" },
            { value: "temperatureRegulating", label: "Temperature-Regulating Garb" },
            { value: "mimicry", label: "Human Fashion Mimicry" }
        ],
        robotBeing: [
            { value: "exposedComponents", label: "Stylishly Exposed Components" },
            { value: "retroCasing", label: "Retrofuturistic Casing" },
            { value: "humanClothed", label: "Human-Style Clothing on Robot" },
            { value: "uniformPlating", label: "Service Uniform Plating" },
            { value: "luxuryModel", label: "Luxury Model Finish" },
            { value: "utilitarian", label: "Utilitarian Design with Flair" },
            { value: "customMods", label: "Custom Owner Modifications" },
            { value: "vintageAdaptation", label: "Vintage Tech Adaptation" }
        ],
        energyEntity: [
            { value: "containmentSuit", label: "Stylish Containment Suit" },
            { value: "projectionField", label: "Holographic Projection Field" },
            { value: "flamePatterned", label: "Flame-Patterned Manifestation" },
            { value: "colorShift", label: "Color-Shifting Energy Form" },
            { value: "earthDress", label: "Earth Fashion Energy Mimicry" },
            { value: "crystallineFocus", label: "Crystalline Focus Jewelry" },
            { value: "electricOutlines", label: "Electric Outlined Silhouette" },
            { value: "plasmaTexture", label: "Plasma-Textured Appearance" }
        ],
        hybridForm: [
            { value: "adaptiveClothing", label: "Adaptive Multi-Form Clothing" },
            { value: "dualInfluence", label: "Dual Cultural Influence" },
            { value: "organTech", label: "Organic-Tech Integrated Look" },
            { value: "specialNeeds", label: "Special Needs Adaptations" },
            { value: "experimentalFashion", label: "Experimental Fashion Solutions" },
            { value: "transformAware", label: "Transformation-Aware Garments" },
            { value: "traditionalFusion", label: "Two-World Traditional Fusion" },
            { value: "earthObsessed", label: "Earth Fashion Obsessed" }
        ]
    },

    // Complete Outfits for each species/gender type
    outfitTypes: {
        humanMale: [
            { value: "varsityComplete", label: "Complete Varsity Athlete Look" },
            { value: "scienceClass", label: "Science Class Nerd Ensemble" },
            { value: "basketballTeam", label: "Basketball Team Uniform" },
            { value: "greaser", label: "Complete Greaser Look" },
            { value: "bowlingTeam", label: "Bowling Team Uniform" },
            { value: "bandUniform", label: "Marching Band Uniform" },
            { value: "promFormal", label: "Prom Formal Attire" },
            { value: "radioClub", label: "Ham Radio Club Outfit" }
        ],
        humanFemale: [
            { value: "cheerSquad", label: "Cheer Squad Uniform" },
            { value: "poodle50s", label: "Complete Poodle Skirt Set" },
            { value: "scienceGirl", label: "Science Club Girl Outfit" },
            { value: "schoolDance", label: "School Dance Dress" },
            { value: "sororityMeet", label: "Sorority Meeting Outfit" },
            { value: "diaryGirl", label: "Dear Diary Girl Look" },
            { value: "promDress", label: "Prom Night Formal" },
            { value: "waitress", label: "Diner Waitress Uniform" }
        ],
        spacerMale: [
            { value: "colonyJumpsuit", label: "Standard Colony Jumpsuit" },
            { value: "spaceMilitary", label: "Space Military Complete Uniform" },
            { value: "maintenanceCrew", label: "Maintenance Crew Gear" },
            { value: "pilotSuit", label: "Rocket Pilot Suit" },
            { value: "spaceSport", label: "Zero-G Sports Uniform" },
            { value: "ceremonialColony", label: "Colony Ceremonial Attire" },
            { value: "earthDayOutfit", label: "Earth Day Celebration Outfit" },
            { value: "scienceTeam", label: "Science Team Uniform" }
        ],
        spacerFemale: [
            { value: "colonyUtility", label: "Venus Colony Utility Suit" },
            { value: "officerUniform", label: "Female Officer Uniform" },
            { value: "terraformCrew", label: "Terraforming Crew Outfit" },
            { value: "pilotJumpsuit", label: "Female Pilot Jumpsuit" },
            { value: "athleticZero", label: "Zero-G Athletics Uniform" },
            { value: "ceremonyAttire", label: "Colony Ceremony Attire" },
            { value: "earthFestival", label: "Earth Festival Costume" },
            { value: "labCoat", label: "Science Lab Coat Ensemble" }
        ],
        alienHumanoid: [
            { value: "diplomaticUniform", label: "Diplomatic Corps Uniform" },
            { value: "adaptedEarthSchool", label: "Adapted Earth School Uniform" },
            { value: "homeworldCeremonial", label: "Homeworld Ceremonial Attire" },
            { value: "environmentSuit", label: "Earth Environment Adaptation Suit" },
            { value: "traditionalWithTech", label: "Traditional with Tech Modifications" },
            { value: "intergalacticFashion", label: "Cutting-Edge Intergalactic Fashion" },
            { value: "royalRegalia", label: "Royal House Regalia" },
            { value: "universityUniform", label: "Exchange University Uniform" }
        ],
        robotBeing: [
            { value: "serviceBot", label: "Service Bot Classic Look" },
            { value: "militaryUnit", label: "Military Unit Conversion" },
            { value: "companionModel", label: "Companion Model Design" },
            { value: "luxuryAssistant", label: "Luxury Assistant Finish" },
            { value: "industrialChic", label: "Industrial Worker Chic" },
            { value: "antiqueMechanical", label: "Antique Mechanical Marvel" },
            { value: "retrofitted", label: "Retrofitted Older Model" },
            { value: "entertainmentUnit", label: "Entertainment Unit Design" }
        ],
        energyEntity: [
            { value: "containmentClassic", label: "Classic Containment Suit" },
            { value: "energyFormalwear", label: "Energy Being Formalwear" },
            { value: "manifestationEarth", label: "Earth-Inspired Manifestation" },
            { value: "starCoreEssence", label: "Star Core Essence Look" },
            { value: "plasmaSchoolUniform", label: "Plasma School Uniform" },
            { value: "spectrumShift", label: "Full Spectrum Shift Pattern" },
            { value: "crystallineFocus", label: "Crystalline Focus Complete Set" },
            { value: "elementalForm", label: "Elemental Form Display" }
        ],
        hybridForm: [
            { value: "adaptiveFull", label: "Fully Adaptive Transformation Wear" },
            { value: "ceremonialFusion", label: "Ceremonial Heritage Fusion" },
            { value: "laboratorySpecial", label: "Laboratory Special Design" },
            { value: "modularNecessity", label: "Modular Necessity Outfit" },
            { value: "biologicalTech", label: "Biological-Technical Integration" },
            { value: "dualWorldFormal", label: "Dual World Formal Attire" },
            { value: "familyHeirloom", label: "Mixed Family Heirloom Outfit" },
            { value: "performanceOutfit", label: "Hybrid Arts Performance Outfit" }
        ]
    },

    // Complete Outfits for each species/gender type
    outfitTypes: {
        humanMale: [
            { value: "varsityComplete", label: "Complete Varsity Athlete Look" },
            { value: "scienceClass", label: "Science Class Nerd Ensemble" },
            { value: "basketballTeam", label: "Basketball Team Uniform" },
            { value: "greaser", label: "Complete Greaser Look" },
            { value: "bowlingTeam", label: "Bowling Team Uniform" },
            { value: "bandUniform", label: "Marching Band Uniform" },
            { value: "promFormal", label: "Prom Formal Attire" },
            { value: "radioClub", label: "Ham Radio Club Outfit" }
        ],
        humanFemale: [
            { value: "cheerSquad", label: "Cheer Squad Uniform" },
            { value: "poodle50s", label: "Complete Poodle Skirt Set" },
            { value: "scienceGirl", label: "Science Club Girl Outfit" },
            { value: "schoolDance", label: "School Dance Dress" },
            { value: "sororityMeet", label: "Sorority Meeting Outfit" },
            { value: "diaryGirl", label: "Dear Diary Girl Look" },
            { value: "promDress", label: "Prom Night Formal" },
            { value: "waitress", label: "Diner Waitress Uniform" }
        ],
        spacerMale: [
            { value: "colonyJumpsuit", label: "Standard Colony Jumpsuit" },
            { value: "spaceMilitary", label: "Space Military Complete Uniform" },
            { value: "maintenanceCrew", label: "Maintenance Crew Gear" },
            { value: "pilotSuit", label: "Rocket Pilot Suit" },
            { value: "spaceSport", label: "Zero-G Sports Uniform" },
            { value: "ceremonialColony", label: "Colony Ceremonial Attire" },
            { value: "earthDayOutfit", label: "Earth Day Celebration Outfit" },
            { value: "scienceTeam", label: "Science Team Uniform" }
        ],
        spacerFemale: [
            { value: "colonyUtility", label: "Venus Colony Utility Suit" },
            { value: "officerUniform", label: "Female Officer Uniform" },
            { value: "terraformCrew", label: "Terraforming Crew Outfit" },
            { value: "pilotJumpsuit", label: "Female Pilot Jumpsuit" },
            { value: "athleticZero", label: "Zero-G Athletics Uniform" },
            { value: "ceremonyAttire", label: "Colony Ceremony Attire" },
            { value: "earthFestival", label: "Earth Festival Costume" },
            { value: "labCoat", label: "Science Lab Coat Ensemble" }
        ],
        alienHumanoid: [
            { value: "diplomaticUniform", label: "Diplomatic Corps Uniform" },
            { value: "adaptedEarthSchool", label: "Adapted Earth School Uniform" },
            { value: "homeworldCeremonial", label: "Homeworld Ceremonial Attire" },
            { value: "environmentSuit", label: "Earth Environment Adaptation Suit" },
            { value: "traditionalWithTech", label: "Traditional with Tech Modifications" },
            { value: "intergalacticFashion", label: "Cutting-Edge Intergalactic Fashion" },
            { value: "royalRegalia", label: "Royal House Regalia" },
            { value: "universityUniform", label: "Exchange University Uniform" }
        ],
        robotBeing: [
            { value: "serviceBot", label: "Service Bot Classic Look" },
            { value: "militaryUnit", label: "Military Unit Conversion" },
            { value: "companionModel", label: "Companion Model Design" },
            { value: "luxuryAssistant", label: "Luxury Assistant Finish" },
            { value: "industrialChic", label: "Industrial Worker Chic" },
            { value: "antiqueMechanical", label: "Antique Mechanical Marvel" },
            { value: "retrofitted", label: "Retrofitted Older Model" },
            { value: "entertainmentUnit", label: "Entertainment Unit Design" }
        ],
        energyEntity: [
            { value: "containmentClassic", label: "Classic Containment Suit" },
            { value: "energyFormalwear", label: "Energy Being Formalwear" },
            { value: "manifestationEarth", label: "Earth-Inspired Manifestation" },
            { value: "starCoreEssence", label: "Star Core Essence Look" },
            { value: "plasmaSchoolUniform", label: "Plasma School Uniform" },
            { value: "spectrumShift", label: "Full Spectrum Shift Pattern" },
            { value: "crystallineFocus", label: "Crystalline Focus Complete Set" },
            { value: "elementalForm", label: "Elemental Form Display" }
        ],
        hybridForm: [
            { value: "adaptiveFull", label: "Fully Adaptive Transformation Wear" },
            { value: "ceremonialFusion", label: "Ceremonial Heritage Fusion" },
            { value: "laboratorySpecial", label: "Laboratory Special Design" },
            { value: "modularNecessity", label: "Modular Necessity Outfit" },
            { value: "biologicalTech", label: "Biological-Technical Integration" },
            { value: "dualWorldFormal", label: "Dual World Formal Attire" },
            { value: "familyHeirloom", label: "Mixed Family Heirloom Outfit" },
            { value: "performanceOutfit", label: "Hybrid Arts Performance Outfit" }
        ]
    },

    // Footwear for each species/gender type
    footwear: {
        humanMale: [
            { value: "saddleShoes", label: "Two-Tone Saddle Shoes" },
            { value: "loafers", label: "Penny Loafers" },
            { value: "oxfords", label: "Classic Oxfords" },
            { value: "basketballSneakers", label: "Basketball Sneakers" },
            { value: "wingTips", label: "Wing Tips" },
            { value: "buckleShoes", label: "Buckle Dress Shoes" },
            { value: "chucks", label: "Chuck Taylor Sneakers" },
            { value: "dressBoots", label: "Polished Dress Boots" }
        ],
        humanFemale: [
            { value: "saddleOxfords", label: "Female Saddle Oxfords" },
            { value: "marySue", label: "Mary Janes" },
            { value: "kittenHeels", label: "Kitten Heels" },
            { value: "loafersFemale", label: "Ladies' Penny Loafers" },
            { value: "keds", label: "Canvas Keds" },
            { value: "balletFlats", label: "Ballet Flats" },
            { value: "bobbySlippers", label: "Bobby Sox with Slippers" },
            { value: "ankleStraps", label: "Ankle Strap Heels" }
        ],
        spacerMale: [
            { value: "magnetBoots", label: "Magnetic Grip Boots" },
            { value: "utilityBoots", label: "Colony Utility Boots" },
            { value: "gravityShoes", label: "Gravity Adjustment Shoes" },
            { value: "pilotBoots", label: "Pilot's Quick-Release Boots" },
            { value: "pressureSocks", label: "Pressure-Regulated Socks" },
            { value: "earthStyled", label: "Earth-Styled Colony Shoes" },
            { value: "spaceAthletic", label: "Space Sports Footwear" },
            { value: "emergencyBoots", label: "Emergency Vacuum Boots" }
        ],
        spacerFemale: [
            { value: "magneticFemale", label: "Female Magnetic Boots" },
            { value: "utilitySlip", label: "Utility Slip-Ons" },
            { value: "gravityWedges", label: "Gravity Compensation Wedges" },
            { value: "colonySport", label: "Colony Sport Shoes" },
            { value: "spaceDeck", label: "Space Deck Shoes" },
            { value: "earthImitation", label: "Earth Style Imitation" },
            { value: "vacTrainers", label: "Vacuum-Ready Trainers" },
            { value: "moonBoots", label: "Fashionable Moon Boots" }
        ],
        alienHumanoid: [
            { value: "adaptedEarth", label: "Adapted Earth Footwear" },
            { value: "anatomySpecific", label: "Anatomy-Specific Design" },
            { value: "hovering", label: "Partial Hovering Assist" },
            { value: "environmentRegulated", label: "Environment-Regulated Boots" },
            { value: "traditionalCeremony", label: "Traditional Ceremony Shoes" },
            { value: "technologicalComfort", label: "Technological Comfort Footwear" },
            { value: "translationFootwear", label: "Gravity Translation Footwear" },
            { value: "symbolicDecoration", label: "Symbolically Decorated Shoes" }
        ],
        robotBeing: [
            { value: "integratedFeet", label: "Integrated Foot Units" },
            { value: "decorativeCovers", label: "Decorative Foot Covers" },
            { value: "retractableWheels", label: "Retractable Wheel System" },
            { value: "humanImitation", label: "Human Shoe Imitation" },
            { value: "multiTerrain", label: "Multi-Terrain Adaptors" },
            { value: "cushionedClompers", label: "Cushioned Clompers" },
            { value: "serviceStyle", label: "Service Model Standard Issue" },
            { value: "vintageFinish", label: "Vintage Finish Metal Feet" }
        ],
        energyEntity: [
            { value: "containedLower", label: "Contained Energy Lower Form" },
            { value: "hoveringFeet", label: "Perpetually Hovering Feet" },
            { value: "manifestShoes", label: "Manifested Shoe Appearance" },
            { value: "energyTrails", label: "Energy Trails Instead of Feet" },
            { value: "crystallineSlippers", label: "Crystalline Slippers" },
            { value: "flameBoots", label: "Flame-Effect Boots" },
            { value: "plasmaFootprints", label: "Plasma Footprint Generators" },
            { value: "earthShoeImitation", label: "Earth Shoe Energy Imitation" }
        ],
        hybridForm: [
            { value: "adaptiveFootwear", label: "Adaptive Transformation Footwear" },
            { value: "partlyNatural", label: "Partly Natural/Partly Artificial" },
            { value: "specialAccommodation", label: "Special Accommodation Design" },
            { value: "dualPurpose", label: "Dual-Purpose Function Shoes" },
            { value: "technoPrimal", label: "Techno-Organic Primal Design" },
            { value: "laboratoryIssue", label: "Laboratory Issue Hybrid Boots" },
            { value: "transitionType", label: "Transitional Type Footwear" },
            { value: "earthAlienFusion", label: "Earth-Alien Fashion Fusion" }
        ]
    },

    // Accessories for each species/gender type
    accessories: {
        humanMale: [
            { value: "varsityPatch", label: "Varsity Letter Patch" },
            { value: "bowTie", label: "Polka Dot Bow Tie" },
            { value: "hornRimGlasses", label: "Horn-Rimmed Glasses" },
            { value: "pocketProtector", label: "Pocket Protector" },
            { value: "watchFob", label: "Pocket Watch Fob" },
            { value: "transistorRadio", label: "Transistor Radio" },
            { value: "pocketComb", label: "Greaser Pocket Comb" },
            { value: "schoolPennant", label: "School Pennant" },
            { value: "classRing", label: "Class Ring" },
            { value: "lettermanPatch", label: "Letterman Patch" },
            { value: "cigarettePack", label: "Rolled Cigarette Pack" },
            { value: "tieClasp", label: "Atomic Design Tie Clasp" }
        ],
        humanFemale: [
            { value: "pearlNecklace", label: "Pearl Necklace" },
            { value: "silkScarf", label: "Silk Neck Scarf" },
            { value: "catEyeGlasses", label: "Cat-Eye Glasses" },
            { value: "ankletSock", label: "Bobby Sox Anklet" },
            { value: "hairRibbon", label: "Satin Hair Ribbon" },
            { value: "circlePin", label: "Circle Pin" },
            { value: "charmBracelet", label: "Charm Bracelet" },
            { value: "brooch", label: "Atomic Design Brooch" },
            { value: "whiteGloves", label: "White Gloves" },
            { value: "compactMirror", label: "Compact Mirror" },
            { value: "headscarf", label: "Printed Head Scarf" }
        ],
        spacerMale: [
            { value: "oxygenMeter", label: "Wrist Oxygen Meter" },
            { value: "emergencyBreather", label: "Emergency Breather" },
            { value: "colonySash", label: "Colony Section Sash" },
            { value: "sectorBadge", label: "Sector Identification Badge" },
            { value: "communicationDevice", label: "Retrofuture Communication Device" },
            { value: "ratingBadges", label: "Service Rating Badges" },
            { value: "earthSouvenir", label: "Earth Souvenir Keychain" },
            { value: "securityTag", label: "Security Clearance Tag" },
            { value: "sectorMap", label: "Sector Navigation Map" },
            { value: "emergencyKit", label: "Emergency Survival Kit" },
            { value: "spacePet", label: "Miniature Space Pet" },
            { value: "familyHeirloom", label: "Earth Family Heirloom" }
        ],
        spacerFemale: [
            { value: "oxygenJewelry", label: "Oxygen Monitor Jewelry" },
            { value: "colonyScarf", label: "Colony Identification Scarf" },
            { value: "sectorPin", label: "Sector Pin" },
            { value: "communicator", label: "Wrist Communicator" },
            { value: "filtrationCharm", label: "Air Filtration Charm" },
            { value: "utilityBelt", label: "Feminine Utility Belt" },
            { value: "terraformSample", label: "Terraforming Sample Case" },
            { value: "earthSouvenir", label: "Earth Souvenir Locket" },
            { value: "radiationBadge", label: "Radiation Level Badge" },
            { value: "hydroGloves", label: "Hydroponic Garden Gloves" },
            { value: "lightHelmet", label: "Lightweight Helmet" },
            { value: "moonRock", label: "Moon Rock Jewelry" }
        ],
        alienHumanoid: [
            { value: "translationDevice", label: "Translation Device/Collar" },
            { value: "atmosphereRegulator", label: "Personal Atmosphere Regulator" },
            { value: "gravitySuit", label: "Gravity Adjustment Nodules" },
            { value: "culturalSymbol", label: "Cultural Symbol/Status Marker" },
            { value: "communicationArray", label: "Homeworld Communication Array" },
            { value: "organicJewelry", label: "Living Organic Jewelry" },
            { value: "diplomaticInsignia", label: "Diplomatic Corps Insignia" },
            { value: "sensorArray", label: "Enhanced Sensor Array" },
            { value: "speciesKeepsake", label: "Species Traditional Keepsake" },
            { value: "environmentalShield", label: "Environmental Shield Generator" },
            { value: "earthCollection", label: "Earth Oddities Collection" },
            { value: "trophyDisplay", label: "Achievement Trophy Display" }
        ],
        robotBeing: [
            { value: "accessPanel", label: "Decorative Access Panel" },
            { value: "visibleGears", label: "Visible Gears and Mechanisms" },
            { value: "glowingElements", label: "Glowing Indicator Elements" },
            { value: "speakerGrille", label: "Stylized Speaker Grille" },
            { value: "attachmentArray", label: "Useful Attachment Array" },
            { value: "humanAccessories", label: "Human-Style Accessories" },
            { value: "modelIdentifier", label: "Prominent Model Identifier" },
            { value: "vintageGauge", label: "Vintage Gauges and Dials" },
            { value: "portableTool", label: "Fold-Out Tool Attachment" },
            { value: "extraLimb", label: "Extra Utility Limb" },
            { value: "ownerTag", label: "Owner's Customization Tag" },
            { value: "dataFeed", label: "External Data Feed Display" }
        ],
        energyEntity: [
            { value: "containmentJewelry", label: "Containment Jewelry" },
            { value: "frequencyModulator", label: "Frequency Modulator Band" },
            { value: "crystallineFocus", label: "Crystalline Focus Object" },
            { value: "energyOrbs", label: "Orbiting Energy Spheres" },
            { value: "fieldStabilizer", label: "Field Stabilizer Brooch" },
            { value: "spectrumFilter", label: "Spectrum Filter Glasses" },
            { value: "energyPet", label: "Small Energy Pet Manifestation" },
            { value: "plasmaCuffs", label: "Plasma Wrist Cuffs" },
            { value: "lightBending", label: "Light-Bending Ornaments" },
            { value: "thermalRegulator", label: "Thermal Regulator Ring" },
            { value: "audioVisualizer", label: "Audio Visualizer Accessory" },
            { value: "powerAmulet", label: "Power Source Amulet" }
        ],
        hybridForm: [
            { value: "adaptiveAccessory", label: "Transformation-Adaptive Accessory" },
            { value: "dualHeritage", label: "Dual Heritage Symbols" },
            { value: "medicalMonitor", label: "Medical Monitoring Device" },
            { value: "speciesBalance", label: "Species Balance Regulator" },
            { value: "laboratoryTag", label: "Laboratory Identification Tag" },
            { value: "personalJournal", label: "Personal Experience Journal" },
            { value: "comfortObject", label: "Comfort Object From Origin" },
            { value: "communicationBridge", label: "Dual-Species Communication Bridge" },
            { value: "honoraryMedal", label: "Interspecies Program Honorary Medal" },
            { value: "familyPhoto", label: "Multi-Species Family Photo" },
            { value: "culturalTalisman", label: "Mixed Cultural Talisman" },
            { value: "adaptationTools", label: "Special Adaptation Tools" }
        ]
    },
    
    // Special abilities for each species/gender type
    specialAbilities: {
        humanMale: [
            { value: "atomicKnowledge", label: "Atomic Age Scientific Knowledge" },
            { value: "fiftyVintage", label: "1950s Trivia Expert" },
            { value: "athleticSkill", label: "Star Quarterback Athleticism" },
            { value: "mechanicalMind", label: "Hot Rod Mechanic Skills" },
            { value: "matineeIdol", label: "Matinee Idol Charm" },
            { value: "juniorScientist", label: "Junior Scientist Intelligence" },
            { value: "jukeboxWhisperer", label: "Jukebox Whisperer" },
            { value: "soapboxRacer", label: "Champion Soap Box Racer" },
            { value: "amRadioExpert", label: "Amateur Radio Expert" },
            { value: "debateChamp", label: "Debate Team Champion" }
        ],
        humanFemale: [
            { value: "perfectManners", label: "Perfect 1950s Etiquette" },
            { value: "homeEconomics", label: "Home Economics Champion" },
            { value: "socialButterfly", label: "Social Butterfly Charm" },
            { value: "academicGenius", label: "Academic Genius" },
            { value: "amazingCook", label: "Blue Ribbon Recipe Creator" },
            { value: "rhythmQueen", label: "Dancing Queen Coordination" },
            { value: "breezyElegance", label: "Breezy Elegance" },
            { value: "chemistryWhiz", label: "Chemistry Lab Whiz" },
            { value: "twirlChampion", label: "Baton Twirling Champion" },
            { value: "fashionForward", label: "Fashion Trend Precognition" }
        ],
        spacerMale: [
            { value: "zeroGAdaptation", label: "Perfect Zero-G Adaptation" },
            { value: "radiationResistance", label: "Radiation Resistance" },
            { value: "oxygenEfficiency", label: "Enhanced Oxygen Efficiency" },
            { value: "spaceNavigation", label: "Intuitive Space Navigation" },
            { value: "emergencySurvival", label: "Emergency Vacuum Survival" },
            { value: "engineeringGenius", label: "Engineering Genius" },
            { value: "pilotInstinct", label: "Born Pilot Instincts" },
            { value: "suitlessEndurance", label: "Brief Suitless Endurance" },
            { value: "planetSeeding", label: "Planet Seeding Expertise" },
            { value: "colonyLeadership", label: "Natural Colony Leadership" }
        ],
        spacerFemale: [
            { value: "zeroGGrace", label: "Zero-G Graceful Movement" },
            { value: "radiationAdaptation", label: "Radiation Adaptation" },
            { value: "lifeSupportExpert", label: "Life Support Systems Expert" },
            { value: "stellarNavigation", label: "Stellar Navigation Genius" },
            { value: "colonyDiplomacy", label: "Colony Diplomatic Skills" },
            { value: "hydroponicMaster", label: "Hydroponic Mastery" },
            { value: "vaccineCreator", label: "Vaccine Creator" },
            { value: "vacuumSurvival", label: "Brief Vacuum Survival" },
            { value: "spaceAgeDance", label: "Space Age Dance Innovator" },
            { value: "terraformVision", label: "Terraforming Vision" }
        ],
        alienHumanoid: [
            { value: "telepathy", label: "Limited Telepathy" },
            { value: "environmentAdaptation", label: "Rapid Environment Adaptation" },
            { value: "universalLanguage", label: "Universal Language Comprehension" },
            { value: "extraSensoryAbility", label: "Extra Sensory Perception" },
            { value: "gravitySwitching", label: "Personal Gravity Switching" },
            { value: "molecularAnalysis", label: "Molecular Analysis Touch" },
            { value: "emotionalProjection", label: "Emotional Projection" },
            { value: "physicalMalleability", label: "Physical Form Malleability" },
            { value: "technologyInterface", label: "Natural Technology Interface" },
            { value: "historyAccess", label: "Genetic Memory History Access" }
        ],
        robotBeing: [
            { value: "perfectCalculation", label: "Perfect Mathematical Calculation" },
            { value: "dataStorage", label: "Vast Data Storage" },
            { value: "strengthEnhancement", label: "Mechanical Strength Enhancement" },
            { value: "technicalInterface", label: "Technical Systems Interface" },
            { value: "sensorArray", label: "Enhanced Sensor Array" },
            { value: "voiceModulation", label: "Perfect Voice Modulation" },
            { value: "recordAndReplay", label: "Perfect Record and Replay" },
            { value: "selfRepair", label: "Self-Repair Capabilities" },
            { value: "timeTracking", label: "Atomic Clock Time Tracking" },
            { value: "languageProtocols", label: "Extensive Language Protocols" }
        ],
        energyEntity: [
            { value: "phasing", label: "Matter Phasing" },
            { value: "energyManipulation", label: "Energy Manipulation" },
            { value: "lightGeneration", label: "Light Generation" },
            { value: "electricalInterface", label: "Electrical Systems Interface" },
            { value: "energyReading", label: "Energy Field Reading" },
            { value: "warmthControl", label: "Temperature/Warmth Control" },
            { value: "rapidMovement", label: "Near-Light Speed Movement" },
            { value: "communicationWaves", label: "Direct Radio Wave Communication" },
            { value: "photonicDisplay", label: "Photonic Image Display" },
            { value: "radiationImmunity", label: "Complete Radiation Immunity" }
        ],
        hybridForm: [
            { value: "adaptivePhysiology", label: "Adaptive Physiological Shifts" },
            { value: "dualSpeciesAbility", label: "Best Abilities of Both Species" },
            { value: "uniqueManifestation", label: "Unique Hybrid Manifestation" },
            { value: "translationFacility", label: "Natural Cultural Translation" },
            { value: "unexpectedTalent", label: "Unexpected Hybrid Talent" },
            { value: "medicalAnomaly", label: "Medical Anomaly Advantage" },
            { value: "formShifting", label: "Partial Form Shifting" },
            { value: "consciousnessSharing", label: "Dual Consciousness Sharing" },
            { value: "environmentalMastery", label: "Multiple Environment Mastery" },
            { value: "emotionalRange", label: "Expanded Emotional Range" }
        ]
    },
    
    // Color schemes
    colors: [
        { value: "none", label: "None Selected" },
        { value: "atomicTeal", label: "Atomic Teal & Silver" },
        { value: "rocketRed", label: "Rocket Red & White" },
        { value: "spacePurple", label: "Space Purple & Starburst Yellow" },
        { value: "orbitOrange", label: "Orbit Orange & Cosmic Blue" },
        { value: "alienGreen", label: "Alien Green & Black" },
        { value: "bubblegumPink", label: "Bubblegum Pink & Turquoise" },
        { value: "chromeFuture", label: "Chrome & Retrofuture Red" },
        { value: "nebulaBlue", label: "Nebula Blue & Stellar White" },
        { value: "marsRust", label: "Mars Rust & Moon Gray" },
        { value: "mintChocolate", label: "Mint Green & Chocolate Brown" },
        { value: "goldenAge", label: "Golden Age Yellow & Atom Blue" },
        { value: "cherryChrome", label: "Cherry Red & Chrome Silver" },
        { value: "sunburstOrange", label: "Sunburst Orange & Cream" },
        { value: "plasmaGlow", label: "Plasma Purple & Electric Blue" },
        { value: "galaxySparkle", label: "Galaxy Black & Star Sparkle" },
        { value: "roboticGray", label: "Robotic Gray & Warning Red" },
        { value: "venusianGreen", label: "Venusian Green & Acid Yellow" },
        { value: "jupiterStripes", label: "Jupiter Stripes Pattern" },
        { value: "redPlanet", label: "Red Planet & Oxygen Blue" },
        { value: "saturnRings", label: "Saturn Gold & Ring Silver" },
        { value: "meteorBlack", label: "Meteor Black & Flame Orange" },
        { value: "milkyWay", label: "Milky Way Swirl Pattern" },
        { value: "moondustSilver", label: "Moondust Silver & Earth Blue" },
        { value: "comicBookPrimary", label: "Comic Book Primary Colors" }
    ],
    
    // Complete character archetypes
    archetypes: {
        humanMale: [
            { 
                value: "varsityHero", 
                label: "All-American Varsity Hero",
                components: {
                    personality: "allAmericanBoy",
                    hairstyle: "crewCut",
                    fashion: "varsityJacket",
                    outfit: "varsityComplete",
                    footwear: "basketballSneakers",
                    accessories: ["varsityPatch", "classRing", "lettermanPatch"],
                    abilities: ["athleticSkill", "matineeIdol"]
                }
            },
            { 
                value: "atomicNerd", 
                label: "Atomic Age Science Nerd",
                components: {
                    personality: "atomicNerd",
                    hairstyle: "sidePartFlat",
                    fashion: "bowTieNerd",
                    outfit: "scienceClass",
                    footwear: "oxfords",
                    accessories: ["pocketProtector", "hornRimGlasses", "tieClasp"],
                    abilities: ["juniorScientist", "atomicKnowledge"]
                }
            },
            { 
                value: "greaser", 
                label: "Cosmic Greaser",
                components: {
                    personality: "coolCat",
                    hairstyle: "pompadour",
                    fashion: "greaser",
                    outfit: "greaser",
                    footwear: "chucks",
                    accessories: ["pocketComb", "cigarettePack", "transistorRadio"],
                    abilities: ["mechanicalMind", "jukeboxWhisperer"]
                }
            },
            { 
                value: "hamRadioBoy", 
                label: "Ham Radio Club President",
                components: {
                    personality: "overachiever",
                    hairstyle: "wavyShort",
                    fashion: "casualFifties",
                    outfit: "radioClub",
                    footwear: "loafers",
                    accessories: ["transistorRadio", "schoolPennant", "hornRimGlasses"],
                    abilities: ["amRadioExpert", "atomicKnowledge"]
                }
            },
            { 
                value: "beatProfessor", 
                label: "Beatnik Professor's Son",
                components: {
                    personality: "beatnikGuy",
                    hairstyle: "slickedBack",
                    fashion: "beatnikTurtleneck",
                    outfit: "promFormal",
                    footwear: "dressBoots",
                    accessories: ["hornRimGlasses", "pocketProtector", "bookSatchel"],
                    abilities: ["debateChamp", "fiftyVintage"]
                }
            }
        ],
        humanFemale: [
            { 
                value: "cheerCaptain", 
                label: "Cheerleader Captain",
                components: {
                    personality: "socialButterfly",
                    hairstyle: "ponytail",
                    fashion: "poodleSkirt",
                    outfit: "cheerSquad",
                    footwear: "marySue",
                    accessories: ["pearlNecklace", "ankletSock", "circlePin"],
                    abilities: ["rhythmQueen", "socialButterfly"]
                }
            },
            { 
                value: "scienceGirl", 
                label: "Science Girl Genius",
                components: {
                    personality: "atomicGenius",
                    hairstyle: "flippedEnds",
                    fashion: "fullSkirt",
                    outfit: "scienceGirl",
                    footwear: "loafersFemale",
                    accessories: ["catEyeGlasses", "brooch", "sciencePins"],
                    abilities: ["chemistryWhiz", "academicGenius"]
                }
            },
            { 
                value: "waitressWit", 
                label: "Diner Waitress with Wit",
                components: {
                    personality: "classJokester",
                    hairstyle: "pageboy",
                    fashion: "capriPants",
                    outfit: "waitress",
                    footwear: "keds",
                    accessories: ["notepad", "pearlNecklace", "waitressCap"],
                    abilities: ["amazingCook", "socialButterfly"]
                }
            },
            { 
                value: "promQueen", 
                label: "Prom Queen Candidate",
                components: {
                    personality: "queenBee",
                    hairstyle: "bouffant",
                    fashion: "fullSkirt",
                    outfit: "promDress",
                    footwear: "ankleStraps",
                    accessories: ["pearlNecklace", "whiteGloves", "compactMirror"],
                    abilities: ["breezyElegance", "socialButterfly"]
                }
            },
            { 
                value: "beatnikGirl", 
                label: "Beatnik Coffee Shop Girl",
                components: {
                    personality: "beatnikChick",
                    hairstyle: "pixieCut",
                    fashion: "beatnikStyle",
                    outfit: "schoolDance",
                    footwear: "balletFlats",
                    accessories: ["catEyeGlasses", "headscarf", "bookSatchel"],
                    abilities: ["academicGenius", "breezyElegance"]
                }
            }
        ],
        spacerMale: [
            { 
                value: "colonyKid", 
                label: "Space Colony Kid",
                components: {
                    personality: "earthCurious",
                    hairstyle: "utilitarian",
                    fashion: "utilityJumpsuit",
                    outfit: "colonyJumpsuit",
                    footwear: "utilityBoots",
                    accessories: ["oxygenMeter", "colonySash", "earthSouvenir"],
                    abilities: ["zeroGAdaptation", "engineeringGenius"]
                }
            },
            { 
                value: "militaryProgram", 
                label: "Space Military Cadet",
                components: {
                    personality: "spaceVeteran",
                    hairstyle: "militaryPrecision",
                    fashion: "spaceMilitary",
                    outfit: "spaceMilitary",
                    footwear: "pilotBoots",
                    accessories: ["communicationDevice", "ratingBadges", "securityTag"],
                    abilities: ["spaceNavigation", "emergencySurvival"]
                }
            },
            { 
                value: "stellarAthlete", 
                label: "Stellar Athletics Champion",
                components: {
                    personality: "stellarAthlete",
                    hairstyle: "gravityDefying",
                    fashion: "earthVintage",
                    outfit: "spaceSport",
                    footwear: "spaceAthletic",
                    accessories: ["sectorBadge", "emergencyKit", "communicationDevice"],
                    abilities: ["zeroGAdaptation", "athleticSkill"]
                }
            },
            { 
                value: "rocketPilot", 
                label: "Hotshot Rocket Pilot",
                components: {
                    personality: "spaceVeteran",
                    hairstyle: "windTunnel",
                    fashion: "pressureSuit",
                    outfit: "pilotSuit",
                    footwear: "pilotBoots",
                    accessories: ["oxygenMeter", "ratingBadges", "securityTag"],
                    abilities: ["pilotInstinct", "spaceNavigation"]
                }
            },
            { 
                value: "scienceOfficer", 
                label: "Junior Science Officer",
                components: {
                    personality: "spaceNerd",
                    hairstyle: "earthHomage",
                    fashion: "colonyEngineering",
                    outfit: "scienceTeam",
                    footwear: "magnetBoots",
                    accessories: ["sectorMap", "communicationDevice", "securityTag"],
                    abilities: ["molecularAnalysis", "planetSeeding"]
                }
            }
        ],
        spacerFemale: [
            { 
                value: "colonyGirl", 
                label: "Space Colony Girl",
                components: {
                    personality: "earthFascinated",
                    hairstyle: "practicalBob",
                    fashion: "colonyJumpsuit",
                    outfit: "colonyUtility",
                    footwear: "colonySport",
                    accessories: ["oxygenJewelry", "colonyScarf", "earthSouvenir"],
                    abilities: ["zeroGGrace", "hydroponicMaster"]
                }
            },
            { 
                value: "femalepilot", 
                label: "Female Colony Pilot",
                components: {
                    personality: "spaceExplorer",
                    hairstyle: "vacuumProof",
                    fashion: "oxygenStyled",
                    outfit: "pilotJumpsuit",
                    footwear: "magneticFemale",
                    accessories: ["communicator", "lightHelmet", "sectorPin"],
                    abilities: ["stellarNavigation", "vacuumSurvival"]
                }
            },
            { 
                value: "scienceWiz", 
                label: "Colony Science Prodigy",
                components: {
                    personality: "scienceWhiz",
                    hairstyle: "utilityUpdo",
                    fashion: "scienceTeam",
                    outfit: "labCoat",
                    footwear: "utilitySlip",
                    accessories: ["radiationBadge", "sectorPin", "filtrationCharm"],
                    abilities: ["vaccineCreator", "lifeSupportExpert"]
                }
            },
            { 
                value: "officerGal", 
                label: "Female Junior Officer",
                components: {
                    personality: "colonyStar",
                    hairstyle: "colonyRegulation",
                    fashion: "venusMilitary",
                    outfit: "officerUniform",
                    footwear: "spaceDeck",
                    accessories: ["communicator", "sectorPin", "ratingBadges"],
                    abilities: ["colonyDiplomacy", "emergencySurvival"]
                }
            },
            { 
                value: "terraformer", 
                label: "Terraforming Specialist",
                components: {
                    personality: "frontierGal",
                    hairstyle: "sectorStyle",
                    fashion: "terraformChic",
                    outfit: "terraformCrew",
                    footwear: "utilitySlip",
                    accessories: ["terraformSample", "filtrationCharm", "moonRock"],
                    abilities: ["terraformVision", "environmentalMastery"]
                }
            }
        ],
        alienHumanoid: [
            { 
                value: "exchangeStudent", 
                label: "Alien Exchange Student",
                components: {
                    personality: "confusedByEarth",
                    hairstyle: "alienPrecision",
                    fashion: "adaptedEarth",
                    outfit: "adaptedEarthSchool",
                    footwear: "adaptedEarth",
                    accessories: ["translationDevice", "culturalSymbol", "earthCollection"],
                    abilities: ["universalLanguage", "extraSensoryAbility"]
                }
            },
            { 
                value: "diplomaticEnvoy", 
                label: "Young Diplomatic Envoy",
                components: {
                    personality: "diplomaticMission",
                    hairstyle: "feathers",
                    fashion: "diplomaticRegalia",
                    outfit: "diplomaticUniform",
                    footwear: "environmentRegulated",
                    accessories: ["translationDevice", "diplomaticInsignia", "atmosphereRegulator"],
                    abilities: ["telepathy", "emotionalProjection"]
                }
            },
            { 
                value: "scientificObserver", 
                label: "Scientific Observer",
                components: {
                    personality: "culturalObserver",
                    hairstyle: "crystalline",
                    fashion: "atmosphericSuit",
                    outfit: "environmentSuit",
                    footwear: "environmentRegulated",
                    accessories: ["sensorArray", "translationDevice", "dataFeed"],
                    abilities: ["molecularAnalysis", "universalLanguage"]
                }
            },
            { 
                value: "refugeeKid", 
                label: "Planetary Refugee Kid",
                components: {
                    personality: "earthMediaFan",
                    hairstyle: "colorChanging",
                    fashion: "adaptedEarth",
                    outfit: "adaptedEarthSchool",
                    footwear: "adaptedEarth",
                    accessories: ["speciesKeepsake", "atmosphereRegulator", "translationDevice"],
                    abilities: ["environmentAdaptation", "historyAccess"]
                }
            },
            { 
                value: "royalExile", 
                label: "Exiled Alien Royal",
                components: {
                    personality: "exiledRoyal",
                    hairstyle: "glowingStrands",
                    fashion: "diplomaticRegalia",
                    outfit: "royalRegalia",
                    footwear: "hovering",
                    accessories: ["culturalSymbol", "communicationArray", "trophyDisplay"],
                    abilities: ["emotionalProjection", "gravitySwitching"]
                }
            }
        ],
        robotBeing: [
            { 
                value: "schoolHelper", 
                label: "School Helper Robot",
                components: {
                    personality: "serviceDroid",
                    hairstyle: "chromeTop",
                    fashion: "uniformPlating",
                    outfit: "serviceBot",
                    footwear: "serviceStyle",
                    accessories: ["glowingElements", "modelIdentifier", "extraLimb"],
                    abilities: ["perfectCalculation", "dataStorage"]
                }
            },
            { 
                value: "sentientComputer", 
                label: "Sentient Computer Friend",
                components: {
                    personality: "logicalComputer",
                    hairstyle: "antennaArray",
                    fashion: "retroCasing",
                    outfit: "militaryUnit",
                    footwear: "integratedFeet",
                    accessories: ["dataFeed", "speakerGrille", "visibleGears"],
                    abilities: ["technicalInterface", "perfectCalculation"]
                }
            },
            { 
                value: "companionModel", 
                label: "Companion Model Robot",
                components: {
                    personality: "emotionalAI",
                    hairstyle: "fiberOptic",
                    fashion: "humanClothed",
                    outfit: "companionModel",
                    footwear: "humanImitation",
                    accessories: ["humanAccessories", "ownerTag", "glowingElements"],
                    abilities: ["voiceModulation", "emotionalRange"]
                }
            },
            { 
                value: "retiredMilitary", 
                label: "Converted Military Unit",
                components: {
                    personality: "militaryConversion",
                    hairstyle: "wireMesh",
                    fashion: "utilitarian",
                    outfit: "militaryUnit",
                    footwear: "multiTerrain",
                    accessories: ["portableTool", "sensorArray", "speakerGrille"],
                    abilities: ["strengthEnhancement", "sensorArray"]
                }
            },
            { 
                value: "vintageBot", 
                label: "Vintage Robot Model",
                components: {
                    personality: "obsoleteModel",
                    hairstyle: "antennaArray",
                    fashion: "vintageAdaptation",
                    outfit: "antiqueMechanical",
                    footwear: "vintageFinish",
                    accessories: ["vintageGauge", "accessPanel", "visibleGears"],
                    abilities: ["selfRepair", "recordAndReplay"]
                }
            }
        ],
        energyEntity: [
            { 
                value: "containedStudent", 
                label: "Contained Energy Student",
                components: {
                    personality: "curiousEnergy",
                    hairstyle: "flamingAura",
                    fashion: "containmentSuit",
                    outfit: "containmentClassic",
                    footwear: "containedLower",
                    accessories: ["containmentJewelry", "frequencyModulator", "spectrumFilter"],
                    abilities: ["energyManipulation", "lightGeneration"]
                }
            },
            { 
                value: "starCore", 
                label: "Star Core Exchange Visitor",
                components: {
                    personality: "ancientBeing",
                    hairstyle: "energyHalo",
                    fashion: "projectionField",
                    outfit: "starCoreEssence",
                    footwear: "energyTrails",
                    accessories: ["energyOrbs", "fieldStabilizer", "powerAmulet"],
                    abilities: ["warmthControl", "radiationImmunity"]
                }
            },
            { 
                value: "plasmaPerformer", 
                label: "Plasma Entertainment Performer",
                components: {
                    personality: "playfulSpark",
                    hairstyle: "plasmaStrands",
                    fashion: "colorShift",
                    outfit: "energyFormalwear",
                    footwear: "flameBoots",
                    accessories: ["audioVisualizer", "energyPet", "lightBending"],
                    abilities: ["photonicDisplay", "energyManipulation"]
                }
            },
            { 
                value: "electricalEntity", 
                label: "Electrical Entity",
                components: {
                    personality: "loneExplorer",
                    hairstyle: "staticElectricity",
                    fashion: "containmentSuit",
                    outfit: "spectrumShift",
                    footwear: "hoveringFeet",
                    accessories: ["thermalRegulator", "frequencyModulator", "plasmaCuffs"],
                    abilities: ["electricalInterface", "rapidMovement"]
                }
            },
            { 
                value: "lightStudent", 
                label: "Light Spectrum Student",
                components: {
                    personality: "stellarStudent",
                    hairstyle: "lightSpectrum",
                    fashion: "earthDress",
                    outfit: "plasmaSchoolUniform",
                    footwear: "manifestShoes",
                    accessories: ["energyPet", "containmentJewelry", "crystallineFocus"],
                    abilities: ["energyReading", "phasing"]
                }
            }
        ],
        hybridForm: [
            { 
                value: "labExperiment", 
                label: "Laboratory Experiment Success",
                components: {
                    personality: "experimentSurvivor",
                    hairstyle: "mixedTexture",
                    fashion: "specialNeeds",
                    outfit: "laboratorySpecial",
                    footwear: "specialAccommodation",
                    accessories: ["medicalMonitor", "laboratoryTag", "adaptationTools"],
                    abilities: ["adaptivePhysiology", "unexpectedTalent"]
                }
            },
            { 
                value: "peaceTreaty", 
                label: "Peace Treaty Child",
                components: {
                    personality: "peaceSymbol",
                    hairstyle: "halfHuman",
                    fashion: "dualInfluence",
                    outfit: "ceremonialFusion",
                    footwear: "dualPurpose",
                    accessories: ["dualHeritage", "honoraryMedal", "culturalTalisman"],
                    abilities: ["translationFacility", "dualSpeciesAbility"]
                }
            },
            { 
                value: "organTechFusion", 
                label: "Organic-Tech Fusion",
                components: {
                    personality: "bestOfBoth",
                    hairstyle: "partiallyMetal",
                    fashion: "organTech",
                    outfit: "biologicalTech",
                    footwear: "technoPrimal",
                    accessories: ["speciesBalance", "communicationBridge", "medicalMonitor"],
                    abilities: ["technologyInterface", "uniqueManifestation"]
                }
            },
            { 
                value: "adaptiveShifter", 
                label: "Adaptive Form Shifter",
                components: {
                    personality: "adapting",
                    hairstyle: "adaptiveStyle",
                    fashion: "adaptiveClothing",
                    outfit: "adaptiveFull",
                    footwear: "adaptiveFootwear",
                    accessories: ["adaptiveAccessory", "speciesBalance", "personalJournal"],
                    abilities: ["formShifting", "environmentalMastery"]
                }
            },
            { 
                value: "twoCultures", 
                label: "Two-World Cultural Ambassador",
                components: {
                    personality: "cultureBridge",
                    hairstyle: "traditionalFusion",
                    fashion: "traditionalFusion",
                    outfit: "dualWorldFormal",
                    footwear: "earthAlienFusion",
                    accessories: ["communicationBridge", "familyPhoto", "culturalTalisman"],
                    abilities: ["translationFacility", "consciousnessSharing"]
                }
            }
        ]
    }
};