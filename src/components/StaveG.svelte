<script lang="ts">
  import Stave from "./Stave.svelte";
  import clefG from '../assets/clefG.svg'

  export let compasses = []
</script>


<Stave lines={5} {compasses}>
  <svelte:fragment slot="header">
    <div class="clef clefG">
      <img src="{clefG}" width="100%" />
    </div>
  </svelte:fragment>
</Stave>

<style>
  .clef {
    position: absolute;
    top:0;
    left:5px;
    width: 32px;
    height: 100%;
  }
  .clefG {
    padding-top: 6px;
  }
</style>