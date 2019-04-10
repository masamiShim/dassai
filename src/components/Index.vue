<template>
    <v-content>
        <ds-top-profile/>
        <ds-top-actions/>
        <v-layout row wrap class="mb-4">
            <v-flex xs6>
                <ds-list-item/>
            </v-flex>
            <v-flex xs6>
                <ds-list-item/>
            </v-flex>
        </v-layout>
        <v-flex xs8 offset-sm2>
            <ds-upload-status/>
        </v-flex>
        <v-layout align-center>
            <ds-top-tabs/>
        </v-layout>
    </v-content>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DsSakeCard from '@/components/top/DsSakeCard.vue';
  import DsListItem from '@/components/top/DsListItem.vue';
  import DsUploadStatus from '@/components/top/DsUploadStatus.vue';
  import DsTopProfile from '@/components/top/DsTopProfile.vue';
  import DsTopTabs from '@/components/top/DsTopTabs.vue';
  import DsTopActions from '@/components/top/DsTopActions.vue';
  import {VContent, VFlex, VLayout} from 'vuetify/lib';

  @Component({
    components: {
      DsTopActions, DsTopTabs, DsTopProfile, DsUploadStatus, DsSakeCard, DsListItem,
      VLayout, VFlex, VContent,
    },
  })
  export default class Index extends Vue {
  }
</script>

<style scoped>

</style>
