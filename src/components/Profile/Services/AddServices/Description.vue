<template>
    <div class="description-main">
        <!-- Progress Bar -->
        <div class="prog-main">
            <div class="progress">
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4891_7661)">
                        <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                        <path d="M7.00049 12L10.0005 15L16.0111 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_7661">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Overview</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4891_7661)">
                        <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                        <path d="M7.00049 12L10.0005 15L16.0111 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_7661">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Pricing</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4891_7661)">
                        <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                        <path d="M7.00049 12L10.0005 15L16.0111 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_7661">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Gallery</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4891_7661)">
                        <circle cx="12" cy="12" r="11.5" fill="#007BD1" stroke="#007BD1"/>
                        <path d="M7.00049 12L10.0005 15L16.0111 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4891_7661">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Process</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0-4891-5182)">
                        <circle cx="12" cy="12" r="11.5" fill="#E6F2FA" stroke="#007BD1"/>
                        </g>
                        <defs>
                        <clipPath id="clip0-4891-5182">
                        <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <p>Description</p>
                </div>
                <div class="line">
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                </div>
                <div class="prog-details">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" fill="white" stroke="#D9D9D9"/>
                    </svg>
                    <p>Review</p>
                </div>
            </div>
        </div>
        <h4 class="title">Service description</h4>
        <div class="instruction">
            <h5>Service summary</h5>
            <p>Highlight what makes your service or project unique and valuable to clients.</p>
        </div>
        <ServicesSummary/>
        <div class="instruction">
            <h5>Frequently asked questions <span>(optional)</span></h5>
            <p>Provide clear answers to common client questions. You can add up to 5.</p>
        </div>
        <DescriptionQuestion/>
    </div>
    <BottomButtons/>
</template>

<script setup>
import BottomButtons from './BottomButtons.vue'
import ServicesSummary from './ServicesSummary.vue'
import DescriptionQuestion from './DescriptionQuestion.vue'
</script>

<style scoped>
.description-main{
    overflow: auto;
    height: 85%;
    max-height: 100%;
}
.prog-main{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:15px 0;
    padding-bottom: 20px;
}
.progress{
    width:90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:10px;
    flex-wrap:wrap;
}
.prog-details{
    display: flex;
    align-items: center;
    gap: 5px;
}
.prog-details p{
    font-size:12px;
    color:var(--text-color);
    font-weight:400;
    text-align:center;
}
.prog-details:first-child p{
    color:black;
    font-weight:bold;
}
.line{
    display: flex;
    gap: 3px;
    align-items: center;
    color: var(--text-color);
}
.title{
    font-size:24px;
    font-weight:700;
    margin-bottom:20px;
}
.instruction{
    margin:30px 0;
}
.instruction h5{
    font-size:18px;
    line-height:30.8px;
    margin:15px 0;
}
.instruction span{
    color: var(--text-color)
}
.instruction p{
    color:var(--text-color);
    font-size:16px;
}
</style>