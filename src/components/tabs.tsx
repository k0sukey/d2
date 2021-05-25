import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

import Hexagon from './hexagon';

type Props = {
  disabled: boolean;
  onChange: (index: number) => void;
};

const Tabs = ({ disabled, onChange }: Props) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = useMemo(() => {
    return ['基本情報', '悪魔全書', 'チャート', 'パターン'];
  }, []);

  useEffect(() => {
    onChange(activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handleHashchange = () => {
      setActiveTab(0);
    };

    router.events.on('hashChangeStart', handleHashchange);
    return () => {
      router.events.off('hashChangeStart', handleHashchange);
    };
  }, []);

  return (
    <>
      {tabs.map((label, index) => (
        <Hexagon
          key={`tab-${index}`}
          width="50px"
          height="50px"
          label={label}
          active={activeTab === index}
          disabled={disabled}
          style={{ marginRight: index !== tabs.length - 1 ? '10px' : '0px' }}
          onClick={() => setActiveTab(index)}
        />
      ))}
    </>
  );
};

export default Tabs;
