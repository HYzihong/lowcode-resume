<!--
 * @Author: hy
 * @Date: 2022-05-22 10:46:08
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-22 10:55:01
 * @FilePath: /resume-cook/packages/image/src/index.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div>
    img
    <img :src="src" :alt="des" />
  </div>
</template>
<script lang="ts" setup>
const { src, des } = defineProps<{
  src: string;
  des: string;
}>();
</script>
