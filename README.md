TRIEUNNK's MyStore project.

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

First, please run `npm install` to fetch and install all necessary dependencies.
Run `ng serve` or `npm start` for a running the applicaiton. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Components
- in `/components`, it contains `product-item` for rendering single item in the list, it is used in ProductList components.
- in `/pages`, it contains several components:

-- Cart (contains CartItem for rendering the single item in cart)

-- Confirmation 

-- ProductItemDetail

-- ProductList

## Layout

`/layout` renders the app header, showing the title and navigation bar.

## Services
In this application, I designed 2 services:
+ Cart: to list all items in cart, remove/add item from/to the cart, generate the billing information.
+ Product: to fetch the `data.json` file and return the list of products.

## Models

I defined 2 models across the application, which are placed at `/src/app/models`.
- BillingInformation - The model defines the stucture of billing (receiver's name, address, credit card and total prices)
- Product - the model defines the properties of each Product (id, name, image url, description...)

## App routing
- The main page: `/` and `/products` route will display the list of products.
- The product detail: `/products/:productId` will display the information of one product, containing description, price, and its image.
- The cart detail: `/cart` will display the cart information which renders the list of items, and the user info form. It shows the empty message if there's no item in the cart.
- The confirmation detail page: `/confirmation` would inform that the order has been confirmed.
- Other routes will be redirect to the main page `/`