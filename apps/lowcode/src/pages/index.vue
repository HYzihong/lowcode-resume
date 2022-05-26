<!--
 * @Author: hy
 * @Date: 2022-05-26 23:36:48
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-26 23:36:50
 * @FilePath: /resume-cook/apps/lowcode/src/pages/1.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->

<script setup lang="ts">
// import { useUserStore } from "~/stores/user";

// const user = useUserStore();
// const name = $ref(user.savedName);

// const router = useRouter();
// const go = () => {
//   if (name) router.push(`/hi/${encodeURIComponent(name)}`);
// };

// const { t } = useI18n();

//
const src = ref("../../public/pwa-192x192.png");
</script>

<template>
  <div flex items-center justify-center>
    <rc-image w-10 :src="src" />
  </div>
  <div>
    <!-- <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div> -->
    <!-- <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
      >
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t("intro.desc") }}</em>
    </p> -->

    <!-- <div py-4 /> -->

    <!-- <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t("intro.whats-your-name") }}</label>

    <div>
      <button btn m-3 text-sm :disabled="!name" @click="go">
        {{ t("button.go") }}
      </button>
    </div> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
