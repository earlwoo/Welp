import "./index.css"

const Footer = () => {
    return (
        <div className="footer__container">
            <a href="https://github.com/earlwoo/Welp">
                <i className="fab fa-github"></i>
                <div className="foot_text">Welp Repository</div>
            </a>
            <div className="footer__devInfo">
                <div className="developer_text">
                    Developer: Earl Woo
                </div>
                <a href="https://www.linkedin.com/in/earl-woo-12737a208/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/earlwoo" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
