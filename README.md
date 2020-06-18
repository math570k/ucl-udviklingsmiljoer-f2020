# Udviklingsmiljøer Eksamen

Dette repository består af en REST API bygget med Node.js, Express & Sequelize.

## Installation

Kør `npm install` i roden af projektet for at installere de nødvendige NPM moduler. Kør derefter `npm run dev` for at køre API'en i udviklingstilstand.
Der forfindes også noget test-data der kan indsættes med denne kommando: `npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all`. Kør den **efter** `npm run dev` er blevet kørt første gang.

## Database Configuration

Databasen kan konfigureres efter Sequelize' indstiller i filen `config/config.json`. [Se Sequelize' Documentation](https://sequelize.org/master/manual/migrations.html) for hvordan man sætter databasen op.
Flere forskellige databaser kan benyttes - men bruger som standard Postgres.

## Tilgængelige API Routes

#### Leverandører

**GET** `/api/suppliers`
_Liste med alle leverandører_

**GET** `/api/suppliers/:id`
_Find 1 Leverandør med ID_

**GET** `/api/suppliers/:id/products`
_Find alle leverandørens produkter_

**POST** `/api/suppliers`
_Opret Leverandør_

**PUT** `/api/suppliers/:id`
_Opdater Leverandør med ID_

**DELETE** `/api/suppliers/:id`
_Slet Leverandør med ID_

#### Kategorier

**GET** `/api/categories`
_Liste med alle kategorier_

**GET** `/api/categories/:id`
_Find 1 kategori med ID_

**GET** `/api/categories/:id/products`
_Find alle kategoriens produkter_

**POST** `/api/categories`
_Opret Kategori_

**PUT** `/api/categories/:id`
_Opdater Kategori med ID_

**PUT** `/api/categories/:id`
_Slet Kategori med ID_

#### Produkter

**GET** `/api/products`
_Liste med alle produkter_

**GET** `/api/products/:id`
_Find 1 produkt med ID_

**POST** `/api/products`
_Opret Produkt_

**PUT** `/api/products/:id`
_Opdater Produkt med ID_

**PUT** `/api/products/:id`
_Slet Produkt med ID_
