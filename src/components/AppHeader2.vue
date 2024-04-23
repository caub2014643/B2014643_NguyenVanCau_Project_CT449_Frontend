<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Theo dõi mượn sách</a>
        <div class="mr-auto navbar-nav">
            <div class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link">
                    Sách <i class="fas fa-book"></i>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{ name: 'home' }" class="nav-link">
                    Sách đã mượn <i class="fas fa-history"></i>
                </router-link>
            </div>
            <div class="nav-item"> 
                
                    <router-link :to="{ name: 'dangnhap' }" class="nav-link">
                        Đăng nhập <i class="fas fa-sign-in-alt"></i>
                    </router-link>

            </div>
        </div>
    </nav>
</template>