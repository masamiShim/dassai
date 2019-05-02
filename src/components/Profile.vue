<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout
                    justify-center
                    text-xs-center
                    wrap
                    row
            >
                <v-alert
                        :value="success"
                        type="success"
                        transition="scale-transition"
                >
                    更新しました。
                </v-alert>
                <v-alert
                        :value="!valid"
                        type="warning"
                        transition="scale-transition"
                >
                    入力に誤りがあります。
                </v-alert>
                <v-form ref="form" lazy-validation>
                    <v-flex xs-12 class="mb-5">
                        <div class="title">
                            プロフィール編集
                        </div>
                    </v-flex>
                    <v-flex xs-12 class="mb-5">
                        <img style="width: 200px; height: 200px;" v-show="!profileImage.file" :src="currentImage"/>
                        <ds-file-uploader @uploaded="handleUpload"/>
                    </v-flex>
                    <v-flex xs-12>
                        <v-text-field
                                v-model="name"
                                :rules="[rules.required]"
                                label="Name"
                                placeholder="Inpupt Your Name"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="email"
                                :rules="[rules.required, rules.email]"
                                label="E-mail"
                                placeholder="xxxx@example.com"
                                required>
                        </v-text-field>
                        <v-btn class="primary"
                               @click="save">
                            登録する
                        </v-btn>
                    </v-flex>
                </v-form>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script lang="ts">
  import * as firebase from 'firebase';
  import {Component, Vue} from 'vue-property-decorator';
  import {VAlert, VBtn, VCheckbox, VContainer, VFlex, VForm, VLayout, VSelect, VTextField} from 'vuetify/lib';
  import catalog from '@/api/Validations';
  import DsFileUploader from '@/components/atoms/DsFileUploader.vue';
  import ImageFile from '@/param/ImageFile';

  @Component({
  components: {
    DsFileUploader,
    VForm, VLayout, VContainer, VCheckbox, VBtn, VSelect, VTextField, VAlert, VFlex,
  },
})
export default class Profile extends Vue {
  public valid: boolean = true;
  public success: boolean = false;
  public name: string = '';
  public email: string = '';
  public select?: string | null;
  public rules: any = catalog;
  public currentImage: string = '';
  public profileImage: ImageFile = new ImageFile(null, null);

  public save() {
    // noinspection TypeScriptUnresolvedFunction
    if (!(this.$refs.form as any).validate()) {
      this.valid = false;
      setTimeout(() => {
        this.valid = true;
      }, 1000);
      return '';
    }
    localStorage.setItem('profile.name', this.name);
    localStorage.setItem('profile.email', this.email);
    const userId = localStorage.getItem('userId');
    // データを格納するパスを指定
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(`images/${userId}/profile/${this.profileImage.fileName}`);
    ref.put(this.profileImage.file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          this.profileImage = new ImageFile(url, this.currentImage);
          localStorage.setItem('profile.imageName', this.profileImage.fileName);
        });
        this.success = true;
        setTimeout(() => {
          this.success = false;
        }, 1000);
      }).catch(() => {
      this.valid = false;
      setTimeout(() => {
        this.valid = true;
      }, 1000);
    });
  }

  public handleUpload(file: any | null) {
    if (!file) {
      this.profileImage = new ImageFile(null, null);
      return;
    }
    this.profileImage = new ImageFile(file, file.name);
  }

  public created() {
    this.name = localStorage.getItem('profile.name') || '';
    this.email = localStorage.getItem('profile.email') || '';
    const fileName = localStorage.getItem('profile.imageName') || '';
    const userId = localStorage.getItem('userId');
    this.profileImage = new ImageFile(null, null);
    const storageRef = firebase.storage().ref();

    const postRef = storageRef.child(`images/${userId}/profile/${fileName}`);
    postRef.getDownloadURL().then((url: string) => {
      this.currentImage = url;
    });
  }
}
</script>

<style scoped>

</style>
