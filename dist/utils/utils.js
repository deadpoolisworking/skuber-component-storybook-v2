export const costForm = (cost) => cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
