<template>
     <h2 class="text-base line-height-3">Task 4: Сделать кнопку, по нажатию на которую будет выводится случайная порода, содержащая подпороды и её подпороды с помощью api, 
        которое предоставляет данный сайт  </h2>
     <div class="row">
        <Button @click="getRandomBreed" class="w-full" label="Click me with a view to get a random breed from the list"/>
     </div>
     <breed-item v-if="breedName !== null" :breedName="breedName" :subBreeds="subBreeds" :renderSubBreeds="true"/>
</template>


<script>

import BreedService from '../services/BreedService.js'
import BreedItem from '../components/breeds/BreedItem.vue';
import Button from 'primevue/button'

export default {
 components:{BreedItem, Button},
    data(){
        return {
            breedsObj:null,
            breedName:null,
            subBreeds:null
        }
    },
    created(){
        this.breedService = new BreedService();
    },
    async mounted(){
        let results = await(this.breedService.getAllBreedsAsync());
        this.breedsObj = results;
    },
    methods:{
        getRandomBreed(){

            let keys = Object.keys(this.breedsObj);
            const index = this.getRandomNumberInRange(0, keys.length);
            
            this.breedName = keys[index];
            this.subBreeds = this.breedsObj[this.breedName];

        },
        getRandomNumberInRange(min, max){
        return Math.floor(Math.random() * (max - min) + min); 
    }
    }
}


</script>

<style scoped>




</style>