<script lang="ts">
  import { getForm } from "./state";

  const form = getForm()

  $: url = $form + ($form[-1] == "/" ? "" : "/") + "viewform?embedded=true"
  $: console.log(url)
  const regex = new RegExp('^https://docs.google.com/forms/d/e/')
</script>

{#if url == "/viewform?embedded=true"}
  <p>Fancy animation</p>
{:else if regex.test(url)}
  <iframe class="w-full h-full" src={url} frameborder="0"></iframe>
{:else}
  <p>
    Invalid url
  </p>
{/if}

<style>
</style>
