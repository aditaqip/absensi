<template>
      <div class="p-5 bg-slate-100 h-full">
        <div class="container mx-auto px-4 py-8">
          <div class="bg-white rounded-lg shadow-md p-4">
            <h1 class="text-3xl mb-3">User Access Management</h1>
            <hr class="border-gray-250 mb-6">
            <!-- Daftar Admin -->
            <div class="mb-4">
              <h2 class="text-xl font-semibold mb-2">Daftar Admin</h2>
              <ul>
                <li
                  v-for="admin in admins"
                  :key="admin.id"
                  class="flex justify-between items-center py-2 border-b"
                >
                  <div>{{ admin.name }}</div>
                  <div>{{ admin.role }}</div>
                  <div>
                    <button
                      @click="showEditModal(admin)"
                      class="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                      Edit Permission
                    </button>
                    <button
                      @click="deleteAdmin(admin.id)"
                      class="px-4 py-2 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <!-- Form Tambah Admin -->
            <div>
              <h2 class="text-xl font-semibold mb-2">Tambah Admin</h2>
              <form @submit.prevent="addAdmin">
                <label for="newAdminName" class="text-sm font-semibold mb-1"
                  >Nama Admin</label
                >
                <input
                  v-model="newAdminName"
                  type="text"
                  class="w-full px-3 py-2 border rounded-md mb-2"
                  placeholder="Nama Admin"
                />
                <label for="newAdminRole" class="text-sm font-semibold mb-1"
                  >Role</label
                >
                <select
                  v-model="newAdminRole"
                  class="w-full px-3 py-2 border rounded-md mb-2"
                >
                  <option value="Admin">Admin</option>
                  <option value="Viewer">Viewer</option>
                </select>
                <div class="flex flex-wrap mb-4">
                  <!-- Access Level -->
                  <div class="w-full md:w-1/2 mb-4 md:mb-0">
                    <label class="text-sm font-semibold mb-2"
                      >Access Level</label
                    >
                    <div>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminOnlyView"
                          class="form-checkbox h-6 w-6 text-blue-600"
                        />
                        <span class="ml-2 text-lg">Only View</span>
                      </label>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminCanEdit"
                          class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                          :disabled="newAdminOnlyView"
                        />
                        <span class="ml-2 text-lg">Can Edit</span>
                      </label>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminCanAdd"
                          class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                          :disabled="newAdminOnlyView"
                        />
                        <span class="ml-2 text-lg">Can Add</span>
                      </label>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminCanDelete"
                          class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                          :disabled="newAdminOnlyView"
                        />
                        <span class="ml-2 text-lg">Can Delete</span>
                      </label>
                    </div>
                  </div>

                  <!-- Checkbox-menu -->
                  <div class="w-full md:w-1/2">
                    <label class="text-sm font-semibold mb-2"
                      >Menu Access</label
                    >
                    <div>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminMenuAccess.dashboard"
                          class="form-checkbox h-6 w-6 text-blue-600"
                        />
                        <span class="ml-2 text-lg">Dashboard</span>
                      </label>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminMenuAccess.dataManagement"
                          class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                        />
                        <span class="ml-2 text-lg">Kelola Data</span>
                      </label>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminMenuAccess.unitManagement"
                          class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                        />
                        <span class="ml-2 text-lg">Kelola Unit</span>
                      </label>
                      <label class="inline-flex items-center mb-2">
                        <input
                          type="checkbox"
                          v-model="newAdminMenuAccess.reporting"
                          class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                        />
                        <span class="ml-2 text-lg">Reporting</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          v-model="newAdminMenuAccess.admin"
                          class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                        />
                        <span class="ml-2 text-lg">Admin</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="px-4 py-2 bg-green-500 text-white rounded"
                >
                  Tambah
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Pop-up Edit Permission -->
      <div
        v-if="showModal"
        class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      >
        <div class="bg-white p-8 rounded-lg w-96">
          <h2 class="text-xl font-semibold mb-4">Edit Permission</h2>
          <form @submit.prevent="updatePermission">
            <input
              v-model="selectedAdmin.name"
              type="text"
              class="w-full px-3 py-2 border rounded-md mb-2"
              placeholder="Nama Pengguna"
            />
            <select
              v-model="selectedRole"
              class="w-full px-3 py-2 border rounded-md mb-2"
            >
              <option value="Admin">Admin</option>
              <option value="Viewer">Viewer</option>
            </select>
            <div class="flex flex-wrap mb-4">
              <!-- Access Level -->
              <div class="w-full md:w-1/2 mb-4 md:mb-0">
                <label class="text-sm font-semibold mb-2">Access Level</label>
                <div>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <!-- Menggunakan kelas text-lg untuk membuat teks lebih besar -->
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.onlyView"
                      class="mr-2 h-5 w-5"
                      @change="handleEditAccessChange('onlyView')"
                    />
                    <span class="ml-2">Only View</span>
                    <!-- Menggunakan span untuk teks checkbox -->
                  </label>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.canEdit"
                      class="mr-2 h-5 w-5"
                      :disabled="selectedAdmin.onlyView"
                      @change="handleEditAccessChange('canEdit')"
                    />
                    <span class="ml-2">Can Edit</span>
                  </label>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.canAdd"
                      class="mr-2 h-5 w-5"
                      :disabled="selectedAdmin.onlyView"
                      @change="handleEditAccessChange('canAdd')"
                    />
                    <span class="ml-2">Can Add</span>
                  </label>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.canDelete"
                      class="mr-2 h-5 w-5"
                      :disabled="selectedAdmin.onlyView"
                      @change="handleEditAccessChange('canDelete')"
                    />
                    <span class="ml-2">Can Delete</span>
                  </label>
                </div>
              </div>

              <!-- Menu Access -->
              <div class="w-full md:w-1/2">
                <label class="text-sm font-semibold mb-2">Menu Access</label>
                <div>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.menuAccess.dashboard"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="ml-2">Dashboard</span>
                  </label>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.menuAccess.dataManagement"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="ml-2">Kelola Data</span>
                  </label>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.menuAccess.unitManagement"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="ml-2">Kelola Unit</span>
                  </label>
                  <label class="inline-flex items-center mb-2 text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.menuAccess.reporting"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="ml-2">Reporting</span>
                  </label>
                  <label class="inline-flex items-center text-lg">
                    <input
                      type="checkbox"
                      v-model="selectedAdmin.menuAccess.admin"
                      class="mr-2 h-5 w-5"
                    />
                    <span class="ml-2">Admin</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="flex justify-end">
              <!-- Tempatkan tombol di sini jika diperlukan -->
              <button
                @click="hideEditModal"
                class="px-4 py-2 bg-red-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-green-500 text-white rounded ml-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      admins: [
        {
          id: 1,
          name: "Admin 1",
          role: "Admin",
          onlyView: false,
          canEdit: false,
          canAdd: false,
          canDelete: false,
          menuAccess: {
            dashboard: false,
            dataManagement: false,
            unitManagement: false,
            reporting: false,
            admin: false,
          },
        },
        {
          id: 2,
          name: "Admin 2",
          role: "Admin",
          onlyView: false,
          canEdit: true,
          canAdd: true,
          canDelete: true,
          menuAccess: {
            dashboard: true,
            dataManagement: true,
            unitManagement: true,
            reporting: true,
            admin: true,
          },
        },
        {
          id: 3,
          name: "Admin 3",
          role: "Viewer",
          onlyView: true,
          canEdit: false,
          canAdd: false,
          canDelete: false,
          menuAccess: {
            dashboard: false,
            dataManagement: false,
            unitManagement: false,
            reporting: false,
            admin: false,
          },
        },
      ],
      newAdminName: "",
      newAdminRole: "Admin", // Default role
      newAdminOnlyView: false,
      newAdminCanEdit: false,
      newAdminCanAdd: false,
      newAdminCanDelete: false,
      newAdminMenuAccess: {
        dashboard: false,
        dataManagement: false,
        unitManagement: false,
        reporting: false,
        admin: false,
      },
      showModal: false,
      selectedAdmin: {},
      selectedRole: "",
    };
  },
  methods: {
    handleNewAdminAccessChange(accessType) {
      if (accessType === "onlyView" && this.newAdminOnlyView) {
        this.newAdminCanEdit = false;
        this.newAdminCanAdd = false;
        this.newAdminCanDelete = false;
      }
    },
    handleEditAccessChange(accessType) {
      if (accessType === "onlyView" && this.selectedAdmin.onlyView) {
        this.selectedAdmin.canEdit = false;
        this.selectedAdmin.canAdd = false;
        this.selectedAdmin.canDelete = false;
      }
    },
    addAdmin() {
      if (this.newAdminName) {
        const newAdmin = {
          id: this.admins.length + 1,
          name: this.newAdminName,
          role: this.newAdminRole,
          onlyView: this.newAdminOnlyView,
          canEdit: this.newAdminCanEdit,
          canAdd: this.newAdminCanAdd,
          canDelete: this.newAdminCanDelete,
          menuAccess: { ...this.newAdminMenuAccess },
        };
        this.admins.push(newAdmin);
        this.newAdminName = ""; // Reset input field
        this.newAdminRole = "Admin"; // Reset role selection
        this.newAdminOnlyView = false; // Reset access level
        this.newAdminCanEdit = false;
        this.newAdminCanAdd = false;
        this.newAdminCanDelete = false;
        this.newAdminMenuAccess = {
          dashboard: false,
          dataManagement: false,
          unitManagement: false,
          reporting: false,
          admin: false,
        };
      }
    },
    deleteAdmin(adminId) {
      this.admins = this.admins.filter((admin) => admin.id !== adminId);
    },
    showEditModal(admin) {
      this.showModal = true;
      this.selectedAdmin = { ...admin }; // Copy admin object to prevent direct mutation
      this.selectedRole = admin.role;
    },
    hideEditModal() {
      this.showModal = false;
      this.selectedAdmin = {}; // Reset selected admin object
    },
    updatePermission() {
      this.selectedAdmin.role = this.selectedRole;
      this.hideEditModal();
    },
  },
};
</script>

<style>
/* Styling bisa ditambahkan di sini */
</style>
