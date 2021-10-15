
<template>
  <div id="login">
    <!-- 标题 -->
    <div class="title">
      <div class="logo">
        <img src="../../assets/mainLogo.jpeg" alt="西部水泥" />
      </div>
      西部水泥大宗操作系统
    </div>
    <!-- 登录表单 -->
    <div class="loginForm">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="on"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="on"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="上级口令" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      // 表单元素
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        username: "",
      },
      // 校验规则
      rules: {
        // 名称校验规则
        username: [
          {
            validator: this.validateUsername,
            triggier: "blur",
            type: String,
          },
        ],
        // 密码校验规则
        pass: [
          {
            validator: this.validatePass1,
            triggier: "blur",
            type: "string",
          },
        ],
        checkPass: [
          {
            validator: this.validatePass1,
            triggier: "blur",
            type: "string",
          },
          {
            validator: this.validatePass2,
            triggier: "blur",
            type: "string",
          },
        ],
      },
    };
  },
  methods: {
    // 密码校验1
    validatePass1(rule, value, callback) {
      if (value == "") {
        callback(new Error("请输入密码"));
      } else {
        let reg =
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,20}$/;
        if (reg.test(value)) {
          callback();
        } else {
          callback(
            new Error("请输入正确格式的密码(8-20位,可包含字母数据特殊符号)")
          );
        }
      }
    },
    // 确认密码
    validatePass2(rule, value, callback) {
      if (this.ruleForm.pass == "") {
        callback("请先输入密码");
      } else if (value == "") {
        callback(new Error("确认密码不能为空"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("前后两次密码不一致,请重新输入"));
      } else {
        callback();
      }
    },
    // 名称校验
    validateUsername(rule, value, callback) {
      if (!this.ruleForm.username) {
        callback(new Error("名称不能为空"));
      } else {
        callback();
      }
    },
    // 提交校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid);
          // 设置本地存储
          let userInfo = {
            username: this.ruleForm.username,
            pass: this.ruleForm.pass,
            age: this.ruleForm.age,
          };
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置校验 输入条件
    resetForm(formName) {
      this.$refs[formName].resetFields();
      console.log(this.ruleForm); //方法重置会重置对象
    },
  },
};
</script>

<style  scoped lang='scss'>
#login {
  width: 100%;
  height: 100%;
  // background-color: #ff1;
  background-color: #fff;
  overflow: hidden;
  .title {
    position: relative;
    margin: 150px 0px 40px 0px;
    font-size: 30px;
    font-weight: bold;
    .logo img {
      width: 50px;
      height: 50px;
      // opacity:;
      transform: scale(2);
      position: absolute;
      opacity: 0;
      z-index: 1;
    }
  }
  .loginForm {
    margin: 0px 350px;
  }
}
</style>
