<template>
  <div class="p-3">
    <h5 class="">Committee-Members</h5>
    <div class="pt-1 ps-2 d-flex flex-column">
      <div>
        <span> Internal Committee Members</span>
        <span class="text-danger">*</span>
      </div>
      <div class="d-flex flex-row mt-1">
        <input
          type="text"
          class="border border-black border border-2 rounded w-100 me-3 p-1"
        />
        <button class="addButton4 ps-5 pe-5 btn btn-primary">Add</button>
      </div>

      <div class="mt-5">
        <table class="table ">
          <thead class="table-light">
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th scope="col">Name</th>
              <th scope="col">Administrative dependency</th>
              <th scope="col">Entity</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <!-- <img :src=pic alt="pic" class="rounded-circle" style="width: 2vw;"> -->
          <tbody> 
            
            <tr>
              <th scope="row"><input type="checkbox" /></th>
              <td>Ahmad</td>
              <td>Manager</td>
              <td>Ministry of energy</td>
              <td>ahmad@gmail.com</td>
              <td>078888888</td>
              <td scope="col">
                <img
                  :src="trash"
                  alt="trash"
                  class="border border-3 rounded-circle p-1"
                />
              </td>

              <!-- <div class="d-flex flex-column">
                  <p>Area of expertise , skills and experience</p>
                  <textarea></textarea>
                </div> -->
            </tr>

            <tr>
              <th scope="row"><input type="checkbox" /></th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row"><input type="checkbox" /></th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import trash from "../assets/trash-fill.svg";
import pic from "../assets/pic.jpg";

const openForm=()=>{

}
</script>

<style scoped>
.addButton4 {
  background-color: #b88c33;
}
</style>
