import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Readme = () => {
  return (
    <>
      <div>
        <Typography style={{ marginTop: '20px' }}>
          「Ｄ×２
          真・女神転生リベレーション」で、合体で作れる悪魔の合体チャートを生成します。
        </Typography>
        <ul style={{ paddingLeft: '20px' }}>
          <li>悪魔全書から召喚できる悪魔を元にチャートを生成します</li>
          <li>
            多身合体・高位召喚限定（魔人や異世界系）の悪魔はチャートの対象になりません
          </li>
          <li>
            必要な総マグネタイトはすべて素体のものになり、合体割引は施設アップグレードの最大値が適用されます（★5
            は 30％、★4 は 50％）。また、イベントの割引は適用されていません
          </li>
          <li>
            合体にかかる総マグネタイトとチャートの算出は、
            <Link
              color="textPrimary"
              underline="always"
              href="https://wikiwiki.jp/d2-megaten-l/%E4%BA%8C%E8%BA%AB%E5%90%88%E4%BD%93"
            >
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
      </div>
    </>
  );
};

export default Readme;
