<script lang="ts">
  import { default as config } from '../config/editor'
  import Figure from "./figures/Figure.svelte";

export let bar: any

export let height: number

const barCompleted = () => {
  let ticks = 0
  bar.notes?.forEach((note) => ticks+= note.ticks)
  return ticks
} 

</script>

<div class="bar" style="width: {bar.width}px; height: {height}px;padding: 0 {config.bar.margin}px">
  {#each bar.notes as note, index}
    <Figure {note} nextNote={bar.notes[index+1]} />
  {/each}
</div>

<style lang="scss">
  .bar{
    position: relative;
    border-right: 2px solid #000;
    color: black;
    display: flex;
    justify-content: flex-start;
    &:last-child{
    border-right: none;
  }
  }
  
</style>