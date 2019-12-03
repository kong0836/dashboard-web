<template>
  <div class="login">
    <div class="login-content">
      <div class="login-header">
        <h2 class="login-brand">云深不知处</h2>
      </div>
      <div class="login-main">
        <h3 class="login-title">登 录</h3>
        <el-form :model="loginForm"
                 :rules="loginRule"
                 ref="loginForm"
                 status-icon
                 @keyup.enter.native="loginClick">
          <el-form-item>
            <el-select placement="bottom-start"
                       trigger="click"
                       style="width: 100%;"
                       v-model="language">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="userName">
            <el-input v-model="loginForm.userName"
                      placeholder="用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password"
                      type="password"
                      placeholder="密码">
            </el-input>
          </el-form-item>
          <el-form-item prop="captcha">
            <el-row :gutter="20" style="margin: 0 -10px">
              <el-col :span="14">
                <el-input v-model="loginForm.captcha"
                          placeholder="验证码">
                </el-input>
              </el-col>
              <el-col :span="10"
                      class="login-captcha">
                <img :src="captchaPath"
                     class="login-captcha"
                     @click="getCaptcha"
                     alt="验证码">
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button class="login-button"
                       type="primary"
                       @click="loginClick">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-footer">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        captchaPath: require('../../assets/images/captcha.jpg'),

        loginForm: {
          userName: '',
          password: '',
          uuid: '',
          captcha: ''
        },
        loginRule: {
          userName: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
          captcha: [
            {required: true, message: '验证码不能为空', trigger: 'blur'}
          ]
        },
        // 测试
        options: [{
          value: '选项1',
          label: '简体中文'
        }, {
          value: '选项2',
          label: '繁體中文'
        }],
        language: '简体中文'
      }
    },
    mounted() {
      document.title = '登录';
    },
    methods: {
      /**
       * 登录
       */
      loginClick() {
        console.log('登录系统');
        this.$refs.loginForm.validate((valid) => {
          if (!valid) {
            return;
          }
          this.$router.push({path: '/layout'})
        })
      },
      /**
       * 获取验证码
       */
      getCaptcha() {
        console.log('获取验证码');
      }
    }
  }
</script>

<style lang="scss">
  .login {
    /*绝对定位*/
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /*背景遮罩层*/
    background-color: rgba(38, 50, 56, .4);
    /*超过对象尺寸内容不显示*/
    overflow: hidden;

    &:before {
      /*固定定位*/
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      /*必须有的属性，否则其他属性不能生效*/
      content: '';
      background-image: url('../../assets/images/login_bg.jpg');
      /*cover:图片始终填充满容器，且保证长宽比不变。图片如果有超出部分，则超出部分会被隐藏*/
      background-size: cover;
    }

    &-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 100px 0 150px;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: transparent;
    }

    &-header {
      padding: 20px;
      width: 460px;
      color: #fff;
      margin: 60px auto 0;
      text-align: center;
    }

    &-brand {
      font-size: 40px;
      /*字体加粗*/
      font-weight: normal;
      /*字符间距*/
      letter-spacing: 2px;
      margin-bottom: 15px;
    }

    &-main {
      margin: 0 auto;
      padding: 20px 30px;
      background-color: #fff;
      width: 400px;
    }

    &-title {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
    }

    &-captcha {
      height: 35px;

      > img {
        width: 100%;
        cursor: pointer;
      }
    }

    &-button {
      width: 100%;
      margin-top: 0;
    }

    &-footer {
      color: #fff;
    }
  }
</style>
