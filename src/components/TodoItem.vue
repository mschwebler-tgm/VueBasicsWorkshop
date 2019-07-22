<template>
    <div class="todo-item">
        <input type="checkbox" :id="`todo-checkbox-${item.id}`" v-model="item.checked">
        <div>
            <label :for="`todo-checkbox-${item.id}`">
                {{ item.title }}
                <br>
            </label>
            <label :for="`todo-checkbox-${item.id}`" class="todo-description">{{ item.description }}</label>
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
</style>
