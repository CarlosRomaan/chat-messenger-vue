<template>
  <div class="flex">
    <div id="Header" class="fixed w-[420px] z-10">

      <div class="bg-[#191919] w-full flex justify-between items-center px-3 py-2">
        <img class="rounded-full ml-1 w-10" :src="userStore.picture || ''" alt="">
        <div class="flex items-center justify-center">
          <LogoutIcon @click="logout" fillColor="#fff" class=" cursor-pointer" />
        </div>
      </div>

      <div id="Search" class="bg-white w-full px-2 border-b shadow-sm">
        <div class="px-1 m-2 bg-[#F0F0F0] flex items-center justify-center rounded-md">
          <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
          <input 
            @click="showFindFriends = !showFindFriends" 
            type="text"
            autocomplete="off" 
            placeholder="Iniciar un nuevo chat"
            class="ml-5 apperance-none w-full bg-[#F0F0F0] py-1.5 px-2.5 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500" 
          />
        </div>
      </div>
    </div>

    <div v-if="showFindFriends">
      <FindFriendsView class="pt-28" />
    </div>
    <div v-else>
      <ChatsView class="mt-[100px]" />
    </div>

    <div v-if="userDataForChat.length">
      <MessageView />
    </div>
    <div v-else>
      <div class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center">
        <div class="grid h-screen place-items-center">
          <div>
            <div class="w-full flex items-center justify-center">
              <img width="375" src="/load-chat.png" alt="loaded">
            </div>
            <div class="text-[32px] text-gray-500 font-light mt-10">Chat Messenger</div>
            <div class="text-[14px] text-gray-600 mt-2">
              <div>Envía y recibe mensajes sin necesidad de tener tu teléfono.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChatsView from "./ChatsView.vue";
import MessageView from "./MessageView.vue";
import FindFriendsView from "./FindFriendsView.vue";

import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import LogoutIcon from "vue-material-design-icons/Logout.vue";

import { ref, onMounted } from "vue";

import { useUserStore } from "@/store/user-store";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const router = useRouter();
const userStore = useUserStore();
const { showFindFriends, userDataForChat } = storeToRefs(userStore);

onMounted(async () => {
  try {
    userStore.getAllUsers();
    await userStore.getAllChatsByUser();

  } catch (error) {
    console.log(error);
  }
})

const logout = () => {
  let res = confirm("¿Seguro que deseas cerrar sesión?");
  if (res) { 
    userStore.logout(); router.push("/login");
  }
}
</script>