<script setup>
import { ref, onMounted  } from 'vue'
import axios from 'axios'

const carros = ref([])

onMounted(() => {
  axios.get('http://localhost:8080/carro')
    .then(response => {
        carros.value = response.data
    })
})



</script>

<template>
    <h4>Carros</h4>
    <table>
       <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Placa</td>
            <td>Cor</td>
            <td>Modelo</td>
            <td>Proprietario</td>
       </tr> 
       <tr v-for="c in carros" :key="c.id">
            <td>{{ c.id }}</td>
            <td>{{ c.nome }}</td>
            <td>{{ c.placa }}</td>
            <td>{{ c.cor }}</td>
            <td>{{ c.modelo }}</td>
            <td>{{ c.proprietario == null 
                   ? ''
                   : c.proprietario.nome 
                }}
            </td>
       </tr>
    </table>

</template>

<style scoped>

</style>