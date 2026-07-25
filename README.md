# 建站作品集 · Freelancer 接单用

两个可点开的演示站，用于 Freelancer / Upwork 等平台的作品集展示与私域引流。

## 目录结构
```
freelancer-portfolio/
├─ index.html              # 作品集落地页（串联下面两个 demo）
├─ wordpress-demo/         # WordPress 风格企业官网
│  ├─ index.html
│  ├─ css/style.css
│  └─ js/main.js
└─ shopify-demo/           # Shopify 风格独立站
   ├─ index.html           # 首页
   ├─ product.html         # 商品详情页
   ├─ css/style.css
   └─ js/main.js
```

## 本地预览
直接用浏览器打开 `freelancer-portfolio/index.html` 即可。
或起个本地服务：
```bash
cd freelancer-portfolio
python -m http.server 8080
# 浏览器访问 http://localhost:8080
```

## 部署到 GitHub Pages（一键可发的作品集）

本地仓库已经初始化并提交好了（commit `bf4b178`）。你只需在 GitHub 上建仓库 + 推上去即可。

### 第 1 步：GitHub 上建仓库
1. 打开 https://github.com/new
2. Repository name 填 `freelance-portfolio`，选 **Public**
3. **不要**勾 Initialize with README，直接点 Create repository

### 第 2 步：推送到 GitHub（在本机 `freelancer-portfolio/` 目录执行）
```bash
git remote add origin https://github.com/789wjbyj/freelance-portfolio.git
git branch -M main
git push -u origin main
```
> 若你配了 SSH key，可把 remote 换成 `git@github.com:789wjbyj/freelance-portfolio.git`。
> 推送时会用你本机已存的 GitHub 凭证 / 浏览器登录，无需我代操作。

### 第 3 步：开启 Pages
1. 仓库 → Settings → Pages
2. Source 选 **Deploy from a branch** → Branch 选 `main`、目录 `/ (root)` → Save
3. 等 1–2 分钟，访问：
   **https://789wjbyj.github.io/freelance-portfolio/**

### 第 4 步：填进 Freelancer
把上面这个链接 + 3–4 张站点截图（首页、案例、商品页、移动端）放进 Freelancer 的「Portfolio（作品集）」。

> 站点已换皮为个人信息：品牌 Jade Studio / JADE（暗合"白玉京"），联系邮箱 3377955731@qq.com，署名 问剑白玉京。
> 如需再改，全局替换即可。用户名 `789wjbyj` 取自 GitHub 账号，若不同请同步替换。

## 在 Freelancer 上怎么用
- **作品集**：放上面 GitHub Pages 链接，配 3–4 张站点截图（首页、案例、商品页、移动端）。
- **个人简介**：强调「WordPress 企业官网 / Shopify 独立站」「中文沟通」「交付准时」。
- **提案**：先读需求 → 指出现有网站可改进点 → 给出明确交付时间 → 附本作品集链接。

## 下一步建议
- 把 demo 文案换成你自己的品牌，增加真实感。
- 用本骨架真做一个属于自己的小站，比 demo 更有说服力。
- 搭配英文中标提案模板（见后续规划），直接去 Freelancer 发第一单。
