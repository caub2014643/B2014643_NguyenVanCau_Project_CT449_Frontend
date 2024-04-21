<script>
export default {
    props: {
        nhaxuatban: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Mã nhà xuất bản:</strong>
            {{ nhaxuatban.manxb }}
        </div>
        <div class="p-1">
            <strong>Tên nhà xuất bản:</strong>
            {{ nhaxuatban.tennxb }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ nhaxuatban.diachi }}
        </div>
    </div>
</template>