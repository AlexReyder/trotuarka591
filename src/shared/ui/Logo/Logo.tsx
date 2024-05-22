import cls from './Logo.module.scss';
import LogoURL from 'shared/assets/icons/logo/logo-full.url.svg'

interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {

    return (
        <a href="/" className={cls.LogoWrapper}>
            <img src={LogoURL} alt='ООО "Ариана"' className={cls.Logo} />
        </a>
    )
};