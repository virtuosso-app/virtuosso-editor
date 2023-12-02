<script lang="ts">
    import VirtuossoEditor from "./components/VirtuossoEditor.svelte";
    import TailwindCss from './lib/TailwindCSS.svelte';
</script>

<main>
    <VirtuossoEditor />
    <TailwindCss/>
</main>

<style>
  main{
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #444652;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }
</style>

