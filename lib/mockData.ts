import { Company } from './store';

export const mockCompanies: Company[] = [
  {
    "id": "1",
    "name": "OpenAI",
    "slug": "openai",
    "domain": "openai.com",
    "website": "https://openai.com",
    "description": "Pioneering AI research and deployment company behind ChatGPT and GPT-4",
    "industry": "AI/ML",
    "stage": "Series F",
    "fundingRaised": "$17.9B",
    "fundingNum": 17900,
    "currentValuation": "$157B",
    "valuationNum": 157000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2015,
    "employeeCount": "2000+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Microsoft Partnership"
      },
      {
        "year": "2021",
        "valuation": 14000,
        "valuationDisplay": "$14B",
        "event": "Tender Offer"
      },
      {
        "year": "2023",
        "valuation": 29000,
        "valuationDisplay": "$29B",
        "event": "Microsoft $10B Round"
      },
      {
        "year": "2024",
        "valuation": 86000,
        "valuationDisplay": "$86B",
        "event": "Thrive Tender"
      },
      {
        "year": "2025",
        "valuation": 157000,
        "valuationDisplay": "$157B",
        "event": "Series F Round"
      }
    ],
    "fundingRounds": [
      {
        "round": "Seed / Grant",
        "amount": "$1B",
        "valuation": "$1B",
        "date": "Dec 2015",
        "investors": [
          "Sam Altman",
          "Peter Thiel",
          "Reid Hoffman"
        ]
      },
      {
        "round": "Strategic",
        "amount": "$1B",
        "valuation": "$1B",
        "date": "Jul 2019",
        "investors": [
          "Microsoft"
        ]
      },
      {
        "round": "Series C",
        "amount": "$10B",
        "valuation": "$29B",
        "date": "Jan 2023",
        "investors": [
          "Microsoft",
          "Thrive Capital"
        ]
      },
      {
        "round": "Series F",
        "amount": "$6.6B",
        "valuation": "$157B",
        "date": "Oct 2024",
        "investors": [
          "Thrive Capital",
          "SoftBank",
          "Nvidia",
          "Fidelity"
        ]
      }
    ]
  },
  {
    "id": "2",
    "name": "Anthropic",
    "slug": "anthropic",
    "domain": "anthropic.com",
    "website": "https://anthropic.com",
    "description": "AI research and safety enterprise creator of Claude intelligent models",
    "industry": "AI/ML",
    "stage": "Series D",
    "fundingRaised": "$9.7B",
    "fundingNum": 9700,
    "currentValuation": "$40B",
    "valuationNum": 40000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2021,
    "employeeCount": "600+",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 850,
        "valuationDisplay": "$850M",
        "event": "Series A"
      },
      {
        "year": "2022",
        "valuation": 4100,
        "valuationDisplay": "$4.1B",
        "event": "Series B"
      },
      {
        "year": "2023",
        "valuation": 15000,
        "valuationDisplay": "$15B",
        "event": "Amazon & Google"
      },
      {
        "year": "2024",
        "valuation": 18400,
        "valuationDisplay": "$18.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 40000,
        "valuationDisplay": "$40B",
        "event": "Series D"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$124M",
        "valuation": "$850M",
        "date": "May 2021",
        "investors": [
          "Jaan Tallinn",
          "Dustin Moskovitz"
        ]
      },
      {
        "round": "Series B",
        "amount": "$580M",
        "valuation": "$4.1B",
        "date": "Apr 2022",
        "investors": [
          "FTX (exited)",
          "Center for Emerging Risk"
        ]
      },
      {
        "round": "Corporate Round",
        "amount": "$4B",
        "valuation": "$15B",
        "date": "Sep 2023",
        "investors": [
          "Amazon",
          "Google"
        ]
      },
      {
        "round": "Series D",
        "amount": "$2B",
        "valuation": "$40B",
        "date": "Nov 2024",
        "investors": [
          "Lightspeed",
          "Menlo Ventures",
          "Amazon"
        ]
      }
    ]
  },
  {
    "id": "3",
    "name": "Mistral AI",
    "slug": "mistralai",
    "domain": "mistral.ai",
    "website": "https://mistral.ai",
    "description": "Open-weight state-of-the-art European foundation model developer",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$1.1B",
    "fundingNum": 1100,
    "currentValuation": "$6.2B",
    "valuationNum": 6200,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2023,
    "employeeCount": "150+",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 260,
        "valuationDisplay": "$260M",
        "event": "Seed"
      },
      {
        "year": "2023",
        "valuation": 2000,
        "valuationDisplay": "$2.0B",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 6200,
        "valuationDisplay": "$6.2B",
        "event": "Series B"
      }
    ],
    "fundingRounds": [
      {
        "round": "Seed",
        "amount": "$113M",
        "valuation": "$260M",
        "date": "Jun 2023",
        "investors": [
          "Lightspeed Venture Partners",
          "Redpoint",
          "Index Ventures"
        ]
      },
      {
        "round": "Series A",
        "amount": "$415M",
        "valuation": "$2B",
        "date": "Dec 2023",
        "investors": [
          "Andreessen Horowitz",
          "General Catalyst"
        ]
      },
      {
        "round": "Series B",
        "amount": "$640M",
        "valuation": "$6.2B",
        "date": "Jun 2024",
        "investors": [
          "General Catalyst",
          "DST Global",
          "Bpifrance"
        ]
      }
    ]
  },
  {
    "id": "4",
    "name": "Perplexity AI",
    "slug": "perplexity",
    "domain": "perplexity.ai",
    "website": "https://perplexity.ai",
    "description": "Conversational answer engine revolutionizing web search and discovery",
    "industry": "AI/ML",
    "stage": "Series C",
    "fundingRaised": "$650M",
    "fundingNum": 650,
    "currentValuation": "$9B",
    "valuationNum": 9000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2022,
    "employeeCount": "100+",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Seed"
      },
      {
        "year": "2023",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Series B Extension"
      },
      {
        "year": "2025",
        "valuation": 9000,
        "valuationDisplay": "$9B",
        "event": "Series C"
      }
    ],
    "fundingRounds": [
      {
        "round": "Seed",
        "amount": "$3.1M",
        "valuation": "$25M",
        "date": "Sep 2022",
        "investors": [
          "Elad Gil",
          "Nat Friedman"
        ]
      },
      {
        "round": "Series A",
        "amount": "$25.6M",
        "valuation": "$150M",
        "date": "Mar 2023",
        "investors": [
          "NEA",
          "Databricks Ventures"
        ]
      },
      {
        "round": "Series B",
        "amount": "$73.6M",
        "valuation": "$520M",
        "date": "Jan 2024",
        "investors": [
          "IVP",
          "Jeff Bezos",
          "Nvidia"
        ]
      },
      {
        "round": "Series C",
        "amount": "$500M",
        "valuation": "$9B",
        "date": "Dec 2024",
        "investors": [
          "Institutional Venture Partners",
          "SoftBank Vision Fund 2"
        ]
      }
    ]
  },
  {
    "id": "5",
    "name": "Stripe",
    "slug": "stripe",
    "domain": "stripe.com",
    "website": "https://stripe.com",
    "description": "Global financial infrastructure and payment processing platform",
    "industry": "Fintech",
    "stage": "Private",
    "fundingRaised": "$8.7B",
    "fundingNum": 8700,
    "currentValuation": "$70B",
    "valuationNum": 70000,
    "country": "United States",
    "headquarters": "San Francisco & Dublin",
    "foundedYear": 2010,
    "employeeCount": "8000+",
    "valuationHistory": [
      {
        "year": "2012",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2014",
        "valuation": 1750,
        "valuationDisplay": "$1.75B",
        "event": "Series C"
      },
      {
        "year": "2018",
        "valuation": 20000,
        "valuationDisplay": "$20B",
        "event": "Series E"
      },
      {
        "year": "2021",
        "valuation": 95000,
        "valuationDisplay": "$95B",
        "event": "Series H"
      },
      {
        "year": "2023",
        "valuation": 50000,
        "valuationDisplay": "$50B",
        "event": "Tender Offer"
      },
      {
        "year": "2024",
        "valuation": 65000,
        "valuationDisplay": "$65B",
        "event": "Share Repurchase"
      },
      {
        "year": "2025",
        "valuation": 70000,
        "valuationDisplay": "$70B",
        "event": "Liquidity Round"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Jul 2012",
        "investors": [
          "Sequoia Capital",
          "General Catalyst"
        ]
      },
      {
        "round": "Series C",
        "amount": "$80M",
        "valuation": "$1.75B",
        "date": "Jan 2014",
        "investors": [
          "Founders Fund",
          "Khosla Ventures"
        ]
      },
      {
        "round": "Series H",
        "amount": "$600M",
        "valuation": "$95B",
        "date": "Mar 2021",
        "investors": [
          "Allianz",
          "Baillie Gifford",
          "Fidelity"
        ]
      },
      {
        "round": "Tender Offer",
        "amount": "$6.5B",
        "valuation": "$50B",
        "date": "Mar 2023",
        "investors": [
          "Andreessen Horowitz",
          "Founders Fund",
          "GIC"
        ]
      }
    ]
  },
  {
    "id": "6",
    "name": "Vercel",
    "slug": "vercel",
    "domain": "vercel.com",
    "website": "https://vercel.com",
    "description": "Frontend cloud platform powering Next.js and high-performance web applications",
    "industry": "Infrastructure",
    "stage": "Series E",
    "fundingRaised": "$563M",
    "fundingNum": 563,
    "currentValuation": "$3.25B",
    "valuationNum": 3250,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2015,
    "employeeCount": "650+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 250,
        "valuationDisplay": "$250M",
        "event": "Series A"
      },
      {
        "year": "2020",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Series B"
      },
      {
        "year": "2021",
        "valuation": 1100,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2021",
        "valuation": 2500,
        "valuationDisplay": "$2.5B",
        "event": "Series D"
      },
      {
        "year": "2024",
        "valuation": 3250,
        "valuationDisplay": "$3.25B",
        "event": "Series E"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$21M",
        "valuation": "$250M",
        "date": "Apr 2020",
        "investors": [
          "Accel",
          "CRV"
        ]
      },
      {
        "round": "Series B",
        "amount": "$40M",
        "valuation": "$500M",
        "date": "Dec 2020",
        "investors": [
          "GV",
          "Greenoaks Capital"
        ]
      },
      {
        "round": "Series C",
        "amount": "$102M",
        "valuation": "$1.1B",
        "date": "Jun 2021",
        "investors": [
          "Bedrock Capital",
          "Tiger Global"
        ]
      },
      {
        "round": "Series D",
        "amount": "$150M",
        "valuation": "$2.5B",
        "date": "Nov 2021",
        "investors": [
          "GGV Capital",
          "Salesforce Ventures"
        ]
      },
      {
        "round": "Series E",
        "amount": "$250M",
        "valuation": "$3.25B",
        "date": "May 2024",
        "investors": [
          "Accel",
          "CRV",
          "GV"
        ]
      }
    ]
  },
  {
    "id": "7",
    "name": "Scale AI",
    "slug": "scaleai",
    "domain": "scale.com",
    "website": "https://scale.com",
    "description": "Data infrastructure engine for foundational generative and military AI",
    "industry": "AI/ML",
    "stage": "Series F",
    "fundingRaised": "$1.6B",
    "fundingNum": 1600,
    "currentValuation": "$13.8B",
    "valuationNum": 13800,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2016,
    "employeeCount": "1100+",
    "valuationHistory": [
      {
        "year": "2018",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series B"
      },
      {
        "year": "2019",
        "valuation": 1000,
        "valuationDisplay": "$1.0B",
        "event": "Series C Unicorn"
      },
      {
        "year": "2020",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Series D"
      },
      {
        "year": "2021",
        "valuation": 7300,
        "valuationDisplay": "$7.3B",
        "event": "Series E"
      },
      {
        "year": "2024",
        "valuation": 13800,
        "valuationDisplay": "$13.8B",
        "event": "Series F"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series B",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Aug 2018",
        "investors": [
          "Index Ventures",
          "Founders Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$100M",
        "valuation": "$1B",
        "date": "Aug 2019",
        "investors": [
          "Founders Fund",
          "Coatue"
        ]
      },
      {
        "round": "Series D",
        "amount": "$155M",
        "valuation": "$3.5B",
        "date": "Dec 2020",
        "investors": [
          "Tiger Global"
        ]
      },
      {
        "round": "Series E",
        "amount": "$325M",
        "valuation": "$7.3B",
        "date": "Apr 2021",
        "investors": [
          "Dragoneer",
          "Greenoaks"
        ]
      },
      {
        "round": "Series F",
        "amount": "$1B",
        "valuation": "$13.8B",
        "date": "May 2024",
        "investors": [
          "Accel",
          "Amazon",
          "Meta",
          "Cisco"
        ]
      }
    ]
  },
  {
    "id": "8",
    "name": "Figure AI",
    "slug": "figureai",
    "domain": "figure.ai",
    "website": "https://www.figure.ai",
    "description": "Autonomous humanoid robotics engineered for commercial manufacturing and logistics",
    "industry": "Robotics",
    "stage": "Series B",
    "fundingRaised": "$745M",
    "fundingNum": 745,
    "currentValuation": "$2.6B",
    "valuationNum": 2600,
    "country": "United States",
    "headquarters": "Sunnyvale, CA",
    "foundedYear": 2022,
    "employeeCount": "250+",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 120,
        "valuationDisplay": "$120M",
        "event": "Seed"
      },
      {
        "year": "2023",
        "valuation": 400,
        "valuationDisplay": "$400M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 2600,
        "valuationDisplay": "$2.6B",
        "event": "Series B"
      }
    ],
    "fundingRounds": [
      {
        "round": "Seed",
        "amount": "$20M",
        "valuation": "$120M",
        "date": "Sep 2022",
        "investors": [
          "Brett Adcock"
        ]
      },
      {
        "round": "Series A",
        "amount": "$70M",
        "valuation": "$400M",
        "date": "May 2023",
        "investors": [
          "Parkway Venture Capital",
          "Intel Capital"
        ]
      },
      {
        "round": "Series B",
        "amount": "$675M",
        "valuation": "$2.6B",
        "date": "Feb 2024",
        "investors": [
          "Jeff Bezos",
          "Microsoft",
          "Nvidia",
          "OpenAI"
        ]
      }
    ]
  },
  {
    "id": "9",
    "name": "Canva",
    "slug": "canva",
    "domain": "canva.com",
    "website": "https://canva.com",
    "description": "Visual communication and design suite democratizing digital creative production",
    "industry": "Design & Productivity",
    "stage": "Private",
    "fundingRaised": "$572M",
    "fundingNum": 572,
    "currentValuation": "$32B",
    "valuationNum": 32000,
    "country": "Australia",
    "headquarters": "Sydney, Australia",
    "foundedYear": 2013,
    "employeeCount": "4500+",
    "valuationHistory": [
      {
        "year": "2015",
        "valuation": 165,
        "valuationDisplay": "$165M",
        "event": "Series A"
      },
      {
        "year": "2018",
        "valuation": 1000,
        "valuationDisplay": "$1.0B",
        "event": "Unicorn Mark"
      },
      {
        "year": "2019",
        "valuation": 3200,
        "valuationDisplay": "$3.2B",
        "event": "Growth Round"
      },
      {
        "year": "2021",
        "valuation": 40000,
        "valuationDisplay": "$40B",
        "event": "Peak Round"
      },
      {
        "year": "2024",
        "valuation": 26000,
        "valuationDisplay": "$26B",
        "event": "Secondary Sale"
      },
      {
        "year": "2025",
        "valuation": 32000,
        "valuationDisplay": "$32B",
        "event": "Pre-IPO valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$15M",
        "valuation": "$165M",
        "date": "Oct 2015",
        "investors": [
          "Felicis Ventures",
          "Blackbird Ventures"
        ]
      },
      {
        "round": "Series C",
        "amount": "$40M",
        "valuation": "$1B",
        "date": "Jan 2018",
        "investors": [
          "Sequoia Capital China"
        ]
      },
      {
        "round": "Series E",
        "amount": "$200M",
        "valuation": "$40B",
        "date": "Sep 2021",
        "investors": [
          "T. Rowe Price",
          "Franklin Templeton"
        ]
      },
      {
        "round": "Secondary",
        "amount": "$1.6B",
        "valuation": "$26B",
        "date": "Apr 2024",
        "investors": [
          "Coatue",
          "Iconiq Growth"
        ]
      }
    ]
  },
  {
    "id": "10",
    "name": "Notion",
    "slug": "notion",
    "domain": "notion.so",
    "website": "https://notion.so",
    "description": "Connected workspace unifying notes, documents, wikis, projects, and native AI",
    "industry": "Design & Productivity",
    "stage": "Series C",
    "fundingRaised": "$343M",
    "fundingNum": 343,
    "currentValuation": "$10B",
    "valuationNum": 10000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2016,
    "employeeCount": "750+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 800,
        "valuationDisplay": "$800M",
        "event": "Series A"
      },
      {
        "year": "2020",
        "valuation": 2000,
        "valuationDisplay": "$2.0B",
        "event": "Series B"
      },
      {
        "year": "2021",
        "valuation": 10000,
        "valuationDisplay": "$10B",
        "event": "Series C"
      },
      {
        "year": "2024",
        "valuation": 10000,
        "valuationDisplay": "$10B",
        "event": "Sustained Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$10M",
        "valuation": "$800M",
        "date": "Jul 2019",
        "investors": [
          "Daniel Gross",
          "First Round Capital"
        ]
      },
      {
        "round": "Series B",
        "amount": "$50M",
        "valuation": "$2B",
        "date": "Apr 2020",
        "investors": [
          "Index Ventures"
        ]
      },
      {
        "round": "Series C",
        "amount": "$275M",
        "valuation": "$10B",
        "date": "Oct 2021",
        "investors": [
          "Sequoia Capital",
          "Coatue"
        ]
      }
    ]
  },
  {
    "id": "11",
    "name": "Revolut",
    "slug": "revolut",
    "domain": "revolut.com",
    "website": "https://revolut.com",
    "description": "Global financial super-app offering multi-currency banking, transfers, and investing",
    "industry": "Fintech",
    "stage": "Private",
    "fundingRaised": "$1.7B",
    "fundingNum": 1700,
    "currentValuation": "$45B",
    "valuationNum": 45000,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2015,
    "employeeCount": "10000+",
    "valuationHistory": [
      {
        "year": "2017",
        "valuation": 380,
        "valuationDisplay": "$380M",
        "event": "Series B"
      },
      {
        "year": "2018",
        "valuation": 1700,
        "valuationDisplay": "$1.7B",
        "event": "Series C"
      },
      {
        "year": "2020",
        "valuation": 5500,
        "valuationDisplay": "$5.5B",
        "event": "Series D"
      },
      {
        "year": "2021",
        "valuation": 33000,
        "valuationDisplay": "$33B",
        "event": "Series E"
      },
      {
        "year": "2024",
        "valuation": 45000,
        "valuationDisplay": "$45B",
        "event": "Secondary Share Sale"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series B",
        "amount": "$66M",
        "valuation": "$380M",
        "date": "Jul 2017",
        "investors": [
          "Index Ventures",
          "Balderton Capital"
        ]
      },
      {
        "round": "Series C",
        "amount": "$250M",
        "valuation": "$1.7B",
        "date": "Apr 2018",
        "investors": [
          "DST Global"
        ]
      },
      {
        "round": "Series E",
        "amount": "$800M",
        "valuation": "$33B",
        "date": "Jul 2021",
        "investors": [
          "SoftBank Vision Fund 2",
          "Tiger Global"
        ]
      },
      {
        "round": "Secondary",
        "amount": "$500M",
        "valuation": "$45B",
        "date": "Aug 2024",
        "investors": [
          "Coatue",
          "Greenoaks Capital",
          "Fidelity"
        ]
      }
    ]
  },
  {
    "id": "12",
    "name": "Wiz",
    "slug": "wiz",
    "domain": "wiz.io",
    "website": "https://wiz.io",
    "description": "Cloud security platform offering complete risk assessment across multi-cloud environments",
    "industry": "CyberSecurity",
    "stage": "Series E",
    "fundingRaised": "$1.9B",
    "fundingNum": 1900,
    "currentValuation": "$12B",
    "valuationNum": 12000,
    "country": "Israel",
    "headquarters": "Tel Aviv & New York",
    "foundedYear": 2020,
    "employeeCount": "1200+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Series A"
      },
      {
        "year": "2021",
        "valuation": 1700,
        "valuationDisplay": "$1.7B",
        "event": "Series B"
      },
      {
        "year": "2021",
        "valuation": 6000,
        "valuationDisplay": "$6.0B",
        "event": "Series C"
      },
      {
        "year": "2023",
        "valuation": 10000,
        "valuationDisplay": "$10B",
        "event": "Series D"
      },
      {
        "year": "2024",
        "valuation": 12000,
        "valuationDisplay": "$12B",
        "event": "Series E"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$100M",
        "valuation": "$500M",
        "date": "Dec 2020",
        "investors": [
          "Index Ventures",
          "Sequoia Capital"
        ]
      },
      {
        "round": "Series B",
        "amount": "$130M",
        "valuation": "$1.7B",
        "date": "May 2021",
        "investors": [
          "Advent International",
          "Greenoaks"
        ]
      },
      {
        "round": "Series D",
        "amount": "$300M",
        "valuation": "$10B",
        "date": "Feb 2023",
        "investors": [
          "Lightspeed",
          "Greenoaks"
        ]
      },
      {
        "round": "Series E",
        "amount": "$1B",
        "valuation": "$12B",
        "date": "May 2024",
        "investors": [
          "Andreessen Horowitz",
          "Lightspeed",
          "Thrive"
        ]
      }
    ]
  },
  {
    "id": "13",
    "name": "Cohere",
    "slug": "cohere",
    "domain": "cohere.com",
    "website": "https://cohere.com",
    "description": "Enterprise generative AI platform providing proprietary LLMs and secure embeddings",
    "industry": "AI/ML",
    "stage": "Series D",
    "fundingRaised": "$970M",
    "fundingNum": 970,
    "currentValuation": "$5.5B",
    "valuationNum": 5500,
    "country": "Canada",
    "headquarters": "Toronto, Canada",
    "foundedYear": 2019,
    "employeeCount": "400+",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 250,
        "valuationDisplay": "$250M",
        "event": "Series A"
      },
      {
        "year": "2022",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2023",
        "valuation": 2200,
        "valuationDisplay": "$2.2B",
        "event": "Series C"
      },
      {
        "year": "2024",
        "valuation": 5500,
        "valuationDisplay": "$5.5B",
        "event": "Series D"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$40M",
        "valuation": "$250M",
        "date": "Sep 2021",
        "investors": [
          "Index Ventures"
        ]
      },
      {
        "round": "Series B",
        "amount": "$125M",
        "valuation": "$700M",
        "date": "Feb 2022",
        "investors": [
          "Tiger Global",
          "Radical Ventures"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$2.2B",
        "date": "Jun 2023",
        "investors": [
          "Inovia Capital",
          "Nvidia",
          "Oracle",
          "Salesforce"
        ]
      },
      {
        "round": "Series D",
        "amount": "$500M",
        "valuation": "$5.5B",
        "date": "Jul 2024",
        "investors": [
          "Cisco",
          "AMD",
          "EDC",
          "Fidelity"
        ]
      }
    ]
  },
  {
    "id": "14",
    "name": "Celonis",
    "slug": "celonis",
    "domain": "celonis.com",
    "website": "https://celonis.com",
    "description": "Execution management and process mining intelligence for global enterprises",
    "industry": "Enterprise SaaS",
    "stage": "Series D",
    "fundingRaised": "$2.4B",
    "fundingNum": 2400,
    "currentValuation": "$13B",
    "valuationNum": 13000,
    "country": "Germany",
    "headquarters": "Munich, Germany",
    "foundedYear": 2011,
    "employeeCount": "3500+",
    "valuationHistory": [
      {
        "year": "2016",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2018",
        "valuation": 1000,
        "valuationDisplay": "$1.0B",
        "event": "Series B Unicorn"
      },
      {
        "year": "2019",
        "valuation": 2500,
        "valuationDisplay": "$2.5B",
        "event": "Series C"
      },
      {
        "year": "2021",
        "valuation": 11000,
        "valuationDisplay": "$11B",
        "event": "Series D"
      },
      {
        "year": "2023",
        "valuation": 13000,
        "valuationDisplay": "$13B",
        "event": "Series D Extension"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27.5M",
        "valuation": "$100M",
        "date": "Jun 2016",
        "investors": [
          "Accel",
          "83North"
        ]
      },
      {
        "round": "Series B",
        "amount": "$50M",
        "valuation": "$1B",
        "date": "Jun 2018",
        "investors": [
          "Accel",
          "83North"
        ]
      },
      {
        "round": "Series D",
        "amount": "$1B",
        "valuation": "$11B",
        "date": "Jun 2021",
        "investors": [
          "Durable Capital",
          "T. Rowe Price"
        ]
      }
    ]
  },
  {
    "id": "15",
    "name": "Razorpay",
    "slug": "razorpay",
    "domain": "razorpay.com",
    "website": "https://razorpay.com",
    "description": "Full-stack financial services and payments infrastructure powering digital India",
    "industry": "Fintech",
    "stage": "Series F",
    "fundingRaised": "$815M",
    "fundingNum": 815,
    "currentValuation": "$7.5B",
    "valuationNum": 7500,
    "country": "India",
    "headquarters": "Bengaluru, India",
    "foundedYear": 2014,
    "employeeCount": "3000+",
    "valuationHistory": [
      {
        "year": "2015",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Series A"
      },
      {
        "year": "2018",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series B"
      },
      {
        "year": "2019",
        "valuation": 450,
        "valuationDisplay": "$450M",
        "event": "Series C"
      },
      {
        "year": "2020",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Series D Unicorn"
      },
      {
        "year": "2021",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Series E"
      },
      {
        "year": "2021",
        "valuation": 7500,
        "valuationDisplay": "$7.5B",
        "event": "Series F"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$25M",
        "date": "Oct 2015",
        "investors": [
          "Tiger Global",
          "Matrix Partners India"
        ]
      },
      {
        "round": "Series D",
        "amount": "$100M",
        "valuation": "$1B",
        "date": "Oct 2020",
        "investors": [
          "GIC",
          "Sequoia Capital India"
        ]
      },
      {
        "round": "Series F",
        "amount": "$375M",
        "valuation": "$7.5B",
        "date": "Dec 2021",
        "investors": [
          "Lone Pine Capital",
          "Alkeon Capital",
          "TCV"
        ]
      }
    ]
  },
  {
    "id": "16",
    "name": "Supabase",
    "slug": "supabase",
    "domain": "supabase.com",
    "website": "https://supabase.com",
    "description": "Open source Firebase alternative providing Postgres, Auth, Realtime, and Storage",
    "industry": "Infrastructure",
    "stage": "Series B",
    "fundingRaised": "$116M",
    "fundingNum": 116,
    "currentValuation": "$1.8B",
    "valuationNum": 1800,
    "country": "Singapore",
    "headquarters": "Singapore & Remote",
    "foundedYear": 2020,
    "employeeCount": "150+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 20,
        "valuationDisplay": "$20M",
        "event": "Seed"
      },
      {
        "year": "2021",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2022",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1800,
        "valuationDisplay": "$1.8B",
        "event": "Growth Round"
      }
    ],
    "fundingRounds": [
      {
        "round": "Seed",
        "amount": "$6M",
        "valuation": "$20M",
        "date": "Dec 2020",
        "investors": [
          "Coatue",
          "Y Combinator"
        ]
      },
      {
        "round": "Series A",
        "amount": "$30M",
        "valuation": "$100M",
        "date": "Sep 2021",
        "investors": [
          "Coatue",
          "Lightspeed"
        ]
      },
      {
        "round": "Series B",
        "amount": "$80M",
        "valuation": "$500M",
        "date": "May 2022",
        "investors": [
          "Felicis",
          "Coatue"
        ]
      }
    ]
  },
  {
    "id": "17",
    "name": "SpaceX",
    "slug": "spacex",
    "domain": "spacex.com",
    "website": "https://spacex.com",
    "description": "Aerospace manufacturer and satellite communications operator Starlink",
    "industry": "SpaceTech",
    "stage": "Private",
    "fundingRaised": "$10.2B",
    "fundingNum": 10200,
    "currentValuation": "$350B",
    "valuationNum": 350000,
    "country": "United States",
    "headquarters": "Hawthorne, CA",
    "foundedYear": 2002,
    "employeeCount": "13000+",
    "valuationHistory": [
      {
        "year": "2015",
        "valuation": 12000,
        "valuationDisplay": "$12B",
        "event": "Google Round"
      },
      {
        "year": "2019",
        "valuation": 33000,
        "valuationDisplay": "$33B",
        "event": "Starlink Acceleration"
      },
      {
        "year": "2021",
        "valuation": 100000,
        "valuationDisplay": "$100B",
        "event": "Centicorn Round"
      },
      {
        "year": "2023",
        "valuation": 180000,
        "valuationDisplay": "$180B",
        "event": "Tender Offer"
      },
      {
        "year": "2024",
        "valuation": 210000,
        "valuationDisplay": "$210B",
        "event": "Tender Offer"
      },
      {
        "year": "2025",
        "valuation": 350000,
        "valuationDisplay": "$350B",
        "event": "Secondary Tender"
      }
    ],
    "fundingRounds": [
      {
        "round": "Corporate",
        "amount": "$1B",
        "valuation": "$12B",
        "date": "Jan 2015",
        "investors": [
          "Google",
          "Fidelity"
        ]
      },
      {
        "round": "Growth",
        "amount": "$850M",
        "valuation": "$74B",
        "date": "Feb 2021",
        "investors": [
          "Sequoia",
          "Valor Equity Partners"
        ]
      },
      {
        "round": "Tender Offer",
        "amount": "$1.7B",
        "valuation": "$127B",
        "date": "May 2022",
        "investors": [
          "Founders Fund"
        ]
      }
    ]
  },
  {
    "id": "18",
    "name": "Anduril Industries",
    "slug": "anduril",
    "domain": "anduril.com",
    "website": "https://anduril.com",
    "description": "Defense technology enterprise building autonomous military hardware and Lattice OS",
    "industry": "Robotics",
    "stage": "Series F",
    "fundingRaised": "$3.8B",
    "fundingNum": 3800,
    "currentValuation": "$14B",
    "valuationNum": 14000,
    "country": "United States",
    "headquarters": "Costa Mesa, CA",
    "foundedYear": 2017,
    "employeeCount": "3500+",
    "valuationHistory": [
      {
        "year": "2018",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2019",
        "valuation": 1000,
        "valuationDisplay": "$1.0B",
        "event": "Series B Unicorn"
      },
      {
        "year": "2021",
        "valuation": 4600,
        "valuationDisplay": "$4.6B",
        "event": "Series D"
      },
      {
        "year": "2022",
        "valuation": 8480,
        "valuationDisplay": "$8.5B",
        "event": "Series E"
      },
      {
        "year": "2024",
        "valuation": 14000,
        "valuationDisplay": "$14B",
        "event": "Series F"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series B",
        "amount": "$120M",
        "valuation": "$1B",
        "date": "Sep 2019",
        "investors": [
          "Founders Fund",
          "General Catalyst"
        ]
      },
      {
        "round": "Series E",
        "amount": "$1.48B",
        "valuation": "$8.48B",
        "date": "Dec 2022",
        "investors": [
          "Valor Equity Partners",
          "Andreessen Horowitz"
        ]
      },
      {
        "round": "Series F",
        "amount": "$1.5B",
        "valuation": "$14B",
        "date": "Aug 2024",
        "investors": [
          "Peter Thiel",
          "Sands Capital",
          "Baillie Gifford"
        ]
      }
    ]
  },
  {
    "id": "19",
    "name": "DeepL",
    "slug": "deepl",
    "domain": "deepl.com",
    "website": "https://deepl.com",
    "description": "World-leading neural machine translation and business AI communication engine",
    "industry": "AI/ML",
    "stage": "Series C",
    "fundingRaised": "$420M",
    "fundingNum": 420,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "Germany",
    "headquarters": "Cologne, Germany",
    "foundedYear": 2017,
    "employeeCount": "900+",
    "valuationHistory": [
      {
        "year": "2018",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Early Round"
      },
      {
        "year": "2023",
        "valuation": 1000,
        "valuationDisplay": "$1.0B",
        "event": "Series B Unicorn"
      },
      {
        "year": "2024",
        "valuation": 2000,
        "valuationDisplay": "$2.0B",
        "event": "Series C"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series B",
        "amount": "$100M",
        "valuation": "$1B",
        "date": "Jan 2023",
        "investors": [
          "IVP",
          "Bessemer Venture Partners"
        ]
      },
      {
        "round": "Series C",
        "amount": "$300M",
        "valuation": "$2B",
        "date": "May 2024",
        "investors": [
          "Index Ventures",
          "Iconiq Growth"
        ]
      }
    ]
  },
  {
    "id": "20",
    "name": "Ramp",
    "slug": "ramp",
    "domain": "ramp.com",
    "website": "https://ramp.com",
    "description": "Corporate cards, automated expense management, and treasury financial platform",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$1.6B",
    "fundingNum": 1600,
    "currentValuation": "$7.65B",
    "valuationNum": 7650,
    "country": "United States",
    "headquarters": "New York, NY",
    "foundedYear": 2019,
    "employeeCount": "800+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2021",
        "valuation": 1600,
        "valuationDisplay": "$1.6B",
        "event": "Series B"
      },
      {
        "year": "2021",
        "valuation": 3900,
        "valuationDisplay": "$3.9B",
        "event": "Series C"
      },
      {
        "year": "2022",
        "valuation": 8100,
        "valuationDisplay": "$8.1B",
        "event": "Series C Extension"
      },
      {
        "year": "2023",
        "valuation": 5800,
        "valuationDisplay": "$5.8B",
        "event": "Series D"
      },
      {
        "year": "2024",
        "valuation": 7650,
        "valuationDisplay": "$7.65B",
        "event": "Series D2"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$25M",
        "valuation": "$100M",
        "date": "Dec 2019",
        "investors": [
          "Keith Rabois",
          "Founders Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$300M",
        "valuation": "$3.9B",
        "date": "Aug 2021",
        "investors": [
          "Founders Fund",
          "Redpoint",
          "Thrive"
        ]
      },
      {
        "round": "Series D",
        "amount": "$150M",
        "valuation": "$7.65B",
        "date": "Apr 2024",
        "investors": [
          "Khosla Ventures",
          "Founders Fund"
        ]
      }
    ]
  },
  {
    "id": "21",
    "name": "Northvolt",
    "slug": "northvolt",
    "domain": "northvolt.com",
    "website": "https://northvolt.com",
    "description": "European gigafactory manufacturer of sustainable lithium-ion battery cells",
    "industry": "CleanTech",
    "stage": "Series E",
    "fundingRaised": "$13B",
    "fundingNum": 13000,
    "currentValuation": "$12B",
    "valuationNum": 12000,
    "country": "Sweden",
    "headquarters": "Stockholm, Sweden",
    "foundedYear": 2016,
    "employeeCount": "5000+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Equity Raise"
      },
      {
        "year": "2021",
        "valuation": 11750,
        "valuationDisplay": "$11.8B",
        "event": "Series D"
      },
      {
        "year": "2023",
        "valuation": 12000,
        "valuationDisplay": "$12B",
        "event": "Debt & Equity"
      }
    ],
    "fundingRounds": [
      {
        "round": "Equity",
        "amount": "$1B",
        "valuation": "$1.5B",
        "date": "Jun 2019",
        "investors": [
          "Volkswagen",
          "Goldman Sachs"
        ]
      },
      {
        "round": "Series D",
        "amount": "$2.75B",
        "valuation": "$11.75B",
        "date": "Jun 2021",
        "investors": [
          "Baillie Gifford",
          "Scania",
          "Spotify"
        ]
      },
      {
        "round": "Project Finance",
        "amount": "$5B",
        "valuation": "$12B",
        "date": "Jan 2024",
        "investors": [
          "European Investment Bank"
        ]
      }
    ]
  },
  {
    "id": "22",
    "name": "Linear",
    "slug": "linear",
    "domain": "linear.app",
    "website": "https://linear.app",
    "description": "Purpose-built product management and issue tracking tool for modern engineering teams",
    "industry": "Design & Productivity",
    "stage": "Series B",
    "fundingRaised": "$52M",
    "fundingNum": 52,
    "currentValuation": "$400M",
    "valuationNum": 400,
    "country": "United States",
    "headquarters": "San Francisco & Remote",
    "foundedYear": 2019,
    "employeeCount": "60+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 15,
        "valuationDisplay": "$15M",
        "event": "Seed"
      },
      {
        "year": "2020",
        "valuation": 60,
        "valuationDisplay": "$60M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 400,
        "valuationDisplay": "$400M",
        "event": "Series B"
      }
    ],
    "fundingRounds": [
      {
        "round": "Seed",
        "amount": "$4.2M",
        "valuation": "$15M",
        "date": "Nov 2019",
        "investors": [
          "Sequoia Capital"
        ]
      },
      {
        "round": "Series A",
        "amount": "$13M",
        "valuation": "$60M",
        "date": "Dec 2020",
        "investors": [
          "Sequoia Capital"
        ]
      },
      {
        "round": "Series B",
        "amount": "$35M",
        "valuation": "$400M",
        "date": "Sep 2023",
        "investors": [
          "Accel"
        ]
      }
    ]
  },
  {
    "id": "23",
    "name": "Klarna",
    "slug": "klarna",
    "domain": "klarna.com",
    "website": "https://klarna.com",
    "description": "Global buy now pay later banking network and smart shopping assistant",
    "industry": "Fintech",
    "stage": "Pre-IPO",
    "fundingRaised": "$4.5B",
    "fundingNum": 4500,
    "currentValuation": "$14.6B",
    "valuationNum": 14600,
    "country": "Sweden",
    "headquarters": "Stockholm, Sweden",
    "foundedYear": 2005,
    "employeeCount": "5000+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 5500,
        "valuationDisplay": "$5.5B",
        "event": "Series F"
      },
      {
        "year": "2020",
        "valuation": 10600,
        "valuationDisplay": "$10.6B",
        "event": "Series G"
      },
      {
        "year": "2021",
        "valuation": 45600,
        "valuationDisplay": "$45.6B",
        "event": "SoftBank Round"
      },
      {
        "year": "2022",
        "valuation": 6700,
        "valuationDisplay": "$6.7B",
        "event": "Market Reset"
      },
      {
        "year": "2024",
        "valuation": 14600,
        "valuationDisplay": "$14.6B",
        "event": "Pre-IPO Rebound"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series F",
        "amount": "$460M",
        "valuation": "$5.5B",
        "date": "Aug 2019",
        "investors": [
          "Dragoneer"
        ]
      },
      {
        "round": "Series H",
        "amount": "$639M",
        "valuation": "$45.6B",
        "date": "Jun 2021",
        "investors": [
          "SoftBank Vision Fund 2"
        ]
      },
      {
        "round": "Growth",
        "amount": "$800M",
        "valuation": "$6.7B",
        "date": "Jul 2022",
        "investors": [
          "Sequoia",
          "Commonwealth Bank"
        ]
      }
    ]
  },
  {
    "id": "24",
    "name": "Postman",
    "slug": "postman",
    "domain": "postman.com",
    "website": "https://postman.com",
    "description": "Collaborative API development, testing, and lifecycle management platform",
    "industry": "Infrastructure",
    "stage": "Series D",
    "fundingRaised": "$433M",
    "fundingNum": 433,
    "currentValuation": "$5.6B",
    "valuationNum": 5600,
    "country": "India",
    "headquarters": "Bengaluru & San Francisco",
    "foundedYear": 2014,
    "employeeCount": "1200+",
    "valuationHistory": [
      {
        "year": "2016",
        "valuation": 30,
        "valuationDisplay": "$30M",
        "event": "Series A"
      },
      {
        "year": "2019",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2020",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Series C Unicorn"
      },
      {
        "year": "2021",
        "valuation": 5600,
        "valuationDisplay": "$5.6B",
        "event": "Series D"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$7M",
        "valuation": "$30M",
        "date": "Oct 2016",
        "investors": [
          "Nexus Venture Partners"
        ]
      },
      {
        "round": "Series C",
        "amount": "$150M",
        "valuation": "$2B",
        "date": "Jun 2020",
        "investors": [
          "Insight Partners",
          "CRV"
        ]
      },
      {
        "round": "Series D",
        "amount": "$225M",
        "valuation": "$5.6B",
        "date": "Aug 2021",
        "investors": [
          "Insight Partners",
          "Coatue",
          "Battery Ventures"
        ]
      }
    ]
  },
  {
    "id": "25",
    "name": "Hugging Face",
    "slug": "huggingface",
    "domain": "huggingface.co",
    "website": "https://huggingface.co",
    "description": "Open AI community hub for machine learning models, datasets, and collaborative apps",
    "industry": "AI/ML",
    "stage": "Series D",
    "fundingRaised": "$395M",
    "fundingNum": 395,
    "currentValuation": "$4.5B",
    "valuationNum": 4500,
    "country": "United States",
    "headquarters": "New York & Paris",
    "foundedYear": 2016,
    "employeeCount": "250+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 80,
        "valuationDisplay": "$80M",
        "event": "Series A"
      },
      {
        "year": "2021",
        "valuation": 400,
        "valuationDisplay": "$400M",
        "event": "Series B"
      },
      {
        "year": "2022",
        "valuation": 2000,
        "valuationDisplay": "$2.0B",
        "event": "Series C"
      },
      {
        "year": "2023",
        "valuation": 4500,
        "valuationDisplay": "$4.5B",
        "event": "Series D"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$15M",
        "valuation": "$80M",
        "date": "Dec 2019",
        "investors": [
          "Lux Capital"
        ]
      },
      {
        "round": "Series C",
        "amount": "$100M",
        "valuation": "$2B",
        "date": "May 2022",
        "investors": [
          "Lux Capital",
          "Sequoia"
        ]
      },
      {
        "round": "Series D",
        "amount": "$235M",
        "valuation": "$4.5B",
        "date": "Aug 2023",
        "investors": [
          "Salesforce",
          "Google",
          "Amazon",
          "Nvidia",
          "Intel"
        ]
      }
    ]
  },
  {
    "id": "26",
    "name": "Brex",
    "slug": "brex",
    "domain": "brex.com",
    "website": "https://brex.com",
    "description": "Unified corporate cards, travel booking, and spend management platform for high-growth firms",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$1.5B",
    "fundingNum": 1500,
    "currentValuation": "$12.3B",
    "valuationNum": 12300,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2017,
    "employeeCount": "1100+",
    "valuationHistory": [
      {
        "year": "2018",
        "valuation": 220,
        "valuationDisplay": "$220M",
        "event": "Series B"
      },
      {
        "year": "2018",
        "valuation": 1100,
        "valuationDisplay": "$1.1B",
        "event": "Series C Unicorn"
      },
      {
        "year": "2019",
        "valuation": 2600,
        "valuationDisplay": "$2.6B",
        "event": "Series C2"
      },
      {
        "year": "2021",
        "valuation": 7400,
        "valuationDisplay": "$7.4B",
        "event": "Series D"
      },
      {
        "year": "2022",
        "valuation": 12300,
        "valuationDisplay": "$12.3B",
        "event": "Series D2"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series C",
        "amount": "$125M",
        "valuation": "$1.1B",
        "date": "Oct 2018",
        "investors": [
          "Greenoaks Capital",
          "DST Global"
        ]
      },
      {
        "round": "Series D",
        "amount": "$425M",
        "valuation": "$7.4B",
        "date": "Apr 2021",
        "investors": [
          "Tiger Global"
        ]
      },
      {
        "round": "Series D2",
        "amount": "$300M",
        "valuation": "$12.3B",
        "date": "Jan 2022",
        "investors": [
          "Greenoaks Capital",
          "TCV"
        ]
      }
    ]
  },
  {
    "id": "27",
    "name": "Deel",
    "slug": "deel",
    "domain": "deel.com",
    "website": "https://deel.com",
    "description": "Global compliance and payroll platform hiring international contractors and full-time employees",
    "industry": "Enterprise SaaS",
    "stage": "Series D",
    "fundingRaised": "$679M",
    "fundingNum": 679,
    "currentValuation": "$12B",
    "valuationNum": 12000,
    "country": "United States",
    "headquarters": "San Francisco & Remote",
    "foundedYear": 2019,
    "employeeCount": "3500+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2020",
        "valuation": 400,
        "valuationDisplay": "$400M",
        "event": "Series B"
      },
      {
        "year": "2021",
        "valuation": 1250,
        "valuationDisplay": "$1.25B",
        "event": "Series C Unicorn"
      },
      {
        "year": "2021",
        "valuation": 5500,
        "valuationDisplay": "$5.5B",
        "event": "Series D"
      },
      {
        "year": "2022",
        "valuation": 12000,
        "valuationDisplay": "$12B",
        "event": "Growth Round"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$100M",
        "date": "May 2020",
        "investors": [
          "Andreessen Horowitz"
        ]
      },
      {
        "round": "Series C",
        "amount": "$156M",
        "valuation": "$1.25B",
        "date": "Apr 2021",
        "investors": [
          "Y Combinator Continuity"
        ]
      },
      {
        "round": "Series D",
        "amount": "$425M",
        "valuation": "$5.5B",
        "date": "Oct 2021",
        "investors": [
          "Coatue",
          "Alkeon Capital"
        ]
      },
      {
        "round": "Growth",
        "amount": "$50M",
        "valuation": "$12B",
        "date": "May 2022",
        "investors": [
          "Laureen Powell Jobs Emerson Collective"
        ]
      }
    ]
  },
  {
    "id": "28",
    "name": "Personio",
    "slug": "personio",
    "domain": "personio.com",
    "website": "https://personio.com",
    "description": "All-in-one HR software platform for small and medium-sized European enterprises",
    "industry": "Enterprise SaaS",
    "stage": "Series E",
    "fundingRaised": "$723M",
    "fundingNum": 723,
    "currentValuation": "$8.5B",
    "valuationNum": 8500,
    "country": "Germany",
    "headquarters": "Munich, Germany",
    "foundedYear": 2015,
    "employeeCount": "1800+",
    "valuationHistory": [
      {
        "year": "2017",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2019",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Series B"
      },
      {
        "year": "2021",
        "valuation": 1700,
        "valuationDisplay": "$1.7B",
        "event": "Series C Unicorn"
      },
      {
        "year": "2021",
        "valuation": 6300,
        "valuationDisplay": "$6.3B",
        "event": "Series D"
      },
      {
        "year": "2022",
        "valuation": 8500,
        "valuationDisplay": "$8.5B",
        "event": "Series E"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$12M",
        "valuation": "$50M",
        "date": "Aug 2017",
        "investors": [
          "Northzone"
        ]
      },
      {
        "round": "Series D",
        "amount": "$270M",
        "valuation": "$6.3B",
        "date": "Oct 2021",
        "investors": [
          "Greenoaks Capital",
          "Altimeter"
        ]
      },
      {
        "round": "Series E",
        "amount": "$200M",
        "valuation": "$8.5B",
        "date": "Jun 2022",
        "investors": [
          "Greenoaks"
        ]
      }
    ]
  },
  {
    "id": "29",
    "name": "Runway",
    "slug": "runwayml",
    "domain": "runwayml.com",
    "website": "https://runwayml.com",
    "description": "Generative video and creative AI tools powering next-generation filmmakers and studios",
    "industry": "AI/ML",
    "stage": "Series C",
    "fundingRaised": "$237M",
    "fundingNum": 237,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "United States",
    "headquarters": "New York, NY",
    "foundedYear": 2018,
    "employeeCount": "120+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 15,
        "valuationDisplay": "$15M",
        "event": "Seed"
      },
      {
        "year": "2021",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series B"
      },
      {
        "year": "2022",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Series C"
      },
      {
        "year": "2023",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C Extension"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series B",
        "amount": "$35M",
        "valuation": "$200M",
        "date": "Dec 2021",
        "investors": [
          "Coatue"
        ]
      },
      {
        "round": "Series C",
        "amount": "$50M",
        "valuation": "$500M",
        "date": "Dec 2022",
        "investors": [
          "Felicis"
        ]
      },
      {
        "round": "Series C Extension",
        "amount": "$141M",
        "valuation": "$1.5B",
        "date": "Jun 2023",
        "investors": [
          "Google",
          "Nvidia",
          "Salesforce Ventures"
        ]
      }
    ]
  },
  {
    "id": "30",
    "name": "Monzo",
    "slug": "monzo",
    "domain": "monzo.com",
    "website": "https://monzo.com",
    "description": "UK mobile banking pioneer known for iconic coral cards and frictionless digital banking",
    "industry": "Fintech",
    "stage": "Pre-IPO",
    "fundingRaised": "$1.5B",
    "fundingNum": 1500,
    "currentValuation": "$5.2B",
    "valuationNum": 5200,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2015,
    "employeeCount": "3500+",
    "valuationHistory": [
      {
        "year": "2017",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series D"
      },
      {
        "year": "2018",
        "valuation": 1250,
        "valuationDisplay": "$1.25B",
        "event": "Series E Unicorn"
      },
      {
        "year": "2021",
        "valuation": 4500,
        "valuationDisplay": "$4.5B",
        "event": "Growth Round"
      },
      {
        "year": "2024",
        "valuation": 5200,
        "valuationDisplay": "$5.2B",
        "event": "Pre-IPO Capital"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series E",
        "amount": "$113M",
        "valuation": "$1.25B",
        "date": "Oct 2018",
        "investors": [
          "General Catalyst",
          "Accel"
        ]
      },
      {
        "round": "Series H",
        "amount": "$500M",
        "valuation": "$4.5B",
        "date": "Dec 2021",
        "investors": [
          "Abu Dhabi Growth Fund",
          "Coatue"
        ]
      },
      {
        "round": "Growth",
        "amount": "$430M",
        "valuation": "$5.2B",
        "date": "Mar 2024",
        "investors": [
          "CapitalG",
          "Hedosophia"
        ]
      }
    ]
  },
  {
    "id": "31",
    "name": "Cursor",
    "slug": "cursor",
    "domain": "cursor.com",
    "website": "https://cursor.com",
    "description": "AI-first code editor designed to supercharge developer engineering workflows",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$68M",
    "fundingNum": 68,
    "currentValuation": "$2.5B",
    "valuationNum": 2500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2022,
    "employeeCount": "40+",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 20,
        "valuationDisplay": "$20M",
        "event": "Seed"
      },
      {
        "year": "2023",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Seed+"
      },
      {
        "year": "2024",
        "valuation": 400,
        "valuationDisplay": "$400M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 2500,
        "valuationDisplay": "$2.5B",
        "event": "Growth Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Seed",
        "amount": "$8M",
        "valuation": "$100M",
        "date": "Oct 2023",
        "investors": [
          "OpenAI Startup Fund"
        ]
      },
      {
        "round": "Series A",
        "amount": "$60M",
        "valuation": "$400M",
        "date": "Aug 2024",
        "investors": [
          "Andreessen Horowitz",
          "Thrive Capital",
          "Patrick Collison"
        ]
      }
    ]
  },
  {
    "id": "32",
    "name": "Aleph Alpha",
    "slug": "alephalpha",
    "domain": "aleph-alpha.com",
    "website": "https://aleph-alpha.com",
    "description": "European sovereign generative AI and multimodal foundation models for sovereignty and privacy",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$530M",
    "fundingNum": 530,
    "currentValuation": "$1.4B",
    "valuationNum": 1400,
    "country": "Germany",
    "headquarters": "Heidelberg, Germany",
    "foundedYear": 2019,
    "employeeCount": "150+",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$31M",
        "valuation": "$100M",
        "date": "Jul 2021",
        "investors": [
          "Earlybird",
          "Lakestar"
        ]
      },
      {
        "round": "Series B",
        "amount": "$500M",
        "valuation": "$1.4B",
        "date": "Nov 2023",
        "investors": [
          "Schwarz Gruppe",
          "Bosch",
          "SAP"
        ]
      }
    ]
  },
  {
    "id": "33",
    "name": "Alan",
    "slug": "alan",
    "domain": "alan.com",
    "website": "https://alan.com",
    "description": "Digital health insurance and holistic healthcare partner for companies and individuals",
    "industry": "HealthTech",
    "stage": "Series F",
    "fundingRaised": "$700M",
    "fundingNum": 700,
    "currentValuation": "$4.4B",
    "valuationNum": 4400,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2016,
    "employeeCount": "600+",
    "valuationHistory": [
      {
        "year": "2018",
        "valuation": 110,
        "valuationDisplay": "$110M",
        "event": "Series A"
      },
      {
        "year": "2020",
        "valuation": 550,
        "valuationDisplay": "$550M",
        "event": "Series C"
      },
      {
        "year": "2021",
        "valuation": 1670,
        "valuationDisplay": "$1.67B",
        "event": "Series D Unicorn"
      },
      {
        "year": "2022",
        "valuation": 2900,
        "valuationDisplay": "$2.9B",
        "event": "Series E"
      },
      {
        "year": "2024",
        "valuation": 4400,
        "valuationDisplay": "$4.4B",
        "event": "Series F"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series C",
        "amount": "$54M",
        "valuation": "$550M",
        "date": "Apr 2020",
        "investors": [
          "Temasek",
          "Index Ventures"
        ]
      },
      {
        "round": "Series D",
        "amount": "$220M",
        "valuation": "$1.67B",
        "date": "Apr 2021",
        "investors": [
          "Coatue",
          "Dragoneer"
        ]
      },
      {
        "round": "Series F",
        "amount": "$193M",
        "valuation": "$4.4B",
        "date": "Sep 2024",
        "investors": [
          "Belfius",
          "Teachers Venture Growth"
        ]
      }
    ]
  },
  {
    "id": "34",
    "name": "Synthesia",
    "slug": "synthesia",
    "domain": "synthesia.io",
    "website": "https://synthesia.io",
    "description": "AI video generation platform creating hyper-realistic interactive digital avatars",
    "industry": "AI/ML",
    "stage": "Series C",
    "fundingRaised": "$156M",
    "fundingNum": 156,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2017,
    "employeeCount": "300+",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 80,
        "valuationDisplay": "$80M",
        "event": "Series A"
      },
      {
        "year": "2021",
        "valuation": 300,
        "valuationDisplay": "$300M",
        "event": "Series B"
      },
      {
        "year": "2023",
        "valuation": 1000,
        "valuationDisplay": "$1.0B",
        "event": "Series C Unicorn"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$12.5M",
        "valuation": "$80M",
        "date": "Apr 2021",
        "investors": [
          "FirstMark Capital"
        ]
      },
      {
        "round": "Series B",
        "amount": "$50M",
        "valuation": "$300M",
        "date": "Dec 2021",
        "investors": [
          "Kleiner Perkins",
          "GV"
        ]
      },
      {
        "round": "Series C",
        "amount": "$90M",
        "valuation": "$1B",
        "date": "Jun 2023",
        "investors": [
          "Accel",
          "NVentures"
        ]
      }
    ]
  },
  {
    "id": "35",
    "name": "Retool",
    "slug": "retool",
    "domain": "retool.com",
    "website": "https://retool.com",
    "description": "Low-code platform for building complex internal software tools in hours",
    "industry": "Developer Tools",
    "stage": "Series C",
    "fundingRaised": "$140M",
    "fundingNum": 140,
    "currentValuation": "$3.2B",
    "valuationNum": 3200,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2017,
    "employeeCount": "350+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2020",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Series B Unicorn"
      },
      {
        "year": "2021",
        "valuation": 3200,
        "valuationDisplay": "$3.2B",
        "event": "Series C"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$20M",
        "valuation": "$100M",
        "date": "Feb 2019",
        "investors": [
          "Sequoia Capital"
        ]
      },
      {
        "round": "Series B",
        "amount": "$50M",
        "valuation": "$1B",
        "date": "Oct 2020",
        "investors": [
          "Sequoia Capital"
        ]
      },
      {
        "round": "Series C",
        "amount": "$20M",
        "valuation": "$3.2B",
        "date": "Dec 2021",
        "investors": [
          "Sequoia Capital"
        ]
      }
    ]
  },
  {
    "id": "36",
    "name": "Helsing",
    "slug": "helsing",
    "domain": "helsing.ai",
    "website": "https://helsing.ai",
    "description": "AI defence technology company processing live sensor data on frontline defense vehicles",
    "industry": "Robotics",
    "stage": "Series C",
    "fundingRaised": "$770M",
    "fundingNum": 770,
    "currentValuation": "$5.4B",
    "valuationNum": 5400,
    "country": "Germany",
    "headquarters": "Munich, Germany",
    "foundedYear": 2021,
    "employeeCount": "300+",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 400,
        "valuationDisplay": "$400M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1800,
        "valuationDisplay": "$1.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5400,
        "valuationDisplay": "$5.4B",
        "event": "Series C"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$113M",
        "valuation": "$400M",
        "date": "Nov 2021",
        "investors": [
          "Prima Materia (Daniel Ek)"
        ]
      },
      {
        "round": "Series B",
        "amount": "$223M",
        "valuation": "$1.8B",
        "date": "Sep 2023",
        "investors": [
          "General Catalyst",
          "Saab"
        ]
      },
      {
        "round": "Series C",
        "amount": "$487M",
        "valuation": "$5.4B",
        "date": "Jul 2024",
        "investors": [
          "General Catalyst",
          "Lightspeed",
          "Accel"
        ]
      }
    ]
  },
  {
    "id": "37",
    "name": "Zepto",
    "slug": "zepto",
    "domain": "zepto.co.in",
    "website": "https://www.zeptonow.com",
    "description": "Quick-commerce grocery platform delivering essentials in 10 minutes across India",
    "industry": "E-commerce",
    "stage": "Series G",
    "fundingRaised": "$1.6B",
    "fundingNum": 1600,
    "currentValuation": "$5B",
    "valuationNum": 5000,
    "country": "India",
    "headquarters": "Mumbai, India",
    "foundedYear": 2021,
    "employeeCount": "4000+",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 225,
        "valuationDisplay": "$225M",
        "event": "Series A"
      },
      {
        "year": "2021",
        "valuation": 570,
        "valuationDisplay": "$570M",
        "event": "Series B"
      },
      {
        "year": "2022",
        "valuation": 900,
        "valuationDisplay": "$900M",
        "event": "Series C"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series E Unicorn"
      },
      {
        "year": "2024",
        "valuation": 3600,
        "valuationDisplay": "$3.6B",
        "event": "Series F"
      },
      {
        "year": "2024",
        "valuation": 5000,
        "valuationDisplay": "$5.0B",
        "event": "Series G"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$60M",
        "valuation": "$225M",
        "date": "Nov 2021",
        "investors": [
          "Glade Brook Capital",
          "Nexus Venture Partners"
        ]
      },
      {
        "round": "Series E",
        "amount": "$200M",
        "valuation": "$1.4B",
        "date": "Aug 2023",
        "investors": [
          "StepStone Group",
          "Goodwater Capital"
        ]
      },
      {
        "round": "Series F",
        "amount": "$665M",
        "valuation": "$3.6B",
        "date": "Jun 2024",
        "investors": [
          "Avenir",
          "Lightspeed Venture Partners"
        ]
      },
      {
        "round": "Series G",
        "amount": "$340M",
        "valuation": "$5.0B",
        "date": "Aug 2024",
        "investors": [
          "General Catalyst",
          "Mars Growth Capital"
        ]
      }
    ]
  },
  {
    "id": "38",
    "name": "Climeworks",
    "slug": "climeworks",
    "domain": "climeworks.com",
    "website": "https://climeworks.com",
    "description": "Direct air capture technology permanently removing CO2 from the ambient air",
    "industry": "CleanTech",
    "stage": "Series F",
    "fundingRaised": "$810M",
    "fundingNum": 810,
    "currentValuation": "$2.5B",
    "valuationNum": 2500,
    "country": "Switzerland",
    "headquarters": "Zurich, Switzerland",
    "foundedYear": 2009,
    "employeeCount": "450+",
    "valuationHistory": [
      {
        "year": "2018",
        "valuation": 120,
        "valuationDisplay": "$120M",
        "event": "Series C"
      },
      {
        "year": "2020",
        "valuation": 450,
        "valuationDisplay": "$450M",
        "event": "Series E"
      },
      {
        "year": "2022",
        "valuation": 2500,
        "valuationDisplay": "$2.5B",
        "event": "Series F Unicorn"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series E",
        "amount": "$110M",
        "valuation": "$450M",
        "date": "Aug 2020",
        "investors": [
          "Private Investors"
        ]
      },
      {
        "round": "Series F",
        "amount": "$650M",
        "valuation": "$2.5B",
        "date": "Apr 2022",
        "investors": [
          "Partners Group",
          "GIC",
          "Baillie Gifford"
        ]
      }
    ]
  },
  {
    "id": "39",
    "name": "ElevenLabs",
    "slug": "elevenlabs",
    "domain": "elevenlabs.io",
    "website": "https://elevenlabs.io",
    "description": "AI voice generator and natural speech synthesis software in 30+ languages",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$101M",
    "fundingNum": 101,
    "currentValuation": "$1.1B",
    "valuationNum": 1100,
    "country": "United States",
    "headquarters": "New York & London",
    "foundedYear": 2022,
    "employeeCount": "80+",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 1100,
        "valuationDisplay": "$1.1B",
        "event": "Series B Unicorn"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$19M",
        "valuation": "$100M",
        "date": "Jun 2023",
        "investors": [
          "Andreessen Horowitz",
          "Nat Friedman",
          "Daniel Gross"
        ]
      },
      {
        "round": "Series B",
        "amount": "$80M",
        "valuation": "$1.1B",
        "date": "Jan 2024",
        "investors": [
          "Andreessen Horowitz",
          "Sequoia Capital",
          "Smash Capital"
        ]
      }
    ]
  },
  {
    "id": "40",
    "name": "Wayve",
    "slug": "wayve",
    "domain": "wayve.ai",
    "website": "https://wayve.ai",
    "description": "Embodied AI foundation models powering autonomous driving software for vehicles",
    "industry": "Robotics",
    "stage": "Series C",
    "fundingRaised": "$1.3B",
    "fundingNum": 1300,
    "currentValuation": "$3.5B",
    "valuationNum": 3500,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2017,
    "employeeCount": "350+",
    "valuationHistory": [
      {
        "year": "2019",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2022",
        "valuation": 550,
        "valuationDisplay": "$550M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Series C SoftBank"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$20M",
        "valuation": "$100M",
        "date": "Nov 2019",
        "investors": [
          "Eclipse Ventures",
          "Balderton Capital"
        ]
      },
      {
        "round": "Series B",
        "amount": "$200M",
        "valuation": "$550M",
        "date": "Jan 2022",
        "investors": [
          "Eclipse Ventures",
          "D1 Capital",
          "Virgin"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.05B",
        "valuation": "$3.5B",
        "date": "May 2024",
        "investors": [
          "SoftBank Group",
          "Nvidia",
          "Microsoft"
        ]
      }
    ]
  },
  {
    "id": "41",
    "name": "Pinecone",
    "slug": "pinecone",
    "domain": "pinecone.io",
    "website": "https://pinecone.io",
    "description": "Vector database powering semantic search and retrieval-augmented generation for AI",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$138M",
    "fundingNum": 138,
    "currentValuation": "$1.4B",
    "valuationNum": 1400,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2019,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 70,
        "valuationDisplay": "$70M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 490,
        "valuationDisplay": "$490M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$13M",
        "valuation": "$70M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$88M",
        "valuation": "$490M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "42",
    "name": "Groq",
    "slug": "groq",
    "domain": "groq.com",
    "website": "https://groq.com",
    "description": "LPU Inference Engine architecture delivering ultrafast real-time LLM inference speeds",
    "industry": "AI/ML",
    "stage": "Series D",
    "fundingRaised": "$640M",
    "fundingNum": 640,
    "currentValuation": "$2.8B",
    "valuationNum": 2800,
    "country": "United States",
    "headquarters": "Mountain View, CA",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 140,
        "valuationDisplay": "$140M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 980,
        "valuationDisplay": "$980M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2100,
        "valuationDisplay": "$2.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2800,
        "valuationDisplay": "$2.8B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$25M",
        "valuation": "$140M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$176M",
        "valuation": "$980M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$378M",
        "valuation": "$2.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$504M",
        "valuation": "$2.8B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "43",
    "name": "CoreWeave",
    "slug": "coreweave",
    "domain": "coreweave.com",
    "website": "https://coreweave.com",
    "description": "Specialized cloud infrastructure provider delivering high-performance GPU clusters for modern AI",
    "industry": "Infrastructure",
    "stage": "Series C",
    "fundingRaised": "$12B",
    "fundingNum": 12000,
    "currentValuation": "$23B",
    "valuationNum": 23000,
    "country": "United States",
    "headquarters": "Roseland, NJ",
    "foundedYear": 2017,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 1150,
        "valuationDisplay": "$1.1B",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 8050,
        "valuationDisplay": "$8.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 17250,
        "valuationDisplay": "$17.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 23000,
        "valuationDisplay": "$23B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$207M",
        "valuation": "$1.1B",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$1.4B",
        "valuation": "$8.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$3.1B",
        "valuation": "$17.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$4.1B",
        "valuation": "$23B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "44",
    "name": "Lambda Labs",
    "slug": "lambda-labs",
    "domain": "lambdalabs.com",
    "website": "https://lambdalabs.com",
    "description": "Deep learning workstations, GPU servers, and AI cloud computing compute clusters",
    "industry": "Infrastructure",
    "stage": "Series C",
    "fundingRaised": "$820M",
    "fundingNum": 820,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "United States",
    "headquarters": "San Jose, CA",
    "foundedYear": 2012,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "45",
    "name": "LangChain",
    "slug": "langchain",
    "domain": "langchain.com",
    "website": "https://langchain.com",
    "description": "Framework and observability tooling for developers building LLM-driven agents and applications",
    "industry": "Developer Tools",
    "stage": "Series A",
    "fundingRaised": "$30M",
    "fundingNum": 30,
    "currentValuation": "$200M",
    "valuationNum": 200,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2022,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 10,
        "valuationDisplay": "$10M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 70,
        "valuationDisplay": "$70M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$10M",
        "date": "Mid 2022",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$13M",
        "valuation": "$70M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "46",
    "name": "Glean",
    "slug": "glean",
    "domain": "glean.com",
    "website": "https://glean.com",
    "description": "Enterprise AI search and knowledge discovery assistant connecting all company repositories",
    "industry": "AI/ML",
    "stage": "Series E",
    "fundingRaised": "$610M",
    "fundingNum": 610,
    "currentValuation": "$4.6B",
    "valuationNum": 4600,
    "country": "United States",
    "headquarters": "Palo Alto, CA",
    "foundedYear": 2019,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 230,
        "valuationDisplay": "$230M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1610,
        "valuationDisplay": "$1.6B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3450,
        "valuationDisplay": "$3.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4600,
        "valuationDisplay": "$4.6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$41M",
        "valuation": "$230M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$290M",
        "valuation": "$1.6B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$621M",
        "valuation": "$3.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$828M",
        "valuation": "$4.6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "47",
    "name": "Harvey AI",
    "slug": "harvey-ai",
    "domain": "harvey.ai",
    "website": "https://harvey.ai",
    "description": "AI platform built specifically for elite legal teams, contracts, and regulatory research",
    "industry": "AI/ML",
    "stage": "Series C",
    "fundingRaised": "$206M",
    "fundingNum": 206,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2022,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2022",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "48",
    "name": "Midjourney",
    "slug": "midjourney",
    "domain": "midjourney.com",
    "website": "https://midjourney.com",
    "description": "Independent research lab creating hyper-realistic generative text-to-image synthesis tools",
    "industry": "AI/ML",
    "stage": "Bootstrapped",
    "fundingRaised": "$0",
    "fundingNum": 0,
    "currentValuation": "$10B",
    "valuationNum": 10000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2021,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 7500,
        "valuationDisplay": "$7.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 10000,
        "valuationDisplay": "$10B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2021",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$630M",
        "valuation": "$3.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.4B",
        "valuation": "$7.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.8B",
        "valuation": "$10B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "49",
    "name": "Together AI",
    "slug": "together-ai",
    "domain": "together.ai",
    "website": "https://together.ai",
    "description": "Cloud platform for training, fine-tuning, and running open-source foundation AI models",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$530M",
    "fundingNum": 530,
    "currentValuation": "$3.3B",
    "valuationNum": 3300,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2022,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 165,
        "valuationDisplay": "$165M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 1155,
        "valuationDisplay": "$1.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2475,
        "valuationDisplay": "$2.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3300,
        "valuationDisplay": "$3.3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$30M",
        "valuation": "$165M",
        "date": "Mid 2022",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$208M",
        "valuation": "$1.2B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$446M",
        "valuation": "$2.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$594M",
        "valuation": "$3.3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "50",
    "name": "Poolside AI",
    "slug": "poolside-ai",
    "domain": "poolside.ai",
    "website": "https://poolside.ai",
    "description": "AI developer assistant trained specifically on global software repositories to master coding",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$626M",
    "fundingNum": 626,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2023,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "51",
    "name": "Writer",
    "slug": "writer",
    "domain": "writer.com",
    "website": "https://writer.com",
    "description": "Enterprise generative AI platform fine-tuned on corporate brand guidelines and internal data",
    "industry": "AI/ML",
    "stage": "Series C",
    "fundingRaised": "$326M",
    "fundingNum": 326,
    "currentValuation": "$1.9B",
    "valuationNum": 1900,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2020,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 95,
        "valuationDisplay": "$95M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 665,
        "valuationDisplay": "$665M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1425,
        "valuationDisplay": "$1.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1900,
        "valuationDisplay": "$1.9B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$17M",
        "valuation": "$95M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$120M",
        "valuation": "$665M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$257M",
        "valuation": "$1.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$342M",
        "valuation": "$1.9B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "52",
    "name": "Plaid",
    "slug": "plaid",
    "domain": "plaid.com",
    "website": "https://plaid.com",
    "description": "Data network enabling consumers to connect financial accounts to digital fintech applications",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$734M",
    "fundingNum": 734,
    "currentValuation": "$13.4B",
    "valuationNum": 13400,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2013,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 670,
        "valuationDisplay": "$670M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4690,
        "valuationDisplay": "$4.7B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 10050,
        "valuationDisplay": "$10.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 13400,
        "valuationDisplay": "$13.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$121M",
        "valuation": "$670M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$844M",
        "valuation": "$4.7B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.8B",
        "valuation": "$10.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.4B",
        "valuation": "$13.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "53",
    "name": "Nubank",
    "slug": "nubank",
    "domain": "nubank.com.br",
    "website": "https://nubank.com.br",
    "description": "Largest neobank in Latin America serving over 100 million digital banking customers",
    "industry": "Fintech",
    "stage": "Public / Decacorn",
    "fundingRaised": "$4.2B",
    "fundingNum": 4200,
    "currentValuation": "$65B",
    "valuationNum": 65000,
    "country": "Brazil",
    "headquarters": "São Paulo, Brazil",
    "foundedYear": 2013,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 3250,
        "valuationDisplay": "$3.3B",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 22750,
        "valuationDisplay": "$22.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 48750,
        "valuationDisplay": "$48.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 65000,
        "valuationDisplay": "$65B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$585M",
        "valuation": "$3.3B",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$4.1B",
        "valuation": "$22.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$8.8B",
        "valuation": "$48.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$11.7B",
        "valuation": "$65B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "54",
    "name": "Checkout.com",
    "slug": "checkout-com",
    "domain": "checkout.com",
    "website": "https://checkout.com",
    "description": "Cloud payment processing for global enterprise e-commerce merchants and platforms",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$1.8B",
    "fundingNum": 1800,
    "currentValuation": "$11B",
    "valuationNum": 11000,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 550,
        "valuationDisplay": "$550M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 3850,
        "valuationDisplay": "$3.9B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 8250,
        "valuationDisplay": "$8.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 11000,
        "valuationDisplay": "$11B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$99M",
        "valuation": "$550M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$693M",
        "valuation": "$3.9B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.5B",
        "valuation": "$8.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.0B",
        "valuation": "$11B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "55",
    "name": "Chime",
    "slug": "chime",
    "domain": "chime.com",
    "website": "https://chime.com",
    "description": "Fee-free mobile banking app delivering early direct deposit and automated savings tools",
    "industry": "Fintech",
    "stage": "Series G",
    "fundingRaised": "$2.3B",
    "fundingNum": 2300,
    "currentValuation": "$25B",
    "valuationNum": 25000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2013,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 1250,
        "valuationDisplay": "$1.3B",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 8750,
        "valuationDisplay": "$8.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 18750,
        "valuationDisplay": "$18.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 25000,
        "valuationDisplay": "$25B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$225M",
        "valuation": "$1.3B",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$1.6B",
        "valuation": "$8.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$3.4B",
        "valuation": "$18.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$4.5B",
        "valuation": "$25B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "56",
    "name": "Rippling",
    "slug": "rippling",
    "domain": "rippling.com",
    "website": "https://rippling.com",
    "description": "Unified workforce management platform combining HR, IT device management, and global payroll",
    "industry": "Enterprise SaaS",
    "stage": "Series F",
    "fundingRaised": "$1.4B",
    "fundingNum": 1400,
    "currentValuation": "$13.5B",
    "valuationNum": 13500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2016,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 675,
        "valuationDisplay": "$675M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4725,
        "valuationDisplay": "$4.7B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 10125,
        "valuationDisplay": "$10.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 13500,
        "valuationDisplay": "$13.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$122M",
        "valuation": "$675M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$851M",
        "valuation": "$4.7B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.8B",
        "valuation": "$10.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.4B",
        "valuation": "$13.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "57",
    "name": "Mercury",
    "slug": "mercury",
    "domain": "mercury.com",
    "website": "https://mercury.com",
    "description": "Modern banking and treasury management engineered specifically for startups and founders",
    "industry": "Fintech",
    "stage": "Series B",
    "fundingRaised": "$152M",
    "fundingNum": 152,
    "currentValuation": "$1.6B",
    "valuationNum": 1600,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2017,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 80,
        "valuationDisplay": "$80M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 560,
        "valuationDisplay": "$560M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1200,
        "valuationDisplay": "$1.2B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1600,
        "valuationDisplay": "$1.6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$80M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$101M",
        "valuation": "$560M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$216M",
        "valuation": "$1.2B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$288M",
        "valuation": "$1.6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "58",
    "name": "Carta",
    "slug": "carta",
    "domain": "carta.com",
    "website": "https://carta.com",
    "description": "Equity management, cap table administration, and private valuation network for venture capital",
    "industry": "Fintech",
    "stage": "Series G",
    "fundingRaised": "$1.1B",
    "fundingNum": 1100,
    "currentValuation": "$7.4B",
    "valuationNum": 7400,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 370,
        "valuationDisplay": "$370M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2590,
        "valuationDisplay": "$2.6B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5550,
        "valuationDisplay": "$5.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7400,
        "valuationDisplay": "$7.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$67M",
        "valuation": "$370M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$466M",
        "valuation": "$2.6B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$999M",
        "valuation": "$5.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.3B",
        "valuation": "$7.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "59",
    "name": "Gusto",
    "slug": "gusto",
    "domain": "gusto.com",
    "website": "https://gusto.com",
    "description": "Modern cloud payroll, health benefits, and HR platform supporting over 300,000 businesses",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$746M",
    "fundingNum": 746,
    "currentValuation": "$9.5B",
    "valuationNum": 9500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2011,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 475,
        "valuationDisplay": "$475M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 3325,
        "valuationDisplay": "$3.3B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 7125,
        "valuationDisplay": "$7.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 9500,
        "valuationDisplay": "$9.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$86M",
        "valuation": "$475M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$599M",
        "valuation": "$3.3B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.3B",
        "valuation": "$7.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.7B",
        "valuation": "$9.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "60",
    "name": "Melio",
    "slug": "melio",
    "domain": "meliopayments.com",
    "website": "https://meliopayments.com",
    "description": "B2B payment platform enabling small businesses to pay vendors securely via bank transfer or credit",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$506M",
    "fundingNum": 506,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "Israel",
    "headquarters": "Tel Aviv & New York",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "61",
    "name": "Qonto",
    "slug": "qonto",
    "domain": "qonto.com",
    "website": "https://qonto.com",
    "description": "All-in-one business finance solution for SMEs and freelancers across Western Europe",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$704M",
    "fundingNum": 704,
    "currentValuation": "$5B",
    "valuationNum": 5000,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 250,
        "valuationDisplay": "$250M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1750,
        "valuationDisplay": "$1.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3750,
        "valuationDisplay": "$3.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5000,
        "valuationDisplay": "$5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$45M",
        "valuation": "$250M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$315M",
        "valuation": "$1.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$675M",
        "valuation": "$3.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$900M",
        "valuation": "$5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "62",
    "name": "N26",
    "slug": "n26",
    "domain": "n26.com",
    "website": "https://n26.com",
    "description": "Digital bank offering seamless 100% mobile accounts and debit cards across the Eurozone",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$1.8B",
    "fundingNum": 1800,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "Germany",
    "headquarters": "Berlin, Germany",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "63",
    "name": "Trade Republic",
    "slug": "trade-republic",
    "domain": "traderepublic.com",
    "website": "https://traderepublic.com",
    "description": "Commission-free European mobile neo-broker offering stock, ETF, and bond savings plans",
    "industry": "Fintech",
    "stage": "Series C",
    "fundingRaised": "$1.3B",
    "fundingNum": 1300,
    "currentValuation": "$5.4B",
    "valuationNum": 5400,
    "country": "Germany",
    "headquarters": "Berlin, Germany",
    "foundedYear": 2015,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 270,
        "valuationDisplay": "$270M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1890,
        "valuationDisplay": "$1.9B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4050,
        "valuationDisplay": "$4.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5400,
        "valuationDisplay": "$5.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$49M",
        "valuation": "$270M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$340M",
        "valuation": "$1.9B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$729M",
        "valuation": "$4.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$972M",
        "valuation": "$5.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "64",
    "name": "Groww",
    "slug": "groww",
    "domain": "groww.in",
    "website": "https://groww.in",
    "description": "India’s leading investment platform offering mutual funds, direct equities, and gold investing",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$393M",
    "fundingNum": 393,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "India",
    "headquarters": "Bengaluru, India",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "65",
    "name": "CRED",
    "slug": "cred",
    "domain": "cred.club",
    "website": "https://cred.club",
    "description": "Exclusive community rewards platform for creditworthy individuals paying credit card bills",
    "industry": "Fintech",
    "stage": "Series F",
    "fundingRaised": "$1B",
    "fundingNum": 1000,
    "currentValuation": "$6.4B",
    "valuationNum": 6400,
    "country": "India",
    "headquarters": "Bengaluru, India",
    "foundedYear": 2018,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 320,
        "valuationDisplay": "$320M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2240,
        "valuationDisplay": "$2.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4800,
        "valuationDisplay": "$4.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 6400,
        "valuationDisplay": "$6.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$58M",
        "valuation": "$320M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$403M",
        "valuation": "$2.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$864M",
        "valuation": "$4.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.2B",
        "valuation": "$6.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "66",
    "name": "Airwallex",
    "slug": "airwallex",
    "domain": "airwallex.com",
    "website": "https://airwallex.com",
    "description": "Global payments and financial infrastructure platform for international cross-border trade",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$900M",
    "fundingNum": 900,
    "currentValuation": "$5.6B",
    "valuationNum": 5600,
    "country": "Australia",
    "headquarters": "Melbourne & Singapore",
    "foundedYear": 2015,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 280,
        "valuationDisplay": "$280M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1960,
        "valuationDisplay": "$2.0B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4200,
        "valuationDisplay": "$4.2B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5600,
        "valuationDisplay": "$5.6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$50M",
        "valuation": "$280M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$353M",
        "valuation": "$2.0B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$756M",
        "valuation": "$4.2B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.0B",
        "valuation": "$5.6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "67",
    "name": "Wealthsimple",
    "slug": "wealthsimple",
    "domain": "wealthsimple.com",
    "website": "https://wealthsimple.com",
    "description": "Automated investing, commission-free stock trading, crypto, and tax filing platform in Canada",
    "industry": "Fintech",
    "stage": "Series G",
    "fundingRaised": "$904M",
    "fundingNum": 904,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "Canada",
    "headquarters": "Toronto, Canada",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "68",
    "name": "Docker",
    "slug": "docker",
    "domain": "docker.com",
    "website": "https://docker.com",
    "description": "Open containerization platform empowering developers to build, share, and run software anywhere",
    "industry": "Infrastructure",
    "stage": "Series C",
    "fundingRaised": "$434M",
    "fundingNum": 434,
    "currentValuation": "$2.1B",
    "valuationNum": 2100,
    "country": "United States",
    "headquarters": "Palo Alto, CA",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 105,
        "valuationDisplay": "$105M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 735,
        "valuationDisplay": "$735M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1575,
        "valuationDisplay": "$1.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2100,
        "valuationDisplay": "$2.1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$19M",
        "valuation": "$105M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$132M",
        "valuation": "$735M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$284M",
        "valuation": "$1.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$378M",
        "valuation": "$2.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "69",
    "name": "Neon",
    "slug": "neon",
    "domain": "neon.tech",
    "website": "https://neon.tech",
    "description": "Serverless PostgreSQL architecture with storage and compute separation and branching",
    "industry": "Infrastructure",
    "stage": "Series B",
    "fundingRaised": "$130M",
    "fundingNum": 130,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2021,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2021",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "70",
    "name": "ClickHouse",
    "slug": "clickhouse",
    "domain": "clickhouse.com",
    "website": "https://clickhouse.com",
    "description": "Ultra-fast open source columnar database management system for real-time analytical reporting",
    "industry": "Infrastructure",
    "stage": "Series B",
    "fundingRaised": "$300M",
    "fundingNum": 300,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "United States",
    "headquarters": "San Francisco & Amsterdam",
    "foundedYear": 2021,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2021",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "71",
    "name": "Render",
    "slug": "render",
    "domain": "render.com",
    "website": "https://render.com",
    "description": "Unified cloud platform hosting web apps, background workers, cron jobs, and managed databases",
    "industry": "Infrastructure",
    "stage": "Series B",
    "fundingRaised": "$78M",
    "fundingNum": 78,
    "currentValuation": "$450M",
    "valuationNum": 450,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2018,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 23,
        "valuationDisplay": "$23M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 158,
        "valuationDisplay": "$158M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 338,
        "valuationDisplay": "$338M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 450,
        "valuationDisplay": "$450M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$23M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$28M",
        "valuation": "$158M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$61M",
        "valuation": "$338M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$81M",
        "valuation": "$450M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "72",
    "name": "Fly.io",
    "slug": "fly-io",
    "domain": "fly.io",
    "website": "https://fly.io",
    "description": "Public application delivery network running full-stack microVM containers close to users worldwide",
    "industry": "Infrastructure",
    "stage": "Series C",
    "fundingRaised": "$110M",
    "fundingNum": 110,
    "currentValuation": "$600M",
    "valuationNum": 600,
    "country": "United States",
    "headquarters": "Chicago, IL",
    "foundedYear": 2017,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 30,
        "valuationDisplay": "$30M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 210,
        "valuationDisplay": "$210M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 450,
        "valuationDisplay": "$450M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 600,
        "valuationDisplay": "$600M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$30M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$38M",
        "valuation": "$210M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$81M",
        "valuation": "$450M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$108M",
        "valuation": "$600M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "73",
    "name": "Modal",
    "slug": "modal",
    "domain": "modal.com",
    "website": "https://modal.com",
    "description": "Serverless cloud compute for AI and Python workloads running containerized functions in seconds",
    "industry": "Infrastructure",
    "stage": "Series A",
    "fundingRaised": "$41M",
    "fundingNum": 41,
    "currentValuation": "$300M",
    "valuationNum": 300,
    "country": "United States",
    "headquarters": "New York, NY",
    "foundedYear": 2021,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 15,
        "valuationDisplay": "$15M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 105,
        "valuationDisplay": "$105M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 225,
        "valuationDisplay": "$225M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 300,
        "valuationDisplay": "$300M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$15M",
        "date": "Mid 2021",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$19M",
        "valuation": "$105M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$41M",
        "valuation": "$225M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$54M",
        "valuation": "$300M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "74",
    "name": "Resend",
    "slug": "resend",
    "domain": "resend.com",
    "website": "https://resend.com",
    "description": "Next-generation email API built for modern developers using React email templates",
    "industry": "Developer Tools",
    "stage": "Series A",
    "fundingRaised": "$15M",
    "fundingNum": 15,
    "currentValuation": "$120M",
    "valuationNum": 120,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2023,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 10,
        "valuationDisplay": "$10M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 42,
        "valuationDisplay": "$42M",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 120,
        "valuationDisplay": "$120M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$10M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$8M",
        "valuation": "$42M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$22M",
        "valuation": "$120M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "75",
    "name": "Prisma",
    "slug": "prisma",
    "domain": "prisma.io",
    "website": "https://prisma.io",
    "description": "Next-generation ORM and database tooling for Node.js, TypeScript, and cloud serverless apps",
    "industry": "Developer Tools",
    "stage": "Series B",
    "fundingRaised": "$59M",
    "fundingNum": 59,
    "currentValuation": "$400M",
    "valuationNum": 400,
    "country": "Germany",
    "headquarters": "Berlin, Germany",
    "foundedYear": 2016,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 20,
        "valuationDisplay": "$20M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 140,
        "valuationDisplay": "$140M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 300,
        "valuationDisplay": "$300M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 400,
        "valuationDisplay": "$400M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$20M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$25M",
        "valuation": "$140M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$54M",
        "valuation": "$300M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$72M",
        "valuation": "$400M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "76",
    "name": "Temporal",
    "slug": "temporal",
    "domain": "temporal.io",
    "website": "https://temporal.io",
    "description": "Open-source microservices orchestration platform guaranteeing reliable workflow execution",
    "industry": "Developer Tools",
    "stage": "Series B",
    "fundingRaised": "$120M",
    "fundingNum": 120,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "United States",
    "headquarters": "Seattle, WA",
    "foundedYear": 2019,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "77",
    "name": "Hasura",
    "slug": "hasura",
    "domain": "hasura.io",
    "website": "https://hasura.io",
    "description": "Instant GraphQL and REST API engine connecting databases, microservices, and internal APIs",
    "industry": "Developer Tools",
    "stage": "Series C",
    "fundingRaised": "$136M",
    "fundingNum": 136,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "India",
    "headquarters": "Bengaluru & San Francisco",
    "foundedYear": 2017,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "78",
    "name": "BrowserStack",
    "slug": "browserstack",
    "domain": "browserstack.com",
    "website": "https://browserstack.com",
    "description": "Cloud web and mobile testing platform giving instant access to 3000+ real browsers and devices",
    "industry": "Developer Tools",
    "stage": "Series B",
    "fundingRaised": "$250M",
    "fundingNum": 250,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "India",
    "headquarters": "Mumbai & San Francisco",
    "foundedYear": 2011,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "79",
    "name": "Figma",
    "slug": "figma",
    "domain": "figma.com",
    "website": "https://figma.com",
    "description": "Browser-native collaborative interface design tool empowering global product design teams",
    "industry": "Design & Productivity",
    "stage": "Private",
    "fundingRaised": "$333M",
    "fundingNum": 333,
    "currentValuation": "$12.5B",
    "valuationNum": 12500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 625,
        "valuationDisplay": "$625M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4375,
        "valuationDisplay": "$4.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 9375,
        "valuationDisplay": "$9.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 12500,
        "valuationDisplay": "$12.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$113M",
        "valuation": "$625M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$788M",
        "valuation": "$4.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.7B",
        "valuation": "$9.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.3B",
        "valuation": "$12.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "80",
    "name": "Miro",
    "slug": "miro",
    "domain": "miro.com",
    "website": "https://miro.com",
    "description": "Visual collaboration workspace allowing distributed teams to brainstorm, map, and plan",
    "industry": "Design & Productivity",
    "stage": "Series C",
    "fundingRaised": "$476M",
    "fundingNum": 476,
    "currentValuation": "$17.5B",
    "valuationNum": 17500,
    "country": "United States",
    "headquarters": "San Francisco & Amsterdam",
    "foundedYear": 2011,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 875,
        "valuationDisplay": "$875M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 6125,
        "valuationDisplay": "$6.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 13125,
        "valuationDisplay": "$13.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 17500,
        "valuationDisplay": "$17.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$158M",
        "valuation": "$875M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$1.1B",
        "valuation": "$6.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$2.4B",
        "valuation": "$13.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$3.1B",
        "valuation": "$17.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "81",
    "name": "Airtable",
    "slug": "airtable",
    "domain": "airtable.com",
    "website": "https://airtable.com",
    "description": "Low-code relational database spreadsheet software enabling custom operational workflows",
    "industry": "Enterprise SaaS",
    "stage": "Series F",
    "fundingRaised": "$1.4B",
    "fundingNum": 1400,
    "currentValuation": "$11.7B",
    "valuationNum": 11700,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 585,
        "valuationDisplay": "$585M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4095,
        "valuationDisplay": "$4.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 8775,
        "valuationDisplay": "$8.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 11700,
        "valuationDisplay": "$11.7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$105M",
        "valuation": "$585M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$737M",
        "valuation": "$4.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.6B",
        "valuation": "$8.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.1B",
        "valuation": "$11.7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "82",
    "name": "Webflow",
    "slug": "webflow",
    "domain": "webflow.com",
    "website": "https://webflow.com",
    "description": "Visual web development platform translating UI canvas designs into clean semantic code",
    "industry": "Design & Productivity",
    "stage": "Series C",
    "fundingRaised": "$335M",
    "fundingNum": 335,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "83",
    "name": "Framer",
    "slug": "framer",
    "domain": "framer.com",
    "website": "https://framer.com",
    "description": "Interactive design and publication tool building high-fidelity animated responsive websites",
    "industry": "Design & Productivity",
    "stage": "Series C",
    "fundingRaised": "$33M",
    "fundingNum": 33,
    "currentValuation": "$500M",
    "valuationNum": 500,
    "country": "Netherlands",
    "headquarters": "Amsterdam, Netherlands",
    "foundedYear": 2014,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 375,
        "valuationDisplay": "$375M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$25M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$68M",
        "valuation": "$375M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "84",
    "name": "Zapier",
    "slug": "zapier",
    "domain": "zapier.com",
    "website": "https://zapier.com",
    "description": "No-code integration platform connecting over 6,000 web applications with automated workflows",
    "industry": "Enterprise SaaS",
    "stage": "Bootstrapped",
    "fundingRaised": "$1.4M",
    "fundingNum": 1.4,
    "currentValuation": "$5B",
    "valuationNum": 5000,
    "country": "United States",
    "headquarters": "San Francisco & Remote",
    "foundedYear": 2011,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 250,
        "valuationDisplay": "$250M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1750,
        "valuationDisplay": "$1.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3750,
        "valuationDisplay": "$3.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5000,
        "valuationDisplay": "$5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$45M",
        "valuation": "$250M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$315M",
        "valuation": "$1.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$675M",
        "valuation": "$3.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$900M",
        "valuation": "$5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "85",
    "name": "Grammarly",
    "slug": "grammarly",
    "domain": "grammarly.com",
    "website": "https://grammarly.com",
    "description": "AI writing assistance platform providing context-aware tone, grammar, and style feedback",
    "industry": "AI/ML",
    "stage": "Growth",
    "fundingRaised": "$400M",
    "fundingNum": 400,
    "currentValuation": "$13B",
    "valuationNum": 13000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2009,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 650,
        "valuationDisplay": "$650M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4550,
        "valuationDisplay": "$4.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 9750,
        "valuationDisplay": "$9.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 13000,
        "valuationDisplay": "$13B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$117M",
        "valuation": "$650M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$819M",
        "valuation": "$4.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.8B",
        "valuation": "$9.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.3B",
        "valuation": "$13B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "86",
    "name": "ClickUp",
    "slug": "clickup",
    "domain": "clickup.com",
    "website": "https://clickup.com",
    "description": "Productivity platform replacing multiple siloed tools with tasks, docs, chat, and goals",
    "industry": "Design & Productivity",
    "stage": "Series C",
    "fundingRaised": "$537M",
    "fundingNum": 537,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "United States",
    "headquarters": "San Diego, CA",
    "foundedYear": 2017,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "87",
    "name": "Raycast",
    "slug": "raycast",
    "domain": "raycast.com",
    "website": "https://raycast.com",
    "description": "Blazingly fast extendable desktop launcher providing quick access to commands and custom scripts",
    "industry": "Developer Tools",
    "stage": "Series B",
    "fundingRaised": "$45M",
    "fundingNum": 45,
    "currentValuation": "$200M",
    "valuationNum": 200,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2020,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 10,
        "valuationDisplay": "$10M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 70,
        "valuationDisplay": "$70M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$10M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$13M",
        "valuation": "$70M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "88",
    "name": "Pitch",
    "slug": "pitch",
    "domain": "pitch.com",
    "website": "https://pitch.com",
    "description": "Collaborative presentation software designed for modern high-growth venture teams",
    "industry": "Design & Productivity",
    "stage": "Series B",
    "fundingRaised": "$135M",
    "fundingNum": 135,
    "currentValuation": "$500M",
    "valuationNum": 500,
    "country": "Germany",
    "headquarters": "Berlin, Germany",
    "foundedYear": 2018,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 375,
        "valuationDisplay": "$375M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$25M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$68M",
        "valuation": "$375M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "89",
    "name": "Typeform",
    "slug": "typeform",
    "domain": "typeform.com",
    "website": "https://typeform.com",
    "description": "Conversational data collection software turning traditional forms into engaging human dialogs",
    "industry": "Enterprise SaaS",
    "stage": "Series C",
    "fundingRaised": "$187M",
    "fundingNum": 187,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "Spain",
    "headquarters": "Barcelona, Spain",
    "foundedYear": 2012,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "90",
    "name": "Pigment",
    "slug": "pigment",
    "domain": "gopigment.com",
    "website": "https://gopigment.com",
    "description": "Business planning and forecasting platform delivering real-time financial scenario modeling",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$393M",
    "fundingNum": 393,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2019,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "91",
    "name": "Snyk",
    "slug": "snyk",
    "domain": "snyk.io",
    "website": "https://snyk.io",
    "description": "Developer-first security platform scanning code dependencies, containers, and cloud configurations",
    "industry": "CyberSecurity",
    "stage": "Series G",
    "fundingRaised": "$1.4B",
    "fundingNum": 1400,
    "currentValuation": "$7.4B",
    "valuationNum": 7400,
    "country": "United Kingdom",
    "headquarters": "London & Boston",
    "foundedYear": 2015,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 370,
        "valuationDisplay": "$370M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2590,
        "valuationDisplay": "$2.6B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5550,
        "valuationDisplay": "$5.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7400,
        "valuationDisplay": "$7.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$67M",
        "valuation": "$370M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$466M",
        "valuation": "$2.6B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$999M",
        "valuation": "$5.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.3B",
        "valuation": "$7.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "92",
    "name": "1Password",
    "slug": "1password",
    "domain": "1password.com",
    "website": "https://1password.com",
    "description": "Enterprise credential management and password security vault securing millions of organizations",
    "industry": "CyberSecurity",
    "stage": "Series C",
    "fundingRaised": "$920M",
    "fundingNum": 920,
    "currentValuation": "$6.8B",
    "valuationNum": 6800,
    "country": "Canada",
    "headquarters": "Toronto, Canada",
    "foundedYear": 2005,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 340,
        "valuationDisplay": "$340M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2380,
        "valuationDisplay": "$2.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5100,
        "valuationDisplay": "$5.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 6800,
        "valuationDisplay": "$6.8B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$61M",
        "valuation": "$340M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$428M",
        "valuation": "$2.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$918M",
        "valuation": "$5.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.2B",
        "valuation": "$6.8B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "93",
    "name": "Abnormal Security",
    "slug": "abnormal-security",
    "domain": "abnormalsecurity.com",
    "website": "https://abnormalsecurity.com",
    "description": "AI-native email security platform stopping sophisticated business email compromise attacks",
    "industry": "CyberSecurity",
    "stage": "Series D",
    "fundingRaised": "$534M",
    "fundingNum": 534,
    "currentValuation": "$5.1B",
    "valuationNum": 5100,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2018,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 255,
        "valuationDisplay": "$255M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1785,
        "valuationDisplay": "$1.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3825,
        "valuationDisplay": "$3.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5100,
        "valuationDisplay": "$5.1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$46M",
        "valuation": "$255M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$321M",
        "valuation": "$1.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$689M",
        "valuation": "$3.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$918M",
        "valuation": "$5.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "94",
    "name": "Cyera",
    "slug": "cyera",
    "domain": "cyera.io",
    "website": "https://cyera.io",
    "description": "AI-powered data security posture management discovering, classifying, and protecting enterprise data",
    "industry": "CyberSecurity",
    "stage": "Series D",
    "fundingRaised": "$460M",
    "fundingNum": 460,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "Israel",
    "headquarters": "Tel Aviv & New York",
    "foundedYear": 2021,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2021",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "95",
    "name": "Cribl",
    "slug": "cribl",
    "domain": "cribl.io",
    "website": "https://cribl.io",
    "description": "Observability and security data pipeline engine routing, filtering, and enriching enterprise telemetry",
    "industry": "CyberSecurity",
    "stage": "Series E",
    "fundingRaised": "$600M",
    "fundingNum": 600,
    "currentValuation": "$3.5B",
    "valuationNum": 3500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2017,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1225,
        "valuationDisplay": "$1.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2625,
        "valuationDisplay": "$2.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$221M",
        "valuation": "$1.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$473M",
        "valuation": "$2.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$630M",
        "valuation": "$3.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "96",
    "name": "Drata",
    "slug": "drata",
    "domain": "drata.com",
    "website": "https://drata.com",
    "description": "Continuous compliance automation platform preparing businesses for SOC 2, ISO 27001, and HIPAA",
    "industry": "CyberSecurity",
    "stage": "Series C",
    "fundingRaised": "$328M",
    "fundingNum": 328,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "United States",
    "headquarters": "San Diego, CA",
    "foundedYear": 2020,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "97",
    "name": "Vanta",
    "slug": "vanta",
    "domain": "vanta.com",
    "website": "https://vanta.com",
    "description": "Automated trust management and security compliance platform verifying controls in real time",
    "industry": "CyberSecurity",
    "stage": "Series C",
    "fundingRaised": "$353M",
    "fundingNum": 353,
    "currentValuation": "$2.45B",
    "valuationNum": 2450,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 123,
        "valuationDisplay": "$123M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 858,
        "valuationDisplay": "$858M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1838,
        "valuationDisplay": "$1.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2450,
        "valuationDisplay": "$2.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$22M",
        "valuation": "$123M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$154M",
        "valuation": "$858M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$331M",
        "valuation": "$1.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$441M",
        "valuation": "$2.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "98",
    "name": "Relativity Space",
    "slug": "relativity-space",
    "domain": "relativityspace.com",
    "website": "https://relativityspace.com",
    "description": "Aerospace company building 3D-printed rockets and reusable launch vehicles with custom metallurgy",
    "industry": "SpaceTech",
    "stage": "Series E",
    "fundingRaised": "$1.3B",
    "fundingNum": 1300,
    "currentValuation": "$4.2B",
    "valuationNum": 4200,
    "country": "United States",
    "headquarters": "Long Beach, CA",
    "foundedYear": 2015,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 210,
        "valuationDisplay": "$210M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1470,
        "valuationDisplay": "$1.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3150,
        "valuationDisplay": "$3.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4200,
        "valuationDisplay": "$4.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$38M",
        "valuation": "$210M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$265M",
        "valuation": "$1.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$567M",
        "valuation": "$3.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$756M",
        "valuation": "$4.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "99",
    "name": "Planet Labs",
    "slug": "planet-labs",
    "domain": "planet.com",
    "website": "https://planet.com",
    "description": "Earth observation satellite fleet capturing daily high-resolution geospatial imagery of the globe",
    "industry": "SpaceTech",
    "stage": "Public",
    "fundingRaised": "$570M",
    "fundingNum": 570,
    "currentValuation": "$1.8B",
    "valuationNum": 1800,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2010,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 90,
        "valuationDisplay": "$90M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 630,
        "valuationDisplay": "$630M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1350,
        "valuationDisplay": "$1.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1800,
        "valuationDisplay": "$1.8B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$16M",
        "valuation": "$90M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$113M",
        "valuation": "$630M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$243M",
        "valuation": "$1.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$324M",
        "valuation": "$1.8B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "100",
    "name": "Shield AI",
    "slug": "shield-ai",
    "domain": "shield.ai",
    "website": "https://shield.ai",
    "description": "Defense technology company building Hivemind AI pilot software for autonomous military aircraft",
    "industry": "Robotics",
    "stage": "Series F",
    "fundingRaised": "$800M",
    "fundingNum": 800,
    "currentValuation": "$2.8B",
    "valuationNum": 2800,
    "country": "United States",
    "headquarters": "San Diego, CA",
    "foundedYear": 2015,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 140,
        "valuationDisplay": "$140M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 980,
        "valuationDisplay": "$980M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2100,
        "valuationDisplay": "$2.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2800,
        "valuationDisplay": "$2.8B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$25M",
        "valuation": "$140M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$176M",
        "valuation": "$980M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$378M",
        "valuation": "$2.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$504M",
        "valuation": "$2.8B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "101",
    "name": "Skydio",
    "slug": "skydio",
    "domain": "skydio.com",
    "website": "https://skydio.com",
    "description": "Autonomous drone manufacturer using computer vision to navigate obstacle-dense environments",
    "industry": "Robotics",
    "stage": "Series E",
    "fundingRaised": "$570M",
    "fundingNum": 570,
    "currentValuation": "$2.2B",
    "valuationNum": 2200,
    "country": "United States",
    "headquarters": "San Mateo, CA",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 110,
        "valuationDisplay": "$110M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 770,
        "valuationDisplay": "$770M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1650,
        "valuationDisplay": "$1.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2200,
        "valuationDisplay": "$2.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$20M",
        "valuation": "$110M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$139M",
        "valuation": "$770M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$297M",
        "valuation": "$1.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$396M",
        "valuation": "$2.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "102",
    "name": "Agility Robotics",
    "slug": "agility-robotics",
    "domain": "agilityrobotics.com",
    "website": "https://agilityrobotics.com",
    "description": "Creator of Digit, a bipedal humanoid robot designed for warehouse logistics and material handling",
    "industry": "Robotics",
    "stage": "Series B",
    "fundingRaised": "$180M",
    "fundingNum": 180,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "United States",
    "headquarters": "Corvallis, OR",
    "foundedYear": 2015,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "103",
    "name": "Form Energy",
    "slug": "form-energy",
    "domain": "formenergy.com",
    "website": "https://formenergy.com",
    "description": "Multi-day iron-air energy storage batteries for electric grids operating for 100 hours",
    "industry": "CleanTech",
    "stage": "Series F",
    "fundingRaised": "$1.2B",
    "fundingNum": 1200,
    "currentValuation": "$2.1B",
    "valuationNum": 2100,
    "country": "United States",
    "headquarters": "Somerville, MA",
    "foundedYear": 2017,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 105,
        "valuationDisplay": "$105M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 735,
        "valuationDisplay": "$735M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1575,
        "valuationDisplay": "$1.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2100,
        "valuationDisplay": "$2.1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$19M",
        "valuation": "$105M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$132M",
        "valuation": "$735M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$284M",
        "valuation": "$1.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$378M",
        "valuation": "$2.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "104",
    "name": "Commonwealth Fusion Systems",
    "slug": "commonwealth-fusion-systems",
    "domain": "cfs.energy",
    "website": "https://cfs.energy",
    "description": "Commercial magnetic confinement fusion energy enterprise spun out of MIT using HTS magnets",
    "industry": "CleanTech",
    "stage": "Series B",
    "fundingRaised": "$2B",
    "fundingNum": 2000,
    "currentValuation": "$3.5B",
    "valuationNum": 3500,
    "country": "United States",
    "headquarters": "Devens, MA",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1225,
        "valuationDisplay": "$1.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2625,
        "valuationDisplay": "$2.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$221M",
        "valuation": "$1.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$473M",
        "valuation": "$2.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$630M",
        "valuation": "$3.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "105",
    "name": "Helion Energy",
    "slug": "helion-energy",
    "domain": "helionenergy.com",
    "website": "https://helionenergy.com",
    "description": "Magneto-inertial fusion energy developer aiming to produce zero-carbon commercial electricity",
    "industry": "CleanTech",
    "stage": "Series E",
    "fundingRaised": "$570M",
    "fundingNum": 570,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "United States",
    "headquarters": "Everett, WA",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "106",
    "name": "Einride",
    "slug": "einride",
    "domain": "einride.tech",
    "website": "https://einride.tech",
    "description": "Freight mobility technology company developing electric and autonomous freight vehicles",
    "industry": "CleanTech",
    "stage": "Series C",
    "fundingRaised": "$650M",
    "fundingNum": 650,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "Sweden",
    "headquarters": "Stockholm, Sweden",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "107",
    "name": "Redwood Materials",
    "slug": "redwood-materials",
    "domain": "redwoodmaterials.com",
    "website": "https://redwoodmaterials.com",
    "description": "Circular supply chain and recycling facility for lithium-ion batteries and raw electric vehicle metals",
    "industry": "CleanTech",
    "stage": "Series D",
    "fundingRaised": "$3.8B",
    "fundingNum": 3800,
    "currentValuation": "$5.25B",
    "valuationNum": 5250,
    "country": "United States",
    "headquarters": "Carson City, NV",
    "foundedYear": 2017,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 263,
        "valuationDisplay": "$263M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1837,
        "valuationDisplay": "$1.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3938,
        "valuationDisplay": "$3.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5250,
        "valuationDisplay": "$5.3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$47M",
        "valuation": "$263M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$331M",
        "valuation": "$1.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$709M",
        "valuation": "$3.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$945M",
        "valuation": "$5.3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "108",
    "name": "Tempus AI",
    "slug": "tempus-ai",
    "domain": "tempus.com",
    "website": "https://tempus.com",
    "description": "AI-enabled precision medicine platform sequencing clinical and genomic data to assist oncology",
    "industry": "HealthTech",
    "stage": "Public",
    "fundingRaised": "$1.3B",
    "fundingNum": 1300,
    "currentValuation": "$8.1B",
    "valuationNum": 8100,
    "country": "United States",
    "headquarters": "Chicago, IL",
    "foundedYear": 2015,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 405,
        "valuationDisplay": "$405M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2835,
        "valuationDisplay": "$2.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 6075,
        "valuationDisplay": "$6.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 8100,
        "valuationDisplay": "$8.1B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$73M",
        "valuation": "$405M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$510M",
        "valuation": "$2.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.1B",
        "valuation": "$6.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$1.5B",
        "valuation": "$8.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "109",
    "name": "Insilico Medicine",
    "slug": "insilico-medicine",
    "domain": "insilico.com",
    "website": "https://insilico.com",
    "description": "Generative AI and robotics lab discovering novel biological targets and small molecule drugs",
    "industry": "HealthTech",
    "stage": "Series D",
    "fundingRaised": "$400M",
    "fundingNum": 400,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "Hong Kong",
    "headquarters": "Hong Kong & New York",
    "foundedYear": 2014,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "110",
    "name": "Benchling",
    "slug": "benchling",
    "domain": "benchling.com",
    "website": "https://benchling.com",
    "description": "R&D cloud software platform designed specifically for biotechnology scientists and life sciences",
    "industry": "HealthTech",
    "stage": "Series F",
    "fundingRaised": "$412M",
    "fundingNum": 412,
    "currentValuation": "$6.1B",
    "valuationNum": 6100,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 305,
        "valuationDisplay": "$305M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2135,
        "valuationDisplay": "$2.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4575,
        "valuationDisplay": "$4.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 6100,
        "valuationDisplay": "$6.1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$55M",
        "valuation": "$305M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$384M",
        "valuation": "$2.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$824M",
        "valuation": "$4.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.1B",
        "valuation": "$6.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "111",
    "name": "CMR Surgical",
    "slug": "cmr-surgical",
    "domain": "cmrsurgical.com",
    "website": "https://cmrsurgical.com",
    "description": "Creator of Versius, a next-generation surgical robotic system for minimal access laparoscopy",
    "industry": "HealthTech",
    "stage": "Series D",
    "fundingRaised": "$1B",
    "fundingNum": 1000,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "United Kingdom",
    "headquarters": "Cambridge, United Kingdom",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "112",
    "name": "Faire",
    "slug": "faire",
    "domain": "faire.com",
    "website": "https://faire.com",
    "description": "Online wholesale marketplace connecting independent boutique retailers with curated global brands",
    "industry": "E-commerce",
    "stage": "Series G",
    "fundingRaised": "$1.7B",
    "fundingNum": 1700,
    "currentValuation": "$12.6B",
    "valuationNum": 12600,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2017,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 630,
        "valuationDisplay": "$630M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4410,
        "valuationDisplay": "$4.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 9450,
        "valuationDisplay": "$9.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 12600,
        "valuationDisplay": "$12.6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$113M",
        "valuation": "$630M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$794M",
        "valuation": "$4.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.7B",
        "valuation": "$9.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.3B",
        "valuation": "$12.6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "113",
    "name": "Swiggy",
    "slug": "swiggy",
    "domain": "swiggy.com",
    "website": "https://swiggy.com",
    "description": "On-demand food delivery, quick commerce Instamart, and dining ecosystem across urban India",
    "industry": "E-commerce",
    "stage": "Public / IPO",
    "fundingRaised": "$3.6B",
    "fundingNum": 3600,
    "currentValuation": "$12B",
    "valuationNum": 12000,
    "country": "India",
    "headquarters": "Bengaluru, India",
    "foundedYear": 2014,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 600,
        "valuationDisplay": "$600M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4200,
        "valuationDisplay": "$4.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 9000,
        "valuationDisplay": "$9.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 12000,
        "valuationDisplay": "$12B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$108M",
        "valuation": "$600M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$756M",
        "valuation": "$4.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.6B",
        "valuation": "$9.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.2B",
        "valuation": "$12B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "114",
    "name": "Rappi",
    "slug": "rappi",
    "domain": "rappi.com",
    "website": "https://rappi.com",
    "description": "Latin American super-app delivering groceries, restaurant meals, medicines, and financial services",
    "industry": "E-commerce",
    "stage": "Series F",
    "fundingRaised": "$2.3B",
    "fundingNum": 2300,
    "currentValuation": "$5.25B",
    "valuationNum": 5250,
    "country": "Colombia",
    "headquarters": "Bogotá, Colombia",
    "foundedYear": 2015,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 263,
        "valuationDisplay": "$263M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1837,
        "valuationDisplay": "$1.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3938,
        "valuationDisplay": "$3.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5250,
        "valuationDisplay": "$5.3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$47M",
        "valuation": "$263M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$331M",
        "valuation": "$1.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$709M",
        "valuation": "$3.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$945M",
        "valuation": "$5.3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "115",
    "name": "Back Market",
    "slug": "back-market",
    "domain": "backmarket.com",
    "website": "https://backmarket.com",
    "description": "Leading refurbished electronic device marketplace fighting e-waste across Europe and the US",
    "industry": "E-commerce",
    "stage": "Series E",
    "fundingRaised": "$1B",
    "fundingNum": 1000,
    "currentValuation": "$5.7B",
    "valuationNum": 5700,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2014,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 285,
        "valuationDisplay": "$285M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1995,
        "valuationDisplay": "$2.0B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4275,
        "valuationDisplay": "$4.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5700,
        "valuationDisplay": "$5.7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$51M",
        "valuation": "$285M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$359M",
        "valuation": "$2.0B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$770M",
        "valuation": "$4.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.0B",
        "valuation": "$5.7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "116",
    "name": "Mirakl",
    "slug": "mirakl",
    "domain": "mirakl.com",
    "website": "https://mirakl.com",
    "description": "Enterprise SaaS platform allowing global brands and retailers to launch curated online marketplaces",
    "industry": "Enterprise SaaS",
    "stage": "Series E",
    "fundingRaised": "$948M",
    "fundingNum": 948,
    "currentValuation": "$3.5B",
    "valuationNum": 3500,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2012,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1225,
        "valuationDisplay": "$1.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2625,
        "valuationDisplay": "$2.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$221M",
        "valuation": "$1.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$473M",
        "valuation": "$2.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$630M",
        "valuation": "$3.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "117",
    "name": "Monday.com",
    "slug": "monday-com",
    "domain": "monday.com",
    "website": "https://monday.com",
    "description": "Work operating system allowing organizations to build custom software applications and project tools",
    "industry": "Enterprise SaaS",
    "stage": "Public",
    "fundingRaised": "$384M",
    "fundingNum": 384,
    "currentValuation": "$14B",
    "valuationNum": 14000,
    "country": "Israel",
    "headquarters": "Tel Aviv, Israel",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4900,
        "valuationDisplay": "$4.9B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 10500,
        "valuationDisplay": "$10.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 14000,
        "valuationDisplay": "$14B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$882M",
        "valuation": "$4.9B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.9B",
        "valuation": "$10.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$2.5B",
        "valuation": "$14B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "118",
    "name": "Gong",
    "slug": "gong",
    "domain": "gong.io",
    "website": "https://gong.io",
    "description": "Revenue intelligence platform capturing and analyzing sales conversations using natural language AI",
    "industry": "Enterprise SaaS",
    "stage": "Series E",
    "fundingRaised": "$583M",
    "fundingNum": 583,
    "currentValuation": "$7.25B",
    "valuationNum": 7250,
    "country": "Israel",
    "headquarters": "Tel Aviv & San Francisco",
    "foundedYear": 2015,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 363,
        "valuationDisplay": "$363M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2538,
        "valuationDisplay": "$2.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5438,
        "valuationDisplay": "$5.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7250,
        "valuationDisplay": "$7.3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$65M",
        "valuation": "$363M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$457M",
        "valuation": "$2.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$979M",
        "valuation": "$5.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.3B",
        "valuation": "$7.3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "119",
    "name": "Rapyd",
    "slug": "rapyd",
    "domain": "rapyd.net",
    "website": "https://rapyd.net",
    "description": "Fintech-as-a-service platform integrating global payment methods, e-wallets, and payouts via API",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$960M",
    "fundingNum": 960,
    "currentValuation": "$8.75B",
    "valuationNum": 8750,
    "country": "Israel",
    "headquarters": "Tel Aviv & London",
    "foundedYear": 2016,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 438,
        "valuationDisplay": "$438M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 3063,
        "valuationDisplay": "$3.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 6563,
        "valuationDisplay": "$6.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 8750,
        "valuationDisplay": "$8.8B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$79M",
        "valuation": "$438M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$551M",
        "valuation": "$3.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.2B",
        "valuation": "$6.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.6B",
        "valuation": "$8.8B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "120",
    "name": "Grab",
    "slug": "grab",
    "domain": "grab.com",
    "website": "https://grab.com",
    "description": "Southeast Asia’s leading superapp offering ride-hailing, food delivery, and digital financial services",
    "industry": "E-commerce",
    "stage": "Public",
    "fundingRaised": "$12B",
    "fundingNum": 12000,
    "currentValuation": "$18B",
    "valuationNum": 18000,
    "country": "Singapore",
    "headquarters": "Singapore",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 900,
        "valuationDisplay": "$900M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 6300,
        "valuationDisplay": "$6.3B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 13500,
        "valuationDisplay": "$13.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 18000,
        "valuationDisplay": "$18B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$162M",
        "valuation": "$900M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$1.1B",
        "valuation": "$6.3B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$2.4B",
        "valuation": "$13.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$3.2B",
        "valuation": "$18B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "121",
    "name": "Carro",
    "slug": "carro",
    "domain": "carro.sg",
    "website": "https://carro.sg",
    "description": "Southeast Asia’s largest AI-powered used car marketplace and auto-financing ecosystem",
    "industry": "E-commerce",
    "stage": "Series C",
    "fundingRaised": "$650M",
    "fundingNum": 650,
    "currentValuation": "$1.8B",
    "valuationNum": 1800,
    "country": "Singapore",
    "headquarters": "Singapore",
    "foundedYear": 2015,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 90,
        "valuationDisplay": "$90M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 630,
        "valuationDisplay": "$630M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1350,
        "valuationDisplay": "$1.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1800,
        "valuationDisplay": "$1.8B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$16M",
        "valuation": "$90M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$113M",
        "valuation": "$630M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$243M",
        "valuation": "$1.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$324M",
        "valuation": "$1.8B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "122",
    "name": "Nium",
    "slug": "nium",
    "domain": "nium.com",
    "website": "https://nium.com",
    "description": "Global real-time payments infrastructure for cross-border money transfers and corporate card issuance",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$330M",
    "fundingNum": 330,
    "currentValuation": "$1.4B",
    "valuationNum": 1400,
    "country": "Singapore",
    "headquarters": "Singapore",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 70,
        "valuationDisplay": "$70M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 490,
        "valuationDisplay": "$490M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$13M",
        "valuation": "$70M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$88M",
        "valuation": "$490M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "123",
    "name": "Immutable",
    "slug": "immutable",
    "domain": "immutable.com",
    "website": "https://immutable.com",
    "description": "Web3 gaming platform and Ethereum layer-2 scaling solution for digital asset ownership",
    "industry": "Developer Tools",
    "stage": "Series C",
    "fundingRaised": "$280M",
    "fundingNum": 280,
    "currentValuation": "$2.5B",
    "valuationNum": 2500,
    "country": "Australia",
    "headquarters": "Sydney, Australia",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 125,
        "valuationDisplay": "$125M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 875,
        "valuationDisplay": "$875M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1875,
        "valuationDisplay": "$1.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2500,
        "valuationDisplay": "$2.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$23M",
        "valuation": "$125M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$158M",
        "valuation": "$875M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$338M",
        "valuation": "$1.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$450M",
        "valuation": "$2.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "124",
    "name": "Linktree",
    "slug": "linktree",
    "domain": "linktr.ee",
    "website": "https://linktr.ee",
    "description": "Social bio-link aggregator connecting creators and brands to their entire digital ecosystem",
    "industry": "Design & Productivity",
    "stage": "Series C",
    "fundingRaised": "$165M",
    "fundingNum": 165,
    "currentValuation": "$1.3B",
    "valuationNum": 1300,
    "country": "Australia",
    "headquarters": "Melbourne, Australia",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 65,
        "valuationDisplay": "$65M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 455,
        "valuationDisplay": "$455M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 975,
        "valuationDisplay": "$975M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1300,
        "valuationDisplay": "$1.3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$12M",
        "valuation": "$65M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$82M",
        "valuation": "$455M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$176M",
        "valuation": "$975M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$234M",
        "valuation": "$1.3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "125",
    "name": "SafetyCulture",
    "slug": "safetyculture",
    "domain": "safetyculture.com",
    "website": "https://safetyculture.com",
    "description": "Workplace operations platform powering audits, inspections, and safety compliance worldwide",
    "industry": "Enterprise SaaS",
    "stage": "Series C",
    "fundingRaised": "$230M",
    "fundingNum": 230,
    "currentValuation": "$2.7B",
    "valuationNum": 2700,
    "country": "Australia",
    "headquarters": "Sydney, Australia",
    "foundedYear": 2004,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 135,
        "valuationDisplay": "$135M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 945,
        "valuationDisplay": "$945M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2025,
        "valuationDisplay": "$2.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2700,
        "valuationDisplay": "$2.7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$24M",
        "valuation": "$135M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$170M",
        "valuation": "$945M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$365M",
        "valuation": "$2.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$486M",
        "valuation": "$2.7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "126",
    "name": "Clio",
    "slug": "clio",
    "domain": "clio.com",
    "website": "https://clio.com",
    "description": "Cloud-based legal practice management software powering over 150,000 legal professionals",
    "industry": "Enterprise SaaS",
    "stage": "Series F",
    "fundingRaised": "$1.3B",
    "fundingNum": 1300,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "Canada",
    "headquarters": "Vancouver, Canada",
    "foundedYear": 2008,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "127",
    "name": "Ada",
    "slug": "ada",
    "domain": "ada.cx",
    "website": "https://ada.cx",
    "description": "Automated AI customer service agent resolving multi-channel enterprise inquiries seamlessly",
    "industry": "AI/ML",
    "stage": "Series C",
    "fundingRaised": "$190M",
    "fundingNum": 190,
    "currentValuation": "$1.2B",
    "valuationNum": 1200,
    "country": "Canada",
    "headquarters": "Toronto, Canada",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 60,
        "valuationDisplay": "$60M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 420,
        "valuationDisplay": "$420M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 900,
        "valuationDisplay": "$900M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1200,
        "valuationDisplay": "$1.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$11M",
        "valuation": "$60M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$76M",
        "valuation": "$420M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$162M",
        "valuation": "$900M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$216M",
        "valuation": "$1.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "128",
    "name": "Hopper",
    "slug": "hopper",
    "domain": "hopper.com",
    "website": "https://hopper.com",
    "description": "Travel fintech super-app predicting flight and hotel prices with proprietary algorithmic models",
    "industry": "Fintech",
    "stage": "Series G",
    "fundingRaised": "$730M",
    "fundingNum": 730,
    "currentValuation": "$5B",
    "valuationNum": 5000,
    "country": "Canada",
    "headquarters": "Montreal, Canada",
    "foundedYear": 2007,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 250,
        "valuationDisplay": "$250M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1750,
        "valuationDisplay": "$1.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3750,
        "valuationDisplay": "$3.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5000,
        "valuationDisplay": "$5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$45M",
        "valuation": "$250M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$315M",
        "valuation": "$1.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$675M",
        "valuation": "$3.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$900M",
        "valuation": "$5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "129",
    "name": "Preferred Networks",
    "slug": "preferred-networks",
    "domain": "preferred.jp",
    "website": "https://preferred.jp",
    "description": "Japanese deep learning powerhouse engineering custom silicon, robotics, and generative algorithms",
    "industry": "AI/ML",
    "stage": "Series D",
    "fundingRaised": "$150M",
    "fundingNum": 150,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "Japan",
    "headquarters": "Tokyo, Japan",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "130",
    "name": "SmartHR",
    "slug": "smarthr",
    "domain": "smarthr.jp",
    "website": "https://smarthr.jp",
    "description": "Cloud HR and labor management platform streamlining administrative compliance in Japan",
    "industry": "Enterprise SaaS",
    "stage": "Series E",
    "fundingRaised": "$320M",
    "fundingNum": 320,
    "currentValuation": "$1.6B",
    "valuationNum": 1600,
    "country": "Japan",
    "headquarters": "Tokyo, Japan",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 80,
        "valuationDisplay": "$80M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 560,
        "valuationDisplay": "$560M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1200,
        "valuationDisplay": "$1.2B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1600,
        "valuationDisplay": "$1.6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$80M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$101M",
        "valuation": "$560M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$216M",
        "valuation": "$1.2B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$288M",
        "valuation": "$1.6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "131",
    "name": "Coupang",
    "slug": "coupang",
    "domain": "coupang.com",
    "website": "https://coupang.com",
    "description": "Pioneering South Korean e-commerce titan famous for Dawn Delivery and Rocket Logistics",
    "industry": "E-commerce",
    "stage": "Public",
    "fundingRaised": "$3.4B",
    "fundingNum": 3400,
    "currentValuation": "$45B",
    "valuationNum": 45000,
    "country": "South Korea",
    "headquarters": "Seoul, South Korea",
    "foundedYear": 2010,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 15750,
        "valuationDisplay": "$15.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 33750,
        "valuationDisplay": "$33.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 45000,
        "valuationDisplay": "$45B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$2.8B",
        "valuation": "$15.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$6.1B",
        "valuation": "$33.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$8.1B",
        "valuation": "$45B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "132",
    "name": "Toss",
    "slug": "toss",
    "domain": "toss.im",
    "website": "https://toss.im",
    "description": "South Korea’s dominant financial super-app offering P2P money transfers, banking, and insurance",
    "industry": "Fintech",
    "stage": "Series G",
    "fundingRaised": "$1.2B",
    "fundingNum": 1200,
    "currentValuation": "$7B",
    "valuationNum": 7000,
    "country": "South Korea",
    "headquarters": "Seoul, South Korea",
    "foundedYear": 2011,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2450,
        "valuationDisplay": "$2.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5250,
        "valuationDisplay": "$5.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7000,
        "valuationDisplay": "$7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$441M",
        "valuation": "$2.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$945M",
        "valuation": "$5.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.3B",
        "valuation": "$7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "133",
    "name": "Solugen",
    "slug": "solugen",
    "domain": "solugen.com",
    "website": "https://solugen.com",
    "description": "Synthetic biology chemi-enzymatic manufacturing company decarbonizing industrial chemicals",
    "industry": "CleanTech",
    "stage": "Series C",
    "fundingRaised": "$600M",
    "fundingNum": 600,
    "currentValuation": "$2.1B",
    "valuationNum": 2100,
    "country": "United States",
    "headquarters": "Houston, TX",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 105,
        "valuationDisplay": "$105M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 735,
        "valuationDisplay": "$735M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1575,
        "valuationDisplay": "$1.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2100,
        "valuationDisplay": "$2.1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$19M",
        "valuation": "$105M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$132M",
        "valuation": "$735M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$284M",
        "valuation": "$1.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$378M",
        "valuation": "$2.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "134",
    "name": "Twelve",
    "slug": "twelve",
    "domain": "twelve.co",
    "website": "https://twelve.co",
    "description": "Carbon transformation enterprise converting captured CO2 into sustainable aviation fuel",
    "industry": "CleanTech",
    "stage": "Series C",
    "fundingRaised": "$645M",
    "fundingNum": 645,
    "currentValuation": "$1.2B",
    "valuationNum": 1200,
    "country": "United States",
    "headquarters": "Berkeley, CA",
    "foundedYear": 2015,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 60,
        "valuationDisplay": "$60M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 420,
        "valuationDisplay": "$420M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 900,
        "valuationDisplay": "$900M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1200,
        "valuationDisplay": "$1.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$11M",
        "valuation": "$60M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$76M",
        "valuation": "$420M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$162M",
        "valuation": "$900M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$216M",
        "valuation": "$1.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "135",
    "name": "Sanctuary AI",
    "slug": "sanctuary-ai",
    "domain": "sanctuary.ai",
    "website": "https://sanctuary.ai",
    "description": "Creating humanoid general-purpose robots with human-like intelligence and teleoperation",
    "industry": "Robotics",
    "stage": "Series A",
    "fundingRaised": "$140M",
    "fundingNum": 140,
    "currentValuation": "$800M",
    "valuationNum": 800,
    "country": "Canada",
    "headquarters": "Vancouver, Canada",
    "foundedYear": 2018,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 40,
        "valuationDisplay": "$40M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 280,
        "valuationDisplay": "$280M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 600,
        "valuationDisplay": "$600M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 800,
        "valuationDisplay": "$800M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$7M",
        "valuation": "$40M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$50M",
        "valuation": "$280M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$108M",
        "valuation": "$600M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$144M",
        "valuation": "$800M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "136",
    "name": "Boston Dynamics",
    "slug": "boston-dynamics",
    "domain": "bostondynamics.com",
    "website": "https://bostondynamics.com",
    "description": "World leader in mobile robotics known for Spot quadrupeds and Atlas electric humanoid robots",
    "industry": "Robotics",
    "stage": "Acquired / Private",
    "fundingRaised": "$1.1B",
    "fundingNum": 1100,
    "currentValuation": "$1.1B",
    "valuationNum": 1100,
    "country": "United States",
    "headquarters": "Waltham, MA",
    "foundedYear": 1992,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 55,
        "valuationDisplay": "$55M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 385,
        "valuationDisplay": "$385M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 825,
        "valuationDisplay": "$825M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1100,
        "valuationDisplay": "$1.1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$10M",
        "valuation": "$55M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$69M",
        "valuation": "$385M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$149M",
        "valuation": "$825M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$198M",
        "valuation": "$1.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "137",
    "name": "Coda",
    "slug": "coda",
    "domain": "coda.io",
    "website": "https://coda.io",
    "description": "All-in-one collaborative doc uniting tables, formulas, and presentations into one interface",
    "industry": "Design & Productivity",
    "stage": "Series D",
    "fundingRaised": "$200M",
    "fundingNum": 200,
    "currentValuation": "$1.4B",
    "valuationNum": 1400,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 70,
        "valuationDisplay": "$70M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 490,
        "valuationDisplay": "$490M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$13M",
        "valuation": "$70M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$88M",
        "valuation": "$490M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "138",
    "name": "Zaptec",
    "slug": "zaptec",
    "domain": "zaptec.com",
    "website": "https://zaptec.com",
    "description": "Intelligent electric vehicle charging systems and energy management solutions across Scandinavia",
    "industry": "CleanTech",
    "stage": "Public",
    "fundingRaised": "$80M",
    "fundingNum": 80,
    "currentValuation": "$500M",
    "valuationNum": 500,
    "country": "Norway",
    "headquarters": "Stavanger, Norway",
    "foundedYear": 2012,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 375,
        "valuationDisplay": "$375M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$25M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$68M",
        "valuation": "$375M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "139",
    "name": "Polestar",
    "slug": "polestar",
    "domain": "polestar.com",
    "website": "https://polestar.com",
    "description": "Premium electric performance automotive brand combining minimalist Scandinavian design",
    "industry": "CleanTech",
    "stage": "Public",
    "fundingRaised": "$3B",
    "fundingNum": 3000,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "Sweden",
    "headquarters": "Gothenburg, Sweden",
    "foundedYear": 2017,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "140",
    "name": "Verkada",
    "slug": "verkada",
    "domain": "verkada.com",
    "website": "https://verkada.com",
    "description": "Enterprise physical security platform unifying security cameras, access control, and sensors",
    "industry": "CyberSecurity",
    "stage": "Series D",
    "fundingRaised": "$360M",
    "fundingNum": 360,
    "currentValuation": "$3.2B",
    "valuationNum": 3200,
    "country": "United States",
    "headquarters": "San Mateo, CA",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 160,
        "valuationDisplay": "$160M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1120,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2400,
        "valuationDisplay": "$2.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3200,
        "valuationDisplay": "$3.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$29M",
        "valuation": "$160M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$202M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$432M",
        "valuation": "$2.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$576M",
        "valuation": "$3.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "141",
    "name": "SentinelOne",
    "slug": "sentinelone",
    "domain": "sentinelone.com",
    "website": "https://sentinelone.com",
    "description": "Autonomous AI endpoint cybersecurity platform preventing and remediating threats",
    "industry": "CyberSecurity",
    "stage": "Public",
    "fundingRaised": "$700M",
    "fundingNum": 700,
    "currentValuation": "$7.5B",
    "valuationNum": 7500,
    "country": "United States",
    "headquarters": "Mountain View, CA",
    "foundedYear": 2013,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 375,
        "valuationDisplay": "$375M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2625,
        "valuationDisplay": "$2.6B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5625,
        "valuationDisplay": "$5.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7500,
        "valuationDisplay": "$7.5B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$68M",
        "valuation": "$375M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$473M",
        "valuation": "$2.6B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.0B",
        "valuation": "$5.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$1.4B",
        "valuation": "$7.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "142",
    "name": "Netskope",
    "slug": "netskope",
    "domain": "netskope.com",
    "website": "https://netskope.com",
    "description": "Secure access service edge (SASE) platform protecting cloud apps, web traffic, and private data",
    "industry": "CyberSecurity",
    "stage": "Series H",
    "fundingRaised": "$1.4B",
    "fundingNum": 1400,
    "currentValuation": "$7.5B",
    "valuationNum": 7500,
    "country": "United States",
    "headquarters": "Santa Clara, CA",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 375,
        "valuationDisplay": "$375M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2625,
        "valuationDisplay": "$2.6B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5625,
        "valuationDisplay": "$5.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7500,
        "valuationDisplay": "$7.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$68M",
        "valuation": "$375M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$473M",
        "valuation": "$2.6B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.0B",
        "valuation": "$5.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.4B",
        "valuation": "$7.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "143",
    "name": "Orca Security",
    "slug": "orca-security",
    "domain": "orca.security",
    "website": "https://orca.security",
    "description": "Agentless cloud security platform providing vulnerability management and compliance",
    "industry": "CyberSecurity",
    "stage": "Series C",
    "fundingRaised": "$640M",
    "fundingNum": 640,
    "currentValuation": "$1.8B",
    "valuationNum": 1800,
    "country": "Israel",
    "headquarters": "Tel Aviv & Portland",
    "foundedYear": 2019,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 90,
        "valuationDisplay": "$90M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 630,
        "valuationDisplay": "$630M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1350,
        "valuationDisplay": "$1.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1800,
        "valuationDisplay": "$1.8B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$16M",
        "valuation": "$90M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$113M",
        "valuation": "$630M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$243M",
        "valuation": "$1.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$324M",
        "valuation": "$1.8B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "144",
    "name": "Axonius",
    "slug": "axonius",
    "domain": "axonius.com",
    "website": "https://axonius.com",
    "description": "Cybersecurity asset management platform surfacing security coverage gaps across devices",
    "industry": "CyberSecurity",
    "stage": "Series E",
    "fundingRaised": "$395M",
    "fundingNum": 395,
    "currentValuation": "$2.6B",
    "valuationNum": 2600,
    "country": "United States",
    "headquarters": "New York & Tel Aviv",
    "foundedYear": 2017,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 130,
        "valuationDisplay": "$130M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 910,
        "valuationDisplay": "$910M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1950,
        "valuationDisplay": "$1.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2600,
        "valuationDisplay": "$2.6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$23M",
        "valuation": "$130M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$164M",
        "valuation": "$910M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$351M",
        "valuation": "$1.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$468M",
        "valuation": "$2.6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "145",
    "name": "InMobi",
    "slug": "inmobi",
    "domain": "inmobi.com",
    "website": "https://inmobi.com",
    "description": "Mobile advertising technology and consumer intelligence platform reaching 2B+ devices",
    "industry": "Enterprise SaaS",
    "stage": "Series D",
    "fundingRaised": "$320M",
    "fundingNum": 320,
    "currentValuation": "$2.5B",
    "valuationNum": 2500,
    "country": "India",
    "headquarters": "Bengaluru, India",
    "foundedYear": 2007,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 125,
        "valuationDisplay": "$125M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 875,
        "valuationDisplay": "$875M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1875,
        "valuationDisplay": "$1.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2500,
        "valuationDisplay": "$2.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$23M",
        "valuation": "$125M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$158M",
        "valuation": "$875M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$338M",
        "valuation": "$1.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$450M",
        "valuation": "$2.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "146",
    "name": "PhonePe",
    "slug": "phonepe",
    "domain": "phonepe.com",
    "website": "https://phonepe.com",
    "description": "Leading digital payments super-app processing over 45% of all UPI transactions in India",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$1.8B",
    "fundingNum": 1800,
    "currentValuation": "$12B",
    "valuationNum": 12000,
    "country": "India",
    "headquarters": "Bengaluru, India",
    "foundedYear": 2015,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 600,
        "valuationDisplay": "$600M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 4200,
        "valuationDisplay": "$4.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 9000,
        "valuationDisplay": "$9.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 12000,
        "valuationDisplay": "$12B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$108M",
        "valuation": "$600M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$756M",
        "valuation": "$4.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.6B",
        "valuation": "$9.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$2.2B",
        "valuation": "$12B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "147",
    "name": "Polygon",
    "slug": "polygon",
    "domain": "polygon.technology",
    "website": "https://polygon.technology",
    "description": "Decentralized Ethereum scaling protocol and zero-knowledge rollup infrastructure",
    "industry": "Infrastructure",
    "stage": "Private",
    "fundingRaised": "$450M",
    "fundingNum": 450,
    "currentValuation": "$4.5B",
    "valuationNum": 4500,
    "country": "India",
    "headquarters": "Bengaluru & Dubai",
    "foundedYear": 2017,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 225,
        "valuationDisplay": "$225M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1575,
        "valuationDisplay": "$1.6B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3375,
        "valuationDisplay": "$3.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4500,
        "valuationDisplay": "$4.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$41M",
        "valuation": "$225M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$284M",
        "valuation": "$1.6B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$608M",
        "valuation": "$3.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$810M",
        "valuation": "$4.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "148",
    "name": "Bolt",
    "slug": "bolt",
    "domain": "bolt.eu",
    "website": "https://bolt.eu",
    "description": "European mobility super-app offering ride-hailing, e-scooter sharing, and grocery delivery",
    "industry": "E-commerce",
    "stage": "Series F",
    "fundingRaised": "$2B",
    "fundingNum": 2000,
    "currentValuation": "$8.4B",
    "valuationNum": 8400,
    "country": "Estonia",
    "headquarters": "Tallinn, Estonia",
    "foundedYear": 2013,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 420,
        "valuationDisplay": "$420M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2940,
        "valuationDisplay": "$2.9B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 6300,
        "valuationDisplay": "$6.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 8400,
        "valuationDisplay": "$8.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$76M",
        "valuation": "$420M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$529M",
        "valuation": "$2.9B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.1B",
        "valuation": "$6.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.5B",
        "valuation": "$8.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "149",
    "name": "Wise",
    "slug": "wise",
    "domain": "wise.com",
    "website": "https://wise.com",
    "description": "Global technology company building the best way to move money around the world with mid-market rates",
    "industry": "Fintech",
    "stage": "Public",
    "fundingRaised": "$540M",
    "fundingNum": 540,
    "currentValuation": "$10.5B",
    "valuationNum": 10500,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2011,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 3675,
        "valuationDisplay": "$3.7B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 7875,
        "valuationDisplay": "$7.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 10500,
        "valuationDisplay": "$10.5B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$662M",
        "valuation": "$3.7B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.4B",
        "valuation": "$7.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$1.9B",
        "valuation": "$10.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "150",
    "name": "Starling Bank",
    "slug": "starling-bank",
    "domain": "starlingbank.com",
    "website": "https://starlingbank.com",
    "description": "Award-winning British mobile digital bank providing current, business, and joint accounts",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$1.1B",
    "fundingNum": 1100,
    "currentValuation": "$3.5B",
    "valuationNum": 3500,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1225,
        "valuationDisplay": "$1.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2625,
        "valuationDisplay": "$2.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$221M",
        "valuation": "$1.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$473M",
        "valuation": "$2.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$630M",
        "valuation": "$3.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "151",
    "name": "Inflection AI",
    "slug": "inflection-ai",
    "domain": "inflection.ai",
    "website": "https://inflection.ai",
    "description": "AI studio developer of conversational personal assistant Pi and enterprise LLM models",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$1.5B",
    "fundingNum": 1500,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "United States",
    "headquarters": "Palo Alto, CA",
    "foundedYear": 2022,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2022",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "152",
    "name": "Abridge",
    "slug": "abridge",
    "domain": "abridge.com",
    "website": "https://abridge.com",
    "description": "Generative AI platform converting clinical patient-doctor audio conversations into medical notes",
    "industry": "HealthTech",
    "stage": "Series C",
    "fundingRaised": "$460M",
    "fundingNum": 460,
    "currentValuation": "$2.5B",
    "valuationNum": 2500,
    "country": "United States",
    "headquarters": "Pittsburgh, PA",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 125,
        "valuationDisplay": "$125M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 875,
        "valuationDisplay": "$875M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1875,
        "valuationDisplay": "$1.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2500,
        "valuationDisplay": "$2.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$23M",
        "valuation": "$125M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$158M",
        "valuation": "$875M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$338M",
        "valuation": "$1.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$450M",
        "valuation": "$2.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "153",
    "name": "Sierra",
    "slug": "sierra",
    "domain": "sierra.ai",
    "website": "https://sierra.ai",
    "description": "Conversational AI platform by Bret Taylor and Clay Bavor enabling customer service agents",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$285M",
    "fundingNum": 285,
    "currentValuation": "$4.5B",
    "valuationNum": 4500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2023,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 225,
        "valuationDisplay": "$225M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 1575,
        "valuationDisplay": "$1.6B",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 4500,
        "valuationDisplay": "$4.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$41M",
        "valuation": "$225M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$284M",
        "valuation": "$1.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$810M",
        "valuation": "$4.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "154",
    "name": "Skype Founder Lab / Starship",
    "slug": "skype-founder-lab-starship",
    "domain": "starship.xyz",
    "website": "https://starship.xyz",
    "description": "Autonomous delivery robots fulfilling millions of commercial last-mile food and grocery orders",
    "industry": "Robotics",
    "stage": "Series B",
    "fundingRaised": "$230M",
    "fundingNum": 230,
    "currentValuation": "$500M",
    "valuationNum": 500,
    "country": "Estonia",
    "headquarters": "Tallinn & San Francisco",
    "foundedYear": 2014,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 375,
        "valuationDisplay": "$375M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$25M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$68M",
        "valuation": "$375M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "155",
    "name": "Hopin / RingCentral Events",
    "slug": "hopin-ringcentral-events",
    "domain": "hopin.com",
    "website": "https://hopin.com",
    "description": "Virtual and hybrid live event experience software connecting attendees, expos, and stages",
    "industry": "Enterprise SaaS",
    "stage": "Series D",
    "fundingRaised": "$1B",
    "fundingNum": 1000,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2019,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "156",
    "name": "Deliveroo",
    "slug": "deliveroo",
    "domain": "deliveroo.co.uk",
    "website": "https://deliveroo.co.uk",
    "description": "On-demand food delivery connecting consumers with restaurants and rapid convenience stores",
    "industry": "E-commerce",
    "stage": "Public",
    "fundingRaised": "$1.7B",
    "fundingNum": 1700,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "157",
    "name": "Delivery Hero",
    "slug": "delivery-hero",
    "domain": "deliveryhero.com",
    "website": "https://deliveryhero.com",
    "description": "Global leader in food delivery and quick commerce operating across 70+ countries",
    "industry": "E-commerce",
    "stage": "Public",
    "fundingRaised": "$5B",
    "fundingNum": 5000,
    "currentValuation": "$7B",
    "valuationNum": 7000,
    "country": "Germany",
    "headquarters": "Berlin, Germany",
    "foundedYear": 2011,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2450,
        "valuationDisplay": "$2.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5250,
        "valuationDisplay": "$5.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7000,
        "valuationDisplay": "$7B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$441M",
        "valuation": "$2.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$945M",
        "valuation": "$5.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$1.3B",
        "valuation": "$7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "158",
    "name": "Gorillas",
    "slug": "gorillas",
    "domain": "gorillas.io",
    "website": "https://gorillas.io",
    "description": "European 10-minute on-demand grocery delivery network pioneer",
    "industry": "E-commerce",
    "stage": "Acquired",
    "fundingRaised": "$1.3B",
    "fundingNum": 1300,
    "currentValuation": "$1.2B",
    "valuationNum": 1200,
    "country": "Germany",
    "headquarters": "Berlin, Germany",
    "foundedYear": 2020,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 60,
        "valuationDisplay": "$60M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 420,
        "valuationDisplay": "$420M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 900,
        "valuationDisplay": "$900M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1200,
        "valuationDisplay": "$1.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$11M",
        "valuation": "$60M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$76M",
        "valuation": "$420M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$162M",
        "valuation": "$900M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$216M",
        "valuation": "$1.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "159",
    "name": "Doctolib",
    "slug": "doctolib",
    "domain": "doctolib.fr",
    "website": "https://doctolib.fr",
    "description": "Healthcare booking, consultation management, and e-prescription software across Europe",
    "industry": "HealthTech",
    "stage": "Series F",
    "fundingRaised": "$860M",
    "fundingNum": 860,
    "currentValuation": "$6.4B",
    "valuationNum": 6400,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2013,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 320,
        "valuationDisplay": "$320M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2240,
        "valuationDisplay": "$2.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4800,
        "valuationDisplay": "$4.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 6400,
        "valuationDisplay": "$6.4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$58M",
        "valuation": "$320M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$403M",
        "valuation": "$2.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$864M",
        "valuation": "$4.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.2B",
        "valuation": "$6.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "160",
    "name": "Dataiku",
    "slug": "dataiku",
    "domain": "dataiku.com",
    "website": "https://dataiku.com",
    "description": "Collaborative data science and enterprise AI operating system connecting data specialists",
    "industry": "Data/AI",
    "stage": "Series F",
    "fundingRaised": "$850M",
    "fundingNum": 850,
    "currentValuation": "$3.7B",
    "valuationNum": 3700,
    "country": "France",
    "headquarters": "Paris & New York",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 185,
        "valuationDisplay": "$185M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1295,
        "valuationDisplay": "$1.3B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2775,
        "valuationDisplay": "$2.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3700,
        "valuationDisplay": "$3.7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$33M",
        "valuation": "$185M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$233M",
        "valuation": "$1.3B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$500M",
        "valuation": "$2.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$666M",
        "valuation": "$3.7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "161",
    "name": "Contentsquare",
    "slug": "contentsquare",
    "domain": "contentsquare.com",
    "website": "https://contentsquare.com",
    "description": "Digital experience analytics software delivering behavioral customer journey insights",
    "industry": "Enterprise SaaS",
    "stage": "Series F",
    "fundingRaised": "$1.4B",
    "fundingNum": 1400,
    "currentValuation": "$5.6B",
    "valuationNum": 5600,
    "country": "France",
    "headquarters": "Paris, France",
    "foundedYear": 2012,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 280,
        "valuationDisplay": "$280M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1960,
        "valuationDisplay": "$2.0B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4200,
        "valuationDisplay": "$4.2B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 5600,
        "valuationDisplay": "$5.6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$50M",
        "valuation": "$280M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$353M",
        "valuation": "$2.0B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$756M",
        "valuation": "$4.2B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.0B",
        "valuation": "$5.6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "162",
    "name": "Swile",
    "slug": "swile",
    "domain": "swile.co",
    "website": "https://swile.co",
    "description": "Smart corporate employee card unifying meal vouchers, mobility, and gift incentives",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$328M",
    "fundingNum": 328,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "France",
    "headquarters": "Montpellier, France",
    "foundedYear": 2018,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "163",
    "name": "Yuga Labs",
    "slug": "yuga-labs",
    "domain": "yuga.com",
    "website": "https://yuga.com",
    "description": "Web3 brand and digital identity company building open metaverse platform Otherside",
    "industry": "Developer Tools",
    "stage": "Seed / Private",
    "fundingRaised": "$450M",
    "fundingNum": 450,
    "currentValuation": "$4B",
    "valuationNum": 4000,
    "country": "United States",
    "headquarters": "Miami, FL",
    "foundedYear": 2021,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 200,
        "valuationDisplay": "$200M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1400,
        "valuationDisplay": "$1.4B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 3000,
        "valuationDisplay": "$3.0B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 4000,
        "valuationDisplay": "$4B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$36M",
        "valuation": "$200M",
        "date": "Mid 2021",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$252M",
        "valuation": "$1.4B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$540M",
        "valuation": "$3.0B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$720M",
        "valuation": "$4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "164",
    "name": "Kry / Livi",
    "slug": "kry-livi",
    "domain": "kry.se",
    "website": "https://kry.se",
    "description": "Digital primary healthcare platform connecting patients with doctors via video consultation",
    "industry": "HealthTech",
    "stage": "Series D",
    "fundingRaised": "$730M",
    "fundingNum": 730,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "Sweden",
    "headquarters": "Stockholm, Sweden",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "165",
    "name": "Voi Technology",
    "slug": "voi-technology",
    "domain": "voi.com",
    "website": "https://voi.com",
    "description": "Micromobility operator providing shared carbon-neutral electric scooters across 100 European cities",
    "industry": "CleanTech",
    "stage": "Series D",
    "fundingRaised": "$515M",
    "fundingNum": 515,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "Sweden",
    "headquarters": "Stockholm, Sweden",
    "foundedYear": 2018,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "166",
    "name": "Oura Health",
    "slug": "oura-health",
    "domain": "ouraring.com",
    "website": "https://ouraring.com",
    "description": "Smart ring biometric wearable measuring sleep quality, recovery, heart rate, and temperature",
    "industry": "HealthTech",
    "stage": "Series C",
    "fundingRaised": "$150M",
    "fundingNum": 150,
    "currentValuation": "$2.55B",
    "valuationNum": 2550,
    "country": "Finland",
    "headquarters": "Oulu, Finland",
    "foundedYear": 2013,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 128,
        "valuationDisplay": "$128M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 893,
        "valuationDisplay": "$893M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1913,
        "valuationDisplay": "$1.9B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2550,
        "valuationDisplay": "$2.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$23M",
        "valuation": "$128M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$161M",
        "valuation": "$893M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$344M",
        "valuation": "$1.9B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$459M",
        "valuation": "$2.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "167",
    "name": "Wolt",
    "slug": "wolt",
    "domain": "wolt.com",
    "website": "https://wolt.com",
    "description": "Nordic food and retail delivery platform operating in 25 countries across Europe and Asia",
    "industry": "E-commerce",
    "stage": "Acquired / DoorDash",
    "fundingRaised": "$856M",
    "fundingNum": 856,
    "currentValuation": "$8.1B",
    "valuationNum": 8100,
    "country": "Finland",
    "headquarters": "Helsinki, Finland",
    "foundedYear": 2014,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 405,
        "valuationDisplay": "$405M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2835,
        "valuationDisplay": "$2.8B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 6075,
        "valuationDisplay": "$6.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 8100,
        "valuationDisplay": "$8.1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$73M",
        "valuation": "$405M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$510M",
        "valuation": "$2.8B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.1B",
        "valuation": "$6.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.5B",
        "valuation": "$8.1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "168",
    "name": "GitLab",
    "slug": "gitlab",
    "domain": "gitlab.com",
    "website": "https://gitlab.com",
    "description": "Complete DevOps platform delivered as a single application across code review and CI/CD",
    "industry": "Infrastructure",
    "stage": "Public",
    "fundingRaised": "$413M",
    "fundingNum": 413,
    "currentValuation": "$8.5B",
    "valuationNum": 8500,
    "country": "United States",
    "headquarters": "San Francisco & Remote",
    "foundedYear": 2014,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 425,
        "valuationDisplay": "$425M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2975,
        "valuationDisplay": "$3.0B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 6375,
        "valuationDisplay": "$6.4B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 8500,
        "valuationDisplay": "$8.5B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$77M",
        "valuation": "$425M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$536M",
        "valuation": "$3.0B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.1B",
        "valuation": "$6.4B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$1.5B",
        "valuation": "$8.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "169",
    "name": "Astronomer",
    "slug": "astronomer",
    "domain": "astronomer.io",
    "website": "https://astronomer.io",
    "description": "Enterprise data orchestration platform built on Apache Airflow for data engineers",
    "industry": "Data/AI",
    "stage": "Series C",
    "fundingRaised": "$280M",
    "fundingNum": 280,
    "currentValuation": "$1.2B",
    "valuationNum": 1200,
    "country": "United States",
    "headquarters": "New York, NY",
    "foundedYear": 2015,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 60,
        "valuationDisplay": "$60M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 420,
        "valuationDisplay": "$420M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 900,
        "valuationDisplay": "$900M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1200,
        "valuationDisplay": "$1.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$11M",
        "valuation": "$60M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$76M",
        "valuation": "$420M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$162M",
        "valuation": "$900M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$216M",
        "valuation": "$1.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "170",
    "name": "Grafana Labs",
    "slug": "grafana-labs",
    "domain": "grafana.com",
    "website": "https://grafana.com",
    "description": "Open and composable observability platform unifying metrics, logs, and traces in interactive dashboards",
    "industry": "Infrastructure",
    "stage": "Series D",
    "fundingRaised": "$535M",
    "fundingNum": 535,
    "currentValuation": "$6B",
    "valuationNum": 6000,
    "country": "United States",
    "headquarters": "New York & Remote",
    "foundedYear": 2014,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 300,
        "valuationDisplay": "$300M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2100,
        "valuationDisplay": "$2.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 4500,
        "valuationDisplay": "$4.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 6000,
        "valuationDisplay": "$6B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$54M",
        "valuation": "$300M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$378M",
        "valuation": "$2.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$810M",
        "valuation": "$4.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.1B",
        "valuation": "$6B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "171",
    "name": "Hopin",
    "slug": "hopin",
    "domain": "hopin.com",
    "website": "https://hopin.com",
    "description": "Virtual interactive venue platform powering high-impact corporate summits",
    "industry": "Enterprise SaaS",
    "stage": "Series D",
    "fundingRaised": "$1B",
    "fundingNum": 1000,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "United Kingdom",
    "headquarters": "London, United Kingdom",
    "foundedYear": 2019,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "172",
    "name": "Cognition AI",
    "slug": "cognition-ai",
    "domain": "cognition.ai",
    "website": "https://cognition.ai",
    "description": "Applied AI lab creator of Devin, the world’s first autonomous AI software engineer",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$196M",
    "fundingNum": 196,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2023,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "173",
    "name": "Pika",
    "slug": "pika",
    "domain": "pika.art",
    "website": "https://pika.art",
    "description": "Idea-to-video AI platform enabling anyone to bring creative stories and concepts to life",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$135M",
    "fundingNum": 135,
    "currentValuation": "$500M",
    "valuationNum": 500,
    "country": "United States",
    "headquarters": "Palo Alto, CA",
    "foundedYear": 2023,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$25M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "174",
    "name": "Baseten",
    "slug": "baseten",
    "domain": "baseten.co",
    "website": "https://baseten.co",
    "description": "Machine learning infrastructure platform to deploy and serve open-source foundation models quickly",
    "industry": "Infrastructure",
    "stage": "Series B",
    "fundingRaised": "$60M",
    "fundingNum": 60,
    "currentValuation": "$500M",
    "valuationNum": 500,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2019,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 25,
        "valuationDisplay": "$25M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 375,
        "valuationDisplay": "$375M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$25M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$68M",
        "valuation": "$375M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "175",
    "name": "Vapi",
    "slug": "vapi",
    "domain": "vapi.ai",
    "website": "https://vapi.ai",
    "description": "Voice AI developer platform building ultra-low-latency conversational voice assistants",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$25M",
    "fundingNum": 25,
    "currentValuation": "$180M",
    "valuationNum": 180,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2023,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 10,
        "valuationDisplay": "$10M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 63,
        "valuationDisplay": "$63M",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 180,
        "valuationDisplay": "$180M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$10M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$11M",
        "valuation": "$63M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$32M",
        "valuation": "$180M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "176",
    "name": "Cartesia",
    "slug": "cartesia",
    "domain": "cartesia.ai",
    "website": "https://cartesia.ai",
    "description": "State-space foundation voice models delivering real-time streaming speech generation",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$32M",
    "fundingNum": 32,
    "currentValuation": "$250M",
    "valuationNum": 250,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2023,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 13,
        "valuationDisplay": "$13M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 88,
        "valuationDisplay": "$88M",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 250,
        "valuationDisplay": "$250M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$13M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$16M",
        "valuation": "$88M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$45M",
        "valuation": "$250M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "177",
    "name": "Mercor",
    "slug": "mercor",
    "domain": "mercor.com",
    "website": "https://mercor.com",
    "description": "AI hiring platform matching top engineering talent with leading tech companies via automated vetting",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$32M",
    "fundingNum": 32,
    "currentValuation": "$250M",
    "valuationNum": 250,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2023,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 13,
        "valuationDisplay": "$13M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 88,
        "valuationDisplay": "$88M",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 250,
        "valuationDisplay": "$250M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$13M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$16M",
        "valuation": "$88M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$45M",
        "valuation": "$250M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "178",
    "name": "Luma AI",
    "slug": "luma-ai",
    "domain": "lumalabs.ai",
    "website": "https://lumalabs.ai",
    "description": "Neural radiance fields (NeRF) and Dream Machine generative photorealistic video models",
    "industry": "AI/ML",
    "stage": "Series B",
    "fundingRaised": "$70M",
    "fundingNum": 70,
    "currentValuation": "$700M",
    "valuationNum": 700,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2021,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2021",
        "valuation": 35,
        "valuationDisplay": "$35M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 245,
        "valuationDisplay": "$245M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$6M",
        "valuation": "$35M",
        "date": "Mid 2021",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$44M",
        "valuation": "$245M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "179",
    "name": "Etched",
    "slug": "etched",
    "domain": "etched.com",
    "website": "https://etched.com",
    "description": "Specialized silicon startup manufacturing Sohu, an ASIC chip dedicated entirely to transformer models",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$125M",
    "fundingNum": 125,
    "currentValuation": "$600M",
    "valuationNum": 600,
    "country": "United States",
    "headquarters": "Cupertino, CA",
    "foundedYear": 2022,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 30,
        "valuationDisplay": "$30M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 210,
        "valuationDisplay": "$210M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 450,
        "valuationDisplay": "$450M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 600,
        "valuationDisplay": "$600M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$30M",
        "date": "Mid 2022",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$38M",
        "valuation": "$210M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$81M",
        "valuation": "$450M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$108M",
        "valuation": "$600M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "180",
    "name": "Kavak",
    "slug": "kavak",
    "domain": "kavak.com",
    "website": "https://kavak.com",
    "description": "Used-car buying, inspection, and financing platform operating across Latin America and the Middle East",
    "industry": "E-commerce",
    "stage": "Series E",
    "fundingRaised": "$1.6B",
    "fundingNum": 1600,
    "currentValuation": "$8.7B",
    "valuationNum": 8700,
    "country": "Mexico",
    "headquarters": "Mexico City, Mexico",
    "foundedYear": 2016,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 435,
        "valuationDisplay": "$435M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 3045,
        "valuationDisplay": "$3.0B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 6525,
        "valuationDisplay": "$6.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 8700,
        "valuationDisplay": "$8.7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$78M",
        "valuation": "$435M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$548M",
        "valuation": "$3.0B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.2B",
        "valuation": "$6.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.6B",
        "valuation": "$8.7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "181",
    "name": "Bitso",
    "slug": "bitso",
    "domain": "bitso.com",
    "website": "https://bitso.com",
    "description": "Leading Latin American cryptocurrency financial services platform and payment bridge",
    "industry": "Fintech",
    "stage": "Series C",
    "fundingRaised": "$315M",
    "fundingNum": 315,
    "currentValuation": "$2.2B",
    "valuationNum": 2200,
    "country": "Mexico",
    "headquarters": "Mexico City, Mexico",
    "foundedYear": 2014,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 110,
        "valuationDisplay": "$110M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 770,
        "valuationDisplay": "$770M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1650,
        "valuationDisplay": "$1.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2200,
        "valuationDisplay": "$2.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$20M",
        "valuation": "$110M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$139M",
        "valuation": "$770M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$297M",
        "valuation": "$1.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$396M",
        "valuation": "$2.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "182",
    "name": "Clip",
    "slug": "clip",
    "domain": "clip.mx",
    "website": "https://clip.mx",
    "description": "Digital payments and point-of-sale terminal provider for small and medium businesses in Mexico",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$400M",
    "fundingNum": 400,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "Mexico",
    "headquarters": "Mexico City, Mexico",
    "foundedYear": 2012,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "183",
    "name": "dLocal",
    "slug": "dlocal",
    "domain": "dlocal.com",
    "website": "https://dlocal.com",
    "description": "Cross-border payment platform connecting global merchants to emerging market consumers",
    "industry": "Fintech",
    "stage": "Public",
    "fundingRaised": "$357M",
    "fundingNum": 357,
    "currentValuation": "$3.5B",
    "valuationNum": 3500,
    "country": "Uruguay",
    "headquarters": "Montevideo, Uruguay",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 175,
        "valuationDisplay": "$175M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1225,
        "valuationDisplay": "$1.2B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2625,
        "valuationDisplay": "$2.6B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$32M",
        "valuation": "$175M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$221M",
        "valuation": "$1.2B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$473M",
        "valuation": "$2.6B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$630M",
        "valuation": "$3.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "184",
    "name": "NotCo",
    "slug": "notco",
    "domain": "notco.com",
    "website": "https://notco.com",
    "description": "Food tech enterprise using proprietary Giuseppe AI algorithm to engineer plant-based foods",
    "industry": "CleanTech",
    "stage": "Series D",
    "fundingRaised": "$430M",
    "fundingNum": 430,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "Chile",
    "headquarters": "Santiago, Chile",
    "foundedYear": 2015,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "185",
    "name": "Betterfly",
    "slug": "betterfly",
    "domain": "betterfly.com",
    "website": "https://betterfly.com",
    "description": "Social wellness benefits platform rewarding healthy habits with life insurance and charitable giving",
    "industry": "HealthTech",
    "stage": "Series C",
    "fundingRaised": "$200M",
    "fundingNum": 200,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "Chile",
    "headquarters": "Santiago, Chile",
    "foundedYear": 2018,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "186",
    "name": "Flutterwave",
    "slug": "flutterwave",
    "domain": "flutterwave.com",
    "website": "https://flutterwave.com",
    "description": "Payments infrastructure enabling global merchants to accept and process pan-African transactions",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$475M",
    "fundingNum": 475,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "Nigeria",
    "headquarters": "Lagos & San Francisco",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "187",
    "name": "Chipper Cash",
    "slug": "chipper-cash",
    "domain": "chippercash.com",
    "website": "https://chippercash.com",
    "description": "Cross-border P2P payment service and digital financial super-app operating across Africa",
    "industry": "Fintech",
    "stage": "Series C",
    "fundingRaised": "$300M",
    "fundingNum": 300,
    "currentValuation": "$1.2B",
    "valuationNum": 1200,
    "country": "Nigeria",
    "headquarters": "Lagos & San Francisco",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 60,
        "valuationDisplay": "$60M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 420,
        "valuationDisplay": "$420M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 900,
        "valuationDisplay": "$900M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1200,
        "valuationDisplay": "$1.2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$11M",
        "valuation": "$60M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$76M",
        "valuation": "$420M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$162M",
        "valuation": "$900M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$216M",
        "valuation": "$1.2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "188",
    "name": "Opay",
    "slug": "opay",
    "domain": "opayweb.com",
    "website": "https://opayweb.com",
    "description": "Mobile-based financial platform providing payment agency services, digital banking, and bills",
    "industry": "Fintech",
    "stage": "Series C",
    "fundingRaised": "$570M",
    "fundingNum": 570,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "Nigeria",
    "headquarters": "Lagos, Nigeria",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "189",
    "name": "Wave Mobile Money",
    "slug": "wave-mobile-money",
    "domain": "wave.com",
    "website": "https://wave.com",
    "description": "Radically low-fee mobile money network and app operating across Francophone West Africa",
    "industry": "Fintech",
    "stage": "Series A",
    "fundingRaised": "$290M",
    "fundingNum": 290,
    "currentValuation": "$1.7B",
    "valuationNum": 1700,
    "country": "Senegal",
    "headquarters": "Dakar, Senegal",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 85,
        "valuationDisplay": "$85M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 595,
        "valuationDisplay": "$595M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1275,
        "valuationDisplay": "$1.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1700,
        "valuationDisplay": "$1.7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$15M",
        "valuation": "$85M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$107M",
        "valuation": "$595M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$230M",
        "valuation": "$1.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$306M",
        "valuation": "$1.7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "190",
    "name": "Tabby",
    "slug": "tabby",
    "domain": "tabby.ai",
    "website": "https://tabby.ai",
    "description": "Middle East’s leading buy now pay later and shopping app partnering with 30,000+ global brands",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$950M",
    "fundingNum": 950,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "United Arab Emirates",
    "headquarters": "Dubai, UAE",
    "foundedYear": 2019,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "191",
    "name": "Tamara",
    "slug": "tamara",
    "domain": "tamara.co",
    "website": "https://tamara.co",
    "description": "First Saudi Arabian fintech unicorn providing buy now pay later solutions across the GCC region",
    "industry": "Fintech",
    "stage": "Series C",
    "fundingRaised": "$500M",
    "fundingNum": 500,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "Saudi Arabia",
    "headquarters": "Riyadh, Saudi Arabia",
    "foundedYear": 2020,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "192",
    "name": "Kitopi",
    "slug": "kitopi",
    "domain": "kitopi.com",
    "website": "https://kitopi.com",
    "description": "Tech-powered multi-brand cloud kitchen restaurant platform operating over 200 locations",
    "industry": "E-commerce",
    "stage": "Series C",
    "fundingRaised": "$800M",
    "fundingNum": 800,
    "currentValuation": "$1.5B",
    "valuationNum": 1500,
    "country": "United Arab Emirates",
    "headquarters": "Dubai, UAE",
    "foundedYear": 2018,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 525,
        "valuationDisplay": "$525M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1125,
        "valuationDisplay": "$1.1B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$95M",
        "valuation": "$525M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$203M",
        "valuation": "$1.1B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "193",
    "name": "Jahez",
    "slug": "jahez",
    "domain": "jahez.net",
    "website": "https://jahez.net",
    "description": "Leading on-demand food delivery platform and logistics infrastructure in Saudi Arabia",
    "industry": "E-commerce",
    "stage": "Public",
    "fundingRaised": "$40M",
    "fundingNum": 40,
    "currentValuation": "$2.4B",
    "valuationNum": 2400,
    "country": "Saudi Arabia",
    "headquarters": "Riyadh, Saudi Arabia",
    "foundedYear": 2016,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 120,
        "valuationDisplay": "$120M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 840,
        "valuationDisplay": "$840M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1800,
        "valuationDisplay": "$1.8B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2400,
        "valuationDisplay": "$2.4B",
        "event": "Current Market Cap"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$22M",
        "valuation": "$120M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$151M",
        "valuation": "$840M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$324M",
        "valuation": "$1.8B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Current Market Cap",
        "amount": "$432M",
        "valuation": "$2.4B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "194",
    "name": "Gojek",
    "slug": "gojek",
    "domain": "gojek.com",
    "website": "https://gojek.com",
    "description": "Indonesian on-demand multi-service platform providing transportation, food, logistics, and pay",
    "industry": "E-commerce",
    "stage": "Public / GoTo",
    "fundingRaised": "$5B",
    "fundingNum": 5000,
    "currentValuation": "$10B",
    "valuationNum": 10000,
    "country": "Indonesia",
    "headquarters": "Jakarta, Indonesia",
    "foundedYear": 2010,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 500,
        "valuationDisplay": "$500M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 3500,
        "valuationDisplay": "$3.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 7500,
        "valuationDisplay": "$7.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 10000,
        "valuationDisplay": "$10B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$90M",
        "valuation": "$500M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$630M",
        "valuation": "$3.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$1.4B",
        "valuation": "$7.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.8B",
        "valuation": "$10B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "195",
    "name": "Tokopedia",
    "slug": "tokopedia",
    "domain": "tokopedia.com",
    "website": "https://tokopedia.com",
    "description": "Largest Indonesian e-commerce marketplace empowering millions of micro-entrepreneurs",
    "industry": "E-commerce",
    "stage": "Public / GoTo",
    "fundingRaised": "$3.5B",
    "fundingNum": 3500,
    "currentValuation": "$7B",
    "valuationNum": 7000,
    "country": "Indonesia",
    "headquarters": "Jakarta, Indonesia",
    "foundedYear": 2009,
    "employeeCount": "1000+",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 2450,
        "valuationDisplay": "$2.5B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 5250,
        "valuationDisplay": "$5.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 7000,
        "valuationDisplay": "$7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$441M",
        "valuation": "$2.5B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$945M",
        "valuation": "$5.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$1.3B",
        "valuation": "$7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "196",
    "name": "Traveloka",
    "slug": "traveloka",
    "domain": "traveloka.com",
    "website": "https://traveloka.com",
    "description": "Southeast Asia lifestyle superapp providing airline ticketing, hotel reservations, and activities",
    "industry": "E-commerce",
    "stage": "Series E",
    "fundingRaised": "$1.5B",
    "fundingNum": 1500,
    "currentValuation": "$3B",
    "valuationNum": 3000,
    "country": "Indonesia",
    "headquarters": "Jakarta, Indonesia",
    "foundedYear": 2012,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 1050,
        "valuationDisplay": "$1.1B",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 2250,
        "valuationDisplay": "$2.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 3000,
        "valuationDisplay": "$3B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$189M",
        "valuation": "$1.1B",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$405M",
        "valuation": "$2.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$540M",
        "valuation": "$3B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "197",
    "name": "Xendit",
    "slug": "xendit",
    "domain": "xendit.co",
    "website": "https://xendit.co",
    "description": "Digital payment infrastructure facilitating payments across Indonesia, the Philippines, and Vietnam",
    "industry": "Fintech",
    "stage": "Series D",
    "fundingRaised": "$538M",
    "fundingNum": 538,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "Indonesia",
    "headquarters": "Jakarta & Singapore",
    "foundedYear": 2015,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "198",
    "name": "VNPay",
    "slug": "vnpay",
    "domain": "vnpay.vn",
    "website": "https://vnpay.vn",
    "description": "Leading electronic payment solution provider powering digital banking and QR code transactions",
    "industry": "Fintech",
    "stage": "Series B",
    "fundingRaised": "$550M",
    "fundingNum": 550,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "Vietnam",
    "headquarters": "Hanoi, Vietnam",
    "foundedYear": 2007,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "199",
    "name": "MoMo",
    "slug": "momo",
    "domain": "momo.vn",
    "website": "https://momo.vn",
    "description": "Vietnam’s largest e-wallet and digital financial services platform serving over 31 million users",
    "industry": "Fintech",
    "stage": "Series E",
    "fundingRaised": "$430M",
    "fundingNum": 430,
    "currentValuation": "$2B",
    "valuationNum": 2000,
    "country": "Vietnam",
    "headquarters": "Ho Chi Minh City, Vietnam",
    "foundedYear": 2007,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 700,
        "valuationDisplay": "$700M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1500,
        "valuationDisplay": "$1.5B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 2000,
        "valuationDisplay": "$2B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$126M",
        "valuation": "$700M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$270M",
        "valuation": "$1.5B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$360M",
        "valuation": "$2B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "200",
    "name": "Carsome",
    "slug": "carsome",
    "domain": "carsome.com",
    "website": "https://carsome.com",
    "description": "Southeast Asia’s largest integrated car e-commerce platform across Malaysia, Indonesia, and Thailand",
    "industry": "E-commerce",
    "stage": "Series E",
    "fundingRaised": "$600M",
    "fundingNum": 600,
    "currentValuation": "$1.7B",
    "valuationNum": 1700,
    "country": "Malaysia",
    "headquarters": "Kuala Lumpur, Malaysia",
    "foundedYear": 2015,
    "employeeCount": "300-800",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 85,
        "valuationDisplay": "$85M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 595,
        "valuationDisplay": "$595M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 1275,
        "valuationDisplay": "$1.3B",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1700,
        "valuationDisplay": "$1.7B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$15M",
        "valuation": "$85M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$107M",
        "valuation": "$595M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$230M",
        "valuation": "$1.3B",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$306M",
        "valuation": "$1.7B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "201",
    "name": "Spacemilk",
    "slug": "spacemilk",
    "domain": "space-milk.com",
    "website": "https://space-milk.com",
    "description": "AI infrastructure optimizing real-time video generation and low-latency computer graphics",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$25M",
    "fundingNum": 25,
    "currentValuation": "$150M",
    "valuationNum": 150,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2023,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2023",
        "valuation": 10,
        "valuationDisplay": "$10M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 53,
        "valuationDisplay": "$53M",
        "event": "Series B"
      },
      {
        "year": "2025",
        "valuation": 150,
        "valuationDisplay": "$150M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$10M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$10M",
        "valuation": "$53M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$27M",
        "valuation": "$150M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "202",
    "name": "Vannevar Labs",
    "slug": "vannevar-labs",
    "domain": "vannevarlabs.com",
    "website": "https://vannevarlabs.com",
    "description": "National security technology company providing intelligence insights and foreign language monitoring",
    "industry": "CyberSecurity",
    "stage": "Series B",
    "fundingRaised": "$87M",
    "fundingNum": 87,
    "currentValuation": "$575M",
    "valuationNum": 575,
    "country": "United States",
    "headquarters": "San Francisco, CA",
    "foundedYear": 2019,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 29,
        "valuationDisplay": "$29M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 201,
        "valuationDisplay": "$201M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 431,
        "valuationDisplay": "$431M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 575,
        "valuationDisplay": "$575M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$29M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$36M",
        "valuation": "$201M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$78M",
        "valuation": "$431M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$104M",
        "valuation": "$575M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "203",
    "name": "Saronic Technologies",
    "slug": "saronic-technologies",
    "domain": "saronic.com",
    "website": "https://saronic.com",
    "description": "Maritime defense firm engineering autonomous surface vessels to safeguard naval missions",
    "industry": "Robotics",
    "stage": "Series B",
    "fundingRaised": "$230M",
    "fundingNum": 230,
    "currentValuation": "$1B",
    "valuationNum": 1000,
    "country": "United States",
    "headquarters": "Austin, TX",
    "foundedYear": 2022,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2022",
        "valuation": 50,
        "valuationDisplay": "$50M",
        "event": "Series A"
      },
      {
        "year": "2024",
        "valuation": 350,
        "valuationDisplay": "$350M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 750,
        "valuationDisplay": "$750M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 1000,
        "valuationDisplay": "$1B",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$9M",
        "valuation": "$50M",
        "date": "Mid 2022",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$63M",
        "valuation": "$350M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$135M",
        "valuation": "$750M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$180M",
        "valuation": "$1B",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  },
  {
    "id": "204",
    "name": "Kognitos",
    "slug": "kognitos",
    "domain": "kognitos.com",
    "website": "https://kognitos.com",
    "description": "Generative AI platform turning plain English business instructions into automated enterprise bots",
    "industry": "AI/ML",
    "stage": "Series A",
    "fundingRaised": "$26M",
    "fundingNum": 26,
    "currentValuation": "$100M",
    "valuationNum": 100,
    "country": "United States",
    "headquarters": "San Jose, CA",
    "foundedYear": 2020,
    "employeeCount": "50-200",
    "valuationHistory": [
      {
        "year": "2020",
        "valuation": 10,
        "valuationDisplay": "$10M",
        "event": "Series A"
      },
      {
        "year": "2023",
        "valuation": 35,
        "valuationDisplay": "$35M",
        "event": "Series B"
      },
      {
        "year": "2024",
        "valuation": 75,
        "valuationDisplay": "$75M",
        "event": "Series C"
      },
      {
        "year": "2025",
        "valuation": 100,
        "valuationDisplay": "$100M",
        "event": "Latest Valuation"
      }
    ],
    "fundingRounds": [
      {
        "round": "Series A",
        "amount": "$5M",
        "valuation": "$10M",
        "date": "Mid 2020",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series B",
        "amount": "$6M",
        "valuation": "$35M",
        "date": "Mid 2023",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Series C",
        "amount": "$14M",
        "valuation": "$75M",
        "date": "Mid 2024",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      },
      {
        "round": "Latest Valuation",
        "amount": "$18M",
        "valuation": "$100M",
        "date": "Mid 2025",
        "investors": [
          "Top Tier VC",
          "Global Growth Fund"
        ]
      }
    ]
  }
];
