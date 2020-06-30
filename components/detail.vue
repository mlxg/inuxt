<template>
  <div>
    <slot name="a">
      default
    </slot>
    <slot name="b">
      2222
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      dd: 1
    }
  }
}
</script>

<style scoped>

</style>
