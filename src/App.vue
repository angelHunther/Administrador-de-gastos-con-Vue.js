<script setup>
import Presupuesto from './components/Presupuesto.vue';
</script>

<template>
  <div>
    <header>
        <h1>Planificador de gastos</h1>
        <div class="contenedor-header contenedor sombra">
            <Presupuesto></Presupuesto>
        </div>
        
    </header>
  </div>
</template>

<style>
:root{
    --azul: #3b82f6;
    --blanco: #FFF;
    --gris-claro: #F5F5F5;
    --gris: #94a3b8;
    --gris-oscuro: #64748b;
    --negro: #000;
}
html{
    font-size: 62.5%;
    box-sizing: border-box;
}
*,
*:before,
*:after{
    box-sizing: inherit;
}
body{
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    background-color: var(--gris-claro);
}
h1{
    font-size: 4rem;
}
header{
    background-color: var(--azul);
}
header h1{
    padding: 3rem 0;
    margin: 0;
    color: var(--blanco);
    text-align: center;
}
.contenedor{
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
}
.contenedor-header{
    margin-top: -5rem;
    transform: translateY(5rem);
    padding: 5rem;
}
.sombra{
    box-shadow: 0px 10px 15px -3px rgb(0,0,0, 0.1);
    background-color: var(--blanco);
    border-radius: 1.5rem;
    padding: 5rem;
}
</style>