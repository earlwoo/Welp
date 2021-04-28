import "./index.css"

const Footer = () => {
    return (
        <div className="footer__container">
            <a href="https://github.com/earlwoo/Welp">
                Welp, a Yelp Clone
            </a>
            <div className="footer__devInfo">
                <div>
                    Developer: Earl Woo
                </div>
                <a href="https://www.linkedin.com/in/earl-woo-12737a208/">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/earlwoo">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
