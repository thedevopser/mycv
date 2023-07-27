<script>
export default {
  name: 'NavBar',
  setup() {
  }
}
</script>

<template>
  <nav class="bg-gray-900 text-green-400 text-sm font-mono p-4 flex justify-between items-center">
    <a href="/" title="Accueil" class="text-2xl no-underline hover:text-green-200">$ Sylvain@ANGLADE</a>
    <ul class="flex space-x-4">
      <li><a href="#experience" class="hover:text-green-200">Mon expérience</a></li>
      <li><a href="#personnalite" class="hover:text-green-200">Ma personnalité</a></li>
      <li><a href="#realisations" class="hover:text-green-200">Mes réalisations</a></li>
      <li><a href="#contact" class="hover:text-green-200">Contactez moi</a></li>
    </ul>
  </nav>
</template>
