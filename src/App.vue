<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" clipped app :mobile-break-point="670">
            <v-list dense app>
                <v-list-item to="/home">
                    <v-list-item-action>
                        <v-icon>home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item v-for="route in routes" :key="route.path" :to="route.path">
                    <v-list-item-content>
                        <v-list-item-title>{{ route.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar color="primary" app clipped-left dense>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center
                          justify-center>
                    <v-flex text-center>
                        <router-view></router-view>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <v-footer color="accent" app>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import {navDrawerRoutes} from './router';

    export default {
        name: 'App',
        data: () => ({
            drawer: true,
            routes: navDrawerRoutes,
        }),
    };
</script>
