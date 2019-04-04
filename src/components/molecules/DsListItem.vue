<template>
    <v-list two-line>
        <v-subheader>{{ subHeader }}</v-subheader>
        <v-divider>{{ divider }}</v-divider>
        <v-list-tile>
            <v-list-tile-avatar>
                <img :src="avatarSrc">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-html="listTitle"></v-list-tile-title>
                <v-list-tile-sub-title v-html="listSubTitle"></v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {
  VDivider,
  VList,
  VListTile,
  VListTileAvatar,
  VListTileContent,
  VListTileSubTitle,
  VListTileTitle,
  VSubheader,
} from 'vuetify/lib';

@Component({
  components: {
    VListTile, VListTileContent, VListTileSubTitle, VListTileAvatar, VSubheader, VDivider,
    VListTileTitle, VList,
  },
})
export default class DsListItem extends Vue {
  public subHeader: string = 'aaaa';
  public divider: string = 'bbbb';
  public avatarSrc: string = 'https://cdn.vuetifyjs.com/images/lists/1.jpg';
  public listTitle: string = 'hoge';
  public listSubTitle: string = 'fuga';
}
</script>

<style scoped>
</style>
