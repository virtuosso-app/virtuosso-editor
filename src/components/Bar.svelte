<script lang="ts">
export let bar: any

const barCompleted = () => {
  let ticks = 0
  bar.notes?.forEach((note) => ticks+= note.ticks)
  return ticks
} 

</script>

<div class="bar" style="width: {bar.width}px; height: {bar.height}px">
  {bar.ticks} - {bar.width} - {barCompleted()}
</div>

<style>
  .bar{
    position: relative;
    border-right: 2px solid #000;
    /* min-width: 200px; */
    /* width: 200px; */
    color: black;
    /* background: blue; */
  }
</style>