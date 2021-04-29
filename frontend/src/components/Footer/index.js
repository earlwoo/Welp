import "./index.css"

const Footer = () => {
    return (
        <div className="footer__container">
            <a href="https://github.com/earlwoo/Welp">
                <i className="fab fa-github"></i>
                Welp Repository
            </a>
            <div className="footer__devInfo">
                <div>
                    Developer: Earl Woo
                </div>
                <a href="https://www.linkedin.com/in/earl-woo-12737a208/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/earlwoo">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
