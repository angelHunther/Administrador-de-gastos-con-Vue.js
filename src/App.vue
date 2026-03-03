<script setup>
</script>

<template>
  <div>
    <header>
        <h1>Planificador de gastos</h1>
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
</style>