export const costForm = (cost: number) =>
  cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
