interface OpenSourceEntry {
    title: string
    description: string
    technologies: string[]
    repo_id: string
    isOwnProject: boolean 
    contribution?: string
    citation?: string    
    href?: string
    imgSrc?: string
  }
  
  const openSourceData: OpenSourceEntry[] = [
    {
      title: 'Freeact: Autonomous Agents using Code Actions',      
      description:
        `Freeact is a lightweight library that empowers AI agents to solve complex and open-ended problems using [code actions](https://arxiv.org/abs/2402.01030). 

Code action agents have the capability to write and execute code directly to solve tasks and interact with their environment. This allows them to freely combine predefined tools or develop new ones using the extensive Python ecosystem, significantly enhancing their problem-solving capabilities and adaptability. 

I actively contribute to the project, working on model integrations, performance evaluations, and developing practical agent use cases.

This [demo](https://www.youtube.com/watch?v=M0T5ebMDvN0) of freeact shows how an agent dynamically generates and executes code to perform web searches and return accurate answers based on real-time data.
        `,
      isOwnProject: false,
      contribution: 'https://github.com/search?q=repo%3Agradion-ai%2Ffreeact+author%3Acstub&type=commits&s=committer-date&o=asc',
      technologies: [
        'Python', 
        'Anthropic',        
        'Open AI',  
        'Gemini',      
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://github.com/gradion-ai/freeact',
      repo_id: 'gradion-ai/freeact',
    },
    {
      title: 'Generative Internet Search with Local LLMs',      
      description:
        `I created a generative internet search tool using [Retrieval-Augmented Generation (RAG)](https://qdrant.tech/articles/what-is-rag-in-ai/). The tool accepts user queries in natural language and searches the internet for information, filters and re-ranks the result by relevance and generates responses based on the search results using a LLM. It is designed for local deployment, utilizing smaller open LLMs (specifically [Llama3-8B](https://huggingface.co/krasserm/Meta-Llama-3-8B-Instruct-GGUF)) and a [local metasearch engine](https://github.com/searxng/searxng), eliminating the need for external search-API keys.

The search could be used either as a standalone tool or by an agent equipped with tool-handling capabilities. This is illustrated in the following [notebook](https://github.com/krasserm/bot-with-plan/blob/master/planner_finetuned.ipynb), where the internet search tool is integrated into an agentic workflow that uses tools, implementing an agentic RAG approach.
 
For more information see [this blog post](blog/internet-rag-search).`,
      isOwnProject: false,
      contribution: 'https://github.com/search?q=repo%3Akrasserm%2Fbot-with-plan+author%3Acstub&type=pullrequests',
      technologies: [
        'Python', 
        'PyTorch',
        'HF Transformers',
        'HF Bitsandbytes',
        'HF Sentence Transformers',
        'HF Datasets',
        'llama.cpp',
        'LangChain',
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://cstub.github.io/posts/internet-rag-search-with-open-llms/',
      repo_id: 'krasserm/bot-with-plan',
    },    
    {
      title: 'Perceiver IO',      
      description:
        `A modular implementation of the Perceiver family of model architectures ([Perceiver](https://arxiv.org/abs/2103.03206), [Perceiver IO](https://arxiv.org/abs/2107.14795), and [Perceiver AR](https://arxiv.org/abs/2202.07765)) in PyTorch. The library integrates with [PyTorch Lightning](https://lightning.ai/docs/pytorch/stable/) for distributed training and [Hugging Face](https://huggingface.co/) for inference.

I made various improvements to the library and implemented:
- [**Optical flow estimation**](https://colab.research.google.com/github/krasserm/perceiver-io/blob/main/examples/inference.ipynb#scrollTo=f3c6605f) predicting the apparent motion of each pixel between two consecutive video frames and
- [**Symbolic audio modeling**](https://colab.research.google.com/github/krasserm/perceiver-io/blob/main/examples/inference.ipynb#scrollTo=AZAN_Jq4UzKN) showcasing how to use a Perceiver AR audio model to generate symbolic (MIDI) audio data, by training Perceiver AR on the GiantMIDI-Piano dataset.`,
      isOwnProject: false,
      contribution: 'https://github.com/search?q=repo%3Akrasserm%2Fperceiver-io+author%3Acstub&type=pullrequests',
      technologies: [
        'Python',
        'Pytorch',
        'Torchvision', 
        'Pytorch Lightning',
        'Hugging Face Transformers',
        'Hugging Face Datasets',
        'Fairscale'        
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://github.com/krasserm/perceiver-io',
      repo_id: 'krasserm/perceiver-io',      
    },
    {
      title: 'A machine learning based Intrusion Detection System',      
      description:
        `This project is a proof of concept for a machine learning-based system able to identify malicious network traffic. It addresses the limitations of traditional signature-based methods by learning normal network behavior from benign data packets, enabling the system to detect anomalous data flows and potentially novel types of attacks. 
        
The project is comprised of a [research repository](https://github.com/cstub/ml-ids), a fully functional [REST API](https://github.com/cstub/ml-ids-api) for network attack detection and an [API client](https://github.com/cstub/ml-ids-api-client).`,
      isOwnProject: true,
      citation: 'https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=%22cstub%2Fml-ids%22',
      technologies: [
        'Python', 
        'TensorFlow',
        'Keras',
        'Catboost',
        'Scikit-learn',
        'Pandas',
        'Hyperopt',
        'Flask',
        'Docker',
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://github.com/cstub/ml-ids',
      repo_id: 'cstub/ml-ids',
    },
    {
      title: 'Image Captioning Transformer',      
      description:
        `Extension of [pytorch/fairseq](https://github.com/pytorch/fairseq) with [Transformer](https://arxiv.org/abs/1706.03762)-based image captioning models. I implemented an evaluation pipeline for models using MS COCO Caption Evaluation.`,
      isOwnProject: false, 
      contribution: 'https://github.com/search?q=repo%3Akrasserm%2Ffairseq-image-captioning+author%3Acstub&type=pullrequests',
      technologies: [
        'Python',
        'Pytorch',
        'Fairseq',        
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://github.com/krasserm/fairseq-image-captioning',
      repo_id: 'krasserm/fairseq-image-captioning',
    },
    {
      title: 'Eventuate',      
      description:
        `[Eventuate](https://rbmhtechnology.github.io/eventuate/overview.html) is a toolkit for building applications composed of event-driven and event-sourced services that communicate via causally ordered event streams on a single node or distributed up to global scale.

I was responsible for the [Vert.x integration](https://rbmhtechnology.github.io/eventuate/adapters/vertx.html) into Eventuate and developed the Vert.x adapter, enabling bidirectional event communication between event logs and the Vert.x event bus, incorporating features like at-least-once delivery guarantees and enhanced event metadata handling. I also made various improvements to the Java API and the corresponding documentation.`,
      isOwnProject: false,
      contribution: 'https://github.com/search?q=repo%3ARBMHTechnology%2Feventuate+author%3Acstub&type=pullrequests',
      technologies: [
        'Scala',
        'Java',
        'Akka',
        'Apache Cassandra',
        'Apache Spark',
        'LevelDB',
        'Eventuate',
        'Vert.x',
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://github.com/rbmhtechnology/eventuate',
      repo_id: 'rbmhtechnology/eventuate',
    },
    {
      title: 'Alpakka Kafka',      
      description:
        `The [Alpakka Kafka connector](https://github.com/akka/alpakka-kafka) enables the integration of [Apache Kafka](https://kafka.apache.org/) with [Akka Streams](https://doc.akka.io/docs/akka/current/stream/index.html).

I enhanced the Kafka producer's reliability by implementing deterministic failure handling that prevented message reordering and ensured consistent behavior when encountering send failures.`,
      isOwnProject: false,
      contribution: 'https://github.com/search?q=repo%3Aakka%2Falpakka-kafka+author%3Acstub&type=pullrequests',
      technologies: [
        'Scala',
        'Java',
        'Akka',
        'Akka Streams',
        'Apache Kafka',        
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://github.com/akka/alpakka-kafka',
      repo_id: 'akka/alpakka-kafka',
    },
    {
      title: 'Event sourcing for Akka Streams',      
      description:
        `The [akka-stream-eventsourcing](https://github.com/krasserm/akka-stream-eventsourcing) project that provides persistence via event sourcing for [Akka Streams](https://doc.akka.io/docs/akka/current/stream/index.html).

I implemented a generic Akka-Serializer that used [Google Protobuf](https://protobuf.dev) to handle the serialization of events.`,
      isOwnProject: false, 
      contribution: 'https://github.com/search?q=repo%3Akrasserm%2Fakka-stream-eventsourcing+author%3Acstub&type=pullrequests',
      technologies: [
        'Scala',
        'Akka',
        'Akka Streams',
        'Apache Kafka',        
      ],
      imgSrc: '/static/images/canto.webp',
      href: 'https://github.com/krasserm/akka-stream-eventsourcing',
      repo_id: 'krasserm/akka-stream-eventsourcing',
    },            
  ]
  
  export default openSourceData