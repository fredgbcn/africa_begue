import React from "react";
import './footer.css';


const Footer = () =>{
    return (<div className="body_footer">
        <div className="logo_footer"></div>
        <div className="footer_content_logos">
        <h5>CONTACT</h5>
            <div className="footer_email_logos">
                <div className="footer_txt">
                    <h5>ASSOCIATION AFRICA BÉGUÉ</h5>
                    <p>africabegue.asso@gmail.com</p>
                </div>
                <a href='https://www.facebook.com/africabegueasso' className="a_fb"></a>
                <a href="https://www.instagram.com/africabegue_asso/?hl=fr" className="a_insta"></a>
            </div>
        </div>

    </div>
    
    
    )
}

export default Footer;