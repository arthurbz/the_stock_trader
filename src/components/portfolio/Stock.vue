<template>
    <v-flex class="pr-3 pb-3 mt-6" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }} 
                    <small>{{ stock.price | currency }} | Quantity: {{ stock.quantity }}</small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field
                    :error="insufficientQuantity || !Number.isInteger(quantity)"
                    label="Quantity"
                    type="number"
                    v-model.number="quantity"
                />
                <v-btn
                    class="blue darken-3 white--text"
                    :disabled="
                        insufficientQuantity
                        || quantity <= 0
                        || !Number.isInteger(quantity)"
                    @click="sellStock"
                >{{ insufficientQuantity ? 'No Stocks' : 'Sell' }}</v-btn>
            </v-container>
        </v-card>    
    </v-flex>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
        sellStock() {
            const order = {
                id: this.stock.id,
                price: this.stock.price,
                quantity: this.quantity,
            }
            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }
}
</script>

<style>
</style>
