<template>
    <v-layout row wrap>
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
            <img :src="getImageSrc" height="150" v-show="getImageSrc"/>
        </v-flex>
        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
            <v-icon large dark class="teal" @click='pickFile'>folder_open</v-icon>
            <input
                    type="file"
                    ref="image"
                    style="display: none"
                    accept="image/*"
                    @change="onFilePicked"
            >
            <div v-show="isError" class="error-text">ファイルを選択してください</div>
        </v-flex>
    </v-layout>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {VFlex, VIcon, VLayout} from 'vuetify/lib';

@Component({
  components: {
    VFlex, VIcon, VLayout,
  },
})
export default class DsFileUploader extends Vue {

  get getImageSrc() {
    return this.uploadedImage;
  }
  public isError: boolean = false;

  @Prop({required: false, default: false})
  public required: boolean;
  private uploadedImage?: string | ArrayBuffer | null = null;
  private imageName: string = '';
  private imageFile: any | null = null;

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
    if (file !== undefined) {
      const fr: FileReader = new FileReader();
      fr.onload = (e: ProgressEvent) => {
        this.isError = false;
        this.uploadedImage = (e.target as any).result;
        this.imageFile = file;
        this.imageName = file.name;
        this.uploaded(file);
      };
      fr.readAsDataURL(file);
    } else {
      this.uploaded(null);
      this.isError = this.required ? true : false;
    }
  }

  @Emit()
  public uploaded(newValue: string | null) {
  }
}
</script>

<style scoped>

</style>
