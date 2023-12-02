<script lang="ts">
  import type { Note } from "../../lib/processPartiture";
  import { default as config} from '../../config/editor'
  export let note: Note
  export let nextNote: Note | undefined
  const figure = config.figures[note.figure]
  const nextFigure = nextNote ? config.figures[nextNote.figure] : undefined
  const type = '_up'

  const isNextFigureSameType = () => {
    return figure.stem > 0 && figure.type == nextFigure?.type
  }
</script>

<div class="figure" style="width: {figure.width}px">
  <img src="assets/figures/{figure.head}.svg" class="head">
  {#if figure.pilar}
  <img src="assets/figures/pilar.svg" class="pilar">
  {/if}
  {#if figure.stem}
  <img src="assets/figures/stem.svg" class="stem">
  {/if}

  {#if isNextFigureSameType() }
    {#each Array(nextFigure.stem) as line, index}
      <div class="figure-connect-line line-{index+1}"></div>
    {/each}
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

    .figure-connect-line{
      height: 2px;
      width: 20px;
      position: absolute;
      margin-left: 22px;
      background: black;

      &.line-1{
        margin-top: -10px;
      }
      &.line-2{
        margin-top: -5px;
      }
      &.line-3{
        margin-top: 0px;
      }

      &.line-4{
        margin-top: 5px;
      }
    }
  }
</style>