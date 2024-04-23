<template>
    <Form @submit="submitDocgia" :validation-schema="docgiaFormSchema">
        <div class="form-group">
            <label for="madocgia">Tên đăng nhập</label>
            <Field name="madocgia" type="text" class="form-control" placeholder="Nhập vào tên dùng để đăng nhập cho bạn"
                v-model="docgiaLocal.madocgia" />
            <ErrorMessage name="madocgia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="holot">Họ lót</label>
            <Field name="holot" type="text" class="form-control" placeholder="Nhập vào họ lót của bạn. Ví dụ Nguyễn Văn"
                v-model="docgiaLocal.holot" />
            <ErrorMessage name="holot" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ten">Tên</label>
            <Field name="ten" type="text" class="form-control" placeholder="Nhập vào tên của bạn"
                v-model="docgiaLocal.ten" />
            <ErrorMessage name="ten" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ngaysinh">Ngày sinh</label>
            <Field name="ngaysinh" type="text" class="form-control" placeholder="Nhập vào ngày sinh của bạn"
                v-model="docgiaLocal.ngaysinh" />
            <ErrorMessage name="ngaysinh" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="phai">Giới tính</label>
            <Field name="phai" type="text" class="form-control" placeholder="Nhập vào giới tính của bạn"
                v-model="docgiaLocal.phai" />
            <ErrorMessage name="phai" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="diachi">Địa chỉ</label>
            <Field name="diachi" type="text" class="form-control" placeholder="Nhập vào địa chỉ của bạn"
                v-model="docgiaLocal.diachi" />
            <ErrorMessage name="diachi" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="dienthoai">Điện thoại</label>
            <Field name="dienthoai" type="text" class="form-control" placeholder="Nhập vào số điện thoại của bạn"
                v-model="docgiaLocal.dienthoai" />
            <ErrorMessage name="dienthoai" class="error-feedback" />
        </div>

        <div class="form-group">
            <button class="btn btn-primary" @click="submitDocgia">Đăng ký</button>
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
    emits: ["submit:docgia"],
    props: {
        docgia: { type: Object, required: true }
    },
    data() {
        const docgiaFormSchema = yup.object().shape({
            madocgia: yup
                .string()
                .required("Tên đăng nhập phải có giá trị .")
                .min(7, "Mã sách phải có 6 ký tự.")
                .max(20, "Mã sách phải có 20 ký tự."),
            holot: yup
                .string()
                .required("Họ và tên lót phải có giá trị.")
                .min(2, "Họ và tên lót phải có ít nhất 2 ký tự.")
                .max(25, "Họ và tên lót có tối đa 25 ký tự."),
            ten: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải có ít nhất 2 ký tự.")
                .max(15, "Tên có tối đa 15 ký tự."),
            ngaysinh: yup
                .string()
                .required(
                    "Ngày sinh không hợp lệ. Vui lòng nhập theo định dạng dd/mm/yyyy"
                ),
            phai: yup
                .string()
                .min(2, "Giới tính có tối thiểu 2 ký tự")
                .max(3, "Giới tính có tối đa 3 ký tự"),
            diachi: yup
                .string()
                .max(100, "Địa chỉ tối đa 100 ký tự."),
            dienthoai: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),

        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // bookLocal để liên kết với các input trên form
            docgiaLocal: this.docgia,
            docgiaFormSchema,
        };
    },
    methods: {
        submitDocgia() {
            this.$emit("submit:docgia", this.docgiaLocal);
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>