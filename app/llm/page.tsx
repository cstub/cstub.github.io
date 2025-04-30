import { genPageMetadata } from 'app/seo'
import Pre from 'pliny/ui/Pre'
import 'css/prism.css'

export const metadata = genPageMetadata({ title: 'LLM Input' })

const CodeBlock = ({ children }) => {
  return (
    <Pre>
      <div className="code-block">{children}</div>
    </Pre>
  )
}

export default function LLMInput() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            llms.txt
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            This page contains content for your favorite Large Language Model. Simply copy the text
            into the prompt and start asking questions about me. If you prefer not to use your LLM
            of choice, try the{' '}
            <a
              href="https://chatgpt.com/g/g-67a4c156836081919e948d23207c4a66-christoph-s-ml-ai-professional-profile"
              className="text-primary-500 hover:text-primary-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              custom GPT
            </a>
            .
          </p>
        </div>
        <div className="container py-12">
          <div className="prose max-w-none text-gray-600 dark:text-gray-400">
            <CodeBlock>
              {`# Personal Information

## About Me

I am a freelance AI engineer with a strong background in machine learning, MLOps and distributed systems. 
I have over 5 years of experience building AI systems and more than a decade designing distributed systems.

I work through every phase of the AI lifecycle—from early prototypes to large-scale production systems.

As the co-founder of gradion.ai, I'm building autonomous AI agents designed to act as virtual team members that automate business processes.

Outside of client projects, I'm also engaged in [open-source work](/open-source).

## Professional Journey

I've helped companies like MerlinOne and Canto build and deploy large-scale AI search platforms that process and index millions of images and videos 
in real time, combining distributed inference (PyTorch, Triton, Kubernetes) with distributed vector databases (Milvus) for scalable, 
low-latency retrieval. These platforms are used by thousands of customers including The Associated Press - enabling them to use advanced visual image and video search simply 
by describing visual content. 
I also scaled computer vision models on AWS to process over 100M+ assets and conducted model fine-tuning to optimize performance on domain-specific data.

At cyan Security Group, I designed a comprehensive MLOps platform (Databricks, MLFlow, AWS) that automated data pipelines, 
model deployment, and real-time monitoring —allowing rapid iteration from prototype to production. I also trained and integrated computer vision models 
into the cyan security suite, including child protection and content filtering products, to detect malicious or sensitive web content.

As a distributed systems engineer, I have developed a reactive microservices framework and built a 
distributed messaging infrastructure to enable high-throughput, event-driven communication—ensuring scalability and fault tolerance across mission-critical client services.

## Skills & Expertise

* AI Engineering - Implementation of AI systems from RAG solutions to agentic systems.
* Machine Learning - End-to-end model development, training, fine-tuning, and deployment.
* MLOps & Platform Engineering - Building robust pipelines that streamline data management, model development, deployment and monitoring.
* Distributed Systems & Architecture - Designing reliable, fault-tolerant infrastructures that efficiently scale with workload demands.

## Technologies

🤖 AI & Machine Learning
PyTorch, Hugging Face (Transformers, Datasets, Accelerate, TGI), Scikit-learn, LangChain, Haystack, llama.cpp, Triton, Faiss, Milvus, Weaviate, Qdrant

🧠 Model APIs
Anthropic, OpenAI, Gemini

🛠️ Application Development & Data Engineering
FastAPI, Flask, Apache Kafka, Apache Spark, Delta Lake, Databricks

🌐 Infrastructure
Docker, Kubernetes, AWS, Azure, Google Cloud Platform, Terraform, GitHub Actions

# Portfolio

## Enterprise-Scale Visual Search
Client: Canto Inc.
Role: Principal Machine Learning Engineer (Freelance)

Developed a cloud-native, event-driven platform that scaled Canto's AI Visual Search to thousands of customers. This platform enabled large-scale processing of customer assets (images, videos) and real-time search across millions of these assets. This was achieved by implementing distributed inference for asset encoding and leveraging distributed vector databases for scalable, low-latency retrieval.

Building on my previous work on the Merlin Accelerated Intelligence Suite, the Canto AI Visual Search solution leveraged its machine learning models and search capabilities.

I also contributed to multiple AI research prototypes at Canto, most notably a hybrid search prototype that expanded AI Visual Search to include customer-specific asset metadata.

Technologies: Python, PyTorch, Milvus, Nvidia Triton, Apache Kafka, FastAPI, Kubernetes, AWS

## AI-Powered Visual Intelligence Suite
Client: MerlinOne Inc.
Role: Principal Machine Learning Engineer (Freelance)

I played a key role in the development of the Merlin Accelerated Intelligence (AI) Suite, a comprehensive set of AI-powered tools that enhanced MerlinOne's digital asset management platform. 

This suite powers the AI-based search for the AP Newsroom and is also integral to Canto's AI Visual Search. Its success was a key factor in MerlinOne's acquisition by Canto in 2023.

Key contributions:
* Visual Video Search: An high-performance, low-latency AI search engine for semantic video queries, allowing users to search for scenes by describing the visual content instead of metadata.
* Facial Recognition in Videos: A face recognition system enabling identity-based searches in videos.
* Model fine-tuning: Fine-tuning of AI models and search indices on customer-specific data for optimal performance.
* Inference pipeline: A highly scalable AWS inference pipeline to handle millions of images and video assets efficiently.
* System design: Advancing the system design and implementation of all AI services, encompassing a broad spectrum of areas such as asset processing, real-time and batch inference algorithms and search functionalities.

Technologies: Python, PyTorch, Faiss, Flask, MongoDB, OpenCV, ffmpeg, AWS

## Enterprise MLOps Platform: From Data to Deployment
Client: cyan Security Group GmbH
Role: Machine Learning Team Lead

Designed and implemented an end-to-end ML platform covering the entire model lifecycle—from data handling to deployment. 
      
The platform provided interactive data management, automated model training, versioning for both data and models, and comprehensive model governance. It also offered a centralized hub for monitoring model performance, tracking model versions and managing model deployments.

Overall, it optimized company-wide ML workflows, boosted efficiency, and enabled automated, reproducible model deployments. 

In addition to the technical work, I also acted as technical and organizational lead of the machine learning team at cyan Security.

Technologies: Python, PyTorch, MLflow, Spark, Delta Lake, Databricks, AWS, Azure, Google Cloud Platform

## Deep Learning Content Filter for Security Applications
Client: cyan Security Group GmbH
Role: Machine Learning Engineer

I enhanced cyan Security's child protection and content filtering products by training and integrating deep learning models.

My work involved training deep learning computer vision models to classify web page content based on visual features, improving the system's ability to filter inappropriate content and control access.

These enhancements to the cyan security suite were adopted by major telecom providers to safeguard their business and private customers.

Technologies: Python, TensorFlow, Keras, MLflow

## Global Media Streaming Platform
Client: Red Bull Media House
Role: Distributed Systems Engineer (Freelance)

Developed the content playout management platform for Red Bull TV's online streaming service, enabling reliable content delivery to millions of users worldwide.

Built on a reactive microservice architecture and distributed messaging infrastructure I was previously working on, the platform provided a highly scalable, fault-tolerant foundation for Red Bull TV's global streaming needs.

Technologies: Java, Apache Kafka, Vertx

## Event-Driven Messaging for Media Services
Client: Red Bull Media House
Role: Distributed Systems Engineer (Freelance)

Designed and developed a distributed messaging infrastructure, to enable event-driven communication across all services in the client architecture. The system provided reliable asynchronous messaging, at-least-once message handling, and transactional support.

This infrastructure ensured reliable service communication, significantly enhancing system scalability and fault tolerance.

To make the messaging layer easier to use, I developed user-friendly client libraries to abstract the messaging layer's complexity.

Technologies: Java, Apache Kafka, Vertx

## Reactive Microservices Framework for High-Performance Systems
Client: Red Bull Media House
Role: Distributed Systems Engineer (Freelance)

Led the development of a reactive microservice framework used for all client-facing services, improving consistency and reliability across the organization. The framework was highly scalable and fault-tolerant, enabling the creation of reactive, high-performance microservices. 
      
It provided common libraries for building reactive microservices, including application scaffolding, service discovery, monitoring and messaging, reducing redundancy and accelerating development across teams.

Technologies: Java, Vertx

## Enterprise Banking API & Reporting Suite
Client: s IT Solutions
Role: Senior Software Engineer

As the technical lead on multiple projects, I provided strategic oversight and guided the application development team in selecting tools and frameworks.
      
I also led the implementation of a RESTful web API for fund-related data and built a reporting application for private banking customers, seamlessly integrating it into the online banking platform.

Technologies: Java, Spring Boot

# Open Source Projects

## Freeact: Autonomous Agents using Code Actions

Freeact is a lightweight library that empowers AI agents to solve complex and open-ended problems using code actions. 

Code action agents have the capability to write and execute code directly to solve tasks and interact with their environment. This allows them to freely combine predefined tools or develop new ones using the extensive Python ecosystem, significantly enhancing their problem-solving capabilities and adaptability. 

I actively contribute to the project, working on model integrations, performance evaluations, and developing practical agent use cases.

This demo of freeact shows how an agent dynamically generates and executes code to perform web searches and return accurate answers based on real-time data.

Technologies: Python, Anthropic, Open AI, Gemini

## Generative Internet Search with Local LLMs

I created a generative internet search tool using Retrieval-Augmented Generation (RAG). The tool accepts user queries in natural language and searches the internet for information, filters and re-ranks the result by relevance and generates responses based on the search results using a LLM. It is designed for local deployment, utilizing smaller open LLMs (specifically Llama3-8B) and a local metasearch engine, eliminating the need for external search-API keys.

The search could be used either as a standalone tool or by an agent equipped with tool-handling capabilities. This is illustrated in the following notebook, where the internet search tool is integrated into an agentic workflow that uses tools, implementing an agentic RAG approach.

Technologies: Python, PyTorch, HF Transformers, HF Bitsandbytes, HF Sentence Transformers, HF Datasets, llama.cpp, LangChain

## Perceiver IO

A modular implementation of the Perceiver family of model architectures (Perceiver, Perceiver IO, and Perceiver AR) in PyTorch. The library integrates with PyTorch Lightning for distributed training and Hugging Face for inference.

I made various improvements to the library and implemented:
- Optical flow estimation predicting the apparent motion of each pixel between two consecutive video frames and
- Symbolic audio modeling showcasing how to use a Perceiver AR audio model to generate symbolic (MIDI) audio data, by training Perceiver AR on the GiantMIDI-Piano dataset.

Technologies: Python, Pytorch, Torchvision, Pytorch Lightning, Hugging Face Transformers, Hugging Face Datasets, Fairscale

## A machine learning based Intrusion Detection System

This project is a proof of concept for a machine learning-based system able to identify malicious network traffic. It addresses the limitations of traditional signature-based methods by learning normal network behavior from benign data packets, enabling the system to detect anomalous data flows and potentially novel types of attacks. 
        
The project is comprised of a research repository, a fully functional REST API for network attack detection and an API client.

Technologies: Python, TensorFlow, Keras, Catboost, Scikit-learn, Pandas, Hyperopt, Flask, Docker

## Image Captioning Transformer

Extension of pytorch/fairseq with Transformer-based image captioning models. I implemented an evaluation pipeline for models using MS COCO Caption Evaluation.

Technologies: Python, Pytorch, Fairseq

## Eventuate

Eventuate is a toolkit for building applications composed of event-driven and event-sourced services that communicate via causally ordered event streams on a single node or distributed up to global scale.

I was responsible for the Vert.x integration into Eventuate and developed the Vert.x adapter, enabling bidirectional event communication between event logs and the Vert.x event bus, incorporating features like at-least-once delivery guarantees and enhanced event metadata handling. I also made various improvements to the Java API and the corresponding documentation.

Technologies: Scala, Java, Akka, Apache Cassandra, Apache Spark, LevelDB, Eventuate, Vert.x

## Alpakka Kafka

The Alpakka Kafka connector enables the integration of Apache Kafka with Akka Streams.

I enhanced the Kafka producer's reliability by implementing deterministic failure handling that prevented message reordering and ensured consistent behavior when encountering send failures.

Technologies: Scala, Java, Akka, Akka Streams, Apache Kafka

## Event sourcing for Akka Streams

The akka-stream-eventsourcing project that provides persistence via event sourcing for Akka Streams.

I implemented a custom Akka-Serializer that used Google Protobuf to handle the serialization of events.

Technologies: Scala, Akka, Akka Streams, Apache Kafka`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </>
  )
}
