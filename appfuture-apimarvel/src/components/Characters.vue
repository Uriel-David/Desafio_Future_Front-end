<template lang="html">
    <div>
        <div class="card-container">
            <div class="card" v-for="character in characters">
                <h3>{{character.name}}</h3>
                <!--<img :src="urls" alt="" class="chars-imgs"/>-->
                <router-link :to="{name: 'character', params: {id: character.id} }">
                    <button type="button" name="button" class="btn-view">Character Details</button>
                </router-link>
            </div>
        </div>
    </div>
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
    .card-container {
        margin-left: 450px;
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 10px;
    }

    .card {
        text-align: center;
        background-color: #333;
        min-height: 200px;
    }

    .card h3 {
        color: white;
    }

    /*.chars-imgs {
        width: 300px;
        border-radius: 10px;
        height: 300px;
    }*/

    .btn-view {
        padding: 10px;
        margin-top: 50px;
        border-radius: 15px;
        width: 120px;
        background-color: transparent;
        color: white;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
    }
</style>
