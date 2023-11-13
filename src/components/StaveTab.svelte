<script lang="ts">
  import Stave from "./Stave.svelte";
  import clefG from '../assets/clefG.svg'

  export let lines = 6
</script>


<Stave {lines}>
  <svelte:fragment slot="header">
    <div class="clef">
      <span class="clefTab">
        <span>T</span>
        <span>A</span>
        <span>B</span>
      </span>
    </div>
  </svelte:fragment>
</Stave>

<style lang="scss">
  .clef {
    position: absolute;
    top:0;
    left:5px;
    width: 32px;
    height: 100%;
    display: flex;
    align-self: center;
  }
  .clefTab {
    width: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:0;
    span{
      width: 100%;
      font-size: 16px;
      line-height: 0.9;
      font-weight: bold;
    }
  }
</style>