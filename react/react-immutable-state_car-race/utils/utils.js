export function getRandomDistance() {
  return Math.floor(Math.random() * 10) + 55;
}

export const initialCars = [
  {
    emoji: "🚗",
    position: { x: 0, lastDistance: 0 },
  },
  {
    emoji: "🚙",
    position: { x: 0, lastDistance: 0 },
  },
  {
    emoji: "🏎",
    position: { x: 0, lastDistance: 0 },
  },
  {
    emoji: "🚕",
    position: { x: 0, lastDistance: 0 },
  },
  {
    emoji: "🚓",
    position: { x: 0, lastDistance: 0 },
  },
];
