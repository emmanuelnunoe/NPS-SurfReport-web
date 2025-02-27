<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">NPS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink :to="{name:'index'}" class="nav-link" exact-active-class="active" aria-current="page">Home</NuxtLink>
          </li>
          <!-- <li class="nav-item">
            <NuxtLink :to="{name:'locations'}"  class="nav-link" exact-active-class="active" aria-current="page">SurfReport</NuxtLink>
          </li> -->
          <li class="nav-item">
            <NuxtLink :to="{name:'contact'}"  class="nav-link" exact-active-class="active" aria-current="page">contact</NuxtLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>


<style>
.active {
  border-bottom: 2px solid rgb(29, 223, 236);
}
</style>