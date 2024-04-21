<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Nhà xuất bản
                <i class="fas fas fa-building"></i>
            </h4>
            <NhaXuatBanList v-if="filteredNhaXuatBansCount > 0" :nhaxuatbans="filteredNhaXuatBans" v-model:activeIndex="activeIndex" />
            <p v-else>Không có nhà xuất bản nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                <button class="btn btn-sm btn-success" @click="goToAddNhaXuatBan">
                    <i class="fas fa-plus"></i> Thêm mới
                </button>
                <button class="btn btn-sm btn-danger" @click="removeAllNhaXuatBans">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeNhaXuatBan">
                <h4>
                    Chi tiết Nhà Xuất Bản
                    <i class="fas fa-building"></i>
                </h4>
                <NhaXuatBanCard :nhaxuatban="activeNhaXuatBan" />
                <router-link :to="{
                    name: 'nhaxuatban.edit',
                    params: { id: activeNhaXuatBan._id },
                }">
                    <button class="mt-2 btn btn-warning">
                        <i class="fas fa-edit"></i> Hiệu chỉnh</button>
                </router-link>
                <button class="btn btn-danger mt-2" @click="removeNhaXuatBans(activeNhaXuatBan._id)">
                    <i class="fas fa-trash"></i> Xóa
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import NhaXuatBanCard from "@/components/NxbCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import NhaXuatBanList from "@/components/NxbList.vue";
import NhaXuatBanService from "@/services/nxb.service";
export default {
    components: {
        NhaXuatBanCard,
        InputSearch,
        NhaXuatBanList,
    },
    data() {
        return {
            nhaxuatbans: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng nhaxuatban thành chuỗi để tiện cho tìm kiếm.
        nhaxuatbanStrings() {
            return this.nhaxuatbans.map((nhaxuatban) => {
                const { manxb, tennxb, diachi} = nhaxuatban;
                return [manxb, tennxb, diachi].join("");
            });
        },
        // Trả về các nhaxuatban có chứa thông tin cần tìm kiếm.
        filteredNhaXuatBans() {
            if (!this.searchText) return this.nhaxuatbans;
            return this.nhaxuatbans.filter((_nhaxuatban, index) =>
                this.nhaxuatbanStrings[index].includes(this.searchText)
            );
        },
        activeNhaXuatBan() {
            if (this.activeIndex < 0) return null;
            return this.filteredNhaXuatBans[this.activeIndex];
        },
        filteredNhaXuatBansCount() {
            return this.filteredNhaXuatBans.length;
        },
    },
    methods: {
        async retrieveNhaXuatBans() {
            try {
                this.nhaxuatbans = await NhaXuatBanService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveNhaXuatBans();
            this.activeIndex = -1;
        },
        async removeAllNhaXuatBans() {
            if (confirm("Bạn muốn xóa tất cả sách?")) {
                try {
                    await NhaXuatBanService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        }, async removeNhaXuatBans(nhaxuatbanId) {
            if (confirm("Bạn muốn xóa sách này?")) {
                try {
                    await NhaXuatBanService.delete(nhaxuatbanId);
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        goToAddNhaXuatBan() {
            this.$router.push({ name: "nhaxuatban.add" });
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>