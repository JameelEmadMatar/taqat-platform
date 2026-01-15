<template>
    <div class="share">
        <button class="title" @click="boxShowStatus == true ? boxShowStatus = false : boxShowStatus = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none" color="currentColor"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.33 7.175c2.7.233 3.802 1.62 3.802 4.657v.098c0 3.353-1.342 4.695-4.695 4.695H6.555c-3.353 0-4.695-1.342-4.695-4.695v-.098c0-3.014 1.087-4.402 3.742-4.65M9 11.75V3.215M11.512 4.888 9 2.375 6.487 4.888"></path></svg>
            <p>Share</p>
        </button>
        <div class="share-box" v-if="boxShowStatus">
            <svg @click="boxShowStatus = false" class="x-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            <p>Page Link</p>
            <div class="copy-box">
                <p>{{staticText}}</p>
                <svg @click="copyStaticText" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
            </div>
            <p>Share To</p>
            <div class="socials-btn">
                <div class="main" @click="shareOnWhatsApp">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" color="#191919"><path fill="#191919" d="m.5 24 1.695-6.163A11.824 11.824 0 0 1 .6 11.891C.603 5.335 5.964 0 12.55 0a11.902 11.902 0 0 1 8.453 3.488 11.796 11.796 0 0 1 3.497 8.414c-.003 6.557-5.363 11.892-11.95 11.892-2-.001-3.97-.5-5.715-1.448L.5 24Zm6.628-3.807c1.684.995 3.292 1.591 5.418 1.592 5.474 0 9.933-4.434 9.936-9.885.002-5.462-4.436-9.89-9.928-9.892-5.478 0-9.934 4.434-9.936 9.884 0 2.225.654 3.891 1.754 5.634L3.37 21.174l3.76-.981Zm11.442-5.464c-.075-.124-.273-.198-.573-.347-.298-.149-1.766-.868-2.04-.967-.274-.099-.473-.149-.673.149-.199.297-.771.967-.945 1.165-.174.198-.349.223-.647.074-.299-.149-1.261-.462-2.402-1.475-.887-.788-1.487-1.761-1.66-2.059-.174-.297-.019-.458.13-.606.135-.133.298-.347.448-.521.152-.172.201-.296.301-.495.1-.198.05-.372-.025-.521-.075-.148-.672-1.611-.92-2.206-.243-.579-.49-.501-.672-.51l-.573-.01c-.199 0-.522.074-.796.372-.273.298-1.045 1.016-1.045 2.479s1.07 2.876 1.22 3.074c.149.198 2.104 3.2 5.1 4.487.712.306 1.268.489 1.701.626.716.226 1.367.194 1.881.118.574-.085 1.767-.719 2.016-1.413.25-.695.25-1.29.174-1.414Z"></path></svg>
                    </div>
                    <p>WhatsApp</p>
                </div>
                <div class="main" @click="shareOnX">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" fill="none" color="#191919"><path fill="#191919" d="M19.401.5h3.68l-8.04 8.895L24.5 21.5h-7.406l-5.8-7.341L4.655 21.5H.974l8.6-9.515L.5.5h7.594l5.243 6.71L19.401.5ZM18.11 19.368h2.039L6.986 2.52H4.798L18.11 19.368Z"></path></svg>
                    </div>
                    <p>X</p>
                </div>
                <div class="main">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" color="#191919"><path fill="#191919" d="M12.007 2.158c3.208 0 3.588.014 4.85.07 1.172.052 1.806.248 2.228.413.558.215.961.478 1.379.896.422.422.68.82.895 1.378.165.423.361 1.06.413 2.228.056 1.267.07 1.647.07 4.85 0 3.208-.014 3.588-.07 4.85-.051 1.172-.248 1.805-.413 2.228a3.714 3.714 0 0 1-.895 1.378c-.423.423-.821.68-1.38.896-.421.165-1.06.361-2.227.413-1.267.056-1.646.07-4.85.07-3.208 0-3.588-.014-4.85-.07-1.172-.052-1.805-.248-2.228-.413a3.713 3.713 0 0 1-1.378-.895 3.693 3.693 0 0 1-.896-1.38c-.164-.422-.361-1.06-.413-2.227-.056-1.267-.07-1.646-.07-4.85 0-3.208.014-3.588.07-4.85.052-1.172.249-1.805.413-2.228.215-.558.478-.961.896-1.378.422-.423.82-.68 1.378-.896.423-.164 1.06-.361 2.228-.413 1.262-.056 1.642-.07 4.85-.07Zm0-2.163c-3.26 0-3.668.014-4.948.07-1.276.057-2.153.263-2.913.559a5.86 5.86 0 0 0-2.13 1.388A5.883 5.883 0 0 0 .629 4.137C.333 4.9.127 5.774.07 7.049.014 8.335 0 8.743 0 12.002c0 3.26.014 3.668.07 4.949.057 1.275.263 2.152.558 2.912a5.86 5.86 0 0 0 1.389 2.13 5.868 5.868 0 0 0 2.124 1.383c.765.296 1.637.502 2.913.558 1.28.057 1.689.07 4.948.07 3.26 0 3.668-.013 4.949-.07 1.275-.056 2.152-.262 2.912-.558a5.868 5.868 0 0 0 2.125-1.383 5.87 5.87 0 0 0 1.384-2.125c.295-.765.501-1.637.558-2.913.056-1.28.07-1.688.07-4.948 0-3.26-.014-3.668-.07-4.948-.057-1.276-.263-2.153-.558-2.913a5.624 5.624 0 0 0-1.375-2.134A5.87 5.87 0 0 0 19.873.63C19.108.333 18.236.127 16.96.07c-1.285-.06-1.693-.075-4.953-.075Z"></path><path fill="#191919" d="M12.005 5.835a6.17 6.17 0 0 0-6.167 6.167 6.17 6.17 0 0 0 6.167 6.168 6.17 6.17 0 0 0 6.168-6.168 6.17 6.17 0 0 0-6.168-6.167Zm0 10.168A4.001 4.001 0 1 1 12.006 8a4.001 4.001 0 0 1 0 8.003ZM19.861 5.591a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"></path></svg>
                    </div>
                    <p>Instagram</p>
                </div>
                <div class="main" @click="shareOnFacebook">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" color="#191919"><path fill="#191919" d="M12.5 0C5.873 0 .5 5.392.5 12.044a12.04 12.04 0 0 0 9.101 11.69v-8.01H7.127v-3.68H9.6v-1.586c0-4.1 1.848-6 5.858-6 .76 0 2.073.15 2.61.3v3.336c-.284-.03-.776-.045-1.387-.045-1.968 0-2.728.748-2.728 2.693v1.302h3.92l-.674 3.68h-3.246V24c5.942-.72 10.546-5.798 10.546-11.956C24.5 5.392 19.127 0 12.5 0Z"></path></svg>
                    </div>
                    <p>Facebook</p>
                </div>
                <div class="main" @click="shareOnLinkedIn">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" color="#191919"><path fill="#191919" d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0ZM7.12 20.452H3.558V8.995H7.12v11.457ZM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125Zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286Z"></path></svg>
                    </div>
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const boxShowStatus = ref(false)
const staticText = ref('https://brightgaza.com/talents/8')

const copyStaticText = async () => {
  if (staticText.value) {
    try {
      await navigator.clipboard.writeText(staticText.value)
      alert('URL copied to clipboard')
    } catch (err) {
      fallbackCopyText(staticText.value)
    }
  }
}

const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(staticText.value)}`
    window.open(url, '_blank', 'width=600,height=400')
}

const shareOnX = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(staticText.value)}`
    window.open(url, '_blank', 'width=600,height=400')
}

const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(staticText.value)}`
    window.open(url, '_blank', 'width=600,height=400')
}

const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(staticText.value)}`
    window.open(url, '_blank', 'width=600,height=400')
}
</script>

<style scoped>
.share{
    position:relative;
}
.title{
    display: flex;
    align-items: center;
    gap: 10px;
    width: 120px;
    justify-content: center;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: var(--main-color);
    color: #fff;
    cursor: pointer;
}
.title:hover{
    opacity:0.8;
}
.share-box{
    position:absolute;
    background-color: #fff;
    box-shadow: 0 0 1px;
    right: 0;
    top: 50px;
    width: 600px;
    display:flex;
    flex-direction:column;
    padding:10px;
    border-radius:4px;
}
.share-box .x-svg{
    cursor:pointer;
    align-self: end;
}
.share-box .x-svg:hover{
    background-color:#eee;
    border-radius:4px;
}
.copy-box{
    position: relative;
    background-color: #F7F7F7;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    border: 1px solid #D9D9D9;
}
.copy-box svg{
    position:absolute;
    right: 10px;
    top: 25%;
}
.socials-btn{
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 20px 0;
    flex-wrap: wrap;
}
.socials-btn .main{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}
.socials-btn .main div{
    border-radius: 50%;
    background-color: #F7F7F7;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>