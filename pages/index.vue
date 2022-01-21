<template>
  <div>
    <h1 class="uppercase text-3xl text-center mb-12 font-bold">Wordle helper</h1>
    <div class="px-2 w-full space-y-4 mb-12">
      <div>
        <label class="block text-sm font-medium text-gray-700">Green letters</label>
        <div class="grid grid-cols-5 gap-4">
          <input
            v-for="(v, i) in letters"
            :key="i"
            v-model="letters[i]"
            type="text"
            class="form-input font-mono text-3xl text-center"
            maxlength="1"
          />
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Yellow letters</label>

        <input v-model="yellow" type="text" class="form-input font-mono text-xl" placeholder="" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Gray letters</label>

        <input v-model="gray" type="text" class="form-input font-mono text-xl" placeholder="" />
      </div>
    </div>
    <div>
      <available-words :green="green" :yellow="yellow" :gray="gray" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      letters: ['', '', '', '', ''],
      yellow: '',
      gray: ''
    }
  },
  computed: {
    green() {
      return this.letters.map(l => (l.length ? l : '_')).join('')
    }
  }
}
</script>
