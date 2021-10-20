<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div
          class="
            col-sm-6 col-lg-7 col-xs-3 col-12
            border
            center-block
            bg-success
            m-auto m-top
            pd-5
          "
          style="height: 400px"
        >
          <div class="card mt-5">
            <!-- 头部标签 -->
            <div class="card-header bg-white h-50 border" style="height: 80px">
              <h3
                class="text-center mb-0 text-danger"
                style="height: 80px; line-height: 80px"
              >
                西部水泥大宗系统
              </h3>
            </div>
            <!-- 中间登录表单 -->
            <div class="card-body">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="用户名称" prop="username">
                  <el-input
                    type="text"
                    v-model="ruleForm.username"
                    autocomplete="on"
                    placeholder="请输入用户名称"
                  ></el-input>
                </el-form-item>
                <el-form-item label="用户密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="on"
                    placeholder="请输入用户密码"
                  ></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    placeholder="请输入确认密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <!-- 底部登录 -->
                  <el-button type="success" @click="login('ruleForm')"
                    >登录</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      ruleForm: {
        username: '',
        pass: '',
        checkPass: '',
      },
      // 校验规则
      rules: {
        // 用户名称校验
        username: [{ validator: this.validatorUsername, triggier: 'blur' }],
        // 用户密码校验
        pass: [{ validator: this.validatorPass, triggier: 'blur' }],
        // 用户确认密码校验
        checkPass: [{ validator: this.validatorCheckPass, triggier: 'blur' }],
      },
    }
  },
  methods: {
    login(value) {
      // 校验逻辑必须完善  否则校验会出现显示不执行的情况
      this.$refs[value].validate((value) => {
        if (value) {
          //  登录成功将数据放置于本地存储中
          let userInfo = {}
          userInfo = this.ruleForm
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
          // 登录之后进行home页面
          this.$message({
            type: 'success',
            message: '登录成功, 即将进入首页, 请稍后.....',
          })
          setTimeout(() => {
            this.$router.push({
              path: '/home',
              name: 'home',
            })
          }, 1000)
        } else {
          this.$message('输入有误')
        }
      })
    },
    // 用户名称校验 : 不能为空
    validatorUsername(rule, value, callback) {
      if (!value) {
        return callback(new Error('用户名称不能为空! 请输入用户名称'))
      } else {
        return callback()
      }
    },
    // 用户密码校验
    validatorPass(rule, value, callback) {
      if (!value) return callback(new Error('用户密码不能为空! 请输入用户密码'))
      //  设置正则校验密码 :
      let flag = /^\w{6,12}$/.test(value)
      if (flag) {
        return callback()
      } else {
        return callback(new Error('密码强度不够  请输入正确的密码强度'))
      }
    },
    // 确认密码校验  : 不能为空 必须和密码相同
    validatorCheckPass(rule, value, callback) {
      if (!value) {
        return callback(new Error('确认密码不能为空, 请输入...'))
      }
      if (value !== this.ruleForm.pass) {
        return callback(new Error('确认密码与登录密码不相符'))
      } else {
        return callback()
      }
    },
    // 重置按钮
    resetForm(val) {
      this.$refs[val].resetFields()
    },
  },
  mounted() {
    // 反显用户信息
    let userInfo = localStorage.getItem('userInfo')
    this.ruleForm = Object.assign(this.ruleForm, JSON.parse(userInfo))
    console.log(this.ruleForm)
  },
}
</script>
<style scoped>
body {
  padding: 0px;
  margin: 0px;
  background-color: red;
}
/* 当前login页面背景导航 */
#login {
  background-image: url('../../assets/afe42c70-9a1b-4e60-91a3-faf606f5993d.jpg');
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  padding-top: 150px;
}
.container {
  overflow: hidden;
}
.m-auto {
  margin: 0px auto;
  float: none;
}
</style>
