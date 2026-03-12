const fs = require('fs');
const path = require('path');

console.log('🔍 正在查找桌面上的"假睫毛"文件夹...\n');

// 获取桌面路径
const desktopPath = path.join(require('os').homedir(), 'Desktop');
console.log(`桌面路径: ${desktopPath}\n`);

// 列出桌面上的所有文件夹
try {
    const items = fs.readdirSync(desktopPath);
    console.log('📁 桌面上的文件夹：');

    const folders = items.filter(item => {
        const fullPath = path.join(desktopPath, item);
        try {
            return fs.statSync(fullPath).isDirectory();
        } catch (e) {
            return false;
        }
    });

    folders.forEach((folder, index) => {
        console.log(`${index + 1}. ${folder}`);
    });

    console.log('\n');

    // 查找包含"假睫毛"或相关关键词的文件夹
    const targetFolders = folders.filter(folder =>
        folder.includes('假睫毛') ||
        folder.includes('睫毛') ||
        folder.toLowerCase().includes('lash') ||
        folder.toLowerCase().includes('eyelash')
    );

    if (targetFolders.length > 0) {
        console.log('✅ 找到可能的假睫毛文件夹：');
        targetFolders.forEach(folder => console.log(`   - ${folder}`));

        const sourcePath = path.join(desktopPath, targetFolders[0]);
        const targetPath = path.join(__dirname, 'images');

        console.log(`\n📂 源文件夹: ${sourcePath}`);
        console.log(`📂 目标文件夹: ${targetPath}\n`);

        // 确保目标文件夹存在
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
            console.log('✅ 创建images文件夹\n');
        }

        // 读取源文件夹中的图片
        const files = fs.readdirSync(sourcePath);
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
        });

        console.log(`📸 找到 ${imageFiles.length} 张图片：\n`);

        if (imageFiles.length === 0) {
            console.log('❌ 文件夹中没有找到图片文件');
            console.log('   支持的格式：.jpg, .jpeg, .png, .webp, .gif\n');
        } else {
            // 复制图片
            let copiedCount = 0;
            imageFiles.forEach((file, index) => {
                const sourcefile = path.join(sourcePath, file);
                const targetFile = path.join(targetPath, file);

                try {
                    fs.copyFileSync(sourcefile, targetFile);
                    console.log(`✅ ${index + 1}. ${file}`);
                    copiedCount++;
                } catch (e) {
                    console.log(`❌ ${index + 1}. ${file} - 复制失败: ${e.message}`);
                }
            });

            console.log(`\n🎉 成功复制 ${copiedCount} 张图片到 images 文件夹！\n`);

            // 提供重命名建议
            console.log('📝 下一步：请重命名图片');
            console.log('=' .repeat(50));
            console.log('建议命名：');
            console.log('  hero-bg.jpg      - 首页背景图（选择最漂亮的）');
            console.log('  product-1.jpg    - 3D貂毛睫毛');
            console.log('  product-2.jpg    - 浓密睫毛');
            console.log('  product-3.jpg    - 自然睫毛');
            console.log('  product-4.jpg    - 磁性睫毛');
            console.log('  factory.jpg      - 工厂照片（如有）');
            console.log('  logo.png         - 公司Logo（如有）');
            console.log('=' .repeat(50));
            console.log('\n💡 提示：');
            console.log('1. 在 images 文件夹中手动重命名图片');
            console.log('2. 使用 https://tinypng.com 压缩图片');
            console.log('3. 查看 QUICK_START_GUIDE.md 了解部署步骤\n');
        }

    } else {
        console.log('❌ 未找到"假睫毛"文件夹\n');
        console.log('💡 请手动操作：');
        console.log('1. 找到桌面上的"假睫毛"文件夹');
        console.log('2. 将图片复制到：');
        console.log(`   ${path.join(__dirname, 'images')}`);
        console.log('3. 按照建议重命名图片\n');
    }

} catch (error) {
    console.error('❌ 错误:', error.message);
    console.log('\n💡 请手动复制图片：');
    console.log('1. 打开桌面上的"假睫毛"文件夹');
    console.log('2. 复制所有图片到：');
    console.log(`   ${path.join(__dirname, 'images')}`);
    console.log('3. 重命名图片（参考 README.md）\n');
}
