<template>
  <section class="ftco-section bg-half-light">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-2">
        <div class="col-md-8 text-center heading-section">
          <span class="subheading">Our Services</span>
          <h2 class="mb-4">
            We Offer Services
          </h2>
        </div>
      </div>
      <div class="row">
        <div v-for="service in services" :key="service.id" class="col-md-4">
          <div class="services-wrap">
            <nuxt-img
              :src="service.background_image.url"
              sizes="sm:200px md:400px lg:800px"
              :alt="service.background_image.alternativeText"
              loading="lazy"
              width="1024"
              height="800"
              quality="75"
              class="img"
              provider="strapi"
            />
            <div class="text">
              <div class="icon">
                <span :class="service.icon_class" />
              </div>
              <h2>{{ service.title }}</h2>
              <p>{{ service.description }}</p>
              <a href="#" class="btn-custom">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!--
<script>
export default {
  name: 'NuxtServices',
  data () {
    return {
      services: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.services = await this.$strapi.$Services.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script> -->
<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

interface Services {
  background_image: {};
  icon_class: string;
  title: string;
  description: string;
  enabled: boolean;
}

export default Vue.extend({
  name: 'NuxtServices',
  async asyncData (ctx: Context) {
    const services = await ctx.$strapi.find<Services[]>('services', { enabled: true, _limit: 6 })

    return {
      services
    }
  }
})
</script>
