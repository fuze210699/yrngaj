<template>
  <div v-if="lesson" class="lesson-detail-container">
    <!-- Lesson Header -->
    <div class="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-100">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div>
          <div class="flex items-center mb-2">
            <router-link to="/lessons" class="text-indigo-600 hover:text-indigo-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              Trở về danh sách bài học
            </router-link>
          </div>
          <h1 class="text-3xl font-bold">Bài {{ lesson.id }}: {{ lesson.title }}</h1>
        </div>
        <div class="mt-4 md:mt-0 flex space-x-2">
          <button 
            class="btn-secondary"
            @click="prevLesson"
            :disabled="!hasPrevLesson"
            :class="{ 'opacity-50 cursor-not-allowed': !hasPrevLesson }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Bài trước
          </button>
          <button 
            class="btn-secondary"
            @click="nextLesson"
            :disabled="!hasNextLesson"
            :class="{ 'opacity-50 cursor-not-allowed': !hasNextLesson }"
          >
            Bài tiếp
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <p class="text-gray-700 mb-4">{{ lesson.description }}</p>
      
      <!-- Progress bar -->
      <div class="mb-4">
        <div class="flex justify-between mb-1">
          <span class="text-sm font-medium">Tiến độ bài học</span>
          <span class="text-sm font-medium">{{ currentLessonProgress }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div
            class="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
            :style="{ width: `${currentLessonProgress}%` }"
          ></div>
        </div>
      </div>
      
      <!-- Tab navigation -->
      <div class="border-b border-gray-200 mb-6">
        <nav class="-mb-px flex space-x-8">
          <button 
            v-for="tab in tabs" 
            :key="tab.id" 
            @click="activeTab = tab.id"
            class="py-2 px-1 border-b-2 font-medium text-sm"
            :class="activeTab === tab.id 
              ? 'border-indigo-500 text-indigo-600' 
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </div>
    
    <!-- Tab content -->
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <!-- Introduction tab -->
      <div v-if="activeTab === 'introduction'" class="animate-fade-in">
        <div v-for="(section, index) in lesson.introduction" :key="index" class="mb-6">
          <h2 class="text-xl font-semibold mb-3">{{ section.title }}</h2>
          <div v-for="(paragraph, pIndex) in section.content" :key="pIndex" class="mb-4">
            <p class="text-gray-700">{{ paragraph }}</p>
          </div>
          <div v-if="section.examples.length > 0" class="mt-2 space-y-2">
            <div v-for="(example, eIndex) in section.examples" :key="eIndex" class="border-l-4 border-indigo-200 pl-4 py-2">
              <p class="japanese-text text-lg">{{ example.japanese }}</p>
              <p class="text-gray-500 text-sm">{{ example.romaji }}</p>
              <p class="text-gray-700">{{ example.english }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-8">
          <h2 class="text-xl font-semibold mb-3">Mục tiêu bài học</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li v-for="(objective, index) in lesson.objectives" :key="index" class="text-gray-700">
              {{ objective }}
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Vocabulary tab -->
      <div v-if="activeTab === 'vocabulary'" class="animate-fade-in">
        <div class="mb-6 flex justify-between items-center">
          <h2 class="text-xl font-semibold">Từ vựng ({{ lesson.vocabulary.length }})</h2>
          <div class="flex space-x-2">
            <button class="btn-secondary btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Thẻ ghi nhớ
            </button>
            <button class="btn-secondary btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Bảng từ vựng
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(item, index) in lesson.vocabulary" 
            :key="index"
            class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div class="flex justify-between">
              <div>
                <p class="japanese-text text-lg font-bold">{{ item.japanese }}</p>
                <p class="text-gray-500 text-sm">{{ item.romaji }}</p>
              </div>
              <div class="text-right">
                <span class="inline-block px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">{{ item.partOfSpeech }}</span>
              </div>
            </div>
            <p class="text-gray-700 mt-2">{{ item.english }}</p>
            <p v-if="item.notes" class="text-gray-500 text-sm mt-1 italic">{{ item.notes }}</p>
          </div>
        </div>
      </div>
      
      <!-- Grammar tab -->
      <div v-if="activeTab === 'grammar'" class="animate-fade-in">
        <h2 class="text-xl font-semibold mb-6">Ngữ pháp</h2>
        
        <div 
          v-for="(point, index) in lesson.grammar" 
          :key="index"
          class="mb-6 p-6 border border-gray-200 rounded-lg"
        >
          <h3 class="text-lg font-semibold mb-2 japanese-text">{{ point.pattern }}</h3>
          <p class="text-gray-700 mb-4">{{ point.explanation }}</p>
          
          <div v-if="point.examples.length > 0" class="space-y-4 bg-gray-50 p-4 rounded-lg">
            <h4 class="font-medium text-gray-700">Ví dụ:</h4>
            <div 
              v-for="(example, eIndex) in point.examples" 
              :key="eIndex"
              class="border-l-4 border-indigo-200 pl-4 py-2"
            >
              <p class="japanese-text text-lg">{{ example.japanese }}</p>
              <p class="text-gray-500 text-sm">{{ example.romaji }}</p>
              <p class="text-gray-700">{{ example.english }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Dialogues tab -->
      <div v-if="activeTab === 'dialogues'" class="animate-fade-in">
        <h2 class="text-xl font-semibold mb-6">Hội thoại</h2>
        
        <div 
          v-for="(dialogue, index) in lesson.dialogues" 
          :key="index"
          class="mb-8 border border-gray-200 rounded-lg overflow-hidden"
        >
          <div class="bg-indigo-50 p-4 border-b border-gray-200">
            <h3 class="text-lg font-medium">{{ dialogue.title }}</h3>
          </div>
          
          <div class="p-4">
            <div 
              v-for="(exchange, eIndex) in dialogue.exchanges" 
              :key="eIndex"
              class="mb-4"
              :class="eIndex % 2 === 0 ? 'pl-0 pr-12' : 'pl-12 pr-0'"
            >
              <div class="flex items-start space-x-2 mb-1">
                <div :class="eIndex % 2 === 0 ? 'text-indigo-600' : 'text-green-600'" class="font-medium">
                  {{ exchange.speaker }}:
                </div>
              </div>
              <div class="bg-white p-3 rounded-lg shadow-sm">
                <p class="japanese-text text-lg">{{ exchange.japanese }}</p>
                <p class="text-gray-500 text-sm">{{ exchange.romaji }}</p>
                <p class="text-gray-700 border-t border-gray-100 pt-1 mt-1">{{ exchange.english }}</p>
              </div>
            </div>
          </div>
          
          <div v-if="dialogue.notes" class="bg-yellow-50 p-4 border-t border-gray-200">
            <p class="text-gray-700"><span class="font-medium">Ghi chú:</span> {{ dialogue.notes }}</p>
          </div>
        </div>
      </div>
      
      <!-- Exercises tab -->
      <div v-if="activeTab === 'exercises'" class="animate-fade-in">
        <div class="mb-6 flex justify-between items-center">
          <h2 class="text-xl font-semibold">Bài tập ({{ lesson.exercises.length }})</h2>
          <div>
            <button class="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Bắt đầu kiểm tra
            </button>
          </div>
        </div>
        
        <div class="space-y-6">
          <div 
            v-for="(exercise, index) in lesson.exercises" 
            :key="index"
            class="border border-gray-200 rounded-lg p-6"
          >
            <div class="flex items-start">
              <div class="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2">
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-medium mb-2">{{ exercise.question }}</h3>
                
                <!-- Multiple choice exercise -->
                <div v-if="exercise.type === 'multiple-choice'" class="space-y-2 mt-4">
                  <div 
                    v-for="(option, oIndex) in exercise.options" 
                    :key="oIndex"
                    class="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <input 
                      type="radio" 
                      :name="`exercise-${index}`" 
                      :id="`option-${index}-${oIndex}`"
                      :value="option"
                      class="h-4 w-4 text-indigo-600"
                    >
                    <label :for="`option-${index}-${oIndex}`" class="flex-1 cursor-pointer">
                      <span class="japanese-text">{{ option }}</span>
                    </label>
                  </div>
                </div>
                
                <!-- Fill in blank exercise -->
                <div v-else-if="exercise.type === 'fill-in-blank'" class="mt-4">
                  <div class="flex items-center space-x-2">
                    <select class="input py-1 px-2">
                      <option value="">Chọn...</option>
                      <option v-for="(option, oIndex) in exercise.options" :key="oIndex" :value="option">
                        {{ option }}
                      </option>
                    </select>
                  </div>
                </div>
                
                <!-- Matching exercise -->
                <div v-else-if="exercise.type === 'matching'" class="mt-4 grid grid-cols-2 gap-4">
                  <div 
                    v-for="(item, oIndex) in exercise.options" 
                    :key="oIndex"
                    class="flex justify-between items-center p-3 border border-gray-200 rounded-lg"
                  >
                    <div class="japanese-text">{{ item.japanese }}</div>
                    <div class="text-gray-700">{{ item.english }}</div>
                  </div>
                </div>
                
                <!-- Speaking exercise -->
                <div v-else-if="exercise.type === 'speaking'" class="mt-4">
                  <div class="p-4 bg-gray-50 rounded-lg">
                    <p class="text-gray-700">{{ exercise.hint }}</p>
                  </div>
                </div>
                
                <!-- Hint -->
                <div v-if="exercise.hint && exercise.type !== 'speaking'" class="mt-4">
                  <button class="text-indigo-600 text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Xem gợi ý
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Cultural Notes tab -->
      <div v-if="activeTab === 'culturalNotes'" class="animate-fade-in">
        <h2 class="text-xl font-semibold mb-6">Ghi chú văn hóa</h2>
        
        <div 
          v-for="(note, index) in lesson.culturalNotes" 
          :key="index"
          class="mb-6 p-6 bg-indigo-50 rounded-lg"
        >
          <h3 class="text-lg font-medium mb-3">{{ note.title }}</h3>
          <div v-for="(paragraph, pIndex) in note.content" :key="pIndex" class="mb-4">
            <p class="text-gray-700">{{ paragraph }}</p>
          </div>
          <div v-if="note.examples.length > 0" class="mt-2 space-y-2">
            <div v-for="(example, eIndex) in note.examples" :key="eIndex" class="border-l-4 border-indigo-200 pl-4 py-2">
              <p class="japanese-text text-lg">{{ example.japanese }}</p>
              <p class="text-gray-500 text-sm">{{ example.romaji }}</p>
              <p class="text-gray-700">{{ example.english }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Additional Resources -->
    <div v-if="lesson.additionalResources.length > 0" class="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 class="text-xl font-semibold mb-4">Tài liệu tham khảo thêm</h2>
      <ul class="space-y-2">
        <li v-for="(resource, index) in lesson.additionalResources" :key="index">
          <a :href="resource.url" target="_blank" class="text-indigo-600 hover:text-indigo-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {{ resource.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  <div v-else class="py-12 text-center">
    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
    <p class="mt-4 text-gray-600">Đang tải bài học...</p>
  </div>
</template>

<script>
import allLessons from './lessons/index';

export default {
  name: 'LessonDetail',
  data() {
    return {
      activeTab: 'introduction',
      currentLessonProgress: 0,
      tabs: [
        { id: 'introduction', label: 'Giới thiệu' },
        { id: 'vocabulary', label: 'Từ vựng' },
        { id: 'grammar', label: 'Ngữ pháp' },
        { id: 'dialogues', label: 'Hội thoại' },
        { id: 'exercises', label: 'Bài tập' },
        { id: 'culturalNotes', label: 'Ghi chú văn hóa' },
      ]
    };
  },
  computed: {
    lessonId() {
      return parseInt(this.$route.params.id) || 1;
    },
    lesson() {
      return allLessons.find(l => l.id === this.lessonId);
    },
    hasPrevLesson() {
      return allLessons.some(l => l.id === this.lessonId - 1);
    },
    hasNextLesson() {
      return allLessons.some(l => l.id === this.lessonId + 1);
    }
  },
  methods: {
    prevLesson() {
      if (this.hasPrevLesson) {
        this.$router.push(`/lesson/${this.lessonId - 1}`);
      }
    },
    nextLesson() {
      if (this.hasNextLesson) {
        this.$router.push(`/lesson/${this.lessonId + 1}`);
      }
    },
    // This would normally be loaded from user progress data
    trackProgress() {
      // For this demo, we'll just increment the progress to simulate learning
      const interval = setInterval(() => {
        if (this.currentLessonProgress < 100) {
          this.currentLessonProgress += 1;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
  },
  mounted() {
    // Simulate loading the user's lesson progress
    // In a real app, this would come from an API or vuex store
    this.currentLessonProgress = this.lessonId === 1 ? 65 : 0;
    
    // Simulate tracking progress as user spends time on the lesson
    this.trackProgress();
  },
  beforeUnmount() {
    // Clean up any timers, etc.
  },
  watch: {
    lessonId() {
      // Reset progress when lesson changes
      this.currentLessonProgress = this.lessonId === 1 ? 65 : 0;
      this.activeTab = 'introduction';
      
      // Reset progress tracking
      this.trackProgress();
    }
  }
};
</script>

<style scoped>
.lesson-detail-container {
  animation: fadeIn 0.5s ease-in-out;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 