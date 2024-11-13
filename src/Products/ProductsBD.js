const products = [];
const categories = [];
const features = [];

function ProductsBD(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    const cardArray = [];

    reader.result.split("\n").map((item) => {
      cardArray.push(item);
    });

    cardArray.map((item) => {
      products.push({
        title: item.split("|||")[0],
        price: item.split("|||")[1],
        oldPrice: item.split("|||")[2],
        category: item.split("|||")[3],
        features: item.split("|||")[4],
        description: {
          textMain: item.split("|||")[5].split("///")[0],
          advantageTitle: item.split("|||")[5].split("///")[1],
          advantage1: item.split("|||")[5].split("///")[2],
          advantage2: item.split("|||")[5].split("///")[3],
          advantage3: item.split("|||")[5].split("///")[3],
          advantage4: item.split("|||")[5].split("///")[3],
          textChildren: item.split("|||")[5].split("///")[3],
        },
        apps: item.split("|||")[6],
        material: item.split("|||")[7],
        colors: item.split("|||")[8],
        power: item.split("|||")[9],
        unblocking: item.split("|||")[10],
        sizes: item.split("|||")[11],
        weight: item.split("|||")[12],
        rating: item.split("|||")[13],
        articleNumber: item.split("|||")[14],
        quantity: item.split("|||")[15],
        sale: item.split("|||")[16],
        favorites: item.split("|||")[17],
      });
    });

    categories.push(
      ...products
        .map((item) => {
          return item.category;
        })
        .reduce((result, item) => {
          return result.includes(item) ? result : [...result, item];
        }, [])
    );

    features.push(
      ...products
        .map((item) => {
          return item.features;
        })
        .reduce((result, item) => {
          return result.includes(item) ? result : [...result, item];
        }, [])
    );
  };
}

export { products, categories, features };
export default ProductsBD;
