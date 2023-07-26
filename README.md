# Technical Assignment for NestJS Backend Position

This repository contains the results of the technical assignment for the NestJS backend position. The assignment consisted of creating a database schema, proposing an authentication solution, and providing a list of REST endpoints.

## Authentication Solution

The proposed authentication solution for securing the backend endpoints is documented in [Authentication_Solution.md](./API_Documentation.md). It covers the use of email-based authentication for user sign-up and sign-in, along with options to create an account using Facebook, Google, or Apple.

## API Documentation

The API documentation containing the complete list of REST endpoints is available in [API_Documentation.md](API_Documentation.md). It outlines all the endpoints, request methods, request bodies, and responses for each API endpoint.

## Database Schema
The directory [./schema](/schema/) contains separate files for each database schema module. The schemas are written in a way suitable for MongoDB.
Below are the main entities and their respective schemas:

1. **User**
   - firstName (String)
   - lastName (String)
   - email (String)
   - birthday (Date)
   - Wallet (Number)
   - phoneNo (String)
   - password (String)
   - provider (String, enum: ['local', 'facebook', 'google'])
   - Addresses (Array)
     - title (String)
     - state (String)
     - location (Object)
       - latitude (Number)
       - longitude (Number)
     - additionalData (String)
     - phoneNo (String)
     - isDefault (Boolean)
   - Location (Object)
     - latitude (Number)
     - longitude (Number)
   - favorite vendors (Array of ObjectIds referencing Vendor model)
   - favorite products (Array of ObjectIds referencing Product model)
   - Notification Pref (Array of Objects)
     - key (String)
     - value (Boolean)
   - Cart (Object)
     - List of Order Item (Array)
       - productID (ObjectId referencing Product model)
       - amount (Number)
       - size (String)
       - notes (String)
       - VendorID (ObjectId referencing Vendor model)
     - promo code (String)

2. **Vendors**
   - name (String)
   - logo (String)
   - avgRating (Number)
   - reviews (Array of ObjectIds referencing Reviews model)
   - state (String, enum: ['open', 'close'])
   - location (Object)
     - latitude (Number)
     - longitude (Number)
   - workHours (Array)
     - day (String)
     - startHour (String)
     - closeHour (String)
   - Type (String, enum: ['Restaurant', 'Supplier', 'pharmacy'])
   - products (Array of ObjectIds referencing Product model)

3. **Product**
   - category (String)
   - productName (String)
   - price (Number)
   - rating (Number)
   - description (String)

4. **Services**
   - category (String)
   - subCategory (String)
   - title (String)
   - details (String)
   - professionals (Array of ObjectIds referencing ServicesProfessional model)

5. **Services Order**
   - serviceID (ObjectId referencing Services model)
   - date (Date)
   - availableTimeRange (String)
   - professional ID (ObjectId referencing ServicesProfessional model)
   - client location (Object)
     - latitude (Number)
     - longitude (Number)

6. **Reviews**
   - UserID (ObjectId referencing User model)
   - VendorID (ObjectId referencing Vendor model)
   - ReviewText (String)
   - Rating (Number, min: 1, max: 5)
   - created_date (Date)

7. **Orders**
   - OrderID (String)
   - date and time (Date)
   - state (String, enum: ['Delivered', 'Preparing'])
   - List of Order Item (Array)
     - productID (ObjectId referencing Product model)
     - amount (Number)
     - size (String)
     - notes (String)
     - VendorID (ObjectId referencing Vendor model)
   - promo code (String)
   - totalPrice (Number)
   - count of drivers (Number)
   - Address (String)

8. **Order Cancellation Reason**
   - user (Object, referencing User model)
   - OrderID (String)
   - Reason Text (String)

9. **Order Return Reason**
   - user (Object, referencing User model)
   - OrderID (String)
   - Reason Text (String)

10. **Account Deletion Reason**
    - user (Object, referencing User model)
    - Reason Text (String)

Please refer to the individual schema files in the `schema` directory for more detailed information on each entity's schema and relationships.

