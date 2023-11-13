<script lang="ts">
export let bar: any

export let height: number

const barCompleted = () => {
  let ticks = 0
  bar.notes?.forEach((note) => ticks+= note.ticks)
  return ticks
} 

</script>

<div class="bar" style="width: {bar.width}px; height: {height}px">
  {bar.ticks} - {bar.width}
</div>

<style lang="scss">
  .bar{
    position: relative;
    border-right: 2px solid #000;
    color: black;
    &:last-child{
    border-right: none;
  }
  }
  
</style>