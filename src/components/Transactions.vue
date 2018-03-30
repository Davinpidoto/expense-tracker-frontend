<template>
  <div>
    <h3>Transactions</h3><br/>
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
      <tbody>
      <tr v-for="item in transactions" :key="item.id">
        <td>{{item.transactionDate}}</td>
        <td>{{item.description}}</td>
        <td>
          <select v-model="item.expenseType" @change="changeLocation(item)">
            <option v-for="thetype in types" :key="thetype.id" v-bind:value="thetype.type">{{thetype.type}}</option>
          </select>
        </td>
        <td>{{item.amount}}</td>
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
      transactions: {},
      types: {},
      from: '1/1/2018',
      to: '31/12/2018'
    }
  },
  created: function () {
    let self = this
    axios.get('http://localhost:8080/expenses?from=' + this.from + '&to=' + this.to)
      .then(function (response) {
        self.transactions = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    axios.get('http://localhost:8080/types')
      .then(function (response) {
        self.types = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    update () {
      let self = this
      axios.get('http://localhost:8080/expenses?from=' + this.from + '&to=' + this.to)
        .then(function (response) {
          self.transactions = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changeLocation (item) {
      let self = this
      console.log(item.expenseType)
      axios.patch('http://localhost:8080/expenses/' + item.id, {'expenseType': item.expenseType})
        .then(function (response) {
          axios.get('http://localhost:8080/expenses?from=' + this.from + '&to=' + this.to)
            .then(function (response) {
              self.transactions = response.data
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
