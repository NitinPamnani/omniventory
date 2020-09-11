# omniventory

Omniventory is a simple inventory management system having its backend built in Node, Express, MySQL and Frontend in react and react-semantic-ui components.

## Installation

The application is built in two parts; to get the backend running on local, after taking the checkout run the following in your omniventory directory:

```bash
node index
```
now in a new terminal window, navigate to the /omniventory/dashboard directory and run

```bash
npm start
```

## Usage
Currently the system supports only four end points:
```java
GET /products - returns all the products
GET /suppliers - returns all the suppliers of the products

POST /makePurchase - adds to inventory and records purchase from suppliers
POST /placeOrder - removes from inventory and records orders made

```



