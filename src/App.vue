<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
    <nav class="bg-gradient-to-r from-indigo-700 to-indigo-600 text-white shadow-lg sticky top-0 z-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center py-3">
          <div class="flex items-center">
            <router-link to="/" class="text-2xl font-bold flex items-center">
              <span class="text-sakura-400 mr-2">日本語</span> N5 学習
            </router-link>
          </div>
          
          <div class="hidden md:flex space-x-1">
            <router-link 
              v-for="(link, index) in navLinks" 
              :key="index" 
              :to="link.path" 
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors"
              :class="{ 'bg-indigo-800': isActiveRoute(link.path) }"
            >
              {{ link.name }}
            </router-link>
          </div>
          
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-md hover:bg-indigo-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden py-3 space-y-1">
          <router-link 
            v-for="(link, index) in navLinks" 
            :key="index" 
            :to="link.path" 
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-800 transition-colors"
            :class="{ 'bg-indigo-800': isActiveRoute(link.path) }"
            @click="mobileMenuOpen = false"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </nav>
    
    <main class="container mx-auto py-6 px-4 flex-grow">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    
    <footer class="bg-white border-t border-gray-200 py-6 mt-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-gray-600 mb-4 md:mb-0">
            <p>© 2023 Japanese N5 Learning. Made with <span class="text-red-500">❤️</span> for JLPT learners.</p>
          </div>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-500 hover:text-indigo-600 transition-colors">About</a>
            <a href="#" class="text-gray-500 hover:text-indigo-600 transition-colors">Contact</a>
            <a href="#" class="text-gray-500 hover:text-indigo-600 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false,
      navLinks: [
        { name: 'Dashboard', path: '/' },
        { name: 'Bài học', path: '/lessons' },
        { name: 'Vocabulary', path: '/vocabulary' },
        { name: 'Grammar', path: '/grammar' },
        { name: 'Listening', path: '/listening' },
        { name: 'Speaking', path: '/speaking' },
        { name: 'Reading', path: '/reading' },
        { name: 'Entertainment', path: '/entertainment' }
      ]
    }
  },
  methods: {
    isActiveRoute(path) {
      return this.$route.path === path || 
        (path !== '/' && this.$route.path.startsWith(path));
    }
  },
  watch: {
    $route() {
      // Close mobile menu when route changes
      this.mobileMenuOpen = false;
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 