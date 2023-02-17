import { SelectedPage } from '@/types/types';
import React from 'react';
import CustomButton from '@/UI/CustomButton/CustomButton';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphics from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
            {/* image and main header */}
            <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
                {/* main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* headings */}
                    <div>
                        <div>
                            <div>
                                <img
                                    src={HomePageText}
                                    alt="home page text"
                                />
                            </div>
                        </div>

                        <p>
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes that you Dream of.. Get
                            Your Dream Body now
                        </p>
                    </div>

                    {/* actions */}
                    <div>
                        <CustomButton setSelectedPage={setSelectedPage}>Join Now</CustomButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>

                {/* image */}
                <div>
                    <img
                        src={HomePageGraphics}
                        alt="home-pageGraphics"
                    />
                </div>
            </div>

            {/* sponsors */}
            {isAboveMediumScreen && (
                <div>
                    <div>
                        <div>
                            <img
                                src={SponsorRedBull}
                                alt="redbull-sponsor"
                            />
                            <img
                                src={SponsorForbes}
                                alt="forbes-sponsor"
                            />
                            <img
                                src={SponsorFortune}
                                alt="fortune-sponsor"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;
