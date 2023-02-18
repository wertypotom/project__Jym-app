import { IOurClasses } from '@/types/ourClasses';
import image1 from './../../assets/image1.png';

type Props = Partial<IOurClasses>;

const Class = ({ description, image, title }: Props) => {
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[480px]">
            <div
                className={
                    'absolute z-20 flex h-[380px] w-[480px] flex-col items-center justify-center whitespace-normal rounded-md bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90'
                }
            >
                <p className="text-2xl">{title}</p>
                <p className="mt-5">{description}</p>
            </div>

            <img
                className="rounded-md"
                src={image}
                alt={title}
            />
        </li>
    );
};

export default Class;
