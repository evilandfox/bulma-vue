<template>
  <b-field label="Name">
    <b-input placeholder="Text input" v-model="formValue.name" />
  </b-field>

  <b-field label="Username" color="success">
    <template #default="colorAndSize">
      <b-input
        v-bind="colorAndSize"
        placeholder="Text input"
        v-model="formValue.username"
      >
        <template #icon-left>
          <i class="fas fa-user"></i>
        </template>
        <template #icon-right>
          <i class="fas fa-check"></i>
        </template>
      </b-input>
    </template>
    <template #help>
      This username is available
    </template>
  </b-field>

  <b-field label="Email" color="danger">
    <template #default="colorAndSize">
      <b-input
        v-bind="colorAndSize"
        type="email"
        placeholder="Email input"
        v-model="formValue.email"
      >
        <template #icon-left>
          <i class="fas fa-envelope"></i>
        </template>
        <template #icon-right>
          <i class="fas fa-exclamation-triangle"></i>
        </template>
      </b-input>
    </template>
    <template #help>
      This email is invalid
    </template>
  </b-field>

  <b-field label="Subject">
    <b-select
      v-model="formValue.subject"
      :options="{'': 'Select dropdown', 'with-options': 'With options'}"
      placeholder="Textarea"
    />
  </b-field>

  <b-field label="Message">
    <b-textarea v-model="formValue.message" />
  </b-field>

  <b-field>
    <div class="control">
      <b-checkbox-item v-model="formValue.isAgree">
        I agree to the
        <a href="#">terms and conditions</a>
      </b-checkbox-item>
    </div>
  </b-field>

  <b-field>
    <div class="control">
      <b-radio-item v-model="formValue.value" value="yes">
        <span>&nbsp;Yes</span>
      </b-radio-item>
      <b-radio-item v-model="formValue.value" value="no">
        <span>&nbsp;No</span>
      </b-radio-item>
    </div>
  </b-field>

  <b-field>
    <b-radio v-model="formValue.value">
      <template #yes>&nbsp;Yes</template>
      <template #no>&nbsp;No</template>
    </b-radio>
  </b-field>

  <b-field class="is-grouped">
    <div class="control">
      <b-button color="link">Submit</b-button>
    </div>
    <div class="control">
      <b-button color="link" light>Cancel</b-button>
    </div>
  </b-field>

  <pre>{{ JSON.stringify(formValue, undefined, 2) }}</pre>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {
  BField,
  BFieldHorizontal,
  BInput,
  BInputStatic,
  BTextarea,
  BSelect,
  BCheckboxItem,
  BRadioItem,
  BRadio,
  BButton
} from '/@lib/'

export default defineComponent({
  components: {
    BField,
    BFieldHorizontal,
    BInput,
    BInputStatic,
    BTextarea,
    BSelect,
    BCheckboxItem,
    BRadioItem,
    BRadio,
    BButton
  },
  setup() {
    const formValue = reactive({
      name: '',
      username: 'bulma',
      email: 'hello@',
      subject: '',
      message: '',
      isAgree: false,
      value: ''
    })
    return {formValue}
  }
})
</script>
