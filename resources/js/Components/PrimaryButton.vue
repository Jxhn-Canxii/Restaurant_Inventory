<template>
    <button :type="type" class="rounded-md bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600">
        <slot />
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>
