<template>
    
    <div v-if="docgia" class="page">
        <h4>Dăng ký</h4>
        <DocgiaForm :docgia="docgia" @submit:docgia="addDocgia" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import DocgiaForm from "@/components/DangkyForm.vue";
import DocgiaService from "@/services/docgia.service";

export default {
    components: {
        DocgiaForm,
    },
    data() {
        return {
            docgia: {},
            message: "",
        };
    },
    methods: {

        async addDocgia(data) {
            try {
                await DocgiaService.create(data);
                this.message = "Thông tin đọc giả mới được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },

    },
};
</script>