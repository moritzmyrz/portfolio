<script context="module" lang='ts'>
  export interface Prosjekt {
    tittel: string;
    beskrivelse: string;
    tidspunkt: string;
    teknologi: string;
    url: string;
    bilde: string;
  }
</script>

<script lang="ts">
  export let prosjekt: Prosjekt;
</script>

<a class="mb-10 mt-8 cursor-pointer border-solid border-[1px] border-[#eee] h-auto grid-cols-none grid md:grid-cols-[.3fr_.7fr] md:grid-rows-1 md:gap-0 md:h-[170px] p-[10px] rounded-md outline-offset-2 outline-2 outline-transparent" target="_blank" href={prosjekt.url}>
  <div class="relative w-full h-[200px] mb-[1em] md:mb-0 md:h-auto">
    <img class="img absolute w-full inset-0 object-cover block align-middle rounded-md h-full max-h-none md:max-h-[150px] min-h-[100px] max-w-full " src={prosjekt.bilde} alt="placeholder">
  </div>
  <div class="flex flex-col ml-[2em] justify-around">
    <p class="text-sm type">{prosjekt.teknologi}</p>
    <h3 class="block font-semibold text-xl">{prosjekt.tittel}</h3>
    <p>{prosjekt.beskrivelse}</p>
    <p class="opacity-50 text-sm">{prosjekt.tidspunkt}</p>
  </div>
</a>

<style>
  .img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .type {
    opacity: 1;
    color: rgb(255, 67, 120);
  }
</style>