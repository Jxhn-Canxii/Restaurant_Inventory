<template>
    <div class="flex overflow-hidden bg-gray-200 font-roboto">
        <Navigation />

        <div class="flex flex-1 flex-col overflow-hidden">
            <Header />
            <main class="flex justify-center overflow-y-auto min-h-screen">
                <div class="container m-2 overflow-hidden px-2 py-4">
                    <h3 class="mb-4 text-3xl font-medium text-gray-700">
                        <slot name="header" />
                    </h3>

                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from '@/Layouts/Header.vue';
import Navigation from '@/Layouts/Navigation.vue';
</script>
