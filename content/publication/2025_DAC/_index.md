---
title: '<a href="https://ieeexplore.ieee.org/document/11132909" target="_blank">BEVSA: A Real-Time Bird’s-Eye-View Semantic Segmentation Accelerator for Multi-Camera System</a>'
authors:
- Sangho Lee
- Jueun Jung
- Wuyoung Jang
- Jihyeon Hwang 
- Kyuho Lee
date: 2025-06-22
publication_types: ["2"]  # 0=Unspecified, 1=Journal, 2=Conference paper
publication: "2025 IEEE Design Automation Conference (DAC)"
abstract: "A bird’s-eye-view (BEV) semantic segmentation accelerator (BEVSA) is proposed for real-time 3D space perception in multi-camera system (MCS). The view transformation from multi-camera-view to BEV obstructs the real-time operation on edge devices through 68.3 ms of time consumption during BEV pooling, which requires sorting and irregular memory access over wide searching space. Moreover, the 69.1% high average input activation sparsity of the segmentation process for the transformed BEV features results in excessive meaningless computations. For the real-time implementation of BEV semantic segmentation on edge platforms, this paper proposes two key features: 1) Block-decomposed hierarchical BEV pooling cluster that partitions the searching space in an MCS-suitable way and supports parallel pooling, achieving 43.2× speedup for BEV pooling over the edge computing platform; 2) Coarse-to-fine-grained zero skipping convolution cluster, which conducts coarse-grained zero skipping for all-zero channels and tile-wise fine-grained zero skipping, improving the convolution throughput by 1.61×. Implemented with 28 nm technology, and evaluated on two representative MCS datasets, BEVSA finally achieves 23.1 frames-per-second of real-time BEV segmentation throughput with 167.4× higher energy-per-frame over the edge computing platform."
featured: true
# url_pdf: ""
# external: true
# url_slide: ""
# external: true
# url_code: "https://github.com/jihyeon/icml2024"
# url_dataset: ""
# url_video: "https://youtube.com/myvideo"
# url_poster: "/uploads/icml2024_poster.pdf"
# url_source: "/uploads/icml2024_source.pdf"
# url_custom:
#   name: Project Page
#   url: "https://jihyeon.dev/icml2024"
image:
  preview_only: true
---
