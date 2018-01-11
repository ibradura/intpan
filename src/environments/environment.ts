// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: { // şahsi hesabım:
    apiKey: "AIzaSyAKSvq7Mp8d5NsWw8aoEQ83qCWnexnZgW0",
    authDomain: "interbymngkargo-4934b.firebaseapp.com",
    databaseURL: "https://interbymngkargo-4934b.firebaseio.com",
    projectId: "interbymngkargo-4934b",
    storageBucket: "interbymngkargo-4934b.appspot.com",
    messagingSenderId: "527467567325"
  }
  // inter.cloud hesabı:
  /*{
    apiKey: "AIzaSyAaS3Kk44iDzleDqksYHSf0-82zoroagPA",
    authDomain: "inter-78603.firebaseapp.com",
    databaseURL: "https://inter-78603.firebaseio.com",
    storageBucket: "inter-78603.appspot.com",
    messagingSenderId: "47042999594"
  }*/
};
