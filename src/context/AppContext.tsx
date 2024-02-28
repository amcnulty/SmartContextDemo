import { ReactNode, createContext, useState } from 'react';
import { SmartContext, useSmartContext } from 'smart-context';

interface AppContext extends SmartContext {
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const appContext = createContext<AppContext>({} as AppContext);

interface AppState {
    count: number;
}

export const selectCount = (state: AppState) => state.count;

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [count, setCount] = useState(0);

    const value = useSmartContext({ count }, { setCount });

    return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
