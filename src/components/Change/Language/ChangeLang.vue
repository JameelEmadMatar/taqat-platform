<template>
    <div class="lang">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12H22" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <select>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Span">Span</option>
        </select>
    </div>
</template>
<style scoped>
.lang{
    display: flex;
    gap: 10px;
}
.lang select{
    border:none;
    outline:none;
    background:none;
}
</style>