import { useEffect, useState } from "react";
import * as Updates from 'expo-updates';

export function useExpoUpdate(){
    // Two cases is encapsulated. Cannot download latest & Downloaded but cannot run
    const [isLatest, setIsLatest] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function checkAndUpdate(){
            try {
                const {isAvailable} = await Updates.checkForUpdateAsync();
                if (isAvailable){
                    await Updates.fetchUpdateAsync();
                }
                setIsLatest(true);
            } catch (e){
                console.error(e);
            } finally {
                if (Updates.isEmergencyLaunch){
                    setIsLatest(false);
                }
                setIsLoading(false);
            }
        }
        checkAndUpdate();
    }, []);

    return {isLoading, isLatest};
}