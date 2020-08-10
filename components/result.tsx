import React, { useState } from 'react';
import useSWR from 'swr';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';

import { Dendrogram } from '../src/models/devil/dendrogram';
import { Devil } from '../src/models/devil/devil';
import { getAll } from '../src/models/devil/get-all';
import { getCommons } from '../src/models/fusion/get-commons';
import { getSumKarma } from '../src/models/fusion/get-sum-karma';
import { getSumMagnetite } from '../src/models/fusion/get-sum-magnetite';
import Chart from './chart';
import Commons from './commons';
import Information from './information';
import Readme from './readme';

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
    return <Readme />;
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
                      return (
                        <Information
                          devil={devil}
                          magnetite={getSumMagnetite(data)}
                          karma={getSumKarma(data)}
                        />
                      );
                    case 1:
                      return (
                        <Commons devils={devils} commons={getCommons(data)} />
                      );
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
