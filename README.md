# Tailwind CSS Typography 演示项目 / Tailwind CSS Typography Demo

[English](#english) | [中文](#chinese)

<a name="english"></a>

## English

### Overview

This is a comprehensive demonstration project for **Tailwind CSS Typography** plugin built with Next.js. It showcases various features and customization options available in the `@tailwindcss/typography` plugin through interactive examples.

### Features

-   **Size Modifiers**: Demonstrates built-in font size adjustment tools (`prose-sm`, `prose-base`, `prose-lg`, `prose-xl`, `prose-2xl`)
-   **Element Modifiers**: Shows how to customize individual elements using modifier classes
-   **Tailwind Config Customization**: Examples of customizing typography through `tailwind.config.js`
-   **Gray Scale Theme**: Demonstrates grayscale color schemes
-   **Max Width Override**: Shows how to override default maximum width constraints
-   **Style Undoing**: Examples of selectively removing prose styles

### Technology Stack

-   **Framework**: Next.js 15.3.5
-   **Styling**: Tailwind CSS 4.x
-   **Typography**: @tailwindcss/typography 0.5.16
-   **Language**: TypeScript
-   **Package Manager**: pnpm

### Quick Start

1. **Install dependencies**:

    ```bash
    pnpm install
    ```

2. **Start development server**:

    ```bash
    pnpm dev
    ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Project Structure

```
├── app/
│   ├── 1-size-modifiers/        # Size modifier examples
│   ├── 2-element-modifiers/     # Element modifier examples
│   ├── 3-tailwind-config-js/    # Config-based customization
│   ├── 4-gray-scale/           # Gray scale theme examples
│   ├── 5-override-max-width/   # Max width override examples
│   ├── 6-undo-style/           # Style undoing examples
│   ├── custom.css              # Custom styles
│   └── page.tsx                # Main demo page
├── tailwind.config.js          # Tailwind configuration
└── package.json               # Project dependencies
```

### Demo Pages

#### 1. Size Modifiers (`/1-size-modifiers`)

Demonstrates the built-in typography size classes:

-   `prose-sm` (14px) - for screens 640px and above
-   `prose-base` (16px) - default, for screens 768px and above
-   `prose-lg` (18px) - for screens 1024px and above
-   `prose-xl` (20px) - for screens 1280px and above
-   `prose-2xl` (24px) - for screens 1536px and above

#### 2. Element Modifiers (`/2-element-modifiers`)

Shows how to customize individual elements using classes like:

-   `prose-h1:text-blue-600` - Blue color for h1 elements
-   `prose-h2:text-base` - Base font size for h2 elements
-   `prose-p:italic` - Italic style for paragraphs
-   `prose-table:border` - Borders for tables

#### 3. Tailwind Config Customization (`/3-tailwind-config-js`)

Demonstrates customization through `tailwind.config.js` file, including:

-   Custom heading colors
-   Table styling
-   Border and padding adjustments

#### 4. Additional Features

-   **Gray Scale Theme**: Monochrome color schemes
-   **Max Width Override**: Custom width constraints
-   **Style Undoing**: Selective removal of prose styles

### Customization

The project includes a custom `tailwind.config.js` with extended typography settings:

```javascript
module.exports = {
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						h1: { color: "var(--color-blue-600)" },
						h2: { fontSize: "var(--font-size-base)" },
						h3: {
							color: "var(--color-pink-400)",
							border: "1px solid var(--color-orange-600)",
							padding: "8px",
							borderRadius: "0.6rem",
						},
						// ... more customizations
					},
				},
			}),
		},
	},
}
```

### Build and Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Learn More

-   [Tailwind CSS Typography Documentation](https://tailwindcss.com/docs/typography-plugin)
-   [Next.js Documentation](https://nextjs.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

<a name="chinese"></a>

## 中文

### 项目概述

这是一个基于 Next.js 构建的 **Tailwind CSS Typography** 插件的全面演示项目。通过交互式示例展示了 `@tailwindcss/typography` 插件的各种功能和自定义选项。

### 功能特点

-   **字号调整工具**: 展示内置的字号调整工具（`prose-sm`, `prose-base`, `prose-lg`, `prose-xl`, `prose-2xl`）
-   **元素修饰器**: 演示如何使用修饰器类自定义单个元素
-   **Tailwind 配置自定义**: 通过 `tailwind.config.js` 自定义排版的示例
-   **灰度主题**: 展示灰度配色方案
-   **最大宽度覆盖**: 演示如何覆盖默认的最大宽度约束
-   **样式撤销**: 有选择地移除 prose 样式的示例

### 技术栈

-   **框架**: Next.js 15.3.5
-   **样式**: Tailwind CSS 4.x
-   **排版**: @tailwindcss/typography 0.5.16
-   **语言**: TypeScript
-   **包管理器**: pnpm

### 快速开始

1. **安装依赖**:

    ```bash
    pnpm install
    ```

2. **启动开发服务器**:

    ```bash
    pnpm dev
    ```

3. **在浏览器中打开**:
   访问 [http://localhost:3000](http://localhost:3000)

### 项目结构

```
├── app/
│   ├── 1-size-modifiers/        # 字号调整示例
│   ├── 2-element-modifiers/     # 元素修饰器示例
│   ├── 3-tailwind-config-js/    # 配置文件自定义
│   ├── 4-gray-scale/           # 灰度主题示例
│   ├── 5-override-max-width/   # 最大宽度覆盖示例
│   ├── 6-undo-style/           # 样式撤销示例
│   ├── custom.css              # 自定义样式
│   └── page.tsx                # 主演示页面
├── tailwind.config.js          # Tailwind 配置
└── package.json               # 项目依赖
```

### 演示页面

#### 1. 字号调整工具 (`/1-size-modifiers`)

展示内置的排版字号类：

-   `prose-sm` (14px) - 适用于 640px 及以上屏幕
-   `prose-base` (16px) - 默认，适用于 768px 及以上屏幕
-   `prose-lg` (18px) - 适用于 1024px 及以上屏幕
-   `prose-xl` (20px) - 适用于 1280px 及以上屏幕
-   `prose-2xl` (24px) - 适用于 1536px 及以上屏幕

#### 2. 元素修饰器 (`/2-element-modifiers`)

展示如何使用以下类自定义单个元素：

-   `prose-h1:text-blue-600` - h1 元素的蓝色
-   `prose-h2:text-base` - h2 元素的基础字号
-   `prose-p:italic` - 段落的斜体样式
-   `prose-table:border` - 表格的边框

#### 3. Tailwind 配置自定义 (`/3-tailwind-config-js`)

通过 `tailwind.config.js` 文件进行自定义，包括：

-   自定义标题颜色
-   表格样式
-   边框和内边距调整

#### 4. 其他功能

-   **灰度主题**: 单色配色方案
-   **最大宽度覆盖**: 自定义宽度约束
-   **样式撤销**: 有选择地移除 prose 样式

### 自定义配置

项目包含一个自定义的 `tailwind.config.js`，扩展了排版设置：

```javascript
module.exports = {
	theme: {
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						h1: { color: "var(--color-blue-600)" },
						h2: { fontSize: "var(--font-size-base)" },
						h3: {
							color: "var(--color-pink-400)",
							border: "1px solid var(--color-orange-600)",
							padding: "8px",
							borderRadius: "0.6rem",
						},
						// ... 更多自定义
					},
				},
			}),
		},
	},
}
```

### 构建和部署

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

### 了解更多

-   [Tailwind CSS Typography 文档](https://tailwindcss.com/docs/typography-plugin)
-   [Next.js 文档](https://nextjs.org/docs)
-   [Tailwind CSS 文档](https://tailwindcss.com/docs)

## 许可证 / License

MIT License
