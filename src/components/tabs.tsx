import React, { useEffect, useState } from 'react';
import Tab from '@material-ui/core/Tab';
import MaterialUiTabs from '@material-ui/core/Tabs';

type Props = {
  disabled: boolean;
  onChange: (index: number) => void;
};

const Tabs = ({ disabled, onChange }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

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
        <Tab
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
              基本情報
            </span>
          }
        />
        <Tab
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
              悪魔全書から召喚
            </span>
          }
        />
        <Tab
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
              合体チャート
            </span>
          }
        />
      </MaterialUiTabs>
    </>
  );
};

export default Tabs;
