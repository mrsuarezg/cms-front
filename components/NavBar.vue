<template>
  <nav
    id="ftco-navbar"
    class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light"
  >
    <div class="container d-flex align-items-center">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="menuToogle"
      >
        <!--<span class="fa fa-bars" /> Menu-->
        <span class="navbar-toggler-icon" /> Menu
      </button>
      <div id="ftco-nav" :class="[isActive ? 'collapse navbar-collapse' : 'navbar-collapse' ]">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/">
              Home
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/about">
              About
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/services">
              Services
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/example/">
              Contact
            </nuxt-link>
          </li>
        </ul>
        <a
          href="#"
          class="btn-custom"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >Inquire Now</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    menuToogle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
