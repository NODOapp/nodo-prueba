<template>
	<div>
    <!--<article v-for="character in characters">
      <h5>Nombre: {{ character.name }}</h5>
      <h5>Casa: {{ character.house }}</h5>
      <h5>Apodo: {{ character.slug }}</h5>
    </article> !-->
    <table>
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
        characters: []
      }
    },

    created () {
      listsAllCharacters()
        .then(res => {
          this.characters = res
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