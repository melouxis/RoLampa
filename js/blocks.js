// block.js

// Fonction pour générer des caractères aléatoires (utile pour les ID des blocs)
function generateRandomChars(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return randomString;
}

// Fonction pour créer un bloc dynamique
function create_block(parent, block) {
    let div = document.createElement("div");
    div.id = generateRandomChars(30);
    div.classList.add('block');  // Ajout de la classe block pour appliquer le style moderne
    div.innerHTML = `
        <div class="block-header">
            <span class="block-name">${block.name}</span>
            <button class="btn btn-info">Configurer</button>
        </div>
        <div class="block-content">
            <p>${block.description}</p>
        </div>
    `;

    parent.appendChild(div);
    return div;
}

// Fonction pour ajouter un bloc au code
function add_block_to_code(block) {
    let code_area = document.getElementById("code_shower");
    let div = create_block(code_area, block);
    let scriptTag = document.createElement("script");
    scriptTag.type = "application/json";
    scriptTag.innerHTML = JSON.stringify(block);
    div.appendChild(scriptTag);

    div.addEventListener('click', function() {
        select_block_and_show_configs(div.id);
    });
}

// Sélectionner un bloc et afficher ses configurations
function select_block_and_show_configs(block_div_id) {
    let block_div = document.getElementById(block_div_id);
    let scriptTag = block_div.querySelector('script[type="application/json"]');
    let block = JSON.parse(scriptTag.innerText || scriptTag.textContent);
    
    let config_area = document.getElementById("configs_list");
    clean_the_list(config_area);

    let div_container = document.createElement("div");
    div_container.classList.add('config-container');
    div_container.innerHTML = `
        <strong>${block.name}</strong>
        <hr />
        <p><strong>Note :</strong> ${block.note}</p>
        <br />
    `;
    config_area.appendChild(div_container);

    block.properties.forEach(one_config => {
        let divA = document.createElement("div");
        let labelA = document.createElement("label");
        let inputA = document.createElement("input");
        inputA.type = 'text';
        inputA.value = one_config.value;
        inputA.classList.add('input-field');  // Ajout d'une classe moderne
        labelA.textContent = one_config.name;
        divA.appendChild(labelA);
        divA.appendChild(inputA);
        config_area.appendChild(divA);
        
        inputA.addEventListener('input', function() {
            block.properties.find(prop => prop.name === one_config.name).value = inputA.value;
            scriptTag.innerHTML = JSON.stringify(block);
        });
    });

    // Bouton de suppression
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add('btn', 'btn-danger');
    deleteBtn.textContent = "Supprimer";
    div_container.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function() {
        block_div.remove();
        clean_the_list(config_area);
    });
}

// Fonction pour supprimer une liste d'éléments
function clean_the_list(list) {
    list.innerHTML = "";
}

// Ajouter un objet à la liste
function add_obj_to_code() {
    let object_list = document.getElementById("object_list");
    clean_the_list(object_list);

    Object.keys(blocks).forEach(key => {
        let div_container = document.createElement("div");
        div_container.classList.add('object-container');
        div_container.innerHTML = `
            <strong>${key}</strong>
            <hr />
        `;
        document.getElementById("object_list").appendChild(div_container);

        blocks[key].forEach(block => {
            let div = create_block(object_list, block);
            div.addEventListener('click', function() {
                add_block_to_code(block);
            });
        });
    });
}
