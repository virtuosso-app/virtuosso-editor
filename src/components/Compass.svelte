<script lang="ts">
export let options = {
  height: 50,
  margin: 20,
  ticks: 192,
  notes: []
}

const compassCompleted = () => {
  let ticks = 0
  options.notes.forEach((note) => ticks+= note.ticks)
  return ticks
} 

</script>

<div class="compass" style="height: {options.height}px">
  {compassCompleted()}
</div>

<style>
  .compass{
    position: relative;
    border-right: 2px solid #000;
    min-width: 200px;
    width: 200px;
    color: black;
    /* background: blue; */
  }
</style>