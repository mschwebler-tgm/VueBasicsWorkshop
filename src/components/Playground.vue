<template>
    <div>
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
