import { MySlide } from '@/components/my-slide';
import { MyBottomContent } from './components/my-bottom-content';
import { MyHeroSection } from './components/my-hero-section';
import MyLayout from './layout/layout';
import { MyFeatureProducts } from './components/my-feature-products';

const Index = () => {
    return (
        <MyLayout>
            <img src="assets/demo-images/banner1.png" className="aspect-[21/7] w-full object-cover" />
            <MyHeroSection />
            <MySlide />
            <MyBottomContent />
            <MySlide />
            <MyFeatureProducts/>
        </MyLayout>
    );
};

export default Index;
