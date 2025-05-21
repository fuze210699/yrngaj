<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Vocabulary</h1>

    <!-- Flashcard System -->
    <div class="card mb-6">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">Flashcards</h3>
        <div class="flex space-x-2">
          <button
            @click="currentMode = 'learn'"
            :class="[
              'btn text-sm',
              currentMode === 'learn' ? 'btn-primary' : 'btn-secondary',
            ]"
          >
            Learn
          </button>
          <button
            @click="currentMode = 'review'"
            :class="[
              'btn text-sm',
              currentMode === 'review' ? 'btn-primary' : 'btn-secondary',
            ]"
          >
            Review
          </button>
        </div>
      </div>
      <div class="card-body">
        <div
          v-if="currentMode === 'learn' && !showAnswer"
          class="p-8 text-center"
        >
          <div class="japanese-text text-5xl font-bold mb-4">
            {{ currentCard.word }}
          </div>
          <div class="text-2xl text-gray-600 mb-8">
            {{ currentCard.reading }}
          </div>
          <button @click="showAnswer = true" class="btn-primary">
            Show Meaning
          </button>
        </div>

        <div
          v-if="currentMode === 'learn' && showAnswer"
          class="p-8 text-center"
        >
          <div class="japanese-text text-5xl font-bold mb-2">
            {{ currentCard.word }}
          </div>
          <div class="text-2xl text-gray-600 mb-4">
            {{ currentCard.reading }}
          </div>
          <div class="text-3xl font-medium mb-6">{{ currentCard.meaning }}</div>

          <div class="bg-gray-50 p-4 rounded-md mb-6 text-left">
            <div class="japanese-text text-lg mb-1">
              {{ currentCard.example }}
            </div>
            <div class="text-gray-600">
              {{ currentCard.exampleTranslation }}
            </div>
          </div>

          <div class="flex justify-center space-x-4">
            <button @click="nextCard('hard')" class="btn-secondary">
              Hard
            </button>
            <button @click="nextCard('good')" class="btn-primary">Good</button>
            <button @click="nextCard('easy')" class="btn-success">Easy</button>
          </div>
        </div>

        <div v-if="currentMode === 'review'" class="p-8 text-center">
          <div class="japanese-text text-5xl font-bold mb-4">
            {{ currentCard.word }}
          </div>
          <div v-if="showAnswer" class="text-2xl text-gray-600 mb-4">
            {{ currentCard.reading }}
          </div>
          <div v-if="showAnswer" class="text-3xl font-medium mb-6">
            {{ currentCard.meaning }}
          </div>

          <div
            v-if="showAnswer"
            class="bg-gray-50 p-4 rounded-md mb-6 text-left"
          >
            <div class="japanese-text text-lg mb-1">
              {{ currentCard.example }}
            </div>
            <div class="text-gray-600">
              {{ currentCard.exampleTranslation }}
            </div>
          </div>

          <div v-if="!showAnswer" class="mb-6">
            <button @click="showAnswer = true" class="btn-primary">
              Show Answer
            </button>
          </div>

          <div v-if="showAnswer" class="flex justify-center space-x-4">
            <button
              @click="nextCard('forgot')"
              class="btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
            >
              Forgot
            </button>
            <button @click="nextCard('hard')" class="btn-secondary">
              Hard
            </button>
            <button @click="nextCard('good')" class="btn-primary">Good</button>
            <button @click="nextCard('easy')" class="btn-success">Easy</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Vocabulary List -->
    <div class="card">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">N5 Vocabulary List</h3>
        <div class="relative">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search..."
            class="form-input text-sm py-1 pl-8 pr-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 absolute left-2 top-2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div class="card-body">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Word
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Reading
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Meaning
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="word in filteredVocabulary" :key="word.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="japanese-text text-lg font-medium">
                    {{ word.word }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div>{{ word.reading }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div>{{ word.meaning }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="badge-blue">New</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Vocabulary",
  data() {
    return {
      currentMode: "learn", // 'learn' or 'review'
      currentCardIndex: 0,
      showAnswer: false,
      searchTerm: "",
    };
  },
  computed: {
    ...mapState({
      vocabularyCards: (state) => state.flashcards.vocabulary,
    }),
    currentCard() {
      if (this.vocabularyCards.length === 0) {
        return {
          word: "読み込み中...",
          reading: "",
          meaning: "Loading...",
          example: "",
          exampleTranslation: "",
        };
      }
      return this.vocabularyCards[this.currentCardIndex];
    },
    filteredVocabulary() {
      if (!this.searchTerm) {
        return this.vocabularyCards;
      }

      const term = this.searchTerm.toLowerCase();
      return this.vocabularyCards.filter(
        (word) =>
          word.word.includes(term) ||
          word.reading.toLowerCase().includes(term) ||
          word.meaning.toLowerCase().includes(term)
      );
    },
  },
  methods: {
    nextCard(difficulty) {
      // In a real app, this would update the SRS algorithm
      // For now, we'll just move to the next card
      this.showAnswer = false;
      this.currentCardIndex =
        (this.currentCardIndex + 1) % this.vocabularyCards.length;

      // Update progress in store
      if (difficulty === "good" || difficulty === "easy") {
        const learned = this.$store.state.progress.vocabulary.learned + 1;
        this.$store.commit("updateVocabularyProgress", { learned });

        if (difficulty === "easy") {
          const mastered = this.$store.state.progress.vocabulary.mastered + 1;
          this.$store.commit("updateVocabularyProgress", { mastered });
        }

        this.$store.dispatch("saveUserData");
      }
    },
  },
  created() {
    this.$store.dispatch("loadFlashcards", "vocabulary");
  },
};
</script>
