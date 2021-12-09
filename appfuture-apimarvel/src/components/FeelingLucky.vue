<template lang="html">
    <div>
        <div class="flex-container">
            <div class="flex1" v-for="charRandom in characterRandom">
                <h2>O personagem sortudo da vez é:</h2>
                <h3>{{charRandom.name}}</h3>
                <p>
                    {{charRandom.description}}
                </p>
            </div>

            <div class="flex2">
                <img :src="url" alt="" class="char-img"/>
            </div>
            <router-link to="/">
                <button type="button" name="button" class="btn-back">Back</button>
            </router-link>
        </div>
    </div>
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
    .flex-container {
        margin: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flex1 {
        flex: 50%;
        text-align: right;
    }

    .flex2 {
        flex: 50%;
    }

    .char-img {
        width: 30%;
        border-radius: 10px;
    }

    .btn-back {
        width: 120px;
        padding: 15px;
        border-radius: 25px;
        background-color: transparent;
        font-size: 20px;
        margin-bottom: 100px;
        cursor: pointer;
    }
</style>
