<template>
    <div v-if="nhaxuatban" class="page">
        <h4>Hiệu chỉnh thông tin nhà xuất bản</h4>
        <NhaXuatBanForm
            :nhaxuatban="nhaxuatban"
            @submit:nhaxuatban="updateNhaXuatBan"
            @delete:nhaxuatban="deleteNhaXuatBan"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import NhaXuatBanForm from "@/components/NxbForm.vue";
import NhaXuatBanService from "@/services/nxb.service";

export default {
    components: {
        NhaXuatBanForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            nhaxuatban: null,
            message: "",
        };
    },
    methods: {
        async getNhaXuatBan(id) {
            try {
                this.nhaxuatban = await NhaXuatBanService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateNhaXuatBan(data) {
            try {
                await NhaXuatBanService.update(this.nhaxuatban._id, data);
                this.message = "Thông tin nhà xuất bản được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },
        async deleteNhaXuatBan() {
            if (confirm("Bạn muốn xóa nhà xuất bản này?")) {
                try {
                    await NhaXuatBanService.delete(this.nhaxuatban._id);
                    this.$router.push({ name: "nxbmanager" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getNhaXuatBan(this.id);
        this.message = "";
    },
};
</script>