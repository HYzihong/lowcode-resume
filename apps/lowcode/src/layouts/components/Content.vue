<!--
 * @Author: hy
 * @Date: 2022-05-26 23:27:37
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-28 12:21:44
 * @FilePath: /resume-cook/apps/lowcode/src/layouts/components/Content.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <div bg-slate-400 flex style="min-height: 84vh">
    <!-- TODO 可折叠 -->
    <Menu class="min-w-3/12 mx-1">
      <MaterialLIst />
    </Menu>
    <main class="min-w-7/12 bg-blue-400 p-1">
      <RouterView />
    </main>
    <!-- TODO 可折叠 -->
    <Menu class="min-w-2/6 mx-1">
      <ActionsList />
    </Menu>
  </div>
</template>
<script lang="ts" setup></script>
