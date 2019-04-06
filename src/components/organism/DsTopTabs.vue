<template>
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
                <v-layout wrap row>
                    <v-flex xs6>
                        <ds-sake-card/>
                    </v-flex>
                    <v-flex xs6>
                        <ds-sake-card/>
                    </v-flex>
                </v-layout>
            </v-tab-item>
            <v-tab-item :value="'tab-2'">
                <v-flex xs12>
                    <ds-sake-card/>
                    <ds-sake-card/>
                </v-flex>
            </v-tab-item>
        </v-tabs-items>
    </v-flex>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import DsSakeCard from '@/components/molecules/DsSakeCard';
import {VFlex, VLayout, VTab, VTabItem, VTabs, VTabsItems, VTabsSlider} from 'vuetify/lib';

@Component({
  components: {
    DsSakeCard,
    VFlex, VTabsItems, VTabItem, VLayout, VTab, VTabs, VTabsSlider,
  },
})
export default class DsTopTabs extends Vue {
  public tabs: string = null;
}
</script>

<style scoped>

</style>
