import { BiLogoTiktok } from 'react-icons/bi'
import { WhatsAppOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'

const Footer = () => {
  return (
    <>
      <section className='flex  flex-col gap-2 items-center'>
        <div className="flex gap-5 text-xl">
          <FacebookOutlined />
          <InstagramOutlined />
          <BiLogoTiktok />
          <WhatsAppOutlined />
        </div>
        <p>Maintaince by Autonomous Technology</p>
      </section>
    </>
  );
};

export default Footer;
