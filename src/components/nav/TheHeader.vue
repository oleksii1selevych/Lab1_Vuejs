<template>
    <div class="navbar">
        <TabMenu :model="tabItems"/>
    </div>
</template>

<script>
import TabMenu from 'primevue/tabmenu';

export default {
    components: { TabMenu },
    data() {
        return {
            tabItems: [
                { label: 'Task 1', to: '/task1' },
                { label: 'Task 2', to: '/task2' },
                { label: 'Task 3', to: '/task3' },
                { label: 'Task 4', to: '/task4' },
                { label: 'Task 5', to: '/task5'}
            ]
        }
    }
}

</script>

<style scoped>

.navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
}

</style>