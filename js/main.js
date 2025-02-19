// main.js

// Initialiser l'export de code
document.getElementById("export_btn").addEventListener('click', function() {
    let lua_builded_code = "";
    Array.from(document.getElementById("code_shower").children).forEach(raw_div => {
        let scriptTag = raw_div.querySelector('script[type="application/json"]');
        if(scriptTag) {
            let block = JSON.parse(scriptTag.innerText || scriptTag.textContent);
            let prebuild_block_part = block.string_part2add;
            block.properties.forEach(one_config => {
                prebuild_block_part = prebuild_block_part.replace(`//**${one_config.save_as}**//`, one_config.value);
                prebuild_block_part = prebuild_block_part.replace("{", "'..").replace("}", "..'");
            });
            lua_builded_code += prebuild_block_part + "<br>";
        }
    });
    
    let notify = document.getElementById("notify");
    notify.querySelector("p").innerHTML = color_code_lua(lua_builded_code);
    notify.style.display = "block";
});

// Ajouter un objet script au code
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('add_object_script');
    button.addEventListener('click', add_obj_to_code);
});

// Colorier le code Lua
function color_code_lua(code) {
    let syntax = {
        "local": "red",
        "function": "blue",
        "end": "blue",
        "if": "orange",
        "else": "orange",
        "elseif": "orange",
        "return": "purple",
        "while": "teal",
        "for": "teal",
        "true": "darkblue",
        "false": "darkblue",
        "nil": "gray",
        "and": "green",
        "or": "green",
        "not": "green",
        "Connect": "purple",
        "task": "green",
        "math": "blue",
        "then": "orange"
    };

    let regex = new RegExp("\\b(" + Object.keys(syntax).join("|") + ")\\b", "g");
    code = code.replace(regex, (match) => {
        return `<strong style="color:${syntax[match]}">${match}</strong>`;
    });

    return code;
}

// Observer pour activer/désactiver le bouton Export en fonction des blocs présents
const observer = new MutationObserver(function(mutationsList, observer) {
    let idk = document.getElementById("code_shower").children.length;
    if(idk > 0) {
        document.getElementById("export_btn").classList.remove('btn-disabled');
    } else {
        document.getElementById("export_btn").classList.add('btn-disabled');
    }
});

observer.observe(document.getElementById("code_shower"), { childList: true });
