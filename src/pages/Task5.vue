<template>
    <h2 class="text-base line-height-3">Task 5: Сделать 3 кнопки и список. По нажатию на первую кнопку в список
        добавляется случайная порода собаки.
        По нажатию на вторую кнопку из списка удаляется случайная порода собаки. По нажатию на третью кнопку список
        перемешивается.</h2>
    <div class="grid">
        <div class="col-4">
            <Button @click="addBreed" class="p-button-success w-full" label="Add random breed" />
        </div>
        <div class="col-4">
            <Button @click="removeBreed" class="p-button-danger w-full" label="Delete random breed" />
        </div>
        <div class="col-4">
            <Button @click="shuffleBreeds" class="p-button-primary w-full" label="Shuffle list" />
        </div>
    </div>
    <ul>
        <breed-item v-for="breed in breedList" :key="breed.id" :breedName="breed.name"/>
    </ul>

</template>


<script>

import Button from "primevue/button";
import BreedService from '../services/BreedService.js'
import BreedItem from '../components/breeds/BreedItem.vue';

export default {
    components: { Button, BreedItem },
    data() {
        return {
            breedsObj: null,
            breedList: []
        }
    },
    created() {
        this.breedService = new BreedService();
    },
    async mounted() {
        let results = await (this.breedService.getAllBreedsAsync());
        this.breedsObj = results;
    },
    methods: {
        getRandomNumberInRange(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        addBreed(){
            let keys = Object.keys(this.breedsObj);
            const index = this.getRandomNumberInRange(0, keys.length);
            this.breedList.push({id:new Date().toISOString(), name:keys[index]});
        },
        removeBreed(){
            const index = this.getRandomNumberInRange(0, this.breedList.length);
            this.breedList.splice(index, 1);
        },
        shuffleBreeds(){
            for(let i = this.breedList.length - 1; i > 0; i--){
                let index = Math.floor(Math.random() * (i + 1));

                let tmp = this.breedList[index];
                this.breedList[index] = this.breedList[i];
                this.breedList[i] = tmp;
            }
        }
    }
}

</script>


<style scoped>
ul {
    margin: 0;
    padding: 0;
}
</style>