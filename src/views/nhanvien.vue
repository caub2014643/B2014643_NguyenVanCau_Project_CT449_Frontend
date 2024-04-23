<template>
    <div  class="page">
        <h1>Trang Nhân viên</h1>
        <DangnhapForm :nhanvien="nhanvien" :on-submit="submitNhanvien"/>
        <p>{{ message }}</p>
    </div>
</template>
<script>
import DangnhapForm from "@/components/DangnhapForm.vue";
import NhanvienService from "@/services/nhanvien.service";

export default {
  components: {
    DangnhapForm,
  },
  
  data() {
    return {
      nhanvien: null,
      message: "",
    };
  },
  methods: {
    async submitNhanvien(nhanvien) {
      this.nhanvien = nhanvien;
      try {
                const response = await NhanvienService.login(nhanvien.sodienthoai, nhanvien.password);
                if (response) {
                  alert(`Đăng nhập thành công`);
                    // Trong hàm login của controller sau khi xác thực thành công
                    const { nhanVien } = response; // Kết quả từ hàm login của service
                    localStorage.setItem('loggedInUser', JSON.stringify(nhanVien));
                    //const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
                    
                    this.$router.push({ name: "nxbmanager" });
                } else {
                  //this.$router.push({ name: "nxbmanager" });
                    alert("Mật khẩu không đúng. Vui lòng thử lại");
                }
            } catch (error) {
                console.error("Đã xảy ra lỗi khi xác thực người dùng:", error);
                alert("Đã xảy ra lỗi khi xác thực người dùng. Vui lòng thử lại sau");
            }
    },
  },
};
</script>
