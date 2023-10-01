import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { ref, get } from 'firebase/database';

export const useUserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = async () => {
        try {
            const usersRef = ref(db, '/usernames');
            const usersSnapshot = await get(usersRef);

            if (usersSnapshot.exists()) {
                const usersData = usersSnapshot.val();
                const usersArray = [];

                for (const key in usersData) {
                    const userData = usersData[key];
                    usersArray.push({
                        username: key,
                        HacktoberFestContributions: userData.HacktoberFestContributions,
                        AcceptedHacktoberFestPRs: userData.AcceptedHacktoberFestPRs,
                        updatedAt: userData.updatedAt,
                    });
                }

                setUsers(usersArray);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return { users, isLoading };
};
