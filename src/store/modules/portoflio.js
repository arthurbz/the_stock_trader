export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { id, quantity, price }) {
            const record = state.stocks.find(element => element.id == id)

            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: id,
                    quantity: quantity,
                })
            }
            state.funds -= price * quantity
        },

        sellStock(state, { id, quantity, price }) {
            const record = state.stocks.find(element => element.id == id)

            if (record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += price * quantity
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },

        funds(state) {
            return state.funds
        }
    }
}