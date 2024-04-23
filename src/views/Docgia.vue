<template>
    <div  class="page">
        <h1>Trang Đọc giả</h1>
        <DangnhapDG :docgia="docgia" :on-submit="submitDocgia"/>
        <p>{{ message }}</p>
    </div>
</template>
<script>
import DangnhapDG from "@/components/DangnhapDG.vue";
import DocgiaService from "@/services/docgia.service";

export default {
  components: {
    DangnhapDG,
  },
  
  data() {
    return {
      docgia: null,
      message: "",
    };
  },
  methods: {
    async submitDocgia(docgia) {
      this.docgia = docgia;
      try {
                const response = await DocgiaService.login(docgia.madocgia, docgia.dienthoai);
                if (response) {
                  alert(`Đăng nhập thành công`);
                    // Trong hàm login của controller sau khi xác thực thành công
                    const { docGia } = response; // Kết quả từ hàm login của service
                    localStorage.setItem('loggedInReader', JSON.stringify(docGia));
                    
                    this.$router.push({ name: "docgia" });
                } else {
                  //this.$router.push({ name: "docgia" });
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
