<template lang="html">
    <div class="body-template">
        <div class="flex-container">
            <div class="flex1" v-for="char in character">
                <h3>{{char.name}}</h3>
                <div v-if="char.description && char.description.length > 0">
                    <p>
                        {{char.description}}
                    </p>
                </div>
                <div v-else="char.description && char.description.length <= 0">
                    <p>
                        O personagem não possui nenhuma descrição na base de dados da API. Não sabemos ainda se por falha na API ou falta de informções em relação ao personagem em questão.
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
            <spam> / </spam>
            <a href="https://br.freepik.com/fotos-vetores-gratis/fundo">Fundo vetor criado por macrovector - br.freepik.com</a>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import { public_key } from '../marvel'

export default {
    name: 'Character',
    data() {
        return {
            url: '',
            size: 'standard_large.jpg',
        }
    },
    mounted() {
        this.$store.dispatch('getCharacter', this.$route.params.id),
        this.getImageCharacter()
    },
    computed: {
        ...mapState({
            character: state => state.character
        })
    },
    methods: {
        // Função que recupera a imagem do personagem selecionado
        getImageCharacter: function() {
            var characterId = this.$route.params.id
            axios.get(`http://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`)
                .then((result) => {
                result.data.data.results.forEach((item) => {
                    this.url = `${item.thumbnail.path}/${this.size}`
                })
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
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
        width: 30%;
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
