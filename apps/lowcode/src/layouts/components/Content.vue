<!--
 * @Author: hy
 * @Date: 2022-05-26 23:27:37
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-27 23:05:54
 * @FilePath: /resume-cook/apps/lowcode/src/layouts/components/Content.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div bg-slate-400 flex style="min-height: 84vh">
    <Menu class="min-w-1/6 bg-red-300" />
    <main class="min-w-4/6 bg-blue-400">
      <RouterView />
    </main>
    <Menu class="min-w-1/6 bg-red-300" />
  </div>
</template>
<script lang="ts" setup></script>
