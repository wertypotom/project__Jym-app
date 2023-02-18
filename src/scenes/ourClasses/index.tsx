import Image1 from '@/assets/image1.png';
import Image2 from '@/assets/image2.png';
import Image3 from '@/assets/image3.png';
import Image4 from '@/assets/image4.png';
import Image5 from '@/assets/image5.png';
import Image6 from '@/assets/image6.png';
import { IOurClasses } from '@/types/ourClasses';
import { SelectedPage } from '@/types/selectedPage';
import HeaderText from '@/UI/HeaderText/HeaderText';
import { motion } from 'framer-motion';
import Class from './Class';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const ourClasses: IOurClasses[] = [
    {
        id: 1,
        title: 'Weight training classes',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde culpa ut beatae dolorem et id quis adipisci libero error.',
        image: Image1,
    },
    {
        id: 2,
        title: 'Yoga classes',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde culpa ut beatae dolorem et id quis adipisci libero error.',
        image: Image2,
    },
    {
        id: 3,
        title: 'Ab Core classes',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde culpa ut beatae dolorem et id quis adipisci libero error.',
        image: Image3,
    },
    {
        id: 4,
        title: 'Adventure classes',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde culpa ut beatae dolorem et id quis adipisci libero error.',
        image: Image4,
    },
    {
        id: 5,
        title: 'Fitness classes',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde culpa ut beatae dolorem et id quis adipisci libero error.',
        image: Image5,
    },
    {
        id: 6,
        title: 'Trainig classes',
        description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde culpa ut beatae dolorem et id quis adipisci libero error.',
        image: Image6,
    },
];

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="ourclasses"
            className="w-full bg-primary-100 py-28"
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HeaderText>our classes</HeaderText>
                        <p className="py-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </motion.div>
                <div
                    id="class"
                    className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden"
                >
                    <ul className="w-[2800px] whitespace-nowrap ">
                        {ourClasses.map(item => (
                            <Class
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default OurClasses;
