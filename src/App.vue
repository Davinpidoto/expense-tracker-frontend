<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="collapse navbar-collapse container" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" to="/" exact><a class="nav-link">Expense Tracker</a></router-link>
          <router-link tag="li" class="nav-item" to="/stats"><a class="nav-link">Stats</a></router-link>
          <router-link tag="li" class="nav-item" to="/transactions"><a class="nav-link">Transactions</a></router-link>
          <router-link tag="li" class="nav-item" to="/upload"><a class="nav-link">Upload Csv</a></router-link>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/open-iconic/font/css/open-iconic-bootstrap.css';
</style>
