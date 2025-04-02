// ⚡ Connexion à Supabase (remplace par tes infos)
const SUPABASE_URL = "https://njipfgiiyompcwwqcwdh.supabase.co";  // Ton URL Supabase
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qaXBmZ2lpeW9tcGN3d3Fjd2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNzc4NDEsImV4cCI6MjA1Njk1Mzg0MX0.ngQ2CXCxhh9yPntzBf5VLdtNqSnKlRx_ckj0cF4962s";  // Ta clé API Supabase (anon)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const like = document.getElementById("like");
const shareCheckbox = document.getElementById("share");
const likenumber = document.getElementById("likenumbers");
const sharenumber = document.getElementById("sharenumbers");
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
async function shareview(share) {
    try {
        const { data, error } = await supabase
            .from("shares") // Nom de ta table
            .insert([{ share }]);

        if (error) {
            console.error("❌ Erreur en envoyant le partage :", error.message);
        } else {
            console.log("✅ Partage envoyé avec succès :", data);
        }
    } catch (err) {
        console.error("❌ Une erreur inattendue s'est produite :", err);
    }
}

function envoishare() {
    console.log("✅ Fonction envoishare appelée.");
    console.log("État de la case 'share' :", shareCheckbox.checked);

    if (shareCheckbox.checked) {
        const sharenumber = "M";
        console.log("Données envoyées à Supabase :", sharenumber);
        shareview(sharenumber);
    } else {
        console.log("⚠️ La case n'est pas cochée.");
    }
}

if (shareCheckbox) {
    shareCheckbox.addEventListener('change', envoishare);
} else {
    console.error("❌ L'élément avec l'ID 'share' est introuvable !");
}

async function getlike() {
    const { data, error } = await supabase
        .from('feels')
        .select('id' )
        .order('id', { ascending: false })
              .limit(1);

    if (error) {
        console.error("❌ Erreur en récupérant les positions:", error.message);
        return;
    }

    console.log("✅ nombres récupérées:", data);
    
    if (data && data.length > 0) {
        likenumber.textContent = data[0].id;
    }
}
getlike();
async function getshare() {
    const { data, error } = await supabase
        .from('shares')
        .select('id' )
        .order('id', { ascending: false })
              .limit(1);

    if (error) {
        console.error("❌ Erreur en récupérant les positions:", error.message);
        return;
    }

    console.log("✅ nombres récupérées:", data);
    
    if (data && data.length > 0) {
        sharenumber.textContent = data[0].id;
    }
}
getshare();
