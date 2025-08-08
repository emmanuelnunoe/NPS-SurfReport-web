<template>
  <form class="d-flex" role="search">
  <div class="search-container" ref="searchContainer">
    <input
      type="search"
      v-model="query"
      class="form-control me-2 search" 
      placeholder="Search"
      @input="onInput"
      @focus="showDropdown = true"
    />
          <button class="btn btn-outline-success" type="submit">Search</button>
        
          <div v-if="showDropdown && filteredResults.length" class="dropdown">
            <button class="close-btn" @click="closeDropdown">X</button>
            <ul>
              <li
              v-for="(result, index) in filteredResults"
              :key="index"
              class="dropdown-item"
              @click="selectResult(result)"
              >
              {{ result.name }} ({{ result.state }})
            </li>
          </ul>
        </div>
      </div>
    </form>
    <li class="test-hover">Vue.js</li>
    
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'SearchComponent',
  async setup() {
    
 interface Station {
   id: number;
  long_name: string;
  name: string;
  state: string;
}
    // Reactive properties with type annotations
    const query = ref<string>('');
   const items = ref<Station[]>([]);
   
    const filteredResults = ref<string[]>([]);
    const showDropdown = ref<boolean>(false);
    const searchContainer = ref<HTMLDivElement | null>(null);

    const onInput = () => {
      const queryText = query.value.trim().toLowerCase();

      if(queryText === '') {
        filteredResults.value = [];
        showDropdown.value = false;
        return;
      }
      // Filter items based on the query
      filteredResults.value = items.value.filter((item) =>
        item.name.toLowerCase().includes(queryText)
      );

      showDropdown.value = filteredResults.value !=null ;

    };

    const closeDropdown = () => {
      showDropdown.value = false;
    };

    const selectResult = (result: TideStation) => {
      query.value = result.name; // Populate the search box with the selected result
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

    const {data, error, pending } = await useFetch( `https://noaa-tides.p.rapidapi.com/stations/`,{
        headers:{
            'X-RapidAPI-Host': 'noaa-tides.p.rapidapi.com',
            'X-RapidAPI-Key': '554b5a7e53msh1202eed08caa67bp16d5adjsnb39915c07f4b'
        }
        
    });
    console.log(data.value);
    if (data.value && Array.isArray(data.value.stations)) {
      items.value = data.value?.stations ?? [];
      console.log('Stations loaded:', items.value.length);
      }

    return {
      query,
      data,
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

<style scoped>
.search-btn{
  width: 20%;
  padding: 6px 12px;
  cursor: pointer;
  margin-inline-start: 3px;
  white-space: nowrap; /* Keeps button text on one line */
  max-width: 100px; /* Or use auto depending on your layout */
  padding: 6px;
}
.search-container {
  gap: 2px;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  position: relative;
}

.search{
  width: 50%;
  padding: 6px;
  margin-inline-start: 1.5em;
}

input[type="search"] {
  width: 250px; /* Fixed width prevents dynamic growth */
  flex: 1;
  padding: 6px;
  min-width: 0; /* Prevents input from hogging space */
}
.dropdown {
  position: absolute;
  bottom: 100%; /* right below input */
  left: 0; /* aligns with input’s left edge */
  width: 250px; /* match input width */
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1;
  margin-inline-start: 1.5em;}

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

:deep(.dropdown-item:hover) {
  background-color: #e0f7fa;
  color: #00796b;
}
</style>

