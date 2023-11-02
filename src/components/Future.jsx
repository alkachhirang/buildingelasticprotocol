import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardImg1 from "../assets/images/png/bg-card1.png";
// import CardImg2 from "../assets/images/png/card-Img1.png";
import cardImg3 from "../assets/images/png/CardImg3.png";
import cardImg4 from "../assets/images/png/card-Img4.png";
import cardImg5 from "../assets/images/png/CardImg5.png";
import cardImg6 from "../assets/images/png/CardImg6.png";
import cardImg7 from "../assets/images/png/CardImg7.png";
import cardImg8 from "../assets/images/png/cardImg8.png";
import cardImg9 from "../assets/images/png/cardImg9.png";
import SmallImg1 from "../assets/images/png/Small-Img1.png";
import SmallImg2 from "../assets/images/png/hoverImg.png";
import SmallImg3 from "../assets/images/png/Small-Img3.png";
import SmallImg4 from "../assets/images/png/Small-Img4.png";
import SmallImg5 from "../assets/images/png/SmallImag5.png";
import SmallImg6 from "../assets/images/png/SmallImg6.png";
import SmallImg7 from "../assets/images/png/SmallImg7.png";
import SmallImg8 from "../assets/images/png/SmallImg8.png";
import SmallImg9 from "../assets/images/png/SmallImg9.png";
import CircleImg1 from "../assets/images/png/CircleImg1.png";
import CircleImg3 from "../assets/images/png/CircleImg1.png";
import CircleImg4 from "../assets/images/png/CircleImg4.png";
import CircleImg5 from "../assets/images/png/CircleImg5.png";
import CircleImg6 from "../assets/images/png/CircleImg6.png";
import CircleImg7 from "../assets/images/png/CircleImg7.png";
import CircleImg8 from "../assets/images/png/CircleImg8.png";
import CircleImg9 from "../assets/images/png/CircleImg9.png";
import Arbiturm from "../assets/images/png/Arbitrum.png";
import GMX from "../assets/images/png/GMX.png";
import Vela from "../assets/images/png/Vela.png";
import JonesDao from "../assets/images/png/JonesDao.png";

const Strategies = () => {
    return (
        <>
            <div className="bg_Strategies bg-white py_startegies">
                <Container>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2 className="text-blue fs_46 ff_NeueMachinaBold lh_120 text-capitalize text-center mb-0 pb-3">
                            Future Use Cases (Strategies)
                        </h2>
                        <p className="text-center fs_16  text-black opacity_8 lh_160 ff-raleway mw_882 mb-0 pb_82">
                            Elastic Protocol will continue to pioneer an expanding ecosystem
                            of yield strategies that will cater to DeFi users across a range
                            of blockchains, communities, and interests. Each will help in
                            generating sustainable yield and expanding the utility of the
                            native utility token $EEFI. Here is some of what we are planning
                            and looking into:
                        </p>
                    </div>
                    <Row>
                        <Col lg={4} md={6} className="col-12">
                            <div className="hover_effect position-relative">
                                <img
                                    src={cardImg1}
                                    alt="CardImg1"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    NFT
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg1}
                                        alt="SmallImg1"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        NFT
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg1} alt="CircleImg1" />
                                        <p className="mb-0 text-white">@NFTs</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={SmallImg2}
                                        alt="SmallImg2"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 pt-4 pt-md-0">
                            <div className="position-relative hover_effect">
                                <img
                                    src={cardImg1}
                                    alt="cardImg1"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    NFT
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg1}
                                        alt="SmallImg1"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        NFT
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg1} alt="CircleImg1" />
                                        <p className="mb-0 text-white">@NFTs</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={SmallImg1}
                                        alt="SmallImg1"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 pt-4 pt-lg-0">
                            <div className="position-relative  hover_effect">
                                <img
                                    src={cardImg3}
                                    alt="cardImg3"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal text-uppercase">
                                    OPTIONS
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg3}
                                        alt="SmallImg3"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0 text-uppercase">
                                        OPTIONS
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg3} alt="CircleImg3" />
                                        <p className="mb-0 text-white">@OPTIONS</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={cardImg3}
                                        alt="cardImg3"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 py-4">
                            <div className="position-relative hover_effect">
                                <img
                                    src={cardImg4}
                                    alt="cardImg4"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    BONDs
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg4}
                                        alt="SmallImg4"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        BONDs
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg4} alt="CircleImg4" />
                                        <p className="mb-0 text-white">@BONDs</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={cardImg4}
                                        alt="cardImg4"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 py-lg-4">
                            <div className="position-relative hover_effect">
                                <img
                                    src={cardImg5}
                                    alt="cardImg5"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    Social Trading
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg5}
                                        alt="SmallImg5"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        Social Trading
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg5} alt="CircleImg5" />
                                        <p className="mb-0 text-white">@Social Trading</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={cardImg5}
                                        alt="cardImg5"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 py-lg-4 pt-4">
                            <div className="position-relative  hover_effect">
                                <img
                                    src={cardImg6}
                                    alt="cardImg6"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    PERPS and Delta Neutral
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg6}
                                        alt="SmallImg6"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        PERPS and Delta Neutral
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg6} alt="CircleImg6" />
                                        <p className="mb-0 text-white">@PERPS and Delta Neutral</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={cardImg6}
                                        alt="cardImg6"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 pt-4 pt-lg-0">
                            <div className="position-relative  hover_effect">
                                <img
                                    src={cardImg7}
                                    alt="cardImg7"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    STABLECOINs
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg7}
                                        alt="SmallImg7"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        STABLECOINs
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg7} alt="CircleImg7" />
                                        <p className="mb-0 text-white">@STABLECOINs</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={cardImg7}
                                        alt="cardImg7"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 pt-4 pt-lg-0">
                            <div className="position-relative  hover_effect">
                                <img
                                    src={cardImg8}
                                    alt="cardImg8"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    Ai Smart Vaults
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg8}
                                        alt="SmallImg8"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        Ai Smart Vaults
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg8} alt="CircleImg8" />
                                        <p className="mb-0 text-white">@Ai Smart Vaults</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={cardImg8}
                                        alt="cardImg8"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="col-12 pt-4 pt-lg-0">
                            <div className="position-relative hover_effect">
                                <img
                                    src={cardImg9}
                                    alt="cardImg9"
                                    className="w-100 rounded-2 cards_img"
                                />
                                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                                    Ai Smart Vaults
                                </button>
                                <div className="img_box">
                                    <img
                                        src={SmallImg9}
                                        alt="SmallImg9"
                                        className="w-100 mw_74 rounded-2"
                                    />
                                </div>
                                <div className="position-absolute nft_card">
                                    <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                                        Ai Smart Vaults
                                    </p>
                                    <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                                        24 NFTs
                                    </p>
                                    <div className="btn_box d-flex align-items-center gap-2 mt-3">
                                        <img src={CircleImg9} alt="CircleImg9" />
                                        <p className="mb-0 text-white">@Ai Smart Vaults</p>
                                    </div>
                                </div>
                                <div className="hover_card position-absolute top-0 start-0 opacity-0 w-100 h-100">
                                    <img
                                        src={cardImg9}
                                        alt="cardImg9"
                                        className="w-100 card_img"
                                    />
                                    <p className="text-white lh_120 ff_NeueMachinaUltrabold fs_4md text-uppercase pt-4 mb-0">
                                        REAL YIELD
                                    </p>
                                    <p className="lh_160 ff-raleway fw-normal text-white opacity_08 fs_6sm pt-3 pb-3 mb-0">
                                        These are strategies that will explore other Real Yield
                                        ecosystems outside of Olympus DAO. For example GMX - the
                                        leading leverage platform that{" "}
                                    </p>
                                    <p className="lh_160 fw-normal fs_6sm ff-raleway text-white opacity_08 pb-4 mb-0">
                                        distributes 100% of fees. We are also looking at Vela
                                        Exchange, Jones DAO and many others on Arbitrum.
                                    </p>
                                    <p className="lh_160 fs_md text-white ff-raleway fw-semibold mb-0">
                                        Platforms:{" "}
                                    </p>
                                    <div className="d-flex gap-2">
                                        <img src={Arbiturm} alt="Arbiturm" className="common_img" />
                                        <img src={GMX} alt="GMX" className="common_img" />
                                        <img src={Vela} alt="Vela" className="common_img" />
                                        <img src={JonesDao} alt="JonesDao" className="common_img d-none d-lg-block" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Strategies;