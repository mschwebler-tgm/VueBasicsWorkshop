<template>
    <div id="app">
        <div class="vue-image">
            <img alt="Vue logo" src="./assets/logo.png">
        </div>
        <todos></todos>
    </div>
</template>

<script>
    import Todos from './components/Todos'

    export default {
        name: 'app',
        components: {
            Todos
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }

    .vue-image {
        text-align: center;
    }
</style>
