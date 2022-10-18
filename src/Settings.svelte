<script lang="ts">
    import { getForm } from "./state";



    const form = getForm()

    let url = ""

    const fetchForm = () => {
        $form = url
        console.log($form)
    }
</script>

<div>
    <label for="form">Enter url to the google form</label>
    <input bind:value={url} id="form" type="text">
    <button class="btn" on:click={fetchForm}>Get form</button>
</div>
