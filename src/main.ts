import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';
import './registerServiceWorker';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import FirebaseKey from './firebaseKey';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

const config = {
  apiKey: FirebaseKey.apiKey,
  authDomain: FirebaseKey.authDomain,
  databaseURL: FirebaseKey.databaseURL,
  projectId: FirebaseKey.projectId,
  storageBucket: FirebaseKey.storageBucket,
  messagingSenderId: FirebaseKey.messagingSenderId,
};

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
