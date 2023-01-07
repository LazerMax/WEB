const characters = [
  { name: '"sword"', health: 10 },
  { name: '"which"', health: 100 },
  { name: '"which"', health: 0 },
  { name: '"archer"', health: 0 },
];

const alive = characters.filter((item) => item.health > 0);
