<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                :clipped="$vuetify.breakpoint.lgAndUp"
                fixed
                app
        >
            <v-list dense>
                <template v-for="item in items">
                    <v-layout
                            v-if="item.heading"
                            :key="item.heading"
                            row
                            align-center
                    >
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>
                    <v-list-group
                            v-else-if="item.children"
                            :key="item.text"
                            v-model="item.model"
                            :prepend-icon="item.model ? item.icon : item['icon-alt']"
                            append-icon=""
                    >
                        <template v-slot:activator="">
                            <v-list-tile>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{ item.text }}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                        <v-list-tile
                                v-for="(child, i) in item.children"
                                :key="i"
                                @click=""
                        >
                            <v-list-tile-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ child.text }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-group>
                    <v-list-tile v-else :key="item.text" @click="transPage(item.path)">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                :clipped-left="$vuetify.breakpoint.lgAndUp"
                color="blue darken-3"
                dark
                app
                fixed
        >
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <span class="hidden-sm-and-down">Dassai</span>
            </v-toolbar-title>
            <v-text-field
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon="search"
                    label="Search"
                    class="hidden-sm-and-down"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-btn icon large>
                <v-avatar size="32px" tile>
                    <img
                            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                            alt="Vuetify"
                    >
                </v-avatar>
            </v-btn>
        </v-toolbar>
        <router-view />
        <v-flex class="mt-4">
            <v-btn
                    fab
                    bottom
                    right
                    color="pink"
                    dark
                    fixed
            >
                <v-icon>camera_alt</v-icon>
            </v-btn>
        </v-flex>
    </v-app>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {
    VApp,
    VAvatar,
    VBtn,
    VContent,
    VFlex,
    VIcon,
    VLayout,
    VList,
    VListGroup,
    VListTile,
    VListTileAction,
    VListTileContent,
    VListTileTitle,
    VNavigationDrawer,
    VSpacer,
    VSubheader,
    VTextField,
    VToolbar,
    VToolbarSideIcon,
    VToolbarTitle,
  } from 'vuetify/lib';

  @Component({
    components: {
      VApp, VContent, VToolbar, VBtn, VAvatar, VIcon, VTextField, VToolbarSideIcon,
      VToolbarTitle, VNavigationDrawer, VSpacer, VList, VListTile, VListTileAction, VFlex, VLayout, VSubheader,
      VListGroup, VListTileTitle, VListTileContent,
    },
  })
  export default class App extends Vue {

    public drawer: any = null;
    public items: any[] = [
      {icon: 'edit', text: 'プロフィール', path: '/profile/edit'},
      {icon: 'contacts', text: '酒とも', path: '/'},
      {icon: 'history', text: '酒アップロード', path: '/post/sake'},
      {icon: 'content_copy', text: 'お気に入り', path: '/'},
      {icon: 'chat_bubble', text: 'チャット', path: '/'},
      {icon: 'settings', text: 'Settings', path: '/'},
      {
        'icon': 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        'text': 'Labels',
        'model': true,
        'children': [
          {icon: 'add', text: 'Create label'},
        ],
        'path': '/',
      },
      {
        'icon': 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        'text': 'More',
        'model': false,
        'children': [
          {text: 'Import'},
          {text: 'Export'},
          {text: 'Print'},
          {text: 'Undo changes'},
          {text: 'Other contacts'},
        ],
        'path': '/',
      },
      {icon: 'help', text: 'Help', path: '/'},
      {icon: 'phonelink', text: 'App downloads', path: '/'},
    ];

    public transPage(path: string) {
      this.$router.push(path);
    }
  }
</script>
