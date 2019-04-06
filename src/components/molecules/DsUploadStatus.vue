<template>
    <v-card
            class="mx-auto elevation-20 mb-3"
            color="cyan"
            dark
            style="max-width: 600px;"
    >
        <v-layout justify-space-between>
            <v-flex xs6 sm6>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Halycon Days</div>
                        <div>Ellie Goulding</div>
                        <div>(2013)</div>
                    </div>
                </v-card-title>
            </v-flex>
            <v-flex xs6 sm6>
                <v-card-title primary-title>
                    <div>
                        <div class="headline">Halycon Days</div>
                        <div>Ellie Goulding</div>
                        <div>(2013)</div>
                    </div>
                </v-card-title>
            </v-flex>
        </v-layout>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-3">
            Rate this album
            <v-spacer></v-spacer>
            <span class="grey--text text--lighten-2 caption mr-2">
        ({{ rating }})
      </span>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {VCard, VCardActions, VCardTitle, VDivider, VFlex, VImg, VLayout, VRating, VSpacer} from 'vuetify/lib';


  @Component({
  components: {
    VCard, VCardActions, VRating, VDivider, VLayout, VSpacer,
    VFlex, VImg, VCardTitle,
  },
})
export default class DsUploadStatus extends Vue {
}
</script>

<style scoped>

</style>
