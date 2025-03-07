<template>
    <div class="header">
        <span class="contact-group">
            <span @click="btnFacebookClick" class="parent" style="width: 120px;">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                <span class="text-bold">Liên hệ</span>
            </span>
            <span @click="btnContactClick" class="parent" style="margin-left:50px;width: 300px;">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                <span class="text-bold">Kỹ thuật, bảo hành</span>
                <span class="text-bold phone-number">0367342354</span>
            </span>
        </span>
        <span class="user">
            <svg style="margin-right: 5px;" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512"><path fill="#ffffff" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            <span v-if="!isLogin" >
                <span class="hover-effect">Đăng kí</span>
                <span style="margin-right: 5px;margin-left: 5px;">|</span>
                <span class="hover-effect">Đăng nhập</span>
            </span>
            <span v-else class="hover-effect">Mai Xuân Lĩnh</span>
        </span>
    </div>
    <div class="body">
        <span class="search-box">
            <span class="category">
                Tất cả danh mục
                <svg class = "dropdown-btn" xmlns="http://www.w3.org/2000/svg" height="23" width="23" viewBox="0 0 320 512"><path fill="#4d4d4d" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
            </span>
            <input class="search-content" placeholder="Nhập nội dung tìm kiếm..."/>
        </span>
    </div>
</template>
<script setup>
import {inject} from "vue";
const isLogin = inject("isLogin");
const btnFacebookClick = () => {
    window.open("https://facebook.com/xuanlinh.noname");
}
const btnContactClick = () => {
    window.open("tel:+84367342354");
}
</script>
<style scope>
.header {
    display: flex;
    background-color: #00A551;
    height: 45px;
    color:white;
    align-items: center;
}
.search-content {
    position: absolute;
    top:50%;
    right: 8%;
    font-size: 18px;
    font-family: Afacad;
    width: 200px;
    height: 30px;
    border: 0px;
    outline: none;
    transform: translateY(-50%);
}
.category {
    display: flex;
    position: absolute;
    border: 1px solid rgba(88, 88, 88, 0.507);
    border-radius: 10px;
    left: 5%;
    top: 50%;
    justify-content: center;
    align-items: center;
    text-indent: -20px;
    transform: translateY(-50%);
    width: 180px;
    height: 34px;
}
.category:hover {
    cursor: pointer;
}
.dropdown-btn {
    position: absolute;
    right:5%;
}
.search-box {
    position: absolute;
    align-items: center;
    top:25%;
    left: 50%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    transform: translate(-50%,-50%);
    width: 480px;
    height: 50px;
    border-radius: 12px;
}
.contact-group {
    display: flex;
    align-items: center;
    position: absolute;
    left: 5%;
}
.body {
    position: relative;
    border: 1px solid red;
    height: 300px;
}
.hover-effect:hover {
    text-decoration: underline;
    cursor: pointer;
}
.icon {
    margin-left: 12px;
    margin-right: 15px;
}
.user {
    display: flex;
    position: absolute;
    right:5%;
}
.text-bold {
    font-weight: 600;
}
.phone-number {
    color:#FF8888;
    font-size: 21px;
    margin-left: 8px;
    padding-bottom: 2px;
}
.parent {
    display: flex;
    border-radius: 20px;
    align-items: center;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.3);
} 
.parent:hover {
    cursor: pointer;
}
.parent:hover .icon {
    animation: moveUp 0.25s;
    animation-fill-mode: forwards;
}
.parent:not(:hover) .icon {
    animation: moveDown 0.25s;
    animation-fill-mode: forwards;
}
@keyframes moveUp {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-3px);
    }
}
@keyframes moveDown {
    from {
        transform: translateY(-3px);
    }
    to {
        transform: translateY(0px);
    }
}
</style>