import { SelectedPage } from '@/types/selectedPage';
import HeaderText from '@/UI/HeaderText/HeaderText';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

type Inputs = {
    name: string;
    email: string;
    message: string;
};

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputClasses = 'mt-5 w-full rounded-lg  bg-primary-300 py-3 px-5 placeholder-white';

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit = async (e: React.FormEvent) => {
        try {
            const isValid = await trigger();

            if (!isValid) {
                e.preventDefault();
            }
        } catch (error) {}
    };

    return (
        <section
            id="contactus"
            className="mx-auto w-5/6 pt-24 pb-32"
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* header */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HeaderText>
                        <span className="text-primary-500">join now</span> to get in shape
                    </HeaderText>

                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quae.
                        Architecto illo excepturi facere qui, saepe alias quis est, odio ex quasi
                        veritatis dolor! Sunt quasi nulla quaerat minima nobis.
                    </p>
                </motion.div>
                {/* form and image */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    {/* form */}
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            method="POST"
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.io/send/werty.potom@gmail.com"
                        >
                            <input
                                type="text"
                                className={inputClasses}
                                placeholder="NAME"
                                {...register('name', {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />

                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === 'required' && 'This field is required !'}
                                    {errors.name.type === 'maxLength' &&
                                        'Max length is 100 characters !'}
                                </p>
                            )}

                            <input
                                type="text"
                                className={inputClasses}
                                placeholder="EMAIL"
                                {...register('email', {
                                    required: true,
                                    pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                                })}
                            />

                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === 'required' && 'This field is required !'}
                                    {errors.email.type === 'pattern' &&
                                        'Enter the correct format of email !'}
                                </p>
                            )}

                            <textarea
                                rows={4}
                                cols={50}
                                className={inputClasses}
                                placeholder="MESSAGE"
                                {...register('message', {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />

                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === 'required' &&
                                        'This field is required !'}
                                    {errors.message.type === 'maxLength' &&
                                        'Max length is 2000 characters !'}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-300  hover:text-white"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </motion.div>

                    {/* image */}

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <img
                                className="w-full"
                                src={ContactUsPageGraphic}
                                alt="Girl in shape"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
