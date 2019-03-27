<template>
    <v-form>
        <v-container>
            <v-layout
                    justify-center
                    text-xs-center
                    wrap
            >
                <v-flex
                        xs12
                        sm10
                        md8
                        lg6
                >
                    <h2 class="headline font-weight-bold mb-3">Login Form</h2>
                </v-flex>
                <v-flex xs12
                        sm8
                        md8
                        lg6
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
                        lg6
                >
                    <v-text-field
                            v-model="password"
                            :append-icon="show? 'visibility' : 'visibility_off'"
                            :rules="[rules.required, rules.counter]"
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
            </v-layout>
        </v-container>
    </v-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { VFlex, VLayout, VContainer, VForm, VTextField, VBtn } from 'vuetify/lib';

@Component({
             components: {
               VFlex, VLayout, VContainer, VForm, VTextField, VBtn,
             },
           })
export default class HelloWorld extends Vue {

  public passwordMaxLen: number = 20;
  public email?: string;
  public password?: string;
  public show?: boolean;
  public rules: object = {
      required: (value: string) => !!value || 'Required.',
      counter: (value: string) => value.length <= this.passwordMaxLen || `Max ${this.passwordMaxLen} characters`,
      email: (value: string) => {
          // const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))
          // @((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          // return pattern.test(value) || 'Invalid e-mail.';
        return true;
    },
  };
  constructor() {
    super();
    this.email = '';
    this.password = '';
    this.show = false;
  }

  public submit() {
    alert('submit');
  }

  get emailRules(): string[] {
    return [];
  }

  get passwordRules(): string[] {
    return [];
  }

}
</script>

<style>

</style>
