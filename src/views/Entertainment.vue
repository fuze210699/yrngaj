<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Entertainment</h1>
    
    <!-- Media Categories -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="card">
        <div class="card-header">
          <h3 class="text-lg font-medium">Anime</h3>
        </div>
        <div class="card-body">
          <p class="text-gray-600 mb-4">Watch anime clips with N5-level vocabulary and grammar. Great for immersion and listening practice.</p>
          <div class="flex space-x-2">
            <button @click="activeTab = 'anime'" class="btn-primary">Browse Clips</button>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <h3 class="text-lg font-medium">Music</h3>
        </div>
        <div class="card-body">
          <p class="text-gray-600 mb-4">Listen to J-pop songs with simple lyrics. Includes karaoke-style subtitles for singing along.</p>
          <div class="flex space-x-2">
            <button @click="activeTab = 'music'" class="btn-primary">Browse Songs</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Tabs -->
    <div class="mb-6">
      <div class="border-b border-gray-200">
        <nav class="flex -mb-px">
          <button @click="activeTab = 'anime'" class="py-4 px-6 border-b-2 font-medium text-sm" 
                  :class="activeTab === 'anime' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'">
            Anime
          </button>
          <button @click="activeTab = 'music'" class="py-4 px-6 border-b-2 font-medium text-sm"
                  :class="activeTab === 'music' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'">
            Music
          </button>
          <button @click="activeTab = 'search'" class="py-4 px-6 border-b-2 font-medium text-sm"
                  :class="activeTab === 'search' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'">
            Search
          </button>
        </nav>
      </div>
    </div>
    
    <!-- Anime Tab -->
    <div v-if="activeTab === 'anime'" class="space-y-6">
      <div class="card" v-for="(clip, index) in animeClips" :key="index">
        <div class="card-body">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-2/5 mb-4 md:mb-0 md:pr-6">
              <div class="bg-gray-200 h-48 rounded flex items-center justify-center">
                <!-- In a real app, this would be an embedded video player -->
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="mt-2 text-gray-600">{{ clip.title }}</p>
                </div>
              </div>
              <div class="mt-2">
                <a :href="clip.videoUrl" target="_blank" class="text-indigo-600 hover:text-indigo-800 text-sm">Watch on YouTube</a>
              </div>
            </div>
            
            <div class="md:w-3/5">
              <h3 class="text-lg font-medium mb-2">{{ clip.title }}</h3>
              <p class="text-gray-600 mb-4">{{ clip.description }}</p>
              
              <div class="mb-4">
                <h4 class="font-medium text-sm text-gray-700 mb-2">Key Vocabulary:</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="(word, wIndex) in clip.vocabulary" :key="wIndex" class="badge-blue">
                    {{ word.japanese }} ({{ word.reading }}) - {{ word.meaning }}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-sm text-gray-700 mb-2">Grammar Points:</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                  <li v-for="(point, pIndex) in clip.grammarPoints" :key="pIndex">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Music Tab -->
    <div v-if="activeTab === 'music'" class="space-y-6">
      <div class="card" v-for="(song, index) in songs" :key="index">
        <div class="card-body">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-2/5 mb-4 md:mb-0 md:pr-6">
              <div class="bg-gray-200 h-48 rounded flex items-center justify-center">
                <!-- In a real app, this would be an embedded audio player -->
                <div class="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <p class="mt-2 text-gray-600">{{ song.title }} - {{ song.artist }}</p>
                </div>
              </div>
              <div class="mt-2">
                <a :href="song.videoUrl" target="_blank" class="text-indigo-600 hover:text-indigo-800 text-sm">Listen on YouTube</a>
              </div>
            </div>
            
            <div class="md:w-3/5">
              <h3 class="text-lg font-medium mb-2">{{ song.title }} - {{ song.artist }}</h3>
              <p class="text-gray-600 mb-4">{{ song.description }}</p>
              
              <div class="mb-4">
                <h4 class="font-medium text-sm text-gray-700 mb-2">Sample Lyrics:</h4>
                <div class="bg-gray-50 p-3 rounded-md">
                  <p class="japanese-text mb-1">{{ song.sampleLyrics.japanese }}</p>
                  <p class="text-gray-600 text-sm">{{ song.sampleLyrics.romaji }}</p>
                  <p class="text-gray-600 text-sm italic">{{ song.sampleLyrics.english }}</p>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-sm text-gray-700 mb-2">Vocabulary Level:</h4>
                <div class="flex items-center">
                  <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-green-600 h-2.5 rounded-full" :style="{ width: `${song.n5VocabPercentage}%` }"></div>
                  </div>
                  <span class="ml-2 text-sm text-gray-600">{{ song.n5VocabPercentage }}% N5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Search Tab -->
    <div v-if="activeTab === 'search'" class="card">
      <div class="card-body">
        <div class="mb-6">
          <label for="search" class="form-label">Search for Japanese Media</label>
          <div class="flex">
            <input type="text" id="search" v-model="searchQuery" placeholder="e.g. 'Studio Ghibli', 'YOASOBI', 'Beginner anime'" class="form-input rounded-r-none" />
            <button @click="performSearch" class="btn-primary rounded-l-none">Search</button>
          </div>
          <p class="text-sm text-gray-500 mt-1">Search for anime, songs, or other Japanese media suitable for N5 learners.</p>
        </div>
        
        <div v-if="searchResults.length > 0" class="space-y-4">
          <h3 class="text-lg font-medium">Search Results</h3>
          <div v-for="(result, index) in searchResults" :key="index" class="border-b pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0">
            <h4 class="font-medium">{{ result.title }}</h4>
            <p class="text-gray-600 text-sm mb-2">{{ result.description }}</p>
            <a :href="result.url" target="_blank" class="text-indigo-600 hover:text-indigo-800 text-sm">View on {{ result.source }}</a>
          </div>
        </div>
        
        <div v-else-if="searchPerformed" class="text-center py-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="mt-2 text-gray-600">No results found. Try a different search term.</p>
        </div>
      </div>
    </div>
    
    <!-- Recommendations -->
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Learning Resources</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card">
          <div class="card-body">
            <h3 class="font-medium mb-2">Language Exchange</h3>
            <p class="text-gray-600 mb-4">Practice speaking with native Japanese speakers.</p>
            <div class="space-y-2">
              <a href="https://www.hellotalk.com" target="_blank" class="block text-indigo-600 hover:text-indigo-800">HelloTalk</a>
              <a href="https://www.tandem.net" target="_blank" class="block text-indigo-600 hover:text-indigo-800">Tandem</a>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="font-medium mb-2">YouTube Channels</h3>
            <p class="text-gray-600 mb-4">Channels with beginner-friendly Japanese content.</p>
            <div class="space-y-2">
              <a href="https://www.youtube.com/c/JapanesePod101" target="_blank" class="block text-indigo-600 hover:text-indigo-800">JapanesePod101</a>
              <a href="https://www.youtube.com/c/ThatJapaneseManYuta" target="_blank" class="block text-indigo-600 hover:text-indigo-800">That Japanese Man Yuta</a>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-body">
            <h3 class="font-medium mb-2">Podcasts</h3>
            <p class="text-gray-600 mb-4">Audio content for listening practice.</p>
            <div class="space-y-2">
              <a href="https://www.nhk.or.jp/lesson/english/" target="_blank" class="block text-indigo-600 hover:text-indigo-800">NHK Easy Japanese</a>
              <a href="https://www.japanesepod101.com" target="_blank" class="block text-indigo-600 hover:text-indigo-800">JapanesePod101</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entertainment',
  data() {
    return {
      activeTab: 'anime',
      searchQuery: '',
      searchPerformed: false,
      searchResults: [],
      animeClips: [
        {
          title: "My Neighbor Totoro - Meeting Scene",
          description: "A simple scene where the characters meet Totoro for the first time. Great for beginners due to the simple dialogue and clear visuals.",
          videoUrl: "https://www.youtube.com/watch?v=92a7Hj0ijLs",
          vocabulary: [
            { japanese: "森", reading: "もり", meaning: "forest" },
            { japanese: "大きい", reading: "おおきい", meaning: "big" },
            { japanese: "見る", reading: "みる", meaning: "to see/look" }
          ],
          grammarPoints: [
            "Simple present tense verbs (見る, 来る)",
            "Basic question formation with か",
            "Simple adjectives (大きい, 小さい)"
          ]
        },
        {
          title: "Doraemon - Magic Pocket",
          description: "Doraemon explains his magic pocket. The dialogue is slow and uses basic vocabulary.",
          videoUrl: "https://www.youtube.com/watch?v=example2",
          vocabulary: [
            { japanese: "ポケット", reading: "ポケット", meaning: "pocket" },
            { japanese: "出す", reading: "だす", meaning: "to take out" },
            { japanese: "道具", reading: "どうぐ", meaning: "tool" }
          ],
          grammarPoints: [
            "Explaining purpose with ために",
            "Potential form of verbs (出せる)",
            "Basic sentence structure with です/ます"
          ]
        }
      ],
      songs: [
        {
          title: "Lemon",
          artist: "Kenshi Yonezu",
          description: "A popular song with relatively simple lyrics that repeat key phrases.",
          videoUrl: "https://www.youtube.com/watch?v=SX_ViT4Ra7k",
          sampleLyrics: {
            japanese: "夢ならばどれほどよかったでしょう",
            romaji: "Yume naraba dore hodo yokatta deshou",
            english: "If this were a dream, how good would it have been"
          },
          n5VocabPercentage: 60
        },
        {
          title: "Paprika",
          artist: "Foorin",
          description: "A children's song with simple vocabulary and clear pronunciation.",
          videoUrl: "https://www.youtube.com/watch?v=s582L3gujnw",
          sampleLyrics: {
            japanese: "パプリカ 花が咲いたら",
            romaji: "Papurika hana ga saitara",
            english: "When the paprika flowers bloom"
          },
          n5VocabPercentage: 85
        }
      ]
    }
  },
  methods: {
    performSearch() {
      // In a real app, this would call an API
      this.searchPerformed = true
      
      // Mock search results
      if (this.searchQuery.toLowerCase().includes('ghibli')) {
        this.searchResults = [
          {
            title: "My Neighbor Totoro",
            description: "Studio Ghibli film with simple dialogue suitable for N5 learners.",
            url: "https://www.youtube.com/watch?v=92a7Hj0ijLs",
            source: "YouTube"
          },
          {
            title: "Kiki's Delivery Service",
            description: "Another Ghibli classic with relatively simple dialogue.",
            url: "https://www.youtube.com/watch?v=example",
            source: "YouTube"
          }
        ]
      } else if (this.searchQuery.toLowerCase().includes('yoasobi')) {
        this.searchResults = [
          {
            title: "Yoru ni Kakeru (Racing Into The Night)",
            description: "Popular song by YOASOBI with lyrics at intermediate level.",
            url: "https://www.youtube.com/watch?v=x8VYWazR5mE",
            source: "YouTube"
          }
        ]
      } else {
        this.searchResults = []
      }
    }
  }
}
</script> 