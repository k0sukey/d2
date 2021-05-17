import React, { useEffect, useMemo, useState } from 'react';
import Tab from '@material-ui/core/Tab';
import MaterialUiTabs from '@material-ui/core/Tabs';

type Props = {
  disabled: boolean;
  onChange: (index: number) => void;
};

const Tabs = ({ disabled, onChange }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs = useMemo(() => {
    return ['基本情報', '悪魔全書から召喚', '合体チャート', '合体パターン'];
  }, []);

  useEffect(() => {
    onChange(activeTab);
  }, [activeTab]);

  return (
    <>
      <MaterialUiTabs
        orientation="vertical"
        value={activeTab}
        onChange={(_, index) => setActiveTab(index)}
        style={{
          width: '30px',
          marginLeft: '10px',
        }}
        TabIndicatorProps={{ style: { left: 0 } }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            disabled={disabled}
            style={{
              width: '30px',
              minWidth: '30px',
              paddingRight: 0,
              paddingLeft: 0,
            }}
            label={
              <span
                style={{
                  writingMode: 'vertical-rl',
                  letterSpacing: '0.25em',
                }}
              >
                {tab}
              </span>
            }
          />
        ))}
      </MaterialUiTabs>
    </>
  );
};

export default Tabs;
