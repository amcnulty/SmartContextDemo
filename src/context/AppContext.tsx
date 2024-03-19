import { ReactNode, createContext, useEffect, useState } from 'react';
import { type SmartContext, useSmartContext } from 'smart-context-hooks';
import { VideoGame, fakeVideoGames } from '../mockData/VideoGames';
import { FilterCategories } from '../components/CategoryFilter/CategoryFilter';
import { PriceFilters } from '../components/PriceFilter/PriceFilter';
import { DEFAULT_USERNAME } from '../constants/constants';

interface AppContext extends SmartContext {
    setHeaderRenderCount: React.Dispatch<React.SetStateAction<number>>;
    setSideBarRenderCount: React.Dispatch<React.SetStateAction<number>>;
    setContentPanelRenderCount: React.Dispatch<React.SetStateAction<number>>;
    filterGames: (filters: {
        categories?: FilterCategories;
        prices?: PriceFilters;
        inStock?: boolean;
    }) => void;
    setIsCompact: React.Dispatch<React.SetStateAction<boolean>>;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const appContext = createContext<AppContext>({} as AppContext);

interface AppState {
    videoGames: VideoGame[];
    headerRenderCount: number;
    sideBarRenderCount: number;
    contentPanelRenderCount: number;
    isCompact: boolean;
    username: string;
    searchTerm: string;
}

export const selectVideoGames = (state: AppState) => state.videoGames;
export const selectHeaderRenderCount = (state: AppState) =>
    state.headerRenderCount;
export const selectSideBarRenderCount = (state: AppState) =>
    state.sideBarRenderCount;
export const selectContentPanelRenderCount = (state: AppState) =>
    state.contentPanelRenderCount;
export const selectIsCompact = (state: AppState) => state.isCompact;
export const selectUsername = (state: AppState) => state.username;
export const selectSearchTerm = (state: AppState) => state.searchTerm;

interface AllFilters {
    categories?: FilterCategories;
    prices?: PriceFilters;
    inStock?: boolean;
}

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [headerRenderCount, setHeaderRenderCount] = useState(0);
    const [sideBarRenderCount, setSideBarRenderCount] = useState(0);
    const [contentPanelRenderCount, setContentPanelRenderCount] = useState(0);
    const [videoGames, setVideoGames] = useState<VideoGame[]>(fakeVideoGames);
    const [allFilters, setAllFilters] = useState<AllFilters>({});
    const [isCompact, setIsCompact] = useState(() => window.innerWidth < 576);
    const [username, setUsername] = useState(DEFAULT_USERNAME);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let filteredVideoGames: VideoGame[] = fakeVideoGames;
        if (searchTerm) {
            filteredVideoGames = filteredVideoGames.filter((game) =>
                game.name.toUpperCase().includes(searchTerm.toUpperCase())
            );
        }
        setVideoGames(filteredVideoGames);
    }, [searchTerm]);

    useEffect(() => {
        let filteredVideoGames: VideoGame[] = fakeVideoGames;
        if (
            allFilters.categories &&
            Object.values(allFilters.categories).some((isChecked) => isChecked)
        ) {
            filteredVideoGames = filteredVideoGames.filter(
                (game) => allFilters.categories![game.category]
            );
        }
        if (
            allFilters.prices &&
            Object.values(allFilters.prices).some((isChecked) => isChecked)
        ) {
            filteredVideoGames = filteredVideoGames.filter((game) => {
                let result = false;
                if (allFilters.prices?.low && game.price < 20) result = true;
                if (
                    allFilters.prices?.med &&
                    game.price > 19.99 &&
                    game.price < 40
                )
                    result = true;
                if (
                    allFilters.prices?.high &&
                    game.price > 39.99 &&
                    game.price < 60
                )
                    result = true;
                return result;
            });
        }
        if (allFilters.inStock) {
            filteredVideoGames = filteredVideoGames.filter(
                (game) => game.inStock
            );
        }
        setVideoGames(filteredVideoGames);
    }, [allFilters.categories, allFilters.inStock, allFilters.prices]);

    const filterGames = (filters: {
        categories?: FilterCategories;
        prices?: PriceFilters;
        inStock?: boolean;
    }) => {
        setAllFilters(
            (prev) =>
                ({
                    ...prev,
                    ...(!!filters.categories && {
                        categories: filters.categories
                    }),
                    ...(!!filters.prices && { prices: filters.prices }),
                    inStock: filters.inStock
                } satisfies AllFilters)
        );
    };

    const value = useSmartContext(
        {
            headerRenderCount,
            sideBarRenderCount,
            contentPanelRenderCount,
            videoGames,
            isCompact,
            username,
            searchTerm
        },
        {
            setHeaderRenderCount,
            setSideBarRenderCount,
            setContentPanelRenderCount,
            filterGames,
            setIsCompact,
            setUsername,
            setSearchTerm
        }
    );

    return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
