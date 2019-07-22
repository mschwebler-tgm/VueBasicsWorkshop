<template>
    <div class="todo-tasks">
        <h1>Todo App</h1>
        <div>
            <div class="todo-item">
                <input type="checkbox" id="todo-checkbox-1">
                <div>
                    <label for="todo-checkbox-1">
                        Clean room
                        <br>
                    </label>
                    <label for="todo-checkbox-1" class="todo-description">Throw away junk, do the laundry</label>
                </div>
            </div>

            <div class="todo-item">
                <input type="checkbox" id="todo-checkbox-2">
                <div>
                    <label for="todo-checkbox-2">
                        Feed the cat
                        <br>
                    </label>
                    <label for="todo-checkbox-2" class="todo-description">Mr. cat wants food</label>
                </div>
            </div>

            <div class="todo-item">
                <input type="checkbox" id="todo-checkbox-3">
                <div>
                    <label for="todo-checkbox-3">
                        Buy groceries
                        <br>
                    </label>
                    <label for="todo-checkbox-3" class="todo-description">The fridge won't fill itself</label>
                </div>
            </div>

            <div class="todo-item">
                <input type="checkbox" id="todo-checkbox-4">
                <div>
                    <label for="todo-checkbox-4">
                        Get a job
                        <br>
                    </label>
                    <label for="todo-checkbox-4" class="todo-description">I guess all his money, well it isn't enough...</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Todos',
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

    /* TODOs-ITEM */

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
