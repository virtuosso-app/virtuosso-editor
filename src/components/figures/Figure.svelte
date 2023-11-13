<script lang="ts">
  import type { Note } from "../../lib/processPartiture";
  import { default as config} from '../../config/editor'
  export let note: Note
  const figure = config.figures[note.figure]
  const type = '_up'
</script>

<div class="figure" style="width: {config.figures[note.figure].width}px">
  <img src="assets/figures/{figure.type}{type}.svg">
</div>

<style lang="scss">
  .figure{
    img{
      width: 30px;
    }
  }
</style>