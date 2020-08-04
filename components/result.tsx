import React, { useState } from 'react';
import useSWR from 'swr';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

import { Dendrogram } from '../src/models/devil/dendrogram';
import { Devil } from '../src/models/devil/devil';
import { getAll } from '../src/models/devil/get-all';
import Chart from './chart';
import Commons from './commons';
import Information from './information';

type Props = {
  devil: Devil | null;
};

const fetcher = async (url: string): Promise<Dendrogram> => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data as Dendrogram;
};

const Result = ({ devil }: Props) => {
  const devils = getAll();
  const [activeStep, setActiveStep] = useState<number>(0);

  const { data, error } = useSWR<Dendrogram, any>(
    () => devil && `/api/fusion/${devil.no}`,
    fetcher,
  );

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (!devil || !data || error) {
    return (
      <>
        <Typography style={{ marginTop: '20px' }}>
          「Ｄ×２
          真・女神転生リベレーション」で、合体で作れる悪魔の合体チャートを生成します。
        </Typography>
        <ul>
          <li>悪魔全書から召喚できる悪魔を元にチャートを生成します</li>
          <li>必要なマグネタイトは素体のものになります</li>
          <li>合体割引は最大値が適用されます（★5 は 30％、★4 は 50％）</li>
          <li>イベントの割引は適用されていません</li>
          <li>
            合体に掛かるマグネタイトと合体結果の算出は、
            <Link href="https://wikiwiki.jp/d2-megaten-l/%E4%BA%8C%E8%BA%AB%E5%90%88%E4%BD%93">
              Ｄ×２ 真・女神転生リベレーション-5ch- Wiki*
            </Link>
            を参考にしています
          </li>
          <li>
            「女神転生」、「真・女神転生」は、株式会社アトラスの登録商標又は商標です
          </li>
          <li>
            「Ｄ×２ 真・女神転生リベレーション」は、株式会社セガの登録商標です
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        style={{
          paddingRight: 0,
          paddingLeft: 0,
          backgroundColor: 'transparent',
        }}
      >
        {['基本情報', '悪魔全書から召喚', '合体チャート'].map(
          (label, index, array) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {(() => {
                  switch (index) {
                    case 0:
                      return <Information devil={devil} dendrogram={data} />;
                    case 1:
                      return <Commons devils={devils} dendrogram={data} />;
                    case 2:
                      return <Chart dendrogram={data} />;
                  }
                })()}
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack}>
                    戻る
                  </Button>
                  <Button
                    disabled={activeStep === array.length - 1}
                    onClick={handleNext}
                  >
                    次へ
                  </Button>
                </div>
              </StepContent>
            </Step>
          ),
        )}
      </Stepper>
    </>
  );
};

export default Result;
