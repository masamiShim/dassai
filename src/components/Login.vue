<template>
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
            </v-layout>
        </v-container>
    </v-form>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VBtn, VContainer, VFlex, VForm, VLayout, VTextField} from 'vuetify/lib';
  import catalog from '@/api/Validations';

  @Component({
    components: {
      VFlex, VLayout, VContainer, VForm, VTextField, VBtn,
    },
  })
  export default class Login extends Vue {
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
    alert('submit2');
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
