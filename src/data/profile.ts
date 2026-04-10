export type LocalizedProfile = {
  heroName: string;
  heroTitle: string;
  heroMotto: string;
  about: string[];
  focus: string[];
  skills: Array<{
    title: string;
    items: string[];
  }>;
  experiences: Array<{
    role: string;
    company: string;
    period: string;
    bullets: string[];
  }>;
  achievements: Array<{
    title: string;
    subtitle: string;
    period: string;
    link: string;
  }>;
  education: Array<{
    school: string;
    program: string;
    period: string;
  }>;
  contactDescription: string;
};

export const profileLinks = {
  cake: "https://www.cake.me/ben4932042-22485c",
  linkedin: "https://www.linkedin.com/in/%E5%AE%87%E5%93%B2-%E5%8A%89-4806191b1/",
  email: "mailto:ben@icloud.com",
  avatar: "https://media.cake.me/image/upload/s--I4AcVdwV--/c_fill,g_face,h_600,w_600/v1673158583/rpm6udmjhwy2yv4qzg71.jpg",
};

export const profileContent: Record<"en" | "zh", LocalizedProfile> = {
  zh: {
    heroName: "劉宇哲",
    heroTitle: "DevOps Engineer | Site Reliability Engineer",
    heroMotto: '"以可靠性、可觀測性與自動化，打造可擴展的雲端系統。"',
    about: [
      "我是一位專注在 SRE、DevOps 與平台工程的工程師，長期投入 Kubernetes、可觀測性平台、CI/CD 標準化與基礎設施自動化。",
      "過去幾年我在 Homee AI、iKala、MetaAirLabs、Athemaster 與 Adbert 之間，累積了從資料工程到雲端平台治理的完整經驗，特別擅長把複雜系統整理成可維運、可量化、可持續交付的工程流程。",
    ],
    focus: ["FinOps", "Event-Driven Architecture", "Observability", "GitOps", "Kubernetes", "Platform Reliability"],
    skills: [
      {
        title: "程式語言",
        items: ["Python", "Go", "Bash", "AWS", "GCP", "Linux"],
      },
      {
        title: "雲端平台",
        items: ["AWS", "GCP"],
      },
      {
        title: "CI / CD 工具",
        items: ["Jenkins", "Github Action", "Gitlab CI", "ArgoCD"],
      },
      {
        title: "容器化工具",
        items: ["Kubernetes", "Docker", "EKS", "GKE"],
      },
      {
        title: "維運監控",
        items: ["Prometheus", "Grafana", "LGTM", "OpenTelemetry", "EFK", "Zabbix"],
      },
      {
        title: "IaC",
        items: ["Ansible", "Terraform", "Terragrunt", "Helm"],
      },
    ],
    experiences: [
      {
        role: "Senior DevOps Engineer",
        company: "Homee AI",
        period: "Oct 2025 — Now",
        bullets: [
          "導入 KEDA 與 Spot Instances，為 AI 工作負載建立事件驅動伸縮機制，成功將 GPU 雲端成本降低 80%。",
          "主導公司級統一非同步任務系統 Event Bus，推動事件驅動架構標準化，降低跨服務耦合。",
          "重新定義 GitHub Actions 規範並建立 reusable workflows，提升全公司 CI/CD 交付一致性。",
          "與後端團隊以 FastAPI 開發高效能接口，並用 k6 驗證高併發下的 P99 latency 表現。",
        ],
      },
      {
        role: "Senior Site Reliability Engineer",
        company: "iKala",
        period: "May 2023 — Apr 2025",
        bullets: [
          "主導導入 LGTM Stack，建構全產品線 Observability 解決方案，整合 tracing、logs 與 metrics。",
          "在 Kolr 導入 ArgoCD 與 GitOps 流程，提升部署頻率並維持環境一致性。",
          "重構告警架構並導入 Opsgenie，縮短 MTTR 並改善事件協作效率。",
          "制定 API SLI/SLO 與自動化報表，讓服務品質可量化並回饋到技術債治理。",
          "執行 Terraform 與 Ansible 重構，將 IaC 覆蓋率提升 20%。",
        ],
      },
      {
        role: "DevOps Engineer",
        company: "MetaAirLabs",
        period: "Apr 2022 — Apr 2023",
        bullets: [
          "設計統一告警匯流系統，整合 Prometheus、CloudWatch 等事件來源，降低告警疲勞。",
          "優化 Jenkins CI pipeline，透過動態 agent 與快取策略縮短建置時間。",
          "導入 ArgoCD 與 GitOps，提升 Kubernetes 應用部署的可追溯性與安全性。",
          "建立高可用 Kafka 叢集與 SLI 指標，確保資料傳輸穩定與異地備援能力。",
          "撰寫 Python/Bash 初始化腳本，將環境準備時間縮短 50%。",
        ],
      },
      {
        role: "DevOps Engineer",
        company: "Athemaster",
        period: "Aug 2021 — Apr 2022",
        bullets: [
          "主導服務 Kubernetes 容器化轉型，透過 quotas 與 HPA 優化資源配置與成本。",
          "建立 K8s 隔離測試環境，顯著縮短開發者整合測試時間。",
          "推動 GitLab CI 標準化並打造 CI 監控 Dashboard，以數據追蹤工程效率。",
          "重新設計高效能 ETL 解決方案，改善舊有資料管線的延遲與穩定性問題。",
        ],
      },
      {
        role: "Data Engineer",
        company: "Adbert",
        period: "Aug 2020 — Aug 2021",
        bullets: [
          "優化 Spark Jobs 資源配置，並導入 Dask 解決大型分散式計算的瓶頸。",
          "重構 ETL pipeline，使用 Redis message queue 提升非同步解耦與高可用性。",
          "以 Django 建立資料驗證 API，並整合 Jenkins 與 Allure Report 強化自動化驗證流程。",
        ],
      },
    ],
    achievements: [
      {
        title: "DevOpsDays Speaker",
        subtitle: "Observability with Grafana",
        period: "Jul 2024",
        link: "https://devopsdays.tw/2024/speaker-page/1500",
      },
      {
        title: "IThome 鐵人賽 DevOps 組佳作",
        subtitle: "從零開始的 Jenkins 之旅",
        period: "Apr 2018 — Jan 2020",
        link: "https://ithelp.ithome.com.tw/users/20151613/ironman/5333",
      },
    ],
    education: [
      {
        school: "資策會",
        program: "大數據班",
        period: "Jan 2020 — Jul 2020",
      },
      {
        school: "國立中央大學",
        program: "數學系",
        period: "Sep 2013 — Jan 2019",
      },
    ],
    contactDescription: "如果你想聊 SRE、DevOps、可觀測性、平台工程，或正在找能把雲端系統變得更穩定的人，我很樂意交流。",
  },
  en: {
    heroName: "Ben Liu",
    heroTitle: "DevOps Engineer | Site Reliability Engineer",
    heroMotto: '"Building reliable, observable, and scalable systems with automation at the core."',
    about: [
      "I am an engineer focused on SRE, DevOps, and platform engineering, with hands-on experience in Kubernetes, observability platforms, CI/CD standardization, and infrastructure automation.",
      "Across Homee AI, iKala, MetaAirLabs, Athemaster, and Adbert, I have worked from data engineering to cloud platform governance, turning complex systems into maintainable, measurable, and continuously deliverable engineering workflows.",
    ],
    focus: ["FinOps", "Event-Driven Architecture", "Observability", "GitOps", "Kubernetes", "Platform Reliability"],
    skills: [
      {
        title: "Programming Languages",
        items: ["Python", "Go", "Bash"],
      },
      {
        title: "Cloud Platforms",
        items: ["AWS", "GCP"],
      },
      {
        title: "CI / CD Tools",
        items: ["Jenkins", "Github Action", "Gitlab CI", "ArgoCD"],
      },
      {
        title: "Container Tools",
        items: ["Kubernetes", "Docker", "EKS", "GKE"],
      },
      {
        title: "Operations & Monitoring",
        items: ["Prometheus", "Grafana", "LGTM", "OpenTelemetry", "EFK", "Zabbix"],
      },
      {
        title: "IaC",
        items: ["Ansible", "Terraform", "Terragrunt", "Helm"],
      },
    ],
    experiences: [
      {
        role: "Senior DevOps Engineer",
        company: "Homee AI",
        period: "Oct 2025 — Now",
        bullets: [
          "Introduced KEDA and Spot Instances for AI workloads, building event-driven scaling and reducing GPU cloud cost by 80%.",
          "Led the company-wide Event Bus initiative to standardize event-driven architecture and reduce service coupling.",
          "Redefined GitHub Actions standards with reusable workflows to improve CI/CD consistency across teams.",
          "Worked with backend engineers on FastAPI services and used k6 to validate P99 latency under high concurrency.",
        ],
      },
      {
        role: "Senior Site Reliability Engineer",
        company: "iKala",
        period: "May 2023 — Apr 2025",
        bullets: [
          "Led the adoption of the LGTM Stack to build an observability platform across products, unifying tracing, logs, and metrics.",
          "Introduced ArgoCD and GitOps in Kolr to improve deployment frequency and environment consistency.",
          "Rebuilt alerting with Opsgenie, reducing MTTR and improving incident response collaboration.",
          "Defined API SLI/SLO standards and automated reporting to make service quality measurable.",
          "Refactored Terraform and Ansible workflows, raising IaC coverage by 20%.",
        ],
      },
      {
        role: "DevOps Engineer",
        company: "MetaAirLabs",
        period: "Apr 2022 — Apr 2023",
        bullets: [
          "Built a centralized alert bus that unified multiple event sources such as Prometheus and CloudWatch.",
          "Optimized Jenkins CI pipelines with dynamic agents and caching strategies to shorten build times.",
          "Introduced ArgoCD and GitOps for safer, traceable Kubernetes deployments.",
          "Built and maintained an HA Kafka cluster with SLI-driven reliability targets.",
          "Automated environment bootstrapping with Python and Bash, cutting setup time by 50%.",
        ],
      },
      {
        role: "DevOps Engineer",
        company: "Athemaster",
        period: "Aug 2021 — Apr 2022",
        bullets: [
          "Led Kubernetes modernization efforts with resource quotas and HPA to improve utilization and reduce cloud cost.",
          "Created isolated K8s-based testing environments that sped up developer integration workflows.",
          "Standardized GitLab CI and built dashboards to track pipeline success rate and engineering throughput.",
          "Redesigned ETL solutions to replace legacy pipelines and improve performance and stability.",
        ],
      },
      {
        role: "Data Engineer",
        company: "Adbert",
        period: "Aug 2020 — Aug 2021",
        bullets: [
          "Optimized Spark job resource allocation and introduced Dask to remove distributed compute bottlenecks.",
          "Rebuilt ETL pipelines with Redis-based message queues for better asynchronous decoupling and availability.",
          "Built a Django-based data validation API and integrated Jenkins with Allure Report for automated verification.",
        ],
      },
    ],
    achievements: [
      {
        title: "DevOpsDays Speaker",
        subtitle: "Observability with Grafana",
        period: "Jul 2024",
        link: "https://devopsdays.tw/2024/speaker-page/1500",
      },
      {
        title: "IThome Ironman Runner-up",
        subtitle: "A Jenkins Journey from Scratch",
        period: "Apr 2018 — Jan 2020",
        link: "https://ithelp.ithome.com.tw/users/20151613/ironman/5333",
      },
    ],
    education: [
      {
        school: "Institute for Information Industry",
        program: "Big Data Program",
        period: "Jan 2020 — Jul 2020",
      },
      {
        school: "National Central University",
        program: "B.S. in Mathematics",
        period: "Sep 2013 — Jan 2019",
      },
    ],
    contactDescription: "If you are hiring for SRE, DevOps, observability, or platform engineering work, I would be happy to connect.",
  },
};
