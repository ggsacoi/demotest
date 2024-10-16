addEventListener("DOMContentLoaded", ()=>{
    const navbar = document.getElementById('Navbar');

    if(navbar) {
        const navchild = document.createElement("div");
        navchild.className = "navchild";
        navbar.appendChild(navchild);
        const check = document.createElement("input");
        check.className = "trop";
        check.type = "checkbox";
        check.id = "view";
        navchild.appendChild(check);
        const sign = document.createElement("label");
        sign.htmlFor = "view";
        sign.id = "quoi";
        navchild.appendChild(sign);
        const glass = document.createElement("i");
        glass.className = "fa-solid fa-magnifying-glass";
        sign.appendChild(glass);
        const viewer = document.createElement("label");
        viewer.htmlFor="view";
        viewer.id="feur";
        navchild.appendChild(viewer);
        const quit = document.createElement("i");
        quit.className = "fa-solid fa-xmark";
        viewer.appendChild(quit);
        const search = document.createElement("div");
        search.className = "research";
        navchild.appendChild(search);
        const searchbar = document.createElement("input");
        searchbar.type = "search";
        searchbar.id = "input-box";
        search.appendChild(searchbar);
        const Vresearch = document.createElement("button");
        Vresearch.id = "onclick";
        Vresearch.appendChild(glass.cloneNode(true));
        search.appendChild(Vresearch);
        const truc = document.createElement("div");
        truc.className = "things";
        const userbox = document.createElement("span");
        userbox.className = "boxuser";
        const logoU = document.createElement("i");
        logoU.className = "fa-solid fa-user";
        userbox.appendChild(logoU);
        navchild.appendChild(userbox);
        const boxcat = document.createElement("div");
        boxcat.className = "boxnav";
        const ulelement = document.createElement("ul");
        ulelement.className = "categorie";
        boxcat.appendChild(ulelement);
        const lielement = [
            {name:'popular', url:"index.html"},
            {name:'family',url:"indexf.html"},
            {name:'comedy', url:"indexc.html"},
            {name:'thriller',url:"indexa.html"},
            {name:'seduction',url:"indexs.html"},
        ];

        lielement.forEach(({name, url}) => {
            if(name) {
                const list = document.createElement("li");
                list.textContent = name;
                list.addEventListener('click', () =>{
                    window.open(url, '_top');
                })
                ulelement.appendChild(list);
            }
        })
        navbar.appendChild(boxcat);
    };
    const user = document.querySelector('.boxuser');
    user.addEventListener('click', () => {
        const nav = document.querySelector('.accountnav');
        nav.style.display = 'flex';
    });

    const account = document.querySelector('.boxset');
    account.addEventListener('click', () => {
       window.location.href = 'indexaccountset.html';
    });


 const clock = document.getElementById('his');
    clock.addEventListener('click', () => {
       window.location.href = 'indexhistoric.html';
    });

    const movies = document.querySelectorAll('.photo');
    if (movies) {
        movies.forEach(movie => {
        movie.addEventListener('click', ()=>{
        const formcontainer = document.createElement("div");
        formcontainer.className = 'form-container';
        const form = document.createElement("h3");
        form.className = 'alert';
        formcontainer.appendChild(form);
        form.textContent = 'this content is not accessible it will be available in final edition';
        const container = document.createElement("button");
        container.id = 'envoi';
        container.textContent = 'bet';
        formcontainer.appendChild(container);

        document.body.appendChild(formcontainer);
        container.addEventListener('click', ()=>{
            formcontainer.remove();

        });
    });
});
    }
    if(window.innerWidth > 750) {
        window.location.href = "nodispo.html";
    }
});
