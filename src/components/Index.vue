<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-toolbar color="cyan" dark>
                    <v-toolbar-side-icon>
                        <v-toolbar-title>
                            Inbox
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon>search</v-icon>
                        </v-btn>
                    </v-toolbar-side-icon>
                </v-toolbar>
            </v-card>
            <v-list two-line>
                <template>
                    <v-subheader>aaaa</v-subheader>
                    <v-divider>bbbb</v-divider>
                    <v-list-tile>
                        <v-list-tile-avatar>
                            <img :src="'https://cdn.vuetifyjs.com/images/lists/1.jpg'">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title v-html="'hoge'"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="'sub'"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {
  VBtn,
  VCard,
  VDivider,
  VFlex,
  VLayout,
  VList,
  VListTile,
  VListTileAvatar,
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
    VLayout, VFlex, VCard, VToolbar, VToolbarSideIcon, VToolbarTitle, VSpacer, VBtn,
    VListTileTitle, VListTileSubTitle, VListTile, VDivider, VSubheader, VList, VListTileAvatar,
  },
})
export default class Index extends Vue {
}
</script>

<style scoped>

</style>
