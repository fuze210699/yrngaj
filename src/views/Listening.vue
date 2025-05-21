<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Listening Practice</h1>
    
    <!-- Audio Player -->
    <div class="card mb-6">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">Dialogue {{ currentDialogueIndex + 1 }}: {{ currentDialogue.title }}</h3>
        <div class="flex space-x-2">
          <button @click="prevDialogue" class="btn-secondary text-sm" :disabled="currentDialogueIndex === 0">Previous</button>
          <button @click="nextDialogue" class="btn-primary text-sm" :disabled="currentDialogueIndex === dialogues.length - 1">Next</button>
        </div>
      </div>
      <div class="card-body">
        <div class="mb-6">
          <div class="flex justify-center mb-4">
            <img :src="currentDialogue.image" alt="Dialogue scene" class="rounded-lg shadow-md max-h-48">
          </div>
          
          <div class="flex justify-center items-center space-x-4 mb-6">
            <button @click="playAudio" class="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <div>
              <div class="text-sm text-gray-500">Speed:</div>
              <div class="flex items-center space-x-2">
                <button @click="setPlaybackRate(0.75)" :class="['text-xs px-2 py-1 rounded', playbackRate === 0.75 ? 'bg-indigo-600 text-white' : 'bg-gray-200']">0.75x</button>
                <button @click="setPlaybackRate(1.0)" :class="['text-xs px-2 py-1 rounded', playbackRate === 1.0 ? 'bg-indigo-600 text-white' : 'bg-gray-200']">1.0x</button>
                <button @click="setPlaybackRate(1.25)" :class="['text-xs px-2 py-1 rounded', playbackRate === 1.25 ? 'bg-indigo-600 text-white' : 'bg-gray-200']">1.25x</button>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center">
              <input type="checkbox" id="show-japanese" v-model="showJapanese" class="mr-2">
              <label for="show-japanese" class="text-sm">Show Japanese</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="show-english" v-model="showEnglish" class="mr-2">
              <label for="show-english" class="text-sm">Show English</label>
            </div>
          </div>
          
          <div class="space-y-4">
            <div v-for="(line, index) in currentDialogue.transcript" :key="index" class="p-4 rounded-lg" :class="line.speaker === 'A' ? 'bg-blue-50' : 'bg-green-50'">
              <div class="font-medium mb-1">{{ line.speaker === 'A' ? currentDialogue.speakers[0] : currentDialogue.speakers[1] }}:</div>
              <div v-if="showJapanese" class="japanese-text text-lg mb-1">{{ line.japanese }}</div>
              <div v-if="showEnglish" class="text-gray-600">{{ line.english }}</div>
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
          <div v-for="(question, qIndex) in currentDialogue.questions" :key="qIndex" class="mb-6">
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
            <button v-else @click="nextDialogue" class="btn-primary" :disabled="currentDialogueIndex === dialogues.length - 1">Next Dialogue</button>
            <div v-if="showResults" class="text-lg font-medium">
              Score: {{ score }}/{{ currentDialogue.questions.length }}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Dialogue List -->
    <div class="card">
      <div class="card-header">
        <h3 class="text-lg font-medium">All Dialogues</h3>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(dialogue, index) in dialogues" :key="index" 
               class="p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
               :class="{ 'border-indigo-500': currentDialogueIndex === index }"
               @click="selectDialogue(index)">
            <div class="font-medium">{{ dialogue.title }}</div>
            <div class="text-sm text-gray-500">{{ dialogue.level }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listening',
  data() {
    return {
      currentDialogueIndex: 0,
      isPlaying: false,
      playbackRate: 1.0,
      showJapanese: true,
      showEnglish: false,
      userAnswers: [],
      showResults: false,
      score: 0,
      dialogues: [
        {
          title: "At the Restaurant",
          level: "N5 Beginner",
          audioUrl: "https://example.com/audio/restaurant.mp3", // Replace with actual URL
          image: "https://via.placeholder.com/400x225?text=Restaurant+Scene", // Replace with actual image
          speakers: ["Tanaka", "Waiter"],
          transcript: [
            { 
              speaker: "A", 
              japanese: "すみません。", 
              english: "Excuse me."
            },
            { 
              speaker: "B", 
              japanese: "いらっしゃいませ。", 
              english: "Welcome."
            },
            { 
              speaker: "A", 
              japanese: "メニューをください。", 
              english: "Please give me the menu."
            },
            { 
              speaker: "B", 
              japanese: "はい、どうぞ。", 
              english: "Yes, here you are."
            },
            { 
              speaker: "A", 
              japanese: "ラーメンとお茶をください。", 
              english: "Please give me ramen and tea."
            },
            { 
              speaker: "B", 
              japanese: "かしこまりました。", 
              english: "Certainly."
            }
          ],
          questions: [
            {
              question: "What did Tanaka order?",
              options: ["Sushi and water", "Ramen and tea", "Curry and coffee", "Udon and juice"],
              correctAnswer: 1
            },
            {
              question: "What did Tanaka ask for first?",
              options: ["A table", "The menu", "Water", "The bill"],
              correctAnswer: 1
            },
            {
              question: "How did the waiter respond to the order?",
              options: ["かしこまりました (Certainly)", "ありがとうございます (Thank you)", "ごめんなさい (I'm sorry)", "いいえ (No)"],
              correctAnswer: 0
            }
          ]
        },
        {
          title: "Introducing Yourself",
          level: "N5 Beginner",
          audioUrl: "https://example.com/audio/introduction.mp3", // Replace with actual URL
          image: "https://via.placeholder.com/400x225?text=Introduction+Scene", // Replace with actual image
          speakers: ["Yamada", "Smith"],
          transcript: [
            { 
              speaker: "A", 
              japanese: "はじめまして。山田です。", 
              english: "Nice to meet you. I'm Yamada."
            },
            { 
              speaker: "B", 
              japanese: "はじめまして。スミスです。", 
              english: "Nice to meet you. I'm Smith."
            },
            { 
              speaker: "A", 
              japanese: "アメリカ人ですか？", 
              english: "Are you American?"
            },
            { 
              speaker: "B", 
              japanese: "はい、アメリカ人です。山田さんは日本人ですか？", 
              english: "Yes, I'm American. Are you Japanese, Yamada-san?"
            },
            { 
              speaker: "A", 
              japanese: "はい、日本人です。どうぞよろしく。", 
              english: "Yes, I'm Japanese. Pleased to meet you."
            },
            { 
              speaker: "B", 
              japanese: "こちらこそ、よろしくお願いします。", 
              english: "Likewise, pleased to meet you too."
            }
          ],
          questions: [
            {
              question: "What is Yamada's nationality?",
              options: ["American", "British", "Japanese", "Not mentioned"],
              correctAnswer: 2
            },
            {
              question: "What is Smith's nationality?",
              options: ["American", "British", "Japanese", "Not mentioned"],
              correctAnswer: 0
            },
            {
              question: "What does 'どうぞよろしく' mean in this context?",
              options: ["Goodbye", "Thank you", "Pleased to meet you", "See you later"],
              correctAnswer: 2
            }
          ]
        },
        {
          title: "Shopping for Clothes",
          level: "N5 Beginner",
          audioUrl: "https://example.com/audio/shopping.mp3", // Replace with actual URL
          image: "https://via.placeholder.com/400x225?text=Shopping+Scene", // Replace with actual image
          speakers: ["Customer", "Shop Staff"],
          transcript: [
            { 
              speaker: "A", 
              japanese: "すみません、この青いシャツはいくらですか？", 
              english: "Excuse me, how much is this blue shirt?"
            },
            { 
              speaker: "B", 
              japanese: "それは2000円です。", 
              english: "That is 2000 yen."
            },
            { 
              speaker: "A", 
              japanese: "少し高いですね。もっと安いシャツはありますか？", 
              english: "That's a bit expensive. Do you have any cheaper shirts?"
            },
            { 
              speaker: "B", 
              japanese: "はい、こちらは1500円です。", 
              english: "Yes, this one is 1500 yen."
            },
            { 
              speaker: "A", 
              japanese: "それをください。", 
              english: "I'll take that one."
            },
            { 
              speaker: "B", 
              japanese: "はい、レジはあちらです。", 
              english: "Yes, the cash register is over there."
            }
          ],
          questions: [
            {
              question: "How much was the blue shirt?",
              options: ["1000 yen", "1500 yen", "2000 yen", "2500 yen"],
              correctAnswer: 2
            },
            {
              question: "What did the customer think about the price of the blue shirt?",
              options: ["It was cheap", "It was reasonable", "It was expensive", "No opinion was given"],
              correctAnswer: 2
            },
            {
              question: "How much was the cheaper shirt?",
              options: ["1000 yen", "1500 yen", "2000 yen", "2500 yen"],
              correctAnswer: 1
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentDialogue() {
      return this.dialogues[this.currentDialogueIndex]
    },
    allQuestionsAnswered() {
      return this.userAnswers.length === this.currentDialogue.questions.length && 
             !this.userAnswers.includes(undefined)
    }
  },
  methods: {
    playAudio() {
      // In a real app, this would play the audio file
      this.isPlaying = !this.isPlaying
      
      // Simulate audio playback for demo
      if (this.isPlaying) {
        setTimeout(() => {
          this.isPlaying = false
        }, 10000) // Simulate 10 second audio clip
      }
    },
    setPlaybackRate(rate) {
      this.playbackRate = rate
      // In a real app, this would adjust the audio playback rate
    },
    prevDialogue() {
      if (this.currentDialogueIndex > 0) {
        this.currentDialogueIndex--
        this.resetQuiz()
      }
    },
    nextDialogue() {
      if (this.currentDialogueIndex < this.dialogues.length - 1) {
        this.currentDialogueIndex++
        this.resetQuiz()
      }
    },
    selectDialogue(index) {
      this.currentDialogueIndex = index
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
      
      this.currentDialogue.questions.forEach((question, index) => {
        if (this.userAnswers[index] === question.correctAnswer) {
          this.score++
        }
      })
      
      // Update progress in store
      if (this.score === this.currentDialogue.questions.length) {
        // Perfect score
        this.$store.dispatch('updateListeningProgress', { 
          completed: true, 
          perfect: true 
        })
      } else if (this.score > this.currentDialogue.questions.length / 2) {
        // Passed
        this.$store.dispatch('updateListeningProgress', { 
          completed: true, 
          perfect: false 
        })
      }
    },
    resetQuiz() {
      this.userAnswers = []
      this.showResults = false
      this.score = 0
      this.isPlaying = false
    }
  },
  created() {
    // Initialize empty answers array
    this.userAnswers = Array(this.currentDialogue.questions.length)
  }
}
</script> 