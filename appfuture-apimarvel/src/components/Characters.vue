<template lang="html">
    <div class="body-template">
        <div class="card-container">
            <div class="card" v-for="character in characters">
                <h3>{{character.name}}</h3>
                <router-link :to="{name: 'character', params: {id: character.id} }">
                    <button type="button" name="button" class="btn-view">Character Details</button>
                </router-link>
            </div>
        </div>
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

export default {
    name: 'Characters',
    data() {
        return {
            urls: '',
            imageSize: 'portrait_medium.jpg'
        }
    },
    mounted() {
        this.$store.dispatch('getCharacters')
    },

    computed: {
        ...mapState({
            characters: state => state.characters
        })
    },
    methods: {

    }
}
</script>

<style lang="css">
    .body-template {
        background-image: url("../assets/background-body-template-site.png");
        background-position: center;
        background-repeat: repeat-y;
    }

    .card-container {
        display: grid;
        justify-content: center;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 10px;
    }

    @media screen and (max-width: 767.98px) {
        .card-container {
            grid-template-columns: minmax(200px, 200px);
        }
    }

    .card {
        text-align: center;
        background-image: url("../assets/background-card-home.png");
        min-height: 200px;
        border-radius: 10px;
    }

    .card h3 {
        color: white;
    }

    .chars-imgs {
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }

    .btn-view {
        padding: 12px;
        margin-top: 30px;
        border-radius: 15px;
        width: 120px;
        background-color: transparent;
        color: white;
        font-size: 15px;
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
