import { blocks } from './blocks.js';

// Amélioration du bouton Export
const exportBtn = document.querySelector("#export_btn");
exportBtn.classList.add("disabled"); // Classe pour gérer le style
exportBtn.disabled = true;

const codeShower = document.querySelector("#code_shower");

// Observer pour activer/désactiver le bouton Export
const observer = new MutationObserver(() => {
    const hasBlocks = codeShower.children.length > 1;
    exportBtn.classList.toggle("disabled", !hasBlocks);
    exportBtn.disabled = !hasBlocks;
});
observer.observe(codeShower, { childList: true });

// Fonction pour colorer le code Lua
function color_code_lua(code) {
    const syntax = {
        "local": "red", "function": "blue", "end": "blue", "if": "orange",
        "else": "orange", "elseif": "orange", "return": "purple",
        "while": "teal", "for": "teal", "true": "darkblue", "false": "darkblue",
        "nil": "gray", "and": "green", "or": "green", "not": "green",
        "Connect": "purple", "task": "green", "math": "blue", "then": "orange"
    };

    return code.replace(/\b(\w+)\b/g, (match) =>
        syntax[match] ? `<strong style="color:${syntax[match]}">${match}</strong>` : match
    );
}

// Fonction d'exportation des scripts Lua
exportBtn.addEventListener('click', () => {
    let luaCode = "";
    codeShower.querySelectorAll("script[type='application/json']").forEach(scriptTag => {
        const block = JSON.parse(scriptTag.textContent);
        let prebuild = block.string_part2add;
        
        block.properties.forEach(prop => {
            prebuild = prebuild.replace(`//**${prop.save_as}**//`, prop.value);
        });

        luaCode += prebuild + "<br>";
    });

    document.querySelector("#notify p").innerHTML = color_code_lua(luaCode);
    document.querySelector("#notify").style.display = "block";
});

// Générateur d'ID unique
const generateID = (length = 16) => 
    Array.from({ length }, () => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 62)]).join("");

// Gestion de l'ajout des objets
document.querySelector("#add_object_script").addEventListener('click', add_obj_to_code);

function createButton(parent, text, color, onClick) {
    let btn = document.createElement("div");
    btn.className = "custom-btn";
    btn.style.borderColor = color;
    btn.style.color = color;
    btn.textContent = text;
    btn.addEventListener("click", onClick);
    parent.appendChild(btn);
}

function selectBlock(blockDiv) {
    document.querySelectorAll("#code_shower > div").forEach(div => div.classList.remove("selected"));
    blockDiv.classList.add("selected");

    const block = JSON.parse(blockDiv.querySelector("script").textContent);
    const configList = document.querySelector("#configs_list");
    configList.innerHTML = `<strong>${block.name}</strong><hr><p><strong>Note:</strong> ${block.note}</p>`;

    block.properties.forEach(prop => {
        let div = document.createElement("div");
        div.innerHTML = `<label>${prop.name}</label><input type="text" value="${prop.value}" style="width: 97%;">`;
        configList.appendChild(div);
        
        div.querySelector("input").addEventListener("input", (e) => {
            prop.value = e.target.value;
            blockDiv.querySelector("script").textContent = JSON.stringify(block);
        });
    });

    createButton(configList, "Delete", "red", () => {
        blockDiv.classList.add("fade-out");
        setTimeout(() => blockDiv.remove(), 300);
        configList.innerHTML = "";
    });
}

function addBlock(block) {
    const blockDiv = document.createElement("div");
    blockDiv.className = "block";
    blockDiv.textContent = block.name;
    blockDiv.innerHTML += `<script type="application/json">${JSON.stringify(block)}</script>`;
    blockDiv.addEventListener("click", () => selectBlock(blockDiv));

    codeShower.appendChild(blockDiv);
}

function add_obj_to_code() {
    const objectList = document.querySelector("#object_list");
    objectList.innerHTML = "";

    Object.entries(blocks).forEach(([category, items]) => {
        let categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `<hr><strong>${category}</strong><hr>`;
        objectList.appendChild(categoryDiv);

        items.forEach(block => {
            let blockDiv = document.createElement("div");
            blockDiv.className = "block";
            blockDiv.textContent = block.name;
            blockDiv.addEventListener("click", () => {
                addBlock(block);
                objectList.innerHTML = "";
            });
            objectList.appendChild(blockDiv);
        });
    });
}
