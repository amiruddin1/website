import React, { useState, useEffect } from "react";
import { Modal, Typography } from "antd";
import "./Gallery.css";

const { Title } = Typography;

export default function Gallery() {
    const mediaItems = [
        "./Media/Gallery/1.jpg",
        "./Media/Gallery/2.jpg",
        "./Media/Gallery/3.jpg",
        "./Media/Gallery/4.jpg",
        "./Media/Gallery/5.jpg",
        "./Media/Gallery/6.jpg",
        "./Media/Gallery/7.jpg",
        "./Media/Gallery/8.jpg",
        "./Media/Gallery/9.mp4",
        "./Media/Gallery/10.jpg",
        "./Media/Gallery/11.jpg",
        "./Media/Gallery/12.jpg",
        "./Media/Gallery/13.jpg",
        "./Media/Gallery/14.jpg",
        "./Media/Gallery/15.jpg",
        "./Media/Gallery/16.jpg",
        "./Media/Gallery/17.jpg",
        "./Media/Gallery/18.jpg",
        "./Media/Gallery/19.jpg",
        "./Media/Gallery/20.jpg",
        "./Media/Gallery/21.jpg",
    ];

    const [visible, setVisible] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(null);
    const [isVideo, setIsVideo] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCardClick = (src) => {
        setIsVideo(src.endsWith(".mp4"));
        setCurrentSrc(src);
        setVisible(true);
    };

    const closeModal = () => {
        setVisible(false);
    };

    return (
        <>
            <div className="main-holder">
                <Title level={2} style={{ textAlign: "center", marginBottom: "20px" }}>
                    Our Gallery
                </Title>
                <div className={`masonry-gallery ${visible ? "blurred" : ""}`}>
                    {mediaItems.map((src, index) => (
                        <div
                            key={index}
                            className="media-item"
                            onClick={() => handleCardClick(src)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Open ${src.endsWith(".mp4") ? "video" : "image"} ${index + 1}`}
                            onKeyDown={(e) => e.key === "Enter" && handleCardClick(src)}
                        >
                            {src.endsWith(".mp4") ? (
                                <video
                                    src={src}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                    className="gallery-video"
                                />
                            ) : (
                                <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Full-Screen Modal */}
                <Modal
                    open={visible}
                    footer={null}
                    onCancel={closeModal}
                    centered
                    className="fullscreen-modal"
                    closeIcon={<span className="close-icon">X</span>}
                >
                    {isVideo ? (
                        <video src={currentSrc} controls className="fullscreen-video">
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={currentSrc} alt="Fullscreen Preview" className="fullscreen-image" />
                    )}
                </Modal>
            </div>

        </>
    );
}
