<template>
    <v-content>
        <v-container fluid class="mt-5">
            <v-layout row wrap align-center>
                <v-flex xs12 class="mb-4 text-xs-center">
                    <h2>画像をアップロード</h2>
                </v-flex>
                <ds-file-uploader  @uploaded="uploaded()"/>
                <v-flex xs12 class="mt-4 text-xs-center">
                    <h2>感想</h2>
                </v-flex>
                <v-flex xs12 class="mt-4">
                    <div class="text-xs-center mt-2">辛口　　　　←　 味 　→　　　　甘口</div>
                    <v-rating
                            class="text-xs-center"
                            v-model="rating"
                    ></v-rating>
                </v-flex>
                <v-flex xs6 offset-xs3 class="mt-4">
                    <v-textarea
                            outline
                            label="コメント"
                            v-model="impression"
                    ></v-textarea>
                </v-flex>
                <v-flex xs12 class="text-xs-center">
                    <v-btn depressed color="primary" @click="post">Info</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VContainer, VContent, VRating} from 'vuetify/lib';
  import DsFileUploader from '@/components/atoms/DsFileUploader.vue';

  @Component({
  components: {
    DsFileUploader, VContent, VContainer, VRating,
  },
})
export default class DsPostSake extends Vue {
  public impression: string = '';
  public rating: number = 0;
  public imagePath: string = '';

  public uploaded(imagePath: string) {
    this.imagePath = imagePath;
    alert('uploaded');
  }

  public post() {
    alert('post');
  }
}
</script>

<style scoped>

</style>
