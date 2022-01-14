<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" />
    </v-layout>
</template>

<script>
import Stock from './Stock'

export default {
    components: { Stock },
    data() {
        return {
            stocks: [
                { id: 1, name: 'TSLA', price: 1040 },
                { id: 2, name: 'AMZN', price: 3222 },
                { id: 3, name: 'GOOG', price: 2800 },
                { id: 4, name: 'IBM', price: 134 },
            ]
        }
    }
}
</script>

<style>
</style>
