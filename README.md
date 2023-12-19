# Restaurant Ordering System

## Frontend

### Description

This part of the project is a React-based frontend for a restaurant ordering system. It provides users with a user-friendly interface to view the menu, add items to their cart, and place orders.

### Features

- **Menu Page:** Displays a list of dishes available for order.
- **Cart Page:** Shows the selected items in the cart with options to adjust quantities.
- **Checkout Page:** Allows users to enter their details and place an order.

## Backend

### Description

The backend of the restaurant ordering system is built with Node.js and Express. It handles requests related to dishes, orders, and serves as the server for the frontend.

### Features

- **Dishes Endpoint:** GET endpoint (`/api/dishes`) to retrieve a list of available dishes.
- **Orders Endpoint:**
  - GET endpoint (`/api/orders`) to retrieve a list of orders.
  - POST endpoint (`/api/orders`) to create a new order.
  - DELETE endpoint (`/api/orders`) to delete all orders.
