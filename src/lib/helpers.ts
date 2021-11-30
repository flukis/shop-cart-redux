import { dataCartInterface } from "lib/seed";
// Formatting helpers
function removeSpace(input: string): string {
  let result: string = input.replace(/\s/g, "");
  result.toLocaleLowerCase();
  return result;
}

// Capitalize first letter
function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

// Show price in cart
function showPriceInCart(a: number, b: number): string {
  const res: number = a * b * 80;
  if (res >= 1000000) return `$ ${(res / 1000000).toFixed(2)} M`;
  if (res >= 1000 && res < 1000000) return `$ ${(res / 1000).toFixed(2)} K`;
  else return `$ ${res}`;
}

// Count price
function countTotalPrice(data: dataCartInterface[]) {
  let result: number = 0;
  data.forEach((item) => {
    const a_res: number = item.price * item.itemInCart.item;
    result = result + a_res;
  });
  return result;
}

export { removeSpace, capitalizeFirstLetter, showPriceInCart, countTotalPrice };
