<template>
  <table id="myTable" class="table table-striped table-bordered" style="width:100%">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in tableData" :key="data.ID">
        <td>{{ data.ID }}</td>
        <td>{{ data.Name }}</td>
        <td>{{ data.Email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

const tableData = ref([]);

onMounted(() => {
  // Fetch or generate your data
  $('#myTable').DataTable();
});
</script>
