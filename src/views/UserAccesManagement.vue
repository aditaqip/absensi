<template>
  <div>
    <Main>
      <!-- User Management Component -->
      <UserManagement :roles="roles.roleOptions" :admins="admins" :delete-admin="deleteAdmin" />
      <!-- Role Management Component -->
      <RoleManagement :roles="roles.roleOptions" @role-added="addRoleToUserManagement" />
    </Main>
  </div>
</template>

<script>
import { ref } from "vue";
import Main from './../components/Admin/Main.vue';
import UserManagement from "./../components/Admin/ActivityLog/UserManagement.vue";
import RoleManagement from "./../components/Admin/ActivityLog/RoleManagement.vue";

export default {
  components: {
    Main,
    UserManagement,
    RoleManagement,
  },
  setup() {
    const roles = ref({
      roleOptions: ["Admin", "User"], // Inisialisasi dengan nilai awal
    });

    const admins = ref([
      // Tambahkan data admin di sini
    ]);

    const deleteAdmin = (adminId) => {
      // Logika penghapusan admin
    };

    const addRoleToUserManagement = (newRole) => {
      roles.value.roleOptions.push(newRole.name);
    };

    return {
      roles,
      admins,
      deleteAdmin,
      addRoleToUserManagement,
    };
  },
};
</script>
