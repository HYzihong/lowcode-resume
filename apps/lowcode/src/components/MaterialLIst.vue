<!--
 * @Author: hy
 * @Date: 2022-05-27 23:13:27
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-29 19:52:16
 * @FilePath: /resume-cook/apps/lowcode/src/components/MaterialLIst.vue
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
-->
<template>
  <v-card :loading="loading" style="height: 100%">
    <v-card-title>素材库:</v-card-title>
    <!-- MaterialLIst -->
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(material, index) in materialList"
          :key="index"
          :cols="material.category.cols"
        >
          <v-card class="mx-auto">
            <v-img :src="material.thumbnail"></v-img>

            <v-card-title> {{ material.title }}</v-card-title>

            <!-- <v-card-subtitle> </v-card-subtitle> -->

            <v-card-actions>
              <!-- <v-list> -->
              <!-- <v-list-item>
                  <v-btn text>Share</v-btn>

                  <v-btn color="purple" text> Explore </v-btn>
                </v-list-item>
                <v-list-item>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-list-item> -->
              <!-- <v-btn icon @click="useMaterial.setShowAction(material.id)">
                  <v-icon>{{
                    material.isShow ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn> -->
              <!-- <v-list-item>
                  
                </v-list-item> -->
              <v-row justify="justify" style="width: 100%">
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon @click="useMaterial.setShowAction(material.id)">
                  <v-icon>{{
                    material.isShow ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-row>

              <!-- <v-spacer></v-spacer> -->
              <!-- <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon @click="useMaterial.setShowAction(material.id)">
                <v-icon>{{
                  material.isShow ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn> -->
              <!-- </v-list> -->
            </v-card-actions>

            <v-expand-transition>
              <div v-show="material.isShow">
                <v-divider></v-divider>

                <v-card-text>
                  {{ material.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- <v-card> -->
          <!-- <div></div> -->

          <!-- <div class="text-xs">{{ material.title }}</div> -->
          <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn x-small dark color="secondary">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn x-small dark color="secondary">
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>
              <v-btn x-small dark color="secondary">
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions> -->
          <!-- </v-card> -->
        </v-col>
      </v-row>
    </v-container>
    <!-- ./ MaterialLIst -->
  </v-card>
</template>
<script lang="ts" setup>
import { useMaterialStore } from "~/stores/material";
const useMaterial = useMaterialStore();
const materialList = useMaterial.materials;
const loading = ref(false);

// 列的默认占位 最大12
// const cols = ref(6);
// const cards = ref([
//   {
//     title: "Pre-fab homes",
//     src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
//     cols: 6,
//     // cols: 12,
//   },
//   {
//     title: "Favorite road trips",
//     src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
//     cols: 6,
//   },
//   {
//     title: "Best airlines",
//     src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
//     cols: 6,
//   },
// ]);
</script>
