import Image from 'next/image';
import banner from '../public/assets/images/banners/img1.jpg'

const CustomImage = () => {
    return (
        <div>
            <Image
                className='w-full h-auto mx-auto'
                src={banner}
                width={650}
                height={366}
                quality={80}
                placeholder={'blur'}
                alt=''
            />
        </div>
    );
};

export default CustomImage;