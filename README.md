# Firebase Database Operation Before Connection

This repository demonstrates a common error in Firebase applications: attempting database operations before the Firebase connection is established.  The code illustrates the problem and its solution using Promises or async/await.

## Problem

When using Firebase's Realtime Database, you must ensure the connection is complete before attempting any read or write operations.  Otherwise, you'll encounter errors, often related to network connectivity or unavailability of the database.

## Solution

The solution utilizes Promises or async/await to ensure the Firebase app is initialized and ready before interacting with the database.  This ensures a reliable and error-free experience.

## How to Run

1. Clone this repository.
2. Install dependencies: `npm install`
3. Configure your Firebase project and add your `firebaseConfig` in `firebaseConfig.js`
4. Run the application: `npm start`