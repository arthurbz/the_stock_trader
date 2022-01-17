<template>
    <v-layout row wrap>
        <v-layout v-if="haveStocks" row wrap>
                <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
        </v-layout>

        <v-layout v-else>
            <h1 class="display-3 font-weight-light mt-6">
                You don't have any stocks at the moment!
            </h1>   
        </v-layout>
    </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock'

export default {
    components: { Stock },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        }),
        haveStocks() {
            return this.stocks.length
        }
    }
}
</script>

<style>
</style>
