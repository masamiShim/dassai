<template>
    <v-list two-line>
        <v-list-tile>
            <v-list-tile-avatar>
                <img :src="friend.avatarSrc">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-html="friend.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="friend.comment"></v-list-tile-sub-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {VList, VListTile, VListTileAvatar, VListTileContent, VListTileSubTitle, VListTileTitle} from 'vuetify/lib';
import FriendListItem from '../../param/FriendListItem';

@Component({
  components: {
    VList, VListTile, VListTileAvatar, VListTileContent, VListTileSubTitle, VListTileTitle,
  },
})
export default class DsFriendsListItem extends Vue {
  @Prop({required: true})
  public friend: FriendListItem;
}
</script>

<style scoped>

</style>
