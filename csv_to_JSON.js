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
        username: (row[0].split("").shift() + row[1]).toLowerCase(),
        email: row[2],
        password: bcrypt.hashSync(row[3], 10)
      }
      allAccounts.push(account);
    }
    fs.writeFile('./data/account.json', JSON.stringify(allAccounts), error => {
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
    fs.writeFile('./data/category.json', JSON.stringify(allCategories), error => {
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
    fs.writeFile('./data/image.json', JSON.stringify(allImages), error => {
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
    fs.writeFile('./data/location.json', JSON.stringify(allLocations), error => {
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
    fs.writeFile('./data/product_category.json', JSON.stringify(allProdCats), error => {
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
    fs.writeFile('./data/product.json', JSON.stringify(allProducts), error => {
      console.log("product.json created");
    });
  });
});

fs.readFile('./data_csv/order_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allOrders = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const order = {
        is_complete: row[1],
        buyer_id: row[2],
        product_id: row[3]
      }
      allOrders.push(order);
    }
    fs.writeFile('./data/order.json', JSON.stringify(allOrders), error => {
      console.log("order.json created");
    });
  });
});

fs.readFile('./data_csv/transaction_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allTransactions = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const transaction = {
        strip_id: row[0],
        order_id: row[1]
      }
      allTransactions.push(transaction);
    }
    fs.writeFile('./data/transaction.json', JSON.stringify(allTransactions), error => {
      console.log("transaction.json created");
    });
  });
});

fs.readFile('./data_csv/product_comment_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allComments = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const product_comment = {
        comment: row[0],
        product_id: row[1],
        account_id: row[2]
      }
      allComments.push(product_comment);
    }
    fs.writeFile('./data/product_comment.json', JSON.stringify(allComments), error => {
      console.log("product_comment.json created");
    });
  });
});


fs.readFile('./data_csv/account_address_table.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allAddress = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const account_address = {
        address: row[0] + ' ' + row[1],
        location_id: row[2],
        account_id: row[3]
      }
      allAddress.push(account_address);
    }
    fs.writeFile('./data/account_address.json', JSON.stringify(allAddress), error => {
      console.log("account_address.json created");
    });
  });
});
