// Main application logic for Cosmic Americana Character Generator
document.addEventListener('DOMContentLoaded', function() {
    // Track user selections
    const characterSelections = {};

    // Sections that allow multiple selections (up to 3)
    const multiSelectSections = [4, 5, 6, 7, 9, 10];
    
    // Generate sections UI
    generateSectionsUI();
    
    // Add event listeners
    document.getElementById('generate-btn').addEventListener('click', generateCharacter);
    document.getElementById('reset-btn').addEventListener('click', resetForm);
    
    // Function to generate the UI for all sections
    function generateSectionsUI() {
        const sectionsContainer = document.getElementById('sections-container');
        
        sectionConfig.forEach(section => {
            // Create section container
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'section';
            sectionDiv.id = `section-${section.id}`;
            
            // Add section title
            const sectionTitle = document.createElement('h2');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = `${section.id}. ${section.title}`;
            sectionDiv.appendChild(sectionTitle);

            // Add multi-select instructions if applicable
            if (multiSelectSections.includes(section.id)) {
                const instructions = document.createElement('p');
                instructions.className = 'multi-select-instructions';
                instructions.textContent = 'Select up to 3 options for this section!';
                sectionDiv.appendChild(instructions);
            }
            
            // Add category buttons container
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';
            optionsContainer.id = `options-${section.id}`;
            
            // Add category buttons
            section.categories.forEach(category => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.setAttribute('data-section', section.id);
                button.setAttribute('data-type', category.id);
                button.textContent = category.label;
                
                // Add event listener to button
                button.addEventListener('click', () => {
                    // Handle button click differently depending on section type
                    if (multiSelectSections.includes(section.id)) {
                        // For multi-select sections
                        handleMultiSelectButtonClick(button, section.id, category.id);
                    } else {
                        // For single-select sections
                        handleSingleSelectButtonClick(button, section.id, category.id);
                    }
                });
                
                optionsContainer.appendChild(button);
            });
            
            sectionDiv.appendChild(optionsContainer);
            
            // Add dropdown containers for each category
            section.categories.forEach(category => {
                const dropdownContainer = document.createElement('div');
                dropdownContainer.className = 'dropdown-container';
                dropdownContainer.id = `dropdown-${section.id}-${category.id}`;
                
                // Create select element
                const select = document.createElement('select');
                select.id = `select-${section.id}-${category.id}`;
                
                // Add default option
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = `--Select ${category.label} Option--`;
                select.appendChild(defaultOption);
                
                // Add options
                const options = section.options[category.id];
                if (options) {
                    options.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option.id;
                        optionElement.textContent = option.label;
                        select.appendChild(optionElement);
                    });
                }
                
                // Add change event listener to select
                select.addEventListener('change', (e) => {
                    if (!characterSelections[section.id]) {
                        characterSelections[section.id] = {};
                    }
                    
                    if (multiSelectSections.includes(section.id)) {
                        // For multi-select sections
                        if (!characterSelections[section.id].options) {
                            characterSelections[section.id].options = [];
                        }
                        
                        if (!characterSelections[section.id].categories) {
                            characterSelections[section.id].categories = [];
                        }
                        
                        // Find the corresponding dropdown for this category
                        const categoryIndex = characterSelections[section.id].categories.indexOf(category.id);
                        
                        if (categoryIndex !== -1 && e.target.value) {
                            // Update existing selection with both the ID and the readable label for display
                            const selectedOption = Array.from(e.target.options).find(option => option.value === e.target.value);
                            characterSelections[section.id].options[categoryIndex] = {
                                id: e.target.value,
                                label: selectedOption ? selectedOption.textContent : e.target.value
                            };
                        }
                    } else {
                        // For single-select sections
                        characterSelections[section.id].option = e.target.value;
                    }
                });
                
                dropdownContainer.appendChild(select);
                sectionDiv.appendChild(dropdownContainer);
            });
            
            sectionsContainer.appendChild(sectionDiv);
        });
    }

    // Handle single selection button click
    function handleSingleSelectButtonClick(button, sectionId, categoryId) {
        // Remove 'selected' class from all buttons in this section
        document.querySelectorAll(`.option-button[data-section="${sectionId}"]`).forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add 'selected' class to this button
        button.classList.add('selected');
        
        // Hide all dropdown containers in this section
        document.querySelectorAll(`div[id^="dropdown-${sectionId}-"]`).forEach(container => {
            container.classList.remove('active');
        });
        
        // Show the dropdown for this category
        const dropdownId = `dropdown-${sectionId}-${categoryId}`;
        document.getElementById(dropdownId).classList.add('active');
        
        // Update selection
        if (!characterSelections[sectionId]) {
            characterSelections[sectionId] = {};
        }
        characterSelections[sectionId].category = categoryId;
    }

    // Handle multi-selection button click
    function handleMultiSelectButtonClick(button, sectionId, categoryId) {
        // Initialize the selections for this section if not already done
        if (!characterSelections[sectionId]) {
            characterSelections[sectionId] = {
                categories: [],
                options: []
            };
        }
        
        if (!characterSelections[sectionId].categories) {
            characterSelections[sectionId].categories = [];
        }
        
        if (!characterSelections[sectionId].options) {
            characterSelections[sectionId].options = [];
        }
        
        const isSelected = button.classList.contains('selected');
        
        // If already selected, deselect it
        if (isSelected) {
            button.classList.remove('selected');
            
            // Remove from selections
            const index = characterSelections[sectionId].categories.indexOf(categoryId);
            if (index !== -1) {
                characterSelections[sectionId].categories.splice(index, 1);
                characterSelections[sectionId].options.splice(index, 1);
            }
            
            // Hide the dropdown
            const dropdownId = `dropdown-${sectionId}-${categoryId}`;
            document.getElementById(dropdownId).classList.remove('active');
        } 
        // If not selected and less than 3 are selected, select it
        else if (characterSelections[sectionId].categories.length < 3) {
            button.classList.add('selected');
            
            // Add to selections
            characterSelections[sectionId].categories.push(categoryId);
            characterSelections[sectionId].options.push({id: '', label: ''});
            
            // Show the dropdown
            const dropdownId = `dropdown-${sectionId}-${categoryId}`;
            document.getElementById(dropdownId).classList.add('active');
        }
        // If not selected and 3 are already selected, show an alert
        else {
            alert('You can only select up to 3 options for this section. Deselect one first.');
        }
    }
    
    // Function to generate the character based on selections
    function generateCharacter() {
        // Validate required sections have selections (only the single-select sections)
        let isValid = true;
        let missingSection = '';
        
        // Check each section
        for (let i = 1; i <= 3; i++) {
            // For the first three sections (non-multi-select), require a selection
            if (!characterSelections[i] || !characterSelections[i].category || !characterSelections[i].option) {
                isValid = false;
                missingSection = i;
                break;
            }
        }
        
        if (!isValid) {
            alert(`Please make a selection for section ${missingSection} before generating your character!`);
            return;
        }
        
        // Generate character result
        const resultContent = document.getElementById('result-content');
        resultContent.innerHTML = ''; // Clear previous results
        
        // Add each section's result
        for (let i = 1; i <= sectionConfig.length; i++) {
            const selection = characterSelections[i];
            
            // Create result item
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            // Create label
            const label = document.createElement('div');
            label.className = 'result-label';
            label.textContent = `${i}. ${sectionConfig[i-1].title}:`;
            resultItem.appendChild(label);
            
            // Create value and description
            if (multiSelectSections.includes(i)) {
                // For multi-select sections
                // Only display selections if there are any
                if (selection && selection.categories && selection.categories.length > 0) {
                    for (let j = 0; j < selection.categories.length; j++) {
                        const categoryId = selection.categories[j];
                        const option = selection.options[j];
                        
                        // Skip if no option was selected
                        if (!option || (typeof option === 'object' && !option.id)) {
                            continue;
                        }
                        
                        // Get the option ID - could be an object or string depending on how it was stored
                        const optionId = typeof option === 'object' ? option.id : option;
                        // Get the display label - use the label property if available, otherwise use the ID
                        const optionLabel = typeof option === 'object' ? option.label : option;
                        
                        const value = document.createElement('div');
                        value.className = 'result-value';
                        value.textContent = optionLabel;
                        resultItem.appendChild(value);
                        
                        // Safe access to window.characterDescriptions
                        const description = document.createElement('div');
                        description.className = 'result-description';
                        
                        // Check if window.characterDescriptions exists and has the property
                        if (window.characterDescriptions && window.characterDescriptions[optionId]) {
                            description.textContent = window.characterDescriptions[optionId];
                        } else {
                            description.textContent = 'A cosmic character with extraordinary potential!';
                        }
                        
                        resultItem.appendChild(description);
                    }
                } else {
                    // If no selections were made in this multi-select section
                    const noSelection = document.createElement('div');
                    noSelection.className = 'result-value';
                    noSelection.textContent = "No selection made";
                    resultItem.appendChild(noSelection);
                }
            } else {
                // For single-select sections
                const value = document.createElement('div');
                value.className = 'result-value';
                
                // Get the selected option's label
                let selectedOptionLabel = selection?.option || "Unknown";
                const categoryId = selection?.category;
                const options = sectionConfig[i-1]?.options[categoryId];
                
                if (options) {
                    const selectedOption = options.find(opt => opt.id === selection.option);
                    if (selectedOption) {
                        selectedOptionLabel = selectedOption.label;
                    }
                }
                
                value.textContent = selectedOptionLabel;
                resultItem.appendChild(value);
                
                const description = document.createElement('div');
                description.className = 'result-description';
                
                // Safe access to window.characterDescriptions
                if (window.characterDescriptions && selection?.option && window.characterDescriptions[selection.option]) {
                    description.textContent = window.characterDescriptions[selection.option];
                } else {
                    description.textContent = 'A cosmic character with extraordinary potential!';
                }
                
                resultItem.appendChild(description);
            }
            
            // Add to result content
            resultContent.appendChild(resultItem);
        }
        
        // Generate character name
        generateCharacterName();
        
        // Show the result
        document.getElementById('result').style.display = 'block';
        
        // Scroll to the result
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Function to generate a cosmic americana character name
    function generateCharacterName() {
        // Get name component options from section 10 (if they exist)
        let firstName = '';
        let lastName = '';
        
        // Try to get components from section 10 if they were selected
        if (characterSelections[10] && characterSelections[10].categories && characterSelections[10].options) {
            for (let i = 0; i < characterSelections[10].options.length; i++) {
                const option = characterSelections[10].options[i];
                if (option && option.id) {
                    if (!firstName) {
                        firstName = option.id;
                    } else if (!lastName) {
                        lastName = option.id;
                    }
                }
            }
        }
        
        // If we don't have enough name components, generate random ones
        const firstNameOptions = [
            "Zyx", "Cosmo", "Astro", "Luna", "Nova", "Orion", "Stella", "Rocket", 
            "Bobbi", "Johnny", "Frankie", "Darlene", "Chuck", "Buzz", "Orbit",
            "Nebula", "Comet", "Galaxy", "Atomic", "Stardust", "Meteor", "Jet"
        ];
        
        const lastNameOptions = [
            "Stardust", "Nebula", "Quasar", "Moonbeam", "Rocket", "Cosmic", "Galaxy",
            "Smith", "Jones", "Johnson", "Williams", "Starr", "Orbit", "Eclipse",
            "Supernova", "Lightspeed", "Comet", "Meteor", "Pulsar", "Vortex"
        ];
        
        if (!firstName) {
            firstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)];
        }
        
        if (!lastName) {
            lastName = lastNameOptions[Math.floor(Math.random() * lastNameOptions.length)];
        }
        
        // Create the name result item
        const resultContent = document.getElementById('result-content');
        const nameItem = document.createElement('div');
        nameItem.className = 'result-item name-result';
        
        const nameLabel = document.createElement('div');
        nameLabel.className = 'result-label';
        nameLabel.textContent = "Character Name:";
        
        const nameValue = document.createElement('div');
        nameValue.className = 'result-value';
        nameValue.style.fontSize = "1.2em";
        nameValue.style.padding = "10px 20px";
        nameValue.style.backgroundColor = "rgba(245, 166, 35, 0.2)";
        nameValue.style.border = "2px solid #F5A623";
        nameValue.textContent = `${firstName} ${lastName}`;
        
        nameItem.appendChild(nameLabel);
        nameItem.appendChild(nameValue);
        
        // Insert at the beginning of the result content
        resultContent.insertBefore(nameItem, resultContent.firstChild);
    }
    
    // Function to reset the form
    function resetForm() {
        // Clear selections
        document.querySelectorAll('.option-button').forEach(button => {
            button.classList.remove('selected');
        });
        
        // Hide dropdowns
        document.querySelectorAll('.dropdown-container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Reset selects
        document.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Clear selections object
        for (let i = 1; i <= sectionConfig.length; i++) {
            if (multiSelectSections.includes(i)) {
                characterSelections[i] = {
                    categories: [],
                    options: []
                };
            } else {
                characterSelections[i] = {};
            }
        }
        
        // Hide result
        document.getElementById('result').style.display = 'none';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

    function generateSectionsUI() {
        const sectionsContainer = document.getElementById('sections-container');
        
        sectionConfig.forEach(section => {
            // Create section container
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'section';
            sectionDiv.id = `section-${section.id}`;
            
            // Add section title
            const sectionTitle = document.createElement('h2');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = `${section.id}. ${section.title}`;
            sectionDiv.appendChild(sectionTitle);

            // Add multi-select instructions if applicable
            if (multiSelectSections.includes(section.id)) {
                const instructions = document.createElement('p');
                instructions.className = 'multi-select-instructions';
                instructions.textContent = 'Select up to 3 options for this section!';
                sectionDiv.appendChild(instructions);
            }
            
            // Add category buttons container
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'options-container';
            optionsContainer.id = `options-${section.id}`;
            
            // Add category buttons
            section.categories.forEach(category => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.setAttribute('data-section', section.id);
                button.setAttribute('data-type', category.id);
                button.textContent = category.label;
                
                // Add event listener to button
                button.addEventListener('click', () => {
                    playClickSound();
                    // Handle button click differently depending on section type
                    if (multiSelectSections.includes(section.id)) {
                        // For multi-select sections
                        handleMultiSelectButtonClick(button, section.id, category.id);
                    } else {
                        // For single-select sections
                        handleSingleSelectButtonClick(button, section.id, category.id);
                    }
                });
                
                optionsContainer.appendChild(button);
            });
            
            sectionDiv.appendChild(optionsContainer);
            
            // Add dropdown containers for each category
            section.categories.forEach(category => {
                const dropdownContainer = document.createElement('div');
                dropdownContainer.className = 'dropdown-container';
                dropdownContainer.id = `dropdown-${section.id}-${category.id}`;
                
                // Create select element
                const select = document.createElement('select');
                select.id = `select-${section.id}-${category.id}`;
                
                // Add default option
                const defaultOption = document.createElement('option');
                defaultOption.value = '';
                defaultOption.textContent = `--Select ${category.label} Option--`;
                select.appendChild(defaultOption);
                
                // Add options
                const options = section.options[category.id];
                if (options) {
                    options.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option.id;
                        optionElement.textContent = option.label;
                        select.appendChild(optionElement);
                    });
                }
                
                // Add change event listener to select
                select.addEventListener('change', (e) => {
                    playClickSound();
                    if (!characterSelections[section.id]) {
                        characterSelections[section.id] = {};
                    }
                    
                    if (multiSelectSections.includes(section.id)) {
                        // For multi-select sections
                        if (!characterSelections[section.id].options) {
                            characterSelections[section.id].options = [];
                        }
                        
                        if (!characterSelections[section.id].categories) {
                            characterSelections[section.id].categories = [];
                        }
                        
                        // Find the corresponding dropdown for this category
                        const categoryIndex = characterSelections[section.id].categories.indexOf(category.id);
                        
                        if (categoryIndex !== -1 && e.target.value) {
                            // Update existing selection with both the ID and the readable label for display
                            const selectedOption = Array.from(e.target.options).find(option => option.value === e.target.value);
                            characterSelections[section.id].options[categoryIndex] = {
                                id: e.target.value,
                                label: selectedOption ? selectedOption.textContent : e.target.value
                            };
                        }
                    } else {
                        // For single-select sections
                        characterSelections[section.id].option = e.target.value;
                    }
                });
                
                dropdownContainer.appendChild(select);
                sectionDiv.appendChild(dropdownContainer);
            });
            
            sectionsContainer.appendChild(sectionDiv);
        });
    }

    // Handle single selection button click
    function handleSingleSelectButtonClick(button, sectionId, categoryId) {
        // Remove 'selected' class from all buttons in this section
        document.querySelectorAll(`.option-button[data-section="${sectionId}"]`).forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add 'selected' class to this button
        button.classList.add('selected');
        
        // Hide all dropdown containers in this section
        document.querySelectorAll(`div[id^="dropdown-${sectionId}-"]`).forEach(container => {
            container.classList.remove('active');
        });
        
        // Show the dropdown for this category
        const dropdownId = `dropdown-${sectionId}-${categoryId}`;
        document.getElementById(dropdownId).classList.add('active');
        
        // Update selection
        if (!characterSelections[sectionId]) {
            characterSelections[sectionId] = {};
        }
        characterSelections[sectionId].category = categoryId;
    }

    // Handle multi-selection button click
    function handleMultiSelectButtonClick(button, sectionId, categoryId) {
        // Initialize the selections for this section if not already done
        if (!characterSelections[sectionId]) {
            characterSelections[sectionId] = {
                categories: [],
                options: []
            };
        }
        
        if (!characterSelections[sectionId].categories) {
            characterSelections[sectionId].categories = [];
        }
        
        if (!characterSelections[sectionId].options) {
            characterSelections[sectionId].options = [];
        }
        
        const isSelected = button.classList.contains('selected');
        
        // If already selected, deselect it
        if (isSelected) {
            button.classList.remove('selected');
            
            // Remove from selections
            const index = characterSelections[sectionId].categories.indexOf(categoryId);
            if (index !== -1) {
                characterSelections[sectionId].categories.splice(index, 1);
                characterSelections[sectionId].options.splice(index, 1);
            }
            
            // Hide the dropdown
            const dropdownId = `dropdown-${sectionId}-${categoryId}`;
            document.getElementById(dropdownId).classList.remove('active');
        } 
        // If not selected and less than 3 are selected, select it
        else if (characterSelections[sectionId].categories.length < 3) {
            button.classList.add('selected');
            
            // Add to selections
            characterSelections[sectionId].categories.push(categoryId);
            characterSelections[sectionId].options.push({id: '', label: ''});
            
            // Show the dropdown
            const dropdownId = `dropdown-${sectionId}-${categoryId}`;
            document.getElementById(dropdownId).classList.add('active');
        }
        // If not selected and 3 are already selected, show an alert
        else {
            alert('You can only select up to 3 options for this section. Deselect one first.');
        }
    }
    
    // Function to generate the character based on selections
    function generateCharacter() {
        playGenerateSound();
        
        // Validate required sections have selections (only the single-select sections)
        let isValid = true;
        let missingSection = '';
        
        // Check each section
        for (let i = 1; i <= 3; i++) {
            // For the first three sections (non-multi-select), require a selection
            if (!characterSelections[i] || !characterSelections[i].category || !characterSelections[i].option) {
                isValid = false;
                missingSection = i;
                break;
            }
        }
        
        if (!isValid) {
            alert(`Please make a selection for section ${missingSection} before generating your character!`);
            return;
        }
        
        // Generate character result
        const resultContent = document.getElementById('result-content');
        resultContent.innerHTML = ''; // Clear previous results
        
        // Add each section's result
        for (let i = 1; i <= sectionConfig.length; i++) {
            const selection = characterSelections[i];
            
            // Create result item
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            // Create label
            const label = document.createElement('div');
            label.className = 'result-label';
            label.textContent = `${i}. ${sectionConfig[i-1].title}:`;
            resultItem.appendChild(label);
            
            // Create value and description
            if (multiSelectSections.includes(i)) {
                // For multi-select sections
                // Only display selections if there are any
                if (selection && selection.categories && selection.categories.length > 0) {
                    for (let j = 0; j < selection.categories.length; j++) {
                        const categoryId = selection.categories[j];
                        const option = selection.options[j];
                        
                        // Skip if no option was selected
                        if (!option || (typeof option === 'object' && !option.id)) {
                            continue;
                        }
                        
                        // Get the option ID - could be an object or string depending on how it was stored
                        const optionId = typeof option === 'object' ? option.id : option;
                        // Get the display label - use the label property if available, otherwise use the ID
                        const optionLabel = typeof option === 'object' ? option.label : option;
                        
                        const value = document.createElement('div');
                        value.className = 'result-value';
                        value.textContent = optionLabel;
                        resultItem.appendChild(value);
                        
                        const description = document.createElement('div');
                        description.className = 'result-description';
                        description.textContent = window.characterDescriptions[optionId] || 'No description available!';
                        resultItem.appendChild(description);
                    }
                } else {
                    // If no selections were made in this multi-select section
                    const noSelection = document.createElement('div');
                    noSelection.className = 'result-value';
                    noSelection.textContent = "No selection made";
                    resultItem.appendChild(noSelection);
                }
            } else {
                // For single-select sections
                const value = document.createElement('div');
                value.className = 'result-value';
                
                // Get the selected option's label
                let selectedOptionLabel = selection.option;
                const categoryId = selection.category;
                const options = sectionConfig[i-1].options[categoryId];
                
                if (options) {
                    const selectedOption = options.find(opt => opt.id === selection.option);
                    if (selectedOption) {
                        selectedOptionLabel = selectedOption.label;
                    }
                }
                
                value.textContent = selectedOptionLabel;
                resultItem.appendChild(value);
                
                const description = document.createElement('div');
                description.className = 'result-description';
                description.textContent = window.characterDescriptions[selection.option] || 'No description available!';
                resultItem.appendChild(description);
            }
            
            // Add to result content
            resultContent.appendChild(resultItem);
        }
        
        // Generate character name
        generateCharacterName();
        
        // Show the result
        document.getElementById('result').style.display = 'block';
        
        // Scroll to the result
        document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Function to generate a cosmic americana character name
    function generateCharacterName() {
        // Get name component options from section 10 (if they exist)
        let firstName = '';
        let lastName = '';
        
        // Try to get components from section 10 if they were selected
        if (characterSelections[10] && characterSelections[10].categories && characterSelections[10].options) {
            for (let i = 0; i < characterSelections[10].options.length; i++) {
                const option = characterSelections[10].options[i];
                if (option && option.id) {
                    if (!firstName) {
                        firstName = option.id;
                    } else if (!lastName) {
                        lastName = option.id;
                    }
                }
            }
        }
        
        // If we don't have enough name components, generate random ones
        const firstNameOptions = [
            "Zyx", "Cosmo", "Astro", "Luna", "Nova", "Orion", "Stella", "Rocket", 
            "Bobbi", "Johnny", "Frankie", "Darlene", "Chuck", "Buzz", "Orbit",
            "Nebula", "Comet", "Galaxy", "Atomic", "Stardust", "Meteor", "Jet"
        ];
        
        const lastNameOptions = [
            "Stardust", "Nebula", "Quasar", "Moonbeam", "Rocket", "Cosmic", "Galaxy",
            "Smith", "Jones", "Johnson", "Williams", "Starr", "Orbit", "Eclipse",
            "Supernova", "Lightspeed", "Comet", "Meteor", "Pulsar", "Vortex"
        ];
        
        if (!firstName) {
            firstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)];
        }
        
        if (!lastName) {
            lastName = lastNameOptions[Math.floor(Math.random() * lastNameOptions.length)];
        }
        
        // Create the name result item
        const resultContent = document.getElementById('result-content');
        const nameItem = document.createElement('div');
        nameItem.className = 'result-item name-result';
        
        const nameLabel = document.createElement('div');
        nameLabel.className = 'result-label';
        nameLabel.textContent = "Character Name:";
        
        const nameValue = document.createElement('div');
        nameValue.className = 'result-value';
        nameValue.style.fontSize = "1.2em";
        nameValue.style.padding = "10px 20px";
        nameValue.style.backgroundColor = "rgba(245, 166, 35, 0.2)";
        nameValue.style.border = "2px solid #F5A623";
        nameValue.textContent = `${firstName} ${lastName}`;
        
        nameItem.appendChild(nameLabel);
        nameItem.appendChild(nameValue);
        
        // Insert at the beginning of the result content
        resultContent.insertBefore(nameItem, resultContent.firstChild);
    }
    
    // Function to reset the form
    function resetForm() {
        playClickSound();
        
        // Clear selections
        document.querySelectorAll('.option-button').forEach(button => {
            button.classList.remove('selected');
        });
        
        // Hide dropdowns
        document.querySelectorAll('.dropdown-container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Reset selects
        document.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Clear selections object
        for (let i = 1; i <= sectionConfig.length; i++) {
            if (multiSelectSections.includes(i)) {
                characterSelections[i] = {
                    categories: [],
                    options: []
                };
            } else {
                characterSelections[i] = {};
            }
        }
        
        // Hide result
        document.getElementById('result').style.display = 'none';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

