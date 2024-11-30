<template>
    <div class="header">
        <NuxtLink to="/">
            Home
        </NuxtLink>
        <NuxtLink to="/game">
            Game
        </NuxtLink>
        <NuxtLink to="/shop">
            Shop
        </NuxtLink>
    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: white;
        font-size: 1.5em;
        font-family: Calibri;
        padding: 5px 10px 5px 10px;
        margin: 5px;
        border-radius: 10px;
        text-align: center;
    }

    a:hover {
        background-color: white;
        color: black;
        transition: 0.3s;
    }

    div.header {
        max-width: 500px;
        background-color: #3b0000;
        text-align: center;
        margin-bottom: 10px;
        border-radius: 50px;
        width: auto;
        /* height: 50px; */
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        
    }
</style>