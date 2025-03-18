import { createContext, useContext, useState, useEffect } from "react";
import { getThreads } from "../api/api";

const ThreadContext = createContext();

export function ThreadProvider({ children }) {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        getThreads().then(setThreads);
    }, []);

    return (
        <ThreadContext.Provider value={{ threads, setThreads }}>
            {children}
        </ThreadContext.Provider>
    );
}

export function useThreads() {
    return useContext(ThreadContext);
}

export default ThreadContext;