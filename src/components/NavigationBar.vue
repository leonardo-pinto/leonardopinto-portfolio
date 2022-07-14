
<template>
  <nav>
    <div>
      <select
        v-model="selectedLanguage"
        @change="updateStorage(selectedLanguage)"
      >
        <option
          v-for="(language, index) in languageOptions"
          :key="index"
          :value="language.value"
        >
          {{ language.name }}
        </option>
      </select>
    </div>
    <div class="links-container">
      <router-link
        v-for="(link, index) in navLinks"
        :key="index"
        :to="link.to"
      >
        {{ $t(link.name) }}
      </router-link>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const selectedLanguage = ref(window.localStorage.getItem('lang') || 'en')
const languageOptions = ref([
  {name: 'Portuguese', value: 'pt-br'},
	{name: 'English', value: 'en'},
])
const navLinks = ref([
  { name: 'home', to: '/' },
  { name: 'projects', to: '/projects' },
  { name: 'about', to: '/about' },
  { name: 'contact', to: '/contact' },
])

function updateStorage(event: string) {
  window.localStorage.setItem('lang', event)
  location.reload()
}
</script>

<style scoped>

nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.links-container {
  display: flex;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 20px;
}
</style>