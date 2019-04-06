<template>
    <v-content>
        <ds-top-profile />
        <v-layout row wrap class="mb-4">
            <v-flex xs6>
                <ds-list-item/>
            </v-flex>
            <v-flex xs6>
                <ds-list-item/>
            </v-flex>
        </v-layout>
        <v-flex xs8 offset-sm2>
            <ds-upload-status />
        </v-flex>
        <v-layout align-center>
            <ds-top-tabs />
        </v-layout>
    </v-content>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DsSakeCard from '@/components/molecules/DsSakeCard.vue';
  import DsListItem from '@/components/molecules/DsListItem.vue';
  import DsUploadStatus from '@/components/molecules/DsUploadStatus.vue';
  import DsTopProfile from '@/components/molecules/DsTopProfile';
  import DsTopTabs from '@/components/organism/DsTopTabs';
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
    DsTopTabs,
    DsTopProfile,
    DsUploadStatus, DsSakeCard, DsListItem,
    VLayout, VFlex, VCard, VToolbar, VToolbarSideIcon, VToolbarTitle, VSpacer, VBtn,
    VListTileTitle, VListTileContent, VListTileSubTitle, VListTile, VDivider, VSubheader, VList, VListTileAvatar,
  },
})
export default class Index extends Vue {
}
</script>

<style scoped>

</style>
