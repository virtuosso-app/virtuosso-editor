<script lang="ts">
import { onMount } from 'svelte'
import { processPartiture, type Partiture } from '../lib/processPartiture'
import StaveG from './StaveG.svelte'
import Bar from './Bar.svelte'

let editorWidth: number


const partiture: Partiture = {
  clefG: true,
  clefF: false,
  tablature: false,
  bars: [
    {
      ticks: 192,
      notes: [
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false}
      ]
    },
    {
      ticks: 192,
      notes: [
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
        { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false}
      ]
    },
    {
      ticks: 192,
      notes: []
    },
  ]
}

// Ejemplo de uso


let loaded = false
let staves = []
onMount(() => {
  staves = processPartiture(partiture, editorWidth);
  console.log(staves);
  loaded = true
})
</script>

{#if loaded}
<div class="editor" bind:clientWidth={editorWidth}>
  <div class="staves">
    {#each staves as stave}
      <StaveG />
      <div class="bars" style="height: 80px">
        {#each stave.bars as bar}
          <Bar {bar}/>
        {/each}
      </div>
    {/each}
  </div>
  <!-- {#if partiture.clefG}
    <StaveG />
  {/if} -->


  

  
  
</div>
{/if}
<style>
  .editor{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .staves {
    position:relative;
    width: 100%;
  }
  .bars {
    position: absolute;
    top: 0;
    left: 80px;
    width: 100%;
    display: flex;
    align-items:center;
  }
</style>


    