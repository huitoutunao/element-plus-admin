<template>
  <div class="wrapper">
    <div class="content">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <div class="title">欢迎使用</div>
            <div class="desc">Vite4.x + ElementPlus + Vue3.x + TypeScript</div>
          </div>
        </template>
        <div class="card-form">
          <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="账 号" prop="username">
              <el-input v-model="form.username" placeholder="请输入账号 admin" />
            </el-form-item>
            <el-form-item label="密 码" prop="password">
              <el-input
                v-model="form.password"
                placeholder="请输入密码 123456"
                type="password"
                show-password
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSignIn(ruleFormRef)">登 录</el-button>
              <el-button @click="onSignUp">注 册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage, ElLoading } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const form = ref({
  username: '',
  password: '',
})

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

// 登录
const onSignIn = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
  formEl.validate((valid) => {
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

// 注册
const onSignUp = () => {
  console.log('注册')
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  min-height: 100vh;
  background-color: #efefef;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 480px;
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
