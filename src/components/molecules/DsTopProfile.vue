<template>
    <v-layout row wrap class="mb-4 mt-4">
        <v-flex xs12>
            <v-card>
                <v-img
                        class="white--text"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                >
                    <v-container fill-height fluid  align-center>
                        <v-layout fill-height>
                            <v-flex xs12>
                                <v-avatar
                                        :tile="false"
                                        :size="80"
                                >
                                    <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
                                </v-avatar>
                                <div style="text-align: center">User Name</div>
                                <div style="text-align: center">Top 10 Australian beaches</div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-title>
                    <div>
                        <span class="grey--text">Number 10</span><br>
                        <span>Whitehaven Beach</span><br>
                        <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-layout row wrap>
            <v-flex xs3>
                <v-card>
                    <v-flex xs12>
                        <v-icon large color="green darken-2">business</v-icon>
                    </v-flex>
                    お気に入り:酒
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card>
                    <v-flex xs12>
                        <v-icon large color="blue darken-2">chat</v-icon>
                    </v-flex>
                    お気に入り:場所
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card>
                    <v-flex xs12>
                        <v-icon large color="purple darken-2">dialpad</v-icon>
                    </v-flex>
                    お気に入り:友達
                </v-card>
            </v-flex>
            <v-flex xs3>
                <v-card>
                    <v-flex xs12>
                        <v-icon large color="teal darken-2">email</v-icon>
                    </v-flex>
                    お酒を購入する
                </v-card>
            </v-flex>
        </v-layout>
    </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {VFlex} from 'vuetify/lib';

@Component({
  components: {
    VFlex,
  },
})
export default class DsTopProfile extends Vue {
}
</script>

<style scoped>

</style>
