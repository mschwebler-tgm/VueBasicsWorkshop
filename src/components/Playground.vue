<template>
    <div class="d-flex justify-space-around flex-wrap flex-row">
        <profile :age="20" name="John Smith" verified></profile>
    </div>
</template>

<script>
    import Profile from "./Profile";

    export default {
        name: "Playground",
        components: {Profile}
    }
</script>

<style scoped>

</style>
