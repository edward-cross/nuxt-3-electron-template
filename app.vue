<template>
  <div>
    <p>Hello World</p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup>
const data = ref([]) 

data.value = await $fetch('/api/test', {
  method: 'post',
  body: {
    directory: '/Users/edward.cross/Pictures/Icons'
  }
}).catch((err) => {
  console.log(err)
})

setTimeout(async () => {
  data.value = await $fetch('/api/test', {
  method: 'post',
  body: {
    directory: '/Users/edward.cross/Pictures/Logos'
  }
}).catch((err) => {
  console.log(err)
})
}, 2000);
</script>
