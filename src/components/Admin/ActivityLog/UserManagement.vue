<template>
  <div class="p-5 bg-slate-100">
    <div class="bg-white rounded-lg shadow-md p-4">
      <!-- Tampilkan daftar admin -->
      <h1 class="text-3xl mb-3">User Access Management</h1>
      <hr class="border-gray-250 mb-6" />
      <div class="mb-4">
        <h2 class="text-xl font-semibold mb-2">User Management</h2>
        <ul>
          <!-- Header tabel -->
          <li class="flex justify-between items-center py-2 border-b font-semibold">
            <div class="w-1/5">Nama</div>
            <div class="w-1/5 ml-6">Role</div>
            <div class="w-1/5 ml-6">Username</div>
            <div class="w-1/5 ml-6">Password</div>
            <div class="w-1/5 ml-6">Actions</div>
          </li>
          <!-- Tampilkan admin -->
          <li v-if="admins.length === 0" class="py-2 text-center text-gray-500">
            No Data
          </li>
          <li v-else v-for="admin in admins" :key="admin.id" class="flex justify-between items-center py-2 border-b">
            <div class="w-1/5">{{ admin.name }}</div>
            <div class="w-1/5">{{ admin.role }}</div>
            <div class="w-1/5">{{ admin.username }}</div>
            <div class="w-1/5 flex items-center">
              <template v-if="admin.passwordHidden">
                <span style="margin-left: 2px;">**********</span>
              </template>
              <template v-else>
                <span>{{ admin.password }}</span>
              </template>
              <button @click="togglePasswordVisibility(admin)" class="bg-transparent text-gray-500 hover:text-gray-700 focus:outline-none ml-2">
                {{ admin.passwordHidden ? "👁️" : "🚫" }}
              </button>
            </div>
            <div class="w-1/5 flex">
              <!-- Tombol "Edit" untuk setiap admin -->
              <button @click="openEditPopup(admin.id)" class="px-2 py-2 bg-blue-500 text-white rounded mr-2">
                Edit
              </button>
              <button @click="deleteAdmin(admin.id)" class="px-2 py-2 bg-red-500 text-white rounded">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
      <!-- Popup untuk edit admin -->
      <div v-if="editPopupOpen" class="fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-25 flex justify-center items-center" @click="closeEditPopup">
        <div class="bg-white rounded-lg shadow-md p-6" @click.stop>
          <h2 class="text-2xl font-semibold mb-4">Edit Admin</h2>
          <form @submit.prevent="saveEditedAdmin">
            <div class="mb-4">
              <label for="editAdminName" class="text-sm font-semibold mb-1">Nama Admin</label>
              <input v-model="editedAdminCopy.name" type="text" id="editAdminName" class="w-full px-3 py-2 border rounded-md mb-2" placeholder="Nama Admin" />
              <label for="editAdminRole" class="text-sm font-semibold mb-1">Role</label>
              <select v-model="editedAdminCopy.role" id="editAdminRole" class="w-full px-3 py-2 border rounded-md mb-2">
                <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
              </select>
              <label for="editAdminUsername" class="text-sm font-semibold mb-1">Username</label>
              <input v-model="editedAdminCopy.username" type="text" id="editAdminUsername" class="w-full px-3 py-2 border rounded-md mb-2" placeholder="Username" />
              <label for="editAdminPassword" class="text-sm font-semibold mb-1">Password</label>
              <input v-model="editedAdminCopy.password" type="text" id="editAdminPassword" class="w-full px-3 py-2 border rounded-md mb-2" placeholder="Password" />
            </div>
            <!-- Tombol untuk menyimpan perubahan -->
            <button type="submit" class="px-4 py-2 bg-emerald-500 text-white rounded">Save</button>
            <button @click="cancelEdit" class="px-4 py-2 bg-red-500 text-white rounded ml-2">Cancel</button>
          </form>
        </div>
      </div>
      <!-- Form untuk menambahkan user baru -->
      <h2 class="text-xl font-semibold mb-2 mt-10">Tambah User</h2>
      <form @submit.prevent="addRoleToList">
        <div class="mb-4">
          <label for="newAdminName" class="text-sm font-semibold mb-1">Nama Admin</label>
          <input v-model="newAdminName" type="text" class="w-full px-3 py-2 border rounded-md mb-2" placeholder="Nama Admin" />
          <label for="newAdminRole" class="text-sm font-semibold mb-1">Role</label>
          <!-- Dropdown Role -->
          <select v-model="newAdminRole" id="newAdminRole" class="w-full px-3 py-2 border rounded-md mb-2">
            <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
          </select>
          <!-- Akhir Dropdown Role -->
          <label for="newAdminUsername" class="text-sm font-semibold mb-1">Username</label>
          <input v-model="newAdminUsername" type="text" class="w-full px-3 py-2 border rounded-md mb-2" placeholder="Username" />
          <div class="relative">
            <label for="newAdminUsername" class="text-sm font-semibold mb-1">Password</label>
            <input v-model="newAdminPassword" type="password" class="w-full px-3 py-2 border rounded-md mb-2" placeholder="Password" />
          </div>
        </div>
        <!-- Tombol untuk menambahkan atau mengubah peran -->
        <button type="submit" :disabled="!isValidAdmin" class="px-4 py-2 bg-emerald-500 text-white rounded">Add User</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedAdminCopy: {
        id: null,
        name: "",
        role: "",
        username: "",
        password: "",
      },
      admins: [
        {
          id: 1,
          name: "Admin 1",
          role: "Admin",
          username: "admin1",
          password: "password1",
          passwordHidden: true,
        },
        {
          id: 2,
          name: "Admin 2",
          role: "Admin",
          username: "admin2",
          password: "password2",
          passwordHidden: true,
        },
        {
          id: 3,
          name: "Admin 3",
          role: "Admin",
          username: "admin3",
          password: "password3",
          passwordHidden: true,
        },
      ],
      newAdminName: "",
      newAdminRole: "",
      newAdminUsername: "",
      newAdminPassword: "",
      newAdminPasswordHidden: true,
      editPopupOpen: false,
      editedAdmin: {
        id: null,
        name: "",
        role: "",
        username: "",
        password: "",
        passwordHidden: true,
      },
      roles: ["Admin", "User"], // Daftar role yang tersedia
    };
  },
  methods: {
    // Method untuk menampilkan atau menyembunyikan password baru pada form tambah admin
    toggleNewPasswordVisibility() {
      this.newAdminPasswordHidden = !this.newAdminPasswordHidden;
    },
    // Method untuk menampilkan atau menyembunyikan password admin yang ada
    togglePasswordVisibility(admin) {
      admin.passwordHidden = !admin.passwordHidden;
    },
    // Method untuk menambahkan admin ke daftar admins
    addRoleToList() {
      if (
        this.newAdminName.trim() === "" ||
        this.newAdminRole.trim() === "" ||
        this.newAdminUsername.trim() === "" ||
        this.newAdminPassword.trim() === "" ||
        this.newAdminPassword.length < 6
      ) {
        alert(
          "Please fill in all fields and ensure password is at least 6 characters long."
        );
        return;
      }

      this.admins.push({
        id: this.admins.length + 1,
        name: this.newAdminName,
        role: this.newAdminRole,
        username: this.newAdminUsername,
        password: this.newAdminPassword,
        passwordHidden: this.newAdminPasswordHidden,
      });

      // Reset input fields
      this.newAdminName = "";
      this.newAdminRole = "";
      this.newAdminUsername = "";
      this.newAdminPassword = "";
      this.newAdminPasswordHidden = true;
    },
    // Method untuk menghapus admin dari daftar admins
    deleteAdmin(adminId) {
      if (confirm("Are you sure you want to delete this admin?")) {
        this.admins = this.admins.filter((admin) => admin.id !== adminId);
      }
    },
    // Method untuk membuka popup edit admin
    openEditPopup(adminId) {
      this.editedAdminCopy = Object.assign(
        {},
        this.admins.find((admin) => admin.id === adminId)
      );
      this.editPopupOpen = true;
    },
    // Method untuk menyimpan perubahan admin yang diedit
    saveEditedAdmin() {
      if (
        this.editedAdminCopy.name.trim() === "" ||
        this.editedAdminCopy.role.trim() === "" ||
        this.editedAdminCopy.username.trim() === "" ||
        this.editedAdminCopy.password.trim() === ""
      ) {
        alert("Harap lengkapi semua kolom.");
        return;
      }

      // Perbarui data admin yang asli dengan data yang diedit
      const index = this.admins.findIndex(
        (admin) => admin.id === this.editedAdminCopy.id
      );
      if (index !== -1) {
        this.admins[index] = { ...this.editedAdminCopy };
      }
      // Implementasi logika penyimpanan yang sesuai dengan aplikasi Anda
      this.closeEditPopup();
    },
    // Method untuk menutup popup edit admin
    closeEditPopup() {
      this.editedAdmin = {
        id: null,
        name: "",
        role: "",
        username: "",
        password: "",
        passwordHidden: true,
      };
      this.editPopupOpen = false;
    },
    cancelEdit() {
      // Kembalikan data yang diedit ke nilai semula
      this.editedAdminCopy = {
        id: null,
        name: "",
        role: "",
        username: "",
        password: "",
      };
      this.closeEditPopup();
    },
    // Method untuk memeriksa validitas admin baru
    isValidAdmin() {
      return (
        this.newAdminName.trim() !== "" &&
        this.newAdminRole.trim() !== "" &&
        this.newAdminUsername.trim() !== "" &&
        this.newAdminPassword.trim() !== "" &&
        this.newAdminPassword.length >= 6
      );
    },
  },
};
</script>

<style scoped>
/* Styling tambahan untuk membuat tampilan lebih rapi */
li.border-b:last-child {
  border-bottom: none;
}
</style>
