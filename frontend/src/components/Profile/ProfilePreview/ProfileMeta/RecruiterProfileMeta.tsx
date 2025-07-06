import React from 'react';
import cn from 'classnames';
import { MetaItem } from '@/controllers/recruiterProfile/recruiterProfile.hooks.ts/useRecruiterProfileMetaItems';
import typography from '@/ui/typography/typography.module.scss';
import { IconLocation } from '@/ui/icons/general/IconLocation';
import { RecruiterProfileMetaItems } from '@/controllers/recruiterProfile/recruiterProfile.typedefs';
import styles from './ProfileMeta.module.scss';

interface Props {
  items: MetaItem[]
}

// eslint-disable-next-line max-len
const metaIcons: Partial<Record<RecruiterProfileMetaItems, JSX.Element | null>> = {
  [RecruiterProfileMetaItems.City]: <IconLocation />,
  [RecruiterProfileMetaItems.CompanyName]: null,
  [RecruiterProfileMetaItems.Position]: null,
};

export const RecruiterProfileMeta = React.memo<Props>((props) => {
  const { items } = props;

  return (
    <ul className={styles.metaWrapper}>
      {items.map((item) => (
        <li
          className={cn(styles.recruiterMetaItem, typography.smallHeading)}
          key={item.name}
        >
          {metaIcons[item.name]}
          {item.text}
        </li>
      ))}
    </ul>
  );
});
