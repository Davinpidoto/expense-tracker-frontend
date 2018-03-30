<template>
  <div>
    <h3>Upload CSV</h3><br/>
    <div class="large-12 medium-12 small-12 cell">
      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" class="file"/>
      <button v-on:click="submitFile()" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      file: ''
    }
  },
  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    },
    submitFile () {
      let formData = new FormData()
      formData.append('file', this.file)
      axios.post('http://localhost:8080/csv',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function () {
        console.log('SUCCESS!!')
      })
        .catch(function () {
          console.log('FAILURE!!')
        })
    }
  }
}
</script>
