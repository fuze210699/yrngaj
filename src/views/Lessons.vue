<template>
  <div class="lessons-container">
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Bài học tiếng Nhật N5</h1>
      <div class="mt-4 md:mt-0">
        <select v-model="filter" class="input py-1 px-3 w-48">
          <option value="all">Tất cả bài học</option>
          <option value="inProgress">Đang học</option>
          <option value="completed">Đã hoàn thành</option>
          <option value="notStarted">Chưa bắt đầu</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="lesson in filteredLessons" 
        :key="lesson.id" 
        class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
      >
        <div class="p-6 border-b border-gray-100">
          <div class="flex justify-between items-start">
            <h2 class="text-xl font-semibold mb-2">
              Bài {{ lesson.id }}: {{ lesson.title }}
            </h2>
            <span 
              :class="{
                'badge badge-green': getLessonStatus(lesson.id) === 'completed',
                'badge badge-blue': getLessonStatus(lesson.id) === 'inProgress',
                'badge badge-yellow': getLessonStatus(lesson.id) === 'notStarted'
              }"
            >
              {{ getLessonStatusText(getLessonStatus(lesson.id)) }}
            </span>
          </div>
          <p class="text-gray-600 text-sm mb-4">{{ lesson.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="(tag, index) in getLessonTags(lesson)" 
              :key="index" 
              class="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700"
            >
              {{ tag }}
            </span>
          </div>
          <ul class="text-sm text-gray-600 mb-4">
            <li v-for="(objective, index) in lesson.objectives.slice(0, 2)" :key="index" class="flex items-start mb-1">
              <span class="text-indigo-500 mr-2">•</span>
              {{ objective }}
            </li>
            <li v-if="lesson.objectives.length > 2" class="text-sm text-indigo-600">
              + {{ lesson.objectives.length - 2 }} mục tiêu khác
            </li>
          </ul>
        </div>
        <div class="p-4 bg-gray-50 flex justify-between items-center">
          <div>
            <div class="text-sm font-medium">Tiến độ: {{ getLessonProgressPercent(lesson.id) }}%</div>
            <div class="w-24 bg-gray-200 rounded-full h-1.5 mt-1">
              <div
                class="bg-indigo-600 h-1.5 rounded-full"
                :style="{ width: `${getLessonProgressPercent(lesson.id)}%` }"
              ></div>
            </div>
          </div>
          <router-link :to="`/lesson/${lesson.id}`" class="btn-primary btn-sm">
            {{ getLessonButtonText(lesson.id) }}
          </router-link>
        </div>
      </div>
    </div>

    <div v-if="filteredLessons.length === 0" class="text-center py-12 bg-white rounded-lg shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      <p class="text-xl font-medium text-gray-600">Không tìm thấy bài học nào</p>
      <p class="text-gray-500 mt-2">Hãy thử lọc với tiêu chí khác</p>
    </div>
  </div>
</template>

<script>
import allLessons from './lessons/index';

export default {
  name: 'Lessons',
  data() {
    return {
      lessons: allLessons,
      filter: 'all',
      // Mock user progress data - in real app this would come from a store or API
      userProgress: {
        1: { status: 'inProgress', progress: 65 },
        2: { status: 'notStarted', progress: 0 },
      }
    };
  },
  computed: {
    filteredLessons() {
      if (this.filter === 'all') {
        return this.lessons;
      }
      return this.lessons.filter(lesson => 
        this.getLessonStatus(lesson.id) === this.filter
      );
    }
  },
  methods: {
    getLessonStatus(lessonId) {
      const progress = this.userProgress[lessonId];
      return progress ? progress.status : 'notStarted';
    },
    getLessonStatusText(status) {
      switch(status) {
        case 'completed': return 'Đã hoàn thành';
        case 'inProgress': return 'Đang học';
        case 'notStarted': return 'Chưa bắt đầu';
        default: return '';
      }
    },
    getLessonProgressPercent(lessonId) {
      const progress = this.userProgress[lessonId];
      return progress ? progress.progress : 0;
    },
    getLessonButtonText(lessonId) {
      const status = this.getLessonStatus(lessonId);
      switch(status) {
        case 'completed': return 'Ôn tập';
        case 'inProgress': return 'Tiếp tục';
        case 'notStarted': return 'Bắt đầu';
        default: return 'Học';
      }
    },
    getLessonTags(lesson) {
      const tags = [];
      if (lesson.vocabulary && lesson.vocabulary.length > 0) {
        tags.push(`${lesson.vocabulary.length} từ vựng`);
      }
      if (lesson.grammar && lesson.grammar.length > 0) {
        tags.push(`${lesson.grammar.length} ngữ pháp`);
      }
      if (lesson.dialogues && lesson.dialogues.length > 0) {
        tags.push(`${lesson.dialogues.length} hội thoại`);
      }
      return tags;
    }
  }
};
</script>

<style scoped>
.lessons-container {
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