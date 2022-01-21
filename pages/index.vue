<template>
  <div>
    <h1 class="uppercase text-3xl text-center mb-12 font-bold">Wordle helper</h1>
    <div class="px-2 w-full space-y-4 mb-12">
      <div>
        <label class="block text-sm font-medium text-gray-700">Green letters (Use _ for unknown letters)</label>
        <div class="flex mt-1 rounded-md shadow-sm">
          <input v-model="green" type="text" class="form-input font-mono text-3xl" placeholder="P____" maxlength="5" />
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Yellow letters</label>
        <div class="flex mt-1 rounded-md shadow-sm">
          <input v-model="yellow" type="text" class="form-input font-mono text-xl" placeholder="" />
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Gray letters</label>
        <div class="flex mt-1 rounded-md shadow-sm">
          <input v-model="gray" type="text" class="form-input font-mono text-xl" placeholder="" />
        </div>
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
      green: '_____',
      yellow: '',
      gray: ''
    }
  }
}
</script>
