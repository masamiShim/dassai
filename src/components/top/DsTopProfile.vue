<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-img
                        class="white--text"
                        :height="img.height + 'px'"
                        :src="img.src"
                >
                    <v-container fill-height fluid align-center>
                        <v-layout fill-height>
                            <v-flex xs12>
                                <v-avatar
                                        :tile="avatar.tile"
                                        :size="avatar.size"
                                >
                                    <img :src="avatar.src" alt="avatar">
                                </v-avatar>
                                <div class="text-xs-center">User Name</div>
                                <div class="text-xs-center">Top 10 Australian beaches</div>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VAvatar, VCard, VContainer, VFlex, VIcon, VImg, VLayout} from 'vuetify/lib';

  @Component({
  components: {
    VFlex, VLayout, VCard, VIcon, VImg, VContainer, VAvatar,
  },
})
export default class DsTopProfile extends Vue {
  public img: object = {
    height: 200,
    src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',

  };
  public avatar: object = {
    tile: false,
    src: 'https://vuetifyjs.com/apple-touch-icon-180x180.png',
    size: 80,
  };
}
</script>

<style scoped>

</style>
