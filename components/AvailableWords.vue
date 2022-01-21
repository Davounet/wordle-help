<template>
  <div>
    <p class="px-2 mb-3">
      There are <strong>{{ size }}</strong> words available :
    </p>
    <ul class="flex items-start justify-around flex-wrap">
      <li v-for="word in filtered.slice(0, 30)" :key="word" class="text-lg uppercase leading-5 font-bold p-2 font-mono">
        {{ word }}
      </li>
    </ul>
    <p v-if="size > 30" class="px-2 mt-2">and more...</p>
  </div>
</template>

<script>
import { words } from '~/words.json'

export default {
  name: 'AvailableWords',
  props: {
    green: { type: String, default: '' },
    yellow: { type: String, default: '' },
    gray: { type: String, default: '' }
  },
  computed: {
    filtered() {
      return words.filter(word => {
        const green = Array.from(clean(this.green)).reduce((r, l, i) => r && (l === '_' || word[i] === l), true)
        const yellow = Array.from(clean(this.yellow)).reduce((r, l) => r && word.includes(l), true)
        const gray = Array.from(clean(this.gray)).reduce((r, l) => r && !word.includes(l), true)
        return green && yellow && gray
      })
    },
    size() {
      return this.filtered.length
    }
  }
}

function clean(input) {
  return input.trim().toLowerCase()
}
</script>
