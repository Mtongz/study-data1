<template>
	<div>
		<!-- <div class="box">
			<div class="loginBox">
				<div class="loginTitle">Login Form</div>
				<form class="loginForm">
					<div class="sameItem">
						<label for="">Username</label>
						<el-input
							type="text"
							autocomplete="current-password"
							class="username"
						></el-input>
					</div>
					<div class="sameItem">
						<label for="">Password</label>
						<el-input
							type="password"
							autocomplete="current-password"
							class="password"
						></el-input>
					</div>
					<div class="forgetPwd dfbc">
						<div class="rememberMe">
							<el-checkbox v-model="checked">Remember Me</el-checkbox>
						</div>
						<a class="linkFont" href="#">Forgot Password?</a>
					</div>
					<input type="button" value="LOGIN" class="loginBtn" />
					<div class="Signup">
						<span>Not a menber? </span
						><a class="linkFont" href="#">Signup now</a>
					</div>
				</form>
			</div>
		</div> -->
		<div class="box">
			<div class="loginBox">
				<div class="loginTitle">Login Form</div>
				<el-form
					:model="loginForm"
					:rules="rules"
					ref="loginForm"
					label-width="100px"
					label-position="top"
					class="loginForm"
				>
					<!-- 用户名 -->
					<el-form-item label="Username" prop="username">
						<el-input
							type="text"
							autocomplete="current-password"
							class="username"
							v-model="loginForm.username"
						></el-input>
					</el-form-item>
					<!-- 密码 -->
					<el-form-item
						label="Password"
						prop="password"
						hide-required-asterisk="false"
					>
						<el-input
							type="password"
							autocomplete="current-password"
							class="password"
							v-model="loginForm.password"
						></el-input>
					</el-form-item>
					<el-form-item>
						<div class="forgetPwd dfbc">
							<div class="rememberMe">
								<el-checkbox v-model="checked">Remember Me</el-checkbox>
							</div>
							<a class="linkFont" href="#">Forgot Password?</a>
						</div>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('loginForm')"
							>Signup now</el-button
						>
					</el-form-item>
					<el-form-item>
						<div class="Signup">
							<span>Not a menber? </span
							><a class="linkFont" href="#">Signup now</a>
						</div>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			checked: true,
			loginForm: {
				username: "",
				password: "",
			},
			rules: {
				username: [
					{ required: true, message: "请输入用户名或邮箱", trigger: "blur" },
					// { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
				],
				password: [{ required: true, message: "请输入密码", trigger: "blur" }],
			},
		};
	},
	mounted() {
		console.log(this.$route.meta);
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert("submit!");
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		},
	},
};
</script>
<style lang="scss">
.box {
	height: 100vh;
	width: 100vw;
	background: #cdd1d3;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	/* background: -webkit-linear-gradient(45deg, blue, red); */
	.loginBox {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(255, 255, 255, 0.8);
		width: 720px;
		padding: 30px;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
		// border-radius: 8px;
		.loginTitle {
			text-align: center;
			font-size: 32px;
			font-weight: 600;
		}
		.loginForm {
			// border: 1px solid #ccc;
			width: 350px;
			margin: 10px auto;
			.username,
			.password {
				border-radius: 6px;
			}
			.username {
			}
			.password {
			}
			.forgetPwd {
				margin-top: -10px;
				.rememberMe {
				}
			}
			.loginBtn {
				width: 100%;
				height: 45px;
				margin: 20px 0;
				border: none;
				color: #fff;
				font-size: 18px;
				font-weight: 500;
				background: -webkit-linear-gradient(45deg, #6e8efb, #a777e3);
				letter-spacing: 1px;
				cursor: pointer;
				&:hover {
					background: -webkit-linear-gradient(45deg, #a777e3, #6e8efb);
				}
				.Signup {
					text-align: center;
				}
			}
			.linkFont {
				/* color: #3498db; */
				/* 
          CSS3 字体颜色渐变 
          1.background: -webkit-linear-gradient   为文本元素提供渐变背景
          2.-webkit-background-clip:text;         使用透明颜色填充文本
          3.color: transparent;                   用文本剪辑背景，用渐变背景作为颜色填充文本
          */
				background: linear-gradient(135deg, #6e8efb, #a777e3);
				background: -webkit-linear-gradient(135deg, #6e8efb, #a777e3);
				background-clip: text;
				-webkit-background-clip: text;
				color: transparent;
				&:hover {
					text-decoration: underline;
					color: #3498db;
				}
				&:active {
					color: red;
				}
			}
		}
	}
}
.el-form--label-top .el-form-item__label {
	padding: 0;
}
</style>