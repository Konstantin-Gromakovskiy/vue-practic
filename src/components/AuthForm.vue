<template>
  <v-card elevation="3" rounded="lg"  >
    <v-card-title class="text-center text-h4">Вход</v-card-title>
    <v-card-text>
      <v-form
        style="display: flex; flex-direction: column; align-items: center; gap: 1rem;"
        @submit.prevent="handleSubmit"
      >
        <v-text-field name="email" type="text" width="100%" label="Email"/>
        <v-text-field name="password" type="password" width="100%" label="Password"/>
        <v-btn type="submit" color="primary">Войти</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const handleSubmit = () => {

}
</script>
