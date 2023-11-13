<script lang="ts">
import { onMount } from 'svelte'
import { default as config} from '../config/editor'
import { processPartiture, type Partiture } from '../lib/processPartiture'
import StaveG from './StaveG.svelte'
import StaveF from './StaveF.svelte'
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
        { note: 'C4', figure: '8', dotted: false, triplets: false, triplests_dotted: false},
        { note: 'C4', figure: '8', dotted: false, triplets: false, triplests_dotted: false},
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
  ],
  barsF: [
    // {
    //   ticks: 192,
    //   notes: [
    //     { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
    //     { note: 'C4', figure: '8', dotted: false, triplets: false, triplests_dotted: false},
    //     { note: 'C4', figure: '8', dotted: false, triplets: false, triplests_dotted: false},
    //     { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false},
    //     { note: 'C4', figure: 'q', dotted: false, triplets: false, triplests_dotted: false}
    //   ]
    // },
  ]
}


let loaded = false
let staves: any = {
  stavesG: [],
  stavesF: []
}

const process = () => {
  staves = processPartiture(partiture, editorWidth-140); // TODO: Calcular el with del editor - padding - headers de armadura etc
  console.log(staves);
}
onMount(() => {
  process()
  loaded = true
})
</script>

<svelte:window 
  on:resize={process}
  />

<div class="editor" bind:clientWidth={editorWidth}>
  {#if loaded}
    {#each staves.stavesG as stave, idx}
      <div class="stave">
        <StaveG />
        <div class="bars" style="height: {config.staves.height + config.staves.marginTopDown*2}px">
          {#each stave.bars as bar}
            <Bar {bar} height={config.staves.height}/>
          {/each}
        </div>
        {#if idx === staves.stavesG.length-1}
          <div class="stave-end" style="height: {config.staves.height + config.staves.marginTopDown*2}px">
            <div style="height: {config.staves.height}px">
              <span></span>
            </div>
          </div>
        {/if}
        
      </div>
    {/each}

    {#each staves.stavesF as stave}
      <div class="stave">
        <StaveF />
        <div class="bars" style="height: {config.staves.height + config.staves.marginTopDown*2}px">
          {#each stave.bars as bar}
            <Bar {bar} height={config.staves.height}/>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</div>
<style lang="scss">
  .editor{
    position: relative;
    width: 100%;
    height: auto;
    min-height: 90vh;
    background-color: #fff;
    margin: 20px;
    padding: 20px;
    border-radius: 2px;
  }
  .stave {
    position:relative;
    width: 100%;
  }
  .stave-end{
    position: absolute;
    top:0;
    right:0;
    width: 20px;
    display: flex;
    align-items:center;
    div{
      width: 100%;
      border-right: 6px solid #000;
      display: flex;
      justify-content: flex-end;
      span {
        width: 2px;
        background-color: #000;
        margin-right: 2px;
      }
    }
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


    