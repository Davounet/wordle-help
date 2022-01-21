<template>
  <div>
    <div class="w-full my-4">
      <label class="block text-sm font-medium text-gray-700">Green letters (Use _ for unknown letters)</label>
      <div class="flex mt-1 rounded-md shadow-sm">
        <input v-model="green" type="text" class="form-input font-mono text-3xl" placeholder="P____" maxlength="5" />
      </div>
    </div>
    <div class="w-full my-4">
      <label class="block text-sm font-medium text-gray-700">Yellow letters</label>
      <div class="flex mt-1 rounded-md shadow-sm">
        <input v-model="yellow" type="text" class="form-input font-mono text-xl" placeholder="" />
      </div>
    </div>
    <div class="w-full my-4">
      <label class="block text-sm font-medium text-gray-700">Gray letters</label>
      <div class="flex mt-1 rounded-md shadow-sm">
        <input v-model="gray" type="text" class="form-input font-mono text-xl" placeholder="" />
      </div>
    </div>
    <available-words :green="green" :yellow="yellow" :gray="gray" />
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
