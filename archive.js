/*
  ARCHIVE — ВСЕ РАБОТЫ
  ────────────────────
  Устроено так же, как products.js у DUKEN.

  Чтобы добавить работу: скопируй одну строку от {  до  }, вместе с запятой после неё,
  вставь в нужный раздел и поменяй значения. Порядок в этом файле = порядок на сайте.
  Номера 01, 02, 03… сайт ставит сам.

  title   название раздела (ряд на странице): MERCH, LOGOS, POSTERS…
  about   короткая подпись под названием. Можно не писать
  works   работы этого раздела

  name    название работы
  year    год. Можно не писать
  photo   картинка (файл лежит в той же папке, что и archive.html). Пока пусто '' — на сайте рамка-заглушка.
          Подходит любой формат кадра: квадрат, вертикальный постер, широкий скриншот
  video   видеофайл .mp4, если работа — ролик. Тогда photo — это обложка. Можно не писать
  note    пара слов о работе. Можно не писать

  Разделы ниже — примерные. Лишний раздел удали целиком от {  title  до  ] },
  новый — скопируй такой же блок и вставь куда нужно.

  Текст пиши в кавычках '...', после каждой строки запятая.
  Если сломалась кавычка или запятая, на странице появится «archive.js ERROR».
*/

const ARCHIVE = [
  {
    title: 'MERCH',
    about: 'QOIMA · artists · DUKEN',
    works: [
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
    ],
  },
  {
    title: 'LOGOS',
    about: 'logos & identity',
    works: [
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
    ],
  },
  {
    title: 'POSTERS',
    about: 'posters & covers',
    works: [
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
    ],
  },
  {
    title: 'WEB & UI',
    about: 'sites, interfaces, icons',
    works: [
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
    ],
  },
  {
    title: '3D',
    about: 'models & renders',
    works: [
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
      { name: 'Work name', year: '', photo: '', note: '' },
    ],
  },
  {
    title: 'VIDEO',
    about: 'effects & motion',
    works: [
      { name: 'Work name', year: '', photo: '', video: '', note: '' },
      { name: 'Work name', year: '', photo: '', video: '', note: '' },
      { name: 'Work name', year: '', photo: '', video: '', note: '' },
      { name: 'Work name', year: '', photo: '', video: '', note: '' },
      { name: 'Work name', year: '', photo: '', video: '', note: '' },
    ],
  },
];
