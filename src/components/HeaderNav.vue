<template>
  <div class="hello">
    <nav class="navbar navbar-expand-md navbar-light bg-dark">
      <router-link to="/" exact><li class="navbar-brand text-white">Frontend Design</li></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light font-weight-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Form Design
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'slidingSiderForm' }" tag="li" class="dropdown-item">SlideBar Contact Form</router-link>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light font-weight-bold" href="#" id="inputDesign" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Input Design
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'hoverSearch' }" tag="li" class="dropdown-item">Search Box</router-link>
              <router-link :to="{ name: 'growingButton' }" tag="li" class="dropdown-item">Glowing Button</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
