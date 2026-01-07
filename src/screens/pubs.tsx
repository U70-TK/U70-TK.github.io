import {
    Box,
    Typography,
    Divider,
} from "@mui/material";
import PublicationItem from "../components/pub-item";
import type { PubItem } from "../components/pub-item";
import CopyRightBar from "../components/copyright-bar";

import REHGPic from "../assets/REHG.png"
import REHGPdf from "../assets/REHG.pdf"

import UGSTNNPic from "../assets/UGSTNN.png"
import UGSTNNPdf from "../assets/UGSTNN.pdf"

import STGCNSVDPic from "../assets/STGCN-SVD.png"
import STGCNSVDPdf from "../assets/STGCN-SVD.pdf"

const pubsData: PubItem[] = [
    {
        image: { path: STGCNSVDPic, title: "De-Noising is All You Need: An Svd-Based Method to Enhance the Performance of Graph Neural Networks in Traffic Flow Prediction" },
        title: "De-Noising is All You Need: An Svd-Based Method to Enhance the Performance of Graph Neural Networks in Traffic Flow Prediction",
        authors: "Zesheng Cheng, Yangyang Qi, Xiaoyang Xin, Tiankuan Wang, Bangyang Wei, Ziyuan Gu",
        conference: "SSRN Preprint 4886773",
        year: "2024",
        abstract: "High-quality traffic flow data may provide planners with a basis for designing road capacity, pavement and intersection control, etc., thus assisting in the construction of a more rational traffic network. In this paper, a new approach to improve the performance of traffic flow prediction models is proposed. Based on the researches of graph neural networks by spectral graph and graph signal processing theory, this approach combines low-pass filter and de-nosing process with graph convolutional neural networks. In particular, this study applies k-order Singular Value Decomposition process as de-noising method and simply added it to the Spatial Temporal Graph Convolutional Network model, an earlier application of graph convolutional module in traffic flow prediction tasks. The proposed model, tested on several public datasets, performs better than or similar to the state-of-the-art baseline model. Therefore, it is believed that it may provide a different perspective for discussing the application of graph neural networks on the traffic flow prediction tasks.",
        pdfUrl: STGCNSVDPdf,
        websiteUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4886773",
    },
    {
        image: { path: UGSTNNPic, title: "UG-STNN: A Spatial-Temporal Neural Network Based on Unsupervised Graph Representation Module for Traffic Flow Prediction" },
        title: "UG-STNN: A Spatial-Temporal Neural Network Based on Unsupervised Graph Representation Module for Traffic Flow Prediction",
        authors: "Enwei Zhang, Zesheng Cheng, Tiankuan Wang, Dongwei Liu",
        conference: "SMC 2024",
        year: "2024",
        abstract: "Accurate and efficient traffic flow prediction helps to build an intelligent transportation system and improve the travel experience in daily life. In this study, a new Spatial-Temporal Neural Network Based on Unsupervised Graph Representation Module (UG-STNN) is proposed to improve the graph convolution module, which uses unsupervised learning to extract features in spatial dimensions, and it can learn the structural and feature information in the graph better. Our UG-STNN uses fewer convolutional layers to reduce the number of parameters, decrease the complexity of the model, and improve performance and accuracy. From the experimental results of UG-STNN on different test datasets, the model can approach or even achieve better prediction results compared with other models, which well illustrates the accuracy and stability of the UG-STNN model.",
        pdfUrl: UGSTNNPdf,
        websiteUrl: "https://ieeexplore.ieee.org/abstract/document/10830927",
    },
    {
        image: { path: REHGPic, title: "REHG: A Recommender Engine Based on Heterogeneous Graph" },
        title: "REHG: A Recommender Engine Based on Heterogeneous Graph",
        authors: "Xiaoyang Xin, Zesheng Cheng, Tiankuan Wang, Mengqiu Yan, Ruixuan Zhao, Chong Peng & Jianbo Li",
        conference: "WASA 2024",
        year: "2024",
        abstract: `Recommendation systems are extensively utilized across diverse domains with the aim of suggesting the most appropriate items to individual users. An effective recommendation engine provides valuable guidance for daily life. 
        Therefore, improving the efficiency of recommender systems has become a prominent subject of interest in both industrial and academic circles. The majority of high-performing models in recommendation tasks utilize binary homogeneous graph convolutional methods and collaborative filtering as their foundational structures. These models are simple in structure, accurate, and efficient in recommendation tasks. However, owing to the constraints of the binary homogeneous graph’s structure, these models are unable to incorporate supplementary information during operation, thereby hindering the full utilization of diverse and efficient data. To fill the research gaps, this study introduces a novel recommendation system named REHG, which is grounded on directed heterogeneous graphs. Additionally, the study devises two experiments to assess its performance across various testing datasets. These experiments offer compelling evidence to support the superior performance of the proposed REHG model over common baseline models across different evaluation criteria. Furthermore, the study explores the feasibility of enhancing interoperability among various recommender system models.`,
        pdfUrl: REHGPdf,
        websiteUrl: "https://link.springer.com/chapter/10.1007/978-3-031-71464-1_29",
    },
];

const PubsSrn = () => {
    return (
        <>
            <Box
                sx={{
                    maxWidth: "80%",
                    mx: "auto",
                    py: 6,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 600 }}
                >
                    Publications
                </Typography>

                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600 }}
                >
                    Note: Currently I don't have any first author publication that I'm proud of. Please come back one year later (hopefully)!
                </Typography>

                <Divider />

                <>
                    {pubsData.map((item, index) => (
                        <PublicationItem key={index} item={item} />
                    ))}
                </>
            </Box>
            <CopyRightBar />
        </>
    );
};

export default PubsSrn;
