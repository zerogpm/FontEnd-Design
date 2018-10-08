<template>
    <section>
        <div class="container-fluid">
            <div class="row bg-info justify-content-center align-items-center row--height">
                <div class="col-sm-10 text-center">
                    <h1 class="display-2 text-capitalize"><span class="text-warning">pure Vue Js </span><span class="text-white font-weight-bold text-warp">website</span></h1>
                    <h2 class="font-weight-light font-italic text-light">Do you like the Vue frontend Design? You like it {{ likes }} times :)</h2>
                    <a href="#" class="btn btn-warning btn-lg px-4 m-3" @click="likeClick">Press Yes</a>
                    <a href="#" class="btn btn-danger btn-lg px-4 m-3" @click="dislikeClik">Press No</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    name: "Banner",
    data () {
      return {
        likes: 0
      }
    },
    methods: {
      likeClick () {
        this.likes += 1
      },
      dislikeClik () {
        this.likes -= 1
      }
    }
  }
</script>

<style scoped>
    .text-warp {
        word-wrap: break-word;
    }

    .row--height {
        height: 100vh
    }
</style>
