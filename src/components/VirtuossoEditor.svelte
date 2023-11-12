<script lang="ts">
import { onMount } from 'svelte'
import {default as config} from '../config/editor'
import StaveG from './StaveG.svelte'
import Bar from './Bar.svelte'

let editorWidth: number


const partiture = {
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
      notes: []
    },
  ]
}
let parts = {
  staves: 1,
  bars: []
}
const processPartiture = () => {
  console.log('WIDTH', editorWidth)
  let staves = []
  partiture.bars.forEach((bar: any) => {
    bar.width = 0
    if(bar.notes.length === 0) bar.width = config.bar.defaultWidth
    bar.notes.forEach((note: any) => {
      const noteConfig = config.figures[note.figure]
      bar.width += noteConfig.width
    })
  })

  let staveWidth = 0
  partiture.bars.forEach((bar: any) => {
    staveWidth += bar.width
    if(staveWidth >= editorWidth) {
      staveWidth = 0
    }
  })

  console.log('PARTITURE', partiture)
}
let loaded = false
onMount(() => {
  processPartiture()
  loaded = true
})
</script>

{#if loaded}
<div class="editor" bind:clientWidth={editorWidth}>
  {#if partiture.clefG}
    <StaveG />
  {/if}


  <div class="bars" style="height: 100px">
    {#each partiture.bars as bar}
      <Bar {bar}/>
    {/each}
  </div>

  
  
</div>
{/if}
<style>
  .editor{
    position: relative;
    width: 100%;
    height: 100%;
  }

  .bars {
    width: 100%;
    display: flex;
    align-items:center;
  }
</style>


    