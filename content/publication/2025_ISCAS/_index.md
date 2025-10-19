---
title: '<a href="https://ieeexplore.ieee.org/document/11043343" target="_blank">A Real-time Point Cloud Segmentation System with Optimized Ground Estimation Algorithm and Selective Neural Network</a>'
authors:
- Jihyeon Hwang
- Sangho Lee
- Jueun Jung
- Kyuho Lee
date: 2025-05-28
publication_types: ["2"]  # 0=Unspecified, 1=Journal, 2=Conference paper
publication: "2025 IEEE International Symposium on Circuits and Systems (ISCAS)"
abstract: "This paper introduces a fast and accurate point segmentation system for real-time (< 50 ms) 3D-LiDAR semantic segmentation. The real-time application of 3D point-cloud neural networks (PNNs) for semantic segmentation of LiDAR-measured data faces considerable challenges such as memory overhead and processing delay in its implementation on GPUs due to the significant computational requirements. These challenges arise from the large volume of points and their complex spatial relationships, leading to intense computational and memory usage. To facilitate real-time implementation with high accuracy, a selective point segmentation (SPS) system is proposed with 3 key features: 1) Adaptive ground estimation for the surroundings, excluding the ground from PNN inference, thereby reducing latency by 46.0%, and addressing accuracy reductions due to false positives by implementing 2-step bin skipping; 2) Coarse-grained entropy-and-density-based region skipping (RSK) excludes large areas from ground estimation; and 3) Fine-grained bin skipping (BSK) with z-distribution skips non-ground bins within these areas. Together, the system achieves a processing time of 42.24 ms and a 3D semantic segmentation accuracy of 90.69% at the semantic KITTI dataset."
featured: true
# url_pdf: "https://drive.google.com/file/d/1VuukbmCgdS_Etx0MDTqfY540ECqJvu8l/view?usp=drive_link"
# external: true
url_poster: "https://drive.google.com/file/d/1k5K6V_A6l93efcLpSf8m9Mp_Xnijs21h/view?usp=sharing"
external: true
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
