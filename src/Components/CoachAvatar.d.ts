import type { FC } from 'react';

export type CoachAvatarState = 'idle' | 'listening' | 'speaking' | 'celebrating';

export interface CoachAvatarProps {
  /** Omit entirely to render the interactive demo (state + gaze controls). */
  state?: CoachAvatarState;
}

declare const CoachAvatar: FC<CoachAvatarProps>;
export default CoachAvatar;
