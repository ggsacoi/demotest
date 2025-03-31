// ⚡ Connexion à Supabase (remplace par tes infos)
const SUPABASE_URL = "https://njipfgiiyompcwwqcwdh.supabase.co";  // Ton URL Supabase
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qaXBmZ2lpeW9tcGN3d3Fjd2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNzc4NDEsImV4cCI6MjA1Njk1Mzg0MX0.ngQ2CXCxhh9yPntzBf5VLdtNqSnKlRx_ckj0cF4962s";  // Ta clé API Supabase (anon)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Récupération des éléments du DOM
const like = document.getElementById("like");
if (!like) {
    console.error("❌ L'élément avec l'ID 'like' est introuvable !");
}
console.log("✅ Supabase configuré !");

// Fonction pour envoyer un like
async function sendlike(likes) {
    try {
        const { data, error } = await supabase
            .from("feels") // Nom de ta table
            .insert([{ likes }]);

        if (error) {
            console.error("❌ Erreur en envoyant le like :", error.message);
        } else {
            console.log("✅ Like envoyé avec succès :", data);
        }
    } catch (err) {
        console.error("❌ Une erreur inattendue s'est produite :", err);
    }
}

// Fonction pour gérer le clic sur la case à cocher
function envoilike() {
    if (like.checked) {
        const likenumber = "1";
        sendlike(likenumber);
    } else {
        console.log("⚠️ La case n'est pas cochée.");
    }
}

// Ajout d'un écouteur d'événement
if (like) {
    like.addEventListener('change', envoilike);
}
