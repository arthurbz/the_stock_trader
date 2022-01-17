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
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Balance: {{ funds | currency }}
                </span>
            </v-layout>
            <v-btn text @click="endDay">Finish Day</v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-on="on" v-bind="attrs">Save Load</v-btn>
                </template>
                <v-list>
                    <v-list-item @click="saveData">
                        <v-list-item-title>Save Data</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="loadRemoteData">
                        <v-list-item-title>Load Data</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    },
    methods: {
        ...mapActions(['randomizeStocks', 'loadData']),
        endDay() {
            this.randomizeStocks()
        },
        saveData() {
            const { funds, stockPortfolio, stocks } = this.$store.getters
            this.$http.put('data.json', { funds, stockPortfolio, stocks })
        },
        loadRemoteData() {
            this.loadData()
        }
    }
}
</script>

<style>
</style>
