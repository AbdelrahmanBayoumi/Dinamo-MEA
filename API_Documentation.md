# API Documentation

This document outlines the available API endpoints for our application.

## Authentication Endpoints

### User Sign Up

| Method | Endpoint          | Description                       | Request Body                         | Response                           |
|--------|-------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/auth/signup`    | Create a new user account.        | See example below                   | 201 Created with user profile data |

**Example Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "birthday": "1990-08-15",
  "password": "secretpassword",
  "provider": "local"
}
```

### User Login

| Method | Endpoint          | Description                       | Request Body                         | Response                           |
|--------|-------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/auth/login`     | Authenticate a user with email and password. | See example below             | 200 OK with user token              |

**Example Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "secretpassword"
}
```

### User Logout

| Method | Endpoint          | Description                       | Request Body                         | Response                           |
|--------|-------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/auth/logout`    | Logout the authenticated user.    | Not applicable                       | 204 No Content (successful logout)  |

### Request Password Reset

| Method | Endpoint                       | Description                       | Request Body                         | Response                           |
|--------|--------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/auth/forgot-password` | Request to reset the user's password. | See example below              | 200 OK with success message         |

**Example Request Body:**
```json
{
  "email": "john.doe@example.com"
}
```

### Change Password

| Method | Endpoint                | Description                       | Request Body                         | Response                           |
|--------|-------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PATCH  | `/auth/change-password` | Change the authenticated user's password. | See example below             | 200 OK with success message         |

**Example Request Body:**
```json
{
  "currentPassword": "oldsecretpassword",
  "newPassword": "newsecretpassword"
}
```

## User Profile Endpoints

### Get User Profile

| Method | Endpoint          | Description                       | Request Body                         | Response                           |
|--------|-------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/user/profile`   | Get the authenticated user's profile information. | Not applicable                | 200 OK with user profile data       |

### Update User Profile

| Method | Endpoint                | Description                       | Request Body                         | Response                           |
|--------|-------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/user/profile`        | Update the authenticated user's profile. | See example below             | 200 OK with updated profile data    |

**Example Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "birthday": "1990-08-15"
}
```

### Add Address

| Method | Endpoint               | Description                       | Request Body                         | Response                           |
|--------|------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/user/address`        | Add a new address to the authenticated user's profile. | See example below             | 201 Created with added address data |

**Example Request Body:**
```json
{
  "title": "Home",
  "state": "California",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "additionalData": "Apartment 123",
  "phoneNo": "123-456-7890",
  "isDefault": true
}
```

### Update Address

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/user/address/:addressId` | Update a specific address of the authenticated user. | See example below             | 200 OK with updated address data    |

**Example Request Body:**
```json
{
  "title": "Office",
  "phoneNo": "987-654-3210"
}
```

### Delete Address

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/user/address/:addressId` | Delete a specific address from the authenticated user's profile. | Not applicable               | 204 No Content (successful deletion)|

### Add Item to Cart

| Method | Endpoint                | Description                       | Request Body                         | Response                           |
|--------|-------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/user/cart`       | Add items to the authenticated user's cart. | See example below             | 201 Created with updated cart data  |

**Example Request Body:**
```json
{
  "productId": "product_id",
  "amount": 2,
  "notes": "Special instructions"
}
```

### Update Cart Item

| Method | Endpoint                           | Description                       | Request Body                         | Response                           |
|--------|------------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/user/cart/:productId` | Update the quantity or notes of an item in the authenticated user's cart. | See example below             | 200 OK with updated cart data       |

**Example Request Body:**
```json
{
  "amount": 3,
  "notes": "Updated instructions"
}
```

### Remove Item from Cart

| Method | Endpoint                           | Description                       | Request Body                         | Response                           |
|--------|------------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/user/cart/:productId` | Remove an item from the authenticated user's cart. | Not applicable                | 204 No Content (successful removal) |

## Vendor Endpoints

### Create New Vendor

| Method | Endpoint               | Description                       | Request Body                         | Response                           |
|--------|------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/vendors`             | Create a new vendor.              | See example below                    | 201 Created with new vendor data    |

**Example Request Body:**
```json
{
  "name": "Sample Vendor",
  "logo": "https://example.com/vendor_logo.png",
  "avgRating": 4.8,
  "state": "open",
  "location": {
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "workHours": [
    {
      "day": "Monday",
      "startHour": "09:00 AM",
      "closeHour": "05:00 PM"
    },
    {
      "day": "Tuesday",
      "startHour": "09:00 AM",
      "closeHour": "05:00 PM"
    }
  ],
  "type": "Restaurant",
  "products": ["product_id_1", "product_id_2"]
}
```

### Get Vendor Details

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/vendors/:vendorId` | Get vendor details by ID.         | Not applicable                | 200 OK with vendor data             |

### Update Vendor Details

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/vendors/:vendorId` | Update vendor details.            | See example below                    | 200 OK with updated vendor data     |

**Example Request Body:**
```json
{
  "name": "Updated Vendor",
  "avgRating": 4.9,
  "state": "closed",
  "type": "Supplier"
}
```

### Delete Vendor

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/vendors/:vendorId` | Delete a vendor.                  | Not applicable                | 204 No Content (successful deletion)|

## Product Endpoints

### Create New Product

| Method | Endpoint               | Description                       | Request Body                         | Response                           |
|--------|------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/products`            | Create a new product.             | See example below                    | 201 Created with new product data   |

**Example Request Body:**
```json
{
  "category": "Electronics",
  "productName": "Smartphone",
  "price": 599.99,
  "rating": 4.5,
  "description": "A high-end smartphone with advanced features."
}
```

### Get Product Details

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/products/:productId` | Get product details by ID.        | Not applicable                | 200 OK with product data            |

### Update Product Details

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/products/:productId` | Update product details.           | See example below                    | 200 OK with updated product data    |

**Example Request Body:**
```json
{
  "productName": "Updated Smartphone",
  "price": 649.99
}
```

### Delete Product

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/products/:productId` | Delete a product.                 | Not applicable                | 204 No Content (successful deletion)|

## Services Endpoints

### Create New Service

| Method | Endpoint               | Description                       | Request Body                         | Response                           |
|--------|------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/services`            | Create a new service.             | See example below                    | 201 Created with new service data   |

**Example Request Body:**
```json
{
  "category": "Home",
  "subCategory": "Fixing and Cleaning",
  "title": "Home Maintenance",
  "details": "Provide home maintenance services."
}
```

### Get Service Details

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/services/:serviceId` | Get service details by ID.        | Not applicable                | 200 OK with service data            |

### Update Service Details

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/services/:serviceId` | Update service details.           | See example below                    | 200 OK with updated service data    |

**Example Request Body:**
```json
{
  "title": "Updated Home Maintenance",
  "details": "Provide comprehensive home maintenance services."
}
```

### Delete Service

| Method | Endpoint                     | Description                       | Request Body                         | Response                           |
|--------|------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/services/:serviceId` | Delete a service.                 | Not applicable                | 204 No Content (successful deletion)|

### Get Professionals for a Service

| Method | Endpoint                              | Description                       | Request Body                         | Response                           |
|--------|---------------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/services/:serviceId/professionals` | Get all professionals for a specific service. | Not applicable              | 200 OK with list of professionals   |

## Services Order Endpoints

### Create New Service Order

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/services/orders`       | Create a new service order.       | See example below                    | 201 Created with new order data     |

**Example Request Body:**
```json
{
  "serviceId": "service_id",
  "date": "2023-07-31",
  "availableTimeRange": "09:00 AM - 12:00 PM",
  "professionalId": "professional_id",
  "clientLocation": {
    "latitude": 37.7749,
    "longitude": -122.4194
  }
}
```

### Get Service Order Details

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/services/orders/:orderId` | Get service order details by ID.  | Not applicable                | 200 OK with order data              |

### Update Service Order Details

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/services/orders/:orderId` | Update service order details.     | See example below                    | 200 OK with updated order data      |

**Example Request Body:**
```json
{
  "date": "2023-08-01",
  "availableTimeRange": "01:00 PM - 03:00 PM"
}
```

### Delete Service Order

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/services/orders/:orderId` | Delete a service order.           | Not applicable                | 204 No Content (successful deletion)|

## Reviews Endpoints

### Add New Review

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/reviews`                  | Add a new review for a vendor or a product. | See example below             | 201 Created with new review data

    |

**Example Request Body:**
```json
{
  "userId": "user_id",
  "vendorId": "vendor_id",
  "reviewText": "Great experience! Highly recommended.",
  "rating": 5
}
```

### Get Review Details

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/reviews/:reviewId` | Get review details by ID.         | Not applicable                | 200 OK with review data             |

### Update Review Details

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/reviews/:reviewId` | Update review details.            | See example below                    | 200 OK with updated review data     |

**Example Request Body:**
```json
{
  "reviewText": "Excellent service! Best in town.",
  "rating": 4.9
}
```

### Delete Review

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/reviews/:reviewId` | Delete a review.                  | Not applicable                | 204 No Content (successful deletion)|

## Orders Endpoints

### Create New Order

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/orders`                  | Create a new order.               | See example below                    | 201 Created with new order data     |

**Example Request Body:**
```json
{
  "orderItems": [
    {
      "productId": "product_id_1",
      "amount": 2,
      "notes": "Special instructions"
    },
    {
      "productId": "product_id_2",
      "amount": 1
    }
  ],
  "promoCode": "SAMPLECODE123"
}
```

### Get Order Details

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| GET    | `/orders/:orderId` | Get order details by ID.          | Not applicable                | 200 OK with order data              |

### Update Order Details

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| PUT    | `/orders/:orderId` | Update order details.             | See example below                    | 200 OK with updated order data      |

**Example Request Body:**
```json
{
  "orderItems": [
    {
      "productId": "product_id_1",
      "amount": 3
    }
  ],
  "promoCode": "UPDATEDCODE456"
}
```

### Delete Order

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| DELETE | `/orders/:orderId` | Delete an order.                  | Not applicable                | 204 No Content (successful deletion)|

## Order Cancellation Reason Endpoints

### Submit Order Cancellation Reason

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/order-cancellation-reasons` | Submit a reason for order cancellation. | See example below             | 201 Created with submitted reason data |

**Example Request Body:**
```json
{
  "userId": "user_id",
  "orderId": "order_id",
  "reasonText": "Change of plans."
}
```

## Order Return Reason Endpoints

### Submit Order Return Reason

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/order-return-reasons` | Submit a reason for order return. | See example below              | 201 Created with submitted reason data |

**Example Request Body:**
```json
{
  "userId": "user_id",
  "orderId": "order_id",
  "reasonText": "Defective product."
}
```

## Account Deletion Reason Endpoints

### Submit Account Deletion Reason

| Method | Endpoint                         | Description                       | Request Body                         | Response                           |
|--------|----------------------------------|-----------------------------------|--------------------------------------|------------------------------------|
| POST   | `/account-deletion-reasons` | Submit a reason for account deletion. | See example below           | 201 Created with submitted reason data |

**Example Request Body:**
```json
{
  "userId": "user_id",
  "reasonText": "Moving to a different platform."
}
```
