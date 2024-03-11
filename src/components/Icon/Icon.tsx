import catalog from './catalog.svg';
import chat from './chat.svg';
import filter from './filter.svg';
import heart from './heart.svg';
import tag from './tag.svg';
import user from './user.svg';

export enum IconName {
    catalog,
    chat,
    filter,
    heart,
    tag,
    user
}

const ICON_NAME_TO_FILE_MAP: { [key in IconName]: string } = {
    [IconName.catalog]: catalog,
    [IconName.chat]: chat,
    [IconName.filter]: filter,
    [IconName.heart]: heart,
    [IconName.tag]: tag,
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
