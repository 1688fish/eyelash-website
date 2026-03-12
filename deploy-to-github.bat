@echo off
echo ========================================
echo GitHub 仓库创建和推送脚本
echo ========================================
echo.

echo 请在浏览器中完成以下步骤：
echo.
echo 1. 访问 https://github.com/new
echo 2. Repository name 填写: eyelash-website
echo 3. 选择 Public (公开)
echo 4. 不要勾选任何选项
echo 5. 点击 Create repository
echo.
echo 创建完成后，GitHub会显示一个页面
echo 复制页面上的仓库地址，格式类似：
echo https://github.com/你的用户名/eyelash-website.git
echo.
pause

echo.
echo ========================================
echo 请输入您的GitHub仓库地址
echo 格式: https://github.com/用户名/eyelash-website.git
echo ========================================
set /p REPO_URL="仓库地址: "

echo.
echo 正在推送文件到GitHub...
cd /d "C:\Users\Administrator\lobsterai\project\eyelash-website\deploy-v2"

git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo ========================================
echo 推送完成！
echo ========================================
echo.
echo 下一步：启用GitHub Pages
echo.
echo 1. 访问您的仓库页面
echo 2. 点击 Settings (设置)
echo 3. 左侧菜单找到 Pages
echo 4. Source 选择 main 分支
echo 5. 文件夹选择 / (root)
echo 6. 点击 Save
echo.
echo 等待1-2分钟后，您的网站地址将是：
echo https://您的用户名.github.io/eyelash-website/
echo.
pause
