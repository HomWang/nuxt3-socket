<script setup lang="ts">
import { io } from 'socket.io-client'
const socket = io();
const connected = ref(false)
const msg = ref('')
const getMsg = ref('')
const hello = ref('')
onMounted(() => {
  socket.on('connect', () => {
    connected.value = socket.connected
  });
  socket.on('disconnect', () => {
    connected.value = socket.connected
  });
  socket.on('hello', function (data) {
    hello.value = data
    // socket.emit('my other event', { my: 'data' });
  });
  socket.on('msg', function (data) {
    getMsg.value = data
    // socket.emit('my other event', { my: 'data' });
  });
})

const sendMsg = () => {
  socket.emit('msg', msg.value)
}
</script>
  
<template>
  <div>
    <div>Connected: {{ connected }}</div>
    <div>{{ hello }}</div>
    <input type="text" v-model="msg">
    <button @click="sendMsg">Send msg</button>
    <div>Get msg: {{ getMsg }}</div>
  </div>
</template>
