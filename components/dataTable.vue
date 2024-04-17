<script  setup>
const hideFilterOption = ref(true)
const hideActionOption = ref(true)
const applicantStore = useApplicantStore()
const tableData = ref(null);
if(!tableData.value){
  await applicantStore.retriveApplicantProfiles()
  tableData.value = applicantStore.allApplicants.data
  console.log(tableData.value);
  
}
const toogleActionOption = ()=> {hideActionOption.value = !hideActionOption.value; hideFilterOption.value = true}
const toogleFilterOption = ()=> {hideFilterOption.value = !hideFilterOption.value; hideActionOption.value = true}
</script>
<template>
  <section class="bg-gray-50 p-3 sm:p-5">
    <UsableCustomSpinLoad />
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <!-- Start coding here -->
      <div class="relative shadow-md sm:rounded-lg overflow-hidden">
        <!-- Top of the table -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 bg-teal-50">
            <!-- Search Input -->
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-600 text-gray-900 text-sm 
                  rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <!-- header -->
          <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 
          items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button
              type="button"
              class="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4
               focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
            ><i class="fa-regular fa-file-excel mx-0.5"></i> Export Excell</button>
            <div class="flex items-center space-x-3 w-full md:w-auto">
              <button id="actionsDropdownButton" @click.prevent="toogleActionOption"
                data-dropdown-toggle="actionsDropdown"
                class="w-full md:w-auto flex items-center 
                  justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border
                 border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                type="button"><i class="fa-solid fa-caret-down mx-0.5"></i> Actions</button>
                <!-- Dropdown  -->
              <div id="actionsDropdown" :class="{'hidden':hideActionOption }" class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow">
                <ul class="py-1 text-sm  dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                  <li>
                    <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100 
                    dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                  </li>
                  <li>
                    <a href="#" class="block py-2 px-4 text-gray-600 hover:bg-gray-100 
                    dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                  </li>
                </ul>
              </div>
              <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown"
                @click.prevent="toogleFilterOption"
                class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm 
                font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 
                border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 
                focus:ring-4 focus:ring-gray-200" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="h-4 w-4 mr-2 text-gray-400"
                  viewbox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clip-rule="evenodd"/>
                </svg>Filter
                <svg
                  class="-mr-1 ml-1.5 w-5 h-5"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
              <!-- Filter Hidden -->
              <div id="filterDropdown" :class="{'hidden': hideFilterOption}" class="z-10 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                <h6 class="mb-3 text-sm font-medium text-gray-900">
                  Order by
                </h6>
                <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton" >
                  <li class="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="apple"
                      class="ml-2 text-sm font-medium text-gray-900"
                      >Business Sector</label
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-300 "
            >
              <tr>
                <th scope="col" class="px-4 py-3">sn</th>
                <th scope="col" class="px-4 py-3">Name</th>
                <th scope="col" class="px-4 py-3">Email</th>
                <th scope="col" class="px-4 py-3">Phone</th>
                <th scope="col" class="px-4 py-3">Age</th>
                <th scope="col" class="px-4 py-3">Has Business</th>
                <th scope="col" class="px-4 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody v-if="tableData">
              <tr  v-for="(item, index) in tableData" :key="item.id"
              class="border-b dark:border-gray-700">
              <td class="px-4 py-3">{{index + 1}}</td>
                <th 
                  scope="row"
                  class="px-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {{item.fullName}}
                </th>
                <td class="px-4 py-3">{{item.email}}</td>
                <td class="px-4 py-3">{{item.phoneNumber}}</td>
                <td class="px-4 py-3">{{item.birthYear}}</td>
                <td class="px-4 py-3 text-center">
                  <i v-if="item.BusinessRegStatus == '1'" class="fa-solid fa-check"></i>
                  <i v-if="item.BusinessRegStatus == '0'" class="fa-solid fa-xmark"></i>
                </td>
                <td class="px-4 py-3 flex items-center justify-end">
                  <button
                    id="apple-imac-27-dropdown-button"
                    data-dropdown-toggle="apple-imac-27-dropdown"
                    class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    type="button"
                  >
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                      />
                    </svg>
                  </button>
                  <div
                    id="apple-imac-27-dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="apple-imac-27-dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Show</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Edit</a
                        >
                      </li>
                    </ul>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >Delete</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4 bg-teal-50"
          aria-label="Table navigation"
        >
          <span class="text-sm font-normal text-gray-500 ">
            Showing
            <span class="font-semibold text-gray-900"
              >1-10</span
            >
            of
            <span class="font-semibold text-gray-900"
              >1000</span
            >
          </span>
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >100</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>
<style scoped>
</style>