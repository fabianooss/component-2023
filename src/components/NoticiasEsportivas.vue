<script setup>
defineProps(['title', 'news', 'rate'])
const emit = defineEmits(['aumentarFonte','diminuirFonte'])


function aumentarFonte() {
   emit('aumentarFonte')
}

function diminuirFonte() {
    emit('diminuirFonte')
}


</script>

<template>

    <div class="noticia" >
        <h4> {{ title }}</h4>

        <p> {{ news }} </p>

        <p> {{  rate }} </p>
        <button @click="aumentarFonte()">+</button>
        <button @click="diminuirFonte()">-</button>
    </div>    


</template>

<style scoped>

.noticia {
    border: 1px solid silver;
    background-color: aqua;
    margin: 10px;
}
</style>