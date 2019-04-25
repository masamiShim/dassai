<template>
    <v-content>
        <v-form xs12 ref="form" lazy-validation>
            <v-container>
                <v-layout
                        text-xs-center
                        wrap
                        row
                >
                    <v-flex xs12 class="mb-4 text-xs-center">
                        <h2>画像をアップロード</h2>
                    </v-flex>
                    <ds-file-uploader @uploaded="handleUpload"/>
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
                                :rules="[rules.required]"
                                label="コメント"
                                v-model="impression"
                        ></v-textarea>
                    </v-flex>
                    <v-flex xs12 class="text-xs-center">
                        <v-btn depressed color="primary" @click="save">投稿する</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </v-content>
</template>

<script lang="ts">
import * as firebase from 'firebase';
import {Component, Vue} from 'vue-property-decorator';
import {VBtn, VContainer, VContent, VFlex, VForm, VLayout, VRating, VTextarea} from 'vuetify/lib';
import catalog from '@/api/Validations';
import DsFileUploader from '@/components/atoms/DsFileUploader.vue';
import ImageFile from '../param/ImageFile';

@Component({
  components: {
    DsFileUploader, VContent, VContainer, VRating, VFlex, VTextarea, VLayout, VBtn, VForm,
  },
})
export default class DsPostSake extends Vue {
  public error: string = '';
  public valid: boolean = true;
  public rules: any = catalog;
  public success: boolean = false;
  public impression: string = '';
  public rating: number = 3;
  public image: ImageFile = new ImageFile(null, null);

  public handleUpload(file: any | null) {
    if (!file) {
      this.image = new ImageFile(null, null);
      return;
    }
    this.image = new ImageFile(file, file.name);
  }


  public save() {
    // noinspection TypeScriptUnresolvedFunction
    if (!(this.$refs.form as any).validate()) {
      this.valid = false;
      setTimeout(() => {
        this.valid = true;
      }, 1000);
      return '';
    }
    localStorage.setItem('post.sake.imageName', this.image.fileName);
    localStorage.setItem('profile.sake.rating', this.rating);
    localStorage.setItem('profile.sake.comment', this.impression);
    const userId = localStorage.getItem('userId');
    // データを格納するパスを指定
    // 画像登録
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(`images/${userId}/post/sake/${this.image.fileName}`);
    ref.put(this.image.file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          const db: any = firebase.firestore();
          db.collection('post').add({
            userId,
            imageUrl: url,
            rating: this.rating,
            impression: this.impression,
          }).then(() => {
            this.success = true;
            setTimeout(() => {
              this.success = false;
            }, 1000);
          }).catch((err) => {
            this.success = false;
            this.error = err;
          });
        });
      }).catch(() => {
      this.valid = false;
      setTimeout(() => {
        this.valid = true;
      }, 1000);
    });
  }
}
</script>

<style scoped>

</style>
