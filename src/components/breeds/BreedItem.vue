<template>
    <li>
        <h3 :class="badgeClass"> {{ breedName }} </h3>
        <div v-if="subBreeds.length > 0 && renderSubBreeds" class="flex flex-row justify-content-around flex-wrap">
             <breed-item v-for="breed in subBreeds" :key="breed" :breedName="breed"/>
        </div>
    </li>
</template>


<script>

export default {
    props:{
        breedName:{
            type:String,
            required:true
        }, 
        subBreeds:{
            type:Array,
            required:false,
            default:[]
        },
        renderSubBreeds:{
            type:Boolean,
            required:false,
            default:false
        },
    },
    computed:{
        badgeClass(){
            return {
                'hasSubBreeds':this.subBreeds.length > 0,
            }
        }
    }
}

</script>

<style scoped>

li {
    list-style: none;
    padding: 0;
    margin: 0;
}

h3 {
    color:white;
    border: 1px solid transparent;
    display: inline-block;
    border-radius: 12px;
    padding: 0.1rem 0.7rem;
    background-color: grey;
}

.hasSubBreeds {
    background-color: red;
}

</style>