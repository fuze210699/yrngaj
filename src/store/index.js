import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      streak: 0,
      lastLogin: null,
      settings: {
        uiLanguage: 'en', // 'en' or 'ja'
        dailyGoal: {
          vocabulary: 5,
          grammar: 1,
          listening: 1,
          speaking: 1,
          reading: 1
        }
      }
    },
    progress: {
      vocabulary: {
        total: 800,
        learned: 0,
        mastered: 0
      },
      kanji: {
        total: 100,
        learned: 0,
        mastered: 0
      },
      grammar: {
        total: 50,
        learned: 0,
        mastered: 0
      }
    },
    flashcards: {
      vocabulary: [],
      kanji: [],
      dueToday: []
    }
  },
  getters: {
    vocabularyProgress: state => {
      return Math.round((state.progress.vocabulary.mastered / state.progress.vocabulary.total) * 100)
    },
    kanjiProgress: state => {
      return Math.round((state.progress.kanji.mastered / state.progress.kanji.total) * 100)
    },
    grammarProgress: state => {
      return Math.round((state.progress.grammar.mastered / state.progress.grammar.total) * 100)
    },
    totalProgress: state => {
      const vocabWeight = 0.4
      const kanjiWeight = 0.3
      const grammarWeight = 0.3
      
      return Math.round(
        (state.progress.vocabulary.mastered / state.progress.vocabulary.total) * vocabWeight * 100 +
        (state.progress.kanji.mastered / state.progress.kanji.total) * kanjiWeight * 100 +
        (state.progress.grammar.mastered / state.progress.grammar.total) * grammarWeight * 100
      )
    }
  },
  mutations: {
    updateUserStreak(state, streak) {
      state.user.streak = streak
    },
    updateLastLogin(state, date) {
      state.user.lastLogin = date
    },
    updateUILanguage(state, language) {
      state.user.settings.uiLanguage = language
    },
    updateDailyGoal(state, { category, amount }) {
      state.user.settings.dailyGoal[category] = amount
    },
    updateVocabularyProgress(state, { learned, mastered }) {
      if (learned !== undefined) state.progress.vocabulary.learned = learned
      if (mastered !== undefined) state.progress.vocabulary.mastered = mastered
    },
    updateKanjiProgress(state, { learned, mastered }) {
      if (learned !== undefined) state.progress.kanji.learned = learned
      if (mastered !== undefined) state.progress.kanji.mastered = mastered
    },
    updateGrammarProgress(state, { learned, mastered }) {
      if (learned !== undefined) state.progress.grammar.learned = learned
      if (mastered !== undefined) state.progress.grammar.mastered = mastered
    },
    setFlashcards(state, { type, cards }) {
      state.flashcards[type] = cards
    },
    updateDueToday(state, cards) {
      state.flashcards.dueToday = cards
    }
  },
  actions: {
    loadUserData({ commit }) {
      // In a real app, this would fetch from an API
      // For now, we'll load from localStorage
      try {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData) {
          commit('updateUserStreak', userData.streak || 0)
          commit('updateLastLogin', userData.lastLogin || null)
          if (userData.settings) {
            commit('updateUILanguage', userData.settings.uiLanguage || 'en')
            // Load other settings...
          }
        }
        
        const progressData = JSON.parse(localStorage.getItem('progressData'))
        if (progressData) {
          if (progressData.vocabulary) {
            commit('updateVocabularyProgress', {
              learned: progressData.vocabulary.learned || 0,
              mastered: progressData.vocabulary.mastered || 0
            })
          }
          if (progressData.kanji) {
            commit('updateKanjiProgress', {
              learned: progressData.kanji.learned || 0,
              mastered: progressData.kanji.mastered || 0
            })
          }
          if (progressData.grammar) {
            commit('updateGrammarProgress', {
              learned: progressData.grammar.learned || 0,
              mastered: progressData.grammar.mastered || 0
            })
          }
        }
      } catch (error) {
        console.error('Error loading user data:', error)
      }
    },
    saveUserData({ state }) {
      // Save to localStorage for now
      const userData = {
        streak: state.user.streak,
        lastLogin: state.user.lastLogin,
        settings: state.user.settings
      }
      
      const progressData = {
        vocabulary: {
          learned: state.progress.vocabulary.learned,
          mastered: state.progress.vocabulary.mastered
        },
        kanji: {
          learned: state.progress.kanji.learned,
          mastered: state.progress.kanji.mastered
        },
        grammar: {
          learned: state.progress.grammar.learned,
          mastered: state.progress.grammar.mastered
        }
      }
      
      localStorage.setItem('userData', JSON.stringify(userData))
      localStorage.setItem('progressData', JSON.stringify(progressData))
    },
    updateStreak({ commit, dispatch }, streak) {
      commit('updateUserStreak', streak)
      dispatch('saveUserData')
    },
    checkDailyStreak({ state, dispatch, commit }) {
      const now = new Date()
      const lastLogin = state.user.lastLogin ? new Date(state.user.lastLogin) : null
      
      if (!lastLogin) {
        // First login
        dispatch('updateStreak', 1)
      } else {
        const dayDiff = Math.floor((now - lastLogin) / (1000 * 60 * 60 * 24))
        
        if (dayDiff === 1) {
          // Consecutive day
          dispatch('updateStreak', state.user.streak + 1)
        } else if (dayDiff > 1) {
          // Streak broken
          dispatch('updateStreak', 1)
        }
      }
      
      commit('updateLastLogin', now.toISOString())
      dispatch('saveUserData')
    },
    loadFlashcards({ commit }, type) {
      // In a real app, this would fetch from an API
      // For now, we'll use mock data
      const mockVocabulary = [
        { id: 1, word: '私', reading: 'わたし', meaning: 'I, me', example: '私は学生です。', exampleTranslation: 'I am a student.' },
        { id: 2, word: '学生', reading: 'がくせい', meaning: 'student', example: '彼は学生です。', exampleTranslation: 'He is a student.' },
        { id: 3, word: '先生', reading: 'せんせい', meaning: 'teacher', example: '山田先生は親切です。', exampleTranslation: 'Teacher Yamada is kind.' },
        { id: 4, word: '友達', reading: 'ともだち', meaning: 'friend', example: '彼は私の友達です。', exampleTranslation: 'He is my friend.' },
        { id: 5, word: '日本語', reading: 'にほんご', meaning: 'Japanese language', example: '日本語を勉強しています。', exampleTranslation: 'I am studying Japanese.' }
      ]
      
      const mockKanji = [
        { id: 1, kanji: '日', reading: 'ひ, にち', meaning: 'day, sun', examples: ['日曜日 (にちようび) - Sunday', '日本 (にほん) - Japan'] },
        { id: 2, kanji: '本', reading: 'ほん', meaning: 'book, origin', examples: ['本 (ほん) - book', '日本 (にほん) - Japan'] },
        { id: 3, kanji: '人', reading: 'ひと, じん, にん', meaning: 'person', examples: ['人 (ひと) - person', '日本人 (にほんじん) - Japanese person'] },
        { id: 4, kanji: '大', reading: 'おお, だい, たい', meaning: 'big, large', examples: ['大きい (おおきい) - big', '大学 (だいがく) - university'] },
        { id: 5, kanji: '小', reading: 'ちい, しょう', meaning: 'small', examples: ['小さい (ちいさい) - small', '小学校 (しょうがっこう) - elementary school'] }
      ]
      
      if (type === 'vocabulary') {
        commit('setFlashcards', { type, cards: mockVocabulary })
      } else if (type === 'kanji') {
        commit('setFlashcards', { type, cards: mockKanji })
      }
      
      // Calculate due cards for today
      const dueCards = [...mockVocabulary.slice(0, 3), ...mockKanji.slice(0, 2)]
      commit('updateDueToday', dueCards)
    }
  },
  modules: {
  }
}) 