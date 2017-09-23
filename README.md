# Thrifty - P2P Shopping Application

This repository contains the database schema, migrations, and seeds for Thrifty a mobile P2P Shopping application. Thrifty was designed to help create a safe friendly environment for buyers and sellers to sell gently used products.

## Getting Started

To get started run the following commands from your terminal.

Please note this setup is for a PostgreSQL database.

```
git clone git@github.com:thrifty-p2p/thrifty-database.git

cd thrifty-database

npm install

createdb thrifty

knex migrate:latest

knex seed:run
```

## Related Repositories 

* [Server](https://github.com/thrifty-p2p/thrifty-server)
* [React Native Client](https://github.com/thrifty-p2p/thrifty-client)

## Built With

* [Node.js](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/) - Relational Database
* [Knexjs](knexjs.org) - For Migrations and Seeds

## Authors

* **Jacob Feldman** - [Thrifty](https://github.com/thrifty-p2p)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
