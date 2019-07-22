<template>
    <div class="todo-tasks">
        <h1>Todo App</h1>
        <div>
            <todo-item :item="todoItem" v-for="todoItem in todoItems" :key="todoItem.id"></todo-item>
        </div>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    export default {
        name: 'Todos',
        components: {TodoItem},
        data() {
            return {
                todoItems: [
                    {
                        id: 1,
                        title: 'Clean room',
                        description: 'Throw away junk, do the laundry',
                        completed: false,
                    },
                    {
                        id: 2,
                        title: 'Feed the cat',
                        description: 'Mr. cat wants food',
                        completed: false,
                    },
                    {
                        id: 3,
                        title: 'Buy groceries',
                        description: 'The fridge won\'t fill itself',
                        completed: false,
                    },
                    {
                        id: 4,
                        title: 'Get a job',
                        description: 'I guess all his money, well it isn\'t enough...',
                        completed: false,
                    },
                ],
            }
        }
    }
</script>

<style scoped>
    /* TODOs BOX */
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

</style>
