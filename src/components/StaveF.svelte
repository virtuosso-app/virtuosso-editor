<script lang="ts">
  import Stave from "./Stave.svelte";
  import clefF from '../assets/clefF.svg'


</script>


<Stave lines={5}>
  <svelte:fragment slot="header">
    <div class="clef clefF">
      <img src="{clefF}" width="100%" />
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
  .clefF {
    padding-top: 19px;
  }
</style>