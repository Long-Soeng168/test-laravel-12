import { MyHeroSection } from './components/my-hero-section';
import MyLayout from './layout/layout';

const Index = () => {
    return (
        <MyLayout>

            <img src='assets/images/banner1.png' className='w-full aspect-[21/7] object-cover' />
            <div>
                <MyHeroSection />
            </div>
            {/* <MySlide/>
            <div className='max-w-screen-2xl mx-auto'>
                <MyBottomContent/>
            </div>
            <MySlide/> */}
        </MyLayout>
    );
};

export default Index;
