/*
  ФИНАЛЬНЫЕ ТИТРЫ — страница credits.html
  ───────────────────────────────────────
  Каждый блок { ... } — одна группа титров.

  title  мелкая подпись над строками (роль, раздел). Можно не писать
  lines  строки блока, каждая в кавычках, через запятую
  big    true = крупный блок (для названия в начале)

  Порядок в файле = порядок на экране. Логотип и © в конце сайт добавляет сам.
  Чтобы добавить блок: скопируй любой { ... } вместе с запятой после него.

  CREDITS_SPEED — скорость прокрутки. Больше = быстрее. 40–60 выглядит как в кино.
*/

const CREDITS_SPEED = 45;

const CREDITS = [
  {
    big: true,
    lines: ['AKW THE CREATOR'],
  },
  {
    title: 'Collaboration',
    lines: ['B1sen', 'VernbI'],
  },
  {
    title: 'Duken',
    lines: [
      'Akw Arqar',
      'Akw Bars',
      'Akw Burkit',
      'Akw Kaw',
      'Akw Monument',
      'Akw x B1sen Bandana',
      'Akw x B1sen Bandana Army',
      'Akw x B1sen x VernbI Flame',
    ],
  },
  {
    title: 'Music',
    lines: ['Hey Mama — Kanye West'],
  },

  // Пример блока с ролью — убери // и впиши своё:
  // {
  //   title: 'Design',
  //   lines: ['Akw'],
  // },
];
