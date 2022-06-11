<template>
    <h2 class="text-base line-height-3">Task 1: Создать поле для ввода текста и строку с текстом "Привет незнакомец"
        Вместо слова "незнакомец" подставлять то, что будет написано в поле для ввода текста. </h2>
    <div class="flex align-items-center justify-content-around">
        <input-text :value="inputString" @input="inputChanged($event)"/>
        <p class="text-lg">{{ greetingInput }}</p>
    </div>
</template>


<script>
import InputText from 'primevue/inputtext';

export default {
    components: { InputText },
    data() {
        return {
            inputString: 'незнакомец'
        }
    },
    computed: {
        greetingInput() {
            return `Привет, ${this.inputString}`
        }
    },
    methods:{
        inputChanged(event){
            this.inputString = event.target.value;
        }
    }
}

</script>



