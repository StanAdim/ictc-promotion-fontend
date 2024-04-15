<script setup>
const appData = useAppDataStore()
const dataForm = ref({
    searchInput: 'E29-HVGN'
})
const applicantStore = useApplicantStore()
async function handleSearch (){
    await applicantStore.captureApplication(dataForm.value.searchInput)
}
</script> 
<template>
    <form @submit.prevent="handleSearch">
        <div class="search-wrapper active">
            <div class="input-holder ">
                <input type="text" class="search-input" v-model="dataForm.searchInput" placeholder="Application Code" />
                <button class="search-icon" type="submit"><i class="fa-solid deadline fa-magnifying-glass fa-2xl"></i></button>
            </div>
        </div>
    </form>
</template>
<style>


.search-wrapper .input-holder {    
    height: 70px;
    width:70px;
    overflow: hidden;
    background: #38bedf43;
    border-radius:6px;
    position: relative;
    transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder {
    width:400px;
    border-radius: 50px;
    background: #38bedf43;
    transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
}
.search-wrapper .input-holder .search-input {
    height: 50px;
    padding:0px 70px 0 20px;
    position: absolute;
    top:0px;
    left:0px;
    border-radius: 50px;
    background-color: #38bedf00;
    box-sizing: border-box;
    border:none;
    outline:none;
    text-transform: uppercase;
    font-family:"Open Sans", Arial, Verdana;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color:#131845;
    transform: translate(0, 60px);
    transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition-delay: 0.3s;
}
.search-wrapper.active .input-holder .search-input {
    opacity: 1;
    transform: translate(0, 10px);
}
.search-wrapper .input-holder .search-icon {
    width:70px;
    height:70px;
    border:none;
    border-radius:6px;
    background: #f3f5f6fb;
    padding:0px;
    outline:none;
    position: relative;
    z-index: 2;
    float:right;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder .search-icon {
    width: 50px;
    height:50px;
    margin: 10px;
    border-radius: 30px;
}
.search-wrapper .close {
    position: absolute;
    z-index: 1;
    top:24px;
    right:20px;
    width:25px;
    height:25px;
    cursor: pointer;
    transform: rotate(-180deg);
    transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
    transition-delay: 0.2s;
}
.search-wrapper.active .close {
    right:-50px;
    transform: rotate(45deg);
    transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition-delay: 0.5s;
}
.search-wrapper .close::before, .search-wrapper .close::after {
    position:absolute;
    content:'';
    background: #FE5F55;
    border-radius: 2px;
}
.search-wrapper .close::before {
    width: 5px;
    height: 25px;
    left: 10px;
    top: 0px;
}
.search-wrapper .close::after {
    width: 25px;
    height: 5px;
    left: 0px;
    top: 10px;
}

</style>