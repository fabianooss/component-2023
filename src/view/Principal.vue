<script setup>
import TituloPrincipal from './../components/TituloPrincipal.vue'
import NoticiasEsportivas from './../components/NoticiasEsportivas.vue';

import { ref } from 'vue'

const titulo = ref('Minha var para o título')

const tamanhoFonte = ref(1)

const noticias = ref(
  [
    { title: 'Tenis', news: 'Campeonato de tenis no Senac', rate: 1 },
    { title: 'Volei', news: 'Campeonato de volei no Senac', rate: 5 },
    { title: 'Basquete', news: 'Campeonato de basquete no Senac', rate: 5 }
  ]
  
)


</script>

<template>
  <div>
      <titulo-principal title="titulo"/>
      <titulo-principal :title="titulo"/>
      <button @click="titulo = titulo.toUpperCase()">Upper</button>
      <div :style="{ fontSize: tamanhoFonte + 'em' }">
        <noticias-esportivas v-for="n in noticias" :key="n.title"
          :title="n.titulo"
          :news="n.news"
          :rate="n.rate"
          @aumentarFonte="tamanhoFonte++"
          @diminuirFonte="tamanhoFonte--"
        >
        </noticias-esportivas>
      </div>  

      
      
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
