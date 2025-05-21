<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Speaking Practice</h1>
    
    <!-- Shadowing Practice -->
    <div class="card mb-6">
      <div class="card-header flex justify-between items-center">
        <h3 class="text-lg font-medium">Shadowing Practice: {{ currentSentenceIndex + 1 }}/{{ sentences.length }}</h3>
        <div class="flex space-x-2">
          <button @click="prevSentence" class="btn-secondary text-sm" :disabled="currentSentenceIndex === 0">Previous</button>
          <button @click="nextSentence" class="btn-primary text-sm" :disabled="currentSentenceIndex === sentences.length - 1">Next</button>
        </div>
      </div>
      <div class="card-body">
        <div class="mb-8 text-center">
          <div class="japanese-text text-3xl font-bold mb-2">{{ currentSentence.japanese }}</div>
          <div class="text-xl text-gray-600 mb-6">{{ currentSentence.romaji }}</div>
          <div class="text-lg mb-8">{{ currentSentence.english }}</div>
          
          <div class="flex justify-center items-center space-x-4 mb-6">
            <button @click="playOriginalAudio" class="btn-primary flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Listen to Example
            </button>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="mb-4">
              <div v-if="!isRecording && !recordedAudio" class="text-gray-600 mb-2">Click to start recording your voice</div>
              <div v-if="isRecording" class="text-red-600 mb-2">Recording... Click to stop</div>
              <div v-if="recordedAudio" class="text-green-600 mb-2">Recording complete! Click to re-record</div>
            </div>
            
            <button @click="toggleRecording" class="w-16 h-16 rounded-full flex items-center justify-center mb-4" 
                    :class="isRecording ? 'bg-red-600' : 'bg-indigo-600'">
              <svg v-if="!isRecording" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </button>
            
            <div v-if="recordedAudio" class="w-full max-w-md">
              <div class="flex justify-center space-x-4 mb-4">
                <button @click="playRecordedAudio" class="btn-secondary flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Play Your Recording
                </button>
              </div>
              
              <div class="text-center mb-4">
                <div class="text-lg font-medium">How did you do?</div>
                <div class="flex justify-center space-x-2 mt-2">
                  <button @click="rateSelf('poor')" :class="['px-4 py-2 rounded', selfRating === 'poor' ? 'bg-red-600 text-white' : 'bg-gray-200']">Need Practice</button>
                  <button @click="rateSelf('ok')" :class="['px-4 py-2 rounded', selfRating === 'ok' ? 'bg-yellow-600 text-white' : 'bg-gray-200']">Okay</button>
                  <button @click="rateSelf('good')" :class="['px-4 py-2 rounded', selfRating === 'good' ? 'bg-green-600 text-white' : 'bg-gray-200']">Good!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-md">
          <h4 class="font-medium mb-2">Pronunciation Tips:</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li v-for="(tip, index) in currentSentence.tips" :key="index">{{ tip }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Sentence Categories -->
    <div class="card">
      <div class="card-header">
        <h3 class="text-lg font-medium">Practice Categories</h3>
      </div>
      <div class="card-body">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="(category, index) in categories" :key="index" 
               class="p-4 border rounded-md hover:bg-gray-50 cursor-pointer"
               @click="selectCategory(index)">
            <div class="font-medium">{{ category.name }}</div>
            <div class="text-sm text-gray-500">{{ category.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Speaking',
  data() {
    return {
      currentSentenceIndex: 0,
      isRecording: false,
      recordedAudio: null,
      selfRating: null,
      categories: [
        {
          name: "Greetings",
          description: "Basic greetings and introductions"
        },
        {
          name: "Daily Life",
          description: "Common phrases for everyday situations"
        },
        {
          name: "Travel",
          description: "Useful expressions for traveling in Japan"
        },
        {
          name: "Shopping",
          description: "Phrases for shopping and asking about prices"
        },
        {
          name: "Food",
          description: "Ordering food and expressing preferences"
        },
        {
          name: "Emergency",
          description: "Important phrases for emergencies"
        }
      ],
      sentences: [
        {
          japanese: "おはようございます。",
          romaji: "Ohayou gozaimasu.",
          english: "Good morning.",
          audioUrl: "https://example.com/audio/ohayou.mp3", // Replace with actual URL
          tips: [
            "Make sure to pronounce 'ou' in 'ohayou' as a long 'o' sound.",
            "The stress is on the 'o' in 'ohayou' and 'go' in 'gozaimasu'.",
            "Practice the rhythm: o-HA-you go-ZA-i-ma-su"
          ]
        },
        {
          japanese: "はじめまして。",
          romaji: "Hajimemashite.",
          english: "Nice to meet you.",
          audioUrl: "https://example.com/audio/hajimemashite.mp3", // Replace with actual URL
          tips: [
            "Each syllable has equal stress: ha-ji-me-ma-shi-te.",
            "The 'shi' sound is similar to 'she' in English, but shorter.",
            "End with a slight rising intonation to sound friendly."
          ]
        },
        {
          japanese: "ありがとうございます。",
          romaji: "Arigatou gozaimasu.",
          english: "Thank you very much.",
          audioUrl: "https://example.com/audio/arigatou.mp3", // Replace with actual URL
          tips: [
            "The 'r' sound in Japanese is between an English 'r' and 'l'.",
            "Pronounce 'ou' in 'arigatou' as a long 'o' sound.",
            "The rhythm is: a-RI-ga-tou go-ZA-i-ma-su"
          ]
        },
        {
          japanese: "すみません。",
          romaji: "Sumimasen.",
          english: "Excuse me. / I'm sorry.",
          audioUrl: "https://example.com/audio/sumimasen.mp3", // Replace with actual URL
          tips: [
            "The 'u' in 'su' is often nearly silent.",
            "The stress is on the 'ma': su-mi-MA-sen.",
            "This phrase can be used both to get attention and to apologize."
          ]
        },
        {
          japanese: "わかりました。",
          romaji: "Wakarimashita.",
          english: "I understand.",
          audioUrl: "https://example.com/audio/wakarimashita.mp3", // Replace with actual URL
          tips: [
            "The 'r' sound is a light tap of the tongue.",
            "Each syllable has roughly equal length: wa-ka-ri-ma-shi-ta.",
            "The intonation slightly falls at the end."
          ]
        }
      ]
    }
  },
  computed: {
    currentSentence() {
      return this.sentences[this.currentSentenceIndex]
    }
  },
  methods: {
    prevSentence() {
      if (this.currentSentenceIndex > 0) {
        this.currentSentenceIndex--
        this.resetRecording()
      }
    },
    nextSentence() {
      if (this.currentSentenceIndex < this.sentences.length - 1) {
        this.currentSentenceIndex++
        this.resetRecording()
      }
    },
    selectCategory(index) {
      // In a real app, this would load sentences from the selected category
      alert(`Selected category: ${this.categories[index].name}. In a real app, this would load new sentences.`)
    },
    toggleRecording() {
      if (this.isRecording) {
        this.stopRecording()
      } else {
        this.startRecording()
      }
    },
    startRecording() {
      // In a real app, this would use the Web Audio API to record audio
      this.isRecording = true
      this.recordedAudio = null
      this.selfRating = null
      
      // Simulate recording for demo
      setTimeout(() => {
        if (this.isRecording) {
          this.stopRecording()
        }
      }, 5000) // Auto-stop after 5 seconds for demo
    },
    stopRecording() {
      // In a real app, this would stop recording and save the audio
      this.isRecording = false
      this.recordedAudio = "dummy-recording" // Placeholder for actual audio blob
    },
    resetRecording() {
      this.isRecording = false
      this.recordedAudio = null
      this.selfRating = null
    },
    playOriginalAudio() {
      // In a real app, this would play the example audio
      alert("Playing original audio: " + this.currentSentence.audioUrl)
    },
    playRecordedAudio() {
      // In a real app, this would play back the user's recording
      alert("Playing your recording")
    },
    rateSelf(rating) {
      this.selfRating = rating
      
      // Update progress in store
      if (rating === 'good') {
        // Consider it mastered
        this.$store.dispatch('updateSpeakingProgress', { 
          completed: true, 
          mastered: true 
        })
      } else if (rating === 'ok') {
        // Completed but not mastered
        this.$store.dispatch('updateSpeakingProgress', { 
          completed: true, 
          mastered: false 
        })
      }
      
      // Automatically move to next sentence after rating
      setTimeout(() => {
        if (this.currentSentenceIndex < this.sentences.length - 1) {
          this.nextSentence()
        }
      }, 1500)
    }
  }
}
</script> 