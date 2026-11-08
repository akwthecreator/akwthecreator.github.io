/*
  ТОВАРЫ DUKEN
  ────────────
  Чтобы добавить товар: скопируй один блок от {  до  }, вместе с запятой после него,
  вставь куда нужно и поменяй значения. Порядок в этом файле = порядок на сайте.
  Номера 01, 02, 03… сайт ставит сам.

  name       название
  price      цена числом, без пробелов: 13500 → на сайте «13 500 KZT»
  available  false = товара нет: вместо цены «NOT AVAILABLE», ALU ведёт в директ Instagram
  sizes      размеры через пробел
  front      фото спереди (файл лежит в той же папке, что и duken.html)
  back       фото сзади. Если фото одно, строку не пиши
  cover      'back' = в сетке показывать фото сзади
  color      цвет, если у модели несколько расцветок. Можно не писать
  link       ссылка на Kaspi

  Текст пиши в кавычках '...', после каждой строки запятая.
  Если сломалась кавычка или запятая, на странице появится «products.js ERROR».
*/

const PRODUCTS = [
  {
    name: 'Akw x B1sen Bandana',
    available: false,
    sizes: '28x28 35x35 42x42 50x50 64x64',
    front: 'bsnBandana.webp',
  },
  {
    name: 'Akw x B1sen Bandana Army',
    available: false,
    sizes: '28x28 35x35 42x42 50x50 64x64',
    front: 'BsnArmy1200.webp',
  },
  {
    name: 'Akw x B1sen x VernbI Flame',
    available: false,
    sizes: 'S M L XL XXL',
    front: 'BsnFire1200F.webp',
    back: 'BsnFire1200B.webp',
    cover: 'back',
  },
  {
    name: 'Akw Arqar',
    price: 13500,
    sizes: 'S M L XL XXL',
    front: 'ArqarBF.webp',
    back: 'ArqarBB.webp',
    cover: 'back',
    link: 'https://l.kaspi.kz/shop/PiBVHj1P7tCeNu8',
  },
  {
    name: 'Akw Bars',
    price: 13600,
    sizes: 'S M L XL XXL',
    front: 'Barys_front_black_tish.webp',
    back: 'Barys_back_black_tish.webp',
    cover: 'back',
    link: 'https://l.kaspi.kz/shop/ABQEwVEHU5m2XgD',
  },
  {
    name: 'Akw Burkit',
    price: 13600,
    sizes: 'S M L XL XXL',
    // ВНИМАНИЕ: фото Burkit ещё нет, пока стоят фото Arqar
    front: 'ArqarBF.webp',
    back: 'ArqarBB.webp',
    cover: 'back',
    link: 'https://l.kaspi.kz/shop/iwHkNyt2zLzB8Ey',
  },
  {
    name: 'Akw Kaw',
    price: 13000,
    sizes: 'S M L XL XXL',
    front: 'kaw_front_white.jpg',
    // ВНИМАНИЕ: ссылка такая же, как у Burkit, проверь
    link: 'https://l.kaspi.kz/shop/iwHkNyt2zLzB8Ey',
  },
  {
    name: 'Akw Monument',
    color: 'Black',
    price: 14800,
    sizes: 'S M L XL XXL',
    front: 'Monument_black_Front.jpg',
    back: 'Monument_black_back.jpg',
    // ВНИМАНИЕ: ссылка такая же, как у Burkit, проверь
    link: 'https://l.kaspi.kz/shop/iwHkNyt2zLzB8Ey',
  },
  {
    name: 'Akw Monument',
    color: 'White',
    price: 14800,
    sizes: 'S M L XL XXL',
    front: 'Monument_white_front.jpg',
    back: 'Monument_white_back.jpg',
    // ВНИМАНИЕ: ссылка такая же, как у Burkit, проверь
    link: 'https://l.kaspi.kz/shop/iwHkNyt2zLzB8Ey',
  },
];
