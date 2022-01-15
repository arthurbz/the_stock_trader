<template>
    <div>
        <h1 class="display-3 font-weight-light">
            Trade and Look for your stocks!
        </h1>
        <v-sheet :elevation="6" class="pa-2 primary mt-3">
            <span class="headline white--text font-weight-light">
                You can save and load your data
            </span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 green darken-3 mt-3">
            <span class="headline white--text font-weight-light">
                Click 'Finish Day' to begin a new trading day
            </span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="display-1"><strong>Your balance:</strong> {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>
</style>
