<template>
  <div>
    <h1 v-show="isLoading">
      Cargando personajes ...
    </h1>
    <table v-show="!isLoading">
      <tr>
        <th>Nombre</th>
        <th>Casa</th>
        <th>Detalle</th>
      </tr>
      <tr v-for="character in characters">
        <td>{{ character.name }}</td>
        <td>{{ character.house }}</td>
        <td> <button @click="goToDetail(character._id)">Ver detalle</button> </td>
      </tr>
    </table>
  </div>
</template>


<script>
  import { listsAllCharacters } from '../services/got.service.js'

  export default {
    name: 'list-component',

    data () {
      return {
        characters: [],
        isLoading: false
      }
    },

    created () {
      console.log(this.isLoading)
      this.isLoading = true
      listsAllCharacters()
        .then(res => {
          console.log(this.isLoading)
          this.characters = res
          this.isLoading = false
        })
    },

    methods: {
      goToDetail(id) {
        console.log(id)
      }
    }
  }
</script>
<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>