<script lang='ts'>
  import { PortableText } from "@portabletext/svelte";
  import BlockText from "./BlockText.svelte";
  import ListItem from "./ListItem.svelte";
  import UnorderedList from "./UnorderedList.svelte";

  export let value: any;
</script>

<PortableText components={{
  block: {
    normal: BlockText,
  },
  list: {
    unordered: UnorderedList,
  },
  listItem: {
    bullet: ListItem,
  },
}} value={value} />