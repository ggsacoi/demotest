 // ⚡ Connexion à Supabase
 const SUPABASE_URL = "https://njipfgiiyompcwwqcwdh.supabase.co";  // Remplace par ton URL
 const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qaXBmZ2lpeW9tcGN3d3Fjd2RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNzc4NDEsImV4cCI6MjA1Njk1Mzg0MX0.ngQ2CXCxhh9yPntzBf5VLdtNqSnKlRx_ckj0cF4962s";  // Remplace par ta clé
 const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
 const likenumber = document.getElementById("likenumbers");
 const sharenumber = document.getElementById("sharenumbers");

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
