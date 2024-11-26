<template>
    <div class="header">
        <a href="/">Home</a>
        <a href="/test">Test</a>
    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: black;
        font-size: 1.5em;
        font-family: Calibri;
        border: solid black 2px;
        padding: 5px 10px 5px 10px;
        margin: 5px;
        border-radius: 10px;
    }

    a:hover {
        background-color: black;
        color: white;
        transition: 0.3s;
    }

    div.header {
        background-color: lightseagreen;
        text-align: center;
        margin-bottom: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: auto;
        /* height: 50px; */
        padding: 20px;
    }
</style>