<template>
   
        <Form @submit="submitForm" :validation-schema="docgiaFormSchema">
        <div class="form-group">
            <label for="madocgia">Tên đăng nhập</label>
            <Field name="madocgia" type="text" class="form-control" placeholder="Nhập vào tên đăng nhập của bạn"
                autocomplete="tel" />
            <ErrorMessage name="madocgia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" placeholder="Nhập số điện thoại bạn đã đăng ký"
                autocomplete="current-password" @keydown.enter="submitForm" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </div>
        <div><p>Nếu bạn chưa có tài khoản, vui lòng <router-link :to="{ name: 'dangky' }">đăng ký</router-link>.</p></div>
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
        docgia: { type: Object, default: () => ({}) }
    },
    data() {
        return {
            docgiaFormSchema: yup.object().shape({
                madocgia: yup.string().required("Tên đăng nhập phải có giá trị"),
                password: yup.string().required(""),
            }),
            docgiaLocal: this.docgia,
        };
    },
    methods: {
        async submitForm() {
            this.$emit("submit:docgia", this.docgiaLocal);
        },
    },
};
</script>
