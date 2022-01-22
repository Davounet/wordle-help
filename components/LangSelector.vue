<template>
  <div>
    <fieldset class="mt-2">
      <legend class="sr-only">Choose a language option</legend>
      <div class="grid grid-cols-3 gap-3 sm:grid-cols-5">
        <label
          v-for="item in langs"
          :key="item.value"
          class="option"
          :class="{ 'option--checked': item.value === lang }"
        >
          <input
            v-model="lang"
            type="radio"
            name="lang"
            :value="item.value"
            class="sr-only"
            :aria-labelledby="`lang-${item.value}-label`"
          />
          <p :id="`lang-${item.value}-label`">{{ item.label }}</p>
        </label>
      </div>
    </fieldset>
    <p class="text-xs mt-1">
      The game for this language is available
      <a :href="current.gameUrl" target="_blank" rel="noopener, noreferrer" class="font-bold hover:underline">here</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'LangSelector',
  props: {
    value: { type: String, required: true }
  },
  data() {
    return {
      langs: [
        { value: 'en', label: 'English', gameUrl: 'https://www.powerlanguage.co.uk/wordle/' },
        { value: 'fr', label: 'Français', gameUrl: 'https://wordle.louan.me/' }
      ],
      lang: 'fr'
    }
  },
  computed: {
    current() {
      return this.langs.find(l => l.value === this.value)
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.lang = value
      }
    },
    lang: {
      handler(lang) {
        this.$emit('input', lang)
      }
    }
  }
}
</script>

<style lang="postcss">
.option {
  @apply border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium cursor-pointer focus:outline-none bg-white border-gray-300 hover:bg-gray-50;
}
.option:active,
.option:focus {
  @apply ring-2 ring-offset-2 ring-primary-500;
}
.option--checked {
  @apply bg-primary-600 border-transparent text-white hover:bg-primary-700;
}
</style>
