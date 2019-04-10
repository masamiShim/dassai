<template>
    <v-content>
        <v-container fluid>
            <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                <img :src="getImageSrc" height="150" v-show="getImageSrc"/>
                <v-icon large dark class="teal" @click='pickFile'>folder_open</v-icon>
                <input
                        type="file"
                        ref="image"
                        style="display: none"
                        accept="image/*"
                        @change="onFilePicked"
                >
            </v-flex>
        </v-container>
    </v-content>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VContainer, VContent, VFlex, VIcon} from 'vuetify/lib';

  @Component({
  components: {
    VContent, VContainer, VFlex, VIcon,
  },
})
export default class DsPostSake extends Vue {
  private uploadedImage?: string | ArrayBuffer | null = null;
  private imageName: string = '';
  private imageFile: any | null = null;

  get getImageSrc() {
    return this.uploadedImage;
  }

  public pickFile() {
    (this.$refs as any).image.click();
  }

  public onFilePicked(e: any) {
    this.imageName = '';
    this.imageFile = '';
    this.uploadedImage = '';

    const files = e.target.files || e.dataTransfer.files;
    this.createImage(files[0]);
  }

  public createImage(file: any) {
    if  (file !== undefined) {
      const fr: FileReader = new FileReader();
      fr.onload = (e: ProgressEvent) => {
        this.uploadedImage = (e.target as any).result;
        this.imageFile = file;
        this.imageName = file.name;
      };
      fr.readAsDataURL(file);
    }
  }

}
</script>

<style scoped>

</style>
