let dataArticles = {
    01 :
    {
        img: "img/cannes-croisette-palm-beach-mademoiselle-voyage-5-1440x959.jpg",
        place: {
            pays: "France",
            lieu: "Cannes",
        },
        titre: "Que voir et que faire à Cannes | Mes incontournables, coups de cœur et bonnes adresses",
        content: "Découvrez la ville de Cannes comme une locale. Je vous partage ici mes coups de coeur, mes incontournables et mes bonnes adresses car je …"
    },
    02 :
    {
        img: "img/andalousie-seville-metropol-parasol-las-setas-mademoiselle-voyage-8-1440x960.jpg",
        place: {
            pays: "Espagne",
            lieu: "Séville",
        },
        titre: "Que faire à Séville en 4 jours. La petite pépite espagnole",
        content: "Que faire à Séville sur 4 jours : découvrez par quartiers nos incontournables, nos coups de cœur, nos bonnes adresses et nos bons plans."
    },
    03 :
    {
        img: "img/marken-hollande-pays-bas-mademoiselle-voyage-10.jpg",
        place: {
            pays: "Pays-Bas",
            lieu: "Hollande",
        },
        titre: "Découvrez la vieille Hollande: Edam, Volendam et Marken",
        content: "Si vous êtes de passage à Amsterdam, profitez-en pour découvrir les très beaux villages de la vieille Hollande avec Edam, Voledam et Marken, en …"
    },
    04 :
    {
        img: "img/vejer-de-la-frontera-andalousie-mademoiselle-voyage-10.jpg",
        place: {
            pays: "Espagne",
            lieu: "Andalousie",
        },
        titre: "Roadtrip dans les plus beaux villages blancs d’Andalousie",
        content: "Partez en roadtrip découvrir les plus beaux villages blancs d'Andalousie. Je vous ai sélectionné mes coups de cœur et mes bonnes adresses."
    },
    05 :
    {
        img: "img/londres-brick-lane-mademoiselle-voyage-6-1440x1080.jpg",
        place: {
            pays: "Angleterre",
            lieu: "Londres",
        },
        titre: "Londres | Découvrez le quartier branché et Hipster d’East London",
        content: "Pour un week-end à Londres, on pense en premier lieu à découvrir les lieux emblématiques que sont Big-Ben, le Tower Bridge, High Park ou St James's Park, la relève de la garde à Buckingham, les quartiers de Covent Garden, Soho ou encore de Camden."
    },
    06 :
    {
        img: "img/cite-verte-paris-mademoiselle-voyage-4-1-1440x1080.jpg",
        place: {
            pays: "France",
            lieu: "Paris",
        },
        titre: "Paris | A la découverte du Paris insolite comme vous ne l'avez jamais vu !",
        content: "Si vous venez un weekend à Paris, je vous propose de découvrir Paris autrement sous un beau soleil. Les ruelles insolites de Paris sont encore méconnues des touristes mais ce sont des petits trésors bien cachés que nous vous dévoilons."
    },
    07 :
    {
        img: "img/new-york-guide-pratique-mademoiselle-voyage-1440x1080.jpg",
        place: {
            pays: "Etats-Unis",
            lieu: "New-York",
        },
        titre: "New York: notre guide pratique pour organiser votre voyage",
        content: "Vous partez bientôt découvrir pour la première fois la grande pomme ? Découvrez notre petit guide pratique pour organiser votre voyage"
    },
    08 :
    {
        img: "img/japon-tokyo-mademoiselle-voyage-3.jpg",
        place: {
            pays: "Japon",
            lieu: "Tokyo",
        },
        titre: "Que faire 5 Jours à Tokyo | Nos conseils et coups de cœur par quartiers",
        content: "Mais que faire à Tokyo ? À l’idée d’aborder votre séjour au Japon, vous vous poserez certainement la question du temps à consacrer par ville et notamment à celle de Tokyo. Voici donc itinéraire sur 5 jours plein, quartier par quartier avec les distances parcourues par jour, à pied, pour vous donner une idée du temps à consacrer."
    },
}

window.addEventListener("DOMContentLoaded", (event) => {
    
    // ------------------ DIV ARTICLES ------------------------- 
    let articles = document.querySelector(".articles");
    for (let x in dataArticles) {
        // ------------------ DIV ARTICLE ------------------------- 
        let article = document.createElement("div")
        article.className = "article"
        articles.appendChild(article)
        
        // ------------------ DIV ARTICLE-IMG ------------------------- 
        let article_img = document.createElement("div")
        article_img.className = "article-img";
        article.appendChild(article_img)
        
        // ------------------ IMG ------------------------- 
        let img = document.createElement("img")
        img.src = dataArticles[x].img  //* ---------------------------------- IMAGE
        article_img.appendChild(img)
        
        // ------------------ DIV ARTICLE-SOCIAL ------------------------- 
        let article_social = document.createElement("div")
        article_social.className = "social"
        let icons = ["favorite", "share", "send"]
        for(let i in icons) {
            let linkSpan = document.createElement("a")
            let iconSpan = document.createElement("span")
            iconSpan.className = "material-symbols-outlined"
            iconSpan.innerHTML = icons[i]
            linkSpan.appendChild(iconSpan)
            article_social.appendChild(linkSpan)
        }
        article.appendChild(article_social)
        
        // ------------------ DIV ARTICLE-TEXT ------------------------- 
        let article_text = document.createElement("div")
        article_text.className = "article-text"
        // ------------------ DIV LINKS-GEO ------------------------- 
        let links_geo = document.createElement("div")
        links_geo.className = "links-geo"
        // ------------------ LINES + PAYS + VILLE ------------------------- 
        let line_before = document.createElement("a")
        line_before.className = "line-before"
        line_before.innerHTML = dataArticles[x].place.pays //* -------------- PAYS
        let spanPipe = document.createElement("span")
        spanPipe.innerHTML = "&nbsp;&#124;&nbsp;"
        let iconPin = document.createElement("span")
        iconPin.className = "material-symbols-outlined bounce"
        iconPin.innerHTML = "pin_drop"
        let line_after = document.createElement("a")
        line_after.className = "line-after"
        line_after.innerHTML = dataArticles[x].place.lieu //* --------------- LIEU
        
        links_geo.appendChild(line_before)
        links_geo.appendChild(spanPipe)
        links_geo.appendChild(iconPin)
        links_geo.appendChild(line_after)
        
        article_text.appendChild(links_geo)
        article.appendChild(article_text)
        
        // ------------------ TITRE (H1 + A) ------------------------- 
        let articleTitle = document.createElement("h1")
        let article_link = document.createElement("a")
        article_link.className = "article-link"
        article_link.setAttribute("href", "#" )
        article_link.innerHTML = dataArticles[x].titre //* ------------------ TITRE
        articleTitle.appendChild(article_link)
        article_text.appendChild(articleTitle)
        
        // ------------------ CONTENT ------------------------- 
        let article_content = document.createElement("p")
        article_content.innerHTML = dataArticles[x].content //* ------------- CONTENU
        article_text.appendChild(article_content)
        
        // ------------------ BUTTON ------------------------- 
        let btn = document.createElement("a")
        btn.className = "btn"
        btn.innerHTML = "<span>Voir l'article</span>"

        article_text.appendChild(btn)

        // let tbody = document.querySelector("tbody")
        // let row =   `<tr>
        //                 <td>${dataArticles[x].place.pays}</td>
        //                 <td>${dataArticles[x].place.lieu}</td>
        //                 <td>${dataArticles[x].titre}</td>
        //                 <td>${dataArticles[x].content}</td>
        //             </tr>`
        // tbody.innerHTML += row
     }
});

