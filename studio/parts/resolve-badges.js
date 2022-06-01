import defaultResolve from 'part:@sanity/base/document-badges';
import { CustomBadge } from '../components/custom-badge';

export default function resolveBadges(props) {
  const badges = defaultResolve(props);
  if (props?.published?.wasDeleted) {
    return [...badges, CustomBadge];
  }
  return badges;
}
