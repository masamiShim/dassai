<template>
    <div class="home">
        <login />
    </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Login from '@/components/Login.vue';
  // @ is an alias to /src

  @Component({
    components: {
      Login,
    },
  })
  export default class Home extends Vue {
  }
</script>
