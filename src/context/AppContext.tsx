import { ReactNode, createContext, useState } from 'react';
import { type SmartContext, useSmartContext } from 'smart-context';

interface AppContext extends SmartContext {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setHeaderRenderCount: React.Dispatch<React.SetStateAction<number>>;
    setSideBarRenderCount: React.Dispatch<React.SetStateAction<number>>;
    setContentPanelRenderCount: React.Dispatch<React.SetStateAction<number>>;
}

export const appContext = createContext<AppContext>({} as AppContext);

interface AppState {
    count: number;
    headerRenderCount: number;
    sideBarRenderCount: number;
    contentPanelRenderCount: number;
}

export const selectCount = (state: AppState) => state.count;
export const selectHeaderRenderCount = (state: AppState) =>
    state.headerRenderCount;
export const selectSideBarRenderCount = (state: AppState) =>
    state.sideBarRenderCount;
export const selectContentPanelRenderCount = (state: AppState) =>
    state.contentPanelRenderCount;

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);
    const [headerRenderCount, setHeaderRenderCount] = useState(0);
    const [sideBarRenderCount, setSideBarRenderCount] = useState(0);
    const [contentPanelRenderCount, setContentPanelRenderCount] = useState(0);

    const value = useSmartContext(
        {
            count,
            headerRenderCount,
            sideBarRenderCount,
            contentPanelRenderCount
        },
        {
            setCount,
            setHeaderRenderCount,
            setSideBarRenderCount,
            setContentPanelRenderCount
        }
    );

    return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
