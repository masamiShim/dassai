<template>
    <v-content>
        <v-layout row wrap class="mb-4">
            <v-flex xs6>
                <ds-list-item/>
            </v-flex>
            <v-flex xs6>
                <ds-list-item/>
            </v-flex>
        </v-layout>
        <v-flex xs8 offset-sm2>
             <v-carousel
                :height="200"
                :max="300"
                class="mb-4"
            >
                <v-carousel-item
                        v-for="(item,i) in [0,1,2]"
                        :key="i"
                        reverse-transition="fade"
                        transition="fade"
                >{{ item }}</v-carousel-item>
            </v-carousel>
        </v-flex>
        <v-layout align-center column>
            <v-flex xs12>
                <v-tabs v-model="tabs" fixed-tabs color="transparent" class="mb-3">
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab href="#tab-1">
                        酒
                    </v-tab>
                    <v-tab href="#tab-2">
                        新着レビュー
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tabs">
                    <v-tab-item :value="'tab-1'">
                        <v-flex xs12>
                            <ds-sake-card/>
                        </v-flex>
                        <v-flex xs12>
                            <ds-sake-card/>
                        </v-flex>
                    </v-tab-item>
                    <v-tab-item :value="'tab-2'">
                        <v-flex xs12>
                            <ds-sake-card/>
                            <ds-sake-card/>
                        </v-flex>
                    </v-tab-item>
                </v-tabs-items>
            </v-flex>
        </v-layout>
    </v-content>
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
  public tabs: string = null;
}
</script>

<style scoped>

</style>
