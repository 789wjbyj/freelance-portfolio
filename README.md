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

## 部署到 GitHub Pages（拿一个可发链接的作品集）
1. 在 GitHub 新建仓库，例如 `freelance-portfolio`。
2. 把整个 `freelancer-portfolio/` 目录内容推上去。
3. 仓库 Settings → Pages → Source 选 `main` 分支根目录 → Save。
4. 几分钟后访问 `https://你的用户名.github.io/freelance-portfolio/`。
5. 把这个链接 + 截图放进 Freelancer 的「Portfolio（作品集）」。

> 提示：部署前把站点里的 `Jade Studio` / `JADE` 文案、邮箱（现为 hello@jadestudio.demo）、社媒换成你自己的品牌信息。

## 在 Freelancer 上怎么用
- **作品集**：放上面 GitHub Pages 链接，配 3–4 张站点截图（首页、案例、商品页、移动端）。
- **个人简介**：强调「WordPress 企业官网 / Shopify 独立站」「中文沟通」「交付准时」。
- **提案**：先读需求 → 指出现有网站可改进点 → 给出明确交付时间 → 附本作品集链接。

## 下一步建议
- 把 demo 文案换成你自己的品牌，增加真实感。
- 用本骨架真做一个属于自己的小站，比 demo 更有说服力。
- 搭配英文中标提案模板（见后续规划），直接去 Freelancer 发第一单。
