# Text to CSV Converter | 文本转 CSV 转换器

一个现代化的 Web 应用程序，专门用于解析百度网盘分享信息并将其转换为 CSV 格式文件。支持中英文界面切换，提供直观的文件上传和数据预览功能。

A modern web application designed to parse Baidu Netdisk sharing information and convert it to CSV format files. Features bilingual interface (Chinese/English) with intuitive file upload and data preview capabilities.

## ✨ 功能特性 | Features

### 🔧 核心功能 | Core Features

- **智能解析** - 自动识别百度网盘分享格式的文本内容
- **CSV 导出** - 将解析后的数据导出为标准 CSV 格式
- **实时预览** - 上传后即时显示解析结果预览
- **批量处理** - 支持包含多个分享信息的文本文件

### 🌐 用户体验 | User Experience

- **双语支持** - 中英文界面切换，默认中文
- **拖拽上传** - 支持拖拽和点击两种文件上传方式
- **响应式设计** - 适配桌面端和移动端设备
- **优雅动画** - 流畅的交互动画和加载状态

### 🛡️ 安全性 | Security

- **本地处理** - 所有文件处理均在浏览器本地完成
- **隐私保护** - 不上传任何文件到服务器
- **文件验证** - 支持文件类型和大小限制

## 🚀 快速开始 | Quick Start

### 环境要求 | Prerequisites

- Node.js 18+
- npm 或 yarn

### 安装步骤 | Installation

```bash
# 克隆项目
git clone <repository-url>
cd text-to-csv-converter

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📝 使用方法 | Steps

1. **上传文件** - 将包含百度网盘分享信息的.txt 文件拖拽到上传区域或点击选择文件
2. **预览数据** - 系统自动解析文件内容并显示提取的数据块
3. **导出 CSV** - 点击"导出为 CSV"按钮下载转换后的文件
4. **语言切换** - 使用右上角的语言切换按钮在中英文之间切换
