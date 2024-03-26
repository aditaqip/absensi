<template>
  <div class="p-5 bg-slate-100 h-full">
      <div class="bg-white rounded-lg shadow-md p-4">
        <h1 class="text-3xl mb-3">User Access Management</h1>
        <hr class="border-gray-250 mb-6" />

        <!-- Daftar Admin -->
        <div class="mb-4">
          <h2 class="text-xl font-semibold mb-2">Admin Management</h2>
          <ul>
            <!-- Judul Kolom -->
            <li
              class="flex justify-between items-center py-2 border-b font-semibold"
            >
              <div>Nama</div>
              <div class="ml-8">Role</div>
              <div class="ml-2">Username</div>
              <div class="mr-12">Password</div>
              <div class="mr-10"></div>
            </li>
            <!-- Data Admin -->
            <li
              v-for="admin in admins"
              :key="admin.id"
              class="flex justify-between items-center py-2 border-b"
            >
              <div>{{ admin.name }}</div>
              <!-- Kolom Nama -->
              <div>{{ admin.role }}</div>
              <!-- Kolom Role -->
              <div>{{ admin.username }}</div>
              <!-- Kolom Username -->
              <div>
                <!-- Kolom Password -->
                <span v-if="admin.passwordHidden">********</span>
                <span v-else>{{ admin.password }}</span>
                <!-- Tombol untuk menampilkan atau menyembunyikan password -->
                <span
                  @click="togglePasswordVisibility(admin)"
                  class="text-blue-500 cursor-pointer"
                >
                  <span v-if="admin.passwordHidden">👁️</span>
                  <span v-else>🚫</span>
                </span>
              </div>
              <div>
                <!-- Tombol untuk menghapus admin -->
                <button
                  @click="deleteAdmin(admin.id)"
                  class="px-2 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          </ul>
        </div>

        <!-- Form Tambah Admin -->
        <div>
          <h2 class="text-xl font-semibold mb-2 mt-10">Role Management</h2>
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

            <!-- Field untuk Username -->
            <label for="newAdminUsername" class="text-sm font-semibold mb-1"
              >Username</label
            >
            <input
              v-model="newAdminUsername"
              type="text"
              class="w-full px-3 py-2 border rounded-md mb-2"
              placeholder="Username"
            />

            <!-- Field untuk Password -->
            <label for="newAdminPassword" class="text-sm font-semibold mb-1"
              >Password</label
            >
            <div class="relative">
              <input
                v-model="newAdminPassword"
                :type="newAdminPasswordHidden ? 'password' : 'text'"
                class="w-full px-3 py-2 border rounded-md mb-2 pr-10"
                placeholder="Password"
              />
              <!-- Tombol untuk menampilkan atau menyembunyikan password -->
              <button
                @click="toggleNewPasswordVisibility"
                class="absolute inset-y-0 right-0 px-5"
              >
                {{ newAdminPasswordHidden ? "Show" : "Hide" }}
              </button>
            </div>

            <!-- Checkbox untuk Access Level -->
            <div class="mb-4">
              <label class="text-sm font-semibold mb-2">Access Level</label>
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

            <!-- Checkbox untuk Menu Access -->
            <div class="mb-4">
              <label class="text-sm font-semibold mb-2">Menu Access</label>
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
                <label class="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    v-model="newAdminMenuAccess.admin"
                    class="form-checkbox h-6 w-6 text-blue-600 ml-5"
                  />
                  <span class="ml-2 text-lg">Admin</span>
                </label>
              </div>
            </div>

            <!-- Tombol untuk menambahkan admin baru -->
            <button
              type="submit"
              class="px-4 py-2 bg-emerald-500 text-white rounded"
            >
              Tambah
            </button>
          </form>
        </div>
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
          username: "admin1",
          password: "password1",
          passwordHidden: true,
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
          }
        },
        {
          id: 2,
          name: "Admin 2",
          role: "Admin",
          username: "admin2",
          password: "password2",
          passwordHidden: true,
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
          }
        },
        {
          id: 3,
          name: "Admin 3",
          role: "Admin",
          username: "admin3",
          password: "password3",
          passwordHidden: true,
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
        // Admin lainnya ...
      ],
      newAdminName: "",
      newAdminRole: "Admin",
      newAdminUsername: "",
      newAdminPassword: "",
      newAdminPasswordHidden: true, // Untuk menentukan apakah password baru ditampilkan atau disembunyikan
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
    };
  },
  methods: {
    // Method untuk menambahkan admin baru
    addAdmin() {
      if (this.newAdminName && this.newAdminUsername && this.newAdminPassword) {
        const newAdmin = {
          id: this.admins.length + 1,
          name: this.newAdminName,
          role: this.newAdminRole,
          username: this.newAdminUsername,
          password: this.newAdminPassword,
          passwordHidden: this.newAdminPasswordHidden,
          onlyView: this.newAdminOnlyView,
          canEdit: this.newAdminCanEdit,
          canAdd: this.newAdminCanAdd,
          canDelete: this.newAdminCanDelete,
          menuAccess: { ...this.newAdminMenuAccess },
        };
        this.admins.push(newAdmin);
        this.resetNewAdminForm();
      }
    },
    // Method untuk menghapus admin
    deleteAdmin(adminId) {
      this.admins = this.admins.filter((admin) => admin.id !== adminId);
    },
    // Method untuk menampilkan atau menyembunyikan password pada admin yang ada
    togglePasswordVisibility(admin) {
      admin.passwordHidden = !admin.passwordHidden;
    },
    // Method untuk menampilkan atau menyembunyikan password pada form tambah admin
    toggleNewPasswordVisibility() {
      this.newAdminPasswordHidden = !this.newAdminPasswordHidden;
    },
    // Method untuk mereset form tambah admin
    resetNewAdminForm() {
      this.newAdminName = "";
      this.newAdminUsername = "";
      this.newAdminPassword = "";
      this.newAdminPasswordHidden = true;
      this.newAdminRole = "Admin";
      this.newAdminOnlyView = false;
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
    },
    // Metode lainnya seperti menampilkan modal edit, menyembunyikan modal, dsb.
  },
};
</script>

<style>
/* Styling bisa ditambahkan di sini */
</style>
