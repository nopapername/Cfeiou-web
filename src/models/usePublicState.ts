import { useState } from 'react';

export default function usePublicState() {
  const [loading, setLoading] = useState(false);
  const [isMinScreen, setIsMinScreen] = useState(false);

  return {
    loading,
    isMinScreen,
    setLoading,
    setIsMinScreen,
  };
}
