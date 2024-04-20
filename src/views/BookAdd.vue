<template>
    <div v-if="book" class="page">
        <h4>Thêm sách mới</h4>
        <BookForm :book="book" @submit:book="addBook" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import BookService from "@/services/book.service";

export default {
    components: {
        BookForm,
    },
    data() {
        return {
            book: {},
            message: "",
        };
    },
    methods: {

        async addBook(data) {
            try {
                await BookService.create(data);
                this.message = "Thông tin sách mới được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },

    },
};
</script>