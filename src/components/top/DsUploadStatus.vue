<template>
    <v-card
            class="mx-auto elevation-20 mb-3"
            color="cyan"
            dark
            style="max-width: 600px;"
    >
        <v-layout justify-space-between>
            <v-flex xs6 sm6 v-for="item in status" :key="item.title">
                <v-card-title primary-title class="text-xs-center">
                    <div>
                        <div>
                            <v-icon>{{ item.icon }}</v-icon>
                        </div>
                        <div>{{ item.title }}</div>
                        <div>({{ item.count }})</div>
                    </div>
                </v-card-title>
            </v-flex>
        </v-layout>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-3">
            Rate this album
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VCard, VCardActions, VCardTitle, VDivider, VFlex, VIcon, VImg, VLayout, VRating, VSpacer} from 'vuetify/lib';


  @Component({
  components: {
    VCard, VCardActions, VRating, VDivider, VLayout, VSpacer,
    VFlex, VImg, VCardTitle, VIcon,
  },
})
export default class DsUploadStatus extends Vue {
  public rating: number = 3;
  public status: object[] = [
    {
      icon: 'local_bar',
      title: '登録済みの銘柄数',
      count: 1234,
    },
    {
      icon: 'help_outline',
      title: '不明な日本酒を登録',
      count: 4567,
    },
  ];
}
</script>

<style scoped>

</style>
