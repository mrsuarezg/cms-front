<template>
  <ValidationObserver ref="observer">
    <b-form slot-scope="{ validate }" class="p-4 p-md-5 contact-form" @submit.prevent="validate().then(onSubmit)" @reset="resetForm">
      <div class="row">
        <ValidationProvider
          v-for="{ name, label, type } in schema.fields"
          :key="name"
          :class="classBoostrap(name)"
          rules="required|email"
          :name="name"
          tag="div"
          :vid="form.parent_id[name]"
        >
          <b-form-group
            slot-scope="{ valid, errors }"
          >
            <b-form-input
              v-if="type !== 'textarea'"
              :type="type"
              :state="errors[0] ? false : (valid ? true : null)"
              :placeholder="label"
              :v-model="form.parent_id[name]"
              required
            />
            <b-form-textarea
              v-else
              :type="type"
              :state="errors[0] ? false : (valid ? true : null)"
              :placeholder="label"
              :v-model="form.parent_id[name]"
              required
            />
            <b-form-invalid-feedback id="inputLiveFeedback">
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>
        <b-form-group class="container mt-3">
          <!--<b-button type="submit" variant="primary" class="btn btn-primary">
            Submit
          </b-button>
          <b-button type="reset" variant="danger" class="btn btn-primary" value="Reset" />-->
          <input type="submit" class="btn btn-primary" value="Submit">
          <input type="reset" class="btn btn-secondary" value="Reset">
        </b-form-group>
      </div>
    </b-form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      form: {
        parent_id: []
      }
    }
  },
  methods: {
    classBoostrap (name) {
      if (name === 'name' || name === 'email') {
        return 'col-md-6'
      } else {
        return 'col-md-12'
      }
    },
    onSubmit () {
      this.$mail.send({
        from: {
          name: 'Consultation',
          address: 'm***@gmail.com'
        },
        subject: 'Incredible',
        text: 'This is an incredible test message'
      })
    },
    resetForm () {
      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    }
  }
}
</script>
