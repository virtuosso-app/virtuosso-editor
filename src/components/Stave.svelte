<script lang="ts">
  import Compass from './Bar.svelte'
const DEFAULT_LINES = 5
const STAVE_MARGIN = 20
const STAVE_SEPARATOR_LINES = 10

export let lines = DEFAULT_LINES

const height = (lines-1) * STAVE_SEPARATOR_LINES
const getYCoord = (idx) => {
  return idx === 0 ? 0 : idx * STAVE_SEPARATOR_LINES
}
</script>

<div class="stave" style="height: {height+(STAVE_MARGIN*2)}px">
  <div class="stave-header"> 
    <slot name="header" />
  </div>
  
  

  <div class="stave-lines" style="height: {height+(STAVE_MARGIN*2)}px">
    <svg width="100%" height="{height}px">`
      {#each Array(lines) as line, idx}
        <line x1="0" y1="{getYCoord(idx)}" x2="100%" y2="{getYCoord(idx)}" stroke="black" />
      {/each}
    </svg>
  </div>
  
  
</div>

<style>
  .stave{
    position: relative;
    display: flex;
    width: 100%;
  }
  .stave-header{
    width: 50px;
    height: 100%;
  }
  .stave-lines{
    position:absolute;
    top:0;
    width: 100%;
    display: flex;
    align-items: center;
  }


</style>