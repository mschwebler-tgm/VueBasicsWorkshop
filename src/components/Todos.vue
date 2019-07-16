<template>
    <div class="todo-tasks">
        <h1>Todo App</h1>
        <div>
            <div class="item">Items</div>
            <div class="item">go</div>
            <div class="item">here</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Todos',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo-tasks {
        width: 400px;
        margin: 20px auto;
    }

    .todo-tasks > h1 {
        font-weight: 100;
        text-align: center;
    }

    .todo-tasks > div {
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        padding: 20px;
    }

    .item {
        padding: 10px;
    }

    .item:not(:last-child) {
        border-bottom: 1px solid rgba(0,0,0,0.16);
    }
</style>
