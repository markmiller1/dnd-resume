import { isChineseLanguage } from '@/locales/i18n'
import type { IBasicInfoData, ILinkData, IStyleData, IWidgetNode, WidgetType } from '#widgets/types'

type WidgetNodeOf<T extends WidgetType> = Extract<IWidgetNode, { type: T }>

export function generateWidgetId(): string {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
}

export function createDefaultWidgets(): IWidgetNode[] {
  const isChinese = isChineseLanguage()
  return [
    createBasicInfoNode(isChinese),
    createTitleSectionNode(isChinese ? '个人简介' : 'Professional Summary'),
    createTextContentNode(
      isChinese
        ? '<p>拥有 5 年以上 SaaS 与数据密集型 Web 应用开发经验，专注于使用 <code>React</code>、<code>TypeScript</code> 构建可靠、易维护的前端产品。熟悉复杂数据表格、仪表盘、权限系统和请求状态管理，能够从需求分析、技术方案设计到上线监控完成端到端交付。</p>'
        : '<p>Frontend Engineer with 5+ years of experience building reliable, maintainable SaaS and data-heavy web applications with <code>React</code> and <code>TypeScript</code>. Experienced in complex data tables, dashboards, permission systems, and request-state management, with end-to-end ownership from technical discovery to production monitoring.</p>',
    ),
    createTitleSectionNode(isChinese ? '工作经历' : 'Work Experience'),
    createExperienceTimeNode(
      isChinese ? '某公司' : 'Anonymous Data Collaboration SaaS',
      isChinese ? '2080/07 - 至今' : '2080/07 - Present',
    ),
    createTextContentNode(
      isChinese
        ? '<h3>数据分析与协作平台</h3><ul><li><p>负责数据分析、报表配置和团队协作模块，支持多角色、多权限和多语言业务场景。</p></li><li><p>使用 <code>React</code>、<code>TypeScript</code> 构建支持 5 万行数据的虚拟化表格，保持稳定的滚动与筛选体验。</p></li><li><p>基于 <code>TanStack Query</code> 设计请求缓存、失效和乐观更新策略，减少重复请求约 45%。</p></li><li><p>优化仪表盘加载流程、接口请求和图表渲染，使核心页面可交互时间缩短约 35%。</p></li><li><p>完善空状态、错误恢复、加载反馈和权限提示，降低相关支持工单约 40%。</p></li></ul>'
        : '<h3>Data Analytics &amp; Collaboration Platform</h3><ul><li><p>Owned analytics, report configuration, and collaboration modules across multi-role, permissioned, and multilingual workflows.</p></li><li><p>Built a virtualized data table with <code>React</code> and <code>TypeScript</code> to support 50K rows with stable scrolling and filtering.</p></li><li><p>Designed request caching, invalidation, and optimistic updates with <code>TanStack Query</code>, reducing duplicate requests by approximately 45%.</p></li><li><p>Optimized dashboard loading, API requests, and chart rendering, reducing time to interactive for core pages by approximately 35%.</p></li><li><p>Strengthened empty states, error recovery, loading feedback, and permission messaging, reducing related support tickets by approximately 40%.</p></li></ul>',
    ),
    createExperienceTimeNode(
      isChinese ? '某公司' : 'Anonymous Enterprise Software Company',
      '2077/07 - 2080/07',
      6,
    ),
    createTextContentNode(
      isChinese
        ? '<h3>企业管理平台</h3><ul><li><p>开发合同、审批、库存和组织管理等业务模块，覆盖复杂表单、批量操作、导入导出和权限控制场景。</p></li><li><p>使用 <code>React</code> 和 <code>TypeScript</code> 逐步迁移旧版管理系统，提升代码可维护性和类型安全。</p></li><li><p>与后端共同定义接口数据结构，减少前后端联调中的字段歧义和重复沟通。</p></li><li><p>参与国际化、时区处理和移动端适配，保证不同地区用户的使用体验。</p></li></ul>'
        : '<h3>Enterprise Management Platform</h3><ul><li><p>Delivered contract, approval, inventory, and organization-management modules across complex forms, bulk actions, import/export, and permission workflows.</p></li><li><p>Gradually migrated a legacy administration system to <code>React</code> and <code>TypeScript</code>, improving maintainability and type safety.</p></li><li><p>Worked with backend engineers to define API contracts and reduce ambiguity during integration.</p></li><li><p>Contributed to internationalization, timezone handling, and mobile adaptation for a consistent experience across regions.</p></li></ul>',
    ),
    createTitleSectionNode(isChinese ? '教育经历' : 'Education'),
    createExperienceTimeNode(
      isChinese
        ? '某综合大学 - 计算机相关专业'
        : 'Anonymous University - Computer Science or Related Field',
      '2073/07 - 2077/07',
    ),
  ]
}

export function createWidgetNode(type: WidgetType): IWidgetNode {
  const isChinese = isChineseLanguage()
  const id = generateWidgetId()
  switch (type) {
    case 'BasicInfo':
      return createBasicInfoNode(isChinese, id)
    case 'TitleSection':
      return createTitleSectionNode(isChinese ? '工作经历' : 'Work Experience', id)
    case 'ExperienceTime':
      return createExperienceTimeNode(
        isChinese ? 'XX有限公司' : 'XX Company',
        '2077/07 - 2080/07',
        0,
        id,
      )
    case 'TextContent':
      return createTextContentNode(
        isChinese
          ? '<h3>XX项目</h3><ul><li><p>负责从需求分析到前端架构设计、功能开发及性能优化的全流程开发工作。</p></li><li><p>坚持与产品、设计、后端团队紧密协作，推动敏捷开发流程和 CI/CD 工具链的落地，确保高质量的交付。</p></li><li><p>通过深入研究用户体验和前端性能，成功优化支付流程页面，提升了用户转化率和支付成功率。</p></li></ul>'
          : '<h3>XX Project - Web Frontend Development</h3><ul><li><p>Responsible for the full development process from requirement analysis to frontend architecture design, feature development, and performance optimization.</p></li><li><p>Consistently collaborated with product, design, and backend teams to promote agile development processes and implement CI/CD toolchains, ensuring high-quality delivery.</p></li><li><p>Successfully optimized the payment process page through in-depth research on user experience and frontend performance, improving user conversion and payment success rates.</p></li></ul>',
        id,
      )
    case 'ImageSection':
      return createImageSectionNode(id)
    default: {
      const exhaustiveCheck: never = type
      return exhaustiveCheck
    }
  }
}

function createBasicInfoNode(
  isChinese: boolean,
  id = generateWidgetId(),
): WidgetNodeOf<'BasicInfo'> {
  return {
    type: 'BasicInfo',
    id,
    data: createBasicInfoData(isChinese),
  }
}

function createBasicInfoData(isChinese: boolean): IBasicInfoData {
  const email = isChinese ? 'lina@gmail.com' : 'alexchen@gmail.com'
  return {
    propsData: {
      avatarUrl: isChinese ? '/avatar-zh.png' : '/avatar-en.png',
      avatarSize: 86,
      avatarRound: true,
      name: isChinese ? '李娜' : 'Alex Chen',
      jobTitle: isChinese ? '前端开发工程师' : 'Frontend Developer',
      linksGroup: [
        [
          { href: '', content: '2050/01', icon: 'cake' },
          { href: '', content: '15123456789', icon: 'phone' },
        ],
        [
          { href: 'https://github.com/', content: 'github.com', icon: 'github' },
          { href: `mailto:${email}`, content: email, icon: 'gmail' },
        ],
        [],
      ],
    },
    styleData: createStyleData(),
  }
}

function createTitleSectionNode(
  title: string,
  id = generateWidgetId(),
): WidgetNodeOf<'TitleSection'> {
  return {
    type: 'TitleSection',
    id,
    data: {
      propsData: { title },
      styleData: createStyleData(20, 12),
    },
  }
}

function createTextContentNode(
  content: string,
  id = generateWidgetId(),
): WidgetNodeOf<'TextContent'> {
  return {
    type: 'TextContent',
    id,
    data: {
      propsData: { content },
      styleData: createStyleData(),
    },
  }
}

function createExperienceTimeNode(
  title: string,
  dateRange: string,
  marginTop = 0,
  id = generateWidgetId(),
): WidgetNodeOf<'ExperienceTime'> {
  return {
    type: 'ExperienceTime',
    id,
    data: {
      propsData: { title, dateRange },
      styleData: createStyleData(marginTop),
    },
  }
}

function createImageSectionNode(id = generateWidgetId()): WidgetNodeOf<'ImageSection'> {
  return {
    type: 'ImageSection',
    id,
    data: {
      propsData: {
        url: '/image.png',
        imageSize: 100,
        borderRadius: 0,
      },
      styleData: createStyleData(10, 10),
    },
  }
}

function createStyleData(marginTop = 0, marginBottom = 0): IStyleData {
  return { marginTop, marginBottom }
}

export function createLinkData(): ILinkData {
  return {
    href: 'https://github.com/',
    content: 'github.com',
    icon: 'link',
  }
}
