<template>
  <div>
    <h3>Stats</h3><br/>
    <div class="table">
      <div class="form-inline">
        <div class="form-group mb-4">
          <input type="text" v-model="from" class="form-control">
        </div>
        <div class="form-group mx-sm-3 mb-4">
          <input type="text" v-model="to" class="form-control">
        </div>
        <div class="form-group mb-4">
          <button v-on:click="update()" class="btn btn-primary">Update</button>
        </div>
      </div>
    </div>

    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th colspan="2">{{stats.from}} - {{stats.to}}</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in stats.stats" :key="item.id">
          <td>{{key}}</td><td>{{item}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      stats: {},
      from: '1/1/2018',
      to: '31/12/2018'
    }
  },
  created: function () {
    let self = this
    axios.get('http://localhost:8080/stats?from=' + this.from + '&to=' + this.to)
      .then(function (response) {
        self.stats = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    update () {
      let self = this
      axios.get('http://localhost:8080/stats?from=' + this.from + '&to=' + this.to)
        .then(function (response) {
          self.stats = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
