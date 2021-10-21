function getRandomDate(from: Date, to: Date) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}

function randomSkillset() {
  return skills
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, 3)
    .join(", ");
}

const skills = [
  "C#",
  "MongoDB",
  "Docker",
  "TeamCity",
  "Trello",
  "Agile Retrospectives",
  "GitHub",
  "Git",
  "Domain Driven Design (DDD)",
  "Unit Testing",
  "Selenium",
  "Kibana",
  "AngularJS",
  "JavaScript",
  "TestCafe",
  "Java",
  "Angular",
  "Spring Boot",
  "SQL",
  "MQSeries",
  "REST",
  "SOAP",
  "Test Driven Development (TDD)",
  "Pair Programming",
  "Cypress",
  "Product Owner",
  "Product Manager",
  "Agile Coach",
  "Interim CTO",
  "Scrum Master",
  "React",
  "iOS",
];

export interface Boid {
  firstName: string;
  lastName: string;
  id: number;
  availableFrom: string;
  skillset: string;
}
export const returnedBoids: Boid[] = [
  {
    firstName: "Babe",
    lastName: "Bennett",
    id: 0,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toLocaleDateString("DE"),
    skillset: randomSkillset(),
  },
  {
    firstName: "Balthazar",
    lastName: "Blake",
    id: 1,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Benjamin",
    lastName: "Button",
    id: 2,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Betsy",
    lastName: "Bell",
    id: 3,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Billy",
    lastName: "Brown",
    id: 4,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Bobby",
    lastName: "Boucher",
    id: 5,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Chris",
    lastName: "Cole",
    id: 6,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Clara",
    lastName: "Clayton",
    id: 7,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Dale",
    lastName: "Denton",
    id: 8,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Dawn",
    lastName: "Davenport",
    id: 9,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Donnie",
    lastName: "Darko",
    id: 10,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Donny",
    lastName: "Donowitz",
    id: 11,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Francine",
    lastName: "Fishpaw",
    id: 12,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Grant",
    lastName: "Grant",
    id: 13,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Heather",
    lastName: "Holloway",
    id: 14,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Hubert",
    lastName: "Hawkins",
    id: 15,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "James",
    lastName: "Johnston",
    id: 16,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Jared",
    lastName: "James",
    id: 17,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Jenny",
    lastName: "Johnson",
    id: 18,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Leta",
    lastName: "Lestrange",
    id: 19,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Linda",
    lastName: "Litske",
    id: 20,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Lorne",
    lastName: "Lutch",
    id: 21,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Marty",
    lastName: "McFly",
    id: 22,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Nemo",
    lastName: "Nobody",
    id: 23,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Nick",
    lastName: "Naylor",
    id: 24,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Penny",
    lastName: "Priddy",
    id: 25,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Ray",
    lastName: "Reed",
    id: 26,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Richard",
    lastName: "Riddick",
    id: 27,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Saul",
    lastName: "Silver",
    id: 28,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Steve",
    lastName: "Stifler",
    id: 29,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Sylvia",
    lastName: "Stickles",
    id: 30,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Tony",
    lastName: "Taira",
    id: 31,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Tracy",
    lastName: "Turnbald",
    id: 32,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Veronica",
    lastName: "Vaughn",
    id: 33,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Vic",
    lastName: "Vega",
    id: 34,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Vicki",
    lastName: "Vallencourt",
    id: 35,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Vincent",
    lastName: "Vaga",
    id: 36,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Virginia",
    lastName: "Venit",
    id: 37,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Wade",
    lastName: "Walker",
    id: 38,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
  {
    firstName: "Wicket",
    lastName: "Wystri",
    id: 39,
    availableFrom: getRandomDate(
      new Date(2021, 10, 28),
      new Date(2022, 2, 24)
    ).toDateString(),
    skillset: randomSkillset(),
  },
];
