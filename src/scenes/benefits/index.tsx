import HeaderText from '@/UI/HeaderText/HeaderText';
import { SelectedPage } from '@/types/selectedPage';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion, Variants as MotionVariants } from 'framer-motion';
import BenefitItem from '@/UI/BenefitItem/BenefitItem';
import { IBenefits } from '@/types/benefits';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import CustomButton from '@/UI/CustomButton/CustomButton';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const benefits: IBenefits[] = [
    {
        id: 1,
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Art Facilities',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ea ipsum aperiam quaerat, saepe rem magni quas at tempore? Quasi!',
    },
    {
        id: 2,
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: 'Hundreds of diverse classes',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ea ipsum aperiam quaerat, saepe rem magni quas at tempore? Quasi!',
    },
    {
        id: 3,
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Experts and Pro Trainers',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ea ipsum aperiam quaerat, saepe rem magni quas at tempore? Quasi!',
    },
];

const container: MotionVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

function Benefits({ setSelectedPage }: Props) {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* Header */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HeaderText>More Than just a Gym</HeaderText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to get you to your fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    variants={container}
                >
                    {benefits.map((item) => (
                        <BenefitItem
                            key={item.id}
                            {...item}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* graphics and description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* graphic */}
                    <img
                        className="mx-auto"
                        src={BenefitsPageGraphic}
                        alt="happy member of our gym"
                    />
                    {/* description */}
                    <div>
                        {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HeaderText>
                                        Milltions of happy members getting <span className="text-primary-500">fit</span>
                                    </HeaderText>
                                </motion.div>
                            </div>
                        </div>

                        {/* description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim.
                                Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit
                                egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum
                                arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.
                            </p>
                        </motion.div>

                        {/* button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles"></div>
                            <CustomButton setSelectedPage={setSelectedPage}>Join Now</CustomButton>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Benefits;
