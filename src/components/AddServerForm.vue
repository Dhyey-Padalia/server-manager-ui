<template>
  <form class="bg-white p-4 rounded shadow-md" @submit.prevent="addServer">
    <div class="mb-4">
      <label class="block text-gray-700">Server Name</label>
      <input
        v-model="name"
        type="text"
        class="w-full p-2 border rounded"
        required
      />
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
      Add Server
    </button>
  </form>
</template>

<script>
export default {
  name: "AddServerForm",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    addServer() {
      this.$emit("add", { id: Date.now(), name: this.name, status: "stopped", usage: "0%" });
      this.name = "";
    },
  },
};
</script>
