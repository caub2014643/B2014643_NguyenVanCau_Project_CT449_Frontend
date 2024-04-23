<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" class="navbar-brand">Ứng dụng Theo dõi mượn sách</a>
        <div class="mr-auto navbar-nav">
            <div class="nav-item">
                <router-link :to="{ name: 'docgia' }" class="nav-link">
                    Sách <i class="fas fa-book"></i>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link :to="{ name: 'muonsach' }" class="nav-link">
                    Sách đã mượn <i class="fas fa-history"></i>
                </router-link>
            </div>
            
                <div><button class="btn btn-warning" @click="logout"> Đăng xuất
                        <i class="fas fa-sign-out-alt"></i>
                    </button>
                
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logout() {
            // Thực hiện các thao tác để đăng xuất, ví dụ: xóa dữ liệu đăng nhập khỏi localStorage
            localStorage.removeItem('loggedInReader');
            // Sau đó chuyển hướng người dùng về trang đăng nhập hoặc trang chính
            this.$router.push({ name: 'home' });
        }
    }
};
</script>