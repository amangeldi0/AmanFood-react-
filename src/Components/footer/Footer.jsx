import './footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>locations</h3>
                        <a href="#">BISHKEK</a>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#">home</a>
                        <a href="#">restaurants</a>
                        <a href="#">about</a>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#">+996704411779</a>
                        <a id='gmail' href="#">amanimanbekov12@gmail.com</a>
                        <a href="">Kyrgyzstan, Bishkek</a>
                    </div>
                    <div className="box">
                        <h3>follow us</h3>
                        <a href="https://www.instagram.com/imanbekov_aa/">facebook</a>
                        <a href="https://www.instagram.com/imanbekov_aa/">twitter</a>
                        <a href="https://www.instagram.com/imanbekov_aa/">instagram</a>
                    </div>
                </div>
                <div className="credit"> AMANFOOD 2022 <span> Amangeldi Imanbekov</span></div>
            </div>
        </div>
    );
};

export default Footer;