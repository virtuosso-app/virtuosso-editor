<script lang="ts">
  import type { Note } from "../../lib/processPartiture";
  import { default as config} from '../../config/editor'
  export let note: Note
  const figure = config.figures[note.figure]
  const type = '_up'
</script>

<div class="figure" style="width: {figure.width}px">
  <img src="assets/figures/{figure.head}.svg" class="head">
  {#if figure.pilar}
  <img src="assets/figures/pilar.svg" class="pilar">
  {/if}
  {#if figure.stem}
  <img src="assets/figures/stem.svg" class="stem">
  {/if}

</div>

<style lang="scss">
  .figure{
    position: relative;
    display: flex;
    justify-content: center;

    // transform: rotate(180deg);
    &.down{
      transform: rotate(180deg);
    }
    .head{
      width: 12px;
    }
    .pilar{
      width: 10px;
      height: 30px;
      margin-top: -10px;
      margin-left: -1px;

    }
  }
</style>