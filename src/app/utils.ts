export const getWindDirection = (degree: number): string => {
  const directions: string[] = [
    "north",
    "northEast",
    "east",
    "southEast",
    "south",
    "southWest",
    "west",
    "northWest",
  ];
  const index: number = (Math.round((degree * 8) / 360) + 8) % 8;
  return directions[index];
};
