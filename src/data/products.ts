interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  features?: string[];
  material?: string;
  weight?: string;
  certification?: string;
}







const products: Product[] = [
  {
    id: 'ring-1',
    category: 'rings',
    title: "Bague Diamant Solitaire",
    description: "Un diamant solitaire d'exception monté sur or blanc 18 carats, incarnant l'élégance intemporelle et le raffinement absolu.",
    price: 3500,
    image: "https://www.i-diamants.com/medias_upload/moxie/solitaire-diamant-or-blanc/solitaire-diamant-or-blanc.jpg",
    features: [
      "Diamant de 1 carat certifié",
      "Or blanc 18 carats",
      "Taille brillant",
      "Clarté VS1"
    ],
    material: "Or blanc 18 carats",
    weight: "3.5g",
    certification: "Certificat GIA"
  },
  {
    id: 'ring-2',
    category: 'rings',
    title: "Alliance Or Rose",
    description: "Alliance délicate en or rose sertie de diamants, symbolisant l'amour éternel avec une touche de modernité.",
    price: 1200,
    image: "https://guildedesorfevres.fr/16776-large_default/alliance-or-rose-et-diamants.jpg",
    features: [
      "Pavage diamants",
      "Or rose 18 carats",
      "Design contemporain",
      "Confort optimal"
    ],
    material: "Or rose 18 carats",
    weight: "4g",
    certification: "Certificat de qualité SK"
  },

  
    {
      "id": "necklace-1",
      "category": "necklaces",
      "title": "Collier Diamant Cascade",
      "description": "Cascade de diamants sur or blanc 18 carats, un bijou élégant pour sublimer votre décolleté.",
      "price": 5200,
      "image": "https://www.aurorasecrets.fr/wp-content/uploads/2019/02/parure-bijoux-mariage-zircon-3.jpg",
      "features": [
        "Diamants de qualité supérieure",
        "Or blanc 18 carats",
        "Design cascade élégant"
      ],
      "material": "Or blanc 18 carats",
      "weight": "15g",
      "certification": "Certificat GIA"
    },
    {
      "id": "necklace-2",
      "category": "necklaces",
      "title": "Pendentif Perle Tahiti",
      "description": "Perle de Tahiti montée sur or jaune, un pendentif au charme exotique.",
      "price": 2800,
      "image": "https://www.boutiqueperlenoire.com/cdn/shop/files/S4b7a1ea3113049518506e6f8b085adfbv_1800x1800.webp?v=1717611408",
      "features": [
        "Perle de Tahiti authentique",
        "Or jaune 18 carats",
        "Style épuré et raffiné"
      ],
      "material": "Or jaune 18 carats",
      "weight": "7g",
      "certification": "Certificat de qualité SK"
    },
    {
      "id": "necklace-3",
      "category": "necklaces",
      "title": "Collier Saphir Royal",
      "description": "Saphir bleu serti de diamants sur or blanc, une pièce royale et intemporelle.",
      "price": 6500,
      "image": "https://www.bijouterieballanger.fr/cdn/shop/products/colliersaphirtaillepoiresurmonted_unebarrettede5diamants.jpg?v=1670082653&width=1946",
      "features": [
        "Saphir bleu de 2 carats",
        "Diamants de haute qualité",
        "Or blanc 18 carats"
      ],
      "material": "Or blanc 18 carats",
      "weight": "10g",
      "certification": "Certificat GIA"
    },
    {
      "id": "watch-1",
      "category": "watches",
      "title": "Montre Chronographe Or Rose",
      "description": "Chronographe automatique en or rose, une montre élégante et sophistiquée.",
      "price": 12500,
      "image": "https://cdn.brandfield.fr/media/catalog/product/cache/2148b6ececc229623c3ab7d3f3406f16/4/0/4051432966279_1_5jj8zcrcmfy8svnu.jpg",
      "features": [
        "Mouvement automatique suisse",
        "Or rose 18 carats",
        "Chronographe multifonction"
      ],
      "material": "Or rose 18 carats",
      "weight": "150g",
      "certification": "Certificat Swiss Made"
    },
    {
      "id": "watch-2",
      "category": "watches",
      "title": "Montre Classic Acier",
      "description": "Montre classique en acier inoxydable, un choix sobre et élégant pour tous les jours.",
      "price": 8900,
      "image": "https://www.cdiscount.com/pdt2/6/8/9/4/700x700/auc1685432098689/rw/montre-classique-pour-femme-avec-bracelet-en-acier.jpg",
      "features": [
        "Acier inoxydable",
        "Design minimaliste",
        "Étanchéité jusqu'à 50 mètres"
      ],
      "material": "Acier inoxydable",
      "weight": "120g",
      "certification": "Certificat de qualité européenne"
    },
    {
      "id": "watch-3",
      "category": "watches",
      "title": "Montre Squelette Or",
      "description": "Montre squelette automatique en or jaune, une pièce unique avec un design transparent.",
      "price": 15800,
      "image": "https://charlie-paris.com/cdn/shop/files/montre-femme-squelette-automatique-initial-acier-DSC09434.jpg",
      "features": [
        "Mouvement squelette automatique",
        "Or jaune 18 carats",
        "Verre saphir"
      ],
      "material": "Or jaune 18 carats",
      "weight": "200g",
      "certification": "Certificat Swiss Made"
    },
    {
      "id": "earring-1",
      "category": "earrings",
      "title": "Boucles Diamant Cascade",
      "description": "Cascade de diamants en or blanc, pour un effet glamour et élégant.",
      "price": 4200,
      "image": "https://i.etsystatic.com/15734554/r/il/303575/3094950462/il_570xN.3094950462_qntx.jpg",
      "features": [
        "Diamants de 0.5 carat",
        "Or blanc 18 carats",
        "Design cascade élégant"
      ],
      "material": "Or blanc 18 carats",
      "weight": "12g",
      "certification": "Certificat GIA"
    },
    {
      "id": "earring-2",
      "category": "earrings",
      "title": "Créoles Perles",
      "description": "Créoles serties de perles de culture, un look chic et intemporel.",
      "price": 2800,
      "image": "https://laparisiennedesiles.fr/cdn/shop/files/1A5B4116-527D-4C7A-9CA4-03A8165BA5DE.png?v=1694704650&width=1200",
      "features": [
        "Perles de culture blanches",
        "Or jaune 18 carats",
        "Design classique"
      ],
      "material": "Or jaune 18 carats",
      "weight": "8g",
      "certification": "Certificat de qualité SK"
    },
    {
      "id": "earring-3",
      "category": "earrings",
      "title": "Puces Saphir Royal",
      "description": "Puces en saphir bleu et diamants, pour une touche de couleur et d'élégance.",
      "price": 3500,
      "image": "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80",
      "features": [
        "Saphir bleu de 1 carat",
        "Diamants de haute qualité",
        "Or blanc 18 carats"
      ],
      "material": "Or blanc 18 carats",
      "weight": "5g",
      "certification": "Certificat GIA"
    }
  
  

  // Ajoutez d'autres produits ici
];

export const getProductById = (category: string, id: string): Product | undefined => {
  return products.find(product => product.category === category && product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export default products;