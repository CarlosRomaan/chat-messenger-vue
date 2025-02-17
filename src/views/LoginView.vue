<template>
  <div class="w-full">
    <div class="bg-teal-600 z-[-1] w-full h-[225px] fixed top-0"></div>
    <div class="bg-[#191919] z-[-1] w-full h-[calc(100vh-225px)] fixed bottom-0"></div>

    <div class="max-w-xl mx-auto">
      <div class="mt-10 w-full flex items-center justify-center">
        <img width="40" src="/logo.png" alt="">
        <div class="font-semibold text-gray-100 text-2xl ml-6">Chat Messenger</div>
      </div>

      <div class="bg-white z-10 p-24 m-6 mt-10">
        <div class="text-center text-4xl text-gray-700 font-light pb-10">
          Iniciar Sesión
        </div>
        <div class="w-full flex justify-center p-3 rounded-md">
          <GoogleLogin :callback="callback" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user-store";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();

const callback = async (response) => {
  await userStore.getUserDetailsFromGoogle(response);
  setTimeout(() => { router.push("/") }, 200);
}
</script>