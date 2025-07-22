interface PortfolioEntry {
    title: string
    client: string
    role: string
    description: string
    responsibilities: string[]
    technologies: string[]
    href?: string
    imgSrc?: string
  }
  
  const portfolioData: PortfolioEntry[] = [
    {
      title: 'AI Engineering and Consulting Services',
      client: 'Gradion AI',
      role: 'Founder',
      description:
        `We are an IT consulting firm specializing in **machine learning and agentic AI projects**. With extensive expertise in ML and AI, combined with decades of experience in software development and systems engineering, we create custom solutions that are **intelligent, meet customer requirements and perform reliably in production environments**. 
        
In-house, we are currently developing a group of AI agents collaborating with us to run our business. Our focus is on agents that collaborate with entire teams, rather than just individual users. To be most useful for team members, we provide agents with the full context of team dynamics. We also conduct research on agents capable of collaborative and autonomous skill learning.`,
      responsibilities: [        
      ],
      technologies: [    
      ],
      imgSrc: '/static/images/gradion-ai.png',
      href: 'https://www.gradion.ai',
    },
    {
      title: 'Enterprise-Scale Visual Search',
      client: 'Canto Inc.',
      role: 'Principal Machine Learning Engineer · Freelance',
      description:
        `Developed a **cloud-native, event-driven platform** that scaled [Canto's AI Visual Search](https://www.canto.com/product/ai-visual-search/) to **thousands of customers**. This platform enabled large-scale processing of customer assets (images, videos) and real-time search across millions of these assets. This was achieved by implementing distributed inference for asset encoding and leveraging distributed vector databases for scalable, low-latency retrieval.

Building on my previous work on the Merlin Accelerated Intelligence Suite, the Canto AI Visual Search solution leveraged its machine learning models and search capabilities.

I also contributed to multiple AI research prototypes at Canto, most notably a hybrid search prototype that expanded AI Visual Search to include customer-specific asset metadata.`,
      responsibilities: [
        'Conception, architecture design and implementation of the AI Visual Search platform.',
        'Working on AI research prototypes.',
      ],
      technologies: [
        'Python', 
        'PyTorch', 
        'Milvus', 
        'Nvidia Triton', 
        'Apache Kafka', 
        'FastAPI', 
        'Kubernetes', 
        'AWS',
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://www.canto.com',
    },
    {
      title: 'AI-Powered Visual Intelligence Suite',
      client: 'MerlinOne Inc.',
      role: 'Principal Machine Learning Engineer · Freelance',
      description: 
      `I played a key role in the development of the Merlin Accelerated Intelligence (AI) Suite, a comprehensive set of AI-powered tools that enhanced MerlinOne's digital asset management platform. 

**This suite powers the AI-based search for the [AP Newsroom](https://www.ap.org/media-center/press-releases/2023/millions-of-ap-images-and-video-now-available-on-single-platform-with-ai-powered-search/) ([try it out](https://newsroom.ap.org/)) and is also integral to [Canto's AI Visual Search](https://www.canto.com/product/ai-visual-search/)**.
*Its success was a key factor in MerlinOne's acquisition by Canto in 2023.*

My key contributions included the following:

* **Visual Video Search**: An high-performance, low-latency AI search engine for semantic video queries, allowing users to search for scenes by describing the visual content instead of metadata.
* **Facial Recognition in Videos**: A face recognition system enabling identity-based searches in videos.
* **Model fine-tuning**: Fine-tuning of AI models and search indices on customer-specific data for optimal performance.
* **Inference pipeline**: A highly scalable AWS inference pipeline to handle millions of images and video assets efficiently.
* **System design**: Advancing the system design and implementation of all AI services, encompassing a broad spectrum of areas such as asset processing, real-time and batch inference algorithms and search functionalities.`,
      responsibilities: [
        'Developed a visual search feature that allows users to search for information by uploading an image.',
      ],
      technologies: [
        'Python',
        'PyTorch',
        'Faiss',
        'Flask',
        'MongoDB',
        'OpenCV',
        'ffmpeg',
        'AWS',
      ],
      imgSrc: '/static/images/merlinone.webp',
      href: 'https://www.canto.com/product/merlin/',
    },
    {
      title: 'Enterprise MLOps Platform: From Data to Deployment',
      client: 'cyan Security Group GmbH',
      role: 'Machine Learning Team Lead',
      description: 
      `Designed and implemented an **end-to-end ML platform covering the entire model lifecycle**—from data handling to deployment. 
      
The platform provided interactive data management, automated model training, versioning for both data and models, and comprehensive model governance. It also offered a centralized hub for monitoring model performance, tracking model versions and managing model deployments.

Overall, it optimized company-wide ML workflows, boosted efficiency, and enabled automated, reproducible model deployments. 

In addition to the technical work, I also acted as technical and organizational lead of the machine learning team at cyan Security.`,
      responsibilities: [
        'Leading the Machine Learning team at cyan Security',
        'Conception, architecture, design and implementation of the ML platform',        
      ],
      technologies: [
        'Python', 'PyTorch', 'MLflow', 'Spark', 'Delta Lake', 'Databricks', 'AWS', 'Azure', 'Google Cloud Platform'
      ],
      imgSrc: '/static/images/ml_infra.webp',
      href: 'https://www.cyansecurity.com',     
    },
    {
      title: 'Deep Learning Content Filter for Security Applications',
      client: 'cyan Security Group GmbH',
      role: 'Machine Learning Engineer',
      description: 
      `I enhanced cyan Security's [child protection](https://www.cyansecurity.com/child_protection/) and [content filtering](https://www.cyansecurity.com/ondevice/) products by **training and integrating deep learning models**.

My work involved training deep learning computer vision models to classify web page content based on visual features, improving the system's ability to filter inappropriate content and control access.

These enhancements to the cyan security suite were adopted by major telecom providers to safeguard their business and private customers.
`,
      responsibilities: [
        'Research and development of deep learning models for content classification.',
        'Integration of ML models into the Cyan Security suite.',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'Keras',
        'MLflow',        
      ],
      imgSrc: '/static/images/cyan.webp',
      href: 'https://www.cyansecurity.com',
    },
    {
      title: 'Global Media Streaming Platform',
      client: 'Red Bull Media House',
      role: 'Distributed Systems Engineer · Freelance',
      description: 
      `Developed the content playout management platform for [Red Bull TV's online streaming service](https://www.redbull.com/at-de/discover), enabling reliable content delivery to **millions of users worldwide**.

Built on a reactive microservice architecture and distributed messaging infrastructure I was previously working on, the platform provided a highly scalable, fault-tolerant foundation for Red Bull TV's global streaming needs.
`,
      responsibilities: [
        'Design and development of the RBTV content playout management platform.',
      ],
      technologies: [
        'Java',
        'Apache Kafka',
        'Vertx',
      ],
      imgSrc: '/static/images/rbtv.webp',
      href: 'https://www.redbullmediahouse.com',
    },
    {
      title: 'Event-Driven Messaging for Media Services',
      client: 'Red Bull Media House',
      role: 'Distributed Systems Engineer · Freelance',
      description: 
      `Designed and developed a **distributed messaging infrastructure, to enable event-driven communication across all services** in the client architecture. The system provided reliable asynchronous messaging, at-least-once message handling, and transactional support.

This infrastructure ensured reliable service communication, significantly enhancing system scalability and fault tolerance.

To make the messaging layer easier to use, I developed user-friendly client libraries to abstract the messaging layer's complexity.
      `,
      responsibilities: [
        'Design and development of the distributed messaging infrastructure.',                
        'Development of user-friendly client libraries to abstract the messaging layer\'s complexity.',                
      ],
      technologies: [
        'Java',
        'Apache Kafka',
        'Vertx',
      ],
      imgSrc: '/static/images/rb_infra.jpeg',
      href: 'https://www.redbullmediahouse.com',
    },
    {
      title: 'Reactive Microservices Framework for High-Performance Systems',
      client: 'Red Bull Media House',
      role: 'Distributed Systems Engineer · Freelance',
      description: 
      `Led the development of a **reactive microservice framework used for all client-facing services**, improving consistency and reliability across the organization. The framework was highly scalable and fault-tolerant, enabling the creation of reactive, high-performance microservices. 
      
It provided common libraries for building reactive microservices, including application scaffolding, service discovery, monitoring and messaging, reducing redundancy and accelerating development across teams.`,
      responsibilities: [
        'Conception, architecture, design and implementation of the microservice framework.'        
      ],
      technologies: [
        'Java',
        'Vertx',
      ],
      imgSrc: '/static/images/nodes.webp',
      href: 'https://www.redbullmediahouse.com',
    },
    {
      title: 'Enterprise Banking API & Reporting Suite',
      client: 's IT Solutions',
      role: 'Senior Software Engineer',
      description: 
      `As the **technical lead on multiple projects**, I provided strategic oversight and guided the application development team in selecting tools and frameworks.
      
I also led the implementation of a RESTful web API for fund-related data and built a reporting application for private banking customers, seamlessly integrating it into the online banking platform.`,
      responsibilities: [
        'Conception, architecture, design and implementation of the microservice framework.'        
      ],
      technologies: [
        'Java',
        'Spring Boot',
      ],
      imgSrc: '/static/images/banking.webp',
      href: 'https://www.linkedin.com/company/s-it-solutions/',
    },
  ]
  
  export default portfolioData