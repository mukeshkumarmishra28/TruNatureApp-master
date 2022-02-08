import Realm from "realm";

let app;

// Returns the shared instance of the Realm app.
export function getRealmApp() {

  if (app === undefined) {
    const appId = "kajmahalapp-wiceq"; // Set Realm app ID here.amitdb-kasrz
    //const appId = "chatapp-prdfg"; // Set Realm app ID here.
    const appConfig = {
      id: appId,
      timeout: 10000,
      // app: {
      //   name: "default",
      //   version: "0",
      // },
    };
    app = new Realm.App(appConfig);
 // console.log(app.currentUser)
  }
  return app;
}
