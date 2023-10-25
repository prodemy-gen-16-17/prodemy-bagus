export default function findMethodByIdInData(data, key, id) {
  for (const element of data) {
    let shippingMethods = element[key];
    let found = shippingMethods.find((method) => method.id === id);

    if (found) {
      return found;
    }
  }
  return null;
}
