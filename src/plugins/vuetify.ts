import Vue from 'vue';
import Vuetify, {
  VApp, VContent, VToolbar, VBtn, VAvatar, VIcon, VTextField, VToolbarSideIcon,
  VToolbarTitle, VNavigationDrawer, VSpacer, VList, VListTile, VListTileAction,
  VFlex, VLayout, VSubheader, VListGroup, VListTileTitle, VListTileContent,
} from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  iconfont: 'md',
  components: {
    VApp, VContent, VToolbar, VBtn, VAvatar, VIcon, VTextField, VToolbarSideIcon,
    VToolbarTitle, VNavigationDrawer, VSpacer, VList, VListTile, VListTileAction, VFlex, VLayout, VSubheader,
    VListGroup, VListTileTitle, VListTileContent,
  },
});
