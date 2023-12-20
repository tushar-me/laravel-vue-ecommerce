<template>
    <div>
        <nav>
            <div class="border-b bg-gray-800">
                <div class="container">
                    <div class="flex items-center justify-between py-3">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                <path d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z" stroke="#B3B3B3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 10.8183C9.88071 10.8183 11 9.71933 11 8.36373C11 7.00812 9.88071 5.90918 8.5 5.90918C7.11929 5.90918 6 7.00812 6 8.36373C6 9.71933 7.11929 10.8183 8.5 10.8183Z" stroke="#B3B3B3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p class="text-gray-300 text-sm font-normal">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                        </div>
                        <div class="flex items-center gap-3 auth-btn">
                            <router-link to="/login" class="text-gray-300 text-sm font-normal">Sing In</router-link>
                            <router-link to="/register"  class="text-gray-300 text-sm font-normal">Sign Up</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="flex items-center justify-between py-6">
                    <router-link to="/">
                        <img src="/images/Logo.png" alt="Logo" class="w-40 h-auto">
                    </router-link>
                    <div>
                        <input type="text" placeholder="Search" class="border p-3 text-gray-600 w-[400px]">
                        <button class="py-3 px-5 bg-primary font-semibold text-base text-white rounded-r-md">Search</button>
                    </div>
                    <div class="flex items-center gap-2">
                        <router-link to="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                            <path d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16666 15.9995 7.95075C24 -2.16666 42.6666 13.8333 15.9995 28.5722Z" stroke="#1A1A1A" stroke-width="1.5"/>
                            </svg>
                        </router-link>
                        <router-link to="" class="flex gap-3 relative">
                            <div class="absolute w-5 h-5 left-4 bg-primary p-1 rounded-full flex items-center justify-center text-xs">2</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                            <path d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div>
                                <p class="text-gray-700 text-sm">Shopping cart:</p>
                                <p class="text-gray-900 text-base">$57.00</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="bg-gray-800 py-2">
                <div class="container flex items-center justify-between">
                    <ul class="flex items-center gap-8">
                        <li>
                            <router-link to="/" class="router-link">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/shop"  class="router-link">Shop</router-link>
                        </li>
                        <li>
                            <router-link to="/blog" class="router-link">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="router-link">About Us</router-link>
                        </li>
                        <li>
                            <router-link to="/contact" class="router-link">Contact Us</router-link>
                        </li>
                    </ul>
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M17.4359 4.375C18.9193 4.77396 20.2718 5.55567 21.358 6.64184C22.4441 7.72801 23.2258 9.08051 23.6248 10.5639" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.5306 7.75684C17.4205 7.99622 18.2318 8.46518 18.8833 9.11675C19.5349 9.76832 20.0039 10.5796 20.2433 11.4695" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.115 13.6522C11.0224 15.5078 12.5263 17.0053 14.3859 17.9047C14.522 17.9692 14.6727 17.997 14.8229 17.9855C14.9731 17.974 15.1178 17.9235 15.2425 17.839L17.9812 16.0138C18.1022 15.933 18.2414 15.8837 18.3862 15.8702C18.5311 15.8568 18.677 15.8797 18.8107 15.9368L23.9339 18.133C24.1079 18.207 24.2532 18.3354 24.3479 18.4991C24.4426 18.6627 24.4815 18.8527 24.4589 19.0404C24.2967 20.3074 23.6784 21.4718 22.7196 22.3158C21.7608 23.1597 20.5273 23.6253 19.25 23.6254C15.3049 23.6254 11.5214 22.0582 8.73179 19.2686C5.94218 16.479 4.375 12.6955 4.375 8.75041C4.37512 7.4732 4.84074 6.23982 5.68471 5.28118C6.52867 4.32254 7.6931 3.70437 8.96 3.54241C9.14771 3.51977 9.33769 3.55873 9.50134 3.65342C9.66499 3.7481 9.79345 3.89339 9.86738 4.06741L12.0654 9.19491C12.1219 9.32739 12.1449 9.47178 12.1322 9.61527C12.1195 9.75875 12.0716 9.89688 11.9928 10.0174L10.1728 12.7982C10.0901 12.9234 10.0414 13.0679 10.0313 13.2175C10.0212 13.3672 10.05 13.517 10.115 13.6522V13.6522Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-gray-400">(219) 555-0114</p>
                    </div>
                </div>
            </div>
        </nav>
        <slot></slot>
        <footer class="bg-gray-900">
            <div class="container py-14 border-b border-gray-700">
                <div class="flex">
                    <div class="w-1/3 pr-10">
                        <img src="/images/footer-logo.png" alt="">
                        <p class="text-gray-500 py-4">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <div class="flex gap-2">
                            <p class="text-white">(219) 555-0114</p>
                            <span class="text-gray-500">or</span> 
                            <p class="text-white">Proxy@gmail.com</p>
                        </div>
                    </div>
                    <div class="w-1/6">
                        <h4>My Account</h4>
                        <ul class="flex flex-col gap-2">
                            <li>
                                <router-link to="" class="footer-link">Order History</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Shopping Cart</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Wishlist</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/6">
                        <h4>Helps</h4>
                        <ul class="flex flex-col gap-2">
                            <li>
                                <router-link to="" class="footer-link">Contact</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Faqs</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Terms & Condition</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Privacy Policy</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/6">
                        <h4>Proxy</h4>
                        <ul class="flex flex-col gap-2">
                            <li>
                                <router-link to="" class="footer-link">About</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Shop</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Product</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Track Order</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/6">
                        <h4>Categories</h4>
                        <ul class="flex flex-col gap-2">
                            <li>
                                <router-link to="" class="footer-link">Fruit & Vegetables</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Meat & Fish</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Bread & Bakery</router-link>
                            </li>
                            <li>
                                <router-link to="" class="footer-link">Beauty & Health</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container flex items-center justify-between py-6">
                <p class="text-gray-500 font-normal text-sm">Ecobazar eCommerce © 2021. All Rights Reserved</p>
            </div>
        </footer>
    </div>    
</template>

<script>
export default {
        
    }
</script>

<style lang="scss" scoped>
    .router-link {
        @apply text-gray-400 text-base font-medium py-1 px-2 inline-block;
        &-active {
            @apply text-white;
        }
    }
    .auth-btn {
        .router-link-active {
            @apply text-primary;
        }
    }
    svg {
        @apply text-gray-400;
    }
    h4 {
        @apply text-white font-medium text-base mb-5;
    }
    .footer-link {
        @apply text-sm font-normal text-gray-400 hover:text-white;
    }
</style>