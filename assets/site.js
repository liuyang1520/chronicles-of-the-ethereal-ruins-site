/**
 * Chronicles of the Ethereal Ruins (《灵墟纪》)
 * Site Engine: 6-Language Localization & Dark/Light Theme Switcher
 */

(function () {
  'use strict';

  // 1. Language Definitions & Dictionaries
  const LANGUAGES = {
    'en': 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
    'ja': '日本語',
    'ko': '한국어',
    'es': 'Español'
  };

  const LANG_HTML_MAP = {
    'en': 'en',
    'zh-CN': 'zh-Hans',
    'zh-TW': 'zh-Hant',
    'ja': 'ja',
    'ko': 'ko',
    'es': 'es'
  };

  const I18N = {
    'en': {
      'site.title': 'Chronicles of the Ethereal Ruins — A Minimalist Ink Xianxia Simulator',
      'site.desc': 'Meditate in mountain sanctums, harness spiritual Qi, endure celestial tribulations, and uncover the forgotten truths of the ethereal ruins.',
      'brand.en': 'Chronicles of the Ethereal Ruins',
      'brand.zh': '灵墟纪 · 东方修仙模拟器',
      'nav.cultivation': 'Cultivation',
      'nav.realms': 'Realms',
      'nav.languages': 'Languages',
      'nav.privacy': 'Privacy',
      'nav.support': 'Support',
      'nav.github': 'GitHub',
      'nav.issues': 'Issues',
      'theme.dark': 'Dark Mode',
      'theme.light': 'Light Mode',
      'theme.toggle': 'Toggle light/dark mode',

      // Hero
      'hero.eyebrow': 'A MINIMALIST INK XIANXIA SIMULATOR',
      'hero.h1': 'Seek the Dao.<br>Endure the Tribulation.<br><span>Ascend Beyond.</span>',
      'hero.lede': 'Wake within a secluded mountain sanctum. Gather spiritual Qi in rhythm with real-time breathing. Inscribe talismans, forge flying blades, explore ancient ruins, and transcend mortal limits.',
      'hero.ctaCodex': 'EXPLORE THE CODEX',
      'hero.ctaSupport': 'GET SUPPORT',
      'vessel.label': 'VESSEL · CULTIVATION CORE',
      'vessel.stage': 'QI REFINEMENT IX',
      'vessel.badge': 'LIVE SIMULATION',
      'vessel.destLabel': 'DESTINATION',
      'vessel.destVal': 'QINGYA PEAK',
      'vessel.cycleLabel': 'QI CYCLE',
      'vessel.cycleVal': 'CIRCULATING',

      // Readout
      'readout.clockLabel': 'CALENDAR',
      'readout.clockVal': 'REAL-TIME BREATHING',
      'readout.storageLabel': 'STORAGE',
      'readout.storageVal': 'ON-DEVICE SANDBOX',
      'readout.engineLabel': 'ENGINE',
      'readout.engineVal': 'OFFLINE-FIRST',
      'readout.trackLabel': 'TRACKING',
      'readout.trackVal': 'ZERO / PRIVATE',
      'readout.langLabel': 'TRANSLATION',
      'readout.langVal': '6 MAJOR LANGUAGES',

      // Three Pillars
      'pillars.eyebrow': 'THE THREE PILLARS',
      'pillars.h2': 'The heavens will not hasten for your ambition.',
      'pillars.desc': 'Your journey begins with a breath. Cultivation matures second by second, rewarding quiet discipline over frantic tapping. Everything you discover is earned through insight, balance, and patience.',
      'card1.title': 'Solitary Meditation & Tribulation',
      'card1.desc': 'Retreat to your quiet sanctum to circulate spiritual Qi. When your meridians brim with power, brave the nine celestial lightning strikes to shatter mortal bottlenecks and break through into higher realms.',
      'card2.title': 'Shanhai Scroll & Five Realms',
      'card2.desc': 'Journey from the misty bamboo groves of Qingya Peak to the tidal archipelagos of the Lan Sea, the frozen swords of the Northern Wastes, the violet mists of Yunmeng Marsh, and the celestial debris of the Ethereal Ruins.',
      'card3.title': 'Artisan Forge & Pill Alchemy',
      'card3.desc': 'Gather wild Dew Grass and Moon Leaves to simmer restorative pills in bronze cauldrons. Refine spiritual ore at the Sword Terrace to forge flying blades inscribed with ancient golden seals.',

      // Systems
      'systems.eyebrow': 'MARTIAL DAO & ARTIFACTS',
      'systems.h2': 'A living Xianxia simulator written in ink.',
      'systems.p1': 'Engage in tactical turn-based ink duels governed by the Five Elements (Metal, Wood, Water, Fire, Earth). Encounter traveling immortals, debate spiritual philosophies, and inspect interactive 3D sacred treasures recovered from ancient ruins.',
      'systems.p2': 'Every encounter is narrated through poetic brushwork and accompanied by real-time acoustic Guqin plucks, temple bells, and the whispering rain of ancient shrines.',
      'systems.header': 'CORE SYSTEMS',
      'systems.status': 'OPERATIONAL',
      'sys1.title': 'FIVE ELEMENTS INK COMBAT',
      'sys1.desc': 'TACTICAL ATTACKS, PARRYING, & BURST SPELLS',
      'sys2.title': '3D SACRED RELIC VIEWER',
      'sys2.desc': 'INSPECT ANCIENT CAULDRONS, BELLS, & STELES',
      'sys3.title': 'BRANCHING DESTINY CODEX',
      'sys3.desc': '100+ PROCEDURAL ENCOUNTERS & SECT TASKS',
      'sys4.title': 'PROCEDURAL ACOUSTIC ENGINE',
      'sys4.desc': 'WEB AUDIO GUQIN, BRONZE BELLS, & RAIN SOUNDSCAPES',

      // Languages Section
      'langSec.eyebrow': 'GLOBAL LOCALIZATION',
      'langSec.h2': 'Cultivate in your tongue across 6 major languages.',
      'langSec.desc': 'Every term, sutra, and notification has been faithfully adapted to preserve authentic Eastern aesthetics and literary depth.',

      // Privacy Callout
      'privCallout.eyebrow': 'PRIVATE BY DESIGN',
      'privCallout.h2': 'The mountain mist is quiet.<br>Your data stays on your device.',
      'privCallout.desc': 'Chronicles of the Ethereal Ruins has no user accounts, no telemetry, no ad networks, and no trackers. Your cultivation state, forged items, and preferences reside solely within your device’s sandboxed local container. Completion alerts are scheduled locally—there is no cloud server observing your passage.',
      'privCallout.link': 'READ THE PRIVACY POLICY →',

      // Final CTA
      'cta.eyebrow': 'BEGIN YOUR CULTIVATION',
      'cta.h2': 'The Ascension Dais beckons.<br>The rest is your Dao.',
      'cta.desc': 'Designed for iPhone running iOS 15 or later, and modern Web browsers.',
      'cta.btnSupport': 'VISIT SUPPORT',
      'cta.btnGithub': 'VIEW ON GITHUB',
      'footer.rights': '© 2026 Chronicles of the Ethereal Ruins. All rights reserved.',

      // Support Page
      'support.title': 'Support — Chronicles of the Ethereal Ruins',
      'support.desc': 'Help, frequently asked questions, and support contact for Chronicles of the Ethereal Ruins (灵墟纪).',
      'support.heroEyebrow': 'SANCTUM BEACON · CULTIVATION ARCHIVES',
      'support.heroH1': 'How can we assist your Dao journey?',
      'support.heroP': 'Consult the cultivator guidelines below. If your inquiry remains unresolved, send a support signal via GitHub Issues and provide details of what occurred.',
      'support.statusLabel': 'STATION STATUS',
      'support.statusVal': 'RECEIVING',
      'support.statusDesc': 'Chronicles of the Ethereal Ruins 1.0 · iOS 15+ & Web',
      'support.compendiumEyebrow': 'DAOIST COMPENDIUM',
      'support.compendiumH2': 'Frequently asked questions',
      'faq.q1': 'How do I begin cultivation and break through?',
      'faq.a1': 'When you first awaken in your mountain sanctum, select Meditate (入定修炼) to begin gathering spiritual Qi. Cultivation progresses in real time, even while the game is closed. Once your Qi reservoir reaches the required threshold, return to your sanctum and choose Break Through (尝试破境). Weathering the heavenly tribulation advances your realm and unlocks new mystic techniques and regions.',
      'faq.q2': 'Why am I not receiving cultivation notifications?',
      'faq.a2': 'Chronicles of the Ethereal Ruins schedules notifications strictly on your local device. In iOS Settings, choose 灵墟纪 (Chronicles of the Ethereal Ruins), select Notifications, and ensure Allow Notifications is enabled. Inside the game, open the Settings sheet (gear icon) and verify Completion Alerts are enabled.',
      'faq.q3': 'Does the game require an internet connection?',
      'faq.a3': 'No. Chronicles of the Ethereal Ruins is an offline-first experience. All simulation algorithms, story branches, artisan recipes, 3D relic visualizers, and procedural audio run entirely locally on your device. You can cultivate atop real mountain summits or in airplane mode without any loss of functionality.',
      'faq.q4': 'Which languages are supported?',
      'faq.a4': 'The game provides verified localization across 6 major languages: English, Simplified Chinese (简体中文), Traditional Chinese (繁體中文), Japanese (日本語), Korean (한국어), and Spanish (Español). You can switch your preferred language at any time in the in-game Settings sheet.',
      'faq.q5': 'How does the sound and audio engine work?',
      'faq.a5': 'The game features a procedural Web Audio acoustic synthesizer reproducing ancient Guqin string plucks, bronze bells, sword strikes, and ambient rainfall without requiring large audio downloads. It respects your device\'s hardware Silent Mode switch.',
      'faq.q6': 'How do I forge blades and craft alchemy pills?',
      'faq.a6': 'After reaching Qi Refinement Stage 4, you can visit the Sect tab. The Alchemy Chamber allows you to combine spiritual herbs into restorative pills, and the Sword Terrace enables refining ore into personalized flying swords and talisman treasures.',
      'faq.q7': 'How do I backup, restore, or erase my progress?',
      'faq.a7': 'Save data is kept in your device\'s private sandboxed storage and is included in standard iOS device backups. To start fresh, open the in-game Settings sheet and choose Reincarnate / Reset Save. Deleting the app also wipes local save data.',
      'faq.q8': 'Which iOS devices and platforms are supported?',
      'faq.a8': 'The native iOS application supports all iPhone models running iOS 15 or later. The Web edition is fully compatible with modern versions of Safari, Chrome, Firefox, and Edge.',
      'support.contactEyebrow': 'STILL ENCOUNTERING TROUBLE?',
      'support.contactH2': 'Send a support signal.',
      'support.contactP': 'When reporting an issue, please describe your device model, iOS/browser version, what you expected to happen, and what occurred. Support requests are handled through our public GitHub repository. Please do not submit confidential personal information.',
      'support.contactChannel': 'COMMUNICATION CHANNEL',
      'support.contactTitle': 'GITHUB SUPPORT',
      'support.openBtn': 'OPEN A SUPPORT REQUEST',
      'support.repoBtn': 'VIEW REPOSITORY →',

      // Privacy Page
      'privacy.title': 'Privacy Policy — Chronicles of the Ethereal Ruins',
      'privacy.desc': 'Privacy Policy for Chronicles of the Ethereal Ruins (灵墟纪) for iOS and Web.',
      'privacy.heroEyebrow': 'SANCTUM CODEX · OFFICIAL PRIVACY POLICY',
      'privacy.heroH1': 'Privacy Policy',
      'privacy.heroSummary': 'Chronicles of the Ethereal Ruins (《灵墟纪》) does not collect, transmit, sell, or share your personal data. Your cultivation journey remains entirely on your device.',
      'privacy.effectiveLabel': 'EFFECTIVE DATE',
      'privacy.effectiveDate': 'AUGUST 11, 2026',
      'privacy.tocHeading': 'ON THIS PAGE',
      'privacy.toc1': '01. Overview',
      'privacy.toc2': '02. On-Device Save Data',
      'privacy.toc3': '03. Local Notifications',
      'privacy.toc4': '04. Audio & Web Audio API',
      'privacy.toc5': '05. Third Parties & SDKs',
      'privacy.toc6': '06. This Website',
      'privacy.toc7': '07. Your Control & Deletion',
      'privacy.toc8': '08. Children’s Privacy',
      'privacy.toc9': '09. Changes to This Policy',
      'privacy.toc10': '10. Contact & Support',
      'priv.s1Title': 'Overview',
      'priv.s1P1': 'Chronicles of the Ethereal Ruins (《灵墟纪》) is an offline-first, single-player Eastern ink cultivation simulation for iOS and modern Web browsers. It requires no user account, no email address, and connects to no external tracking servers.',
      'priv.s1P2': 'We believe an authentic cultivation experience requires tranquility and deep privacy. We do not collect personal information, gameplay telemetry, analytics, advertising identifiers (IDFA), precise location, or biometric data from the application.',
      'priv.s1CalloutTitle': 'IN PLAIN LANGUAGE',
      'priv.s1CalloutP': 'No user accounts. No analytics tracking. No advertising SDKs. No telemetry. Zero personal data collected.',
      'priv.s2Title': 'Information Stored on Your Device',
      'priv.s2P1': 'To deliver persistent offline gameplay, Chronicles of the Ethereal Ruins saves your cultivation progress locally on your device:',
      'priv.s2Li1': 'Cultivation State: Current realm tier (Qi Refinement through Void Tribulation), gathered spiritual Qi, insight, and vitality points.',
      'priv.s2Li2': 'Inventory & Crafting: Spiritual stones, forged blades, alchemy herbs, pills, and inscribed talismans.',
      'priv.s2Li3': 'World Progress: Explored regions (Qingya Peak, Lan Sea, Northern Wastes, Yunmeng Marsh, Ethereal Ruins), sect reputation, and completed story arcs.',
      'priv.s2Li4': 'Preferences: Sound toggle, selected locale / language, and notification permission states.',
      'priv.s2P2': 'This data is stored strictly in the app’s sandboxed local container on iOS (or HTML5 localStorage in the web version). We cannot access, retrieve, or inspect this information. It is never transmitted across the network.',
      'priv.s3Title': 'Local Notifications',
      'priv.s3P1': 'With your explicit permission, the app schedules local notifications to alert you when an in-game meditation session concludes, when a sect mission is ready for claim, or when a breakthrough tribulation opportunity arises.',
      'priv.s3P2': 'These notifications are computed and scheduled entirely on your local device using Apple’s local notification framework. The app does not utilize remote Apple Push Notification servers (APNs), and no gameplay or device data is ever transmitted to external notification relays.',
      'priv.s3P3': 'You can grant, modify, or revoke notification permissions at any time within iOS Settings > Notifications > 灵墟纪 (Chronicles of the Ethereal Ruins).',
      'priv.s4Title': 'Audio & Web Audio API',
      'priv.s4P1': 'The game utilizes synthesized Web Audio and native procedural audio generation (such as Guqin plucks, bronze bells, sword slashes, and thunder claps). The game does not access your microphone, does not record ambient sound, and respects your device’s hardware Silent Mode switch.',
      'priv.s5Title': 'Third Parties & External SDKs',
      'priv.s5P1': 'Chronicles of the Ethereal Ruins contains no third-party marketing frameworks, no advertising SDKs, no behavioral trackers, and no external telemetry services. The game is completely ad-free and contains no in-app purchases or pay-to-win mechanisms.',
      'priv.s6Title': 'This Website',
      'priv.s6P1': 'This marketing website (hosted on GitHub Pages) is a collection of static HTML, CSS, and asset files. It sets no tracking cookies, uses no Google Analytics, and requires no login.',
      'priv.s6P2': 'Standard web server access logs may be generated by GitHub Inc. for security and infrastructure reliability in accordance with GitHub\'s Privacy Statement.',
      'priv.s7Title': 'Your Control & Data Deletion',
      'priv.s7P1': 'Because all game progress resides exclusively on your local device:',
      'priv.s7Li1': 'In-App Reset: You can wipe your save data at any time from the in-game Settings sheet by choosing "Reincarnate / Reset Save".',
      'priv.s7Li2': 'Uninstalling the App: Deleting the app from your iOS device permanently purges all sandboxed save files, preferences, and local notifications in accordance with standard iOS behavior.',
      'priv.s7P2': 'Because we do not maintain a cloud database or user registry, there is no remote copy of your save data to delete or recover.',
      'priv.s8Title': 'Children’s Privacy',
      'priv.s8P1': 'The game does not collect personal identifiable information from any player, including children under the age of 13. It is compliant with COPPA and international privacy frameworks.',
      'priv.s9Title': 'Changes to This Policy',
      'priv.s9P1': 'Should future updates introduce cloud synchronization or optional online community features, this privacy policy will be updated prior to any data collection, and notice will be presented within the application.',
      'priv.s10Title': 'Contact & Support',
      'priv.s10P1': 'If you have questions, feedback, or concerns regarding this privacy policy or the application’s data practices, please open a public inquiry on GitHub:',
      'priv.s10Btn': 'Open an Issue on GitHub'
    },

    'zh-CN': {
      'site.title': '灵墟纪 · 东方水墨修仙模拟器 — 官方网站',
      'site.desc': '洞府入定，吞吐灵气，九天雷劫，寻溯远古灵墟。一款无广告、无内购、纯单机的水墨修仙模拟器。',
      'brand.en': 'Chronicles of the Ethereal Ruins',
      'brand.zh': '灵墟纪 · 东方修仙模拟器',
      'nav.cultivation': '修炼之道',
      'nav.realms': '山海五域',
      'nav.languages': '多语言',
      'nav.privacy': '隐私政策',
      'nav.support': '问道支持',
      'nav.github': '开源仓库',
      'nav.issues': '反馈建议',
      'theme.dark': '夜阑深邃',
      'theme.light': '宣纸清晖',
      'theme.toggle': '切换明暗模式',

      // Hero
      'hero.eyebrow': '东方水墨单机修仙模拟器',
      'hero.h1': '一念入定 · 问道飞升<br>九霄雷劫 · <span>万法归墟</span>',
      'hero.lede': '醒于青崖幽静洞府，循真实呼吸节奏聚纳天地灵气。手抚古琴、手制灵符、铸飞剑、炼神丹，踏足山海图卷，探寻远古灵墟未竟之秘。',
      'hero.ctaCodex': '参悟玉简',
      'hero.ctaSupport': '问道支持',
      'vessel.label': '本命气海 · 修炼法台',
      'vessel.stage': '炼气期第九层',
      'vessel.badge': '运转中',
      'vessel.destLabel': '驻留仙山',
      'vessel.destVal': '青崖峰',
      'vessel.cycleLabel': '周天运转',
      'vessel.cycleVal': '通畅充盈',

      // Readout
      'readout.clockLabel': '天地节律',
      'readout.clockVal': '真实周天呼吸',
      'readout.storageLabel': '存档存储',
      'readout.storageVal': '纯本地沙盒',
      'readout.engineLabel': '游戏架构',
      'readout.engineVal': '离线独立单机',
      'readout.trackLabel': '隐私追踪',
      'readout.trackVal': '零广告 · 零SDK',
      'readout.langLabel': '语言覆盖',
      'readout.langVal': '全球主流六国语言',

      // Three Pillars
      'pillars.eyebrow': '修道三纲',
      'pillars.h2': '大道至简，岁月不催急进之人。',
      'pillars.desc': '修行起于微芒呼吸。灵气点滴汇聚，讲求心境安宁与顺应天时，摒弃浮躁连点。所有机缘造化，皆源于定力与悟性。',
      'card1.title': '静室入定与九天雷劫',
      'card1.desc': '深居洞府吐纳精纯灵气。待到气海充盈之刻，引动九霄雷劫涤荡肉身经脉，破开凡胎枷锁，踏入筑基玄境。',
      'card2.title': '山海图卷与五大仙域',
      'card2.desc': '自青崖竹海与人间烟火起步，远渡澜海群岛与沉星废墟，横穿北荒冰原剑冢，涉足云梦大泽，直至飞升台之上的无尽灵墟。',
      'card3.title': '百工器道与神炉炼丹',
      'card3.desc': '采撷凝露草与月见叶，于古鼎中凝炼灵丹妙药；登临剑台淬炼赤炼铜，亲手刻铸铭纹飞剑与保命道符。',

      // Systems
      'systems.eyebrow': '墨韵斗法与仙道重宝',
      'systems.h2': '跃然纸上的水墨修真天地。',
      'systems.p1': '基于五行相生相克的策略回合斗法，逢云游散仙辨道论理，更能于三维空间把玩抚摩上古流传的铜钟、古鼎与残卷。',
      'systems.p2': '全篇以传统墨韵留白勾勒，辅以纯代码声学合成的古琴散音、晨钟暮磬与旧祠夜雨，让心境随琴音归于安宁。',
      'systems.header': '核心玄枢',
      'systems.status': '周天运行',
      'sys1.title': '五行水墨斗法',
      'sys1.desc': '招式拆解 · 灵剑招架 · 术法爆发',
      'sys2.title': '三维灵宝鉴赏',
      'sys2.desc': '上古铜鼎 · 传世玉磬 · 铭文飞剑',
      'sys3.title': '百卷因果命途',
      'sys3.desc': '百余种机缘奇遇 · 宗门差遣任务',
      'sys4.title': '代码声学引擎',
      'sys4.desc': '古琴泛音 · 铜磬长鸣 · 细雨润物',

      // Languages Section
      'langSec.eyebrow': '多语言覆盖',
      'langSec.h2': '六国主流语言，原汁原味领略修真意境。',
      'langSec.desc': '每一个术语、境界命题与通知提醒，皆经过严谨考究与文化转译，兼具古典诗意与当代体验。',

      // Privacy Callout
      'privCallout.eyebrow': '恪守隐私',
      'privCallout.h2': '仙雾自清宁。<br>修仙道果，尽归君身。',
      'privCallout.desc': '《灵墟纪》无需注册账号，绝无第三方分析追踪、广告插件或数据窃取。境界、法宝与行囊仅存留在你的设备之中。修炼完成提醒皆由本机直接安排，绝无远程服务器监控你的道途。',
      'privCallout.link': '查阅完整隐私政策 →',

      // Final CTA
      'cta.eyebrow': '踏上仙途',
      'cta.h2': '飞升台虚席以待。<br>前路道途，皆在君心。',
      'cta.desc': '专为 iPhone（iOS 15 及以上）及现代网页浏览器潜心打造。',
      'cta.btnSupport': '前往问道支持',
      'cta.btnGithub': '查看 GitHub 仓库',
      'footer.rights': '© 2026 灵墟纪 (Chronicles of the Ethereal Ruins). 保留所有权利。',

      // Support Page
      'support.title': '问道支持与常见问题 — 《灵墟纪》',
      'support.desc': '《灵墟纪》（Chronicles of the Ethereal Ruins）常见修仙疑问指南、故障排查与支持渠道。',
      'support.heroEyebrow': '问道玄台 · 修行释疑',
      'support.heroH1': '道友在仙途中有何困惑？',
      'support.heroP': '请先查阅下方修士指引。若未找到解答，欢迎通过 GitHub Issues 提交问题，详细说明设备环境与所遇情况。',
      'support.statusLabel': '道友联络驿站',
      'support.statusVal': '随时接引',
      'support.statusDesc': '灵墟纪 1.0 · 支持 iOS 15+ 与现代网页端',
      'support.compendiumEyebrow': '仙途答疑',
      'support.compendiumH2': '修仙常见问题',
      'faq.q1': '如何开始修炼与破境？',
      'faq.a1': '初入仙途时，在洞府中点击「入定修炼」即可开始吸纳天地灵气。即使退出应用，修炼也会在后台按真实时间持续积累。当灵气充盈气海后，回到洞府选择「尝试破境」，渡过天劫即可突破到下一大境界，解锁更多法门与地域。',
      'faq.q2': '为什么没有收到修炼完成的系统通知？',
      'faq.a2': '《灵墟纪》的所有通知都在设备本地安排。请在 iOS「设置」中找到「灵墟纪」，确保「允许通知」处于开启状态，并勾选横幅与锁定屏幕提醒。在游戏内「设置」界面中，也请确认「修成提醒」已打开。',
      'faq.q3': '游戏是否需要联网才能游玩？',
      'faq.a3': '不需要。《灵墟纪》是一款彻底的离线单机游戏。所有数值演化、剧情奇遇、炼丹铸剑与代码声效皆在本地实时运行。即便在深山闭关或飞行模式下，也完全不影响任何游戏体验。',
      'faq.q4': '支持哪些语言？',
      'faq.a4': '游戏原生完整支持 6 种主流语言：简体中文、繁體中文、英语（English）、日语（日本語）、韩语（한국어）与西班牙语（Español）。道友可在游戏内的「设置」窗口随时无缝切换。',
      'faq.q5': '游戏的声音与音效机制是怎样的？',
      'faq.a5': '游戏采用纯代码驱动的 Web Audio 物理声学波形合成引擎，模拟出古琴散音、泛音、青铜磬响与细雨声，无需下载沉重的音频素材。游戏完全遵循 iOS 静音键规则，静音时保持沉静。',
      'faq.q6': '如何铸炼飞剑与配制丹药？',
      'faq.a6': '境界达到炼气期第四层后，前往「山门」界面的「炼丹房」与「铸剑台」。采摘收集的灵药可在丹炉中精炼，开采的地火铜矿可在剑台铭刻符箓铸成法剑。',
      'faq.q7': '如何备份、转移或清除游戏存档？',
      'faq.a7': '游戏存档严格保存在设备本机的独立沙盒空间内。进行常规 iPhone 备份时会自动包含。若需重走仙途，可在游戏设置中选择「重入轮回 / 重置存档」。删除应用也会一并抹除本机数据。',
      'faq.q8': '支持哪些机型和平台？',
      'faq.a8': 'iOS 原生客户端支持运行 iOS 15 及更高版本的所有 iPhone 机型；网页版本兼容 Safari、Chrome、Firefox 和 Edge 等现代浏览器。',
      'support.contactEyebrow': '仍有未解疑难？',
      'support.contactH2': '向玄台发送传讯信标。',
      'support.contactP': '反馈问题时，请写明你的设备型号、系统版本、预期效果与实际现象。支持处理均在公开的 GitHub 仓库中进行，请切勿包含隐私或敏感信息。',
      'support.contactChannel': '沟通驿站',
      'support.contactTitle': 'GITHUB 问道信箱',
      'support.openBtn': '提交支持反馈工单',
      'support.repoBtn': '浏览网站开源仓库 →',

      // Privacy Page
      'privacy.title': '隐私政策 — 《灵墟纪》',
      'privacy.desc': '《灵墟纪》（Chronicles of the Ethereal Ruins）官方隐私合规说明。',
      'privacy.heroEyebrow': '玉简金篇 · 官方隐私政策',
      'privacy.heroH1': '隐私政策',
      'privacy.heroSummary': '《灵墟纪》绝不收集、传输、出售或分享你的任何个人隐私数据。你的所有道途修行，完全留存于你自己的设备之中。',
      'privacy.effectiveLabel': '生效日期',
      'privacy.effectiveDate': '2026 年 8 月 11 日',
      'privacy.tocHeading': '目录索引',
      'privacy.toc1': '01. 总则与声明',
      'privacy.toc2': '02. 本机设备存储数据',
      'privacy.toc3': '03. 本地系统通知',
      'privacy.toc4': '04. 音频与声学引擎',
      'privacy.toc5': '05. 第三方服务与SDK',
      'privacy.toc6': '06. 官方网站服务',
      'privacy.toc7': '07. 玩家掌控与数据删除',
      'privacy.toc8': '08. 未成年人隐私保护',
      'privacy.toc9': '09. 隐私政策变更',
      'privacy.toc10': '10. 联络与支持',
      'priv.s1Title': '总则与声明',
      'priv.s1P1': '《灵墟纪》（Chronicles of the Ethereal Ruins）是一款专为 iOS 及现代 Web 浏览器打造的离线单机东方水墨修仙模拟器。游戏无需注册账号、无需提供手机号或邮箱，亦不连接任何远程追踪服务器。',
      'priv.s1P2': '我们深信纯粹的修道之旅当归于安宁清静。应用内不收集任何个人身份信息、游玩行为遥测、分析统计、广告标识符（IDFA）、精准地理位置或生物识别信息。',
      'priv.s1CalloutTitle': '白话精要',
      'priv.s1CalloutP': '无需账号 · 无数据埋点 · 无广告SDK · 无行为追踪 · 绝不收集任何个人数据。',
      'priv.s2Title': '本机设备存储数据',
      'priv.s2P1': '为保证单机离线状态下的存档连续性，《灵墟纪》仅在你的设备本地存储必要的游戏数据：',
      'priv.s2Li1': '修行状态：当前境界（炼气至万法归墟）、灵气积累值、悟性与气血等。',
      'priv.s2Li2': '道具行囊：随身灵石、铭纹飞剑、灵草、丹药与刻录玉简。',
      'priv.s2Li3': '山海历程：已解锁的仙域地图（青崖、澜海、北荒、云梦、灵墟）、宗门声望与剧情选择旗标。',
      'priv.s2Li4': '系统偏好：音效开关状态、所选语言与本地通知权限设置。',
      'priv.s2P2': '以上数据均保存在 iOS 沙盒安全容器（或网页端 localStorage）内，开发者无法调阅，亦不会发生任何网络传输。',
      'priv.s3Title': '本地系统通知',
      'priv.s3P1': '经你主动授权后，应用会在本地安排系统提醒，用于在入定修炼圆满、宗门差遣达成或破境机缘已至时通知玩家。',
      'priv.s3P2': '此类通知完全在设备本地计算并触发，不经过任何远程推送服务器（APNs）。通知内容不包含任何设备外的泄露隐患。',
      'priv.s3P3': '你可随时在 iOS「设置 > 通知 > 灵墟纪」中调整或彻底关闭通知授权。',
      'priv.s4Title': '音频与声学引擎',
      'priv.s4P1': '游戏内使用 Web Audio 与本地声学代码合成古琴、铜钟与剑鸣。应用不会申请麦克风权限，绝不录制任何周围声音，并始终尊重设备的硬件静音开关。',
      'priv.s5Title': '第三方服务与SDK',
      'priv.s5P1': '《灵墟纪》不包含任何第三方广告联盟 SDK、行为分析工具、社交平台分享插件或追踪代码。游戏纯净无广告，亦无任何诱导性内购机制。',
      'priv.s6Title': '官方网站服务',
      'priv.s6P2': '本官方网站由 GitHub Pages 托管，均为静态文件。本站不植入追踪 Cookie，不接入 Google Analytics。GitHub 可能会依据其自身的隐私政策记录基础访问日志以确保安全。',
      'priv.s7Title': '玩家掌控与数据删除',
      'priv.s7P1': '由于所有存档均由你完全掌控并存在设备中：',
      'priv.s7Li1': '游戏内重置：在游戏内设置中选择「重入轮回」，可立即清除当前所有存档并重置。',
      'priv.s7Li2': '卸载应用：依据 iOS 规范，长按删除应用将永久清除设备沙盒内的所有本地数据。',
      'priv.s7P2': '因为我们不维护任何云端数据库，所以不存在任何可在服务器端被保留或恢复的玩家副本。',
      'priv.s8Title': '未成年人隐私保护',
      'priv.s8P1': '应用不对任何年龄段（包括 13 岁以下未成年人）收集个人隐私信息，符合 COPPA 及国际隐私法规。',
      'priv.s9Title': '隐私政策变更',
      'priv.s9P1': '若未来版本引入云存档或在线社区服务，本政策必将在收集任何数据前先行更新，并在应用内明确向道友告知。',
      'priv.s10Title': '联络与支持',
      'priv.s10P1': '若你对本隐私政策有任何疑问或需要协助，欢迎在 GitHub 提交公开工单进行交流：',
      'priv.s10Btn': '在 GitHub 上提交反馈工单'
    },

    'zh-TW': {
      'site.title': '靈墟紀 · 東方水墨修仙模擬器 — 官方網站',
      'site.desc': '洞府入定，吞吐靈氣，九天雷劫，尋溯遠古靈墟。一款無廣告、無內購、純單機的水墨修仙模擬器。',
      'brand.en': 'Chronicles of the Ethereal Ruins',
      'brand.zh': '靈墟紀 · 東方修仙模擬器',
      'nav.cultivation': '修煉之道',
      'nav.realms': '山海五域',
      'nav.languages': '多語言',
      'nav.privacy': '隱私政策',
      'nav.support': '問道支援',
      'nav.github': '開源倉庫',
      'nav.issues': '反饋建議',
      'theme.dark': '夜闌深邃',
      'theme.light': '宣紙清暉',
      'theme.toggle': '切換明暗模式',

      // Hero
      'hero.eyebrow': '東方水墨單機修仙模擬器',
      'hero.h1': '一念入定 · 問道飛升<br>九霄雷劫 · <span>萬法歸墟</span>',
      'hero.lede': '醒於青崖幽靜洞府，循真實呼吸節奏聚納天地靈氣。手撫古琴、手製靈符、鑄飛劍、煉神丹，踏足山海圖卷，探尋遠古靈墟未竟之秘。',
      'hero.ctaCodex': '參悟玉簡',
      'hero.ctaSupport': '問道支援',
      'vessel.label': '本命氣海 · 修煉法台',
      'vessel.stage': '煉氣期第九層',
      'vessel.badge': '運轉中',
      'vessel.destLabel': '駐留仙山',
      'vessel.destVal': '青崖峰',
      'vessel.cycleLabel': '周天運轉',
      'vessel.cycleVal': '通暢充盈',

      // Readout
      'readout.clockLabel': '天地節律',
      'readout.clockVal': '真實周天呼吸',
      'readout.storageLabel': '存檔存儲',
      'readout.storageVal': '純本地沙盒',
      'readout.engineLabel': '遊戲架構',
      'readout.engineVal': '離線獨立單機',
      'readout.trackLabel': '隱私追蹤',
      'readout.trackVal': '零廣告 · 零SDK',
      'readout.langLabel': '語言覆蓋',
      'readout.langVal': '全球主流六國語言',

      // Three Pillars
      'pillars.eyebrow': '修道三綱',
      'pillars.h2': '大道至簡，歲月不催急進之人。',
      'pillars.desc': '修行起於微芒呼吸。靈氣點滴匯聚，講求心境安寧與順應天時，摒棄浮躁連點。所有機緣造化，皆源於定力與悟性。',
      'card1.title': '靜室入定與九天雷劫',
      'card1.desc': '深居洞府吐納精純靈氣。待到氣海充盈之刻，引動九霄雷劫滌蕩肉身經脈，破開凡胎枷鎖，踏入築基玄境。',
      'card2.title': '山海圖卷與五大仙域',
      'card2.desc': '自青崖竹海與人間煙火起步，遠渡瀾海群島與沉星廢墟，橫穿北荒冰原劍冢，涉足雲夢大澤，直至飛升台之上的無盡靈墟。',
      'card3.title': '百工器道與神爐煉丹',
      'card3.desc': '採擷凝露草與月見葉，於古鼎中凝煉靈丹妙藥；登臨劍台淬煉赤煉銅，親手刻鑄銘紋飛劍與保命道符。',

      // Systems
      'systems.eyebrow': '墨韻鬥法與仙道重寶',
      'systems.h2': '躍然紙上的水墨修真天地。',
      'systems.p1': '基於五行相生相剋的策略回合鬥法，逢雲遊散仙辨道論理，更能於三維空間把玩撫摩上古流傳的銅鐘、古鼎與殘卷。',
      'systems.p2': '全篇以傳統墨韻留白勾勒，輔以純代碼聲學合成的古琴散音、晨鐘暮磬與舊祠夜雨，讓心境隨琴音歸於安寧。',
      'systems.header': '核心玄樞',
      'systems.status': '周天運行',
      'sys1.title': '五行水墨鬥法',
      'sys1.desc': '招式拆解 · 靈劍招架 · 術法爆發',
      'sys2.title': '三維靈寶鑑賞',
      'sys2.desc': '上古銅鼎 · 傳世玉磬 · 銘文飛劍',
      'sys3.title': '百卷因果命途',
      'sys3.desc': '百餘種機緣奇遇 · 宗門差遣任務',
      'sys4.title': '代碼聲學引擎',
      'sys4.desc': '古琴泛音 · 銅磬長鳴 · 細雨潤物',

      // Languages Section
      'langSec.eyebrow': '多語言覆蓋',
      'langSec.h2': '六國主流語言，原汁原味領略修真意境。',
      'langSec.desc': '每一個術語、境界命題與通知提醒，皆經過嚴謹考究與文化轉譯，兼具古典詩意與當代體驗。',

      // Privacy Callout
      'privCallout.eyebrow': '恪守隱私',
      'privCallout.h2': '仙霧自清寧。<br>修仙道果，盡歸君身。',
      'privCallout.desc': '《靈墟紀》無需註冊帳號，絕無第三方分析追蹤、廣告插件或數據竊取。境界、法寶與行囊僅存留在你的設備之中。修煉完成提醒皆由本機直接安排，絕無遠程伺服器監控你的道途。',
      'privCallout.link': '查閱完整隱私政策 →',

      // Final CTA
      'cta.eyebrow': '踏上仙途',
      'cta.h2': '飛升台虛席以待。<br>前路道途，皆在君心。',
      'cta.desc': '專為 iPhone（iOS 15 及以上）及現代網頁瀏覽器潛心打造。',
      'cta.btnSupport': '前往問道支援',
      'cta.btnGithub': '查看 GitHub 倉庫',
      'footer.rights': '© 2026 靈墟紀 (Chronicles of the Ethereal Ruins). 保留所有權利。',

      // Support Page
      'support.title': '問道支援與常見問題 — 《靈墟紀》',
      'support.desc': '《靈墟紀》（Chronicles of the Ethereal Ruins）常見修仙疑問指南、故障排查與支援管道。',
      'support.heroEyebrow': '問道玄台 · 修行釋疑',
      'support.heroH1': '道友在仙途中有何困惑？',
      'support.heroP': '請先查閱下方修士指引。若未找到解答，歡迎通過 GitHub Issues 提交問題，詳細說明設備環境與所遇情況。',
      'support.statusLabel': '道友聯絡驛站',
      'support.statusVal': '隨時接引',
      'support.statusDesc': '靈墟紀 1.0 · 支援 iOS 15+ 與現代網頁端',
      'support.compendiumEyebrow': '仙途答疑',
      'support.compendiumH2': '修仙常見問題',
      'faq.q1': '如何開始修煉與破境？',
      'faq.a1': '初入仙途時，在洞府中點擊「入定修煉」即可開始吸納天地靈氣。即使退出應用，修煉也會在後台按真實時間持續積累。當靈氣充盈氣海後，回到洞府選擇「嘗試破境」，渡過天劫即可突破到下一大境界，解鎖更多法門與地域。',
      'faq.q2': '為什麼沒有收到修煉完成的系統通知？',
      'faq.a2': '《靈墟紀》的所有通知都在設備本地安排。請在 iOS「設定」中找到「靈墟紀」，確保「允許通知」處於開啟狀態，並勾選橫幅與鎖定螢幕提醒。在遊戲內「設定」介面中，也請確認「修成提醒」已打開。',
      'faq.q3': '遊戲是否需要聯網才能遊玩？',
      'faq.a3': '不需要。《靈墟紀》是一款徹底的離線單機遊戲。所有數值演化、劇情奇遇、煉丹鑄劍與代碼聲效皆在本地實時運行。即便在深山閉關或飛行模式下，也完全不影響任何遊戲體驗。',
      'faq.q4': '支援哪些語言？',
      'faq.a4': '遊戲原生完整支援 6 種主流語言：簡體中文、繁體中文、英語（English）、日語（日本語）、韓語（한국어）與西班牙語（Español）。道友可在遊戲內的「設定」窗口隨時無縫切換。',
      'faq.q5': '遊戲的聲音與音效機制是怎樣的？',
      'faq.a5': '遊戲採用純代碼驅動的 Web Audio 物理聲學波形合成引擎，模擬出古琴散音、泛音、青銅磬響與細雨聲，無需下載沉重的音頻素材。遊戲完全遵循 iOS 靜音鍵規則，靜音時保持沉靜。',
      'faq.q6': '如何鑄煉飛劍與配製丹藥？',
      'faq.a6': '境界達到煉氣期第四層後，前往「山門」介面的「煉丹房」與「鑄劍台」。採摘收集的靈藥可在丹爐中精煉，開採的地火銅礦可在劍台銘刻符籙鑄成法劍。',
      'faq.q7': '如何備份、轉移或清除遊戲存檔？',
      'faq.a7': '遊戲存檔嚴格保存在設備本機的獨立沙盒空間內。進行常規 iPhone 備份時會自動包含。若需重走仙途，可在遊戲設定中選擇「重入輪迴 / 重置存檔」。刪除應用也會一併抹除本機數據。',
      'faq.q8': '支援哪些機型和平台？',
      'faq.a8': 'iOS 原生客戶端支援運行 iOS 15 及更高版本的所有 iPhone 機型；網頁版本兼容 Safari、Chrome、Firefox 和 Edge 等現代瀏覽器。',
      'support.contactEyebrow': '仍有未解疑難？',
      'support.contactH2': '向玄台發送傳訊信標。',
      'support.contactP': '反饋問題時，請寫明你的設備型號、系統版本、預期效果與實際現象。支援處理均在公開的 GitHub 倉庫中進行，請切勿包含隱私或敏感資訊。',
      'support.contactChannel': '溝通驛站',
      'support.contactTitle': 'GITHUB 問道信箱',
      'support.openBtn': '提交支援反饋工單',
      'support.repoBtn': '瀏覽網站開源倉庫 →',

      // Privacy Page
      'privacy.title': '隱私政策 — 《靈墟紀》',
      'privacy.desc': '《靈墟紀》（Chronicles of the Ethereal Ruins）官方隱私合規說明。',
      'privacy.heroEyebrow': '玉簡金篇 · 官方隱私政策',
      'privacy.heroH1': '隱私政策',
      'privacy.heroSummary': '《靈墟紀》絕不收集、傳輸、出售或分享你的任何個人隱私數據。你的所有道途修行，完全留存於你自己的設備之中。',
      'privacy.effectiveLabel': '生效日期',
      'privacy.effectiveDate': '2026 年 8 月 11 日',
      'privacy.tocHeading': '目錄索引',
      'privacy.toc1': '01. 總則與聲明',
      'privacy.toc2': '02. 本機設備存儲數據',
      'privacy.toc3': '03. 本地系統通知',
      'privacy.toc4': '04. 音訊與聲學引擎',
      'privacy.toc5': '05. 第三方服務與SDK',
      'privacy.toc6': '06. 官方網站服務',
      'privacy.toc7': '07. 玩家掌控與數據刪除',
      'privacy.toc8': '08. 未成年人隱私保護',
      'privacy.toc9': '09. 隱私政策變更',
      'privacy.toc10': '10. 聯絡與支援',
      'priv.s1Title': '總則與聲明',
      'priv.s1P1': '《靈墟紀》（Chronicles of the Ethereal Ruins）是一款專為 iOS 及現代 Web 瀏覽器打造的離線單機東方水墨修仙模擬器。遊戲無需註冊帳號、無需提供手機號或信箱，亦不連接任何遠程追蹤伺服器。',
      'priv.s1P2': '我們深信純粹的修道之旅當歸於安寧清靜。應用內不收集任何個人身份資訊、遊玩行為遙測、分析統計、廣告標識符（IDFA）、精準地理位置或生物識別資訊。',
      'priv.s1CalloutTitle': '白話精要',
      'priv.s1CalloutP': '無需帳號 · 無數據埋點 · 無廣告SDK · 無行為追蹤 · 絕不收集任何個人數據。',
      'priv.s2Title': '本機設備存儲數據',
      'priv.s2P1': '為保證單機離線狀態下的存檔連續性，《靈墟紀》僅在你的設備本地存儲必要的遊戲數據：',
      'priv.s2Li1': '修行狀態：當前境界（煉氣至萬法歸墟）、靈氣積累值、悟性與氣血等。',
      'priv.s2Li2': '道具行囊：隨身靈石、銘紋飛劍、靈草、丹藥與刻錄玉簡。',
      'priv.s2Li3': '山海歷程：已解鎖的仙域地圖（青崖、瀾海、北荒、雲夢、靈墟）、宗門聲望與劇情選擇旗標。',
      'priv.s2Li4': '系統偏好：音效開關狀態、所選語言與本地通知權限設置。',
      'priv.s2P2': '以上數據均保存在 iOS 沙盒安全容器（或網頁端 localStorage）內，開發者無法調閱，亦不會發生任何網絡傳輸。',
      'priv.s3Title': '本地系統通知',
      'priv.s3P1': '經你主動授權後，應用會在本地安排系統提醒，用於在入定修煉圓滿、宗門差遣達成或破境機緣已至時通知玩家。',
      'priv.s3P2': '此類通知完全在設備本地計算並觸發，不經過任何遠程推送伺服器（APNs）。通知內容不包含任何設備外的洩露隱患。',
      'priv.s3P3': '你可隨時在 iOS「設定 > 通知 > 靈墟紀」中調整或徹底關閉通知授權。',
      'priv.s4Title': '音訊與聲學引擎',
      'priv.s4P1': '遊戲內使用 Web Audio 與本地聲學代碼合成古琴、銅鐘與劍鳴。應用不會申請麥克風權限，絕不錄製任何周圍聲音，並始終尊重設備的硬體靜音開關。',
      'priv.s5Title': '第三方服務與SDK',
      'priv.s5P1': '《靈墟紀》不包含任何第三方廣告聯盟 SDK、行為分析工具、社交平台分享插件或追蹤代碼。遊戲純淨無廣告，亦無任何誘導性內購機制。',
      'priv.s6Title': '官方網站服務',
      'priv.s6P2': '本官方網站由 GitHub Pages 託管，均為靜態文件。本站不植入追蹤 Cookie，不接入 Google Analytics。GitHub 可能會依據其自身的隱私政策記錄基礎訪問日誌以確保安全。',
      'priv.s7Title': '玩家掌控與數據刪除',
      'priv.s7P1': '由於所有存檔均由你完全掌控並存在設備中：',
      'priv.s7Li1': '遊戲內重置：在遊戲內設定中選擇「重入輪迴」，可立即清除當前所有存檔並重置。',
      'priv.s7Li2': '卸載應用：依據 iOS 規範，長按刪除應用將永久清除設備沙盒內的所有本地數據。',
      'priv.s7P2': '因為我們不維護任何雲端數據庫，所以不存在任何可在伺服器端被保留或恢復的玩家副本。',
      'priv.s8Title': '未成年人隱私保護',
      'priv.s8P1': '應用不對任何年齡段（包括 13 歲以下未成年人）收集個人隱私資訊，符合 COPPA 及國際隱私法規。',
      'priv.s9Title': '隱私政策變更',
      'priv.s9P1': '若未來版本引入雲存檔或在線社區服務，本政策必將在收集任何數據前先行更新，並在應用內明確向道友告知。',
      'priv.s10Title': '聯絡與支援',
      'priv.s10P1': '若你對本隱私政策有任何疑問或需要協助，歡迎在 GitHub 提交公開工單進行交流：',
      'priv.s10Btn': '在 GitHub 上提交反饋工單'
    },

    'ja': {
      'site.title': '霊墟紀 (れいきょき) — 水墨画で紡ぐ東洋仙道シミュレーター 公式サイト',
      'site.desc': '洞府で瞑想し、霊気を集め、天劫を越えて古代の霊墟へ。完全オフライン・広告なしの水墨仙道シミュレーター。',
      'brand.en': 'Chronicles of the Ethereal Ruins',
      'brand.zh': '霊墟紀 (れいきょき) · 仙道シミュレーター',
      'nav.cultivation': '修行の道',
      'nav.realms': '山海五域',
      'nav.languages': '多言語',
      'nav.privacy': 'プライバシー',
      'nav.support': 'サポート',
      'nav.github': 'GitHub',
      'nav.issues': 'ご意見',
      'theme.dark': '夜空の静寂',
      'theme.light': '和紙の清光',
      'theme.toggle': '明暗テーマ切り替え',

      'hero.eyebrow': '水墨画で紡ぐ東洋仙道シミュレーター',
      'hero.h1': '一念坐禅 · 昇仙への道<br>九天雷劫 · <span>万法帰墟</span>',
      'hero.lede': '青崖峰の静かな洞府で目覚め、呼吸のリズムに合わせて霊気を凝縮する。古琴を爪弾き、霊符を刻み、飛剣を鍛え、秘境を巡って太古の霊墟の真実を解き明かす。',
      'hero.ctaCodex': '玉簡を読む',
      'hero.ctaSupport': 'サポート',
      'vessel.label': '気海本命 · 瞑想法台',
      'vessel.stage': '煉気期 第九層',
      'vessel.badge': '修練中',
      'vessel.destLabel': '現在地',
      'vessel.destVal': '青崖峰',
      'vessel.cycleLabel': '周天循環',
      'vessel.cycleVal': '充実円滑',

      'readout.clockLabel': '天地の呼吸',
      'readout.clockVal': 'リアルタイム坐禅',
      'readout.storageLabel': 'データ保存',
      'readout.storageVal': '端末内サンドボックス',
      'readout.engineLabel': '設計構造',
      'readout.engineVal': '完全オフライン',
      'readout.trackLabel': '追跡と広告',
      'readout.trackVal': '完全排除 · ゼロSDK',
      'readout.langLabel': '対応言語',
      'readout.langVal': '世界主要6言語',

      'pillars.eyebrow': '修行の三綱',
      'pillars.h2': '天道は焦る者を待たず、静かなる心を育む。',
      'pillars.desc': '修行は一筋の静かな呼吸から始まる。タップの速さではなく、静寂と規則正しい日々が道を切り拓く。',
      'card1.title': '洞府の坐禅と境界突破',
      'card1.desc': '洞府に籠もり霊気を循環させる。気海が満ちたとき、九天の雷劫を耐え抜き、人界の限界を破って築基期へと昇る。',
      'card2.title': '山海絵巻と五つの仙域',
      'card2.desc': '青崖の竹海から、星が沈む瀾海の島々、白雪に覆われた北荒の剣塚、夢幻漂う雲夢沢、そして虚空の霊墟へ。',
      'card3.title': '百工の道と丹薬錬成',
      'card3.desc': '野の霊草を摘み、青銅の釜で霊丹を調合。鍛冶台で鉱石を精錬し、古の銘文を刻んだ飛剣を鍛え上げる。',

      'systems.eyebrow': '水墨闘法と古代仙宝',
      'systems.h2': '水墨で描かれる、生きた仙道世界。',
      'systems.p1': '五行相克に基づく戦略的なターン制闘法。流浪の仙人と問答を交わし、太古の遺跡から発掘された3D秘宝を鑑賞。',
      'systems.p2': '古琴の澄んだ弦音、銅鐘の余韻、夜の寺院に降る雨音が、心を深遠な静寂へと導く。',
      'systems.header': '基幹玄枢',
      'systems.status': '正常稼働中',
      'sys1.title': '五行水墨闘法',
      'sys1.desc': '技の読み合い · 剣撃受け流し · 術法炸裂',
      'sys2.title': '3D古代秘宝ビューア',
      'sys2.desc': '太古の青銅鼎 · 霊石の玉磬 · 銘文の飛剣',
      'sys3.title': '百巻の因果録',
      'sys3.desc': '100以上の奇遇遭遇 · 仙門任務',
      'sys4.title': '音響物理合成エンジン',
      'sys4.desc': '古琴の倍音 · 寺院の鐘声 · 瓦を打つ夜雨',

      'langSec.eyebrow': '多言語ローカライズ',
      'langSec.h2': '世界主要6言語で、仙道の真髄を体験。',
      'langSec.desc': '専門用語や世界観の詩的表現を尊重し、各言語で違和感のない没入感を提供。',

      'privCallout.eyebrow': 'プライバシー重視',
      'privCallout.h2': '霧深き山林の静けさ。<br>修行の歩みはあなたの端末だけに。',
      'privCallout.desc': 'アカウント登録なし、広告なし、外部トラッカーなし。セーブデータや修行状態はすべて端末内に留まります。通知も端末内で完結します。',
      'privCallout.link': 'プライバシーポリシーを見る →',

      'cta.eyebrow': '仙道への一歩',
      'cta.h2': '昇仙の法台は開かれた。<br>道を進むのはあなた自身。',
      'cta.desc': 'iOS 15以降のiPhone、およびモダンWebブラウザに対応。',
      'cta.btnSupport': 'サポートを見る',
      'cta.btnGithub': 'GitHubで確認',
      'footer.rights': '© 2026 Chronicles of the Ethereal Ruins (霊墟紀). All rights reserved.',

      'support.title': 'サポート & よくある質問 — 霊墟紀',
      'support.desc': '霊墟紀 (Chronicles of the Ethereal Ruins) のプレイガイド、トラブルシューティング、お問い合わせ窓口。',
      'support.heroEyebrow': '仙道案内処 · サポートデスク',
      'support.heroH1': '何かお困りですか？',
      'support.heroP': 'よくあるご質問をご確認ください。解決しない場合は、GitHub Issuesより状況をご連絡ください。',
      'support.statusLabel': '通信状況',
      'support.statusVal': '受付中',
      'support.statusDesc': '霊墟紀 1.0 · iOS 15+ および Web 対応',
      'support.compendiumEyebrow': '仙道問答',
      'support.compendiumH2': 'よくあるご質問',
      'faq.q1': '修行と境界突破はどのように進めますか？',
      'faq.a1': '洞府で「坐禅修行」を選ぶと霊気が蓄積されます。アプリを閉じてもリアルタイムで進行します。気海が満ちたら「境界突破」に挑み、天劫を耐え抜いて次の境界へと進みます。',
      'faq.q2': '修行完了の通知が届きません。',
      'faq.a2': 'iOSの「設定」>「霊墟紀」>「通知」で通知が許可されていることをご確認ください。ゲーム内の設定画面でも「完了通知」がオンになっているかご確認ください。',
      'faq.q3': 'オフラインでもプレイできますか？',
      'faq.a3': 'はい。完全オフライン対応です。計算やストーリー展開、音響合成まですべて端末内で完結するため、機内モードや山頂でもプレイ可能です。',
      'faq.q4': '対応言語は何ですか？',
      'faq.a4': '日本語、英語、簡体字中国語、繁体字中国語、韓国語、スペイン語の主要6言語に対応しています。ゲーム内設定からいつでも切り替え可能です。',
      'faq.q5': '音が出ない場合はどうすればよいですか？',
      'faq.a5': '端末のマナーモード（消音スイッチ）が解除されているかご確認ください。ゲーム内の「設定」で音声がオンになっているかもご確認ください。',
      'faq.q6': '飛剣の鍛造や丹薬の調合はどう行いますか？',
      'faq.a6': '煉気期第四層に到達後、「仙門」タブの「錬丹房」や「鋳剣台」が利用可能になります。集めた素材を組み合わせて製作します。',
      'faq.q7': 'セーブデータのバックアップや削除方法は？',
      'faq.a7': 'データは端末内にのみ保存されます。初めからやり直したい場合はゲーム内設定の「輪廻転生 / セーブ初期化」を選択してください。アプリを削除するとデータも消去されます。',
      'faq.q8': '対応機種は何ですか？',
      'faq.a8': 'iOS 15以降を搭載したiPhone、およびSafari、Chrome、Firefoxなどの最新Webブラウザに対応しています。',
      'support.contactEyebrow': '問題が解決しない場合',
      'support.contactH2': 'サポート信号を送信',
      'support.contactP': '端末の機種、iOS/ブラウザのバージョン、発生した現象を添えてGitHubでお知らせください。個人情報を含めないようご注意ください。',
      'support.contactChannel': '連絡チャンネル',
      'support.contactTitle': 'GITHUB サポート',
      'support.openBtn': 'サポートリクエストを作成',
      'support.repoBtn': 'リポジトリを見る →',

      'privacy.title': 'プライバシーポリシー — 霊墟紀',
      'privacy.desc': '霊墟紀 (Chronicles of the Ethereal Ruins) の個人情報保護方針。',
      'privacy.heroEyebrow': '公式プライバシーポリシー',
      'privacy.heroH1': 'プライバシーポリシー',
      'privacy.heroSummary': '霊墟紀は、個人情報の収集、送信、売買、共有を一切行いません。修行の記録はすべてあなたの端末に留まります。',
      'privacy.effectiveLabel': '発効日',
      'privacy.effectiveDate': '2026年8月11日',
      'privacy.tocHeading': '目次',
      'privacy.toc1': '01. 概要',
      'privacy.toc2': '02. 端末内に保存されるデータ',
      'privacy.toc3': '03. ローカル通知',
      'privacy.toc4': '04. 音響とWeb Audio API',
      'privacy.toc5': '05. 第三者サービスとSDK',
      'privacy.toc6': '06. 当ウェブサイト',
      'privacy.toc7': '07. データの管理と削除',
      'privacy.toc8': '08. お子様のプライバシー',
      'privacy.toc9': '09. ポリシーの改定',
      'privacy.toc10': '10. お問い合わせ',
      'priv.s1Title': '概要',
      'priv.s1P1': '霊墟紀 (Chronicles of the Ethereal Ruins) は、iOSおよび最新のWebブラウザ向けに開発された完全オフラインのシングルプレイヤー仙道シミュレーターです。アカウント登録やメールアドレスは不要で、外部の追跡サーバーにも接続しません。',
      'priv.s1P2': '私たちはプレイヤーのプライバシーと静かなプレイ体験を最優先に考えています。アプリはいかなる個人情報や広告識別子（IDFA）、位置情報も収集しません。',
      'priv.s1CalloutTitle': '要約',
      'priv.s1CalloutP': 'アカウント不要 · 解析追跡なし · 広告SDKなし · 個人情報の収集はゼロです。',
      'priv.s2Title': '端末内に保存されるデータ',
      'priv.s2P1': 'オフラインでのゲーム進行を維持するため、端末内のローカルストレージにのみデータを保存します：',
      'priv.s2Li1': '修行状況：現在の境界、霊気、悟性、気血など。',
      'priv.s2Li2': '所持品：霊石、飛剣、霊草、丹薬、玉簡。',
      'priv.s2Li3': '進行度：探索した地域、仙門の名声、ストーリーフラグ。',
      'priv.s2Li4': '設定：音声オン/オフ、言語選択、通知設定。',
      'priv.s2P2': 'これらのデータは端末外へ送信されることはなく、開発者がアクセスすることもできません。',
      'priv.s3Title': 'ローカル通知',
      'priv.s3P1': '坐禅の完了や任務の完了を知らせるため、端末内部でのみローカル通知をスケジュールします。リモートプッシュサーバーは使用しません。',
      'priv.s3P2': '通知の許可はiOSの設定アプリからいつでも変更可能です。',
      'priv.s4Title': '音響とWeb Audio API',
      'priv.s4P1': '古琴や鐘の音はWeb Audioを通じてリアルタイム合成されます。マイクへのアクセスや周囲の録音は一切行いません。',
      'priv.s5Title': '第三者サービスとSDK',
      'priv.s5P1': '広告ネットワークSDKやユーザー解析SDKは一切含まれていません。完全広告なしで課金誘導もありません。',
      'priv.s6Title': '当ウェブサイト',
      'priv.s6P1': '当サイトはGitHub Pagesで提供される静的ファイルです。トラッキングCookieやGoogle Analyticsは使用していません。',
      'priv.s7Title': 'データの管理と削除',
      'priv.s7P1': 'ゲーム内設定の「輪廻転生 / セーブ初期化」を選ぶか、アプリを端末から削除することで、すべてのセーブデータを完全に削除できます。',
      'priv.s8Title': 'お子様のプライバシー',
      'priv.s8P1': 'いかなるユーザー情報も収集しないため、未成年者を含むすべてのプレイヤーに安全です。',
      'priv.s9Title': 'ポリシーの改定',
      'priv.s9P1': '今後オンライン機能等を追加する場合は、データ収集を行う前に本ポリシーを更新し、アプリ内でお知らせします。',
      'priv.s10Title': 'お問い合わせ',
      'priv.s10P1': '本ポリシーについてのご質問は、GitHub Issuesにてお問い合わせください：',
      'priv.s10Btn': 'GitHubでIssueを作成'
    },

    'ko': {
      'site.title': '영허기 (Chronicles of the Ethereal Ruins) — 동양 수묵 선협 수련 시뮬레이터 공식 사이트',
      'site.desc': '동부 운기수련, 영기 축적, 구천뇌겁, 고대 영허의 비밀. 완전 오프라인 무과금 수묵 선협 시뮬레이터.',
      'brand.en': 'Chronicles of the Ethereal Ruins',
      'brand.zh': '영허기 (灵墟纪) · 선협 수련 시뮬레이터',
      'nav.cultivation': '수련의 길',
      'nav.realms': '산해오역',
      'nav.languages': '다국어',
      'nav.privacy': '개인정보 처리방침',
      'nav.support': '지원 센터',
      'nav.github': 'GitHub',
      'nav.issues': '피드백',
      'theme.dark': '깊은 밤의 정적',
      'theme.light': '화선지의 청명',
      'theme.toggle': '다크/라이트 모드 전환',

      'hero.eyebrow': '동양 수묵 선협 수련 시뮬레이터',
      'hero.h1': '일념 입정 · 등선지도<br>구천뇌겁 · <span>만법귀허</span>',
      'hero.lede': '청애봉의 고요한 동부에서 깨어나 자연의 호흡 리듬에 맞춰 영기를 모으세요. 고금을 뜯고 영부를 새기며 비검을 단조하고 고대 영허의 비밀을 찾아 떠나세요.',
      'hero.ctaCodex': '옥간 읽기',
      'hero.ctaSupport': '지원 센터',
      'vessel.label': '본명기해 · 수련법대',
      'vessel.stage': '연기기 제9층',
      'vessel.badge': '운기 중',
      'vessel.destLabel': '현재 위치',
      'vessel.destVal': '청애봉',
      'vessel.cycleLabel': '주천 순환',
      'vessel.cycleVal': '원활함',

      'readout.clockLabel': '천지 리듬',
      'readout.clockVal': '실시간 호흡',
      'readout.storageLabel': '저장 방식',
      'readout.storageVal': '기기 로컬 샌드박스',
      'readout.engineLabel': '엔진 구조',
      'readout.engineVal': '완전 오프라인 단독',
      'readout.trackLabel': '추적 및 광고',
      'readout.trackVal': '광고 제로 · 트래커 제로',
      'readout.langLabel': '지원 언어',
      'readout.langVal': '글로벌 6대 주요 언어',

      'pillars.eyebrow': '수도 3대 강령',
      'pillars.h2': '대도는 단순하며, 조급한 자를 재촉하지 않는다.',
      'pillars.desc': '수행은 한 줄기 고요한 호흡에서 시작됩니다. 클릭을 서두르는 대신 평온한 절제와 시간에 따라 영기가 차오릅니다.',
      'card1.title': '동부 운기수련과 경지 돌파',
      'card1.desc': '동부 깊은 곳에서 영기를 순환하세요. 기해가 가득 차면 구천뇌겁을 견뎌내어 인간의 굴레를 벗고 축기기에 오릅니다.',
      'card2.title': '산해 도와 5대 선역',
      'card2.desc': '청애 죽림에서 출발하여 별이 잠든 난해 군도, 혹한의 북황 검총, 몽환적인 운몽택, 그리고 미지의 영허까지 탐험하세요.',
      'card3.title': '백공 제련과 신로 연단',
      'card3.desc': '영초를 채집하여 고대 청동로에서 영약을 달이고, 주검대에서 광석을 제련하여 금빛 명문이 새겨진 비검을 만드세요.',

      'systems.eyebrow': '수묵 투법과 선도 보물',
      'systems.h2': '먹으로 펼쳐지는 생생한 선협의 세계.',
      'systems.p1': '오행 상생상극에 기반한 전략 턴제 결투. 유랑하는 도인들과 도를 논하고 고대 유적에서 발굴된 3D 보물을 감상하세요.',
      'systems.p2': '고금의 맑은 울림, 동종의 여운, 고요한 사당의 밤비 소리가 마음을 깊은 정적으로 이끕니다.',
      'systems.header': '핵심 시스템',
      'systems.status': '정상 작동 중',
      'sys1.title': '오행 수묵 전투',
      'sys1.desc': '초식 파훼 · 검격 쳐내기 · 술법 폭발',
      'sys2.title': '3D 고대 보물 뷰어',
      'sys2.desc': '청동 솥 · 옥경 · 명문 비검 감상',
      'sys3.title': '백 권의 인과 운명록',
      'sys3.desc': '100여 종의 기연 사건 · 문파 임무',
      'sys4.title': '물리 음향 합성 엔진',
      'sys4.desc': '고금 배음 · 종소리 · 밤비 빗소리',

      'langSec.eyebrow': '다국어 지원',
      'langSec.h2': '세계 6대 언어로 즐기는 선협의 정취.',
      'langSec.desc': '선도 용어와 문학적 표현을 완벽히 번역하여 깊은 몰입감을 선사합니다.',

      'privCallout.eyebrow': '철저한 개인정보 보호',
      'privCallout.h2': '안개 낀 산림의 고요함.<br>수련의 기록은 오직 기기 안에.',
      'privCallout.desc': '영허기는 계정 등록이 없으며 광고나 외부 추적 SDK를 사용하지 않습니다. 모든 진행 데이터는 기기 로컬에만 안전하게 보관됩니다.',
      'privCallout.link': '개인정보 처리방침 읽기 →',

      'cta.eyebrow': '수련의 시작',
      'cta.h2': '승선의 법대가 열렸습니다.<br>나아갈 길은 당신의 마음에.',
      'cta.desc': 'iOS 15 이상의 iPhone 및 최신 웹 브라우저를 지원합니다.',
      'cta.btnSupport': '지원 센터 방문',
      'cta.btnGithub': 'GitHub 저장소 보기',
      'footer.rights': '© 2026 Chronicles of the Ethereal Ruins (영허기). All rights reserved.',

      'support.title': '지원 & 자주 묻는 질문 — 영허기',
      'support.desc': '영허기 (Chronicles of the Ethereal Ruins) 수련 가이드, 문제 해결 및 지원 채널.',
      'support.heroEyebrow': '선도 안내소 · 지원 센터',
      'support.heroH1': '수련 중 도움이 필요하신가요?',
      'support.heroP': '자주 묻는 질문을 확인하세요. 해결되지 않는 경우 GitHub Issues를 통해 상세 내용을 남겨주세요.',
      'support.statusLabel': '안내소 상태',
      'support.statusVal': '접수 중',
      'support.statusDesc': '영허기 1.0 · iOS 15+ 및 웹 지원',
      'support.compendiumEyebrow': '선도 문답',
      'support.compendiumH2': '자주 묻는 질문',
      'faq.q1': '어떻게 수련하고 경지를 돌파하나요?',
      'faq.a1': '동부에서 [운기수련]을 선택하면 영기가 축적됩니다. 앱을 닫아도 실시간으로 진행됩니다. 영기가 가득 차면 [경지 돌파]를 통해 뇌겁을 견디고 다음 경지로 오릅니다.',
      'faq.q2': '수련 완료 알림이 오지 않습니다.',
      'faq.a2': 'iOS [설정] > [영허기] > [알림]에서 알림 허용이 켜져 있는지 확인하세요. 게임 내 설정에서도 [완료 알림]이 켜져 있어야 합니다.',
      'faq.q3': '인터넷 연결이 필요한가요?',
      'faq.a3': '아닙니다. 영허기는 완전한 오프라인 단독 게임입니다. 비행기 모드나 깊은 산속에서도 아무 문제 없이 플레이할 수 있습니다.',
      'faq.q4': '어떤 언어를 지원하나요?',
      'faq.a4': '한국어, 영어, 중국어 간체, 중국어 번체, 일본어, 스페인어의 6대 주요 언어를 지원하며 게임 내 설정에서 언제든 변경할 수 있습니다.',
      'faq.q5': '소리가 나지 않을 때는 어떻게 하나요?',
      'faq.a5': '기기의 무음 모드 스위치가 켜져 있는지 확인하세요. 게임 내 설정 창에서 사운드가 켜져 있는지도 확인 바랍니다.',
      'faq.q6': '비검과 단약은 어떻게 만드나요?',
      'faq.a6': '연기기 4층에 도달한 후 [문파] 탭의 [연단방]과 [주검대]에서 채집한 재료로 약과 검을 제작할 수 있습니다.',
      'faq.q7': '세이브 데이터 백업 및 삭제 방법은?',
      'faq.a7': '모든 데이터는 기기 로컬 샌드박스에만 저장됩니다. 게임 설정에서 [윤회 전생 / 세이브 초기화]를 선택하거나 앱을 삭제하면 완전히 지워집니다.',
      'faq.q8': '지원하는 기기는 무엇인가요?',
      'faq.a8': 'iOS 15 이상이 설치된 모든 iPhone과 최신 웹 브라우저(Safari, Chrome 등)를 지원합니다.',
      'support.contactEyebrow': '문제가 지속되나요?',
      'support.contactH2': '지원 요청 전송',
      'support.contactP': '기기 모델명, OS 버전, 문제 상황을 상세히 적어 GitHub Issues로 접수해주세요. 개인정보는 포함하지 마세요.',
      'support.contactChannel': '소통 채널',
      'support.contactTitle': 'GITHUB 지원 센터',
      'support.openBtn': '지원 요청 등록',
      'support.repoBtn': '저장소 바로가기 →',

      'privacy.title': '개인정보 처리방침 — 영허기',
      'privacy.desc': '영허기 (Chronicles of the Ethereal Ruins) 개인정보 처리방침.',
      'privacy.heroEyebrow': '공식 개인정보 처리방침',
      'privacy.heroH1': '개인정보 처리방침',
      'privacy.heroSummary': '영허기는 사용자의 개인정보를 일체 수집, 전송, 판매, 공유하지 않습니다. 모든 수련 기록은 오직 기기 안에만 보관됩니다.',
      'privacy.effectiveLabel': '시행일자',
      'privacy.effectiveDate': '2026년 8월 11일',
      'privacy.tocHeading': '목차',
      'privacy.toc1': '01. 개요',
      'privacy.toc2': '02. 기기 내 저장 데이터',
      'privacy.toc3': '03. 로컬 알림',
      'privacy.toc4': '04. 음향 및 Web Audio API',
      'privacy.toc5': '05. 타사 서비스 및 SDK',
      'privacy.toc6': '06. 본 웹사이트',
      'privacy.toc7': '07. 데이터 삭제 권한',
      'privacy.toc8': '08. 아동의 개인정보',
      'privacy.toc9': '09. 방침 변경',
      'privacy.toc10': '10. 문의 및 지원',
      'priv.s1Title': '개요',
      'priv.s1P1': '영허기 (Chronicles of the Ethereal Ruins)는 오프라인 단독 선협 시뮬레이터로 계정이나 이메일이 필요 없으며 외부 서버와 통신하지 않습니다.',
      'priv.s1P2': '당사는 어떠한 개인정보, 게임플레이 텔레메트리, 광고 식별자(IDFA), 위치 정보도 수집하지 않습니다.',
      'priv.s1CalloutTitle': '쉬운 요약',
      'priv.s1CalloutP': '계정 없음 · 분석 없음 · 광고 없음 · 추적 없음 · 데이터 수집 제로.',
      'priv.s2Title': '기기 내 저장 데이터',
      'priv.s2P1': '오프라인 플레이를 유지하기 위해 기기 내부 샌드박스에만 상태를 저장합니다:',
      'priv.s2Li1': '수련 상태: 현재 경지, 축적 영기, 오성, 기혈.',
      'priv.s2Li2': '소지품: 영석, 비검, 영초, 단약.',
      'priv.s2Li3': '진행도: 탐험 지역, 문파 명성, 스토리 선택.',
      'priv.s2Li4': '설정: 사운드, 언어, 알림 권한.',
      'priv.s2P2': '이 데이터는 외부로 전송되지 않으며 개발자도 열람할 수 없습니다.',
      'priv.s3Title': '로컬 알림',
      'priv.s3P1': '알림은 기기 로컬에서만 예약 및 발생하며 원격 푸시 서버를 일체 사용하지 않습니다.',
      'priv.s4Title': '음향 및 Web Audio API',
      'priv.s4P1': '고금과 종소리는 물리 음향 코드로 실시간 생성됩니다. 마이크를 사용하지 않으며 무음 스위치를 준수합니다.',
      'priv.s5Title': '타사 서비스 및 SDK',
      'priv.s5P1': '어떠한 광고 네트워크나 데이터 수집용 서드파티 SDK도 포함되어 있지 않습니다.',
      'priv.s6Title': '본 웹사이트',
      'priv.s6P1': '본 웹사이트는 정적 파일로만 구성되어 있으며 추적 쿠키나 분석 도구를 사용하지 않습니다.',
      'priv.s7Title': '데이터 삭제 권한',
      'priv.s7P1': '게임 내 설정의 [윤회 전생]을 누르거나 앱을 삭제하면 모든 데이터가 완전히 소멸합니다.',
      'priv.s8Title': '아동의 개인정보',
      'priv.s8P1': '누구의 정보도 수집하지 않으므로 모든 연령대에서 안심하고 이용할 수 있습니다.',
      'priv.s9Title': '방침 변경',
      'priv.s9P1': '추후 온라인 기능이 도입될 경우 사전에 방침을 개정하고 공지할 것입니다.',
      'priv.s10Title': '문의 및 지원',
      'priv.s10P1': '방침에 관한 문의는 GitHub Issues를 이용해 주세요:',
      'priv.s10Btn': 'GitHub에서 Issue 작성'
    },

    'es': {
      'site.title': 'Crónicas de las Ruinas Etéreas — Simulador de Cultivo Taoísta en Tinta',
      'site.desc': 'Medita en santuarios de montaña, acumula Qi espiritual, supera tribulaciones celestiales y descubre las ruinas ancestrales.',
      'brand.en': 'Chronicles of the Ethereal Ruins',
      'brand.zh': 'Crónicas de las Ruinas Etéreas',
      'nav.cultivation': 'Cultivo',
      'nav.realms': 'Reinos',
      'nav.languages': 'Idiomas',
      'nav.privacy': 'Privacidad',
      'nav.support': 'Soporte',
      'nav.github': 'GitHub',
      'nav.issues': 'Incidencias',
      'theme.dark': 'Noche Profunda',
      'theme.light': 'Tinta sobre Papel',
      'theme.toggle': 'Cambiar tema claro/oscuro',

      'hero.eyebrow': 'SIMULADOR ORIENTAL DE CULTIVO EN TINTA',
      'hero.h1': 'Busca el Dao.<br>Supera la Tribulación.<br><span>Trasciende.</span>',
      'hero.lede': 'Despierta en un santuario de montaña apartado. Reúne Qi espiritual al ritmo de tu respiración en tiempo real. Forja espadas voladoras, inscribe talismanes y explora las ruinas ancestrales.',
      'hero.ctaCodex': 'LEER EL CÓDICE',
      'hero.ctaSupport': 'OBTENER SOPORTE',
      'vessel.label': 'NÚCLEO DE CULTIVO',
      'vessel.stage': 'REFINAMIENTO DE QI IX',
      'vessel.badge': 'EN VIVO',
      'vessel.destLabel': 'DESTINO',
      'vessel.destVal': 'PICO QINGYA',
      'vessel.cycleLabel': 'CICLO DE QI',
      'vessel.cycleVal': 'CIRCULANDO',

      'readout.clockLabel': 'CALENDARIO',
      'readout.clockVal': 'RESPIRACIÓN REAL',
      'readout.storageLabel': 'GUARDADO',
      'readout.storageVal': 'LOCAL EN DISPOSITIVO',
      'readout.engineLabel': 'ARQUITECTURA',
      'readout.engineVal': 'TOTALMENTE OFFLINE',
      'readout.trackLabel': 'RASTREO Y ANUNCIOS',
      'readout.trackVal': 'CERO / PRIVADO',
      'readout.langLabel': 'TRADUCCIÓN',
      'readout.langVal': '6 IDIOMAS PRINCIPALES',

      'pillars.eyebrow': 'LOS TRES PILARES',
      'pillars.h2': 'El cielo no se apresura por tu ambición.',
      'pillars.desc': 'Tu viaje comienza con un respiro. El cultivo madura segundo a segundo, premiando la disciplina silenciosa sobre el frenesí.',
      'card1.title': 'Meditación y Tribulación',
      'card1.desc': 'Retírate a tu morada para circular Qi. Cuando tus meridianos rebosen, resiste los rayos celestiales para romper las ataduras mortales.',
      'card2.title': 'El Mapa Shanhai y 5 Reinos',
      'card2.desc': 'Viaja desde los bosques de bambú de Qingya hasta los archipiélagos del Mar Lan, los páramos helados del Norte y las Ruinas Etéreas.',
      'card3.title': 'Forja Artesanal y Alquimia',
      'card3.desc': 'Recolecta hierbas para preparar píldoras en calderos de bronce y forja espadas voladoras grabadas con sellos dorados.',

      'systems.eyebrow': 'COMBATE EN TINTA Y ARTEFACTOS',
      'systems.h2': 'Un mundo vivo de Xianxia pintado en tinta.',
      'systems.p1': 'Combate táctico por turnos basado en los Cinco Elementos (Metal, Madera, Agua, Fuego, Tierra). Debilita rivales y examina reliquias sagradas en 3D.',
      'systems.p2': 'Acompañado por sonidos acústicos sintetizados de Guqin, campanas ceremoniales y lluvia nocturna.',
      'systems.header': 'SISTEMAS',
      'systems.status': 'OPERATIVO',
      'sys1.title': 'COMBATE DE CINCO ELEMENTOS',
      'sys1.desc': 'ATAQUES TÁCTICOS, PARADAS Y HECHIZOS',
      'sys2.title': 'VISOR DE RELIQUIAS 3D',
      'sys2.desc': 'CALDEROS, CAMPANAS Y ESPADAS ANTIGUAS',
      'sys3.title': 'CÓDICE DE DESTINO',
      'sys3.desc': 'MÁS DE 100 ENCUENTROS Y MISIONES',
      'sys4.title': 'MOTOR ACÚSTICO PROCEDURAL',
      'sys4.desc': 'GUQIN, CAMPANAS Y AMBIENTE DE LLUVIA',

      'langSec.eyebrow': 'LOCALIZACIÓN GLOBAL',
      'langSec.h2': 'Cultiva en tu lengua en los 6 idiomas principales.',
      'langSec.desc': 'Cada término, sutra y notificación ha sido adaptado preservando la profundidad poética oriental.',

      'privCallout.eyebrow': 'PRIVADO POR DISEÑO',
      'privCallout.h2': 'La niebla de la montaña es serena.<br>Tus datos permanecen en tu dispositivo.',
      'privCallout.desc': 'Sin cuentas, sin anuncios, sin análisis y sin rastreadores. Tus progresos se guardan únicamente de forma local en tu dispositivo.',
      'privCallout.link': 'LEER POLÍTICA DE PRIVACIDAD →',

      'cta.eyebrow': 'COMIENZA TU CULTIVO',
      'cta.h2': 'La Plataforma de Ascensión aguarda.<br>El resto es tu propio Dao.',
      'cta.desc': 'Diseñado para iPhone con iOS 15 o superior y navegadores web modernos.',
      'cta.btnSupport': 'VISITAR SOPORTE',
      'cta.btnGithub': 'VER EN GITHUB',
      'footer.rights': '© 2026 Chronicles of the Ethereal Ruins. Todos los derechos reservados.',

      'support.title': 'Soporte y Preguntas Frecuentes — Crónicas de las Ruinas Etéreas',
      'support.desc': 'Guía de cultivo, preguntas frecuentes y asistencia para Crónicas de las Ruinas Etéreas.',
      'support.heroEyebrow': 'ESTACIÓN SANCTUM · ARCHIVOS DE CULTIVO',
      'support.heroH1': '¿Cómo podemos ayudarte en tu camino?',
      'support.heroP': 'Consulta las preguntas frecuentes. Si tu duda persiste, envía un mensaje mediante GitHub Issues.',
      'support.statusLabel': 'ESTADO DE LA ESTACIÓN',
      'support.statusVal': 'RECIBIENDO',
      'support.statusDesc': 'Versión 1.0 · iOS 15+ y Web',
      'support.compendiumEyebrow': 'COMPENDIO TAOÍSTA',
      'support.compendiumH2': 'Preguntas frecuentes',
      'faq.q1': '¿Cómo comienzo a meditar y trascender?',
      'faq.a1': 'En tu morada, pulsa «Meditar» para reunir Qi. El cultivo progresa en tiempo real incluso con la app cerrada. Al llenarse tu Qi, elige «Trascender» para superar la tribulación.',
      'faq.q2': '¿Por qué no recibo notificaciones?',
      'faq.a2': 'En Ajustes de iOS > Crónicas de las Ruinas Etéreas > Notificaciones, confirma que «Permitir notificaciones» está activo. Verifica también en los Ajustes del juego.',
      'faq.q3': '¿Requiere conexión a internet?',
      'faq.a3': 'No. El juego funciona 100% offline. Toda la simulación, historias y sonido se generan localmente.',
      'faq.q4': '¿Qué idiomas están disponibles?',
      'faq.a4': 'El juego está completamente traducido a 6 idiomas principales: inglés, español, chino simplificado, chino tradicional, japonés y coreano.',
      'faq.q5': '¿Cómo funciona el sonido?',
      'faq.a5': 'Utiliza síntesis acústica Web Audio en tiempo real sin descargas pesadas. Respeta el botón de silencio físico de tu dispositivo.',
      'faq.q6': '¿Cómo forjar espadas y preparar píldoras?',
      'faq.a6': 'Al alcanzar el nivel 4 de Refinamiento de Qi, visita la pestaña «Secta» para acceder a la Sala de Alquimia y la Terraza de Espadas.',
      'faq.q7': '¿Cómo borrar o respaldar mi partida?',
      'faq.a7': 'Se guarda en el contenedor privado de tu dispositivo. Para reiniciar, pulsa «Reiniciar partida» en los Ajustes del juego. Eliminar la app también borra los datos.',
      'faq.q8': '¿Qué dispositivos son compatibles?',
      'faq.a8': 'Compatible con todos los modelos de iPhone con iOS 15 o posterior y navegadores web actuales.',
      'support.contactEyebrow': '¿SIGUES CON DUDAS?',
      'support.contactH2': 'Envía una señal de soporte.',
      'support.contactP': 'Describe tu dispositivo, versión del sistema y el comportamiento observado. Las peticiones se gestionan públicamente en GitHub.',
      'support.contactChannel': 'CANAL DE COMUNICACIÓN',
      'support.contactTitle': 'SOPORTE GITHUB',
      'support.openBtn': 'ABRIR PETICIÓN EN GITHUB',
      'support.repoBtn': 'VER REPOSITORIO →',

      'privacy.title': 'Política de Privacidad — Crónicas de las Ruinas Etéreas',
      'privacy.desc': 'Política de privacidad para Crónicas de las Ruinas Etéreas.',
      'privacy.heroEyebrow': 'CÓDICE OFICIAL DE PRIVACIDAD',
      'privacy.heroH1': 'Política de Privacidad',
      'privacy.heroSummary': 'Crónicas de las Ruinas Etéreas no recopila, transmite, vende ni comparte tus datos personales. Tu viaje queda en tu dispositivo.',
      'privacy.effectiveLabel': 'FECHA DE ENTRADA EN VIGOR',
      'privacy.effectiveDate': '11 DE AGOSTO DE 2026',
      'privacy.tocHeading': 'EN ESTA PÁGINA',
      'privacy.toc1': '01. Resumen',
      'privacy.toc2': '02. Datos almacenados en el dispositivo',
      'privacy.toc3': '03. Notificaciones locales',
      'privacy.toc4': '04. Audio y Web Audio API',
      'privacy.toc5': '05. Terceros y SDKs',
      'privacy.toc6': '06. Este sitio web',
      'privacy.toc7': '07. Control y borrado de datos',
      'privacy.toc8': '08. Privacidad de menores',
      'privacy.toc9': '09. Cambios a esta política',
      'privacy.toc10': '10. Contacto y soporte',
      'priv.s1Title': 'Resumen',
      'priv.s1P1': 'Crónicas de las Ruinas Etéreas es una simulación de cultivo oriental en tinta para un solo jugador y offline. No requiere cuenta ni conecta con servidores de rastreo.',
      'priv.s1P2': 'No recopilamos datos personales, diagnósticos, identificadores de publicidad ni ubicación precisa.',
      'priv.s1CalloutTitle': 'EN LENGUAJE SENCILLO',
      'priv.s1CalloutP': 'Sin cuentas · Sin análisis · Sin publicidad · Sin rastreo · Cero datos recopilados.',
      'priv.s2Title': 'Datos almacenados en el dispositivo',
      'priv.s2P1': 'Para posibilitar el guardado local, el juego almacena tu nivel de cultivo, inventario, progreso en las regiones y preferencias en el almacenamiento local seguro de tu dispositivo.',
      'priv.s2P2': 'No tenemos acceso a esta información ni se transmite por internet.',
      'priv.s3Title': 'Notificaciones locales',
      'priv.s3P1': 'Las alertas se programan y calculan localmente en tu dispositivo. No se usan servidores push remotos.',
      'priv.s4Title': 'Audio y Web Audio API',
      'priv.s4P1': 'El sonido se sintetiza mediante código acústico. No se accede al micrófono ni se graba sonido ambiental.',
      'priv.s5Title': 'Terceros y SDKs',
      'priv.s5P1': 'El juego no contiene anuncios, SDKs de publicidad ni compras integradas.',
      'priv.s6Title': 'Este sitio web',
      'priv.s6P1': 'Alojado en GitHub Pages, este sitio web no utiliza cookies de rastreo ni Google Analytics.',
      'priv.s7Title': 'Control y borrado de datos',
      'priv.s7P1': 'Puedes borrar tus datos en cualquier momento desde los Ajustes del juego con «Reiniciar partida» o desinstalando la aplicación.',
      'priv.s8Title': 'Privacidad de menores',
      'priv.s8P1': 'Al no recopilar datos de ningún tipo, el juego es seguro para personas de todas las edades.',
      'priv.s9Title': 'Cambios a esta política',
      'priv.s9P1': 'Cualquier modificación futura será anunciada antes de que entre en vigor.',
      'priv.s10Title': 'Contacto y soporte',
      'priv.s10P1': 'Si tienes preguntas, abre una incidencia en GitHub:',
      'priv.s10Btn': 'Abrir incidencia en GitHub'
    }
  };

  // 2. Theme Engine
  function getPreferredTheme() {
    const saved = localStorage.getItem('xianxia_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('xianxia_theme', theme);
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
      btn.setAttribute('title', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
      const icon = btn.querySelector('.theme-icon');
      if (icon) {
        icon.textContent = theme === 'light' ? '🌙' : '☀️';
      }
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
  }

  // 3. Language Engine
  function getPreferredLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('lang');
    if (param && LANGUAGES[param]) return param;

    const saved = localStorage.getItem('xianxia_lang');
    if (saved && LANGUAGES[saved]) return saved;

    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('zh-tw') || nav.startsWith('zh-hk')) return 'zh-TW';
    if (nav.startsWith('zh')) return 'zh-CN';
    if (nav.startsWith('ja')) return 'ja';
    if (nav.startsWith('ko')) return 'ko';
    if (nav.startsWith('es')) return 'es';
    return 'en';
  }

  function applyLanguage(lang) {
    if (!LANGUAGES[lang]) lang = 'en';
    const dict = I18N[lang] || I18N['en'];
    const fallback = I18N['en'];

    localStorage.setItem('xianxia_lang', lang);
    document.documentElement.lang = LANG_HTML_MAP[lang] || 'en';

    // Update document title & meta description if available
    const pageKey = document.body.classList.contains('support-page') ? 'support' :
                    document.body.classList.contains('document-page') ? 'privacy' : 'site';
    if (dict[`${pageKey}.title`]) {
      document.title = dict[`${pageKey}.title`];
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict[`${pageKey}.desc`]) {
      metaDesc.setAttribute('content', dict[`${pageKey}.desc`]);
    }

    // Update elements with data-i18n (text)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = dict[key] || fallback[key];
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    // Update elements with data-i18n-html (inner HTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const html = dict[key] || fallback[key];
      if (html !== undefined) {
        el.innerHTML = html;
      }
    });

    // Sync all language dropdowns
    document.querySelectorAll('.lang-select').forEach(select => {
      select.value = lang;
    });

    // Update URL query string without reloading
    const url = new URL(window.location.href);
    if (lang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', url.toString());
  }

  // 4. Initialize on DOM Load
  document.addEventListener('DOMContentLoaded', function () {
    // Setup theme
    const theme = getPreferredTheme();
    applyTheme(theme);

    // Setup language
    const lang = getPreferredLanguage();
    applyLanguage(lang);

    // Bind theme toggles
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // Bind language selectors
    document.querySelectorAll('.lang-select').forEach(select => {
      select.addEventListener('change', function () {
        applyLanguage(this.value);
      });
    });
  });

  // Expose to window for inline calls if needed
  window.XianxiaSite = {
    applyTheme,
    toggleTheme,
    applyLanguage,
    LANGUAGES
  };
})();
