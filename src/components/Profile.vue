<template>
    <div>
        <v-card>
            <v-img :src="imageUrl" width="200" height="150">
                <v-icon v-if="verified" large class="align-end fill-height pa-2">verified_user</v-icon>
            </v-img>
            <v-card-title>{{ name }}</v-card-title>
            <v-card-text>
                {{ age }}
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        props: {
            verified: Boolean,
            name: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
                default: 'http://www.sfu.ca/~cqt/IAT352/a4/img/avatars/test-user.png',
            },
            age: {
                type: Number,
                required: true,
                validator: value => value > 0,
            },
        }
    }
</script>

<style scoped>

</style>
