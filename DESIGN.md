# SensorDeck Website + Atlas Demo UI Design & Delivery Baseline

**Repository:** `sensordeck/sensordeck-website`  
**Target domain:** `https://sensordeck.tech`  
**Documentation:** `https://docs.sensordeck.tech`  
**Delivery mode:** Static marketing website + static JSON-driven Atlas demo UI  
**Implementation owner:** 梁工  
**Approval owner:** Jack Chen  
**Status:** DESIGN BASELINE — implement as written; do not redefine product terminology

---

## 1. Project Goal

This repository delivers two related assets:

1. **SensorDeck corporate website**
   - Defines a new infrastructure category: Runtime Intelligence / Runtime Governance Infrastructure for Robotics.
   - Explains why the category exists.
   - Presents the two Atlas product lines.
   - Routes qualified visitors to documentation, technical white papers, demo requests, and contact.

2. **Atlas sales demo UI**
   - Four interactive demo pages.
   - Used during customer closing and product demonstrations.
   - Not a production customer system.
   - Uses static JSON; no real database, authentication, Agent connection, upload service, email service, or cloud backend.

The website and demo UI must be implemented in one Next.js repository and deployed through the existing Vercel project.

---

## 2. Category Positioning

SensorDeck is not presented as:

- a traditional SaaS application;
- a logging tool;
- an AI chatbot;
- a robotics dashboard vendor;
- a consulting company;
- a generic sensor-validation laboratory.

SensorDeck defines and supplies:

> **Runtime Intelligence Infrastructure for Robotics**

Atlas operates across the runtime boundary between sensors, buses, power, Linux/SBC runtime, ROS inputs, OEM investigation teams, and sensor manufacturers.

Core public message:

> From before deployment to after deployment.  
> Observe. Understand. Investigate. Improve. Reuse.

The website should educate the market first, then introduce the product implementation.

---

## 3. Visual Baseline

Use the provided homepage reference as the visual direction, not as a pixel-perfect production design.

### Required visual language

- Enterprise infrastructure
- Engineering-focused
- Clear and trustworthy
- White / very light gray website background
- Atlas blue as the main action color
- SensorDeck tan only as a secondary hardware / institutional accent
- Low shadow
- Clear borders
- High information hierarchy
- No unnecessary gradients
- No blockchain visual language
- No generic AI sparkle effects
- No exaggerated 3D animation
- No consumer-app appearance

### Fonts

- UI / website: `Inter`
- Technical values / IDs / hashes: `JetBrains Mono`
- Chinese fallback: `Noto Sans SC`

### Responsive priority

1. Desktop: primary
2. Tablet: required
3. Mobile: readable marketing website; demo UI may use horizontally scrollable/high-density layouts rather than redesigning every workstation element

---

## 4. Final Website Navigation

```text
Products
Platform
Technology
Library
Company
Contact
Request Demo
Language: EN / 中文
```

Do not use a generic `Solutions` section in V1.

Do not expose `Pricing` in V1.

---

## 5. Website Information Architecture

### 5.1 Home

Route:

```text
/
```

The homepage must answer:

1. What is Atlas?
2. Why does robotics need runtime intelligence infrastructure?
3. What operational problem does Atlas solve?
4. Who is it for?
5. How does investigation knowledge become reusable?

Recommended section order:

```text
Hero
Category definition
Why runtime governance is missing
Two Atlas product lines
Atlas platform capabilities
Runtime investigation lifecycle
Built for the robotics industry
Evidence ownership and privacy
Organizational memory / Historical RGA
Technical white papers and documentation
Request demo CTA
Footer
```

Primary CTA:

```text
Request Demo
```

Secondary CTAs:

```text
Explore Products
Read Technical White Paper
Open Documentation
Watch 2-Min Overview
```

Do not publish unsupported customer claims or fabricated ROI statistics as verified facts. Demo metrics must be marked `Illustrative`.

---

### 5.2 Products

Routes:

```text
/products
/products/runtime-sensor-governance
/products/runtime-investigation
```

#### Product A — Atlas Runtime Sensor Governance™

Audience:

```text
Sensor Manufacturers
```

Public description:

> Understand how your sensors behave across real-world robot deployments, preserve runtime knowledge, and collaborate with OEM investigation teams using shared evidence.

Core modules:

- Runtime Profiles™
- Runtime Observation
- Historical Sensor RGA™
- Sensor Investigation Workspace™
- OEM Collaboration through EGP
- Sensor Assist Vault™
- Runtime Knowledge Base™

Product lifecycle:

```text
Runtime Profile
  ↓
Runtime Observation
  ↓
Evidence Pack / EGP
  ↓
Historical Sensor RGA Recall
  ↓
Sensor Investigation
  ↓
OEM Collaboration
  ↓
Sensor Assist Vault
  ↓
Knowledge Reuse
```

#### Product B — Atlas Runtime Investigation™

Audience:

```text
Robot OEMs
```

Public description:

> Transform runtime incidents into bounded evidence, coordinated investigations, and reusable organizational knowledge.

Core modules:

- Atlas Agent™
- Runtime Dataset retention
- Evidence Pack™
- Candidate Evidence Packs
- Historical RGA™
- Investigation Workspace™
- Sensor Engagement Pack (EGP)
- Assist Vault™
- Executive Dashboard™

Product lifecycle:

```text
Runtime Dataset
  ↓
Candidate Evidence Packs
  ↓
Primary Evidence Pack
  ↓
Historical RGA Recall
  ↓
OEM / Sensor Investigation
  ↓
IR + LL
  ↓
Closure
  ↓
Assist Vault
  ↓
Future Reuse
```

---

### 5.3 Platform

Routes:

```text
/platform
/platform/atlas-agent
/platform/evidence-pack
/platform/historical-rga
/platform/investigation-workspace
/platform/sensor-egp
/platform/assist-vault
/platform/executive-dashboard
```

Purpose:

The Platform section explains the shared infrastructure underneath both product lines.

Platform capability cards:

1. **Atlas Agent™**  
   Observe, retain, lock, and export runtime datasets according to retention policy.

2. **Evidence Pack™**  
   Convert long runtime datasets into bounded, standardized evidence windows.

3. **Historical RGA™**  
   Recall previous Investigation Results and Lessons Learned without claiming identical causality.

4. **Investigation Workspace™**  
   Coordinate Tier 1, Tier 2/3, OEM engineering, and Sensor FAE investigation work.

5. **Sensor EGP™**  
   Exchange de-identified evidence and investigation context between an OEM and a sensor manufacturer.

6. **Assist Vault™**  
   Preserve completed investigation assets as organizational memory.

7. **Executive Dashboard™**  
   Surface investigation throughput, evidence coverage, reuse, SLA, and illustrative ROI.

Platform language must preserve the Atlas constitutional boundary:

- Atlas structures evidence.
- Atlas retrieves historical candidates.
- Atlas does not automatically confirm root cause.
- Atlas does not assign liability.
- IR and LL are human-authored.

---

### 5.4 Technology

Routes:

```text
/technology
/technology/runtime-boundary
/technology/runtime-evidence
/technology/runtime-surfaces
/technology/five-window-model
/technology/historical-recall
/technology/investigation-lifecycle
/technology/architecture
```

Technology explains why the infrastructure works. It must not be a list of programming languages or frameworks.

#### A. Runtime Boundary

Explain the governed boundary:

```text
Sensor
  ↓
Power / USB / Ethernet / CAN / CSI / Trigger / PPS
  ↓
Linux Kernel / Driver / Buffer / IRQ / Scheduler
  ↓
SBC / ROS Topic / Application Input
```

#### B. Runtime Evidence

Explain why a bounded Evidence Pack is different from:

- an unlimited log archive;
- a raw rosbag;
- a customer video;
- a support ticket;
- a single sensor log.

#### C. Runtime Surfaces

Public examples:

- Power Health
- Timing
- Ethernet
- USB
- CAN
- LiDAR
- Camera
- IMU
- Linux Runtime
- ROS Topics
- Storage
- Sensor heartbeat / raw output

#### D. Five-Window Model

```text
Pre-Guard
Baseline
Deviation
Recovery
Post-Guard
```

`Recovery` is an observation window, not a guaranteed recovery conclusion.

#### E. Historical Recall

Explain:

- Strong Candidate
- Partial Candidate
- Related Historical Pattern
- Why Retrieved
- Environment Difference

Never state that historical similarity proves the same root cause.

#### F. Investigation Lifecycle

```text
REF
  ↓
Runtime Dataset
  ↓
Evidence Pack
  ↓
Historical RGA Recall
  ↓
Investigation Context
  ↓
EGP
  ↓
OEM / Sensor IR + LL
  ↓
Closure
  ↓
Assist Vault
  ↓
Future Reuse
```

#### G. Architecture

Use the approved Atlas architecture diagram and link deeper implementation detail to documentation.

---

### 5.5 Library

Routes:

```text
/library
/library/white-papers
/library/documentation
/library/demo
/library/faq
```

#### Technical White Papers

This is the public, executive/engineering reading layer.

Initial cards:

- Runtime Intelligence Infrastructure for Robotics
- Atlas Runtime Sensor Governance
- Atlas Runtime Investigation
- Evidence Pack and Five-Window Evidence Model
- Historical RGA and Organizational Memory
- OEM ↔ Sensor Investigation Collaboration

White papers may be:

- PDF downloads stored in `/public/whitepapers/`; or
- selected pages hosted under `docs.sensordeck.tech`.

#### Documentation

`docs.sensordeck.tech` remains an independent documentation site.

Website behavior:

```text
Library
  → Documentation
  → Open docs.sensordeck.tech in a new tab
```

Use documentation for:

- developer documentation;
- schemas;
- CLI;
- integration;
- artifact definitions;
- canonical terminology;
- release notes;
- technical implementation guides.

Do not duplicate the complete documentation inside the marketing website.

#### Demo

Public or controlled links:

- 2-minute overview video
- Atlas demo UI
- Runtime investigation walkthrough
- downloadable sample Evidence Pack, where approved

#### FAQ

Topics:

- Is Atlas a logging platform?
- Does SensorDeck own customer data?
- Does Atlas determine root cause?
- Does Atlas assign responsibility?
- Must data leave the customer environment?
- What is an Evidence Pack?
- What is Historical RGA?
- What is EGP?
- Does Atlas replace OEM engineering tools?
- Can Atlas run with existing robot sensors?

---

### 5.6 Company

Routes:

```text
/company
/company/about
/company/principles
/company/contact
```

Keep V1 small.

Include:

- SensorDeck mission
- category statement
- evidence ownership principle
- no-black-box principle
- engineering boundaries
- contact

Do not create empty pages for careers, investors, press, or partners until there is real content.

---

### 5.7 Contact / Request Demo

Routes:

```text
/contact
/request-demo
```

Fields:

- Name
- Work email
- Company
- Role
- Organization type
  - Robot OEM
  - Sensor manufacturer
  - System integrator
  - Other
- Fleet / deployed product scale
- Primary interest
  - Runtime Sensor Governance
  - Runtime Investigation
  - Technical white paper
  - Architecture review
- Message

V1 implementation may use a mailto link or a form service approved by Jack. Do not build a custom backend during this sprint.

---

## 6. Pricing Decision

Do not publish a pricing page in V1.

Reason:

Atlas is infrastructure sold through:

```text
Architecture Review
  ↓
Pilot Scope
  ↓
Customer-Specific Deployment
  ↓
Commercial Proposal
```

The website should use:

```text
Request Demo
Request Architecture Review
Discuss a Pilot
```

Do not use consumer SaaS price cards.

---

## 7. Four Atlas Demo UI Pages

Base route:

```text
/demo
```

Routes:

```text
/demo/tier1
/demo/investigation
/demo/sensor-fae
/demo/cto
```

All four pages use one connected customer story and shared static JSON.

### Shared demo identity

```text
Customer: Pudu Robotics
Robot SN: PUDU-T300-7F3A-0021
Atlas Agent ID: AGT-7F3A-7A21
REF ID: REF-2026-0716-0012
Primary EP: EP-C03
EGP ID: EGP-HESAI-2026-0042
Sensor FAE: Wang Kai
```

### Shared UI shell

```text
Top bar:
ATLAS | Search | Notification | User / Role | Language

Left:
Role-specific workflow navigation

Center:
Current task / investigation workspace

Right:
Robot / REF / customer / assignment context
```

Use the same canonical object names everywhere:

- Robot
- Runtime Dataset
- Candidate
- Evidence Pack
- REF
- EGP
- Historical RGA
- IR
- LL
- Closure
- Assist Vault

Do not invent alternate terms on different pages.

---

### 7.1 Tier 1 Customer-Facing Portal

Route:

```text
/demo/tier1
```

Purpose:

Create a REF quickly and confirm whether an Atlas runtime dataset is available.

Four steps:

1. Incident
2. Robot & Environment
3. Runtime Evidence
4. Review & Route

Main action:

```text
Create REF & Route to Tier 2
```

Tier 1 must not be shown:

- candidate correlation scoring;
- raw engineering logs by default;
- Historical RGA scoring details;
- IR / LL editors;
- root-cause language.

Required demo interactions:

- select incident type;
- select or prefill robot;
- choose approximate incident time;
- lock runtime dataset;
- route to Tier 2;
- language toggle.

---

### 7.2 OEM Investigation Dashboard — Tier 2 / Tier 3

Route:

```text
/demo/investigation
```

Purpose:

Reduce a long runtime dataset into Candidate Evidence Packs and progress OEM → Sensor investigation.

Required modules:

- KPI cards
- Candidate Timeline
- surface lanes
- five-window view
- candidate comparison
- primary EP selection
- Historical RGA recall
- Investigation Context
- EGP builder
- SLA / owner / blocker context

Required interactions:

- click candidate;
- set candidate as Primary;
- keep as Secondary;
- defer;
- dismiss with reason;
- switch five-window segment;
- preview Historical RGA;
- open EGP preview;
- generate demo EGP.

Forbidden wording:

```text
Root Cause Confirmed
OEM Fault
Sensor Fault
Liability Assigned
```

Allowed wording:

```text
Observed Pattern
Candidate Surface
Strong Candidate
Partial Candidate
Related Historical Pattern
Why Retrieved
Requires Further Investigation
```

---

### 7.3 Sensor FAE Investigation Workspace

Route:

```text
/demo/sensor-fae
```

Purpose:

Allow the sensor FAE to validate an OEM EGP, review shared evidence context, recall Historical Sensor RGA, and author IR / LL.

Required modules:

- EGP package validation
- package integrity
- Evidence Pack summary
- sensor-specific surfaces
- upstream and downstream context
- Historical Sensor RGA recall
- IR editor
- LL editor
- Sensor Response
- Return to OEM
- Sensor RGA update

Allowed IR result-state values:

```text
matched_*
candidate_*
not_applicable
```

IR and LL must appear human-authored.

Required interactions:

- package validation status;
- choose historical investigation path;
- mark partial match;
- fill or display sample IR;
- fill or display sample LL;
- return EGP to OEM;
- close sensor ticket;
- update Historical Sensor RGA.

---

### 7.4 CTO / Engineering VP Dashboard

Route:

```text
/demo/cto
```

Purpose:

Show investigation operating efficiency, evidence coverage, organizational memory, vendor collaboration, and illustrative ROI.

Required KPI examples:

- Open REF
- Safety-Relevant REF
- Median Time to First EP
- Median Time to Closure
- Historical RGA Reuse Rate
- Sensor Escalation Rate
- Engineering Hours Saved
- Estimated Cost Saved

Required charts:

- REF volume and status
- time-to-resolution trend
- evidence coverage
- repeated REF types
- candidate surface frequency
- sensor vendor engagement
- fleet/customer coverage
- organizational memory

All demo commercial metrics must be labeled:

```text
Illustrative Demo Data
```

Do not label Candidate Surface Frequency as Root Cause Ranking.

Required interactions:

- 30 / 90 / 180-day selector;
- conservative / expected / actual-measured ROI selector;
- customer / fleet filter;
- export-governance-report demo action;
- open critical REF;
- review sensor vendor performance.

---

## 8. Static Data Architecture

No database is required.

Recommended structure:

```text
src/
  app/
  components/
  data/
    demo/
      customer.json
      robot.json
      agent.json
      ref.json
      candidates.json
      evidence-pack.json
      historical-rga.json
      egp.json
      sensor-ir.json
      sensor-ll.json
      cto-metrics.json
  content/
    en/
    zh/
public/
  images/
  diagrams/
  logos/
  videos/
  whitepapers/
  downloads/
```

All four demo pages must load from the same shared demo dataset.

Do not hard-code conflicting IDs in multiple components.

---

## 9. Content and Media Management

V1 uses repository-managed content.

### Images and diagrams

Store in:

```text
/public/images/
/public/diagrams/
/public/logos/
```

Reference example:

```text
/images/home/atlas-runtime-hero.webp
```

### Videos

Small public demo video:

```text
/public/videos/atlas-overview.mp4
```

Preferred for large video files:

- YouTube unlisted/public embed;
- Vimeo;
- another approved video CDN.

Do not commit very large raw editing files to GitHub.

### White papers

Store downloadable PDFs in:

```text
/public/whitepapers/
```

Example:

```text
/public/whitepapers/atlas-runtime-intelligence-white-paper-v1.pdf
```

### Website copy

Store editable content separately from components:

```text
/src/content/en/
/src/content/zh/
```

Recommended formats:

- Markdown / MDX for long pages;
- TypeScript or JSON for structured cards;
- no important marketing copy buried inside reusable UI components.

This separation allows Jack or another editor to update wording and media later without redesigning the page.

---

## 10. Documentation Integration

`docs.sensordeck.tech` is not replaced.

It remains the canonical technical documentation site.

Website links:

```text
Library → Documentation
Technology → Read Architecture Documentation
Product pages → Developer Documentation
Footer → Documentation
```

Use external links with clear labels.

Do not mirror the whole documentation repository into this website repo.

---

## 11. Repository Structure

Recommended baseline:

```text
sensordeck-website/
├─ DESIGN.md
├─ README.md
├─ CHANGELOG.md
├─ package.json
├─ next.config.ts
├─ public/
│  ├─ logos/
│  ├─ images/
│  ├─ diagrams/
│  ├─ videos/
│  ├─ whitepapers/
│  └─ downloads/
├─ src/
│  ├─ app/
│  │  ├─ page.tsx
│  │  ├─ products/
│  │  ├─ platform/
│  │  ├─ technology/
│  │  ├─ library/
│  │  ├─ company/
│  │  ├─ contact/
│  │  ├─ request-demo/
│  │  └─ demo/
│  │     ├─ tier1/
│  │     ├─ investigation/
│  │     ├─ sensor-fae/
│  │     └─ cto/
│  ├─ components/
│  │  ├─ website/
│  │  ├─ demo/
│  │  ├─ charts/
│  │  └─ shared/
│  ├─ content/
│  │  ├─ en/
│  │  └─ zh/
│  ├─ data/
│  │  └─ demo/
│  ├─ lib/
│  └─ styles/
└─ docs/
   ├─ content-update-guide.md
   ├─ asset-update-guide.md
   └─ deployment-guide.md
```

---

## 12. Git and Deployment Workflow

### Branches

```text
main
develop
feature/*
```

Recommended workflow:

```text
feature branch
  ↓
Pull Request
  ↓
Vercel Preview Deployment
  ↓
Jack review
  ↓
Merge to main
  ↓
Production deployment
```

Do not develop directly on `main`.

`main` is the production branch.

### Required checks before merge

- build succeeds;
- no broken navigation;
- no console error;
- desktop screenshot reviewed;
- mobile marketing pages reviewed;
- canonical terms reviewed;
- unsupported claims removed;
- Vercel Preview URL supplied in PR.

---

## 13. Delivery Plan

### 1 — Foundation + Homepage

Deliver:

- Next.js / TypeScript / Tailwind structure
- shared website header and footer
- bilingual content structure
- homepage shell
- assets directories
- Vercel Preview URL
- no direct production overwrite

### 2 — Website Completion

Deliver:

- Products
- Platform
- Technology
- Library
- Company
- Contact / Request Demo
- documentation link
- white-paper placeholders
- responsive website pass

### 3 — Tier 1 + Shared Demo Shell

Deliver:

- common Atlas demo shell
- shared demo JSON
- `/demo/tier1`
- four-step REF flow
- right context panel
- route-to-Tier-2 interaction

### 4 — Investigation + Sensor FAE

Deliver:

- `/demo/investigation`
- candidate timeline
- five-window selector
- candidate comparison
- Historical RGA panel
- EGP preview
- `/demo/sensor-fae`
- package validation
- IR / LL
- return-to-OEM interaction

### 5 — CTO + Integration + Release Candidate

Deliver:

- `/demo/cto`
- KPI and charts
- ROI mode selector
- complete cross-page demo navigation
- final responsive pass
- README
- content update guide
- asset update guide
- deployment guide
- release candidate Preview URL
- production deployment only after Jack approval

---

## 14. Required Daily Handoff

Every day Liang must provide:

```text
1. Git commit / pull request
2. Vercel Preview URL
3. Completed routes
4. Remaining issues
5. Screenshots: desktop + mobile where applicable
```

A verbal progress report without a working Preview URL is not a delivery.

---

## 15. Final Acceptance Criteria

### Website

- All navigation links work.
- Home clearly defines the category.
- Two product lines are distinct.
- Platform explains shared infrastructure.
- Technology explains Atlas principles, not software frameworks.
- Library links to docs and white papers.
- Contact / Request Demo works.
- English and Chinese structure is prepared.
- No fake customer endorsement.
- No unsupported validated ROI claim.
- No Pricing page.

### Demo UI

- Four routes exist.
- Pages tell one connected story.
- Shared IDs are consistent.
- Candidate EP can be selected.
- Five-window data can be switched.
- EGP can be previewed.
- Sensor IR / LL can be shown or edited.
- CTO filters respond.
- All commercial metrics are marked illustrative.
- Atlas does not declare causality or liability.

### Engineering

- Source code is in the SensorDeck-owned GitHub repository.
- Vercel project remains under SensorDeck control.
- No secret keys committed.
- No external developer account owns the production deployment.
- `main` deploys production.
- PRs generate Preview deployments.
- README and update guides are complete.
- Build passes from a clean checkout.

---

## 16. Ownership and Security Boundary

SensorDeck retains ownership of:

- GitHub organization and repository;
- Vercel account/team/project;
- domain and DNS;
- source code;
- design assets;
- copy;
- production deployment;
- analytics;
- form destination;
- technical documentation.

Liang receives only the access required to implement and deploy.

Do not transfer:

- domain ownership;
- DNS registrar ownership;
- company GitHub ownership;
- Vercel ownership;
- billing ownership;
- permanent access to unrelated repositories.

At project close:

1. merge approved work;
2. create release tag;
3. export repository backup;
4. verify production deployment;
5. review access;
6. remove or downgrade Liang's access when maintenance is no longer required.

---

## 17. Change Control

This document is the implementation baseline.

Liang must not independently change:

- product names;
- canonical terminology;
- category positioning;
- public claims;
- Atlas investigation boundaries;
- four-page workflow;
- route structure;
- ownership architecture.

For required changes:

```text
Issue / PR comment
  ↓
Jack approval
  ↓
Update DESIGN.md
  ↓
Implement
```
---

## Delivery Mode

• Corporate Website
• Atlas Demo UI
• Static JSON Demo
• No Backend
• No Database
• No Authentication
• Next.js + TypeScript + Tailwind

---

# 中文关键点说明

本文件不是普通网页设计文档。

这是整个 SensorDeck 官网唯一实施标准（Canonical）。

以后：

UI Designer

Frontend Engineer

Backend Engineer

Marketing

Freelancer

全部按照本文件实施。

不得自行重新设计网站。

不得自行增加页面。

不得修改产品命名。

不得修改Atlas边界。

梁工职责：

严格按本文实现。

不要猜。

不要自行优化产品定义。

任何疑问：

Issue

↓

Jack确认

↓

修改DESIGN.md

↓

再实施。

---

# Implementation Notes

本文件优先级：

DESIGN.md

↓

README

↓

Issue

↓

Implementation

不得反向修改 DESIGN.md。

---

# Acceptance

✓ 所有人使用同一份DESIGN.md

✓ 网站结构唯一

✓ Atlas Terminology唯一

✓ 不存在多个产品定义

---

官网不是软件产品。

官网负责：

介绍行业

介绍Atlas

介绍两条产品

介绍技术

介绍白皮书

引导客户预约Demo

真正的软件Demo在

/demo

所有Demo全部使用静态JSON。

目的：

演示。

不是开发客户系统。

因此：

不要接数据库。

不要做登录。

不要开发后台。

不要写权限系统。

不要写上传功能。

---

# Implementation Notes

网站

/

Demo

/demo

完全分离。

Website：

Marketing

Demo：

Atlas UI

统一Next.js项目。

---

# Acceptance

✓ Website可独立浏览

✓ Demo可独立浏览

✓ Demo无需Backend

✓ Demo无需Database

✓ Website与Demo导航互通

---

不要把Atlas介绍成：

日志工具

AI

机器人平台

Dashboard

云平台

Atlas卖的是：

机器人运行时治理基础设施。

所有页面都必须围绕这个定位。

任何文案不得偏离。

---

# Implementation Notes

首页Hero

必须首先介绍：

Runtime Intelligence Infrastructure

之后：

Products

最后：

Request Demo

不要首页直接卖产品。

---

# Acceptance

✓ Hero首先介绍Category

✓ Products第二层

✓ CTA最后出现

---

整个官网风格：

Zendesk

Datadog

Linear

Stripe Documentation

不是：

OpenAI

Midjourney

Apple

不要大量动画。

不要科技炫光。

不要玻璃效果。

不要霓虹灯。

Atlas卖的是：

可信工程基础设施。

整个视觉必须体现：

Professional

Reliable

Industrial

---

# Implementation Notes

统一：

Header

Section

Card

Footer

所有按钮统一风格。

统一圆角。

统一Padding。

统一字体。

统一颜色。

---

# Acceptance

✓ 整站视觉统一

✓ Desktop优先

✓ Mobile可阅读

✓ 不出现Consumer UI风格

---

导航永久冻结。

任何页面新增必须Jack批准。

不要自行增加：

Pricing

Solutions

Resources

Community

---

# Implementation Notes

Header固定。

Desktop：

Top Navigation

Mobile：

Hamburger Menu

Language：

EN / 中文

右侧：

Request Demo

---

# Acceptance

✓ 全站统一Header

✓ Navigation一致

✓ Language切换预留

✓ Request Demo突出

---

Platform 不是产品介绍。

不要介绍：

Sensor Governance

Runtime Investigation

而是介绍：

两条产品共同使用的基础设施。

客户买的是不同产品。

但是底层都是同一套Atlas Platform。

这一页主要卖：

Infrastructure。

不是Workflow。

不是Case Study。

不是Marketing。

建议首页进入Products之后，

再介绍Platform。

不要反过来。

---

Agent不是Recorder。

Agent不是Logger。

Agent不是ROS Tool。

Agent负责：

持续观察。

持续保留。

持续导出。

Evidence Pack只是Agent输出的一种结果。

不要把Agent画成数据库。

---

### Implementation Notes

Card

Illustration

3 Bullet

Learn More

Documentation

---

### Acceptance

✓ Agent介绍正确

✓ 不出现Logger字样

✓ 不出现AI Agent误导

--------------------------------------------------

### 2 Evidence Pack™ 中文关键点说明

不要介绍：

Log

Rosbag

录像

Support Ticket

Evidence Pack就是Atlas最重要产品。

它不是数据。

它是：

调查证据。

以后所有页面都围绕EP展开。

---

### Implementation Notes

Architecture Diagram

Five Window Illustration

Download Sample

Read White Paper

---

### Acceptance

✓ Five Window出现

✓ EP流程图正确

✓ Download按钮

--------------------------------------------------

### 3 Historical RGA™ 中文关键点说明

这里不要写：

AI Learning。

Machine Learning。

Knowledge Graph。

Atlas没有自动学习。

Atlas只是：

Recall。

Reuse。

Reference。

一定强调：

Why Retrieved。

Strong Candidate。

Partial Candidate。

Environment Difference。

---

### Implementation Notes

Timeline

Historical Card

Investigation Summary

IR

LL

Why Retrieved

---

### Acceptance

✓ 不出现Root Cause Confirmed

✓ 不出现AI Recommendation

✓ Historical RGA介绍完整

--------------------------------------------------

### 4 Investigation Workspace™ 中文关键点说明

Workspace不是Dashboard。

Workspace就是：

调查现场。

所有工程师在这里工作。

所有Evidence都围绕Workspace。

以后Demo UI也是这个概念。

---

### Implementation Notes

Workspace Preview

Workflow

Button

Open Demo

---

### Acceptance

✓ Workflow清楚

✓ Workspace截图

✓ Demo入口

--------------------------------------------------

### 5 Sensor Engagement Pack™ 中文关键点说明

EGP不是Evidence Pack。

EP

↓

OEM内部。

EGP

↓

OEM发送给Sensor。

这是Atlas最大的特色。

必须重点介绍。

---

### Implementation Notes

OEM

↓

EGP

↓

Sensor

Illustration

---

### Acceptance

✓ OEM流程

✓ Sensor流程

✓ Privacy说明

--------------------------------------------------

### 6 Assist Vault™ 中文关键点说明

不要写：

Archive。

Database。

Storage。

Vault是：

组织记忆。

以后客户越来越值钱。

这是长期飞轮。

---

### Implementation Notes

Vault Illustration

Historical Growth

Knowledge Reuse

---

### Acceptance

✓ Growth Illustration

✓ Reuse说明

--------------------------------------------------

### 7 Executive Dashboard™ 中文关键点说明

这一页卖老板。

不是卖工程师。

老板看：

ROI

SLA

Coverage

Reuse

Cost Saving

不要出现复杂技术细节。

---

### Implementation Notes

Dashboard Preview

Charts

KPI

Request Demo

---

### Acceptance

✓ Dashboard Preview

✓ KPI

✓ ROI说明

✓ 所有商业数字标记：

Illustrative Demo Data

---

## Platform Page Layout 中文关键点说明

整个Platform页面，

梁工不要自由发挥。

严格按：

Hero

↓

Architecture

↓

7 Cards

↓

Products Relationship

↓

Documentation

↓

CTA

即可。

不要增加Marketing内容。

不要增加Pricing。

不要增加FAQ。

---

## Final Acceptance

✓ Platform介绍基础设施

✓ 不介绍Programming Framework

✓ Seven Capability Cards完整

✓ Atlas Constitutional Boundary正确

✓ 所有Terminology与Canonical一致

✓ 页面可直接链接Documentation

✓ 页面可直接链接White Paper

✓ Request Demo正常
