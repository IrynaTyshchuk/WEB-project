function generateDateRange(start, end) {
  const dates = [];
  let current = new Date(start);
  const last = new Date(end);
  while (current <= last) {
    dates.push(current.toISOString().split('T')[0]);
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

const movies = [
  {
    title: "Громоверці",
    description: "Фантастичний бойовик від Marvel.",
    genre: "Бойовик",
    time: "18:30",
    image: "https://upload.wikimedia.org/wikipedia/uk/a/ac/%D0%93%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%B5%D1%80%D0%B6%D1%86%D1%96%2A%2C_2025%2C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    dates: generateDateRange("2025-05-21", "2025-06-06")
  },
  {
    title: "Квіти України",
    description: "Документальний фільм про природу.",
    genre: "Документальний",
    time: "16:00",
    image: "https://dzygamdb.com/images/origin/projects/6176/f_18984.jpg",
    dates: generateDateRange("2025-05-20", "2025-06-01")
  },
  {
    title: "Ритуал",
    description: "Містичний трилер про давній обряд у лісі.",
    genre: "Жахи",
    time: "21:00",
    image: "https://upload.wikimedia.org/wikipedia/ru/0/08/%D0%A0%D0%B8%D1%82%D1%83%D0%B0%D0%BB_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%2C_2025%29.jpg",
    dates: generateDateRange("2025-05-23", "2025-06-04")
  },
  {
    title: "Як приборкати дракона",
    description: "Анімаційна пригода про дружбу з драконом.",
    genre: "Мультфільм",
    time: "14:00",
    image: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/bc/%D0%9A%D0%B0%D0%BA_%D0%BF%D1%80%D0%B8%D1%80%D1%83%D1%87%D0%B8%D1%82%D1%8C_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg/500px-%D0%9A%D0%B0%D0%BA_%D0%BF%D1%80%D0%B8%D1%80%D1%83%D1%87%D0%B8%D1%82%D1%8C_%D0%B4%D1%80%D0%B0%D0%BA%D0%BE%D0%BD%D0%B0_%28%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%29.jpg",
    dates: generateDateRange("2025-05-18", "2025-06-03")
  },
  {
    title: "Небезпечна тварина",
    description: "Трилер про генетичний експеримент, що пішов не так.",
    genre: "Трилер",
    time: "20:00",
    image: "https://multiplex.ua/images/39/34/39344d316990e5b89f5e7127e6728255.jpeg",
    dates: generateDateRange("2025-05-25", "2025-06-07")
  },
  {
    title: "Ліло і Стіч",
    description: "Веселий мультфільм про дівчинку та її інопланетного друга.",
    genre: "Мультфільм",
    time: "12:00",
    image: "https://upload.wikimedia.org/wikipedia/uk/5/51/%D0%9B%D1%96%D0%BB%D0%BE_%D1%96_%D0%A1%D1%82%D1%96%D1%87%2C_2025%2C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    dates: generateDateRange("2025-05-19", "2025-06-05")
  },
  {
    title: "Уроки мистецтва пінгвіна",
    description: "Дитячий мультфільм про пінгвіна, який мріє стати художником.",
    genre: "Сімейний",
    time: "10:00",
    image: "https://static.hdrezka.ac/i/2025/5/22/zc15cea8972c6kn77j55i.jpg",
    dates: generateDateRange("2025-05-22", "2025-06-08")
  },
  {
    title: "Компаньйон",
    description: "Містичний трилер про ідеального супутника з темним минулим.",
    genre: "Трилер",
    time: "19:30",
    image: "https://upload.wikimedia.org/wikipedia/uk/f/f0/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%8C%D0%B9%D0%BE%D0%BD_2025.jpg",
    dates: generateDateRange("2025-05-26", "2025-06-10")
  },
  {
    title: "Білосніжка",
    description: "Жива адаптація класичної казки з Рейчел Зеглер і Галь Гадот.",
    genre: "Фентезі",
    time: "17:00",
    image: "https://upload.wikimedia.org/wikipedia/uk/thumb/3/3f/%D0%91%D1%96%D0%BB%D0%BE%D1%81%D0%BD%D1%96%D0%B6%D0%BA%D0%B0%2C_2025%2C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg/250px-%D0%91%D1%96%D0%BB%D0%BE%D1%81%D0%BD%D1%96%D0%B6%D0%BA%D0%B0%2C_2025%2C_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    dates: generateDateRange("2025-05-21", "2025-06-05")
  },
  {
    title: "Minecraft: Фільм",
    description: "Пригодницька історія в кубічному світі Minecraft.",
    genre: "Фентезі",
    time: "20:15",
    image: "https://upload.wikimedia.org/wikipedia/uk/thumb/5/5c/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_Minecraft_%D0%A4%D1%96%D0%BB%D1%8C%D0%BC.jpg/250px-%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_Minecraft_%D0%A4%D1%96%D0%BB%D1%8C%D0%BC.jpg",
    dates: generateDateRange("2025-05-27", "2025-06-11")
  },
  {
    title: "Список мрій",
    description: "Жінка вирушає в подорож, щоб здійснити свої мрії.",
    genre: "Драма",
    time: "22:00",
    image: "https://uaserials.com/posters/10532.jpg",
    dates: generateDateRange("2025-05-24", "2025-06-09")
  },
];

export default movies;
