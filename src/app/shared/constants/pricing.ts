export const screenMatrix = [
  // 0 Color
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  // 1 Color
  [5.08, 3.36, 2.23, 1.86, 1.46, 1.3, 1.09, 0.98, 0.9, 0.84, 0.81, 0.79],

  // 2 Color
  [8.78, 5.15, 3.38, 2.72, 2.05, 1.65, 1.41, 1.25, 1.13, 1.05, 0.98, 0.94],

  // 3 Color
  [11.89, 6.5, 4.46, 3.55, 2.64, 2.06, 1.68, 1.49, 1.34, 1.22, 1.13, 1.09],

  // 4 Color
  [15.08, 8.71, 5.58, 4.42, 3.22, 2.48, 1.95, 1.77, 1.57, 1.42, 1.31, 1.22],

  // 5 Color
  [18.19, 10.47, 6.71, 5.28, 3.8, 2.92, 2.27, 2.02, 1.79, 1.61, 1.49, 1.39],

  // 6 Color
  [21.16, 12.12, 7.7, 6.08, 4.31, 3.22, 2.49, 2.21, 1.95, 1.76, 1.62, 1.52],

  // 7 Color
  [24.02, 13.66, 8.86, 6.91, 4.88, 3.64, 2.79, 2.48, 2.18, 1.97, 1.8, 1.68],

  // 8 Color
  [26.77, 15.09, 9.91, 4.52, 5.41, 3.99, 3.08, 2.68, 2.38, 2.13, 1.97, 1.84]
];

export const screenQuantities: any = [
  { from: 12, to: 23, index: 0 },
  { from: 24, to: 35, index: 1 },
  { from: 36, to: 71, index: 2 },
  { from: 72, to: 99, index: 3 },
  { from: 100, to: 199, index: 4 },
  { from: 200, to: 399, index: 5 },
  { from: 400, to: 699, index: 6 },
  { from: 700, to: 999, index: 7 },
  { from: 1000, to: 1749, index: 8 },
  { from: 1750, to: 2499, index: 9 },
  { from: 2500, to: 4999, index: 10 },
  { from: 5000, to: 9999, index: 11 }
];

export const directQuantitiesPrices = [
  { from: 1, to: 1, price: 25 },
  { from: 2, to: 2, price: 22 },
  { from: 3, to: 3, price: 20 },
  { from: 4, to: 4, price: 19 },
  { from: 5, to: 5, price: 18 },
  { from: 6, to: 6, price: 17 },
  { from: 7, to: 7, price: 16 },
  { from: 8, to: 8, price: 15 },
  { from: 9, to: 9, price: 14 },
  { from: 10, to: 10, price: 13 },
  { from: 11, to: 11, price: 12 },
  { from: 12, to: 10000, price: 10 }
];

// export const digitalAreas = {
// 	fullfront: 13.00,
// 	// halffront: 13.00//,
// 	fullback: 13.00,
// 	// halfback: 9.49,
// 	// pocket: 6.49
// }

// export const garment = 7.50;
export const screen = 10.0;
export const tax = 0.086;

export const garments = {
  good: 2.65,
  better: 4.65,
  best: 6.8
};

export default {
  screenMatrix,
  screenQuantities,
  directQuantitiesPrices,
  garments,
  screen,
  tax
};
