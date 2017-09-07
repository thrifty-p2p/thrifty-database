const fs = require('fs');
const csv = require('csv');
const bcrypt = require('bcrypt');

fs.readFile('./data_csv/account_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allAccounts = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const account = {
        first_name: row[0],
        last_name: row[1],
        email: row[2],
        password: bcrypt.hashSync(row[3], 10),
        total_sales: row[4],
        address: row[5],
        location_id: row[6]
      }
      allAccounts.push(account);
    }
    fs.writeFile('./data_json/account.json', JSON.stringify(allAccounts), error => {
      console.log("account.json created");
    });
  });
});

fs.readFile('./data_csv/category_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allCategories = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const categories = {
        name: row[1]
      }
      allCategories.push(categories);
    }
    fs.writeFile('./data_json/category.json', JSON.stringify(allCategories), error => {
      console.log("category.json created");
    });
  });
});

fs.readFile('./data_csv/image_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allImages = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const image = {
        image_url: row[0],
        product_id: row[1],
      }
      allImages.push(image);
    }
    fs.writeFile('./data_json/image.json', JSON.stringify(allImages), error => {
      console.log("image.json created");
    });
  });
});

fs.readFile('./data_csv/location_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allLocations = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const location = {
        city: row[0],
        state: row[1],
        zip_code: row[2]
      }
      allLocations.push(location);
    }
    fs.writeFile('./data_json/location.json', JSON.stringify(allLocations), error => {
      console.log("location.json created");
    });
  });
});

fs.readFile('./data_csv/product_category_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allProdCats = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const prodCat = {
        category_id: row[0],
        product_id: row[1]
      }
      allProdCats.push(prodCat);
    }
    fs.writeFile('./data_json/product_category.json', JSON.stringify(allProdCats), error => {
      console.log("product_category.json created");
    });
  });
});

fs.readFile('./data_csv/product_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allProducts = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const product = {
        title: row[1],
        price: row[2],
        description: row[3],
        is_available: row[4],
        seller_id: row[5]
      }
      allProducts.push(product);
    }
    fs.writeFile('./data_json/product.json', JSON.stringify(allProducts), error => {
      console.log("product.json created");
    });
  });
});
