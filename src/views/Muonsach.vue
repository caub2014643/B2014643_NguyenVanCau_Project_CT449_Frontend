<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Sách đã mượn
                <i class="fas fas fa-history"></i>
            </h4>
            <MuonsachList v-if="filteredMuonsachsCount > 0" :muonsachs="filteredMuonsachs" v-model:activeIndex="activeIndex" />
            <p v-else>Không có sách nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeMuonsach">
                <h4>
                    Chi tiết Sách
                    <i class="fas fas fa-book-open"></i>
                </h4>
                <MuonsachCard :muonsach="activeMuonsach" />
                
                <button class="btn btn-danger mt-2">
                     Trả sách
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import MuonsachCard from "@/components/MuonsachCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import MuonsachList from "@/components/MuonsachList.vue";
import MuonsachService from "@/services/muonsach.service";
export default {
    components: {
        MuonsachCard,
        InputSearch,
        MuonsachList,
    },
    data() {
        return {
            muonsachs: [],
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
        // Chuyển các đối tượng book thành chuỗi để tiện cho tìm kiếm.
        muonsachStrings() {
            return this.muonsachs.map((muonsach) => {
                const { madocgia, masach, ngaymuon, ngaytra } = muonsach;
                return [madocgia, masach, ngaymuon, ngaytra].join("");
            });
        },
        // Trả về các book có chứa thông tin cần tìm kiếm.
        filteredMuonsachs() {
            if (!this.searchText) return this.muonsachs;
            return this.muonsachs.filter((_muonsach, index) =>
                this.muonsachStrings[index].includes(this.searchText)
            );
        },
        activeMuonsach() {
            if (this.activeIndex < 0) return null;
            return this.filteredMuonsachs[this.activeIndex];
        },
        filteredMuonsachsCount() {
            return this.filteredMuonsachs.length;
        },
    },
    methods: {
        async retrieveMuonsachs() {
    try {
        this.muonsachs = await MuonsachService.getAll();
    } catch (error) {
        alert(`Không tìm được lịch sử!`);
        console.log(error);
    }
},

        refreshList() {
            this.retrieveMuonsachs();
            this.activeIndex = -1;
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