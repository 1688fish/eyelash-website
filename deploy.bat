@echo off
chcp 65001 >nul
echo ========================================
echo 假睫毛网站自动部署工具
echo ========================================
echo.

REM 设置路径
set "DESKTOP=%USERPROFILE%\Desktop"
set "SOURCE_FOLDER=%DESKTOP%\假睫毛"
set "TARGET_FOLDER=%~dp0images"
set "WEBSITE_FOLDER=%~dp0"

echo [1/5] 检查源文件夹...
if not exist "%SOURCE_FOLDER%" (
    echo ❌ 错误：找不到桌面上的"假睫毛"文件夹
    echo.
    echo 请确认：
    echo 1. 桌面上是否有"假睫毛"文件夹
    echo 2. 文件夹名称是否正确
    echo.
    pause
    exit /b 1
)

echo ✅ 找到源文件夹：%SOURCE_FOLDER%
echo.

echo [2/5] 检查目标文件夹...
if not exist "%TARGET_FOLDER%" (
    echo 创建images文件夹...
    mkdir "%TARGET_FOLDER%"
)
echo ✅ 目标文件夹准备就绪
echo.

echo [3/5] 复制图片文件...
echo.
echo 正在复制所有图片到网站...

REM 复制所有图片文件
xcopy "%SOURCE_FOLDER%\*.jpg" "%TARGET_FOLDER%\" /Y /I >nul 2>&1
xcopy "%SOURCE_FOLDER%\*.jpeg" "%TARGET_FOLDER%\" /Y /I >nul 2>&1
xcopy "%SOURCE_FOLDER%\*.png" "%TARGET_FOLDER%\" /Y /I >nul 2>&1
xcopy "%SOURCE_FOLDER%\*.webp" "%TARGET_FOLDER%\" /Y /I >nul 2>&1

echo ✅ 图片复制完成
echo.

echo [4/5] 列出已复制的图片...
dir "%TARGET_FOLDER%\*.jpg" "%TARGET_FOLDER%\*.png" /B 2>nul
echo.

echo [5/5] 下一步操作提示...
echo.
echo ========================================
echo ✅ 图片已成功复制到网站！
echo ========================================
echo.
echo 📝 重要提示：
echo.
echo 1. 请手动重命名图片（在 images 文件夹中）：
echo    - 选择最好的图片命名为：hero-bg.jpg
echo    - 选择4张产品图命名为：product-1.jpg, product-2.jpg, product-3.jpg, product-4.jpg
echo    - 如有工厂照片命名为：factory.jpg
echo    - 如有Logo命名为：logo.png
echo.
echo 2. 压缩图片（推荐）：
echo    - 访问：https://tinypng.com
echo    - 上传所有图片进行压缩
echo    - 下载压缩后的图片替换原文件
echo.
echo 3. 部署网站（3个免费选项）：
echo.
echo    选项A - Netlify（最简单）：
echo    1. 访问：https://app.netlify.com/drop
echo    2. 将整个 eyelash-website 文件夹拖入页面
echo    3. 等待上传完成，获得免费网址
echo.
echo    选项B - GitHub Pages（永久免费）：
echo    1. 注册GitHub账号：https://github.com/signup
echo    2. 创建新仓库
echo    3. 上传所有文件
echo    4. 在Settings中启用GitHub Pages
echo.
echo    选项C - Vercel（快速）：
echo    1. 访问：https://vercel.com/new
echo    2. 使用GitHub账号登录
echo    3. 导入项目并部署
echo.
echo 4. 提交到Google搜索：
echo    1. 访问：https://search.google.com/search-console
echo    2. 添加您的网站
echo    3. 提交sitemap.xml
echo    4. 请求索引
echo.
echo 5. 开始推广：
echo    - 查看 FREE_MARKETING_STRATEGY.md 了解详细推广策略
echo    - 查看 QUICK_START_GUIDE.md 了解快速启动步骤
echo.
echo ========================================
echo.
echo 按任意键打开网站文件夹...
pause >nul

explorer "%WEBSITE_FOLDER%"

echo.
echo 按任意键打开images文件夹（重命名图片）...
pause >nul

explorer "%TARGET_FOLDER%"

echo.
echo 完成！祝您生意兴隆！🎉
echo.
pause
