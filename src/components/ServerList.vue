<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ServerCard
        v-for="server in servers"
        :key="server.id"
        :server="server"
        @control="handleControl"
      />
    </div>
  </div>
</template>

<script>
import ServerCard from "./ServerCard.vue";

export default {
  name: "ServerList",
  components: { ServerCard },
  data() {
    return {
      servers: [
        { id: 1, name: "Server 1", status: "running", usage: "75%" },
        { id: 2, name: "Server 2", status: "stopped", usage: "0%" },
        { id: 3, name: "Server 3", status: "running", usage: "50%" },
      ],
    };
  },
  methods: {
    handleControl(action, serverId) {
      console.log(`Action: ${action}, Server ID: ${serverId}`);
      // Update server status logic here
    },
  },
};
</script>
