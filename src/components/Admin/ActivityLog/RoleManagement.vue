<template>
  <div class="p-5 bg-gray-100">
    <div class="bg-white rounded-lg shadow-md p-4">
      <h2 class="text-xl font-semibold mb-4">Role Management</h2>
      <form @submit.prevent="addRole">
        <div class="mb-4">
          <label for="roleName" class="text-sm font-semibold mb-1">Role Name:</label>
          <input v-model="newRoleName" type="text" id="roleName" class="w-full px-3 py-2 border rounded-md mb-2" placeholder="Enter role name"/>
          <p v-if="!newRoleName.trim()" class="text-red-500 text-sm">Role name is required.</p>
        </div>
        <div class="mb-4">
          <label class="text-sm font-semibold mb-1">Access Level:</label>
          <div>
            <label class="inline-flex items-center mr-4">
              <input v-model="canEdit" type="checkbox" class="form-checkbox h-6 w-6 text-blue-600"/>
              <span class="ml-2">Can Edit</span>
            </label>
            <label class="inline-flex items-center mr-4">
              <input v-model="canAdd" type="checkbox" class="form-checkbox h-6 w-6 text-blue-600"/>
              <span class="ml-2">Can Add</span>
            </label>
            <label class="inline-flex items-center mr-4">
              <input v-model="canDelete" type="checkbox" class="form-checkbox h-6 w-6 text-blue-600"/>
              <span class="ml-2">Can Delete</span>
            </label>
            <label class="inline-flex items-center mr-4">
              <input v-model="canDownload" type="checkbox" class="form-checkbox h-6 w-6 text-blue-600"/>
              <span class="ml-2">Can Download</span>
            </label>
          </div>
        </div>
        <div class="mb-4">
          <label class="text-sm font-semibold mb-1">Visible Pages:</label>
          <div>
            <label v-for="(page, index) in pages" :key="index" class="inline-flex items-center mr-4">
              <input v-model="selectedPages" :value="page" type="checkbox" class="form-checkbox h-6 w-6 text-blue-600"/>
              <span class="ml-2">{{ page }}</span>
            </label>
          </div>
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Role</button>
      </form>
      <div class="mt-6">
        <h3 class="text-lg font-semibold mb-2">Existing Roles:</h3>
        <ul>
          <li v-for="(role, index) in roles" :key="index" class="border-b py-2">
            <div class="flex justify-between items-center">
              <div>
                <span class="font-semibold">{{ role.name }}</span>
                <p v-if="role.accessLevels.length > 0" class="text-sm text-gray-500">
                  Access Level: {{ role.accessLevels.join(', ') }}
                </p>
                <p v-if="role.visiblePages.length > 0" class="text-sm text-gray-500">Visible Pages: {{ role.visiblePages.join(', ') }}</p>
              </div>
              <button @click="deleteRole(index)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            </div>
          </li>
        </ul>
        <p v-if="roles.length === 0" class="text-gray-500 mt-2">No roles found.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newRoleName: "",
      canEdit: false,
      canAdd: false,
      canDelete: false,
      canDownload: false,
      selectedPages: [],
      roles: [],
      pages: ["Dashboard", "Kelola Data", "Kelola Unit", "Reporting", "Admin"]
    };
  },
  methods: {
    addRole() {
      if (!this.newRoleName.trim()) {
        alert("Role name is required.");
        return;
      }

      const accessLevels = [];
      if (this.canEdit) accessLevels.push("Can Edit");
      if (this.canAdd) accessLevels.push("Can Add");
      if (this.canDelete) accessLevels.push("Can Delete");
      if (this.canDownload) accessLevels.push("Can Download");

      const visiblePages = this.selectedPages.slice();

      const newRole = {
        name: this.newRoleName.trim(),
        accessLevels: accessLevels,
        visiblePages: visiblePages
      };

      this.roles.push(newRole);

      // Emit event untuk memberitahu komponen induk bahwa role baru telah ditambahkan
      this.$emit('role-added', newRole);

      // Reset input fields
      this.newRoleName = "";
      this.canEdit = false;
      this.canAdd = false;
      this.canDelete = false;
      this.canDownload = false;
      this.selectedPages = [];
    },
    deleteRole(index) {
      if (confirm("Are you sure you want to delete this role?")) {
        this.roles.splice(index, 1);
      }
    }
  },
  mounted() {
    // Inisialisasi roles
    this.roles = [
      {
        name: 'Admin',
        accessLevels: ['Can Edit', 'Can Add', 'Can Delete'],
        visiblePages: ['Dashboard', 'Kelola Data', 'Kelola Unit', 'Reporting', 'Admin']
      },
      {
        name: 'User',
        accessLevels: ['Can View'],
        visiblePages: ['Dashboard']
      }
    ];
    // Emit event roles-updated untuk memberitahu komponen induk bahwa roles telah diinisialisasi
    this.$emit('roles-updated', this.roles);
  }
};
</script>
