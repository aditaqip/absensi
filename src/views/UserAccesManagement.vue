<template>
  <div>
    <Main>
      <!-- User Management Component -->
      <UserManagement :roles="roles" />
      <!-- Role Management Component -->
      <RoleManagement @role-added="updateRoles" />
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
  data() {
    return {
      roles: []
    };
  },
  methods: {
    updateRoles(newRoleData) {
      // Memperbarui roles dengan data role baru
      this.roles.push(newRoleData);
    }
  },
  setup() {
    const admins = ref([
      // Inisialisasi data admin
    ]);

    const deleteAdmin = (adminId) => {
      // Logika penghapusan admin
    };

    return {
      admins,
      deleteAdmin,
    };
  },
};
</script>
