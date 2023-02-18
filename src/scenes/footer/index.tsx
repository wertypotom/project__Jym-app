import React from 'react';
import Logo from '@/assets/Logo.png';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="mx-auto w-5/6 justify-between gap-10 md:flex">
                <div
                    style={{ flexBasis: '50%' }}
                    className="mt-16 md:mt-0"
                >
                    <img
                        src={Logo}
                        alt="logo"
                    />
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ad cupiditate
                        est reprehenderit quidem veritatis nulla voluptas, sapiente dolorum in
                        inventore dolorem ipsum omnis labore atque nihil tenetur voluptatum dicta!
                    </p>
                    <p>© All right reserved</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Lorem, ipsum dolor.</p>
                    <p className="mb-5">Hello world</p>
                    <p>Sign contract with me !</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact us</h4>
                    <p className="my-5">Contact me by the number</p>
                    <p>(666)777-88-88</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
