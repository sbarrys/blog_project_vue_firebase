<template>
    <div>
        <h2 v-for="i in 70" :key="i">
            hello everyone
        </h2>
    </div>
</template>
<script>
export default {
  props: ['items'],
  data: function () {
    return {
      sixty: 60
    }
  }
}
</script>
