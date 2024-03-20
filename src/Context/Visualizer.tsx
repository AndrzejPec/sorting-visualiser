import { SortingAlgorithmType } from '@/lib/types';
import { MAX_AIMATION_SPEED } from '@/lib/utils';
import React, { useState, createContext, useContext } from 'react';


interface SortingAlgorithmContextType {
    arrayToSort: number[];
    setArrayToSort: React.Dispatch<React.SetStateAction<number[]>>;
    selectedAlgorithm: SortingAlgorithmType;
    setSelectedAlgorithm: React.Dispatch<React.SetStateAction<SortingAlgorithmType>>;
    isSorting: boolean;
    setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
    animationSpeed: number;
    setAnimationSpeed: React.Dispatch<React.SetStateAction<number>>;
    isAnimationComplete: boolean;
    setIsAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
    resetArrayAndAnimation: () => void;
    runAnimation: () => void;
}

const SortingAlgorithmContext = createContext<SortingAlgorithmContextType | undefined>(undefined);

export const SortingAlgorithProvider = ({ children }: { children: React.ReactNode }) => {
    const [arrayToSort, setArrayToSort] = useState<number[]>([]);
    const [selectedAlgorithm, setSelectedAlgorithm] = 
        useState<SortingAlgorithmType>('bubble');
    const [isSorting, setIsSorting] = useState<boolean>(false);
    const [animationSpeed, setAnimationSpeed] = useState<number>(MAX_AIMATION_SPEED);
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);

    const resetArrayAndAnimation = () => {
        
    }

    const runAnimation = () => {
        
    }

    const value = {
        arrayToSort,
        setArrayToSort,
        selectedAlgorithm,
        setSelectedAlgorithm,
        isSorting,
        setIsSorting,
        animationSpeed,
        setAnimationSpeed,
        isAnimationComplete,
        setIsAnimationComplete,
        resetArrayAndAnimation,
        runAnimation,
    }

    return <SortingAlgorithmContext.Provider value={value}>{children}</SortingAlgorithmContext.Provider>;
}

export const useSortingAlgorithmContext = () => {
    const context = useContext(SortingAlgorithmContext);

    if (context === undefined) {
        throw new Error('useSortingAlgorithmContext must be used within a SortingAlgorithmProvider');
    }

    return context;
}