<template>
    <div class="w-full overflow-y-hidden">
      <div class="h-full">
        <div class="p-5 bg-slate-100 h-full">
          <div class="bg-white p-4 rounded-lg mb-4">
            <!-- Kolom Pencarian -->
            <h1 class="text-xl py-2 px-1 mb-4">Logging Activity</h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div class="my-2 lg:col-span-1">
                <label for="searchActivity" class="block mb-2 text-lg font-bold"
                  >Cari Aktivitas</label
                >
                <input
                  v-model="searchActivity"
                  type="text"
                  class="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari Aktivitas"
                />
              </div>
              <div class="my-2 lg:col-span-1">
                <label for="searchActivity" class="block mb-2 text-lg font-bold"
                  >Cari Waktu</label
                >
                <input
                  v-model="searchTime"
                  type="text"
                  class="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari Waktu"
                />
              </div>
              <div class="my-2 lg:col-span-1">
                <label for="searchActivity" class="block mb-2 text-lg font-bold"
                  >Cari User</label
                >
                <input
                  v-model="searchUser"
                  type="text"
                  class="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari User"
                />
              </div>
              <div class="my-2 lg:col-span-1">
                <label for="searchActivity" class="block mb-2 text-lg font-bold"
                  >Cari Perubahan</label
                >
                <input
                  v-model="searchChanges"
                  type="text"
                  class="w-full px-3 py-2 border rounded-md"
                  placeholder="Cari Perubahan"
                />
              </div>
            </div>
          </div>
          <!-- Tabel Logging -->
          <div class="px-5 py-3 rounded-lg bg-white">
            <table class="w-full" cellspacing="10" cellpadding="5">
              <thead class="w-3/5 font-thin">
                <tr class="border-b-[1px]">
                  <th class="py-2">No</th>
                  <th class="py-2">Aktivitas</th>
                  <th class="py-2">Waktu</th>
                  <th class="py-2">User</th>
                  <th class="py-2">Perubahan</th>
                  <th class="py-2">Status</th>
                  <th class="py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(log, index) in filteredLogs"
                  :key="index"
                  class="border-b-[1px]"
                >
                  <td class="text-center py-2">{{ index + 1 }}</td>
                  <td class="text-center py-2">{{ log.activity }}</td>
                  <td class="text-center py-2">{{ log.time }}</td>
                  <td class="text-center py-2">{{ log.user }}</td>
                  <td class="text-center py-2">{{ log.changes }}</td>
                  <td class="text-center py-2">{{ log.status }}</td>
                  <td class="text-center py-2">
                    <button
                      v-if="log.activity === 'Data updated'"
                      @click="showDetails(log)"
                      class="px-2 py-1 bg-blue-500 text-white rounded"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchActivity: "",
      searchTime: "",
      searchUser: "",
      searchChanges: "",
      logs: [], // Data logs
    };
  },
  computed: {
    // Menggunakan computed property untuk melakukan filtering pada logs berdasarkan pencarian
    filteredLogs() {
      return this.logs.filter((log) => {
        return (
          log.activity
            .toLowerCase()
            .includes(this.searchActivity.toLowerCase()) &&
          log.time.toLowerCase().includes(this.searchTime.toLowerCase()) &&
          log.user.toLowerCase().includes(this.searchUser.toLowerCase()) &&
          log.changes.toLowerCase().includes(this.searchChanges.toLowerCase())
        );
      });
    },
  },
  created() {
    // Generate random activity logs with a random number between 1 and 30
    const randomCount = Math.floor(Math.random() * 30) + 1;
    this.generateRandomLogs(randomCount);
  },

  methods: {
    generateRandomLogs(count) {
      const activities = ["User login", "Data updated", "User logout"];
      const users = [
        "John Doe",
        "Jane Smith",
        "Alice Johnson",
        "Bob Brown",
        "Emily Davis",
      ];
      const changes = [
        "Updated the user data",
        "Modified the product information",
        "Added new content",
      ];

      for (let i = 0; i < count; i++) {
        const randomActivityIndex = Math.floor(
          Math.random() * activities.length
        );
        const randomUserIndex = Math.floor(Math.random() * users.length);
        const randomChangeIndex = Math.floor(Math.random() * changes.length);
        const randomStatus = Math.random() < 0.5 ? "Success" : "Failed";

        const log = {
          activity: activities[randomActivityIndex],
          time: this.generateRandomTime(),
          user: users[randomUserIndex],
          changes: changes[randomChangeIndex],
          status: randomStatus,
        };

        this.logs.push(log);
      }
    },

    generateRandomTime() {
      const start = new Date(2024, 2, 7, 0, 0, 0); // Start date: 2024-03-07
      const end = new Date(); // Current date
      const randomTime = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      return randomTime.toISOString().slice(0, 19).replace("T", " "); // Format: YYYY-MM-DD HH:mm:ss
    },
  },
};
</script>
