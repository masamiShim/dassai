<template>
    <div>
        <v-layout row wrap class="mb-4">
            <v-flex xs6 v-for="(item, index) in friends" :key="index">
                <ds-friends-list-item :friend="item"/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import DsFriendsListItem from '@/components/friends/DsFriendsListItem';
import FriendListItem from '@/param/FriendListItem';

@Component({
  components: {
    DsFriendsListItem,
  },
})
export default class DsFriendsList extends Vue {
  public friends: FriendListItem[] = [
    new FriendListItem('https://cdn.vuetifyjs.com/images/lists/1.jpg', 'hoge', 'fuga'),
    new FriendListItem('https://cdn.vuetifyjs.com/images/lists/1.jpg', 'hoge', 'fuga'),
    new FriendListItem('https://cdn.vuetifyjs.com/images/lists/1.jpg', 'hoge', 'fuga'),
    new FriendListItem('https://cdn.vuetifyjs.com/images/lists/1.jpg', 'hoge', 'fuga'),
    new FriendListItem('https://cdn.vuetifyjs.com/images/lists/1.jpg', 'hoge', 'fuga'),
  ];
}
</script>

<style scoped>

</style>
