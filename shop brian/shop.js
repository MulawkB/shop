/* 
Une fois l'exercice finis, faire une archive et me l'envoyer en mp sur discord

- Faire une page web type catalogue produit
- récupérer des images pour les produits
- créer une tableau contenant un ensemble de produit (array ou object) avec les informations suivantes : titre, image, alt de l'image, prix, catégorie, mots clés (attributs du produit), note (utilisateur)
    [
        {
            titre: 'titre produit 1',
            image: 'image1.jpg',
            alt: 'alt image1'
            prix: 10,
            categorie: 'tshirt',
            attributs: ['attr1', 'attr2', ...],
            note: 4   
        },
        {
            titre: 'titre produit 2',
            image: 'image2.jpg',
            alt: 'alt image2'
            prix: 14,
            categorie: 'chemise',
            attributs: ['attr1', 'attr2', ...],
            note: 3.5   
        },
        ...
    ]
*/

let listeProduit = [
    {
        titre: 'pain',
        image: 'img/img1.jpg',
        alt: 'pain',
        prix: 5,
        categorie: 'feculent',
        attributs: ['pain', 'bread','feculent'],
        note: 4.7  
    },
    {
        titre: 'carrotte',
        image: 'img/img2.jpg',
        alt: 'carrotte',
        prix: 4,
        categorie: 'legume',
        attributs: ['carrotte', 'carrot','legume'],
        note: 4.8  
    },
    {
        titre: 'pasteque',
        image: 'img/img3.jpg',
        alt: 'pasteque',
        prix: 8,
        categorie: 'legume',
        attributs: ['pasteque', 'watermelon','legume'],
        note: 4.6  
    },
    {
        titre: 'pain avec grains',
        image: 'img/img4.jpg',
        alt: 'pain grains',
        prix: 6,
        categorie: 'feculent',
        attributs: ['pain', 'bread','feculent','grain','varient'],
        note: 4.5  
    },
    {
        titre: 'pain de campagne',
        image: 'img/img5.jpg',
        alt: 'pain campagne',
        prix: 5,
        categorie: 'feculent',
        attributs: ['pain', 'bread','feculent','campagne','varient'],
        note: 4.9  
    },
    {
        titre: 'avocat',
        image: 'img/img6.jpg',
        alt: 'avocat',
        prix: 6,
        categorie: 'fruit',
        attributs: ['fruit', 'avocado','exotique'],
        note: 4.8  
    }
]

/*
- Sur la page catalogue faire une barre latérale listant toutes les catégories sous forme de lien (selon les catégories présentent dans le tableau des produits via une boucle)
    mettre également un input type text en dessous des catégories : pour la recherche
    mettre également un input type text en dessous : pour filtrer par prix
*/
function filterByName(event) {
//    console.log("Filtering");
    const searchTerm = event.target.value;
    console.log(searchTerm);
  }
  function filterByPrice(event) {
    //    console.log("Filtering");
        const searchTerm = event.target.value;
        console.log(searchTerm);
      }

/*
- Puis un bloc principal listant tous les produits dans un bloc html en affichant les informations du produit
    la catégorie et les attributs du produit doivent être des liens
- rajouter aussi dans les catégories un lien voir tous les produits

- Pour les évènement : 
    - lors du click sur une catégorie de la barre latérale ou d'un bloc produit, il faut changer l'affichage des produits afin de n'afficher que ceux de cette catégorie.
    - même chose pour les attributs affichés dans les blocs produits
    - lors d'une saisie dans l'input de recherche, à partir de 3 caractères, filtrer les produits affichés afin que leur nom, leur catégorie ou leurs attributs contiennent cette chaine de caractère.
    - lors d'une saisie dans l'input de recherche par prix, si la valeur est bien un chiffre, il faut afficher les produits dont le prix est inférieur à la saisie utilisateur.

- Pour aller plus loin :
    - créer + de 9 produits dans le tableau
    - Afficher 9 produits par défaut
    - mettre des liens en bas de page pour la pagination, autant de lien qu'il y a de produits à afficher (9 par page)
    - lors du click sur un lien de la pagination changer l'affichage des produits
    - Lors des recherche ou des filtres par catégorie, recherche ou prix faire également une pagination si le nombre de produit dépasse 9

*/

/*
let produit = document.getELementById('produits');

var firstname = document.getElementById('firstname').value;
var entry = document.createElement('li');
entry.appendChild(document.createTextNode(firstname));
list.appendChild(entry);

for (produit of listeProduit)  { 

}

let element = `
    <div>
        <h2>${titre}</h2>
        <img src="${image}" alt="${alt}" />
        <p>${prix}</p>
        <p>${categorie}</p>
        <p>${note}</p>
    </div>
    `;

let body = document.getElementById("produits")
body.innerHTML = element.listeProduit

document.getElementById("produits").innerHTML = listeProduit;
*/

function CarteProduit() {
    var result = " ";
    listeProduit.forEach(function (item) {
      result += "<div>" + item.titre + "<img src=" + item.image + "alt=" + item.alt + "/>" + "<p> Prix:" + item.prix + "</p>" + "<p>" + item.categorie + "</p>" + "<p>" + item.note + "</p>" + "</div>";
    });
    
    document.getElementById("produits").innerHTML = result;
  }

