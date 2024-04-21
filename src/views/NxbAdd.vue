<template>
    <div v-if="nhaxuatban" class="page">
        <h4>Thêm nhà xuất bản mới</h4>
        <NhaXuatBanForm :nhaxuatban="nhaxuatban" @submit:nhaxuatban="addNhaXuatBan" />
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
    data() {
        return {
            nhaxuatban: {},
            message: "",
        };
    },
    methods: {

        async addNhaXuatBan(data) {
            try {
                await NhaXuatBanService.create(data);
                this.message = "Thông tin nhà xuất bản mới được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },

    },
};
</script>