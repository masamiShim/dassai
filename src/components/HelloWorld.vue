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
                    <h2 class="headline font-weight-bold mb-3">Important Links</h2>
                </v-flex>
                <v-flex xs12
                        sm8
                        md8
                        lg6
                >
                    <v-text-field
                            v-model="email"
                            :rules="emailRules"
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
                            :rules="passwordRules"
                            label="password"
                            placeholder=""
                            count="10"
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

    @Component
    export default class HelloWorld extends Vue {
        public email?: string;
        public password?: string;
        public show?: boolean = false;

        public submit() {
            alert('submit');
        }
    }
</script>

<style>

</style>
