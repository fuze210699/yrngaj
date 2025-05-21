<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Grammar</h1>

    <!-- Grammar Point -->
    <div class="card mb-6">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">
          Grammar Point: {{ currentGrammar.title }}
        </h3>
        <div class="flex space-x-2">
          <button
            @click="prevGrammar"
            class="btn-secondary text-sm"
            :disabled="grammarIndex === 0"
          >
            Previous
          </button>
          <button @click="nextGrammar" class="btn-primary text-sm">Next</button>
        </div>
      </div>
      <div class="card-body">
        <div class="mb-6">
          <h4 class="text-xl font-bold mb-2">{{ currentGrammar.title }}</h4>
          <p class="text-gray-600 mb-4">{{ currentGrammar.explanation }}</p>

          <div class="bg-gray-50 p-4 rounded-md mb-4">
            <h5 class="font-medium mb-2">Formation:</h5>
            <p class="japanese-text">{{ currentGrammar.formation }}</p>
          </div>
        </div>

        <div class="mb-6">
          <h5 class="font-medium mb-2">Examples:</h5>
          <div
            v-for="(example, index) in currentGrammar.examples"
            :key="index"
            class="mb-3"
          >
            <div class="japanese-text text-lg mb-1">{{ example.japanese }}</div>
            <div class="text-gray-600">{{ example.english }}</div>
          </div>
        </div>

        <div class="mb-6">
          <h5 class="font-medium mb-2">Notes:</h5>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="(note, index) in currentGrammar.notes" :key="index">
              {{ note }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Practice Quiz -->
    <div class="card mb-6">
      <div class="card-header">
        <h3 class="text-lg font-medium">Practice Quiz</h3>
      </div>
      <div class="card-body">
        <div v-if="!quizCompleted">
          <div class="mb-6">
            <h4 class="font-medium mb-2">
              Question {{ currentQuestionIndex + 1 }} of
              {{ currentGrammar.quiz.length }}
            </h4>
            <p class="mb-4">{{ currentQuestion.question }}</p>

            <div class="space-y-2">
              <div
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                class="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50"
                :class="{
                  'border-green-500 bg-green-50':
                    selectedAnswer === index && checkAnswer === 'correct',
                  'border-red-500 bg-red-50':
                    selectedAnswer === index && checkAnswer === 'incorrect',
                }"
                @click="selectAnswer(index)"
              >
                <div
                  class="w-6 h-6 rounded-full border flex items-center justify-center mr-3"
                  :class="{
                    'bg-indigo-600 border-indigo-600': selectedAnswer === index,
                    'border-gray-300': selectedAnswer !== index,
                  }"
                >
                  <span
                    v-if="selectedAnswer === index"
                    class="text-white text-sm"
                    >✓</span
                  >
                </div>
                <span>{{ option }}</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between">
            <div>
              <button
                v-if="checkAnswer"
                @click="nextQuestion"
                class="btn-primary"
              >
                {{
                  currentQuestionIndex === currentGrammar.quiz.length - 1
                    ? "Finish Quiz"
                    : "Next Question"
                }}
              </button>
              <button
                v-else
                @click="checkCurrentAnswer"
                class="btn-primary"
                :disabled="selectedAnswer === null"
              >
                Check Answer
              </button>
            </div>
            <div
              v-if="checkAnswer === 'correct'"
              class="text-green-600 font-medium"
            >
              Correct!
            </div>
            <div
              v-if="checkAnswer === 'incorrect'"
              class="text-red-600 font-medium"
            >
              Incorrect. The correct answer is:
              {{ currentQuestion.options[currentQuestion.correctAnswer] }}
            </div>
          </div>
        </div>

        <div v-else class="text-center py-8">
          <div class="text-3xl font-bold text-indigo-600 mb-2">
            Quiz Completed!
          </div>
          <div class="text-lg mb-4">
            You scored {{ quizScore }} out of {{ currentGrammar.quiz.length }}
          </div>
          <button @click="resetQuiz" class="btn-primary">Try Again</button>
        </div>
      </div>
    </div>

    <!-- Grammar List -->
    <div class="card">
      <div class="card-header">
        <h3 class="text-lg font-medium">N5 Grammar Points</h3>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="(grammar, index) in grammarPoints"
            :key="index"
            class="p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
            :class="{ 'border-indigo-500': grammarIndex === index }"
            @click="selectGrammarPoint(index)"
          >
            <h4 class="font-medium">{{ grammar.title }}</h4>
            <p class="text-sm text-gray-600 truncate">
              {{ grammar.explanation }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grammar",
  data() {
    return {
      grammarIndex: 0,
      grammarPoints: [
        {
          title: "は (wa) - Topic Marker",
          explanation:
            "The particle は (wa) is used to mark the topic of a sentence.",
          formation: "Noun + は + ...",
          examples: [
            { japanese: "私は学生です。", english: "I am a student." },
            { japanese: "彼女は医者です。", english: "She is a doctor." },
            {
              japanese: "東京は大きい都市です。",
              english: "Tokyo is a big city.",
            },
          ],
          notes: [
            "は is written as ha (は) but pronounced as 'wa'.",
            "Often used at the beginning of sentences to establish what's being discussed.",
            "Different from が (ga) which marks the subject.",
          ],
          quiz: [
            {
              question:
                "Choose the correct particle to complete: 私___ 日本人です。",
              options: ["は", "が", "を", "に"],
              correctAnswer: 0,
            },
            {
              question: "Which sentence correctly uses は?",
              options: [
                "私は日本語を勉強しています。",
                "私が日本語は勉強しています。",
                "私を日本語は勉強しています。",
                "私に日本語は勉強しています。",
              ],
              correctAnswer: 0,
            },
            {
              question: "What is the primary function of は?",
              options: [
                "To mark the direct object",
                "To mark the topic of the sentence",
                "To indicate direction",
                "To show possession",
              ],
              correctAnswer: 1,
            },
          ],
        },
        {
          title: "です - To Be (Polite)",
          explanation:
            "です is the polite form of the verb 'to be' in Japanese.",
          formation: "Noun/Adjective + です",
          examples: [
            { japanese: "これはペンです。", english: "This is a pen." },
            { japanese: "あれは犬です。", english: "That is a dog." },
            {
              japanese: "山田さんは先生です。",
              english: "Mr. Yamada is a teacher.",
            },
          ],
          notes: [
            "Used for polite statements in the present tense.",
            "Past tense form is でした (deshita).",
            "Negative form is ではありません (dewa arimasen) or じゃありません (ja arimasen).",
          ],
          quiz: [
            {
              question: "What is the past tense of です?",
              options: ["でした", "だった", "ですた", "である"],
              correctAnswer: 0,
            },
            {
              question: "Choose the correct negative form of です:",
              options: ["ではありません", "ですない", "ないです", "でわない"],
              correctAnswer: 0,
            },
            {
              question: "Complete the sentence: これ___ 本です。",
              options: ["は", "が", "を", "に"],
              correctAnswer: 0,
            },
          ],
        },
        {
          title: "を (o) - Object Marker",
          explanation: "The particle を (o) marks the direct object of a verb.",
          formation: "Object + を + Verb",
          examples: [
            { japanese: "私は本を読みます。", english: "I read a book." },
            { japanese: "彼は水を飲みます。", english: "He drinks water." },
            {
              japanese: "私は日本語を勉強します。",
              english: "I study Japanese.",
            },
          ],
          notes: [
            "を is written as wo (を) but pronounced as 'o'.",
            "Always followed by a verb.",
            "Indicates what the action is being done to.",
          ],
          quiz: [
            {
              question: "Choose the correct particle: 私はりんご___ 食べます。",
              options: ["は", "が", "を", "に"],
              correctAnswer: 2,
            },
            {
              question: "What does the particle を mark?",
              options: [
                "The subject",
                "The topic",
                "The direct object",
                "The location",
              ],
              correctAnswer: 2,
            },
            {
              question: "Which sentence correctly uses を?",
              options: [
                "私は学校を行きます。",
                "私は映画を見ます。",
                "私は東京をいます。",
                "私は友達を会います。",
              ],
              correctAnswer: 1,
            },
          ],
        },
      ],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      checkAnswer: null,
      quizCompleted: false,
      quizScore: 0,
    };
  },
  computed: {
    currentGrammar() {
      return this.grammarPoints[this.grammarIndex];
    },
    currentQuestion() {
      return this.currentGrammar.quiz[this.currentQuestionIndex];
    },
  },
  methods: {
    nextGrammar() {
      if (this.grammarIndex < this.grammarPoints.length - 1) {
        this.grammarIndex++;
        this.resetQuiz();
      }
    },
    prevGrammar() {
      if (this.grammarIndex > 0) {
        this.grammarIndex--;
        this.resetQuiz();
      }
    },
    selectGrammarPoint(index) {
      this.grammarIndex = index;
      this.resetQuiz();
    },
    selectAnswer(index) {
      if (this.checkAnswer) return;
      this.selectedAnswer = index;
    },
    checkCurrentAnswer() {
      if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
        this.checkAnswer = "correct";
        this.quizScore++;
      } else {
        this.checkAnswer = "incorrect";
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.currentGrammar.quiz.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
        this.checkAnswer = null;
      } else {
        this.quizCompleted = true;

        // Update progress in store
        const learned = this.$store.state.progress.grammar.learned + 1;
        this.$store.commit("updateGrammarProgress", { learned });

        if (this.quizScore === this.currentGrammar.quiz.length) {
          const mastered = this.$store.state.progress.grammar.mastered + 1;
          this.$store.commit("updateGrammarProgress", { mastered });
        }

        this.$store.dispatch("saveUserData");
      }
    },
    resetQuiz() {
      this.currentQuestionIndex = 0;
      this.selectedAnswer = null;
      this.checkAnswer = null;
      this.quizCompleted = false;
      this.quizScore = 0;
    },
  },
};
</script>
