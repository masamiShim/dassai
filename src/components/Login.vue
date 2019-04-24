<template>
    <v-content>
        <v-form ref="form" lazy-validation>
            <v-container fluid fill-height>
                <v-layout
                        justify-center
                        text-xs-center
                        wrap
                        row
                >
                    <v-flex
                            xs12
                            sm10
                            md8
                    >
                        <h2 class="headline font-weight-bold mb-3">Login Form</h2>
                    </v-flex>
                    <v-flex xs12
                            sm8
                            md8
                    >
                        <v-text-field
                                v-model="email"
                                :rules="[rules.required, rules.email]"
                                label="E-mail"
                                placeholder="xxxx@example.com"
                                required></v-text-field>
                    </v-flex>
                    <v-flex xs12
                            sm8
                            md8
                    >
                        <v-text-field
                                v-model="password"
                                :append-icon="show? 'visibility' : 'visibility_off'"
                                :rules="[rules.required, (value) => rules.counter(value, passwordMaxLen)]"
                                label="password"
                                placeholder=""
                                :count="passwordMaxLen"
                                hint="At least 8 character"
                                :type="show ? 'text' : 'password'"
                                required
                                @click:append="show = !show"></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-btn color="primary" @click="submit">Submit</v-btn>
                    </v-flex>
                    <v-flex xs12>
                        <v-btn color="secondary" @click="loginByAnonymous">匿名ログイン</v-btn>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-form>
    </v-content>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VBtn, VContainer, VFlex, VForm, VLayout, VTextField} from 'vuetify/lib';
  import catalog from '@/api/Validations';
  import * as firebase from 'firebase/app';

  @Component({
  components: {
    VFlex, VLayout, VContainer, VForm, VTextField, VBtn,
  },
})
export default class Login extends Vue {
  public isAnonymous?: boolean;
  public uid?: string;
  public valid: boolean = false;
  public passwordMaxLen: number = 20;
  public email?: string = '';
  public password?: string = '';
  public show?: boolean = false;
  public rules: object = catalog;


  public submit() {
    // noinspection TypeScriptUnresolvedFunction
    if ((this.$refs.form as any).validate()) {
      alert('submit1');
      return;
    }
  }

  public loginByAnonymous() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAnonymous = user.isAnonymous;
        this.uid = user.uid;
        localStorage.setItem('isAnonymous', JSON.stringify(user.isAnonymous));
        localStorage.setItem('userId', user.uid);
        this.$router.push('/index');
      } else {
        localStorage.removeItem('isAnonymous');
        localStorage.removeItem('userId');
        this.$router.push('/login');
      }
    });
  }

  public created() {
    if (localStorage.getItem('userId')) {
      this.$router.push('/index');
    }

  }

}
</script>

<style>

</style>
