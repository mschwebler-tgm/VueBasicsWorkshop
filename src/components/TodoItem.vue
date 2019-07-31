<template>
    <div class="todo-item" :class="{completed: item.completed}">
        <input type="checkbox" :id="`todo-checkbox-${item.id}`" v-model="item.completed">
        <div>
            <label :for="`todo-checkbox-${item.id}`">
                {{ item.title }}
                <br>
            </label>
            <label :for="`todo-checkbox-${item.id}`" class="todo-description">{{ item.description }}</label>
        </div>
        <div class="delete" @click="$emit('delete')">
            <img src="https://image.flaticon.com/icons/png/512/127/127758.png" alt="delete">
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            item: Object,
        }
    }
</script>

<style scoped>
    .todo-item {
        padding: 10px;
        display: flex;
        align-items: center;
        position: relative;
    }

    .todo-item.completed {
        background-color: #eaffeb;
        text-decoration: line-through;
    }

    .todo-item:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.16);
    }

    .todo-item > input[type=checkbox] {
        margin-right: 10px;
    }

    .todo-description {
        color: darkgrey;
    }

    .delete {
        display: none;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
    }

    .todo-item:hover .delete {
        display: flex;
    }

    .delete > img {
        height: 15px;
    }
</style>
