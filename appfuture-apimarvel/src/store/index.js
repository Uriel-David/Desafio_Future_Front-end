import { createStore } from 'vuex'
import axios from 'axios'
import { public_key } from '../marvel'

export default createStore({
  state: {
    characters: [],
    character: []
  },
  mutations: {
    // Função para recuperar da API todos os personagens até 100 (máximo da API por página)
    getCharacters(state) {
      state.characters = []
      axios.get(`http://gateway.marvel.com/v1/public/characters?limit=100&apikey=${public_key}`)
        .then((result) => {
            result.data.data.results.forEach((item) => {
              state.characters.push(item)
            })
        })
        .catch((error) => {
            console.log(error)
        })
    },

    // Função para recuperar apenas 1 personagem da API
    getCharacter(state, id) {
      state.character = []
      axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?apikey=${public_key}`)
        .then((result) => {
          result.data.data.results.forEach((item) => {
            state.character.push(item)
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  actions: {
    // Exporta as funções para serem usadas globalmente pelo app
    getCharacters: context => {
      context.commit('getCharacters')
    },

    getCharacter(context, id) {
      context.commit('getCharacter', id)
    }
  },
  modules: {

  }
})
