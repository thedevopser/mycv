<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toogleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<template>
  <nav class="bg-gray-900 text-green-400 text-sm font-mono p-4 flex flex-col sm:flex-row justify-between items-center">
    <div class="flex justify-between items-center w-full sm:w-auto">
      <a href="/" class="text-2xl no-underline hover:text-green-200">$ TheDevOpser@localhost:~</a>
      <button class="sm:hidden" @click="toogleMenu">
        <span class="text-2xl">&#x2630;</span>
      </button>
    </div>
    <ul class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4 mt-4 sm:mt-0"
        :class="{'hidden sm:flex': !menuOpen, 'flex': menuOpen}">
      <li><a href="#experience" class="hover:text-green-200">Mon expérience</a></li>
      <li><a href="#personnalite" class="hover:text-green-200">Ma personnalité</a></li>
      <li><a href="#realisations" class="hover:text-green-200">Mes réalisations</a></li>
      <li><a href="#contact" class="hover:text-green-200">Contactez moi</a></li>
    </ul>
  </nav>
</template>
