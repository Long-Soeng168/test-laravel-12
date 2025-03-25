    import { MySlide } from '@/components/my-slide';
import { MyHeroSection } from './components/my-hero-section';
import MyLayout from './layout/layout';
import { MyBottomContent } from './components/my-bottom-content';

const Index = () => {
    return (
        <MyLayout>

            <img src='assets/images/banner1.png' className='w-full aspect-[21/9]' />
            <div className='max-w-screen-2xl mx-auto'>
                <MyHeroSection />
            </div>
            <MySlide/>
            <div className='max-w-screen-2xl mx-auto'>
                <MyBottomContent/>
            </div>
            <MySlide/>
        </MyLayout>
    );
};

export default Index;
