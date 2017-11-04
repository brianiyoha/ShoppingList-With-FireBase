This is a shopping list app with firebase realtime database.

## How To Use This App

To use this app, either create a new ionic project using the ionic node.js utility, or copy the files from this repository to your pc.

*You Have to create a file named firebase.config.ts in the src/app and export your firebase configuration like this*
```ts
 // Initialize Firebase
    export const FIREBASE_CONFIG = {
    apiKey: "<API-KEY>",
    authDomain: "<AUTHDOMAIN>.firebaseapp.com",
    databaseURL: "https://<AUTHDOMAIN>.firebaseio.com",
    projectId: "<PROJECT-ID>",
    storageBucket: "",
    messagingSenderId: "<MESSAGE-SENDER-ID>"
  };
```


### To Install Ionic Using npm CLI:

```bash
$ sudo npm install -g ionic cordova
```

Then, to run it, cd into `shoppinglist` and run:

```bash
$ ionic cordova platform add android
$ ionic cordova run android
```
To run on a web browser, cd into `shoppinglist` and run:

```bash
$ ionic serve
```


