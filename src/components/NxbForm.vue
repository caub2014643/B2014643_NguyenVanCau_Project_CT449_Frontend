<template>
    <Form @submit="submitNhaXuatBan" :validation-schema="nhaxuatbanFormSchema">
        <div class="form-group">
            <label for="manxb">Mã nhà xuất bản</label>
            <Field name="manxb" type="text" class="form-control" placeholder="Nhập vào mã nhà xuất bản ví dụ: nxb001"
                v-model="nhaxuatbanLocal.manxb" />
            <ErrorMessage name="manxb" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="tennxb">Tên nhà xuất bản</label>
            <Field name="tennxb" type="text" class="form-control" placeholder="Nhập vào tên của sách"
                v-model="nhaxuatbanLocal.tennxb" />
            <ErrorMessage name="tennxb" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="diachi">Địa chỉ</label>
            <Field name="diachi" type="text" class="form-control" placeholder="Nhập vào giá cho quyển sách là số nguyên"
                v-model="nhaxuatbanLocal.diachi" />
            <ErrorMessage name="diachi" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary" @click="submitNhaXuatBan">Lưu</button>
            <button v-if="nhaxuatbanLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteNhaXuatBan">
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
    emits: ["submit:nhaxuatban", "delete:nhaxuatban"],
    props: {
        nhaxuatban: { type: Object, required: true }
    },
    data() {
        const nhaxuatbanFormSchema = yup.object().shape({
            manxb: yup
                .string()
                .matches(/^nxb[0-9]{3}$/, "Mã nhà xuất bản phải bắt đầu bằng 'nxb' và theo sau là 3 chữ số.")
                .required("Mã nhà xuất bản phải bắt đầu bằng nxb (Ví dụ nxb001).")
                .min(6, "Mã sách phải có 6 ký tự.")
                .max(6, "Mã sách phải có 6 ký tự."),
            tennxb: yup
                .string()
                .required("Tên nhà xuất bản phải có giá trị.")
                .min(3, "Tên nhà xuất bản phải có ít nhất 3 ký tự.")
                .max(100, "Tên nhà xuất bản có tối đa 100 ký tự."),
            diachi: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),


        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // nhaxuatbanLocal để liên kết với các input trên form
            nhaxuatbanLocal: this.nhaxuatban,
            nhaxuatbanFormSchema,
        };
    },
    methods: {
        submitNhaXuatBan() {
            this.$emit("submit:nhaxuatban", this.nhaxuatbanLocal);
        },
        deleteNhaXuatBan() {
            this.$emit("delete:nhaxuatban", this.nhaxuatbanLocal.id);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>