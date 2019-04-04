<template>
    <v-layout row wrap>
        <v-flex xs6>
            <ds-list-item/>
        </v-flex>
        <v-flex xs6>
            <ds-list-item/>
        </v-flex>
        <v-flex xs12>
            <ds-sake-card/>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DsSakeCard from '@/components/molecules/DsSakeCard.vue';
  import DsListItem from '@/components/molecules/DsListItem.vue';
  import {
    VBtn,
    VCard,
    VDivider,
    VFlex,
    VLayout,
    VList,
    VListTile,
    VListTileAvatar,
    VListTileContent,
    VListTileSubTitle,
    VListTileTitle,
    VSpacer,
    VSubheader,
    VToolbar,
    VToolbarSideIcon,
    VToolbarTitle,
  } from 'vuetify/lib';

  @Component({
    components: {
      DsSakeCard, DsListItem,
      VLayout, VFlex, VCard, VToolbar, VToolbarSideIcon, VToolbarTitle, VSpacer, VBtn,
      VListTileTitle, VListTileContent, VListTileSubTitle, VListTile, VDivider, VSubheader, VList, VListTileAvatar,
    },
  })
  export default class Index extends Vue {
  }
</script>

<style scoped>

</style>
