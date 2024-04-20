<template>
    <Form @submit="submitBook" :validation-schema="bookFormSchema">
        <div class="form-group">
            <label for="masach">Mã sách</label>
            <Field name="masach" type="text" class="form-control" placeholder="Nhập vào mã sách ví dụ: b00001" v-model="bookLocal.masach" />
            <ErrorMessage name="masach" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="tensach">Tên sách</label>
            <Field name="tensach" type="text" class="form-control" placeholder="Nhập vào tên của sách" v-model="bookLocal.tensach" />
            <ErrorMessage name="tensach" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="dongia">Đơn giá</label>
            <Field name="dongia" type="text" class="form-control" placeholder="Nhập vào giá cho quyển sách là số nguyên" v-model="bookLocal.dongia" />
            <ErrorMessage name="dongia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="soquyen">Số quyển</label>
            <Field name="soquyen" type="number" class="form-control" placeholder="Nhập vào số quyển sách" v-model="bookLocal.soquyen" />
            <ErrorMessage name="soquyen" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="namxuatban">Năm xuất bản</label>
            <Field name="namxuatban" type="number" class="form-control" placeholder="Nhập vào năm xuất bản của sách" v-model="bookLocal.namxuatban" />
            <ErrorMessage name="namxuatban" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="manxb">Mã nhà xuất bản</label>
            <Field name="manxb" type="text" class="form-control" placeholder="Nhập vào mã nhà xuát bản của sách" v-model="bookLocal.manxb" />
            <ErrorMessage name="manxb" class="error-feedback" />
        </div>

        <div class="form-group">
            <button class="btn btn-primary" @click="submitBook">Lưu</button>
            <button v-if="bookLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteBook">
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:book", "delete:book"],
    props: {
        book: { type: Object, required: true }
    },
    data() {
        const bookFormSchema = yup.object().shape({
            masach: yup
                .string()
                .matches(/^b[0-9]{5}$/, "Mã sách phải bắt đầu bằng 'b' và theo sau là 5 chữ số.")
                .required("Mã sách phải bắt đầu bằng b (Ví dụ b00001).")
                .min(6, "Mã sách phải có 6 ký tự.")
                .max(6, "Mã sách phải có 6 ký tự."),
            tensach: yup
                .string()
                .required("Tên sách phải có giá trị.")
                .min(3, "Tên sách phải có ít nhất 3 ký tự.")
                .max(100, "Tên sách có tối đa 100 ký tự."),
            dongia: yup
                .number()
                .min(10000, "Đơn giá có ít nhất 5 con số.")
                .max(100000000000, "Đơn giá có tối đa 12 con số."),
            soquyen: yup
                .number()
                .integer("Số quyển sách phải là số nguyên.")
                .min(1, "Sách phải có ít nhất một quyển cho một mã sách.")
                .max(500, "Sách có tối đa 500 quyển cho một mã sách"),
            namxuatban: yup
                .number()
                .integer("Năm xuất bản phải là số nguyên.")
                .min(1000, "Năm xuất bản phải có 4 chữ số.")
                .max(9999, "Năm xuất bản phải có 4 chữ số."),
            manxb: yup
                .string()
                .matches(/^nxb[0-9]{3}$/, "Mã sách phải bắt đầu bằng 'nxb' và theo sau là 3 chữ số.")
                .required("Mã nhà xuất bản phải bắt đầu bằng nxb (Ví dụ nxb001).")
                .min(6, "Mã sách phải có 6 ký tự.")
                .max(6, "Mã sách phải có 6 ký tự."),

        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // bookLocal để liên kết với các input trên form
            bookLocal: this.book,
            bookFormSchema,
        };
    },
    methods: {
        submitBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deleteBook() {
            this.$emit("delete:book", this.bookLocal.id);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>