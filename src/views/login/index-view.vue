<template>
  <div class="page">
    <div class="container">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div class="title">欢迎使用</div>
            <div class="desc">Vite4.x + Vue3.x + TypeScript + ElementPlus</div>
          </div>
        </template>
        <div class="card-form">
          <el-form ref="ruleFormRef" :model="form" :rules="rules">
            <el-form-item prop="username">
              <el-input v-model="form.username" placeholder="请输入账号 admin">
                <template #prefix>
                  <el-icon><User /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="form.password"
                placeholder="请输入密码 123456"
                type="password"
                show-password
              >
                <template #prefix>
                  <el-icon><Lock /></el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :loading="loading" @click="onLogin">登 录</el-button>
              <el-button @click="onReset">重 置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

defineOptions({
  name: 'LoginView',
})

const ruleFormRef = ref<FormInstance>()
const rules = ref<FormRules>({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})

interface Form {
  username: string
  password: string
}
const form = reactive<Form>({
  username: '',
  password: '',
})

const loading = ref(false)
const onLogin = () => {
  loading.value = true
  ruleFormRef.value!.validate(valid => {
    console.log(valid)
    loading.value = false
    if (valid) {
      // 登录成功
      ElMessage({
        message: '登录成功',
        type: 'success',
      })
    } else {
      // 登录失败
      ElMessage({
        message: '登录失败',
        type: 'error',
      })
    }
  })
}

const onReset = () => {
  ruleFormRef.value!.resetFields()
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  min-height: 100vh;
  background-color: #efefef;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 360px;
    transform: translate(-50%, -50%);
  }

  .card-header {
    .title {
      font-size: 24px;
      font-weight: bold;
      color: #409eff;
    }

    .desc {
      font-size: 12px;
      color: #909399;
    }
  }
}
</style>
