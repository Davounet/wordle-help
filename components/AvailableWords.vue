<template>
  <div>
    <div v-if="state == 'idle'">
      <div class="px-2 mb-3">
        <p v-if="size > 1">
          There are <strong>{{ size }}</strong> words available :
        </p>
        <p v-if="size === 1">There is only <strong>1</strong> match :</p>
        <p v-if="size === 0">There is no match available</p>
      </div>
      <ul class="flex items-start justify-around flex-wrap">
        <li
          v-for="word in filtered.slice(0, 30)"
          :key="word"
          class="text-lg uppercase leading-5 font-bold p-2 font-mono"
        >
          {{ word }}
        </li>
      </ul>
      <p v-if="size > 30" class="px-2 mt-2">and more...</p>
    </div>
    <div v-else class="flex flex-col items-center justify-center w-full">
      <svg
        class="w-20 h-20 text-primary-800 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <p class="text-sm italic mt-6 text-gray-400">Loading words database</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailableWords',
  props: {
    lang: { type: String, required: true },
    green: { type: String, default: '' },
    yellow: { type: String, default: '' },
    gray: { type: String, default: '' }
  },
  data() {
    return {
      state: 'created',
      words: []
    }
  },
  computed: {
    filtered() {
      return this.words.filter(word => {
        const green = Array.from(clean(this.green)).reduce((r, l, i) => r && (l === '_' || word[i] === l), true)
        const yellow = Array.from(clean(this.yellow)).reduce((r, l) => r && word.includes(l), true)
        const gray = Array.from(clean(this.gray)).reduce((r, l) => r && !word.includes(l), true)
        return green && yellow && gray
      })
    },
    size() {
      return this.filtered.length
    }
  },
  watch: {
    lang() {
      this.updateLang()
    }
  },
  mounted() {
    this.updateLang()
  },
  methods: {
    async updateLang() {
      const lang = this.lang
      this.state = 'loading'
      await new Promise(resolve => setTimeout(resolve, 500))
      const { words } = await this.$axios.$get(`words-${lang}.json`)
      this.words = words.map(w => w.toLowerCase())
      this.state = 'idle'
    }
  }
}

function clean(input) {
  return input.trim().toLowerCase()
}
</script>
