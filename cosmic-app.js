// Main application logic for Cosmic Americana Character Generator
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const speciesTypeSelect = document.getElementById('speciesType');
    const archetypesSelect = document.getElementById('archetypes');
    const personalityTypeSelect = document.getElementById('personalityType');
    const hairstyleSelect = document.getElementById('hairstyle');
    const fashionStyleSelect = document.getElementById('fashionStyle');
    const outfitTypeSelect = document.getElementById('outfitType');
    const footwearSelect = document.getElementById('footwear');
    const accessoryContainer = document.getElementById('accessoryContainer');
    const featureContainer = document.getElementById('featureContainer');
    const mainColorSelect = document.getElementById('mainColor');
    const secondaryColorSelect = document.getElementById('secondaryColor');
    const accentColorSelect = document.getElementById('accentColor');
    const generateBtn = document.getElementById('generateBtn');
    const randomizeBtn = document.getElementById('randomizeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const autoColorBtn = document.getElementById('autoColorBtn');
    const characterDescription = document.getElementById('characterDescription');
    const visualElements = document.getElementById('visualElements');
    
    // Maximum number of accessories and abilities allowed
    const MAX_ACCESSORIES = 3;
    const MAX_FEATURES = 2;
    
    // Initialize form
    initializeForm();
    
    // Event listeners
    speciesTypeSelect.addEventListener('change', handleSpeciesTypeChange);
    archetypesSelect.addEventListener('change', handleArchetypeChange);
    generateBtn.addEventListener('click', generateCharacter);
    randomizeBtn.addEventListener('click', randomizeAll);
    resetBtn.addEventListener('click', resetForm);
    autoColorBtn.addEventListener('click', autoPickColorScheme);
    
    // Initialize the form with default options
    function initializeForm() {
        // Populate species type select
        populateSelect(speciesTypeSelect, CONFIG.speciesTypes);
        
        // Populate all color selects
        populateSelect(mainColorSelect, CONFIG.colors);
        populateSelect(secondaryColorSelect, CONFIG.colors);
        populateSelect(accentColorSelect, CONFIG.colors);
        
        // Clear output areas
        characterDescription.textContent = 'Your cosmic character description will appear here after you generate a character.';
        visualElements.innerHTML = '';
        
        // Add some decorative atomic orbits to the page
        addAtomicOrbits();
    }
    
    // Handle species type change
    function handleSpeciesTypeChange() {
        const species = speciesTypeSelect.value;
        
        if (!species) return;
        
        // Update archetypes options
        populateSelect(archetypesSelect, CONFIG.archetypes[species], true);
        
        // Update personality type options
        populateSelect(personalityTypeSelect, CONFIG.personalityTypes[species]);
        
        // Update hairstyle options
        populateSelect(hairstyleSelect, CONFIG.hairstyles[species]);
        
        // Update fashion style options
        populateSelect(fashionStyleSelect, CONFIG.fashionStyles[species]);
        
        // Update outfit type options
        populateSelect(outfitTypeSelect, CONFIG.outfitTypes[species]);
        
        // Update footwear options
        populateSelect(footwearSelect, CONFIG.footwear[species]);
        
        // Update accessories
        populateAccessories(species);
        
        // Update special abilities
        populateSpecialAbilities(species);
    }
    
    // Handle archetype selection
    function handleArchetypeChange() {
        const species = speciesTypeSelect.value;
        const archetype = archetypesSelect.value;
        
        if (!species || !archetype) return;
        
        // Find selected archetype
        const selectedArchetype = CONFIG.archetypes[species].find(a => a.value === archetype);
        if (!selectedArchetype) return;
        
        // Apply archetype components to form
        const components = selectedArchetype.components;
        
        if (components.personality) {
            personalityTypeSelect.value = components.personality;
        }
        
        if (components.hairstyle) {
            hairstyleSelect.value = components.hairstyle;
        }
        
        if (components.fashion) {
            fashionStyleSelect.value = components.fashion;
        }
        
        if (components.outfit) {
            outfitTypeSelect.value = components.outfit;
        }
        
        if (components.footwear) {
            footwearSelect.value = components.footwear;
        }
        
        // Handle accessories
        const checkboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the ones in the archetype
        if (components.accessories && components.accessories.length > 0) {
            components.accessories.forEach(accessory => {
                const checkbox = document.getElementById('accessory-' + accessory);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
        
        // Handle special abilities
        const abilityCheckboxes = featureContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all
        abilityCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the ones in the archetype
        if (components.abilities && components.abilities.length > 0) {
            components.abilities.forEach(ability => {
                const checkbox = document.getElementById('ability-' + ability);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
        
        // Generate character with the archetype
        generateCharacter();
    }
    
    // Helper function to populate a select element with options
    function populateSelect(selectElement, options, isArchetype = false) {
        // Clear existing options
        selectElement.innerHTML = '';
        
        // Add a default empty option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        
        if (isArchetype) {
            defaultOption.textContent = 'Create your own custom character';
        } else {
            defaultOption.textContent = 'Select an option';
        }
        
        selectElement.appendChild(defaultOption);
        
        // Add all options from config
        if (options) {
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                selectElement.appendChild(optionElement);
            });
        }
    }
    
    // Populate accessories with checkboxes
    function populateAccessories(species) {
        // Clear existing checkboxes
        accessoryContainer.innerHTML = '';
        
        // Add all accessories as checkboxes
        if (!CONFIG.accessories[species]) return;
        
        CONFIG.accessories[species].forEach(accessory => {
            const accessoryItem = document.createElement('div');
            accessoryItem.className = 'accessory-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = accessory.value;
            checkbox.id = 'accessory-' + accessory.value;
            
            // Add event listener to enforce maximum selections
            checkbox.addEventListener('change', function() {
                const checkedBoxes = accessoryContainer.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedBoxes.length > MAX_ACCESSORIES) {
                    this.checked = false;
                    alert(`You can only select up to ${MAX_ACCESSORIES} accessories.`);
                }
            });
            
            const label = document.createElement('label');
            label.textContent = accessory.label;
            label.setAttribute('for', 'accessory-' + accessory.value);
            
            accessoryItem.appendChild(checkbox);
            accessoryItem.appendChild(label);
            accessoryContainer.appendChild(accessoryItem);
        });
    }
    
    // Populate special abilities with checkboxes
    function populateSpecialAbilities(species) {
        // Clear existing checkboxes
        featureContainer.innerHTML = '';
        
        // Add all special abilities as checkboxes
        if (!CONFIG.specialAbilities[species]) return;
        
        CONFIG.specialAbilities[species].forEach(ability => {
            const featureItem = document.createElement('div');
            featureItem.className = 'feature-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = ability.value;
            checkbox.id = 'ability-' + ability.value;
            
            // Add event listener to enforce maximum selections
            checkbox.addEventListener('change', function() {
                const checkedBoxes = featureContainer.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedBoxes.length > MAX_FEATURES) {
                    this.checked = false;
                    alert(`You can only select up to ${MAX_FEATURES} special abilities.`);
                }
            });
            
            const label = document.createElement('label');
            label.textContent = ability.label;
            label.setAttribute('for', 'ability-' + ability.value);
            
            featureItem.appendChild(checkbox);
            featureItem.appendChild(label);
            featureContainer.appendChild(featureItem);
        });
    }

    // Generate a cosmic character name
    function generateCharacterName() {
        const species = speciesTypeSelect.value;
        
        // Use the generator from descriptions.js
        if (window.DESCRIPTIONS && DESCRIPTIONS.generateCharacterName) {
            return DESCRIPTIONS.generateCharacterName(species);
        }
        
        // Fallback generator
        const firstName = "Cosmic";
        const lastName = "Americana";
        
        return firstName + " " + lastName;
    }
    
    // Generate character based on selected options
    function generateCharacter() {
        const species = speciesTypeSelect.value;
        const personality = personalityTypeSelect.value;
        const hairstyle = hairstyleSelect.value;
        const fashion = fashionStyleSelect.value;
        const outfit = outfitTypeSelect.value;
        const footwear = footwearSelect.value;
        const mainColor = mainColorSelect.value;
        const secondaryColor = secondaryColorSelect.value;
        const accentColor = accentColorSelect.value;
        
        // Get selected accessories
        const selectedAccessories = [];
        const accessoryCheckboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]:checked');
        accessoryCheckboxes.forEach(checkbox => {
            selectedAccessories.push(checkbox.value);
        });
        
        // Get selected special abilities
        const selectedAbilities = [];
        const abilityCheckboxes = featureContainer.querySelectorAll('input[type="checkbox"]:checked');
        abilityCheckboxes.forEach(checkbox => {
            selectedAbilities.push(checkbox.value);
        });
        
        // Validate that required fields are filled
        if (!species || !personality || !hairstyle) {
            alert('Please select at least a species type, personality type, and hairstyle!');
            return;
        }
        
        // Build character object for description generation
        const character = {
            species,
            personality,
            hairstyle,
            fashion,
            outfit,
            footwear,
            accessories: selectedAccessories,
            abilities: selectedAbilities
        };
        
        // Generate character name
        const characterName = generateCharacterName();
        
        // Generate description using the function from descriptions.js
        let description = "";
        if (window.DESCRIPTIONS && DESCRIPTIONS.generateCharacterDescription) {
            description = DESCRIPTIONS.generateCharacterDescription(character);
        } else {
            description = "A fabulously cosmic character with retrofuturistic charm!";
        }
        
        // Display name and description
        characterDescription.innerHTML = `<div class="character-name">${characterName}</div><p>${description}</p>`;
        
        // Create list of visual elements
        visualElements.innerHTML = '';
        
        // Helper function to add a visual element if selected
        function addVisualElement(label, value, collection) {
            if (value) {
                const item = document.createElement('li');
                const matchingOption = collection.find(opt => opt.value === value);
                item.textContent = `${label}: ${matchingOption ? matchingOption.label : value}`;
                visualElements.appendChild(item);
            }
        }
        
        // Check if an archetype was selected
        const archetypeValue = archetypesSelect.value;
        if (archetypeValue) {
            const archetype = CONFIG.archetypes[species].find(a => a.value === archetypeValue);
            if (archetype) {
                const archetypeItem = document.createElement('li');
                archetypeItem.textContent = `Archetype: ${archetype.label}`;
                visualElements.appendChild(archetypeItem);
            }
        }
        
        // Add all selected elements to the list
        addVisualElement('Species Type', species, CONFIG.speciesTypes);
        addVisualElement('Personality Type', personality, CONFIG.personalityTypes[species]);
        addVisualElement('Hairstyle', hairstyle, CONFIG.hairstyles[species]);
        
        if (outfit) {
            addVisualElement('Complete Outfit', outfit, CONFIG.outfitTypes[species]);
        } else {
            addVisualElement('Fashion Style', fashion, CONFIG.fashionStyles[species]);
        }
        
        addVisualElement('Footwear', footwear, CONFIG.footwear[species]);
        
        // Add colors if selected
        addVisualElement('Main Color', mainColor, CONFIG.colors);
        addVisualElement('Secondary Color', secondaryColor, CONFIG.colors);
        addVisualElement('Accent Color', accentColor, CONFIG.colors);
        
        // Add accessories if selected
        if (selectedAccessories.length > 0) {
            const accessoriesItem = document.createElement('li');
            accessoriesItem.textContent = 'Accessories: ';
            
            const accessoryLabels = selectedAccessories.map(value => {
                const matchingAccessory = CONFIG.accessories[species].find(acc => acc.value === value);
                return matchingAccessory ? matchingAccessory.label : value;
            });
            
            accessoriesItem.textContent += accessoryLabels.join(', ');
            visualElements.appendChild(accessoriesItem);
        }
        
        // Add special abilities if selected
        if (selectedAbilities.length > 0) {
            const abilitiesItem = document.createElement('li');
            abilitiesItem.textContent = 'Special Abilities: ';
            
            const abilityLabels = selectedAbilities.map(value => {
                const matchingAbility = CONFIG.specialAbilities[species].find(ab => ab.value === value);
                return matchingAbility ? matchingAbility.label : value;
            });
            
            abilitiesItem.textContent += abilityLabels.join(', ');
            visualElements.appendChild(abilitiesItem);
        }
        
        // Play a fun sound effect
        playGenerateSound();
    }
    
    // Reset the form
    function resetForm() {
        // Reset all select elements
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Reset all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear character display
        characterDescription.textContent = 'Your cosmic character description will appear here after you generate a character.';
        visualElements.innerHTML = '';
        
        // Play reset sound
        playClickSound();
    }
    
    // Randomize all selections
    function randomizeAll() {
        // Select random species type
        const species = getRandomOption(speciesTypeSelect);
        speciesTypeSelect.value = species;
        
        // Update options based on species first
        handleSpeciesTypeChange();
        
        // Clear the archetype selection
        archetypesSelect.value = '';
        
        // Randomize all the selections
        personalityTypeSelect.value = getRandomOption(personalityTypeSelect);
        hairstyleSelect.value = getRandomOption(hairstyleSelect);
        
        // Randomly choose between outfit or fashion style
        if (Math.random() > 0.5) {
            outfitTypeSelect.value = getRandomOption(outfitTypeSelect);
            fashionStyleSelect.value = '';
        } else {
            fashionStyleSelect.value = getRandomOption(fashionStyleSelect);
            outfitTypeSelect.value = '';
        }
        
        footwearSelect.value = getRandomOption(footwearSelect);
        
        // Randomize colors
        mainColorSelect.value = getRandomOption(mainColorSelect);
        secondaryColorSelect.value = getRandomOption(secondaryColorSelect);
        accentColorSelect.value = getRandomOption(accentColorSelect);
        
        // Randomize accessories
        const accessoryCheckboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all first
        accessoryCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Select random number of accessories
        const numAccessories = Math.floor(Math.random() * (MAX_ACCESSORIES + 1));
        const shuffledAccessories = Array.from(accessoryCheckboxes).sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < numAccessories && i < shuffledAccessories.length; i++) {
            shuffledAccessories[i].checked = true;
        }
        
        // Randomize special abilities
        const abilityCheckboxes = featureContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all first
        abilityCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Select random number of abilities
        const numAbilities = Math.floor(Math.random() * (MAX_FEATURES + 1));
        const shuffledAbilities = Array.from(abilityCheckboxes).sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < numAbilities && i < shuffledAbilities.length; i++) {
            shuffledAbilities[i].checked = true;
        }
        
        // Generate character with random selections
        generateCharacter();
        
        // Play randomize sound
        playClickSound();
    }
    
    // Helper function to get a random option from a select element
    function getRandomOption(selectElement) {
        // Skip the first option (assumed to be the default empty option)
        const options = Array.from(selectElement.options).slice(1);
        if (options.length === 0) return '';
        
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex].value;
    }
    
    // Auto pick Retrofuture color scheme
    function autoPickColorScheme() {
        // Define retrofuture color scheme combinations
        const colorSchemes = [
            { main: "atomicTeal", secondary: "rocketRed", accent: "spacePurple" },
            { main: "rocketRed", secondary: "chromeFuture", accent: "starYellow" },
            { main: "nebulaBlue", secondary: "plasmaGlow", accent: "orbitOrange" },
            { main: "alienGreen", secondary: "spacePurple", accent: "chromeFuture" },
            { main: "orbitOrange", secondary: "alienGreen", accent: "nebulaBlue" },
            { main: "bubblegumPink", secondary: "atomicTeal", accent: "chromeFuture" },
            { main: "spacePurple", secondary: "atomicTeal", accent: "goldenAge" },
            { main: "chromeFuture", secondary: "rocketRed", accent: "atomicTeal" },
            { main: "cherryChrome", secondary: "spacePurple", accent: "chromeFuture" },
            { main: "goldenAge", secondary: "atomicTeal", accent: "rocketRed" },
            { main: "sunburstOrange", secondary: "nebulaBlue", accent: "alienGreen" },
            { main: "marsRust", secondary: "chromeFuture", accent: "alienGreen" },
            { main: "roboticGray", secondary: "atomicTeal", accent: "rocketRed" },
            { main: "galaxySparkle", secondary: "plasmaGlow", accent: "goldenAge" },
            { main: "comicBookPrimary", secondary: "atomicTeal", accent: "starYellow" }
        ];
        
        // Pick a random color scheme
        const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
        
        // Apply to select elements
        if (randomScheme.main) {
            const mainOption = Array.from(mainColorSelect.options).find(opt => opt.value === randomScheme.main);
            if (mainOption) mainColorSelect.value = randomScheme.main;
        }
        
        if (randomScheme.secondary) {
            const secondaryOption = Array.from(secondaryColorSelect.options).find(opt => opt.value === randomScheme.secondary);
            if (secondaryOption) secondaryColorSelect.value = randomScheme.secondary;
        }
        
        if (randomScheme.accent) {
            const accentOption = Array.from(accentColorSelect.options).find(opt => opt.value === randomScheme.accent);
            if (accentOption) accentColorSelect.value = randomScheme.accent;
        }
        
        // Play color selection sound
        playClickSound();
    }
    
    // Add atomic age decorative elements
    function addAtomicOrbits() {
        const container = document.querySelector('body');
        
        // Create 4 atomic orbits
        for (let i = 0; i < 4; i++) {
            const orbit = document.createElement('div');
            orbit.className = 'atomic-orbit';
            
            // Position randomly around the page
            orbit.style.top = `${Math.random() * 80 + 10}%`;
            orbit.style.left = `${Math.random() * 80 + 10}%`;
            orbit.style.animationDelay = `${i * 0.5}s`;
            
            container.appendChild(orbit);
        }
        
        // Create flying space elements
        const spaceElements = ['🚀', '⭐', '🛸', '☄️', '🪐'];
        
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.className = 'space-element';
            element.textContent = spaceElements[Math.floor(Math.random() * spaceElements.length)];
            
            // Random positioning
            element.style.top = `${10 + (i * 20)}%`;
            element.style.left = '-50px';
            element.style.animationDuration = `${20 + Math.random() * 10}s`;
            element.style.animationDelay = `${i * 2}s`;
            element.style.fontSize = `${20 + Math.random() * 20}px`;
            element.style.opacity = '0.6';
            
            container.appendChild(element);
        }
    }
    
    // Sound effects
    function playClickSound() {
        // Simple click sound (could be implemented with an actual audio file)
        try {
            const sound = new Audio('data:audio/wav;base64,UklGRl9vT19JRkZXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + Math.random().toString(36).substring(2, 8));
            sound.volume = 0.2;
            sound.play().catch(e => {
                // Ignore errors, as some browsers require user interaction first
            });
        } catch (e) {
            // Silent fallback if audio is not supported
        }
    }
    
    function playGenerateSound() {
        // More elaborate sound for character generation
        try {
            const sound = new Audio('data:audio/wav;base64,UklGRl9vT19JRkZXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + Math.random().toString(36).substring(2, 15));
            sound.volume = 0.3;
            sound.play().catch(e => {
                // Ignore errors, as some browsers require user interaction first
            });
        } catch (e) {
            // Silent fallback if audio is not supported
        }
    }
    
    // Add hover sound effects to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', function() {
            try {
                const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19JRkZXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + Math.random().toString(36).substring(2, 10));
                hoverSound.volume = 0.1;
                hoverSound.play().catch(e => {
                    // Ignore errors, as some browsers require user interaction first
                });
            } catch (e) {
                // Silent fallback
            }
        });
    });
});