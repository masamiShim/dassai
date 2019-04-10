<template>
    <v-flex xs12>
        <v-tabs v-model="tabs" fixed-tabs color="transparent" class="mb-3">
            <v-tabs-slider></v-tabs-slider>
            <v-tab v-for="item in tabItems" :key="item.id" :href="'#' + item.id">
                {{ item.title}}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
            <v-tab-item v-for="item in tabItems" :key="item.id" :value="item.id">
                <v-layout wrap row>
                    <v-flex xs12 sm6 md6 v-for="i in item.items" :key="i.id">
                        <ds-sake-card/>
                    </v-flex>
                </v-layout>
            </v-tab-item>
        </v-tabs-items>
    </v-flex>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import DsSakeCard from '@/components/top/DsSakeCard.vue';
  import {VFlex, VLayout, VTab, VTabItem, VTabs, VTabsItems, VTabsSlider} from 'vuetify/lib';

  @Component({
  components: {
    DsSakeCard,
    VFlex, VTabsItems, VTabItem, VLayout, VTab, VTabs, VTabsSlider,
  },
})
export default class DsTopTabs extends Vue {
  public tabs: string | null = null;
  public tabItems: object[] = [
    {
      id: 'tab-1',
      title: '酒',
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    },
    {
      id: 'tab-2',
      title: '新着レビュー',
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    },
  ];
}
</script>

<style scoped>

</style>
