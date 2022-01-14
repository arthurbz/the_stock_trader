<template>
    <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>STOCK</span>
            <span class="font-weight-light">TRADER</span>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn text to="/">Home</v-btn>
            <v-btn text to="/portfolio">Portfolio</v-btn>
            <v-btn text to="/stocks">Stocks</v-btn>
        </v-toolbar-items>

        <v-spacer />

        <v-toolbar-items>
            <v-btn text>Finish Day</v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs">Save Load</v-btn>
                </template>
                <v-list>
                    <v-list-item @click="1==1">
                        <v-list-item-title>Save Data</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="1==1">
                        <v-list-item-title>Load Data</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>
</style>
