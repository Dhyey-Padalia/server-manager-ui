<template>
  <div class="bg-white shadow-md rounded p-4">
    <h3 class="text-lg font-bold">{{ server.name }}</h3>
    <p>Status: <span :class="statusClass">{{ server.status }}</span></p>
    <p>Usage: {{ server.usage }}</p>
    <div class="mt-4 flex justify-between">
      <button
        class="px-4 py-2 bg-green-500 text-white rounded"
        @click="$emit('control', 'start', server.id)"
      >
        Start
      </button>
      <button
        class="px-4 py-2 bg-red-500 text-white rounded"
        @click="$emit('control', 'stop', server.id)"
      >
        Stop
      </button>
      <button
        class="px-4 py-2 bg-yellow-500 text-white rounded"
        @click="$emit('control', 'restart', server.id)"
      >
        Restart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerCard",
  props: {
    server: Object,
  },
  computed: {
    statusClass() {
      return this.server.status === "running"
        ? "text-green-500"
        : "text-red-500";
    },
  },
};
</script>
