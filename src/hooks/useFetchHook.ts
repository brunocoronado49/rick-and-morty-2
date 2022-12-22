import React, { useEffect, useState } from 'react'

export const useFetchHook = () => {
    const [characters, steCharacters] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    
}