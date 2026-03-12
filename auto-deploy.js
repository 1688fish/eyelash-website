const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 假睫毛网站自动部署工具\n');
console.log('=' .repeat(60));

// 检查是否安装了git
try {
    execSync('git --version', { stdio: 'ignore' });
    console.log('✅ Git已安装');
} catch (e) {
    console.log('❌ 未安装Git，请先安装：https://git-scm.com/downloads');
    process.exit(1);
}

// 初始化git仓库
console.log('\n📦 正在初始化Git仓库...');

try {
    // 检查是否已经是git仓库
    try {
        execSync('git rev-parse --git-dir', { stdio: 'ignore' });
        console.log('✅ Git仓库已存在');
    } catch (e) {
        execSync('git init', { stdio: 'inherit' });
        console.log('✅ Git仓库初始化完成');
    }

    // 创建.gitignore
    const gitignore = `node_modules/
.DS_Store
*.log
.env
`;
    fs.writeFileSync('.gitignore', gitignore);

    // 添加所有文件
    execSync('git add .', { stdio: 'inherit' });

    // 提交
    try {
        execSync('git commit -m "Initial commit: False Eyelash World Factory website"', { stdio: 'inherit' });
        console.log('✅ 文件已提交到Git');
    } catch (e) {
        console.log('ℹ️  没有新的更改需要提交');
    }

} catch (error) {
    console.error('❌ Git操作失败:', error.message);
}

console.log('\n' + '=' .repeat(60));
console.log('🌐 部署选项\n');

console.log('方案1：Netlify Drop（最简单，推荐）');
console.log('--------------------------------------');
console.log('1. 访问：https://app.netlify.com/drop');
console.log('2. 将整个项目文件夹拖到页面中');
console.log('3. 等待上传完成');
console.log('4. 获得免费网址：https://随机名称.netlify.app\n');

console.log('方案2：GitHub Pages（永久免费）');
console.log('--------------------------------------');
console.log('1. 访问：https://github.com/new');
console.log('2. 创建新仓库：eyelash-website');
console.log('3. 运行以下命令：\n');
console.log('   git remote add origin https://github.com/你的用户名/eyelash-website.git');
console.log('   git branch -M main');
console.log('   git push -u origin main\n');
console.log('4. 在仓库Settings > Pages中启用GitHub Pages');
console.log('5. 网址：https://你的用户名.github.io/eyelash-website/\n');

console.log('方案3：Vercel（快速部署）');
console.log('--------------------------------------');
console.log('1. 访问：https://vercel.com/new');
console.log('2. 使用GitHub账号登录');
console.log('3. 导入GitHub仓库');
console.log('4. 点击Deploy');
console.log('5. 网址：https://eyelash-website.vercel.app\n');

console.log('=' .repeat(60));
console.log('\n💡 推荐使用Netlify Drop，无需注册即可部署！');
console.log('\n📧 部署完成后，请将网址发送到：oilsei65799009@gmail.com');
console.log('💬 或通过Telegram联系：@crypto_x_YU\n');
