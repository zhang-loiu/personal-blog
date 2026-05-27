export const articles: Record<string, string> = {
  'my-blog-journey': `
# 搭建个人博客的意义与实践

在这个信息过载的时代，拥有一个属于自己的数字空间，记录思考、分享心得，是一件多么有意义的事情。

## 为什么要写博客

我常常问自己，为什么要花时间写博客？毕竟，我们生活在一个快节奏的世界里，有太多事情在争夺我们的注意力。

> 写作是思考的延伸。当你将想法付诸文字时，你才真正理解了它们。

对我来说，写博客有三个主要目的：

1. **知识沉淀**：将学到的东西整理成文字，加深理解
2. **建立个人品牌**：通过分享建立专业形象
3. **连接志同道合的人**：让同样感兴趣的人能够找到你

## 选择什么样的技术栈

搭建博客有很多选择，从 WordPress、Hexo 到完全自定义。我最终选择了自己搭建，原因很简单：

- 想要完全的控制权
- 享受从头构建的乐趣
- 把它当作一个学习项目

### 我的选择

- **前端**：React + TypeScript + Vite
- **样式**：Tailwind CSS
- **部署**：GitHub Pages + Cloudflare
- **域名**：自己的域名

## 写作的习惯

> 灵感是在写作过程中产生的，而不是在写作之前。

我尝试建立一个规律的写作习惯：

- 每周至少写一篇
- 不追求完美，先完成再迭代
- 记录的同时也要思考

---

希望这个博客能成为我思想的后花园，也欢迎你来这里坐坐。
  `,

  'learning-react-hooks': `
# 深入理解 React Hooks：从 useState 到自定义 Hook

React Hooks 彻底改变了我们编写组件的方式。本文带你深入理解 Hooks 的设计哲学和最佳实践。

## 什么是 Hooks

Hooks 是 React 16.8 引入的新特性，让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

\`\`\`typescript
const [count, setCount] = useState(0);
\`\`\`

看似简单的一行代码，背后蕴含着深刻的设计思想。

## useState 的工作原理

useState 是最基础也是最常用的 Hook。让我们看看它是如何工作的：

\`\`\`typescript
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

### 关键点

1. **数组解构**：React 返回一个数组，第一个元素是 state 值，第二个是更新函数
2. **调用顺序**：Hooks 的调用顺序必须保持一致
3. **闭包陷阱**：理解闭包是掌握 Hooks 的关键

## useEffect：副作用管理

useEffect 让你在函数组件中执行副作用操作：

\`\`\`typescript
useEffect(() => {
  document.title = \`Count: \${count}\`;
  
  return () => {
    // 清理函数
  };
}, [count]);
\`\`\`

### 依赖数组

依赖数组决定了 effect 何时重新执行：

| 情况 | 行为 |
|------|------|
| 空数组 \`[]\` | 只在挂载时执行一次 |
| 不传 | 每次渲染都执行 |
| 有依赖项 | 依赖项变化时执行 |

## 自定义 Hooks

当你发现自己在重复某些逻辑时，应该考虑提取为自定义 Hook：

\`\`\`typescript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
\`\`\`

## 总结

Hooks 让函数组件拥有了完整的状态管理能力，这是 React 发展历程中的重要一步。理解它们的工作原理，能帮助你写出更优雅、更可维护的代码。
  `,

  'reading-notes-2024': `
# 2024 年上半年读书清单与心得

半年时间，读完了 15 本书，有小说、有哲学、有科技。分享几本让我印象深刻的作品。

## 文学类

### 《百年孤独》

重读马尔克斯的经典，这次有了完全不同的感受。时间的循环、命运的轮回，魔幻现实主义的巅峰之作。

> 生命中曾经有过的所有灿烂，原来终究，都需要用寂寞来偿还。

布恩迪亚家族七代人的故事，让我思考什么是真正的孤独。

### 《被讨厌的勇气》

一本改变我人生观的书。阿德勒心理学的通俗解读，"一切烦恼皆源于人际关系"这个观点振聋发聩。

**核心观点：**

1. 决定我们自身的不是过去的经历，而是我们自己赋予经历的意义
2. 健全的自卑感不是来自与别人的比较，而是来自与"理想的自己"的比较
3. 自由就是被别人讨厌

## 技术类

### 《代码整洁之道》

重读经典，常读常新。好代码和坏代码的区别，往往就在于那些细节。

印象最深的是关于命名的章节：

> 变量、函数或类的名称应该已经回答了所有的大问题。它该告诉你，它为什么会存在，它做什么事，应该怎么用。

## 哲学类

### 《苏菲的世界》

用小说的方式介绍西方哲学史，从苏格拉底到萨特，一个奇妙的思想旅程。

最喜欢里面的这句话：

> 唯有清晰地意识到有一天她终将死去，她才能够体会活在世上是多么美好。

---

阅读是一场没有终点的旅行。下半年，继续读书，继续思考。
  `,

  'minimalism-digital': `
# 数字极简主义：减少干扰，专注创作

在信息爆炸的时代，我们需要学会主动选择，而不是被动接收。聊聊我的数字极简实践。

## 什么是数字极简主义

数字极简主义不是拒绝科技，而是**有意识地使用科技**。

> 科技应该是你的仆人，而不是你的主人。

### 核心原则

1. **刻意选择**：只使用那些真正带来价值的工具
2. **高质量替代**：用深度活动替代碎片化消费
3. **定期清理**：定期审视你的数字生活

## 我的实践

### 1. 清理应用

一年前，我的手机上有 120+ 个应用。现在：

- **社交**：只保留必要的
- **娱乐**：卸载所有短视频应用
- **工具**：每个类别只留一个最好的

### 2. 时间管理

我使用"深度工作"的方法：

\`\`\`
上午 9:00 - 11:00  深度工作（不查看任何通知）
下午 14:00 - 16:00 深度工作
其余时间          处理邮件、会议等
\`\`\`

### 3. 信息摄入

- **取消所有推送**：除了即时通讯
- **RSS 订阅**：主动订阅优质内容源
- **每周整理**：周末清理收件箱和阅读列表

## 收益

自从开始实践数字极简：

| 指标 | 变化 |
|------|------|
| 日均屏幕时间 | 从 8 小时降到 3 小时 |
| 专注力 | 显著提升 |
| 完成的有意义事情 | 增加了 2-3 倍 |
| 焦虑感 | 大幅降低 |

## 结语

> 简单不是匮乏，而是专注于真正重要的事情。

数字极简不是目的，而是手段。它让我们把时间和精力投入到那些真正重要的事情上。
  `,

  'typescript-patterns': `
# TypeScript 实用模式：让类型系统为你服务

分享几个在实际项目中常用的 TypeScript 设计模式，让你的代码更安全、更优雅。

## 1. 品牌类型（Branded Types）

有时候，即使两个类型的结构相同，我们也希望它们是完全不同的类型。

\`\`\`typescript
type UserId = string & { __brand: 'UserId' };
type OrderId = string & { __brand: 'OrderId' };

function createUserId(id: string): UserId {
  return id as UserId;
}

function findUser(id: UserId) {
  // ...
}

// ❌ 错误
findUser('123');

// ✅ 正确
findUser(createUserId('123'));
\`\`\`

## 2. 可辨别联合（Discriminated Unions）

处理多种状态时的最佳模式：

\`\`\`typescript
type DataState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function render<T>(state: DataState<T>) {
  switch (state.status) {
    case 'loading':
      return <Spinner />;
    case 'success':
      return <DataView data={state.data} />;
    case 'error':
      return <ErrorView error={state.error} />;
  }
}
\`\`\`

## 3. 类型守卫（Type Guards）

运行时检查配合编译时类型：

\`\`\`typescript
interface Dog {
  woof(): void;
}

interface Cat {
  meow(): void;
}

function isDog(animal: Dog | Cat): animal is Dog {
  return 'woof' in animal;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.woof(); // TypeScript 知道这是 Dog
  } else {
    animal.meow(); // TypeScript 知道这是 Cat
  }
}
\`\`\`

## 4. 条件类型（Conditional Types）

根据条件选择类型：

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // true
type B = IsString<123>;      // false
\`\`\`

实用例子：

\`\`\`typescript
type PromiseType<T> = T extends Promise<infer U> ? U : T;

type X = PromiseType<Promise<string>>;  // string
type Y = PromiseType<number>;           // number
\`\`\`

## 总结

TypeScript 的类型系统非常强大，掌握这些模式能让你写出既安全又表达力强的代码。记住：

> 类型系统应该是你的朋友，而不是敌人。
  `,

  'morning-routine': `
# 晨间仪式：如何让每天的开始更有意义

坚持了一年的晨间习惯，让我对生活有了全新的认识。分享我的日常仪式。

## 我的晨间流程

\`\`\`
6:00  起床（不看手机）
6:05  喝一杯温水
6:10  10 分钟冥想
6:25  30 分钟阅读
6:55  简单的拉伸运动
7:10  写晨间日记
7:30  早餐 + 规划一天
\`\`\`

## 为什么要早起

> 早晨是一天中最宁静的时刻，也是最接近自己的时刻。

### 早起的好处

- **无干扰**：大多数人还在睡觉，没有消息、没有会议
- **意志力高峰**：经过一晚的休息，意志力最充沛
- **掌控感**：在世界开始运转之前，先掌控自己的时间

## 关键习惯

### 1. 冥想

不需要复杂的技巧，只是坐着观察呼吸：

> 冥想不是清空思绪，而是观察思绪的来去，不被它们带走。

### 2. 阅读

早上的阅读和睡前的阅读感受完全不同。早晨更适合读那些需要思考的书。

### 3. 晨间日记

回答三个问题：

1. 今天要完成哪三件最重要的事？
2. 今天想成为什么样的人？
3. 有什么值得感恩的？

## 如何坚持

1. **从小处开始**：不要试图一次做到所有
2. **固定时间**：让习惯成为自动化
3. **记录进度**：看到自己的坚持会更有动力
4. **偶尔中断没关系**：不要因为一次中断就放弃

---

> 你怎样度过早晨，就怎样度过一生。

愿你也能找到属于自己的晨间仪式。
  `,
};

export function getArticleContent(slug: string): string | undefined {
  return articles[slug];
}
