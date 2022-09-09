<script setup lang="ts">
import { io } from 'socket.io-client'
const socket = io();
const connected = ref(false)
const msg = ref('')
const getIp = ref('')
const getMsg = ref([])
const hello = ref({ hello: '' })
onMounted(() => {
  socket.on('connect', () => {
    connected.value = socket.connected
  });
  socket.on('disconnect', () => {
    connected.value = socket.connected
  });
  socket.on('getIP', function (data) {
    getIp.value = data
    // socket.emit('my other event', { my: 'data' });
  });
  socket.on('hello', function (data) {
    hello.value = data
    // socket.emit('my other event', { my: 'data' });
  });
  socket.on('msg', function (data) {
    getMsg.value.push(data)
    // socket.emit('my other event', { my: 'data' });
  });
})

const sendMsg = () => {
  socket.emit('msg', {user: `User Address ${getIp.value}:`, text: `${msg.value}`})
  msg.value = ''
}

</script>
  
<template>
  <div class="max-w-1000px mx-auto">
    <div class="flex items-center justify-between py-4">
      <div>Chat connected: {{ connected }}</div>
      <div>{{ hello.hello }}</div>
      <div>Address IP: {{ getIp }}</div>
    </div>
    <div>
      <div class="bg-[#003543] p-4 rounded-t">Message list</div>
      <div class="bg-[#012a35] p-4 rounded-b space-y-2">
        <div v-for="(item, index) in getMsg" :key="index">
          <div class="flex items-center justify-between text-xs">
            <div>{{item.user.user}}</div>
            <div>{{item.time}}</div>
          </div>
          <div class="text-[#bae6fd] text-base">{{item.user.text}}</div>
        </div>
        <div v-if="!getMsg.length" class="text-center">Not data</div>
      </div>
    </div>
    <div class="flex items-center mt-3">
      <w-input v-model="msg" @keyup.enter="sendMsg" class="flex-1"></w-input>
      <w-button @click="sendMsg" size="default">Send msg</w-button>
    </div>
  </div>
</template>
