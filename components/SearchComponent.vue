<template>
  <div lass="search-container" ref="searchContainer">
    <input type="text" 
    v-model="query" 
    class="form-control search" 
    id="search" placeholder="Location name / ZipCode"
    @input="onInput"
    @focus="showDropdown = true"
    />
    <button class="btn btn-primary">Search</button>
    <div
    v-if="showDropdown && filteredResults.length > 0"
    class="dropdown">
    <button class="close-btn" @click="closeDropdown">X</button>
    <ul>
      <li v-for="(result, index) in filteredResults" :key="index"
      @click="selectResult(result)">
      >
      {{ result }}
      </li>
    </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'SearchComponent',
  setup() {
    // Reactive properties with type annotations
    const query = ref<string>('');
    const items = ref<string[]>([
      'Nuxt.js',
      'Vue.js',
      'React',
      'Angular',
      'JavaScript',
    ]);
    const filteredResults = ref<string[]>([]);
    const showDropdown = ref<boolean>(false);
    const searchContainer = ref<HTMLDivElement | null>(null);

    const onInput = () => {
      filteredResults.value = items.value.filter((item) =>
        item.toLowerCase().includes(query.value.toLowerCase())
      );
      showDropdown.value = true;
    };

    const closeDropdown = () => {
      showDropdown.value = false;
    };

    const selectResult = (result: string) => {
      query.value = result; // Populate the search box with the selected result
      closeDropdown();
    };

    const onClickOutside = (event: MouseEvent) => {
      if (
        searchContainer.value &&
        !searchContainer.value.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    onMounted(() => {
      document.addEventListener('click', onClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', onClickOutside);
    });

    return {
      query,
      items,
      filteredResults,
      showDropdown,
      searchContainer,
      onInput,
      closeDropdown,
      selectResult,
    };
  },
});
</script>

<style>

.search{
  margin: auto;
  display: block;
  width: 80%;
  border-radius: 10em;
}

.dropdown {
  position: absolute;
  top:-150%; /* adjust as needed */
  background-color: white;
  border: 1px solid #ccc;
  width: 80%;
  margin: auto;
  z-index: 1000;
}

.close-btn {
  background: none;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;
  float: right;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 10px;
  cursor: pointer;
}

li:hover {
  background-color: #f0f0f0;
}
</style>