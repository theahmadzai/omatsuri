import React from 'react';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import CursorControl from './CursorControl/CursorControl';
import data from './data';
import classes from './CssCursors.styles.less';

export default function CssCursors() {
  const controls = data.map((group) => {
    const values = group.data.map((value) => (
      <CursorControl key={value} value={value} className={classes.control} />
    ));

    return (
      <div className={classes.group}>
        <SettingsLabel className={classes.title}>{group.title}</SettingsLabel>
        <div className={classes.controls}>{values}</div>
      </div>
    );
  });

  return <Background className={classes.wrapper}>{controls}</Background>;
}
