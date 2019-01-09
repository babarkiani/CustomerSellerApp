// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDoimTwcDYm_f7PlRMsajBB1ywMu-4PI8w',
    authDomain: 'newapp-c5060.firebaseapp.com',
    databaseURL: 'https://newapp-c5060.firebaseio.com',
    projectId: 'newapp-c5060',
    storageBucket: 'newapp-c5060.appspot.com',
    messagingSenderId: '1037548483402'
  },
  stripeKey: {PublishableKey: 'pk_test_Ahs6RHBxHZneHezwTVMgBRzu'}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
