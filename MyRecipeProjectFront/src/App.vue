<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light p-3">
      <div class="container-fluid fs-3">
        <a class="navbar-brand fs-3" href="#">My Recipe</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <RouterLink class="nav-link" to="xxx">Features</RouterLink>
            <RouterLink class="nav-link" to="xxx">Pricing</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
