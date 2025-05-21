<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Reading Practice</h1>
    
    <!-- Reading Passage -->
    <div class="card mb-6">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">{{ currentPassage.title }}</h3>
        <div class="flex space-x-2">
          <button @click="prevPassage" class="btn-secondary text-sm" :disabled="currentPassageIndex === 0">Previous</button>
          <button @click="nextPassage" class="btn-primary text-sm" :disabled="currentPassageIndex === passages.length - 1">Next</button>
        </div>
      </div>
      <div class="card-body">
        <div class="mb-6">
          <div class="flex justify-center mb-4">
            <img :src="currentPassage.image" alt="Reading illustration" class="rounded-lg shadow-md max-h-48">
          </div>
          
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
              <input type="checkbox" id="show-furigana" v-model="showFurigana" class="mr-2">
              <label for="show-furigana" class="text-sm">Show Furigana</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="show-translation" v-model="showTranslation" class="mr-2">
              <label for="show-translation" class="text-sm">Show Translation</label>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div class="japanese-text text-lg leading-relaxed mb-4">
              <p v-for="(paragraph, pIndex) in currentPassage.content" :key="pIndex" class="mb-3">
                <span v-for="(segment, sIndex) in paragraph" :key="sIndex">
                  <span v-if="segment.furigana && showFurigana" class="relative">
                    {{ segment.text }}
                    <span class="absolute top-0 left-0 transform -translate-y-4 text-xs text-gray-500 whitespace-nowrap">{{ segment.furigana }}</span>
                  </span>
                  <span v-else>{{ segment.text }}</span>
                </span>
              </p>
            </div>
            
            <div v-if="showTranslation" class="text-gray-600 border-t pt-4">
              <p v-for="(paragraph, index) in currentPassage.translation" :key="index" class="mb-3">
                {{ paragraph }}
              </p>
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-md mb-6">
            <h4 class="font-medium mb-2">Vocabulary:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(word, index) in currentPassage.vocabulary" :key="index" class="flex">
                <div class="w-1/3 font-medium">{{ word.japanese }}</div>
                <div class="w-2/3">
                  <div>{{ word.reading }}</div>
                  <div class="text-gray-600">{{ word.meaning }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Comprehension Questions -->
    <div class="card mb-6">
      <div class="card-header">
        <h3 class="text-lg font-medium">Comprehension Questions</h3>
      </div>
      <div class="card-body">
        <div v-if="!quizCompleted">
          <div v-for="(question, qIndex) in currentPassage.questions" :key="qIndex" class="mb-6">
            <h4 class="font-medium mb-2">{{ qIndex + 1 }}. {{ question.question }}</h4>
            
            <div class="space-y-2">
              <div v-for="(option, oIndex) in question.options" :key="oIndex" 
                   class="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50"
                   :class="{ 'border-green-500 bg-green-50': userAnswers[qIndex] === oIndex && question.correctAnswer === oIndex && showResults,
                            'border-red-500 bg-red-50': userAnswers[qIndex] === oIndex && question.correctAnswer !== oIndex && showResults }"
                   @click="selectAnswer(qIndex, oIndex)">
                <div class="w-6 h-6 rounded-full border flex items-center justify-center mr-3"
                     :class="{ 'bg-indigo-600 border-indigo-600': userAnswers[qIndex] === oIndex,
                              'border-gray-300': userAnswers[qIndex] !== oIndex }">
                  <span v-if="userAnswers[qIndex] === oIndex" class="text-white text-sm">✓</span>
                </div>
                <span>{{ option }}</span>
              </div>
            </div>
            
            <div v-if="showResults && userAnswers[qIndex] !== question.correctAnswer" class="mt-2 text-red-600">
              Correct answer: {{ question.options[question.correctAnswer] }}
            </div>
          </div>
          
          <div class="flex justify-between mt-6">
            <button v-if="!showResults" @click="checkAnswers" class="btn-primary" :disabled="!allQuestionsAnswered">Check Answers</button>
            <button v-else @click="nextPassage" class="btn-primary" :disabled="currentPassageIndex === passages.length - 1">Next Passage</button>
            <div v-if="showResults" class="text-lg font-medium">
              Score: {{ score }}/{{ currentPassage.questions.length }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Reading List -->
    <div class="card">
      <div class="card-header">
        <h3 class="text-lg font-medium">All Readings</h3>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(passage, index) in passages" :key="index" 
               class="p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
               :class="{ 'border-indigo-500': currentPassageIndex === index }"
               @click="selectPassage(index)">
            <div class="font-medium">{{ passage.title }}</div>
            <div class="text-sm text-gray-500">{{ passage.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reading',
  data() {
    return {
      currentPassageIndex: 0,
      showFurigana: true,
      showTranslation: false,
      userAnswers: [],
      showResults: false,
      quizCompleted: false,
      score: 0,
      passages: [
        {
          title: "私の一日 (My Day)",
          level: "N5 Beginner",
          image: "https://via.placeholder.com/400x225?text=Daily+Life", // Replace with actual image
          content: [
            [
              { text: "私", furigana: "わたし" },
              { text: "は" },
              { text: "毎日", furigana: "まいにち" },
              { text: "6" },
              { text: "時", furigana: "じ" },
              { text: "に" },
              { text: "起き", furigana: "お" },
              { text: "ます。" }
            ],
            [
              { text: "朝ご飯", furigana: "あさごはん" },
              { text: "を" },
              { text: "食べ", furigana: "た" },
              { text: "て、" },
              { text: "学校", furigana: "がっこう" },
              { text: "に" },
              { text: "行き", furigana: "い" },
              { text: "ます。" }
            ],
            [
              { text: "学校", furigana: "がっこう" },
              { text: "で" },
              { text: "日本語", furigana: "にほんご" },
              { text: "を" },
              { text: "勉強", furigana: "べんきょう" },
              { text: "します。" }
            ],
            [
              { text: "午後", furigana: "ごご" },
              { text: "は" },
              { text: "友達", furigana: "ともだち" },
              { text: "と" },
              { text: "カフェ" },
              { text: "で" },
              { text: "コーヒー" },
              { text: "を" },
              { text: "飲み", furigana: "の" },
              { text: "ます。" }
            ],
            [
              { text: "夜", furigana: "よる" },
              { text: "は" },
              { text: "晩ご飯", furigana: "ばんごはん" },
              { text: "を" },
              { text: "食べ", furigana: "た" },
              { text: "て、" },
              { text: "宿題", furigana: "しゅくだい" },
              { text: "をします。" }
            ],
            [
              { text: "11" },
              { text: "時", furigana: "じ" },
              { text: "に" },
              { text: "寝", furigana: "ね" },
              { text: "ます。" }
            ]
          ],
          translation: [
            "I wake up at 6 o'clock every day.",
            "I eat breakfast and go to school.",
            "I study Japanese at school.",
            "In the afternoon, I drink coffee with my friends at a cafe.",
            "In the evening, I eat dinner and do my homework.",
            "I go to sleep at 11 o'clock."
          ],
          vocabulary: [
            { japanese: "起きます", reading: "おきます", meaning: "to wake up" },
            { japanese: "朝ご飯", reading: "あさごはん", meaning: "breakfast" },
            { japanese: "学校", reading: "がっこう", meaning: "school" },
            { japanese: "勉強します", reading: "べんきょうします", meaning: "to study" },
            { japanese: "友達", reading: "ともだち", meaning: "friend" },
            { japanese: "晩ご飯", reading: "ばんごはん", meaning: "dinner" },
            { japanese: "宿題", reading: "しゅくだい", meaning: "homework" },
            { japanese: "寝ます", reading: "ねます", meaning: "to sleep" }
          ],
          questions: [
            {
              question: "What time does the writer wake up?",
              options: ["5 o'clock", "6 o'clock", "7 o'clock", "8 o'clock"],
              correctAnswer: 1
            },
            {
              question: "What does the writer study at school?",
              options: ["Math", "English", "Japanese", "Science"],
              correctAnswer: 2
            },
            {
              question: "What does the writer do in the afternoon?",
              options: [
                "Goes shopping",
                "Drinks coffee with friends",
                "Plays sports",
                "Watches TV"
              ],
              correctAnswer: 1
            },
            {
              question: "What time does the writer go to sleep?",
              options: ["9 o'clock", "10 o'clock", "11 o'clock", "12 o'clock"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "私の家族 (My Family)",
          level: "N5 Beginner",
          image: "https://via.placeholder.com/400x225?text=Family", // Replace with actual image
          content: [
            [
              { text: "私", furigana: "わたし" },
              { text: "の" },
              { text: "家族", furigana: "かぞく" },
              { text: "は" },
              { text: "五人", furigana: "ごにん" },
              { text: "です。" }
            ],
            [
              { text: "父", furigana: "ちち" },
              { text: "と" },
              { text: "母", furigana: "はは" },
              { text: "と" },
              { text: "姉", furigana: "あね" },
              { text: "と" },
              { text: "弟", furigana: "おとうと" },
              { text: "と" },
              { text: "私", furigana: "わたし" },
              { text: "です。" }
            ],
            [
              { text: "父", furigana: "ちち" },
              { text: "は" },
              { text: "会社員", furigana: "かいしゃいん" },
              { text: "です。" },
              { text: "毎日", furigana: "まいにち" },
              { text: "忙", furigana: "いそが" },
              { text: "しいです。" }
            ],
            [
              { text: "母", furigana: "はは" },
              { text: "は" },
              { text: "先生", furigana: "せんせい" },
              { text: "です。" },
              { text: "高校", furigana: "こうこう" },
              { text: "で" },
              { text: "英語", furigana: "えいご" },
              { text: "を" },
              { text: "教え", furigana: "おし" },
              { text: "ています。" }
            ],
            [
              { text: "姉", furigana: "あね" },
              { text: "は" },
              { text: "大学生", furigana: "だいがくせい" },
              { text: "です。" },
              { text: "弟", furigana: "おとうと" },
              { text: "は" },
              { text: "高校生", furigana: "こうこうせい" },
              { text: "です。" }
            ],
            [
              { text: "私", furigana: "わたし" },
              { text: "は" },
              { text: "大学", furigana: "だいがく" },
              { text: "で" },
              { text: "日本語", furigana: "にほんご" },
              { text: "を" },
              { text: "勉強", furigana: "べんきょう" },
              { text: "しています。" }
            ]
          ],
          translation: [
            "My family has five people.",
            "My father, mother, older sister, younger brother, and me.",
            "My father is a company employee. He is busy every day.",
            "My mother is a teacher. She teaches English at a high school.",
            "My older sister is a university student. My younger brother is a high school student.",
            "I am studying Japanese at university."
          ],
          vocabulary: [
            { japanese: "家族", reading: "かぞく", meaning: "family" },
            { japanese: "父", reading: "ちち", meaning: "father" },
            { japanese: "母", reading: "はは", meaning: "mother" },
            { japanese: "姉", reading: "あね", meaning: "older sister" },
            { japanese: "弟", reading: "おとうと", meaning: "younger brother" },
            { japanese: "会社員", reading: "かいしゃいん", meaning: "company employee" },
            { japanese: "先生", reading: "せんせい", meaning: "teacher" },
            { japanese: "大学生", reading: "だいがくせい", meaning: "university student" },
            { japanese: "高校生", reading: "こうこうせい", meaning: "high school student" }
          ],
          questions: [
            {
              question: "How many people are in the writer's family?",
              options: ["3 people", "4 people", "5 people", "6 people"],
              correctAnswer: 2
            },
            {
              question: "What is the writer's father's job?",
              options: ["Teacher", "Doctor", "Company employee", "Student"],
              correctAnswer: 2
            },
            {
              question: "What subject does the writer's mother teach?",
              options: ["Math", "Japanese", "English", "Science"],
              correctAnswer: 2
            },
            {
              question: "What is the writer studying?",
              options: ["English", "Japanese", "Medicine", "Business"],
              correctAnswer: 1
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentPassage() {
      return this.passages[this.currentPassageIndex]
    },
    allQuestionsAnswered() {
      return this.userAnswers.length === this.currentPassage.questions.length && 
             !this.userAnswers.includes(undefined)
    }
  },
  methods: {
    prevPassage() {
      if (this.currentPassageIndex > 0) {
        this.currentPassageIndex--
        this.resetQuiz()
      }
    },
    nextPassage() {
      if (this.currentPassageIndex < this.passages.length - 1) {
        this.currentPassageIndex++
        this.resetQuiz()
      }
    },
    selectPassage(index) {
      this.currentPassageIndex = index
      this.resetQuiz()
    },
    selectAnswer(questionIndex, optionIndex) {
      if (this.showResults) return
      
      // Create a copy of the array to maintain reactivity
      const answers = [...this.userAnswers]
      answers[questionIndex] = optionIndex
      this.userAnswers = answers
    },
    checkAnswers() {
      this.showResults = true
      this.score = 0
      
      this.currentPassage.questions.forEach((question, index) => {
        if (this.userAnswers[index] === question.correctAnswer) {
          this.score++
        }
      })
      
      // Update progress in store
      if (this.score === this.currentPassage.questions.length) {
        // Perfect score
        this.$store.dispatch('updateReadingProgress', { 
          completed: true, 
          perfect: true 
        })
      } else if (this.score > this.currentPassage.questions.length / 2) {
        // Passed
        this.$store.dispatch('updateReadingProgress', { 
          completed: true, 
          perfect: false 
        })
      }
    },
    resetQuiz() {
      this.userAnswers = []
      this.showResults = false
      this.score = 0
    }
  },
  created() {
    // Initialize empty answers array
    this.userAnswers = Array(this.currentPassage.questions.length)
  }
}
</script>

<style scoped>
/* Add extra space for furigana */
.japanese-text {
  line-height: 2.5;
}
</style> 