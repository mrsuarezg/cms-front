<template>
  <section id="contact-section" class="ftco-section contact-section ftco-no-pb">
    <div class="container">
      <div class="row justify-content-center mb-5 pb-3">
        <div class="col-md-7 heading-section text-center">
          <span class="subheading">Contact us</span>
          <h2 class="mb-4">
            Message us for more details
          </h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>

      <div class="row block-9">
        <div class="col-md-8">
          <DinamycForm :schema="formSchema" />
        </div>

        <div class="col-md-4 d-flex pl-md-5">
          <div class="row">
            <div class="dbox w-100 d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="fa fa-map-marker" />
              </div>
              <div class="text">
                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div class="dbox w-100 d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="fa fa-phone" />
              </div>
              <div class="text">
                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
              </div>
            </div>
            <div class="dbox w-100 d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="fa fa-paper-plane" />
              </div>
              <div class="text">
                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
              </div>
            </div>
            <div class="dbox w-100 d-flex">
              <div class="icon d-flex align-items-center justify-content-center">
                <span class="fa fa-globe" />
              </div>
              <div class="text">
                <p><span>Website</span> <a href="#">yoursite.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div id="map" class="map" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import * as Yup from 'yup'
export default {
  data: () => {
    const formSchema = {
      fields: [
        {
          label: 'Your Name',
          name: 'name',
          as: 'input',
          type: 'text',
          rules: Yup.string().required()
        },
        {
          label: 'Your Email',
          name: 'email',
          as: 'input',
          type: 'email',
          rules: Yup.string().email().required()
        },
        {
          label: 'Subject',
          name: 'subject',
          as: 'input',
          type: 'text',
          rules: Yup.string().required()
        },
        {
          label: 'Message',
          name: 'message',
          as: 'textarea',
          type: 'textarea',
          cols: '30',
          rows: '7',
          rules: Yup.string().required()
        }
      ]
    }
    return {
      formSchema
    }
  }
}
</script>
