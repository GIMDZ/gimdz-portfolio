import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">{/*<p>Terms & Conditions</p>*/}</div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon group cursor-pointer w-12 h-12 flex items-center justify-center"
              style={{
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${socialImg.glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={socialImg.imgPath}
                alt={socialImg.name}
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Giannina Miñano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
