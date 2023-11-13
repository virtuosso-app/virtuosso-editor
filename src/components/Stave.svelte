<script lang="ts">
import { default as config} from '../config/editor'
const DEFAULT_LINES = config.staves.defaultLines
const STAVE_MARGIN = config.staves.marginTopDown
const STAVE_SEPARATOR_LINES = config.staves.separatorLines

export let lines = DEFAULT_LINES

const height = config.staves.height
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
      {#each Array(lines) as _, idx}
        <line x1="0" y1="{getYCoord(idx)}" x2="100%" y2="{getYCoord(idx)}" stroke="black" />
      {/each}
    </svg>
  </div>
  
  
</div>

<style lang="scss">
  .stave{
    position: relative;
    display: flex;
    width: 100%;
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
  }
  
  


</style>