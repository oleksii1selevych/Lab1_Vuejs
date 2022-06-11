<template>
    <h2 class="text-base line-height-3">Task 3: С помощью api, которое предоставляет данный сайт вывести список всех пород.
         Если порода содержит подпроды, то название этой подпороды должно быть выделено красным цветом.  </h2>
    <ul>
        <breed-item v-for="(payload, key) in breedsObj" :key="key" :breedName="key" :subBreeds="payload"/>
    </ul>    
</template>


<script>

import BreedService from '../services/BreedService.js'
import BreedItem from '../components/breeds/BreedItem.vue';

export default {
    components:{BreedItem},
    data(){
        return {
            breedsObj:null
        }
    },
    created(){
        this.breedService = new BreedService();
    },
    async mounted(){
        let results = await(this.breedService.getAllBreedsAsync());
        this.breedsObj = results;
    },
}

</script>

<style scoped>

ul {
    margin: 0;
    padding: 0;
}

</style>


