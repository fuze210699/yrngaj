<template>
  <div>
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <div class="mt-4 md:mt-0">
        <button class="btn-secondary mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Goal
        </button>
        <button class="btn-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </button>
      </div>
    </div>

    <!-- Welcome and Streak -->
    <div class="card mb-8 transform transition-all hover:shadow-lg">
      <div class="card-body bg-gradient-to-r from-indigo-50 to-white">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h2 class="text-2xl font-bold flex items-center">
              <span class="text-indigo-600 mr-2">こんにちは！</span>
              <span class="text-gray-800">Welcome back</span>
            </h2>
            <p class="text-gray-600 mt-1">
              Continue your Japanese N5 learning journey today!
            </p>
            <div class="mt-4">
              <button class="btn-primary">
                Start Today's Lessons
              </button>
            </div>
          </div>
          <div class="text-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div class="relative">
              <svg class="w-24 h-24" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" stroke-width="8" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#4f46e5" 
                  stroke-width="8" 
                  stroke-dasharray="282.7" 
                  :stroke-dashoffset="282.7 - (userStreak / 30) * 282.7" 
                  stroke-linecap="round" 
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <div class="text-4xl font-bold text-indigo-600">{{ userStreak }}</div>
                <div class="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Overview -->
    <div class="card mb-8">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">Your Progress</h3>
        <div class="badge badge-blue">{{ totalProgress }}% Complete</div>
      </div>
      <div class="card-body">
        <div class="mb-6">
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium">Overall Progress</span>
            <span class="text-sm font-medium">{{ totalProgress }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              class="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
              :style="{ width: `${totalProgress}%` }"
            ></div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h4 class="font-medium">Vocabulary</h4>
            </div>
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium">Progress</span>
              <span class="text-sm font-medium">{{ vocabularyProgress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                class="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${vocabularyProgress}%` }"
              ></div>
            </div>
            <div class="mt-2 text-xs text-gray-500 flex justify-between">
              <span>{{ progress.vocabulary.mastered }}/{{ progress.vocabulary.total }} words</span>
              <router-link to="/vocabulary" class="text-blue-600 hover:underline">Practice</router-link>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 class="font-medium">Kanji</h4>
            </div>
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium">Progress</span>
              <span class="text-sm font-medium">{{ kanjiProgress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                class="bg-green-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${kanjiProgress}%` }"
              ></div>
            </div>
            <div class="mt-2 text-xs text-gray-500 flex justify-between">
              <span>{{ progress.kanji.mastered }}/{{ progress.kanji.total }} kanji</span>
              <router-link to="/kanji" class="text-green-600 hover:underline">Practice</router-link>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-center mb-3">
              <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 class="font-medium">Grammar</h4>
            </div>
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium">Progress</span>
              <span class="text-sm font-medium">{{ grammarProgress }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div
                class="bg-yellow-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: `${grammarProgress}%` }"
              ></div>
            </div>
            <div class="mt-2 text-xs text-gray-500 flex justify-between">
              <span>{{ progress.grammar.mastered }}/{{ progress.grammar.total }} points</span>
              <router-link to="/grammar" class="text-yellow-600 hover:underline">Practice</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Daily Schedule -->
    <div class="card mb-8">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">Today's Learning Plan</h3>
        <button class="btn-secondary btn-sm">Customize</button>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="font-medium">Vocabulary</h4>
                <p class="text-sm text-gray-600 mt-1">
                  Review {{ dailyGoal.vocabulary }} new words
                </p>
                <div class="mt-3">
                  <router-link to="/vocabulary" class="btn-primary btn-sm">Start Now</router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="font-medium">Grammar</h4>
                <p class="text-sm text-gray-600 mt-1">
                  Learn {{ dailyGoal.grammar }} grammar point
                </p>
                <div class="mt-3">
                  <router-link to="/grammar" class="btn-primary btn-sm">Start Now</router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 mt-1">
                <div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 class="font-medium">Listening</h4>
                <p class="text-sm text-gray-600 mt-1">
                  Practice {{ dailyGoal.listening }} dialogue
                </p>
                <div class="mt-3">
                  <router-link to="/listening" class="btn-primary btn-sm">Start Now</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="card">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">Recent Activity</h3>
        <button class="btn-secondary btn-sm">View All</button>
      </div>
      <div class="card-body">
        <div class="space-y-4">
          <div v-for="(activity, index) in recentActivity" :key="index" class="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-full flex items-center justify-center"
                :class="{
                  'bg-blue-100': activity.type === 'vocabulary',
                  'bg-green-100': activity.type === 'kanji',
                  'bg-yellow-100': activity.type === 'grammar',
                  'bg-purple-100': activity.type === 'listening',
                  'bg-sakura-100': activity.type === 'speaking'
                }">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  :class="{
                    'text-blue-600': activity.type === 'vocabulary',
                    'text-green-600': activity.type === 'kanji',
                    'text-yellow-600': activity.type === 'grammar',
                    'text-purple-600': activity.type === 'listening',
                    'text-sakura-600': activity.type === 'speaking'
                  }">
                  <path v-if="activity.type === 'vocabulary'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  <path v-else-if="activity.type === 'kanji'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path v-else-if="activity.type === 'grammar'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  <path v-else-if="activity.type === 'listening'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium">{{ activity.title }}</p>
              <p class="text-xs text-gray-500 mt-1">{{ activity.time }}</p>
            </div>
            <div>
              <span class="badge" :class="`badge-${activity.type === 'speaking' ? 'sakura' : activity.type}`">
                {{ activity.score }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Dashboard",
  computed: {
    ...mapState({
      userStreak: (state) => state.user.streak,
      progress: (state) => state.progress,
      dailyGoal: (state) => state.user.settings.dailyGoal,
      flashcards: (state) => state.flashcards,
    }),
    ...mapGetters([
      "vocabularyProgress",
      "kanjiProgress",
      "grammarProgress",
      "totalProgress",
    ]),
  },
  created() {
    try {
      // Load user data and check streak
      this.$store.dispatch("loadUserData");
      this.$store.dispatch("checkDailyStreak");

      // Load flashcards
      this.$store.dispatch("loadFlashcards", "vocabulary");
      this.$store.dispatch("loadFlashcards", "kanji");
    } catch (error) {
      console.error("Error in Dashboard created hook:", error);
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
