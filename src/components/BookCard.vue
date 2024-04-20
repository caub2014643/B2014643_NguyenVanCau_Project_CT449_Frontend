<script>
export default {
    props: {
        book: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Mã sách:</strong>
            {{ book.masach }}
        </div>
        <div class="p-1">
            <strong>Tên sách:</strong>
            {{ book.tensach }}
        </div>
        <div class="p-1">
            <strong>Đơn giá:</strong>
            {{ book.dongia }} VND
        </div>
        <div class="p-1">
            <strong>Số quyển:</strong>
            {{ book.soquyen }}
        </div>
        <div class="p-1">
            <strong>Năm xuất bản:</strong>
            {{ book.namxuatban }}
            
        </div>
        <div class="p-1">
            <strong>Mã nhà xuất bản:</strong>
            {{ book.manxb }}
            
        </div>
    </div>
</template>