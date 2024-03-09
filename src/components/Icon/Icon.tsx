import user from './user.svg';

export enum IconName {
    user
}

const ICON_NAME_TO_FILE_MAP: { [key in IconName]: string } = {
    [IconName.user]: user
};

interface Props {
    size?: number;
    name: IconName;
}

const Icon = ({ size = 16, name }: Props) => {
    return <img src={ICON_NAME_TO_FILE_MAP[name]} height={size} />;
};

export default Icon;
