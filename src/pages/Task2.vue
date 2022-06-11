<template>
    <h2 class="text-base line-height-3">Task 2: В предыдущем задании сделать так, чтобы после того, как был убран текст из поля
        для ввода строка приобрела исходный вид. Т.е. содержала текст “Привет незнакомец”
    </h2>
    <div class="flex align-items-center justify-content-around">
        <input-text v-model.trim="inputString" />
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
            if(this.inputString !== '')
                return `Привет, ${this.inputString}`
            else
                return 'Привет, незнакомец'
        }
    },
}

</script>