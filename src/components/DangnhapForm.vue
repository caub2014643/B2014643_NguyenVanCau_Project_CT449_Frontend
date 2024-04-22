<template>
    <Form @submit="submitForm" :validation-schema="nhanvienFormSchema">
        <div class="form-group">
            <label for="sodienthoai">Số điện thoại</label>
            <Field name="sodienthoai" type="text" class="form-control" placeholder="Nhập vào số điện thoại của bạn"
                autocomplete="tel" />
            <ErrorMessage name="sodienthoai" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" placeholder="Nhập vào mật khẩu của bạn"
                autocomplete="current-password" @keydown.enter="submitForm" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
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
    emits: ["submit:nhanvien"],
    props: {
        nhanvien: { type: Object, default: () => ({}) }
    },
    data() {
        return {
            nhanvienFormSchema: yup.object().shape({
                sodienthoai: yup.string().matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "Số điện thoại không hợp lệ."),
                password: yup.string().required(""),
            }),
            nhanvienLocal: this.nhanvien,
        };
    },
    methods: {
        async submitForm() {
            this.$emit("submit:nhanvien", this.nhanvienLocal);
        },
    },
};
</script>
