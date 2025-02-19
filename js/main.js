/* 🎨 Thème Principal */
:root {
    --primary: #4a90e2; /* Bleu moderne */
    --background: #f5f7fa; /* Fond clair */
    --text: #2c3e50; /* Texte sombre */
    --border: #d1d8e0; /* Bordures */
    --shadow: rgba(0, 0, 0, 0.1);
    --hover: #eaf2ff;
}

/* 🌍 Réinitialisation et Typographie */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
body {
    background: var(--background);
    color: var(--text);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

/* 📦 Conteneur Principal */
.container {
    width: 100%;
    max-width: 800px;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px var(--shadow);
    border: 1px solid var(--border);
    overflow: hidden;
}

/* 🎛️ Boutons Modernes */
.btn {
    display: inline-block;
    padding: 10px 16px;
    margin: 8px 0;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
}

.btn-primary {
    background: var(--primary);
    color: white;
}
.btn-primary:hover {
    background: #357ABD;
}

.btn-danger {
    background: #e74c3c;
    color: white;
}
.btn-danger:hover {
    background: #c0392b;
}

.btn-disabled {
    opacity: 0.5;
    pointer-events: none;
}

/* 🔲 Blocs Stylisés */
.block {
    padding: 12px;
    margin: 6px 0;
    background: white;
    border-radius: 8px;
    border: 1px solid var(--border);
    box-shadow: 2px 2px 10px var(--shadow);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.block:hover {
    background: var(--hover);
}

/* 📌 Sélection d’un Bloc */
.block.selected {
    background: #cce5ff;
    border-left: 4px solid var(--primary);
}

/* 🎭 Effet d'apparition et suppression */
.fade-in {
    animation: fadeIn 0.3s ease-in;
}
.fade-out {
    animation: fadeOut 0.3s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}
@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

/* 📱 Responsive (Adapté aux mobiles et PC) */
@media screen and (max-width: 768px) {
    .container {
        width: 90%;
        padding: 15px;
    }
    .btn {
        width: 100%;
        text-align: center;
    }
}
