<template>
    <div class="pa-5 d-flex flex-wrap justify-space-around">
        <profile :age="20" name="John Smith"></profile>
        <profile :age="35" name="Freya Lopez" image-url="https://picsum.photos/200/150?random=1"></profile>
        <profile :age="42" name="Brett Simpson" image-url="https://picsum.photos/200/150?random=2"></profile>
        <profile :age="26" name="Bonnie Coulson" image-url="https://picsum.photos/200/150?random=3"></profile>
        <profile :age="17" name="Alexandru Lane" image-url="https://picsum.photos/200/150?random=4"></profile>
        <profile :age="33" name="Khloe O'Sullivan" image-url="https://picsum.photos/200/150?random=5"></profile>
    </div>
</template>

<script>
    import Profile from "./Profile";

    export default {
        name: "Props",
        components: {Profile}
    }
</script>

<style scoped>

</style>
