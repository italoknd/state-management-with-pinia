<script setup lang="ts">
import { ref } from "vue";
import { useUser } from "../store/modules/userStore/useUser";
import { User } from "../interfaces/userInterfaces/user";
import { Address } from "../interfaces/userInterfaces/userAddress";

//VARIABLES
const userStore = useUser();
const user_info = ref<User>({
  name: "",
  age: 0,
  address: {} as Address,
});

//FUNCTIONS
const updateUserInfo = ():void =>{
    userStore.updateUserInfos(user_info.value)
}
</script>

<template>
  <div>
    <input type="text" v-model="user_info.name" />
    <input type="text" v-model="user_info.age" />
    <input type="text" v-model="user_info.address.country" />
    <input type="text" v-model="user_info.address.state" />
    <input type="text" v-model="user_info.address.city" />
    <input type="text" v-model="user_info.address.neighborhood" />
    <input type="text" v-model="user_info.address.street" />
    <input type="text" v-model="user_info.address.house_number" />
    <input type="text" v-model="user_info.address.complement" />
    <button @click="updateUserInfo()">Enviar informações</button>
  </div>
</template>

<style scoped></style>
