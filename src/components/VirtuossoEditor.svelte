<script lang="ts">
import StaveG from './StaveG.svelte'

const partiture = {
  clefG: true,
  clefF: false,
  tablature: false,
  compasses: [
    {
      ticks: 192,
      notes: []
    },
    {
      ticks: 192,
      notes: []
    },
  ]
}
</script>


<div class="editor">
  {#if partiture.clefG}
  <StaveG compasses={partiture.compasses} />
  {/if}
  
</div>

<style>
  .editor{
    position: relative;
    width: 100%;
    height: 100%;
  }

  
</style>


    