<template lang="html">
    <div class="body-template">
        <div class="flex-container">
            <div class="flex1" v-for="charRandom in characterRandom">
                <h2>O personagem sortudo da vez é:</h2>
                <h3>{{charRandom.name}}</h3>
                <div v-if="charRandom.description && charRandom.description.length > 0">
                    <p>
                        {{charRandom.description}}
                    </p>
                </div>
                <div v-else="charRandom.description && charRandom.description.length <= 0">
                    <p>
                        O personagem não possui nenhuma descrição na base de dados da API. Tanto pode ser por falha na API ou falta de informções em relação ao personagem em questão.
                    </p>
                </div>
            </div>

            <div class="flex2">
                <img :src="url" alt="" class="char-img"/>
            </div>
        </div>
        <router-link to="/">
            <button type="button" name="button" class="btn-back">Back to Home</button>
        </router-link>
    </div>
    <footer class="footer">
        <div>
            <a href="https://br.freepik.com/fotos-vetores-gratis/fundo">Fundo vetor criado por freepik - br.freepik.com</a>
            <a href="https://br.freepik.com/fotos-vetores-gratis/fundo">Fundo vetor criado por macrovector - br.freepik.com</a>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import { public_key } from '../marvel'

export default {
    name: 'FeelingLucky',
    data() {
        return {
            characterRandom: [],
            url: '',
            size: 'standard_large.jpg',
            randomId: Math.floor(Math.random() * 100)
        }
    },
    mounted() {
        this.getRandomCharacter()
    },
    computed: {
        ...mapState({
            characters: state => state.characters
        })
    },
    methods: {
        // Função que recupera personagem de forma aleatório
        getRandomCharacter: function() {
            var characterId = this.characters[this.randomId].id
            axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`)
                .then((result) => {
                result.data.data.results.forEach((item) => {
                    this.characterRandom.push(item)
                    this.url = `${item.thumbnail.path}/${this.size}`
                })
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}
</script>

<style lang="css">
    .body-template {
        background-image: url("../assets/background-body-template-site.png");
        background-position: center;
        background-repeat: repeat-y;
    }

    .flex-container {
        margin: 220px 80px 40px 80px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-color: whitesmoke;
        border-radius: 20px;
    }

    .flex1 {
        flex: 50%;
        text-align: right;
    }

    .flex2 {
        margin: 10px;
        flex: 50%;
    }

    .char-img {
        border-radius: 10px;
    }

    .btn-back {
        padding: 12px;
        margin-top: 30px;
        margin-bottom: 10px;
        border-radius: 25px;
        width: 120px;
        background-color: white;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    .footer {
        padding: 2px;
        margin: 0px;
        align-items: center;
    }

    .footer a {
        color: black;
        text-decoration: none;
    }
</style>
