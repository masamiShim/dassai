<template>
    <v-layout row wrap>
        <v-flex xs3 v-for="item in items" :key="item.icon">
            <v-card class="text-xs-center">
                <v-flex xs12 pb-3 pt-3>
                    <v-icon large :color="item.style">{{ item.icon }}</v-icon>
                </v-flex>
                {{ item.title }}
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VCard, VFlex, VIcon, VLayout} from 'vuetify/lib';

  @Component({
  components: {
    VFlex, VIcon, VLayout, VCard,
  },
})
export default class DsTopActions extends Vue {
  public items: object[] = [
    {
      icon: 'local_bar',
      style: 'green darken-2',
      title: 'お気に入り:酒',
    },
    {
      icon: 'place',
      style: 'blue darken-2',
      title: 'お気に入り:場所',
    },
    {
      icon: 'face',
      style: 'purple darken-2',
      title: 'お気に入り:友達',
    },
    {
      icon: 'shopping_cart',
      style: 'teal darken-2',
      title: 'お酒を購入する',
    },
  ];
}
</script>

<style scoped>

</style>
